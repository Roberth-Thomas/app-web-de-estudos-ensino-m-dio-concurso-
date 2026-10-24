/* =========================================================
   telas/apostila.js — cada matéria como um livro
   Rotas:
     #apostila                    → estante com as apostilas
     #apostila/portugues          → capa, sumário e "continuar de onde parei"
   Os capítulos são os tópicos que já têm texto, na ordem das fases.
   A leitura de cada capítulo acontece na tela de estudo (#estudar/<id>),
   que mostra a navegação "capítulo anterior / próximo".
   ========================================================= */
App.telas = App.telas || {};

App.telas.apostila = (function () {
  const U = App.util;
  const D = App.dados;

  /** Tópicos da matéria em ordem de leitura (fase, depois posição na lista) */
  function topicos(estado, materia) {
    return estado.assuntos.filter((a) => a.materia === materia)
      .map((a, i) => ({ a, i })).sort((x, y) => x.a.fase - y.a.fase || x.i - y.i).map((x) => x.a);
  }

  /** Capítulos = tópicos que já têm texto de estudo */
  function capitulos(estado, materia) {
    return topicos(estado, materia).filter((a) => D.conteudos[a.id]);
  }

  /** Posição de um tópico no livro: { numero, total, anterior, proximo } ou null */
  function navegacao(estado, assunto) {
    const lista = capitulos(estado, assunto.materia);
    const i = lista.findIndex((a) => a.id === assunto.id);
    if (i < 0) return null;
    return { numero: i + 1, total: lista.length, anterior: lista[i - 1] || null, proximo: lista[i + 1] || null };
  }

  /** Guarda o último capítulo aberto, para o "continuar de onde parei" */
  function registrarLeitura(estado, assunto) {
    if (!estado.leitura) estado.leitura = {};
    if (estado.leitura[assunto.materia] === assunto.id) return;
    estado.leitura[assunto.materia] = assunto.id;
    App.store.salvar();
  }

  /* ---------- Estante ---------- */
  function telaEstante(el) {
    const estado = App.store.get();
    const livros = D.materias.map((m) => {
      const caps = capitulos(estado, m.id);
      const lidos = caps.filter((a) => a.estudado).length;
      return `
        <a class="cartao livro" href="#apostila/${m.id}">
          <div class="livro-capa">${U.esc(m.nome.charAt(0))}</div>
          <div style="flex:1">
            <strong>Apostila de ${U.esc(m.nome)}</strong>
            <div class="suave pequeno">${caps.length ? `${caps.length} capítulo(s) · ${lidos} estudado(s)` : 'Em produção'}</div>
            <div class="barra" style="margin-top:.4rem"><div style="width:${U.porcentagem(lidos, caps.length)}%"></div></div>
          </div>
        </a>`;
    }).join('');
    el.innerHTML = `
      <section class="cartao">
        <h1>Apostilas</h1>
        <p class="suave">Cada matéria como um livro: capa, sumário e capítulos em sequência. Leia na ordem, sem pressa;
          o app lembra onde você parou.</p>
      </section>
      <div class="grade grade-2">${livros}</div>`;
  }

  /* ---------- Capa e sumário ---------- */
  function telaCapa(el, materia) {
    const estado = App.store.get();
    const m = D.materia(materia);
    const todos = topicos(estado, materia);
    const caps = capitulos(estado, materia);
    const ultimo = estado.leitura && estado.leitura[materia];
    const continuar = caps.find((a) => a.id === ultimo) || caps.find((a) => !a.estudado) || caps[0];

    let numero = 0;
    const sumario = D.fases.map((f) => {
      const daFase = todos.filter((a) => a.fase === f.numero);
      if (!daFase.length) return '';
      return `
        <h3 class="sumario-fase">${U.esc(f.nome)} <span class="suave pequeno">· ${U.esc(f.descricao)}</span></h3>
        <ol class="sumario">${daFase.map((a) => {
          if (!D.conteudos[a.id]) {
            return `<li class="sumario-item em-breve"><span class="sumario-num">—</span><span>${U.esc(a.titulo)}</span><span class="suave pequeno">em breve</span></li>`;
          }
          numero++;
          return `<li><a class="sumario-item" href="#estudar/${a.id}">
            <span class="sumario-num">${numero}</span><span>${U.esc(a.titulo)}</span>
            <span class="pequeno">${a.estudado ? '✓' : ''}${a.id === ultimo ? ' · você parou aqui' : ''}</span></a></li>`;
        }).join('')}</ol>`;
    }).join('');

    el.innerHTML = `
      <section class="cartao capa-apostila">
        <a href="#apostila" class="pequeno">← Apostilas</a>
        <div class="capa-emoji">${U.esc(m.nome.charAt(0))}</div>
        <div class="rotulo">Apostila</div>
        <h1 style="margin:.2rem 0">${U.esc(m.nome)}</h1>
        <p class="suave pequeno">Revisão do ensino médio e preparação para concurso · ${caps.length} capítulo(s) prontos de ${todos.length}</p>
        ${continuar ? `<a class="botao primario" href="#estudar/${continuar.id}">
          ${continuar.id === ultimo ? 'Continuar de onde parei' : 'Começar a leitura'}: ${U.esc(continuar.titulo)}</a>` : ''}
      </section>
      <section class="cartao">
        <h2>Sumário</h2>
        ${sumario}
        <p class="suave pequeno">✓ = estudado</p>
      </section>`;
  }

  /* ---------- Desenho e eventos ---------- */
  function render(el, param) {
    if (!param) telaEstante(el);
    else if (D.materias.some((m) => m.id === param)) telaCapa(el, param);
    else telaEstante(el);

  }

  return { render, capitulos, navegacao, registrarLeitura, titulo: 'Apostilas', aba: 'assuntos' };
})();
