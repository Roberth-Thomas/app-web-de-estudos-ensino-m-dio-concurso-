/* =========================================================
   telas/vestibular.js — questões reais do ENEM (prova oficial)
   Rota: #vestibular
   Cada cartão aponta para a questão no PDF do Inep. A pessoa lê
   lá, volta, escolhe a letra e vê o gabarito oficial e a dica.
   ========================================================= */
App.telas = App.telas || {};

App.telas.vestibular = (function () {
  const U = App.util;
  const D = App.dados;
  const LETRAS = ['A', 'B', 'C', 'D', 'E'];

  // Filtros e respostas da visita atual (ficam só na memória)
  const filtro = { materia: '', soTirinha: false };
  let escolhas = {}; // id da questão → letra escolhida

  function referencia(q) {
    return `${q.prova} ${q.ano} · ${q.dia}º dia · caderno ${q.caderno} · questão ${q.questao}`;
  }

  function cartao(q) {
    const m = D.materia(q.materia);
    const assunto = App.store.get().assuntos.find((a) => a.id === q.assunto);
    const escolhida = escolhas[q.id];
    const letras = LETRAS.map((l) => {
      let classe = '';
      if (escolhida && l === q.gabarito) classe = 'sucesso';
      else if (escolhida && l === escolhida) classe = 'perigo';
      return `<button class="botao ${classe}" data-id="${U.esc(q.id)}" data-letra="${l}" ${escolhida ? 'disabled' : ''}>${l}</button>`;
    }).join('');
    const retorno = escolhida ? `
      <div class="explicacao">
        <strong>${escolhida === q.gabarito ? '✅ Acertou!' : '❌ Errou. Gabarito oficial: ' + q.gabarito}</strong>
        <p style="margin:.4rem 0 0">${App.comp.formatar(App.comp.marcarTermos(q.dica, q.materia), q.materia)}</p>
        ${assunto ? `<a class="botao pequeno" href="#estudar/${assunto.id}" style="margin-top:.5rem">📖 Estudar: ${U.esc(assunto.titulo)}</a>` : ''}
      </div>` : '';

    return `
      <section class="cartao">
        <div class="linha entre">
          <span class="selo info">${m.emoji} ${U.esc(m.nome)}</span>
          ${q.temTirinha ? '<span class="selo alerta">💬 tirinha ou charge</span>' : ''}
        </div>
        <h2 style="margin-top:.6rem">${U.esc(referencia(q))}</h2>
        ${q.comando ? `<p class="suave pequeno">“${U.esc(q.comando)}” (Inep, ${q.prova} ${q.ano})</p>` : ''}
        <p>${U.esc(q.sobre)}</p>
        <a class="botao" href="${U.esc(q.url)}" target="_blank" rel="noopener">📄 Abrir a prova oficial</a>
        <p class="suave pequeno" style="margin:.6rem 0 .3rem">Leia a questão ${q.questao} no PDF e marque a sua resposta:</p>
        <div class="linha">${letras}</div>
        ${retorno}
      </section>`;
  }

  function render(el) {
    const todas = D.vestibular || [];
    const lista = todas.filter((q) =>
      (!filtro.materia || q.materia === filtro.materia) && (!filtro.soTirinha || q.temTirinha));
    const comQuestoes = D.materias.filter((m) => todas.some((q) => q.materia === m.id));
    const opcoes = comQuestoes.map((m) =>
      `<option value="${m.id}" ${filtro.materia === m.id ? 'selected' : ''}>${m.emoji} ${U.esc(m.nome)}</option>`).join('');
    const vazio = todas.length
      ? '<section class="cartao"><p>Nenhuma questão com esses filtros.</p></section>'
      : `<section class="cartao"><p>Ainda não há questões conferidas aqui.</p>
          <a class="botao" href="${U.esc(D.vestibularFonte)}" target="_blank" rel="noopener">📄 Provas e gabaritos no site do Inep</a></section>`;

    el.innerHTML = `
      <section class="cartao">
        <a href="#exercicios" class="pequeno">← Exercícios</a>
        <h1 style="margin-top:.6rem">Questões do ENEM</h1>
        <p class="suave">Questões de provas reais. Abra a prova oficial do Inep, resolva a questão indicada e volte aqui para marcar a letra.
          As tirinhas e os textos ficam na prova, com os autores; aqui fica só o resumo e a dica.</p>
        <div class="linha">
          <select id="v-materia" aria-label="Matéria"><option value="">Todas as matérias</option>${opcoes}</select>
          <label class="pequeno"><input type="checkbox" id="v-tirinha" ${filtro.soTirinha ? 'checked' : ''}> Só com tirinha ou charge</label>
        </div>
        <div class="suave pequeno" style="margin-top:.4rem">${lista.length} de ${todas.length} questões</div>
      </section>
      ${lista.length ? lista.map(cartao).join('') : vazio}`;

    el.onchange = (ev) => {
      if (ev.target.id === 'v-materia') filtro.materia = ev.target.value;
      else if (ev.target.id === 'v-tirinha') filtro.soTirinha = ev.target.checked;
      else return;
      render(el);
    };
    el.onclick = (ev) => {
      if (App.comp.cliqueGlossario(ev)) return;
      const botao = ev.target.closest('[data-letra]');
      if (!botao || escolhas[botao.dataset.id]) return;
      const q = todas.find((x) => x.id === botao.dataset.id);
      escolhas[q.id] = botao.dataset.letra;
      App.calc.registrarResposta(App.store.get(), q.materia, escolhas[q.id] === q.gabarito, q.assunto);
      App.store.salvar();
      const rolagem = window.scrollY;
      render(el);
      window.scrollTo(0, rolagem); // fica no mesmo cartão
    };
  }

  // Ao sair, as respostas da visita são esquecidas (o índice de acertos já foi gravado)
  function sair() { escolhas = {}; }

  return { render, sair, titulo: 'Questões do ENEM', aba: 'exercicios' };
})();
