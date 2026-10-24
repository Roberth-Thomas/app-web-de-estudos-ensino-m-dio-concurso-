/* =========================================================
   telas/ingles.js — trilha de inglês até a fluência
   Rotas:
     #ingles              → a trilha: seu dia, nivelamento e os níveis B1 → B2 → C1
     #ingles/cartoes      → revisar os cartões de vocabulário que vencem hoje
     #ingles/nivelamento  → prova de nivelamento (24 questões, com escuta)
   Dados da trilha: js/dados/ingles-trilha.js. As apostilas são tópicos comuns (#estudar/...).
   Progresso: estado.ingles = { nivelamento: {...} | null, cartoes: { id: { caixa, proxima } } }
   ========================================================= */
App.telas = App.telas || {};

App.telas.ingles = (function () {
  const U = App.util;
  const D = App.dados;
  const T = () => D.trilhaIngles;

  /* ---------- Cartões de vocabulário (revisão espaçada, caixas de Leitner) ---------- */
  /** Dias até a próxima revisão, por caixa: acertou → sobe de caixa; errou → volta à caixa 0 */
  const INTERVALOS = [1, 2, 4, 7, 15, 30];
  const idCartao = (unidade, palavra) => unidade + ':' + palavra.en;

  function palavrasDaUnidade(unidade) { return T().vocabulario[unidade] || []; }

  function palavraDoCartao(id) {
    const [unidade, en] = [id.slice(0, id.indexOf(':')), id.slice(id.indexOf(':') + 1)];
    return palavrasDaUnidade(unidade).find((p) => p.en === en) || null;
  }

  /** Põe as palavras da unidade nos seus cartões (as que ainda não estão), para revisar hoje */
  function adicionarUnidade(estado, unidade, hoje = U.hoje()) {
    let novas = 0;
    palavrasDaUnidade(unidade).forEach((p) => {
      const id = idCartao(unidade, p);
      if (!estado.ingles.cartoes[id]) { estado.ingles.cartoes[id] = { caixa: 0, proxima: U.iso(hoje) }; novas++; }
    });
    return novas;
  }

  function unidadeNosCartoes(estado, unidade) {
    const ps = palavrasDaUnidade(unidade);
    return ps.length > 0 && ps.every((p) => estado.ingles.cartoes[idCartao(unidade, p)]);
  }

  /** Cartões que vencem hoje (ou já venceram), dos mais atrasados para os mais novos */
  function cartoesDoDia(estado, hoje = U.hoje()) {
    const limite = U.iso(hoje);
    return Object.entries(estado.ingles.cartoes)
      .filter(([id, c]) => c.proxima <= limite && palavraDoCartao(id))
      .sort((a, b) => (a[1].proxima < b[1].proxima ? -1 : 1))
      .map(([id]) => id);
  }

  function responderCartao(estado, id, acertou, hoje = U.hoje()) {
    const c = estado.ingles.cartoes[id];
    if (!c) return;
    c.caixa = acertou ? Math.min(c.caixa + 1, INTERVALOS.length - 1) : 0;
    c.proxima = U.iso(U.somarDias(hoje, acertou ? INTERVALOS[c.caixa] : 1));
  }

  /* ---------- Nivelamento ---------- */
  const NIVEIS_PROVA = ['a2', 'b1', 'b2', 'c1'];
  const NOMES = { a2: 'A2 (básico)', b1: 'B1 (intermediário)', b2: 'B2 (intermediário avançado)', c1: 'C1 (avançado)' };

  /**
   * Corrige as respostas (índices) e diz por onde começar: o 1º nível com menos de 70%.
   * "questoes" é a lista na ordem em que apareceu (com as opções embaralhadas).
   */
  function resultadoNivelamento(respostas, questoes = T().nivelamento) {
    const porNivel = {};
    NIVEIS_PROVA.forEach((n) => { porNivel[n] = { acertos: 0, total: 0 }; });
    questoes.forEach((q, i) => {
      porNivel[q.nivel].total++;
      if (respostas[i] === q.correta) porNivel[q.nivel].acertos++;
    });
    const pct = (n) => U.porcentagem(porNivel[n].acertos, porNivel[n].total);
    const fraco = NIVEIS_PROVA.find((n) => pct(n) < 70);
    // A trilha começa no B1: quem ainda não domina o A2 começa no B1 revisando o básico
    const recomendado = !fraco ? 'c1+' : (fraco === 'a2' ? 'b1' : fraco);
    return { porNivel, recomendado, revisarBasico: fraco === 'a2' };
  }

  function textoRecomendacao(r) {
    if (r.recomendado === 'c1+') return 'Você foi bem até o C1. Use a trilha para revisar o que errou e treine muita escuta e leitura de verdade (séries, podcasts, documentação).';
    const base = 'Comece pelo **' + NOMES[r.recomendado] + '**.';
    if (r.revisarBasico) return base + ' Algumas bases do A2 ainda falham: a Unidade 1 e as explicações das questões que você errou ajudam a firmar.';
    if (r.recomendado === 'b2' || r.recomendado === 'c1') return base + ' As unidades desse nível ainda estão sendo escritas; até lá, faça o B1 rápido, como revisão, focando no que você errou.';
    return base;
  }

  let prova = null; // { questoes, respostas: [], indice } enquanto você faz o nivelamento

  /* ---------- Telas ---------- */
  function estadoDaUnidade(estado, u) {
    const assunto = u.assunto && estado.assuntos.find((a) => a.id === u.assunto);
    const temApostila = Boolean(u.assunto && D.conteudos[u.assunto]);
    return { assunto, temApostila, estudada: Boolean(assunto && assunto.estudado) };
  }

  /** A unidade da vez: a primeira com apostila ainda não estudada */
  function unidadeDaVez(estado) {
    return D.unidadesIngles().find((u) => { const s = estadoDaUnidade(estado, u); return s.temApostila && !s.estudada; }) || null;
  }

  function linhaUnidade(estado, u, i) {
    const s = estadoDaUnidade(estado, u);
    const questoes = u.assunto ? App.calc.todasQuestoes(estado).filter((q) => q.assunto === u.assunto).length : 0;
    const vocab = palavrasDaUnidade(u.id).length;
    const status = s.estudada ? '✓' : '';
    const acoes = !s.temApostila ? '<span class="suave pequeno">em breve</span>' : `
      <div class="linha" style="margin-top:.3rem">
        <a class="botao pequeno ${s.estudada ? '' : 'primario'}" href="#estudar/${U.esc(u.assunto)}">Apostila</a>
        ${questoes ? `<a class="botao pequeno" href="#exercicios/${U.esc(u.assunto)}">Teste (${questoes})</a>` : ''}
        ${vocab ? (unidadeNosCartoes(estado, u.id)
          ? `<span class="suave pequeno">${vocab} palavras nos cartões</span>`
          : `<button class="botao pequeno" data-vocab="${U.esc(u.id)}">Pôr ${vocab} palavras nos cartões</button>`) : ''}
      </div>`;
    return `
      <li style="display:block">
        <div><span aria-hidden="true">${status}</span> <span class="suave pequeno">Unidade ${i + 1} · ${U.esc(u.foco)}</span><br>
          <strong>${U.esc(u.titulo)}</strong></div>
        ${acoes}
      </li>`;
  }

  function telaTrilha(el) {
    const estado = App.store.get();
    const nv = estado.ingles.nivelamento;
    const devidos = cartoesDoDia(estado).length;
    const daVez = unidadeDaVez(estado);
    const aula = App.telas.cursos.proximaDaMateria(estado, 'ingles');

    const rotina = T().rotina.map((r) => `<li><strong>${r.min} min</strong> · ${U.esc(r.texto)}</li>`).join('');
    const niveis = T().niveis.map((n) => {
      const prontas = n.unidades.filter((u) => estadoDaUnidade(estado, u).temApostila).length;
      const estudadas = n.unidades.filter((u) => estadoDaUnidade(estado, u).estudada).length;
      const atual = nv && (nv.recomendado === n.id);
      return `
        <section class="cartao">
          <h2>${U.esc(n.nome)} ${atual ? '<span class="selo info">seu ponto de partida</span>' : ''}</h2>
          <p class="suave pequeno">${U.esc(n.descricao)}</p>
          <div class="suave pequeno">${estudadas} de ${n.unidades.length} unidades estudadas · ${prontas} prontas</div>
          <div class="barra" style="margin:.3rem 0 .6rem"><div style="width:${U.porcentagem(estudadas, n.unidades.length)}%"></div></div>
          <ul class="lista-assuntos">${n.unidades.map((u, i) => linhaUnidade(estado, u, i)).join('')}</ul>
          <p class="suave pequeno" style="margin-top:.6rem"><strong>Prova do ${n.id.toUpperCase()}</strong>: libera quando as ${n.unidades.length} unidades estiverem prontas.</p>
        </section>`;
    }).join('');

    el.innerHTML = `
      <section class="cartao destaque">
        <h1 style="margin:0 0 .3rem">Trilha de inglês</h1>
        <p class="suave pequeno" style="margin:0">Do intermediário à fluência: B1 → B2 → C1. Leitura, escuta, vocabulário e escrita.
          ${nv ? `Seu ponto de partida: <strong>${U.esc(NOMES[nv.recomendado] || 'C1+')}</strong>.` : ''}</p>
      </section>

      <section class="cartao">
        <h2>Seu dia de inglês <span class="suave pequeno">· 30 a 40 min, sem obrigação</span></h2>
        <ul class="estudo-lista">${rotina}</ul>
        <div class="linha" style="margin-top:.5rem">
          <a class="botao ${devidos ? 'primario' : ''}" href="#ingles/cartoes">Cartões${devidos ? ' (' + devidos + ' para hoje)' : ''}</a>
          ${daVez ? `<a class="botao" href="#estudar/${U.esc(daVez.assunto)}">${U.esc(daVez.titulo.split(':')[0])}</a>` : ''}
          ${aula ? `<a class="botao" href="#cursos/${U.esc(aula.curso.id)}">Próxima aula do curso</a>` : '<a class="botao" href="#cursos">Meus cursos</a>'}
        </div>
        <p class="suave pequeno" style="margin:.5rem 0 0">A escuta e a escrita ficam dentro de cada unidade. Conversação fica para uma etapa depois.</p>
      </section>

      <section class="cartao">
        <h2>Prova de nivelamento</h2>
        ${nv ? `
          <p>Feita em ${U.esc(U.dataCurta(U.lerISO(nv.data)))}: ${NIVEIS_PROVA.map((n) => `${n.toUpperCase()} ${U.porcentagem(nv.porNivel[n].acertos, nv.porNivel[n].total)}%`).join(' · ')}</p>
          <p class="pequeno">${App.comp.formatar(textoRecomendacao(nv))}</p>
          <a class="botao pequeno" href="#ingles/nivelamento">Refazer</a>`
        : `<p class="suave pequeno">24 questões, do básico (A2) ao avançado (C1), com 3 de escuta. Cerca de 15 minutos.
            Ela mostra por onde começar, para você não perder tempo com o que já sabe.</p>
          <a class="botao primario" href="#ingles/nivelamento">Fazer o nivelamento</a>`}
      </section>

      ${niveis}`;

    el.onchange = null;
    el.onclick = (ev) => {
      const v = ev.target.closest('[data-vocab]');
      if (!v) return;
      const n = adicionarUnidade(estado, v.dataset.vocab);
      App.store.salvar();
      U.aviso(n + ' palavras nos cartões. Já dá para revisar hoje.');
      telaTrilha(el);
    };
  }

  /* Sessão de cartões: a fila do dia; quem você errou volta para o fim da fila uma vez */
  let sessao = null;

  function telaCartoes(el) {
    const estado = App.store.get();
    if (!sessao || sessao.dia !== U.iso(U.hoje())) sessao = { dia: U.iso(U.hoje()), fila: cartoesDoDia(estado), virado: false, feitos: 0, erros: 0, repetidos: {} };
    const id = sessao.fila[0];
    const p = id && palavraDoCartao(id);
    const total = Object.keys(estado.ingles.cartoes).length;

    if (!p) {
      el.innerHTML = `
        <section class="cartao">
          <a href="#ingles" class="pequeno">← Trilha de inglês</a>
          <h1>Cartões</h1>
          ${sessao.feitos ? `<p>Pronto por hoje: <strong>${sessao.feitos}</strong> revisões${sessao.erros ? `, ${sessao.erros} para reforçar amanhã` : ''}.</p>` : ''}
          <p class="suave pequeno">${total ? `Você tem ${total} palavras nos cartões. Cada uma volta no dia certo: 1, 2, 4, 7, 15 e 30 dias depois, se você acertar; no dia seguinte, se errar.`
            : 'Ainda não há palavras nos cartões. Na trilha, toque em "Pôr palavras nos cartões" numa unidade.'}</p>
          <a class="botao" href="#ingles">Voltar para a trilha</a>
        </section>`;
      el.onclick = null;
      return;
    }

    el.innerHTML = `
      <section class="cartao">
        <a href="#ingles" class="pequeno">← Trilha de inglês</a>
        <div class="suave pequeno" style="margin-top:.3rem">${sessao.fila.length} para revisar agora</div>
        <div class="cartao-vocab" style="text-align:center;padding:1.2rem .5rem">
          <div style="font-size:1.8rem;font-weight:700" lang="en">${U.esc(p.en)}</div>
          <div class="linha" style="justify-content:center;margin:.6rem 0">${App.comp.botoesEscuta(p.en + '. ' + p.exemplo)}</div>
          ${sessao.virado ? `
            <div style="font-size:1.2rem;margin-top:.6rem">${U.esc(p.pt)}</div>
            <p class="suave" lang="en" style="margin:.4rem 0 0">“${U.esc(p.exemplo)}”</p>` : '<p class="suave pequeno">Pense no significado antes de virar.</p>'}
        </div>
        ${sessao.virado ? `
          <div class="linha" style="justify-content:center">
            <button class="botao" data-cartao="errei">Errei</button>
            <button class="botao primario" data-cartao="acertei">✓ Acertei</button>
          </div>` : '<div style="text-align:center"><button class="botao primario" data-cartao="virar">Virar o cartão</button></div>'}
      </section>`;

    el.onclick = (ev) => {
      const b = ev.target.closest('[data-cartao]');
      if (!b) return;
      const acao = b.dataset.cartao;
      if (acao === 'virar') { sessao.virado = true; telaCartoes(el); return; }
      const acertou = acao === 'acertei';
      responderCartao(estado, id, acertou);
      App.store.salvar();
      sessao.fila.shift();
      sessao.feitos++;
      if (!acertou) {
        sessao.erros++;
        if (!sessao.repetidos[id]) { sessao.repetidos[id] = true; sessao.fila.push(id); } // mais uma chance hoje
      }
      sessao.virado = false;
      telaCartoes(el);
    };
  }

  function telaNivelamento(el) {
    const estado = App.store.get();
    // As opções são embaralhadas uma vez, no começo (a letra certa não fica sempre no mesmo lugar)
    if (!prova) prova = { questoes: T().nivelamento.map(App.calc.embaralharOpcoes), respostas: [], indice: 0, respondida: false };
    const Q = prova.questoes;
    const i = prova.indice;

    if (i >= Q.length) {
      const r = resultadoNivelamento(prova.respostas, Q);
      estado.ingles.nivelamento = Object.assign({ data: U.iso(U.hoje()) }, r);
      App.store.salvar();
      const erradas = Q.map((q, k) => ({ q, k })).filter(({ q, k }) => prova.respostas[k] !== q.correta);
      el.innerHTML = `
        <section class="cartao">
          <h1>Resultado do nivelamento</h1>
          ${NIVEIS_PROVA.map((n) => {
            const pn = r.porNivel[n];
            const pct = U.porcentagem(pn.acertos, pn.total);
            return `<div class="pequeno" style="margin:.4rem 0">${U.esc(NOMES[n])}: ${pn.acertos} de ${pn.total} (${pct}%)</div>
              <div class="barra"><div style="width:${pct}%"></div></div>`;
          }).join('')}
          <p style="margin-top:1rem">${App.comp.formatar(textoRecomendacao(r))}</p>
          <a class="botao primario" href="#ingles">Ir para a trilha</a>
        </section>
        ${erradas.length ? `
          <section class="cartao">
            <h2>O que você errou (${erradas.length})</h2>
            <ul class="estudo-lista">${erradas.map(({ q, k }) => `
              <li><strong>${U.esc(q.nivel.toUpperCase())}</strong> · ${App.comp.formatar(q.pergunta)}
                ${q.escuta ? `<br><span class="suave pequeno" lang="en">“${U.esc(q.escuta)}”</span>` : ''}
                <br>Sua resposta: ${prova.respostas[k] === undefined ? '—' : U.esc(q.opcoes[prova.respostas[k]])} · Certa: <strong>${U.esc(q.opcoes[q.correta])}</strong>
                <br><span class="suave pequeno">${App.comp.formatar(q.explicacao)}</span></li>`).join('')}</ul>
          </section>` : ''}`;
      prova = null;
      el.onclick = null;
      return;
    }

    const q = Q[i];
    const resp = prova.respostas[i];
    el.innerHTML = `
      <section class="cartao">
        <a href="#ingles" class="pequeno">← Sair (o que você respondeu se perde)</a>
        <div class="suave pequeno" style="margin-top:.3rem">Questão ${i + 1} de ${Q.length}</div>
        <div class="barra" style="margin:.3rem 0 .8rem"><div style="width:${U.porcentagem(i, Q.length)}%"></div></div>
        ${q.escuta ? `<div class="estudo-exemplo">${App.comp.botoesEscuta(q.escuta)}
          <p class="suave pequeno" style="margin:.4rem 0 0">Pode ouvir quantas vezes quiser. ${App.comp.podeFalar() ? '' : 'Este navegador não lê em voz alta: o texto aparece depois de responder.'}</p></div>` : ''}
        <p><strong>${App.comp.formatar(q.pergunta)}</strong></p>
        <div class="alternativas">${q.opcoes.map((o, k) => {
          let classe = '';
          if (prova.respondida) classe = k === q.correta ? 'certa' : (k === resp ? 'errada' : '');
          return `<button class="alternativa ${classe}" data-opcao="${k}" ${prova.respondida ? 'disabled' : ''}>
            <span class="letra">${String.fromCharCode(65 + k)})</span><span>${U.esc(o)}</span></button>`;
        }).join('')}</div>
        ${prova.respondida ? `
          <p class="pequeno" style="margin-top:.6rem">${resp === q.correta ? 'Certo.' : 'Não foi dessa vez.'} ${App.comp.formatar(q.explicacao)}</p>
          ${q.escuta ? `<p class="suave pequeno" lang="en">“${U.esc(q.escuta)}”</p>` : ''}
          <button class="botao primario" data-proxima>${i + 1 < Q.length ? 'Próxima' : 'Ver o resultado'}</button>`
        : '<button class="link-botao pequeno" data-pular style="margin-top:.6rem">Não sei (pular)</button>'}
      </section>`;

    el.onclick = (ev) => {
      const op = ev.target.closest('[data-opcao]');
      if (op && !prova.respondida) { prova.respostas[i] = Number(op.dataset.opcao); prova.respondida = true; telaNivelamento(el); return; }
      if (ev.target.closest('[data-pular]')) { prova.respostas[i] = undefined; prova.respondida = true; telaNivelamento(el); return; }
      if (ev.target.closest('[data-proxima]')) { prova.indice++; prova.respondida = false; telaNivelamento(el); window.scrollTo(0, 0); }
    };
  }

  function render(el, param) {
    if (param === 'cartoes') telaCartoes(el);
    else if (param === 'nivelamento') telaNivelamento(el);
    else { prova = null; telaTrilha(el); }
  }

  function sair() { App.comp.pararFala(); }

  return {
    render, sair, titulo: 'Trilha de inglês', aba: 'assuntos',
    INTERVALOS, adicionarUnidade, cartoesDoDia, responderCartao, unidadeNosCartoes, resultadoNivelamento, unidadeDaVez,
  };
})();
