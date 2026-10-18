/* =========================================================
   telas/assuntos.js — checklist de assuntos por fase e matéria
   Permite marcar, adicionar, renomear e remover assuntos.
   ========================================================= */
App.telas = App.telas || {};

App.telas.assuntos = (function () {
  const U = App.util;
  const D = App.dados;
  let faseEscolhida = null; // null = ainda não escolhida (usa a fase atual)

  function render(el) {
    const estado = App.store.get();
    if (faseEscolhida === null) faseEscolhida = Math.min(3, Math.max(1, App.calc.faseAtual(estado)));
    const fase = faseEscolhida;
    const progFase = App.calc.progressoAssuntos(estado, null, fase);

    const pilulas = D.fases.map((f) =>
      `<button class="pilula ${f.numero === fase ? 'ativa' : ''}" data-fase="${f.numero}">${f.nome}</button>`).join('');

    const cartoes = D.materias.map((m) => {
      const itens = estado.assuntos.filter((a) => a.materia === m.id && a.fase === fase);
      const feitos = itens.filter((a) => a.estudado).length;
      const lis = itens.map((a) => `
        <li data-id="${U.esc(a.id)}">
          <label>
            <input type="checkbox" data-acao="marcar" ${a.estudado ? 'checked' : ''}>
            <span class="${a.estudado ? 'feito' : ''}">${U.esc(a.titulo)}</span>
          </label>
          <span class="acoes">
            <button data-acao="editar" title="Renomear" aria-label="Renomear ${U.esc(a.titulo)}">✏️</button>
            <button data-acao="remover" title="Remover" aria-label="Remover ${U.esc(a.titulo)}">🗑️</button>
          </span>
        </li>`).join('');
      return `
        <section class="cartao">
          <div class="materia-titulo">
            <h2 style="margin:0">${m.emoji} ${U.esc(m.nome)}</h2>
            <span class="selo ${itens.length && feitos === itens.length ? 'ok' : 'info'}">${feitos}/${itens.length}</span>
          </div>
          ${m.tipo === 'concurso' ? '<div class="suave pequeno">Concurso</div>' : ''}
          <ul class="lista-assuntos">${lis || '<li class="suave pequeno">Nenhum assunto nesta fase.</li>'}</ul>
          <form class="form-inline" data-materia="${m.id}">
            <input type="text" name="titulo" placeholder="Novo assunto…" aria-label="Novo assunto de ${U.esc(m.nome)}" required>
            <button class="botao" type="submit">Adicionar</button>
          </form>
        </section>`;
    }).join('');

    el.innerHTML = `
      <section class="cartao">
        <h1>Checklist de assuntos</h1>
        <div class="pilulas" role="tablist">${pilulas}</div>
        <p class="suave pequeno" style="margin-top:.6rem">${D.fases[fase - 1].descricao}</p>
        <div class="item-barra">
          <div class="linha"><span>Progresso da fase</span><strong>${progFase.feitos}/${progFase.total} · ${progFase.pct}%</strong></div>
          <div class="barra grossa"><div style="width:${progFase.pct}%"></div></div>
        </div>
      </section>
      ${cartoes}`;

    // Um único "ouvinte" para a tela toda (delegação de eventos)
    el.onclick = (ev) => {
      const botaoFase = ev.target.closest('[data-fase]');
      if (botaoFase) { faseEscolhida = Number(botaoFase.dataset.fase); render(el); return; }

      const acao = ev.target.closest('[data-acao]');
      if (!acao) return;
      const li = acao.closest('li[data-id]');
      const assunto = li && estado.assuntos.find((a) => a.id === li.dataset.id);
      if (!assunto) return;

      if (acao.dataset.acao === 'editar') {
        const novo = prompt('Novo nome do assunto:', assunto.titulo);
        if (novo && novo.trim()) { assunto.titulo = novo.trim(); App.store.salvar(); render(el); }
      } else if (acao.dataset.acao === 'remover') {
        if (confirm('Remover "' + assunto.titulo + '"?')) {
          estado.assuntos = estado.assuntos.filter((a) => a !== assunto);
          App.store.salvar();
          render(el);
        }
      }
    };

    el.onchange = (ev) => {
      if (ev.target.dataset.acao !== 'marcar') return;
      const li = ev.target.closest('li[data-id]');
      const assunto = estado.assuntos.find((a) => a.id === li.dataset.id);
      assunto.estudado = ev.target.checked;
      App.store.salvar();
      render(el);
    };

    el.onsubmit = (ev) => {
      ev.preventDefault();
      const form = ev.target;
      const titulo = form.titulo.value.trim();
      if (!titulo) return;
      estado.assuntos.push({ id: U.novoId(), materia: form.dataset.materia, fase, titulo, estudado: false });
      App.store.salvar();
      render(el);
      U.aviso('Assunto adicionado');
    };
  }

  return { render, titulo: 'Assuntos' };
})();
