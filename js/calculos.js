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

  /** Registra o resultado de uma resposta no índice de acertos */
  function registrarResposta(estado, materia, acertou) {
    const r = estado.respostas[materia] || { acertos: 0, total: 0 };
    r.total++;
    if (acertou) r.acertos++;
    estado.respostas[materia] = r;
  }

  return {
    inicio, periodoFase, faseAtual, mesAtual, ritmo, sequencia,
    progressoAssuntos, todasQuestoes, embaralharOpcoes, registrarResposta,
  };
})();
