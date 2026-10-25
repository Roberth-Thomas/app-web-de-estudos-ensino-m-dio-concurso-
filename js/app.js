/* =========================================================
   app.js — liga tudo: navegação, tema, primeira abertura,
   indicador da nuvem e o service worker (modo offline/PWA).
   ========================================================= */
(function () {
  const U = App.util;
  const el = document.getElementById('tela');
  let telaAtual = null;
  let rotaAnterior = null; // para voltar ao topo só quando o endereço muda

  /** Lê a rota do endereço: "#exercicios/simulado" → { nome: 'exercicios', param: 'simulado' } */
  function rota() {
    const [nome, param] = location.hash.replace(/^#/, '').split('/');
    return { nome: App.telas[nome] ? nome : 'hoje', param: param || null };
  }

  /** Desenha a tela da rota atual */
  function render() {
    const { nome, param } = rota();
    const tela = App.telas[nome];
    if (telaAtual && telaAtual !== tela && telaAtual.sair) telaAtual.sair();
    const mudouDeTela = telaAtual !== tela;
    telaAtual = tela;

    // Limpa os "ouvintes" da tela anterior antes de desenhar a nova
    el.onclick = el.onchange = el.oninput = el.onsubmit = null;
    tela.render(el, param);

    document.title = tela.titulo + ' · Estudos';
    const aba = tela.aba || nome; // telas sem aba própria (ex.: estudar) acendem a aba "mãe"
    document.querySelectorAll('.abas a').forEach((a) => {
      a.classList.toggle('ativa', a.dataset.aba === aba);
      if (a.dataset.aba === aba) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    // Volta ao topo ao trocar de tela ou de página (ex.: próximo capítulo), não ao redesenhar a mesma
    if (mudouDeTela || location.hash !== rotaAnterior) window.scrollTo(0, 0);
    rotaAnterior = location.hash;
  }

  /** Aplica o tema salvo (auto / claro / escuro) */
  App.aplicarTema = function () {
    const tema = App.store.get().config.tema;
    if (tema === 'claro' || tema === 'escuro') document.documentElement.dataset.tema = tema;
    else delete document.documentElement.dataset.tema;
  };

  /** Chamado quando o estado inteiro foi trocado (nuvem, importação, reset) */
  App.aoTrocarEstado = function () {
    App.aplicarTema();
    const dialogo = document.getElementById('dialogo-inicio');
    if (!App.store.get().config.inicio) perguntarInicio();
    else if (dialogo) { dialogo.close(); dialogo.remove(); } // o progresso novo já tem data
    render();
  };

  /** Primeira abertura: pergunta quando o plano começou */
  function perguntarInicio() {
    if (document.getElementById('dialogo-inicio')) return;
    const dialogo = document.createElement('dialog');
    dialogo.id = 'dialogo-inicio';
    dialogo.innerHTML = `
      <form method="dialog">
        <h2>Bem-vindo!</h2>
        <p>Quando você começou (ou vai começar) o plano de estudos? As fases de 2 meses contam a partir desta data.</p>
        <div class="campo">
          <label for="data-inicio">Data de início</label>
          <input type="date" id="data-inicio" value="${U.iso(U.hoje())}" required>
        </div>
        <button class="botao primario bloco" value="ok">Começar</button>
        <p class="suave pequeno" style="margin:.6rem 0 0">Dá para mudar depois em Configurações.</p>
      </form>`;
    document.body.appendChild(dialogo);
    // Usa o "submit" do formulário (dispara na hora do clique), em vez do
    // evento "close" do diálogo, que alguns navegadores atrasam.
    dialogo.querySelector('form').addEventListener('submit', (ev) => {
      ev.preventDefault();
      const valor = dialogo.querySelector('#data-inicio').value || U.iso(U.hoje());
      const estado = App.store.get();
      if (!estado.config.inicio) {
        estado.config.inicio = valor;
        App.store.salvar();
      }
      dialogo.close();
      dialogo.remove();
      render();
    });
    // Esc não fecha sem escolher a data
    dialogo.addEventListener('cancel', (ev) => ev.preventDefault());
    dialogo.showModal();
  }

  /** Bolinha de status da nuvem no topo */
  function atualizarIndicador(status) {
    const botao = document.getElementById('indicador-nuvem');
    if (!App.nuvem.disponivel() || !App.nuvem.conectado()) { botao.hidden = true; return; }
    botao.hidden = false;
    const icones = { ok: 'Salvo', sincronizando: 'Sincronizando…', offline: 'Offline', reconectar: 'Reconectar', erro: 'Erro' };
    botao.textContent = icones[status.estado] || '';
    botao.title = status.mensagem;
    botao.className = 'nuvem-indicador ' + (status.estado === 'ok' ? 'ok' : ['reconectar', 'erro', 'offline'].includes(status.estado) ? 'alerta' : '');
  }

  document.getElementById('indicador-nuvem').addEventListener('click', () => {
    // "Reconectar" precisa abrir o login direto do clique (senão o navegador bloqueia o pop-up)
    if (App.nuvem.status().estado === 'reconectar') App.nuvem.conectar();
    else location.hash = '#config';
  });

  /**
   * Atualizar o app: apaga a cópia offline (service worker e cache) e baixa tudo de novo.
   * O progresso fica no localStorage e na nuvem: não é apagado.
   */
  App.atualizarApp = async function () {
    if (telaAtual && telaAtual.sair) telaAtual.sair(); // salva o que estava pendente (ex.: resposta sendo digitada)
    try {
      if ('serviceWorker' in navigator) {
        for (const r of await navigator.serviceWorker.getRegistrations()) await r.unregister();
      }
      if (window.caches) for (const nome of await caches.keys()) await caches.delete(nome);
    } catch (erro) { /* mesmo sem conseguir limpar tudo, recarregar já ajuda */ }
    location.reload();
  };

  /** Versão guardada para uso offline (nome do cache: "estudos-vNN"), ou null */
  App.versaoApp = async function () {
    try { return (await caches.keys()).find((n) => n.startsWith('estudos-')) || null; } catch (e) { return null; }
  };

  /** Aviso que aparece quando uma versão nova assume com o app aberto */
  function avisarVersaoNova() {
    if (document.querySelector('.aviso-versao')) return;
    const aviso = document.createElement('div');
    aviso.className = 'aviso-versao';
    aviso.setAttribute('role', 'status');
    aviso.innerHTML = '<span>Nova versão do app disponível.</span><button type="button" class="botao pequeno primario">Atualizar</button>';
    aviso.querySelector('button').onclick = () => { if (telaAtual && telaAtual.sair) telaAtual.sair(); location.reload(); };
    document.body.appendChild(aviso);
  }

  /* ---------- início ---------- */
  App.aplicarTema();
  window.addEventListener('hashchange', render);
  App.nuvem.aoMudar((status) => {
    atualizarIndicador(status);
    if (rota().nome === 'config') render(); // mantém a tela de configurações atualizada
  });
  App.nuvem.iniciar();
  render();
  if (!App.store.get().config.inicio) perguntarInicio();

  // Service worker: deixa o app funcionar offline e ser "instalado" no celular.
  // Só funciona em http(s) — abrindo pelo arquivo (file://) ele é ignorado.
  // A versão nova assume sozinha (skipWaiting); se o app já estava aberto, aparece o aviso para recarregar.
  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    const jaTinhaVersao = Boolean(navigator.serviceWorker.controller);
    navigator.serviceWorker.addEventListener('controllerchange', () => { if (jaTinhaVersao) avisarVersaoNova(); });
    navigator.serviceWorker.register('sw.js').then((registro) => {
      // Procura versão nova ao voltar para o app e a cada 30 minutos com ele aberto
      document.addEventListener('visibilitychange', () => { if (!document.hidden) registro.update().catch(() => {}); });
      setInterval(() => registro.update().catch(() => {}), 30 * 60 * 1000);
    }).catch((erro) => console.warn('Service worker não registrado:', erro));
  }
})();
