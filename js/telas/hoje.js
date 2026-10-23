/* =========================================================
   telas/hoje.js — tela inicial: o que estudar hoje
   ========================================================= */
App.telas = App.telas || {};

App.telas.hoje = (function () {
  const U = App.util;
  const D = App.dados;
  /** Semana começando na segunda (números do Date.getDay(): 1 = seg … 0 = dom) */
  const ORDEM_SEMANA = [1, 2, 3, 4, 5, 6, 0];
  /** Dia escolhido no seletor (null = hoje). Fica só na memória. */
  let diaEscolhido = null;

  /** Selo de ritmo. Atrás da referência não é cobrança: aparece só "No seu ritmo". */
  function seloRitmo(r) {
    if (r.status === 'adiantado') return '<span class="selo ok">Adiantado ' + r.diferenca + ' assunto(s)</span>';
    if (r.status === 'atrasado') return '<span class="selo info">No seu ritmo</span>';
    return '<span class="selo info">Em dia</span>';
  }

  function textoFase(estado) {
    const fase = App.calc.faseAtual(estado);
    if (fase === 0) return 'O plano começa em ' + U.dataCurta(App.calc.inicio(estado));
    if (fase === 4) return 'Plano de 6 meses concluído — hora de revisar!';
    return 'Fase ' + fase + ' (' + fase + 'º ano) · Mês ' + App.calc.mesAtual(estado) + ' de 6';
  }

  /** Um bloco do cronograma (base ou concurso) com o atalho certo */
  function bloco(rotulo, emoji, item) {
    let atalho = '';
    if (item.acao === 'simulado') atalho = '<a class="botao pequeno primario" href="#exercicios/simulado">Começar simulado</a>';
    else if (item.acao === 'redacao') atalho = '<a class="botao pequeno primario" href="#redacao">Escrever texto</a>';
    else if (item.materias.length) atalho = item.materias
      .map((m) => '<a class="botao pequeno" href="#exercicios/' + m + '">Exercícios de ' + U.esc(D.materia(m).nome) + '</a>')
      .join(' ');
    return `
      <div class="bloco-estudo">
        <div class="emoji-grande" aria-hidden="true">${emoji}</div>
        <div style="flex:1">
          <div class="rotulo">${rotulo}</div>
          <div class="titulo">${U.esc(item.titulo)}</div>
          <div class="linha" style="margin-top:.4rem">${atalho}</div>
        </div>
      </div>`;
  }

  /** Próximos assuntos ainda não estudados das matérias de hoje, na fase atual */
  function proximosAssuntos(estado, materias) {
    const fase = Math.min(3, Math.max(1, App.calc.faseAtual(estado)));
    return estado.assuntos
      .filter((a) => materias.includes(a.materia) && !a.estudado && a.fase <= fase)
      .sort((a, b) => a.fase - b.fase)
      .slice(0, 4);
  }

  /**
   * Inglês do dia (30 a 40 min, fora dos blocos da semana): cartões que vencem hoje,
   * a próxima aula do seu curso (ex.: Hashtag) e a unidade da vez da trilha.
   */
  function cartaoIngles(estado) {
    const prox = App.telas.cursos.proximaDaMateria(estado, 'ingles');
    const devidos = App.telas.ingles.cartoesDoDia(estado).length;
    const daVez = App.telas.ingles.unidadeDaVez(estado);
    const topico = daVez && estado.assuntos.find((a) => a.id === daVez.assunto);
    const aula = prox ? `
        <p style="margin:.3rem 0">▶ <strong>Aula do curso:</strong> ${U.esc(prox.aula.titulo)}
          <span class="suave pequeno">· ${U.esc(prox.curso.nome)}</span></p>
        <div class="linha">
          ${prox.curso.url ? `<a class="botao pequeno" href="${U.esc(prox.curso.url)}" target="_blank" rel="noopener noreferrer">Abrir no curso ↗</a>` : ''}
          <button class="botao pequeno" data-aula-feita="${U.esc(prox.curso.id + '/' + prox.aula.id)}">✓ Assisti</button>
        </div>`
      : `<p class="suave pequeno" style="margin:.3rem 0">Cadastre as aulas do seu curso de inglês (ex.: Hashtag) e a próxima aparece aqui todo dia.</p>`;
    const doApp = topico
      ? (D.conteudos[topico.id]
        ? `<p style="margin:.6rem 0 .3rem">📖 <strong>No app:</strong> <a href="#estudar/${U.esc(topico.id)}">${U.esc(topico.titulo)}</a></p>`
        : `<p style="margin:.6rem 0 .3rem">📖 <strong>No app:</strong> ${U.esc(topico.titulo)} · <a href="#exercicios/ingles">exercícios de Inglês</a></p>`)
      : '<p style="margin:.6rem 0 .3rem">📖 As unidades prontas da trilha estão estudadas. <a href="#exercicios/ingles">Pratique com exercícios →</a></p>';
    const cartoes = devidos
      ? `<p style="margin:.3rem 0">🃏 <a href="#ingles/cartoes"><strong>${devidos} cartões</strong> de vocabulário para hoje</a></p>` : '';
    return `
      <section class="cartao">
        <h2>🇬🇧 Inglês do dia <span class="suave pequeno">· 30 a 40 min</span></h2>
        ${cartoes}
        ${aula}
        ${doApp}
        <p class="suave pequeno" style="margin:.4rem 0 0">Cartões, unidade (ou aula do curso), escuta e uma escrita curta. Sem obrigação: o que ficar, fica para amanhã.
          <a href="#ingles">Trilha de inglês →</a> · <a href="#cursos">Meus cursos →</a></p>
      </section>`;
  }

  function tabelaSemana(diaHoje) {
    const linhas = ORDEM_SEMANA.map((n) => {
      const d = D.cronograma[n];
      const estilo = n === diaHoje ? ' style="background:var(--primaria-suave);font-weight:600"' : '';
      const base = d.descanso ? 'Descanso' : U.esc(d.base.titulo);
      const conc = d.descanso ? '—' : U.esc(d.concurso.titulo);
      return `<tr${estilo}><td>${d.nome}</td><td>${base}</td><td>${conc}</td></tr>`;
    }).join('');
    return `
      <div style="overflow-x:auto">
        <table style="width:100%;border-collapse:collapse;font-size:.9rem">
          <thead><tr style="text-align:left"><th>Dia</th><th>Ensino médio</th><th>Concurso</th></tr></thead>
          <tbody>${linhas}</tbody>
        </table>
      </div>`;
  }

  /** Seletor Seg…Dom, começando na segunda. O ponto marca o dia de hoje. */
  function seletorDias(diaVer, diaHoje) {
    return `<div class="pilulas" role="tablist" aria-label="Escolher o dia" style="margin-bottom:12px">${
      ORDEM_SEMANA.map((n) => `
        <button class="pilula ${n === diaVer ? 'ativa' : ''}" data-dia="${n}" role="tab" aria-selected="${n === diaVer}">
          ${D.cronograma[n].nome.slice(0, 3)}${n === diaHoje ? '<span class="ponto" title="hoje"></span>' : ''}
        </button>`).join('')}</div>`;
  }

  function render(el) {
    const estado = App.store.get();
    const hoje = U.hoje();
    const chave = U.iso(hoje);
    const feito = Boolean(estado.diasConcluidos[chave]);
    // A semana é uma fila: o plano de hoje é o seguinte ao último dia estudado
    const planoHoje = App.calc.planoDoDia(estado.diasConcluidos, hoje);
    const continuando = planoHoje !== hoje.getDay();
    const diaHoje = hoje.getDay() === 0 && !feito ? 0 : planoHoje;  // domingo sem estudo = descanso
    const dia = D.cronograma[diaHoje];
    const diaVer = diaEscolhido === null ? diaHoje : diaEscolhido;
    const verHoje = diaVer === diaHoje;
    const plano = D.cronograma[diaVer];
    // Dias estudados nos últimos 7 dias (não existe "quebrar a sequência")
    const naSemana = Object.keys(estado.diasConcluidos)
      .filter((k) => estado.diasConcluidos[k] && k > U.iso(U.somarDias(hoje, -7)) && k <= chave).length;
    const totalDias = Object.keys(estado.diasConcluidos).length;
    const geral = App.calc.progressoAssuntos(estado);
    const ritmo = App.calc.ritmo(estado, hoje);

    let conteudoDia;
    if (plano.descanso) {
      conteudoDia = `
        <div class="bloco-estudo"><div class="emoji-grande">😴</div>
          <div><div class="titulo">Domingo é dia de descanso</div>
          <div class="suave pequeno">Não conta nem quebra a sua sequência. Recarregue as energias!</div>
          ${verHoje ? `<div class="pequeno" style="margin-top:.4rem">Se quiser estudar mesmo assim, o próximo da fila é
            <button class="link-botao" data-dia="${planoHoje}">${U.esc(D.cronograma[planoHoje].base.titulo)}</button>.</div>` : ''}</div>
        </div>`;
    } else {
      const proximos = proximosAssuntos(estado, plano.base.materias.concat(plano.concurso.materias));
      conteudoDia = bloco('Ensino médio (base)', '📘', plano.base) + bloco('Concurso', '🎯', plano.concurso) +
        (proximos.length ? `
          <div>
            <h3 style="margin-top:.5rem">Sugestão de assuntos</h3>
            <ul style="margin:0;padding-left:1.2rem">${proximos.map((a) => {
              const nome = D.conteudos[a.id]
                ? `<a href="#estudar/${U.esc(a.id)}">📖 ${U.esc(a.titulo)}</a>` : U.esc(a.titulo);
              return `<li>${nome} <span class="suave pequeno">· ${U.esc(D.materia(a.materia).nome)}, fase ${a.fase}</span></li>`;
            }).join('')}</ul>
            <a href="#assuntos" class="pequeno">Marcar assuntos estudados →</a>
          </div>` : '');
    }
    const tituloPlano = verHoje ? 'O que estudar hoje' : 'Plano de ' + plano.nome.toLowerCase();

    // Prova quinzenal: a cada 2 semanas desde o início do plano
    const prova = App.calc.provaPendente(estado, hoje);
    const cartaoProva = prova ? `
      <section class="cartao">
        <h2>📝 Prova quinzenal nº ${prova.numero}</h2>
        <p class="suave pequeno" style="margin-top:0">Duas semanas de estudo: hora de ver o que ficou. Sem limite de tempo.</p>
        <a class="botao primario" href="#provas">Fazer a prova</a>
      </section>` : '';

    // Revisão espaçada: tópicos estudados que precisam ser revistos hoje
    const revisoes = App.calc.revisoesPendentes(estado, hoje);
    const cartaoRevisoes = revisoes.length ? `
      <section class="cartao">
        <h2>🔁 Revisões de hoje (${revisoes.length})</h2>
        <p class="suave pequeno">Rever um tópico 1, 3, 7 e 15 dias depois de estudar faz a memória durar muito mais.
          Releia o resumo, refaça as perguntas "Entendeu?" e marque como revisado.</p>
        <ul class="lista-assuntos">${revisoes.map((r) => {
          const m = D.materia(r.assunto.materia);
          const nome = D.conteudos[r.assunto.id]
            ? `<a href="#estudar/${U.esc(r.assunto.id)}">📖 ${U.esc(r.assunto.titulo)}</a>` : U.esc(r.assunto.titulo);
          return `<li><span style="flex:1">${nome}<br><span class="suave pequeno">${m.emoji} ${U.esc(m.nome)} · revisão ${r.numero} de ${r.total}${r.atraso > 0 ? ` · ${r.atraso} dia(s) de atraso` : ''}</span></span>
            <button class="botao pequeno" data-revisar="${U.esc(r.assunto.id)}">Revisei ✓</button></li>`;
        }).join('')}</ul>
      </section>` : '';

    const botaoDia = dia.descanso
      ? `<button class="botao ${feito ? 'feito' : ''}" data-acao="alternar-dia">${feito ? '✓ Estudei hoje (desfazer)' : 'Estudei mesmo assim'}</button>`
      : `<button class="botao ${feito ? 'feito' : ''}" data-acao="alternar-dia">${feito ? '✓ Dia concluído (desfazer)' : 'Marcar o dia como concluído'}</button>`;

    el.innerHTML = `
      <section class="cartao destaque">
        <div class="suave pequeno">${U.esc(U.dataLonga(hoje))}</div>
        <h1 style="margin:.2rem 0 .3rem">${dia.descanso ? 'Bom descanso!' : 'Hoje é dia de ' + U.esc(dia.base.titulo.split(':')[0])}</h1>
        ${!dia.descanso && continuando ? `<div class="pequeno" style="margin-bottom:.3rem">▶ Continuando de onde você parou: plano de ${U.esc(dia.nome.toLowerCase())}.</div>` : ''}
        <div class="suave pequeno">${U.esc(textoFase(estado))} · Meta: ${D.metaDiaria}</div>
        <div style="margin-top:12px">${botaoDia}</div>
      </section>

      <section class="grade estatisticas">
        <div class="cartao estatistica"><div class="numero">📅${naSemana}</div><div class="suave pequeno">dia(s) nos últimos 7</div></div>
        <div class="cartao estatistica"><div class="numero">${totalDias}</div><div class="suave pequeno">dias estudados</div></div>
        <div class="cartao estatistica"><div class="numero">${geral.pct}%</div><div class="suave pequeno">dos assuntos</div></div>
      </section>
      <div style="text-align:center">${seloRitmo(ritmo)} <a href="#progresso" class="pequeno">ver progresso</a></div>

      ${cartaoRevisoes}
      ${cartaoProva}
      ${dia.descanso ? '' : cartaoIngles(estado)}

      <section class="cartao">
        <h2>${tituloPlano}</h2>
        ${seletorDias(diaVer, diaHoje)}
        <div class="grade">${conteudoDia}</div>
        ${verHoje ? '' : '<button class="link-botao pequeno" data-dia="hoje" style="margin-top:.5rem">← Voltar para hoje</button>'}
      </section>

      <section class="cartao">
        <h2>Cronograma da semana</h2>
        <p class="suave pequeno" style="margin-top:0">A semana é uma fila, sem obrigação de dia: se você faltar,
          o plano que ficou para trás espera e vira o do próximo dia em que estudar.</p>
        ${tabelaSemana(diaHoje)}
      </section>`;

    el.onclick = (ev) => {
      const aulaFeita = ev.target.closest('[data-aula-feita]');
      if (aulaFeita) {
        App.telas.cursos.marcarAula(estado, aulaFeita.dataset.aulaFeita, true);
        App.store.salvar();
        U.aviso('Aula assistida ✓');
        render(el);
        return;
      }
      const botaoRevisar = ev.target.closest('[data-revisar]');
      if (botaoRevisar) {
        App.calc.registrarRevisao(estado, botaoRevisar.dataset.revisar, hoje);
        App.store.salvar();
        U.aviso('Revisão registrada 🔁');
        render(el);
        return;
      }
      const botaoDia = ev.target.closest('[data-dia]');
      if (botaoDia) {
        const valor = botaoDia.dataset.dia;
        diaEscolhido = valor === 'hoje' || Number(valor) === diaHoje ? null : Number(valor);
        render(el);
        return;
      }
      if (ev.target.closest('[data-acao="alternar-dia"]')) {
        if (estado.diasConcluidos[chave]) delete estado.diasConcluidos[chave];
        else {
          estado.diasConcluidos[chave] = planoHoje;  // guarda qual plano foi feito
          U.aviso('Boa! Dia marcado como concluído 🎉');
        }
        App.store.salvar();
        render(el);
      }
    };
  }

  return { render, titulo: 'Hoje' };
})();
