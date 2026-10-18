/* =========================================================
   telas/apostila.js — cada matéria como um livro
   Rotas:
     #apostila                    → estante com as apostilas
     #apostila/portugues          → capa, sumário e "continuar de onde parei"
     #apostila/imprimir:portugues → a apostila inteira numa página, para salvar em PDF
   Os capítulos são os tópicos que já têm texto, na ordem das fases.
   A leitura de cada capítulo acontece na tela de estudo (#estudar/<id>),
   que mostra a navegação "capítulo anterior / próximo".
   ========================================================= */
App.telas = App.telas || {};

App.telas.apostila = (function () {
  const U = App.util;
  const D = App.dados;
  const LETRAS = ['A', 'B', 'C', 'D'];

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
          <div class="livro-capa">${m.emoji}</div>
          <div style="flex:1">
            <strong>Apostila de ${U.esc(m.nome)}</strong>
            <div class="suave pequeno">${caps.length ? `${caps.length} capítulo(s) · ${lidos} estudado(s)` : 'Em produção'}</div>
            <div class="barra" style="margin-top:.4rem"><div style="width:${U.porcentagem(lidos, caps.length)}%"></div></div>
          </div>
        </a>`;
    }).join('');
    el.innerHTML = `
      <section class="cartao">
        <h1>📚 Apostilas</h1>
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
            <span class="pequeno">${a.estudado ? '✓' : ''}${a.id === ultimo ? ' 📍' : ''}</span></a></li>`;
        }).join('')}</ol>`;
    }).join('');

    el.innerHTML = `
      <section class="cartao capa-apostila">
        <a href="#apostila" class="pequeno">← Apostilas</a>
        <div class="capa-emoji">${m.emoji}</div>
        <div class="rotulo">Apostila</div>
        <h1 style="margin:.2rem 0">${U.esc(m.nome)}</h1>
        <p class="suave pequeno">Revisão do ensino médio e preparação para concurso · ${caps.length} capítulo(s) prontos de ${todos.length}</p>
        ${continuar ? `<a class="botao primario" href="#estudar/${continuar.id}">
          ${continuar.id === ultimo ? '📍 Continuar de onde parei' : '▶️ Começar a leitura'}: ${U.esc(continuar.titulo)}</a>` : ''}
        ${caps.length ? `<a class="botao" href="#apostila/imprimir:${materia}" style="margin-left:.4rem">🖨️ Salvar em PDF</a>` : ''}
      </section>
      <section class="cartao">
        <h2>Sumário</h2>
        ${sumario}
        <p class="suave pequeno">✓ = estudado · 📍 = onde você parou</p>
      </section>`;
  }

  /* ---------- Versão para imprimir / salvar em PDF ---------- */
  // Na folha não há botões: perguntas viram espaço para responder,
  // as explicações escondidas aparecem e os testes ganham gabarito no fim do capítulo.
  function blocoImpresso(b, materia, gabarito) {
    const f = (t) => App.comp.formatar(t, materia);
    switch (b.tipo) {
      case 'etapa': return b.texto ? `<h3>${f(b.texto)}</h3>` : '';
      case 'titulo': return `<h4>${f(b.texto)}</h4>`;
      case 'texto': return `<p>${f(b.texto)}</p>`;
      case 'lista': return `<ul>${b.itens.map((i) => `<li>${f(i)}</li>`).join('')}</ul>`;
      case 'exemplo': return `<div class="estudo-exemplo"><div class="rotulo">✏️ ${U.esc(b.titulo || 'Exemplo')}</div>${f(b.texto)}</div>`;
      case 'atencao': return `<div class="estudo-atencao">⚠️ ${f(b.texto)}</div>`;
      case 'revelar': return `<div class="estudo-exemplo"><div class="rotulo">${U.esc(b.titulo || 'Explicação')}</div>${f(b.texto)}</div>`;
      case 'pergunta': return `<div class="impresso-pergunta">✍️ <strong>Para pensar:</strong> ${f(b.texto)}<div class="linhas"></div></div>`;
      case 'indicacao': return `<p class="pequeno">📚 <strong>Leia no original:</strong> ${U.esc(b.obra)} — ${U.esc(b.autor)}. ${f(b.texto)}</p>`;
      case 'tabela': return `
        <div class="estudo-tabela"><table>
          <thead><tr>${b.cabecalho.map((c) => `<th>${U.esc(c)}</th>`).join('')}</tr></thead>
          <tbody>${b.linhas.map((l) => `<tr>${l.map((c) => `<td>${f(c)}</td>`).join('')}</tr>`).join('')}</tbody>
        </table></div>`;
      case 'checagem': {
        gabarito.push(`${gabarito.length + 1}) ${LETRAS[b.correta]} — ${f(b.explicacao || '')}`);
        return `<div class="impresso-teste"><strong>🎯 Teste ${gabarito.length}:</strong> ${f(b.pergunta)}
          <ol type="A">${b.opcoes.map((o) => `<li>${f(o)}</li>`).join('')}</ol></div>`;
      }
      default: return ''; // tirinhas e outros blocos interativos ficam só no app
    }
  }

  function telaImprimir(el, materia) {
    const estado = App.store.get();
    const m = D.materia(materia);
    const caps = capitulos(estado, materia);
    const capitulosHtml = caps.map((a, i) => {
      const c = D.conteudos[a.id];
      const gabarito = [];
      const corpo = c.blocos.map((b) => blocoImpresso(b, materia, gabarito)).join('');
      return `
        <article class="capitulo-impresso">
          <div class="rotulo">Capítulo ${i + 1}</div>
          <h2>${U.esc(a.titulo)}</h2>
          ${corpo}
          <h4>🧠 Resumo</h4>
          <ul>${c.resumo.map((r) => `<li>${App.comp.formatar(r, materia)}</li>`).join('')}</ul>
          ${gabarito.length ? `<h4>Gabarito dos testes</h4><ol class="pequeno" style="list-style:none;padding:0">${gabarito.map((g) => `<li>${g}</li>`).join('')}</ol>` : ''}
          <p class="suave pequeno">Fontes: ${c.fontes.map((x) => `${U.esc(x.nome)} (${U.esc(x.url)})`).join(' · ')}</p>
        </article>`;
    }).join('');

    el.innerHTML = `
      <section class="cartao nao-imprimir">
        <a href="#apostila/${materia}" class="pequeno">← Voltar à capa</a>
        <p style="margin:.6rem 0">Esta é a versão para papel. Toque em <strong>Imprimir</strong> e escolha <strong>Salvar como PDF</strong>.</p>
        <button class="botao primario" data-acao="imprimir">🖨️ Imprimir / salvar em PDF</button>
      </section>
      <section class="cartao apostila-impressa">
        <div class="capa-impressa">
          <div class="capa-emoji">${m.emoji}</div>
          <h1>Apostila de ${U.esc(m.nome)}</h1>
          <p class="suave">Revisão do ensino médio e preparação para concurso</p>
          <ol>${caps.map((a) => `<li>${U.esc(a.titulo)}</li>`).join('')}</ol>
        </div>
        ${capitulosHtml}
      </section>`;
  }

  /* ---------- Desenho e eventos ---------- */
  function render(el, param) {
    if (!param) telaEstante(el);
    else if (param.startsWith('imprimir:')) telaImprimir(el, param.slice('imprimir:'.length));
    else if (D.materias.some((m) => m.id === param)) telaCapa(el, param);
    else telaEstante(el);

    el.onclick = (ev) => {
      if (App.comp.cliqueGlossario(ev)) return;
      const acao = ev.target.closest('[data-acao="imprimir"]');
      if (acao) window.print();
    };
  }

  return { render, capitulos, navegacao, registrarLeitura, titulo: 'Apostilas', aba: 'assuntos' };
})();
