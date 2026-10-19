/* =========================================================
   acesso.js — entrar com a digital (chave de acesso / passkey)
   Usado pela tela de entrada do site (functions/_middleware.js)
   e pela tela de Configurações. Não depende do resto do app.

   O "passe" que o servidor devolve no cadastro fica só neste aparelho
   (localStorage). Ele não é segredo: sem a sua digital não serve para nada.
   Só funciona no site publicado (https); no PC local fica indisponível.
   ========================================================= */
window.Acesso = (function () {
  const CHAVE = 'estudosapp:digital';
  const enc = new TextEncoder();

  function paraB64(buffer) {
    let s = '';
    new Uint8Array(buffer).forEach((b) => { s += String.fromCharCode(b); });
    return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }
  function deB64(texto) {
    const s = texto.replace(/-/g, '+').replace(/_/g, '/');
    return Uint8Array.from(atob(s + '='.repeat((4 - (s.length % 4)) % 4)), (c) => c.charCodeAt(0));
  }

  /** A digital só existe no site publicado (https) e em navegadores com WebAuthn */
  function disponivel() {
    return Boolean(window.PublicKeyCredential && navigator.credentials) && location.protocol === 'https:';
  }

  function salvo() {
    try { return JSON.parse(localStorage.getItem(CHAVE)) || null; } catch (e) { return null; }
  }
  function esquecer() {
    try { localStorage.removeItem(CHAVE); } catch (e) { /* nada a fazer */ }
  }

  async function pedir(caminho, corpo) {
    const resposta = await fetch(caminho, corpo === undefined ? { cache: 'no-store' } : {
      method: 'POST', cache: 'no-store', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(corpo),
    });
    let dados = {};
    try { dados = await resposta.json(); } catch (e) { /* resposta sem JSON */ }
    if (!resposta.ok) throw new Error(dados.erro || 'Não consegui falar com o servidor.');
    return dados;
  }

  /** O desafio é um texto assinado pelo servidor; vira os bytes do "challenge" */
  async function desafio() {
    return enc.encode((await pedir('/_acesso/desafio')).desafio);
  }

  /** Erros do leitor em português */
  function traduzir(erro) {
    if (erro && erro.name === 'NotAllowedError') return new Error('Leitura cancelada ou o tempo acabou.');
    if (erro && erro.name === 'InvalidStateError') return new Error('Esta digital já está cadastrada neste aparelho.');
    return erro instanceof Error ? erro : new Error('Não deu certo.');
  }

  async function entrarComSenha(usuario, senha) {
    await pedir('/_acesso/senha', { usuario, senha });
  }

  /** Cadastra a digital deste aparelho (precisa já ter entrado) */
  async function cadastrar() {
    let credencial;
    try {
      credencial = await navigator.credentials.create({ publicKey: {
        challenge: await desafio(),
        rp: { name: 'Estudos', id: location.hostname },
        user: { id: crypto.getRandomValues(new Uint8Array(16)), name: 'estudos', displayName: 'Estudos' },
        pubKeyCredParams: [{ type: 'public-key', alg: -7 }, { type: 'public-key', alg: -257 }],
        authenticatorSelection: { authenticatorAttachment: 'platform', userVerification: 'required', residentKey: 'preferred' },
        attestation: 'none',
        timeout: 60000,
      } });
    } catch (erro) { throw traduzir(erro); }
    const r = credencial.response;
    if (!r.getPublicKey) throw new Error('Este navegador não informa a chave da digital. Atualize o Chrome.');
    const { chave } = await pedir('/_acesso/cadastrar', {
      id: credencial.id,
      clientDataJSON: paraB64(r.clientDataJSON),
      publicKey: paraB64(r.getPublicKey()),
      alg: r.getPublicKeyAlgorithm(),
    });
    localStorage.setItem(CHAVE, JSON.stringify({ chave, id: credencial.id, em: new Date().toISOString() }));
  }

  /** Entra com a digital já cadastrada neste aparelho */
  async function entrar() {
    const s = salvo();
    if (!s) throw new Error('Nenhuma digital cadastrada neste aparelho.');
    let credencial;
    try {
      credencial = await navigator.credentials.get({ publicKey: {
        challenge: await desafio(),
        rpId: location.hostname,
        allowCredentials: [{ type: 'public-key', id: deB64(s.id) }],
        userVerification: 'required',
        timeout: 60000,
      } });
    } catch (erro) { throw traduzir(erro); }
    const r = credencial.response;
    await pedir('/_acesso/digital', {
      chave: s.chave,
      id: credencial.id,
      clientDataJSON: paraB64(r.clientDataJSON),
      authenticatorData: paraB64(r.authenticatorData),
      signature: paraB64(r.signature),
    });
  }

  return { disponivel, salvo, esquecer, entrarComSenha, cadastrar, entrar };
})();
