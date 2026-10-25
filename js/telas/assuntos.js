/* =========================================================
   telas/assuntos.js — checklist de assuntos por fase e matéria
   Rotas:
     #assuntos            → grade de matérias (um ícone por matéria, com o progresso da fase)
     #assuntos/<materia>  → assuntos da matéria: marcar, estudar, adicionar, renomear e remover
   ========================================================= */
App.telas = App.telas || {};

App.telas.assuntos = (function () {
  const U = App.util;
  const D = App.dados;
  // Ícones de linha (mesmo traço dos ícones das abas)
  const ICONE_LAPIS = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>';
  const ICONE_LIXO = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14"/></svg>';
  const ICONES = {
    portugues: '<path d="M2 5h7a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H2z"/><path d="M22 5h-7a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h8z"/>',
    matematica: '<path d="M7 4v6M4 7h6M14 7h6M5 15l4 4M9 15l-4 4M14 16h6M14 19h6"/>',
    biologia: '<path d="M5 19c0-9 6-14 15-14 0 9-5 15-14 15"/><path d="M5 19l8-8"/>',
    historia: '<path d="M6 3h12M6 21h12M7 3c0 5 5 6 5 9s-5 4-5 9M17 3c0 5-5 6-5 9s5 4 5 9"/>',
    geografia: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
    filosofia: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14M12 17.5v.01"/>',
    sociologia: '<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14c2.8 0 5 2.2 5 5"/>',
    ingles: '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 9h8M8 12h5"/>',
    logica: '<circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="12" cy="18" r="2.5"/><path d="M7 8.3l4 7.4M17 8.3l-4 7.4M8.5 6h7"/>',
    informatica: '<rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M8 20h8M12 16v4"/>',
    administracao: '<rect x="3" y="7" width="18" height="13" rx="1.5"/><path d="M9 7V4h6v3M3 12h18"/>',
    agentes: '<rect x="5" y="8" width="14" height="11" rx="2"/><path d="M12 8V4M9 13v.01M15 13v.01M9.5 16.5h5M2 13h3M19 13h3"/>',
  };
  const ICONE_PADRAO = '<path d="M4 4h16v16H4z"/><path d="M8 9h8M8 13h8M8 17h5"/>';
  let faseEscolhida = null; // null = ainda não escolhida (usa a fase atual)

  function icone(materia) {
    return `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONES[materia] || ICONE_PADRAO}</svg>`;
  }

  function cabecalho(estado, fase, titulo, voltar) {
    const prog = App.calc.progressoAssuntos(estado, null, fase);
    const pilulas = D.fases.map((f) =>
      `<button class="pilula ${f.numero === fase ? 'ativa' : ''}" data-fase="${f.numero}">${f.nome}</button>`).join('');
    return `
      <section class="cartao">
        ${voltar ? '<a href="#assuntos" class="pequeno">← Todas as matérias</a>' : ''}
        <div class="linha entre"><h1 style="margin:0">${titulo}</h1>
          <span class="linha" style="gap:.4rem">
            <a class="botao pequeno" href="#cursos">Cursos</a>
            <a class="botao pequeno primario" href="#apostila">Apostilas</a>
          </span></div>
        <div class="pilulas" role="tablist">${pilulas}</div>
        <p class="suave pequeno" style="margin-top:.6rem">${D.fases[fase - 1].descricao}</p>
        ${voltar ? '' : `
        <div class="item-barra">
          <div class="linha"><span>Progresso da fase</span><strong>${prog.feitos}/${prog.total} · ${prog.pct}%</strong></div>
          <div class="barra grossa"><div style="width:${prog.pct}%"></div></div>
        </div>`}
      </section>`;
  }

  /* ---------- Grade de matérias ---------- */
  function telaGrade(el, estado, fase) {
    const blocos = D.materias.map((m) => {
      const itens = estado.assuntos.filter((a) => a.materia === m.id && a.fase === fase);
      const feitos = itens.filter((a) => a.estudado).length;
      const pct = U.porcentagem(feitos, itens.length);
      const completo = itens.length && feitos === itens.length;
      return `
        <a class="materia-bloco ${completo ? 'completo' : ''}" href="#assuntos/${U.esc(m.id)}">
          <span class="materia-icone">${icone(m.id)}</span>
          <span class="materia-nome">${U.esc(m.nome)}</span>
          <span class="suave pequeno">${itens.length ? `${feitos} de ${itens.length}` : 'Sem assuntos'}${m.tipo === 'concurso' ? ' · concurso' : m.tipo === 'curso' ? ' · curso livre' : ''}</span>
          <span class="barra"><span style="width:${pct}%"></span></span>
        </a>`;
    }).join('');
    el.innerHTML = `
      ${cabecalho(estado, fase, 'Assuntos', false)}
      <nav class="grade-materias" aria-label="Matérias">${blocos}</nav>`;
  }

  /* ---------- Uma matéria ---------- */
  function telaMateria(el, estado, fase, m) {
    const itens = estado.assuntos.filter((a) => a.materia === m.id && a.fase === fase);
    const feitos = itens.filter((a) => a.estudado).length;
    const lis = itens.map((a) => `
      <li data-id="${U.esc(a.id)}">
        <input type="checkbox" data-acao="marcar" ${a.estudado ? 'checked' : ''} aria-label="Estudado: ${U.esc(a.titulo)}">
        ${D.conteudos[a.id]
          ? `<a class="assunto-titulo ${a.estudado ? 'feito' : ''}" href="#estudar/${U.esc(a.id)}">${U.esc(a.titulo)}<span aria-hidden="true">›</span></a>`
          : `<span class="assunto-titulo ${a.estudado ? 'feito' : ''}">${U.esc(a.titulo)}</span>`}
        <span class="acoes">
          <button data-acao="editar" title="Renomear" aria-label="Renomear ${U.esc(a.titulo)}">${ICONE_LAPIS}</button>
          <button data-acao="remover" title="Remover" aria-label="Remover ${U.esc(a.titulo)}">${ICONE_LIXO}</button>
        </span>
      </li>`).join('');
    el.innerHTML = `
      ${cabecalho(estado, fase, `<span class="titulo-com-icone">${icone(m.id)}${U.esc(m.nome)}</span>`, true)}
      <section class="cartao">
        <div class="materia-titulo">
          <span class="suave pequeno">Toque no nome do tópico para estudar.</span>
          <span class="selo ${itens.length && feitos === itens.length ? 'ok' : 'info'}">${feitos}/${itens.length}</span>
        </div>
        ${m.id === 'ingles' ? '<a class="pequeno" href="#ingles">Abrir a trilha de inglês (níveis, cartões e nivelamento) →</a>' : ''}
        <ul class="lista-assuntos">${lis || '<li class="suave pequeno">Nenhum assunto desta matéria nesta fase.</li>'}</ul>
        <form class="form-inline" data-materia="${m.id}">
          <input type="text" name="titulo" placeholder="Novo assunto…" aria-label="Novo assunto de ${U.esc(m.nome)}" required>
          <button class="botao" type="submit">Adicionar</button>
        </form>
      </section>`;
  }

  function render(el, param) {
    const estado = App.store.get();
    if (faseEscolhida === null) faseEscolhida = Math.min(3, Math.max(1, App.calc.faseAtual(estado)));
    const fase = faseEscolhida;
    const materia = param && D.materias.find((m) => m.id === param);
    if (materia) telaMateria(el, estado, fase, materia); else telaGrade(el, estado, fase);

    // Um único "ouvinte" para a tela toda (delegação de eventos)
    el.onclick = (ev) => {
      const botaoFase = ev.target.closest('[data-fase]');
      if (botaoFase) { faseEscolhida = Number(botaoFase.dataset.fase); render(el, param); return; }

      const acao = ev.target.closest('[data-acao]');
      if (!acao) return;
      const li = acao.closest('li[data-id]');
      const assunto = li && estado.assuntos.find((a) => a.id === li.dataset.id);
      if (!assunto) return;

      if (acao.dataset.acao === 'editar') {
        const novo = prompt('Novo nome do assunto:', assunto.titulo);
        if (novo && novo.trim()) { assunto.titulo = novo.trim(); App.store.salvar(); render(el, param); }
      } else if (acao.dataset.acao === 'remover') {
        if (confirm('Remover "' + assunto.titulo + '"?')) {
          estado.assuntos = estado.assuntos.filter((a) => a !== assunto);
          App.store.salvar();
          render(el, param);
        }
      }
    };

    el.onchange = (ev) => {
      if (ev.target.dataset.acao !== 'marcar') return;
      const li = ev.target.closest('li[data-id]');
      const assunto = estado.assuntos.find((a) => a.id === li.dataset.id);
      App.calc.marcarEstudado(estado, assunto, ev.target.checked); // também agenda as revisões
      App.store.salvar();
      render(el, param);
    };

    el.onsubmit = (ev) => {
      ev.preventDefault();
      const form = ev.target;
      const titulo = form.titulo.value.trim();
      if (!titulo) return;
      estado.assuntos.push({ id: U.novoId(), materia: form.dataset.materia, fase, titulo, estudado: false });
      App.store.salvar();
      render(el, param);
      U.aviso('Assunto adicionado');
    };
  }

  return { render, titulo: 'Assuntos' };
})();
