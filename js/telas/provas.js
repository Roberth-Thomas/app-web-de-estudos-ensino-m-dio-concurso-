/* =========================================================
   telas/provas.js — provas por matéria ou de todas as matérias
   Rotas:
     #provas        → escolher a prova (e ver as anteriores)
     #provas/fazer  → prova em andamento (todas as questões numa página)
     #provas/<id>   → resultado: tempo, plano de ação e o que errei
   Sem limite de tempo: o relógio corre escondido e só aparece no fim.
   A prova em andamento fica salva (estado.provaAtual), então dá para
   sair e voltar sem perder as respostas.
   ========================================================= */
App.telas = App.telas || {};

App.telas.provas = (function () {
  const U = App.util;
  const D = App.dados;
  const LETRAS = ['A', 'B', 'C', 'D', 'E'];
  const FORMATOS = { objetiva: 'Objetiva', dissertativa: 'Dissertativa', ambas: 'Objetiva + dissertativa' };

  // Relógio da prova: conta só enquanto a tela da prova está aberta e visível
  let inicioTrecho = null;
  function acumularTempo() {
    const p = App.store.get().provaAtual;
    if (p && inicioTrecho) {
      p.segundos += Math.round((Date.now() - inicioTrecho) / 1000);
      inicioTrecho = Date.now();
    }
  }
  document.addEventListener('visibilitychange', () => {
    if (!inicioTrecho && !document.hidden && location.hash === '#provas/fazer') { inicioTrecho = Date.now(); return; }
    if (inicioTrecho && document.hidden) { acumularTempo(); inicioTrecho = null; App.store.salvar(); }
  });

  function nomeEscopo(escopo) {
    if (escopo === 'geral') return '🧾 Todas as matérias';
    const m = D.materia(escopo);
    return m.emoji + ' ' + m.nome;
  }

  function duracao(segundos) {
    const min = Math.round(segundos / 60);
    if (min < 1) return 'menos de 1 min';
    return min < 60 ? min + ' min' : Math.floor(min / 60) + 'h' + String(min % 60).padStart(2, '0');
  }

  /** Nota das dissertativas: pontos que você marcou como cobertos / total de pontos */
  function notaDissertativas(prova) {
    let feitos = 0, total = 0;
    prova.dissertativas.forEach((d) => {
      total += d.questao.esperado.length;
      feitos += Object.values(d.pontos).filter(Boolean).length;
    });
    return { feitos, total, pct: U.porcentagem(feitos, total) };
  }

  /* ---------- Início: escolher a prova ---------- */
  function telaInicio(el) {
    const estado = App.store.get();
    const pendente = App.calc.provaPendente(estado);
    const P = App.calc.PROVA;
    const opcoesEscopo = ['geral'].concat(D.materias.map((m) => m.id))
      .map((id) => `<option value="${id}">${U.esc(nomeEscopo(id))}</option>`).join('');
    const emAndamento = estado.provaAtual;

    const anteriores = estado.provas.slice().reverse().map((p) => {
      const obj = p.objetivas.length ? `${p.objetivas.filter((o) => o.acertou).length}/${p.objetivas.length} objetivas` : '';
      const dis = p.dissertativas.length ? `${notaDissertativas(p).pct}% nas dissertativas` : '';
      return `
        <a class="cartao linha entre" href="#provas/${U.esc(p.id)}" style="text-decoration:none;color:inherit">
          <div>
            <strong>${U.esc(nomeEscopo(p.escopo))}</strong>
            <div class="suave pequeno">${U.dataCurta(U.lerISO(p.data))} · ${[obj, dis].filter(Boolean).join(' · ')} · ${duracao(p.segundos)}</div>
          </div>
          <span class="botao pequeno">Ver</span>
        </a>`;
    }).join('');

    el.innerHTML = `
      ${pendente ? `
        <section class="cartao destaque">
          <h2>📝 Prova quinzenal nº ${pendente.numero}</h2>
          <p>Já se passaram 2 semanas. Faça uma prova de todas as matérias para ver o que ficou e o que precisa voltar.</p>
          <p class="suave pequeno">Ela dá preferência às questões dos tópicos que você já marcou como estudados.</p>
        </section>` : ''}
      ${emAndamento ? `
        <section class="cartao">
          <h2>Prova em andamento</h2>
          <p>${U.esc(nomeEscopo(emAndamento.escopo))} · ${FORMATOS[emAndamento.formato]}</p>
          <div class="linha">
            <a class="botao primario" href="#provas/fazer">Continuar</a>
            <button class="botao perigo pequeno" data-acao="descartar">Descartar</button>
          </div>
        </section>` : ''}
      <section class="cartao">
        <a href="#exercicios" class="pequeno">← Exercícios</a>
        <h1 style="margin-top:.5rem">Provas</h1>
        <p class="suave">Sem limite de tempo. No fim você vê quanto tempo levou, se está num bom ritmo de concurso e o que errou.</p>
        <form id="form-prova">
          <div class="campo"><label for="p-escopo">Prova de</label>
            <select id="p-escopo" name="escopo">${opcoesEscopo}</select></div>
          <fieldset class="campo" style="border:0;padding:0;margin:0 0 1rem">
            <legend style="font-weight:600;margin-bottom:.4rem">Tipo de questão</legend>
            ${Object.entries(FORMATOS).map(([valor, nome], i) => `
              <label style="display:block;margin:.3rem 0"><input type="radio" name="formato" value="${valor}" ${i === 2 ? 'checked' : ''}> ${nome}</label>`).join('')}
          </fieldset>
          <p class="suave pequeno">Por matéria: ${P.materia.objetivas} objetivas + ${P.materia.dissertativas} dissertativas.
            Todas as matérias: ${P.geral.objetivas} objetivas + ${P.geral.dissertativas} dissertativas.</p>
          <button class="botao primario" type="submit" ${emAndamento ? 'disabled title="Termine ou descarte a prova em andamento"' : ''}>Começar prova</button>
        </form>
      </section>
      <section>
        <h2>Provas anteriores (${estado.provas.length})</h2>
        ${anteriores ? '<div class="grade grade-2">' + anteriores + '</div>' : '<p class="suave">Nenhuma prova feita ainda.</p>'}
      </section>`;
  }

  /* ---------- Prova em andamento ---------- */
  function telaFazer(el) {
    const estado = App.store.get();
    const p = estado.provaAtual;
    if (!p) { location.hash = '#provas'; return; }
    if (!inicioTrecho && !document.hidden) inicioTrecho = Date.now();

    const respondidas = p.objetivas.filter((o) => o.escolha !== null).length + p.dissertativas.filter((d) => d.texto.trim()).length;
    const total = p.objetivas.length + p.dissertativas.length;
    let numero = 0;

    const objetivas = p.objetivas.map((o, i) => {
      numero++;
      const q = o.questao;
      return `
        <section class="cartao">
          <div class="suave pequeno">Questão ${numero} · ${U.esc(D.materia(q.materia).nome)}</div>
          <p style="font-size:1.05rem;margin:.4rem 0">${U.esc(q.pergunta)}</p>
          <div class="alternativas">${q.opcoes.map((texto, j) => `
            <button type="button" class="alternativa ${o.escolha === j ? 'marcada' : ''}" data-obj="${i}" data-opcao="${j}" aria-pressed="${o.escolha === j}">
              <span class="letra">${LETRAS[j]})</span><span>${U.esc(texto)}</span></button>`).join('')}</div>
        </section>`;
    }).join('');

    const dissertativas = p.dissertativas.map((d, i) => {
      numero++;
      return `
        <section class="cartao">
          <div class="suave pequeno">Questão ${numero} · dissertativa · ${U.esc(D.materia(d.questao.materia).nome)}</div>
          <p style="font-size:1.05rem;margin:.4rem 0">${U.esc(d.questao.pergunta)}</p>
          <label class="oculto-visual" for="dis-${i}">Sua resposta</label>
          <textarea id="dis-${i}" data-dis="${i}" placeholder="Escreva sua resposta com suas palavras…" style="min-height:120px">${U.esc(d.texto)}</textarea>
        </section>`;
    }).join('');

    el.innerHTML = `
      <section class="cartao">
        <div class="linha entre">
          <a href="#provas" class="pequeno">← Provas</a>
          <span class="selo info" id="contador-prova">${respondidas} de ${total} respondidas</span>
        </div>
        <h1 style="margin-top:.5rem">${U.esc(nomeEscopo(p.escopo))}</h1>
        <p class="suave pequeno">${FORMATOS[p.formato]} · sem limite de tempo. A correção aparece quando você entregar.</p>
      </section>
      ${objetivas}
      ${dissertativas}
      <button class="botao primario bloco" data-acao="entregar">Entregar prova</button>`;
  }

  function atualizarContador(el, p) {
    const respondidas = p.objetivas.filter((o) => o.escolha !== null).length + p.dissertativas.filter((d) => d.texto.trim()).length;
    const selo = el.querySelector('#contador-prova');
    if (selo) selo.textContent = `${respondidas} de ${p.objetivas.length + p.dissertativas.length} respondidas`;
    return respondidas;
  }

  /** Corrige as objetivas, guarda a prova no histórico e conta no desempenho por tópico */
  function entregar() {
    const estado = App.store.get();
    const p = estado.provaAtual;
    acumularTempo();
    inicioTrecho = null;
    p.objetivas.forEach((o) => {
      o.acertou = o.escolha === o.questao.correta;
      App.calc.registrarResposta(estado, o.questao.materia, o.acertou, o.questao.assunto);
    });
    p.data = U.iso(U.hoje());
    estado.provas.push(p);
    estado.provaAtual = null;
    App.store.salvar();
    location.hash = '#provas/' + p.id;
  }

  /* ---------- Resultado ---------- */
  const TEMPO_TEXTO = {
    bom: ['ok', '✅ Bom tempo', 'Você está dentro do ritmo de uma prova de concurso.'],
    acima: ['alerta', '🟡 Um pouco acima do ritmo', 'Na prova real, comece pelas questões que você sabe e deixe as difíceis para o fim.'],
    lento: ['erro', '🔴 Bem acima do ritmo', 'Sem pressa agora, mas na prova real o tempo conta. Treine blocos de questões olhando o relógio.'],
    rapido: ['alerta', '⚡ Rápido demais', 'Você respondeu muito rápido e errou bastante. Leia o enunciado inteiro com calma antes de marcar.'],
  };
  let filtro = { tipo: null, soErros: true };

  function telaResultado(el, id) {
    const estado = App.store.get();
    const p = estado.provas.find((x) => x.id === id);
    if (!p) { el.innerHTML = '<section class="cartao"><h1>Prova não encontrada</h1><a class="botao" href="#provas">Voltar</a></section>'; return; }
    if (!filtro.tipo || filtro.id !== id) {
      filtro = { id, soErros: true, tipo: p.objetivas.length && p.dissertativas.length ? 'ambas' : p.objetivas.length ? 'objetiva' : 'dissertativa' };
    }

    const acertos = p.objetivas.filter((o) => o.acertou).length;
    const pctObj = U.porcentagem(acertos, p.objetivas.length);
    const nd = notaDissertativas(p);
    const pctGeral = p.objetivas.length ? pctObj : nd.pct;
    const tempo = App.calc.avaliarTempo(p.segundos, p.objetivas.length, p.dissertativas.length, pctGeral);
    const [seloTempo, tituloTempo, dicaTempo] = TEMPO_TEXTO[tempo.status];
    const porQuestao = p.segundos / Math.max(1, p.objetivas.length + p.dissertativas.length);

    const notas = `
      <div class="grade grade-2" style="margin-top:12px">
        ${p.objetivas.length ? `<div class="cartao estatistica"><div class="numero">${acertos}/${p.objetivas.length}</div>
          <div class="suave pequeno">objetivas · ${pctObj}%</div></div>` : ''}
        ${p.dissertativas.length ? `<div class="cartao estatistica"><div class="numero">${nd.pct}%</div>
          <div class="suave pequeno">dissertativas · ${nd.feitos}/${nd.total} pontos<br>(marque abaixo o que sua resposta cobriu)</div></div>` : ''}
      </div>`;

    // Plano de ação: o mesmo do fim dos exercícios, com as objetivas desta prova
    const plano = p.objetivas.length
      ? App.telas.exercicios.planoDeAcaoHTML(p.objetivas.map((o) => ({ questao: o.questao, acertou: o.acertou })))
      : '';

    el.innerHTML = `
      <section class="cartao">
        <a href="#provas" class="pequeno">← Provas</a>
        <h1 style="margin-top:.5rem">${U.esc(nomeEscopo(p.escopo))} — resultado</h1>
        <div class="suave pequeno">${U.dataLonga(U.lerISO(p.data))} · ${FORMATOS[p.formato]}</div>
        ${notas}
      </section>
      <section class="cartao">
        <h2>⏱️ Seu tempo</h2>
        <p style="margin:.2rem 0"><strong>${duracao(p.segundos)}</strong> no total · cerca de ${duracao(porQuestao)} por questão</p>
        <p class="suave pequeno" style="margin:.2rem 0">Referência de concurso para esta prova: ${duracao(tempo.referencia)}
          (3 min por objetiva, 8 min por dissertativa).</p>
        <p style="margin:.6rem 0 0"><span class="selo ${seloTempo}">${tituloTempo}</span></p>
        <p style="margin:.4rem 0 0">${dicaTempo}</p>
      </section>
      ${plano}
      <section class="cartao" id="revisao-prova">${revisao(p)}</section>`;
  }

  /** "O que errei", com a escolha entre objetivas, dissertativas ou ambas */
  function revisao(p) {
    const tipos = [];
    if (p.objetivas.length) tipos.push(['objetiva', 'Objetivas']);
    if (p.dissertativas.length) tipos.push(['dissertativa', 'Dissertativas']);
    if (tipos.length === 2) tipos.push(['ambas', 'Ambas']);
    const ver = (t) => filtro.tipo === t || filtro.tipo === 'ambas';

    const objetivas = ver('objetiva') ? p.objetivas
      .map((o, i) => ({ o, i })).filter(({ o }) => !filtro.soErros || !o.acertou)
      .map(({ o, i }) => {
        const q = o.questao;
        const explicacao = App.comp.marcarTermos(q.explicacao || '', q.materia);
        return `
          <li class="revisao-item">
            <div class="suave pequeno">Objetiva ${i + 1} · ${U.esc(D.materia(q.materia).nome)}</div>
            <p style="margin:.3rem 0">${U.esc(q.pergunta)}</p>
            ${o.escolha === null ? '<p class="pequeno">Você deixou em branco.</p>'
              : `<p class="pequeno" style="margin:.2rem 0">${o.acertou ? '✅' : '❌'} Sua resposta: ${LETRAS[o.escolha]}) ${U.esc(q.opcoes[o.escolha])}</p>`}
            ${o.acertou ? '' : `<p class="pequeno" style="margin:.2rem 0">✔️ Correta: <strong>${LETRAS[q.correta]}) ${U.esc(q.opcoes[q.correta])}</strong></p>`}
            ${explicacao ? `<div class="explicacao"><p style="margin:0">${App.comp.formatar(explicacao, q.materia)}</p></div>` : ''}
          </li>`;
      }).join('') : '';

    const dissertativas = ver('dissertativa') ? p.dissertativas
      .map((d, i) => ({ d, i }))
      .filter(({ d }) => !filtro.soErros || Object.values(d.pontos).filter(Boolean).length < d.questao.esperado.length)
      .map(({ d, i }) => `
        <li class="revisao-item">
          <div class="suave pequeno">Dissertativa ${i + 1} · ${U.esc(D.materia(d.questao.materia).nome)}</div>
          <p style="margin:.3rem 0">${U.esc(d.questao.pergunta)}</p>
          <div class="texto-salvo">${d.texto.trim() ? U.esc(d.texto) : '<em>Você deixou em branco.</em>'}</div>
          <p class="pequeno" style="margin:.6rem 0 .2rem"><strong>O que a resposta precisava ter</strong> (marque o que você cobriu):</p>
          <ul class="revisao">${d.questao.esperado.map((ponto, j) => `
            <li><label><input type="checkbox" data-dis="${i}" data-ponto="${j}" ${d.pontos[j] ? 'checked' : ''}>
              <span>${U.esc(ponto)}</span></label></li>`).join('')}</ul>
          ${d.texto.trim() ? App.comp.botoesCorrecao(`data-corrigir-dis="${i}"`) + `<div data-saida-dis="${i}"></div>` : ''}
        </li>`).join('') : '';

    const vazio = !objetivas && !dissertativas;
    return `
      <h2>🔎 O que errei</h2>
      <div class="linha" role="group" aria-label="Tipo de questão">
        ${tipos.map(([t, nome]) => `<button class="botao pequeno ${filtro.tipo === t ? 'primario' : ''}" data-filtro="${t}">${nome}</button>`).join('')}
      </div>
      <label class="pequeno" style="display:block;margin:.6rem 0"><input type="checkbox" data-so-erros ${filtro.soErros ? 'checked' : ''}> Mostrar só o que errei</label>
      ${vazio ? '<p>Nada para revisar aqui. 🎉</p>' : `<ul class="lista-revisao">${objetivas}${dissertativas}</ul>`}`;
  }

  /* ---------- Desenho e eventos ---------- */
  function render(el, param) {
    // Saiu da prova para outra parte desta mesma tela: o relógio para
    if (param !== 'fazer' && inicioTrecho) { acumularTempo(); inicioTrecho = null; App.store.salvar(); }
    if (!param) telaInicio(el);
    else if (param === 'fazer') telaFazer(el);
    else telaResultado(el, param);

    el.onsubmit = (ev) => {
      ev.preventDefault();
      const f = ev.target;
      const estado = App.store.get();
      estado.provaAtual = App.calc.montarProva(estado, f.escopo.value, f.formato.value);
      App.store.salvar();
      inicioTrecho = Date.now();
      location.hash = '#provas/fazer';
    };

    el.oninput = (ev) => {
      const campo = ev.target.closest('textarea[data-dis]');
      const p = App.store.get().provaAtual;
      if (!campo || !p) return;
      p.dissertativas[Number(campo.dataset.dis)].texto = campo.value;
      atualizarContador(el, p);
      clearTimeout(el._timerProva);
      el._timerProva = setTimeout(() => { acumularTempo(); App.store.salvar(); }, 800);
    };

    el.onchange = (ev) => {
      const estado = App.store.get();
      const prova = estado.provas.find((x) => x.id === param);
      if (ev.target.matches('[data-so-erros]')) {
        filtro.soErros = ev.target.checked;
        el.querySelector('#revisao-prova').innerHTML = revisao(prova);
      } else if (ev.target.dataset.ponto !== undefined && prova) {
        const d = prova.dissertativas[Number(ev.target.dataset.dis)];
        d.pontos[ev.target.dataset.ponto] = ev.target.checked;
        App.store.salvar();
        const nd = notaDissertativas(prova);
        const nota = el.querySelectorAll('.estatistica .numero');
        if (nota.length) nota[nota.length - 1].textContent = nd.pct + '%';
      }
    };

    el.onclick = (ev) => {
      if (App.comp.cliqueGlossario(ev)) return;
      const estado = App.store.get();
      const opcao = ev.target.closest('[data-obj]');
      if (opcao && estado.provaAtual) {
        const o = estado.provaAtual.objetivas[Number(opcao.dataset.obj)];
        const j = Number(opcao.dataset.opcao);
        o.escolha = o.escolha === j ? null : j; // tocar de novo desmarca
        opcao.parentElement.querySelectorAll('.alternativa').forEach((b) => {
          const marcada = o.escolha === Number(b.dataset.opcao);
          b.classList.toggle('marcada', marcada);
          b.setAttribute('aria-pressed', marcada);
        });
        atualizarContador(el, estado.provaAtual);
        acumularTempo();
        App.store.salvar();
        return;
      }
      const botaoFiltro = ev.target.closest('[data-filtro]');
      if (botaoFiltro) {
        filtro.tipo = botaoFiltro.dataset.filtro;
        el.querySelector('#revisao-prova').innerHTML = revisao(estado.provas.find((x) => x.id === param));
        return;
      }
      const corrigir = ev.target.closest('[data-corrigir-dis]');
      if (corrigir) {
        const prova = estado.provas.find((x) => x.id === param);
        const i = corrigir.dataset.corrigirDis;
        const d = prova.dissertativas[Number(i)];
        const pedido = App.comp.pedidoDeCorrecao({
          modo: 'prova', materia: D.materia(d.questao.materia).nome, materiaId: d.questao.materia, assuntoId: d.questao.assunto,
          topico: (estado.assuntos.find((a) => a.id === d.questao.assunto) || {}).titulo || 'prova',
          pergunta: d.questao.pergunta, resposta: d.texto, esperado: d.questao.esperado,
        });
        App.comp.enviarParaIA(corrigir.dataset.ia, pedido).then((html) => {
          el.querySelector(`[data-saida-dis="${i}"]`).innerHTML = html;
        });
        return;
      }
      const acao = ev.target.closest('[data-acao]');
      if (!acao) return;
      if (acao.dataset.acao === 'entregar') {
        const p = estado.provaAtual;
        const faltam = p.objetivas.length + p.dissertativas.length - atualizarContador(el, p);
        if (faltam && !confirm(`Ainda falta${faltam > 1 ? 'm' : ''} ${faltam} questão(ões). Entregar assim mesmo?`)) return;
        entregar();
      } else if (acao.dataset.acao === 'descartar') {
        if (confirm('Descartar a prova em andamento? As respostas dela serão perdidas.')) {
          estado.provaAtual = null;
          inicioTrecho = null;
          App.store.salvar();
          telaInicio(el);
        }
      }
    };
  }

  /** Ao sair da tela, guarda o tempo e as respostas da prova em andamento */
  function sair() {
    if (inicioTrecho) { acumularTempo(); inicioTrecho = null; App.store.salvar(); }
  }

  return { render, sair, titulo: 'Provas', aba: 'exercicios' };
})();
