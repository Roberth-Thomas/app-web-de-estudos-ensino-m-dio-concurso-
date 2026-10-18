/* =========================================================
   telas/estudar.js — página de estudo de um tópico
   Rota: #estudar/<id do assunto>  (ex.: #estudar/matematica-1-0)
   O texto vem de js/dados/conteudos.js.
   ========================================================= */
App.telas = App.telas || {};

App.telas.estudar = (function () {
  const U = App.util;
  const D = App.dados;

  /** Escapa o texto e depois aplica a "marcação" simples: **negrito** e quebras de linha */
  function formatar(texto) {
    return U.esc(texto)
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
  }

  /** Transforma cada bloco do conteúdo em HTML */
  function bloco(b) {
    switch (b.tipo) {
      case 'titulo': return `<h3 class="estudo-titulo">${formatar(b.texto)}</h3>`;
      case 'texto': return `<p>${formatar(b.texto)}</p>`;
      case 'lista': return `<ul class="estudo-lista">${b.itens.map((i) => `<li>${formatar(i)}</li>`).join('')}</ul>`;
      case 'exemplo': return `<div class="estudo-exemplo"><div class="rotulo">✏️ ${U.esc(b.titulo || 'Exemplo')}</div>${formatar(b.texto)}</div>`;
      case 'atencao': return `<div class="estudo-atencao">⚠️ ${formatar(b.texto)}</div>`;
      case 'tabela': return `
        <div class="estudo-tabela"><table>
          <thead><tr>${b.cabecalho.map((c) => `<th>${U.esc(c)}</th>`).join('')}</tr></thead>
          <tbody>${b.linhas.map((l) => `<tr>${l.map((c) => `<td>${formatar(c)}</td>`).join('')}</tr>`).join('')}</tbody>
        </table></div>`;
      default: return '';
    }
  }

  function listaBncc(itens) {
    return itens.map((h) => `<li><strong>${U.esc(h.codigo)}</strong> — ${U.esc(h.texto)}</li>`).join('');
  }

  function render(el, id) {
    const estado = App.store.get();
    const assunto = estado.assuntos.find((a) => a.id === id);
    if (!assunto) {
      el.innerHTML = `<section class="cartao"><h1>Tópico não encontrado</h1>
        <p class="suave">Ele pode ter sido removido.</p><a class="botao" href="#assuntos">Voltar aos assuntos</a></section>`;
      return;
    }
    const materia = D.materia(assunto.materia);
    const c = D.conteudos[assunto.id];

    const cabecalho = `
      <section class="cartao">
        <a href="#assuntos" class="pequeno">← Assuntos</a>
        <div class="suave pequeno" style="margin-top:.5rem">${materia.emoji} ${U.esc(materia.nome)} · Fase ${assunto.fase}</div>
        <h1 style="margin:.2rem 0 .6rem">${U.esc(assunto.titulo)}</h1>
        <button class="botao ${assunto.estudado ? 'sucesso' : 'primario'}" data-acao="marcar">
          ${assunto.estudado ? '✓ Estudado (desmarcar)' : 'Marcar como estudado'}</button>
      </section>`;

    if (!c) {
      el.innerHTML = cabecalho + `
        <section class="cartao">
          <p>O conteúdo deste tópico ainda não foi escrito.</p>
          <p class="suave pequeno">Por enquanto, pratique na aba Exercícios ou procure o tema nas fontes abertas (Khan Academy, Wikilivros).</p>
          <a class="botao" href="#exercicios/${assunto.materia}">Exercícios de ${U.esc(materia.nome)}</a>
        </section>`;
    } else {
      el.innerHTML = cabecalho + `
        <section class="cartao estudo-bncc">
          <h2>📋 O que a BNCC pede</h2>
          <p class="suave pequeno">Habilidades da Base Nacional Comum Curricular (MEC, 2018) que este tópico ajuda a desenvolver.
            A BNCC do Ensino Médio organiza as habilidades por área, não por série.</p>
          <ul>${listaBncc(c.bncc)}</ul>
          ${c.bnccBase && c.bnccBase.length ? `
            <details><summary class="pequeno">Base que vem do Ensino Fundamental</summary>
              <ul class="pequeno">${listaBncc(c.bnccBase)}</ul></details>` : ''}
          <a class="pequeno" href="${U.esc(D.bnccUrl)}" target="_blank" rel="noopener">Abrir o documento oficial da BNCC ↗</a>
        </section>

        <section class="cartao estudo">
          ${c.blocos.map(bloco).join('')}
        </section>

        <section class="cartao">
          <h2>🧠 Resumo para revisar</h2>
          <ul class="estudo-lista">${c.resumo.map((r) => `<li>${formatar(r)}</li>`).join('')}</ul>
        </section>

        <section class="cartao">
          <h2>📎 Para aprofundar</h2>
          <ul class="estudo-lista">${c.fontes.map((f) =>
            `<li><a href="${U.esc(f.url)}" target="_blank" rel="noopener">${U.esc(f.nome)} ↗</a></li>`).join('')}</ul>
          <a class="botao primario" href="#exercicios/${assunto.materia}" style="margin-top:.6rem">Praticar exercícios de ${U.esc(materia.nome)}</a>
        </section>`;
    }

    el.onclick = (ev) => {
      if (!ev.target.closest('[data-acao="marcar"]')) return;
      assunto.estudado = !assunto.estudado;
      App.store.salvar();
      if (assunto.estudado) U.aviso('Tópico marcado como estudado ✅');
      render(el, id);
    };
  }

  return { render, titulo: 'Estudar', aba: 'assuntos' };
})();
