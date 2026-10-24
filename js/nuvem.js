/* =========================================================
   nuvem.js — sincroniza o progresso com o seu Google Drive
   Como funciona:
   1. Você toca em "Conectar Google Drive" e faz login com sua conta.
   2. O app ganha permissão SÓ para uma pasta oculta e exclusiva dele
      no seu Drive (appDataFolder). Ele não enxerga seus outros arquivos.
   3. Ao abrir o app (e ao voltar para ele), baixa o save da nuvem e
      fica com o mais recente.
   4. A cada mudança, envia o save alguns segundos depois.
      Sem internet, guarda local e envia quando a conexão voltar.
   Regra de conflito: vale a última gravação (campo atualizadoEm).
   5. Caderno → Obsidian: o botão "Enviar ao Drive" grava as notas como
      arquivos .md numa pasta VISÍVEL "EstudosAPP Caderno". Use essa pasta
      como cofre do Obsidian (ou dentro dele). O app só enxerga os arquivos
      que ele mesmo criou (permissão drive.file).
   ========================================================= */
App.nuvem = (function () {
  // appdata: o save oculto · drive.file: só os arquivos que o app criar (pasta do caderno)
  const ESCOPO = 'https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/drive.file';
  const PASTA_CADERNO = 'EstudosAPP Caderno';
  const TIPO_PASTA = 'application/vnd.google-apps.folder';
  const NOME_ARQUIVO = 'estudos-save.json';
  const API = 'https://www.googleapis.com/drive/v3/files';
  const UPLOAD = 'https://www.googleapis.com/upload/drive/v3/files';
  const CHAVE_TOKEN = 'estudosapp:nuvem-token';   // { token, expira }
  const CHAVE_LOCAL = 'estudosapp:nuvem-local';   // dados deste aparelho (não sincronizados)
  const ESPERA_ENVIO_MS = 3000;

  /** Erro específico para "precisa fazer login de novo" */
  class ErroLogin extends Error {}

  let status = { estado: 'desligado', mensagem: '' };
  let timerEnvio = null;
  let sincronizando = false;
  const ouvintes = [];

  /* ---------- pequenos ajudantes de leitura/gravação local ---------- */
  function lerJSON(chave, padrao) {
    try { return JSON.parse(localStorage.getItem(chave)) || padrao; } catch (e) { return padrao; }
  }
  function gravarJSON(chave, valor) {
    try { localStorage.setItem(chave, JSON.stringify(valor)); } catch (e) { /* sem espaço: ignora */ }
  }
  function info() {
    return lerJSON(CHAVE_LOCAL, { conectado: false, jaSincronizou: false, arquivoId: null, pendente: false });
  }
  function salvarInfo(mudancas) { gravarJSON(CHAVE_LOCAL, Object.assign(info(), mudancas)); }

  function mudarStatus(estado, mensagem = '') {
    status = { estado, mensagem };
    ouvintes.forEach((fn) => fn(status));
  }

  /** A nuvem só funciona se houver CLIENT_ID e o app estiver num endereço http(s) */
  function disponivel() {
    return Boolean(App.configNuvem.CLIENT_ID) && location.protocol.startsWith('http');
  }

  /* ---------- login com Google (Google Identity Services) ---------- */
  let promessaScript = null;
  function carregarScriptGoogle() {
    if (window.google && google.accounts && google.accounts.oauth2) return Promise.resolve();
    if (!promessaScript) {
      promessaScript = new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = 'https://accounts.google.com/gsi/client';
        s.async = true;
        s.onload = resolve;
        s.onerror = () => { promessaScript = null; reject(new Error('Não consegui carregar o login do Google (sem internet?)')); };
        document.head.appendChild(s);
      });
    }
    return promessaScript;
  }

  function tokenSalvo() {
    const t = lerJSON(CHAVE_TOKEN, null);
    // margem de 1 minuto para não usar um token prestes a vencer
    return t && t.expira > Date.now() + 60000 ? t.token : null;
  }

  /**
   * Pede um token de acesso ao Google. Abre a janelinha de login,
   * por isso precisa ser chamado direto do clique do usuário
   * (navegadores bloqueiam pop-ups que não vêm de um clique).
   */
  function pedirToken() {
    return new Promise((resolve, reject) => {
      const cliente = google.accounts.oauth2.initTokenClient({
        client_id: App.configNuvem.CLIENT_ID,
        scope: ESCOPO,
        callback: (resposta) => {
          if (resposta.error) return reject(new Error(resposta.error_description || resposta.error));
          gravarJSON(CHAVE_TOKEN, { token: resposta.access_token, expira: Date.now() + resposta.expires_in * 1000 });
          resolve(resposta.access_token);
        },
        error_callback: (erro) => reject(new Error(erro.type === 'popup_closed' ? 'Login cancelado.' : 'Falha no login: ' + erro.type)),
      });
      cliente.requestAccessToken({ prompt: info().conectado ? '' : 'consent' });
    });
  }

  /* ---------- chamadas à API do Drive ---------- */
  async function api(url, opcoes = {}) {
    const token = tokenSalvo();
    if (!token) throw new ErroLogin('Sessão do Google expirou.');
    const resposta = await fetch(url, Object.assign({}, opcoes, {
      headers: Object.assign({ Authorization: 'Bearer ' + token }, opcoes.headers || {}),
    }));
    if (resposta.status === 401) {
      localStorage.removeItem(CHAVE_TOKEN);
      throw new ErroLogin('Sessão do Google expirou.');
    }
    if (!resposta.ok) throw new Error('Google Drive respondeu ' + resposta.status);
    return resposta;
  }

  async function acharArquivo() {
    const q = encodeURIComponent("name = '" + NOME_ARQUIVO + "'");
    const r = await api(API + '?spaces=appDataFolder&q=' + q + '&fields=files(id,modifiedTime)');
    const json = await r.json();
    return json.files && json.files[0] ? json.files[0] : null;
  }

  async function baixar(id) {
    const r = await api(API + '/' + id + '?alt=media');
    return r.json();
  }

  async function enviar(dados) {
    const corpo = JSON.stringify(dados);
    const id = info().arquivoId;
    if (id) {
      // Atualiza o arquivo que já existe
      await api(UPLOAD + '/' + id + '?uploadType=media', {
        method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: corpo,
      });
      return;
    }
    // Cria o arquivo na pasta oculta do app
    const form = new FormData();
    form.append('metadata', new Blob([JSON.stringify({ name: NOME_ARQUIVO, parents: ['appDataFolder'] })], { type: 'application/json' }));
    form.append('file', new Blob([corpo], { type: 'application/json' }));
    const r = await api(UPLOAD + '?uploadType=multipart&fields=id', { method: 'POST', body: form });
    salvarInfo({ arquivoId: (await r.json()).id });
  }

  function horaAgora() {
    return new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  }

  function tratarErro(erro) {
    if (erro instanceof ErroLogin) {
      mudarStatus('reconectar', 'Toque para reconectar ao Google Drive');
    } else if (!navigator.onLine) {
      salvarInfo({ pendente: true });
      mudarStatus('offline', 'Sem internet — envio quando voltar');
    } else {
      console.error(erro);
      mudarStatus('erro', erro.message);
    }
  }

  /**
   * Compara o save local com o da nuvem e fica com o mais recente.
   * Na primeira vez neste aparelho, se os dois tiverem dados, pergunta.
   */
  async function sincronizar() {
    if (sincronizando) return;
    sincronizando = true;
    mudarStatus('sincronizando', 'Sincronizando…');
    try {
      const local = App.store.get();
      const arquivo = await acharArquivo();
      if (!arquivo) {
        salvarInfo({ arquivoId: null });
        await enviar(local);
      } else {
        salvarInfo({ arquivoId: arquivo.id });
        const nuvem = await baixar(arquivo.id);
        const dataNuvem = nuvem.atualizadoEm || '';
        const dataLocal = local.atualizadoEm || '';
        let usarNuvem = dataNuvem > dataLocal;

        // Primeira sincronização deste aparelho, com progresso dos dois lados
        if (!info().jaSincronizou && dataLocal && dataNuvem && dataNuvem !== dataLocal) {
          const quando = new Date(dataNuvem).toLocaleString('pt-BR');
          usarNuvem = confirm(
            'Encontrei um progresso salvo no Google Drive (atualizado em ' + quando + ').\n\n' +
            'OK = usar o progresso da nuvem neste aparelho\n' +
            'Cancelar = enviar o progresso deste aparelho para a nuvem');
          if (!usarNuvem) await enviar(local);
        } else if (dataLocal > dataNuvem) {
          await enviar(local);
        }

        if (usarNuvem) {
          App.store.substituir(nuvem);
          App.aoTrocarEstado();
        }
      }
      salvarInfo({ jaSincronizou: true, pendente: false });
      mudarStatus('ok', 'Sincronizado às ' + horaAgora());
    } catch (erro) {
      tratarErro(erro);
    } finally {
      sincronizando = false;
    }
  }

  /** Chamado a cada alteração: espera alguns segundos e envia (junta várias mudanças num envio só) */
  function agendarEnvio() {
    if (!disponivel() || !info().conectado) return;
    salvarInfo({ pendente: true });
    clearTimeout(timerEnvio);
    timerEnvio = setTimeout(enviarAgora, ESPERA_ENVIO_MS);
  }

  async function enviarAgora() {
    if (!navigator.onLine) { mudarStatus('offline', 'Sem internet — envio quando voltar'); return; }
    mudarStatus('sincronizando', 'Salvando na nuvem…');
    try {
      await enviar(App.store.get());
      salvarInfo({ pendente: false });
      mudarStatus('ok', 'Salvo às ' + horaAgora());
    } catch (erro) {
      // Arquivo apagado do Drive? Esquece o id e tenta criar de novo uma vez
      if (/404/.test(erro.message) && info().arquivoId) {
        salvarInfo({ arquivoId: null });
        return enviarAgora();
      }
      tratarErro(erro);
    }
  }

  /* ---------- Caderno → pasta visível no Drive (para o Obsidian) ---------- */
  const textoQuery = (t) => t.replace(/\\/g, '\\\\').replace(/'/g, "\\'");

  /** Acha (ou cria) uma pasta pelo nome, dentro de outra pasta (ou na raiz do Drive) */
  async function pasta(nome, pai) {
    const q = `name = '${textoQuery(nome)}' and mimeType = '${TIPO_PASTA}' and trashed = false` + (pai ? ` and '${pai}' in parents` : '');
    const r = await api(API + '?q=' + encodeURIComponent(q) + '&fields=files(id)');
    const achada = (await r.json()).files[0];
    if (achada) return achada.id;
    const criada = await api(API + '?fields=id', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: nome, mimeType: TIPO_PASTA, parents: pai ? [pai] : undefined }),
    });
    return (await criada.json()).id;
  }

  /**
   * Grava os arquivos [{ caminho: 'Caderno/Português/Nota.md', conteudo }]
   * dentro da pasta "EstudosAPP Caderno", criando as subpastas.
   * Arquivo que já existe é atualizado (não duplica). Precisa vir de um clique.
   */
  async function enviarArquivos(arquivos, aoAvancar) {
    if (!disponivel()) throw new Error('Configure o ID do cliente Google primeiro (README, seção 4).');
    if (!tokenSalvo()) { await carregarScriptGoogle(); await pedirToken(); salvarInfo({ conectado: true }); }
    const pastas = { '': await pasta(PASTA_CADERNO, null) };
    let feitos = 0;
    for (const a of arquivos) {
      const partes = a.caminho.split('/');
      const nome = partes.pop();
      let caminho = '';
      for (const p of partes) {
        const pai = pastas[caminho];
        caminho = caminho ? caminho + '/' + p : p;
        if (!pastas[caminho]) pastas[caminho] = await pasta(p, pai);
      }
      const pai = pastas[caminho];
      const q = `name = '${textoQuery(nome)}' and '${pai}' in parents and trashed = false`;
      const existente = (await (await api(API + '?q=' + encodeURIComponent(q) + '&fields=files(id)')).json()).files[0];
      const corpo = new Blob([a.conteudo], { type: 'text/markdown' });
      if (existente) {
        await api(UPLOAD + '/' + existente.id + '?uploadType=media', { method: 'PATCH', headers: { 'Content-Type': 'text/markdown' }, body: corpo });
      } else {
        const form = new FormData();
        form.append('metadata', new Blob([JSON.stringify({ name: nome, parents: [pai], mimeType: 'text/markdown' })], { type: 'application/json' }));
        form.append('file', corpo);
        await api(UPLOAD + '?uploadType=multipart&fields=id', { method: 'POST', body: form });
      }
      feitos++;
      if (aoAvancar) aoAvancar(feitos, arquivos.length);
    }
    return feitos;
  }

  /* ---------- ações chamadas pela tela ---------- */

  /** Botão "Conectar" / "Reconectar". Precisa vir de um clique. */
  async function conectar() {
    try {
      if (!tokenSalvo()) {
        await carregarScriptGoogle(); // normalmente já carregado no início
        await pedirToken();
      }
      salvarInfo({ conectado: true });
      await sincronizar();
    } catch (erro) {
      mudarStatus(info().conectado ? 'reconectar' : 'desligado', erro.message);
      App.util.aviso('' + erro.message);
    }
  }

  function desconectar() {
    const t = lerJSON(CHAVE_TOKEN, null);
    if (t && window.google && google.accounts) google.accounts.oauth2.revoke(t.token, () => {});
    localStorage.removeItem(CHAVE_TOKEN);
    localStorage.removeItem(CHAVE_LOCAL);
    mudarStatus('desligado', '');
  }

  function iniciar() {
    if (!disponivel()) return;
    App.store.aoSalvar(agendarEnvio);
    // Já carrega o script do Google para o clique em "Conectar" abrir o pop-up na hora
    carregarScriptGoogle().catch(() => {});

    if (info().conectado) {
      if (tokenSalvo()) sincronizar();
      else mudarStatus('reconectar', 'Toque para reconectar ao Google Drive');
    }

    window.addEventListener('online', () => { if (info().conectado && info().pendente) enviarAgora(); });
    // Ao voltar para o app (trocou de aba ou de aparelho), busca a versão mais nova
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible' && info().conectado && tokenSalvo()) {
        if (info().pendente) enviarAgora(); else sincronizar();
      }
    });
  }

  return {
    iniciar, conectar, desconectar, sincronizar, disponivel, enviarArquivos,
    conectado: () => info().conectado,
    status: () => status,
    aoMudar: (fn) => ouvintes.push(fn),
  };
})();
