/* =========================================================
   calculos.js — regras do plano de estudos (sem HTML aqui)
   Separar as contas da tela facilita testar e entender.
   ========================================================= */
App.calc = (function () {
  const U = App.util;
  const DURACAO_FASE_MESES = 2;

  /** Data de início do plano (ou hoje, se ainda não foi definida) */
  function inicio(estado) {
    return estado.config.inicio ? U.lerISO(estado.config.inicio) : U.hoje();
  }

  /** Início e fim (exclusivo) de cada fase */
  function periodoFase(estado, numero) {
    const ini = U.somarMeses(inicio(estado), (numero - 1) * DURACAO_FASE_MESES);
    const fim = U.somarMeses(inicio(estado), numero * DURACAO_FASE_MESES);
    return { ini, fim };
  }

  /**
   * Fase em que o calendário está hoje.
   * Retorna 1, 2 ou 3; 4 quando os 6 meses já acabaram; 0 se ainda não começou.
   */
  function faseAtual(estado, hoje = U.hoje()) {
    if (hoje < inicio(estado)) return 0;
    for (let n = 1; n <= 3; n++) {
      if (hoje < periodoFase(estado, n).fim) return n;
    }
    return 4;
  }

  /** Mês do plano (1 a 6) */
  function mesAtual(estado, hoje = U.hoje()) {
    const ini = inicio(estado);
    let meses = (hoje.getFullYear() - ini.getFullYear()) * 12 + (hoje.getMonth() - ini.getMonth());
    if (hoje.getDate() < ini.getDate()) meses--;
    return Math.max(1, meses + 1);
  }

  /**
   * Adiantado ou atrasado?
   * Esperado = assuntos das fases já encerradas + a parte proporcional
   * da fase atual (pelos dias que já passaram). Margem de ±10% do esperado
   * (mínimo 1 assunto) conta como "em dia".
   */
  function ritmo(estado, hoje = U.hoje()) {
    let esperado = 0;
    for (let n = 1; n <= 3; n++) {
      const { ini, fim } = periodoFase(estado, n);
      const total = estado.assuntos.filter((a) => a.fase === n).length;
      // +1: no primeiro dia já se espera a cota daquele dia
      const fracao = Math.min(1, Math.max(0, (U.diasEntre(ini, hoje) + 1) / U.diasEntre(ini, fim)));
      esperado += total * fracao;
    }
    const feitos = estado.assuntos.filter((a) => a.estudado).length;
    const diferenca = feitos - esperado;
    const margem = Math.max(1, esperado * 0.1);
    let status = 'em-dia';
    if (diferenca > margem) status = 'adiantado';
    else if (diferenca < -margem) status = 'atrasado';
    return { status, feitos, esperado: Math.round(esperado), diferenca: Math.round(diferenca) };
  }

  /**
   * Sequência de dias seguidos estudados.
   * - Domingo é neutro: não quebra e não soma.
   * - Se hoje ainda não foi marcado, a contagem começa de ontem
   *   (o dia ainda não acabou, então não quebra a sequência).
   */
  function sequencia(diasConcluidos, hoje = U.hoje()) {
    let dia = hoje;
    if (!diasConcluidos[U.iso(dia)]) dia = U.somarDias(dia, -1);
    let total = 0;
    for (let i = 0; i < 3660; i++) {
      if (dia.getDay() === 0) { dia = U.somarDias(dia, -1); continue; }
      if (!diasConcluidos[U.iso(dia)]) break;
      total++;
      dia = U.somarDias(dia, -1);
    }
    return total;
  }

  /**
   * Qual plano da semana (1 = segunda … 6 = sábado) é o de hoje.
   * O cronograma é uma fila, não um calendário: se você faltar,
   * o plano que ficou para trás vira o do próximo dia de estudo.
   * - Dia já marcado: o plano que foi feito nele.
   * - Senão: o seguinte ao último dia estudado (depois do sábado volta à segunda).
   * - Sem nenhum dia estudado: o plano do dia da semana.
   * Marcações antigas (true) contam como o plano do dia da semana daquela data.
   */
  function planoDoDia(diasConcluidos, hoje = U.hoje()) {
    const chave = U.iso(hoje);
    const feito = (data, valor) => (typeof valor === 'number' ? valor : U.lerISO(data).getDay());
    if (diasConcluidos[chave]) {
      const p = feito(chave, diasConcluidos[chave]);
      if (p >= 1 && p <= 6) return p;
    }
    const anteriores = Object.keys(diasConcluidos).filter((k) => k < chave && diasConcluidos[k]).sort();
    for (let i = anteriores.length - 1; i >= 0; i--) {
      const p = feito(anteriores[i], diasConcluidos[anteriores[i]]);
      if (p >= 1 && p <= 6) return (p % 6) + 1;
    }
    return hoje.getDay() === 0 ? 1 : hoje.getDay();
  }

  /** % de assuntos estudados de uma matéria (ou de todas, se materia for null) */
  function progressoAssuntos(estado, materia = null, fase = null) {
    const lista = estado.assuntos.filter((a) =>
      (materia === null || a.materia === materia) && (fase === null || a.fase === fase));
    const feitos = lista.filter((a) => a.estudado).length;
    return { feitos, total: lista.length, pct: U.porcentagem(feitos, lista.length) };
  }

  /** Todas as questões: as do app + as cadastradas pelo usuário */
  function todasQuestoes(estado) {
    return App.dados.questoes.concat(estado.questoesExtras);
  }

  /**
   * Devolve uma cópia da questão com as alternativas embaralhadas
   * (e o índice da correta ajustado), para a resposta certa não
   * ficar sempre na mesma letra.
   */
  function embaralharOpcoes(questao) {
    const ordem = U.embaralhar(questao.opcoes.map((_, i) => i));
    return Object.assign({}, questao, {
      opcoes: ordem.map((i) => questao.opcoes[i]),
      correta: ordem.indexOf(questao.correta),
    });
  }

  /* ---------- Revisão espaçada ----------
     Depois de estudar um tópico, revise em 1, 3, 7 e 15 dias.
     Guardamos só a data da PRÓXIMA revisão e quantas já foram feitas;
     os intervalos entre uma revisão e a seguinte são 1, 2, 4 e 8 dias. */
  const INTERVALOS_REVISAO = [1, 2, 4, 8];

  /** Marca/desmarca um assunto como estudado e agenda (ou cancela) as revisões */
  function marcarEstudado(estado, assunto, estudado, hoje = U.hoje()) {
    assunto.estudado = estudado;
    if (estudado) estado.revisoes[assunto.id] = { proxima: U.iso(U.somarDias(hoje, INTERVALOS_REVISAO[0])), feitas: 0 };
    else delete estado.revisoes[assunto.id];
  }

  /** Revisões que vencem hoje ou já passaram, das mais atrasadas para as mais novas */
  function revisoesPendentes(estado, hoje = U.hoje()) {
    return Object.entries(estado.revisoes)
      .map(([id, r]) => ({ id, ...r, assunto: estado.assuntos.find((a) => a.id === id) }))
      .filter((r) => r.assunto && r.feitas < INTERVALOS_REVISAO.length && U.lerISO(r.proxima) <= hoje)
      .sort((a, b) => (a.proxima < b.proxima ? -1 : 1))
      .map((r) => ({ assunto: r.assunto, numero: r.feitas + 1, total: INTERVALOS_REVISAO.length,
                     atraso: U.diasEntre(U.lerISO(r.proxima), hoje) }));
  }

  /** Conta uma revisão feita e agenda a próxima (a partir de hoje) */
  function registrarRevisao(estado, id, hoje = U.hoje()) {
    const r = estado.revisoes[id];
    if (!r) return;
    r.feitas++;
    if (r.feitas < INTERVALOS_REVISAO.length) r.proxima = U.iso(U.somarDias(hoje, INTERVALOS_REVISAO[r.feitas]));
  }

  /* ---------- Metas de acerto ----------
     80% ou mais = assunto dominado; de 60% a 79% = atenção;
     abaixo de 60% = dificuldade (hora de voltar ao assunto).
     Para cada tópico guardamos as últimas respostas (1 = acerto),
     assim o índice mostra como você está AGORA, não há meses. */
  const METAS = { dominado: 80, atencao: 60 };
  const MEMORIA_TOPICO = 10;   // quantas respostas recentes contam
  const MINIMO_CONFIAVEL = 3;  // abaixo disso o resultado é provisório

  /** Registra o resultado de uma resposta no índice da matéria e do tópico */
  function registrarResposta(estado, materia, acertou, assunto) {
    const r = estado.respostas[materia] || { acertos: 0, total: 0 };
    r.total++;
    if (acertou) r.acertos++;
    estado.respostas[materia] = r;
    if (assunto) {
      if (!estado.desempenhoAssunto) estado.desempenhoAssunto = {};
      const recentes = (estado.desempenhoAssunto[assunto] || []).concat(acertou ? 1 : 0);
      estado.desempenhoAssunto[assunto] = recentes.slice(-MEMORIA_TOPICO);
    }
  }

  /** 'dominado' | 'atencao' | 'dificuldade' para uma porcentagem */
  function nivelDeAcerto(pct) {
    if (pct >= METAS.dominado) return 'dominado';
    if (pct >= METAS.atencao) return 'atencao';
    return 'dificuldade';
  }

  /**
   * Plano de ação do fim de uma sessão de exercícios.
   * respondidas = [{ questao, acertou }] (já registradas no estado).
   * Devolve um item por tópico, do mais urgente para o mais tranquilo:
   * { assunto (ou null), materia, chave, sessao: {acertos,total}, recentes: {acertos,total,pct}, nivel, provisorio }
   */
  function planoDeAcao(estado, respondidas) {
    const grupos = {};
    respondidas.forEach(({ questao, acertou }) => {
      const assunto = estado.assuntos.find((a) => a.id === questao.assunto) || null;
      const chave = assunto ? assunto.id : 'materia:' + questao.materia;
      const g = grupos[chave] || (grupos[chave] = { chave, assunto, materia: questao.materia, sessao: { acertos: 0, total: 0 } });
      g.sessao.total++;
      if (acertou) g.sessao.acertos++;
    });
    const ordem = { dificuldade: 0, atencao: 1, dominado: 2 };
    return Object.values(grupos).map((g) => {
      const historico = g.assunto && (estado.desempenhoAssunto || {})[g.assunto.id];
      const base = historico && historico.length >= g.sessao.total
        ? { acertos: historico.reduce((s, x) => s + x, 0), total: historico.length }
        : g.sessao;
      const pct = U.porcentagem(base.acertos, base.total);
      return Object.assign(g, {
        recentes: { acertos: base.acertos, total: base.total, pct },
        nivel: nivelDeAcerto(pct),
        provisorio: base.total < MINIMO_CONFIAVEL,
      });
    }).sort((a, b) => ordem[a.nivel] - ordem[b.nivel] || a.recentes.pct - b.recentes.pct);
  }

  /* ---------- Provas ----------
     Por matéria: 10 objetivas + 2 dissertativas. Geral: 30 + 5.
     Sem limite de tempo: o tempo só aparece no fim, comparado com
     uma referência de concurso (3 min por objetiva, 8 por dissertativa).
     De 14 em 14 dias, contados do início do plano, o app sugere uma prova geral. */
  const PROVA = {
    materia: { objetivas: 10, dissertativas: 2 },
    geral: { objetivas: 30, dissertativas: 5 },
  };
  const TEMPO_REFERENCIA = { objetiva: 180, dissertativa: 480 }; // segundos por questão
  const INTERVALO_PROVA = 14;

  /**
   * Escolhe n itens: primeiro dos tópicos já estudados, depois o resto.
   * Na prova geral, alterna as matérias para nenhuma dominar a prova.
   */
  function escolherQuestoes(estado, lista, n, alternarMaterias) {
    const estudados = new Set(estado.assuntos.filter((a) => a.estudado).map((a) => a.id));
    const ordenar = (itens) => {
      const embaralhados = U.embaralhar(itens);
      return embaralhados.filter((q) => estudados.has(q.assunto)).concat(embaralhados.filter((q) => !estudados.has(q.assunto)));
    };
    if (!alternarMaterias) return ordenar(lista).slice(0, n);
    const filas = {};
    lista.forEach((q) => { (filas[q.materia] = filas[q.materia] || []).push(q); });
    const materias = U.embaralhar(Object.keys(filas));
    materias.forEach((m) => { filas[m] = ordenar(filas[m]); });
    const escolhidas = [];
    while (escolhidas.length < n && materias.some((m) => filas[m].length)) {
      materias.forEach((m) => { if (escolhidas.length < n && filas[m].length) escolhidas.push(filas[m].shift()); });
    }
    return escolhidas;
  }

  /**
   * Monta uma prova nova.
   * escopo: 'geral' ou id da matéria · formato: 'objetiva' | 'dissertativa' | 'ambas'
   */
  function montarProva(estado, escopo, formato) {
    const geral = escopo === 'geral';
    const tamanho = PROVA[geral ? 'geral' : 'materia'];
    const daProva = (q) => geral || q.materia === escopo;
    const objetivas = formato === 'dissertativa' ? []
      : escolherQuestoes(estado, todasQuestoes(estado).filter(daProva), tamanho.objetivas, geral).map(embaralharOpcoes);
    const dissertativas = formato === 'objetiva' ? []
      : escolherQuestoes(estado, App.dados.dissertativas.filter(daProva), tamanho.dissertativas, geral);
    return {
      id: U.novoId(), escopo, formato, inicio: U.iso(U.hoje()), segundos: 0,
      objetivas: objetivas.map((q) => ({ questao: q, escolha: null })),
      dissertativas: dissertativas.map((q) => ({ questao: q, texto: '', pontos: {} })),
    };
  }

  /** Compara o tempo gasto com a referência de concurso */
  function avaliarTempo(segundos, nObjetivas, nDissertativas, pctAcerto) {
    const referencia = nObjetivas * TEMPO_REFERENCIA.objetiva + nDissertativas * TEMPO_REFERENCIA.dissertativa;
    const razao = referencia ? segundos / referencia : 0;
    let status;
    if (razao < 0.4 && pctAcerto < METAS.atencao) status = 'rapido';   // correu e errou: faltou ler com calma
    else if (razao <= 1) status = 'bom';
    else if (razao <= 1.3) status = 'acima';
    else status = 'lento';
    return { referencia, razao, status };
  }

  /** A prova quinzenal está esperando? Devolve { numero, desde } ou null */
  function provaPendente(estado, hoje = U.hoje()) {
    const ini = inicio(estado);
    if (!ini) return null;
    const dias = U.diasEntre(ini, hoje);
    if (dias < INTERVALO_PROVA) return null;
    const numero = Math.floor(dias / INTERVALO_PROVA);
    const desde = U.iso(U.somarDias(ini, numero * INTERVALO_PROVA));
    const feita = (estado.provas || []).some((p) => p.escopo === 'geral' && p.data >= desde);
    return feita ? null : { numero, desde };
  }

  return {
    inicio, periodoFase, faseAtual, mesAtual, ritmo, sequencia, planoDoDia,
    progressoAssuntos, todasQuestoes, embaralharOpcoes, registrarResposta,
    METAS, nivelDeAcerto, planoDeAcao,
    PROVA, TEMPO_REFERENCIA, INTERVALO_PROVA, montarProva, avaliarTempo, provaPendente,
    marcarEstudado, revisoesPendentes, registrarRevisao,
  };
})();
