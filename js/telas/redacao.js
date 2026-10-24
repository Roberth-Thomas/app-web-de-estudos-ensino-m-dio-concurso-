/* =========================================================
   telas/redacao.js — escrever, revisar e guardar textos
   O rascunho é salvo enquanto você digita, então dá para
   fechar o app e continuar depois.
   ========================================================= */
App.telas = App.telas || {};

App.telas.redacao = (function () {
  const U = App.util;
  const D = App.dados;
  let timerRascunho = null;

  function temaAleatorio(atual) {
    const opcoes = D.temasRedacao.filter((t) => t.tema !== atual);
    return opcoes[Math.floor(Math.random() * opcoes.length)].tema;
  }

  function itensChecklist(marcados, desabilitado) {
    return D.checklistRevisao.map((item) => `
      <li><label>
        <input type="checkbox" data-item="${item.id}" ${marcados[item.id] ? 'checked' : ''} ${desabilitado ? 'disabled' : ''}>
        <span>${U.esc(item.texto)}</span>
      </label></li>`).join('');
  }

  function render(el) {
    const estado = App.store.get();
    const r = estado.rascunho;
    if (!r.tema) { r.tema = temaAleatorio(''); App.store.salvar(); }
    const palavras = U.contarPalavras(r.texto);

    const salvos = estado.redacoes.slice().sort((a, b) => (a.data < b.data ? 1 : -1));
    const mediaPalavras = salvos.length
      ? Math.round(salvos.reduce((soma, t) => soma + U.contarPalavras(t.texto), 0) / salvos.length) : 0;
    const lista = salvos.map((t) => {
      const marcados = Object.values(t.checklist || {}).filter(Boolean).length;
      return `
        <li data-id="${U.esc(t.id)}">
          <details>
            <summary style="cursor:pointer">
              <strong>${U.dataCurta(U.lerISO(t.data))}</strong> — ${U.esc(t.tema)}
              <span class="suave pequeno">· ${U.contarPalavras(t.texto)} palavras · revisão ${marcados}/${D.checklistRevisao.length}</span>
            </summary>
            <div class="texto-salvo" style="margin:.6rem 0">${U.esc(t.texto)}</div>
            <ul class="revisao">${itensChecklist(t.checklist || {}, true)}</ul>
            <button class="botao pequeno perigo" data-acao="apagar" style="margin-top:.6rem">Apagar texto</button>
          </details>
        </li>`;
    }).join('');

    el.innerHTML = App.telas.plano.cartaoResumo() + `
      <section class="cartao">
        <h1>Redação</h1>
        <p class="suave pequeno">Texto curto de sábado: use o que estudou na semana. Sugestão: 150 a 300 palavras.</p>
        <div class="bloco-estudo">
          <div style="flex:1">
            <div class="rotulo">Tema sugerido</div>
            <div class="titulo" id="tema-atual">${U.esc(r.tema)}</div>
            <button class="link-botao pequeno" data-acao="outro-tema">Sortear outro tema</button>
          </div>
        </div>
      </section>

      <div class="grade layout-redacao">
        <section class="cartao">
          <label for="texto" class="oculto-visual">Seu texto</label>
          <textarea id="texto" placeholder="Comece a escrever aqui…">${U.esc(r.texto)}</textarea>
          <div class="linha entre" style="margin-top:.6rem">
            <span class="suave" id="contador">${palavras} palavra(s)</span>
            <button class="botao primario" data-acao="salvar">Salvar texto</button>
          </div>
          ${App.comp.botoesCorrecao('data-acao="corrigir"')}
          <div id="correcao-redacao"></div>
        </section>
        <aside class="cartao">
          <h2>Checklist de revisão</h2>
          <p class="suave pequeno">Releia o texto e marque cada item conferido.</p>
          <ul class="revisao">${itensChecklist(r.checklist, false)}</ul>
        </aside>
      </div>

      <section class="cartao">
        <h2>Meus textos (${salvos.length})</h2>
        ${salvos.length ? `<p class="suave pequeno">Média de ${mediaPalavras} palavras por texto. Abra os antigos para ver sua evolução.</p>
          <ul class="lista-textos">${lista}</ul>` : '<p class="suave">Nenhum texto salvo ainda.</p>'}
      </section>`;

    const textarea = el.querySelector('#texto');
    const contador = el.querySelector('#contador');

    // Atualiza o contador na hora e salva o rascunho 1s depois de parar de digitar
    el.oninput = (ev) => {
      if (ev.target !== textarea) return;
      r.texto = textarea.value;
      contador.textContent = U.contarPalavras(r.texto) + ' palavra(s)';
      clearTimeout(timerRascunho);
      timerRascunho = setTimeout(() => App.store.salvar(), 1000);
    };

    el.onchange = (ev) => {
      const item = ev.target.dataset.item;
      if (!item || ev.target.disabled) return;
      r.checklist[item] = ev.target.checked;
      App.store.salvar();
    };

    el.onclick = (ev) => {
      const acao = ev.target.closest('[data-acao]');
      if (!acao) return;
      if (acao.dataset.acao === 'outro-tema') {
        r.tema = temaAleatorio(r.tema);
        App.store.salvar();
        el.querySelector('#tema-atual').textContent = r.tema;
      } else if (acao.dataset.acao === 'corrigir') {
        r.texto = textarea.value;
        if (!U.contarPalavras(r.texto)) { U.aviso('Escreva algo antes de pedir a correção'); return; }
        const pedido = App.comp.pedidoDeCorrecao({
          modo: 'redacao', materia: 'redação', pergunta: r.tema, resposta: r.texto,
          contexto: D.checklistRevisao.map((item) => item.texto),
        });
        App.comp.enviarParaIA(acao.dataset.ia, pedido).then((html) => {
          el.querySelector('#correcao-redacao').innerHTML = html;
        });
      } else if (acao.dataset.acao === 'salvar') {
        r.texto = textarea.value;
        if (!U.contarPalavras(r.texto)) { U.aviso('Escreva algo antes de salvar'); return; }
        clearTimeout(timerRascunho);
        estado.redacoes.push({ id: U.novoId(), data: U.iso(U.hoje()), tema: r.tema, texto: r.texto, checklist: Object.assign({}, r.checklist) });
        estado.rascunho = { tema: temaAleatorio(r.tema), texto: '', checklist: {} };
        App.store.salvar();
        U.aviso('Texto salvo!');
        render(el);
      } else if (acao.dataset.acao === 'apagar') {
        const id = acao.closest('li[data-id]').dataset.id;
        if (confirm('Apagar este texto? Não dá para desfazer.')) {
          estado.redacoes = estado.redacoes.filter((t) => t.id !== id);
          App.store.salvar();
          render(el);
        }
      }
    };
  }

  /** Ao sair da tela, salva o rascunho pendente na hora */
  function sair() {
    if (timerRascunho) { clearTimeout(timerRascunho); timerRascunho = null; App.store.salvar(); }
  }

  return { render, sair, titulo: 'Redação' };
})();
