/* =========================================================
   functions/_middleware.js — porta de entrada do site (Cloudflare Pages)
   Roda no servidor do Cloudflare ANTES de entregar qualquer arquivo,
   então sem entrar ninguém vê o app nem o código.

   Três jeitos de entrar:
   1. Digital (chave de acesso / passkey, WebAuthn): a chave privada fica no celular;
      aqui só conferimos a assinatura com a chave pública.
   2. Usuário e senha na tela de entrada (o gerenciador de senhas pode preencher).
   3. Autenticação básica (cabeçalho Authorization), como reserva.
   Depois de entrar, um cookie assinado libera o aparelho por 30 dias
   (renovado sozinho enquanto você usa).

   Não há banco de dados: a chave pública da digital volta para o celular
   dentro de um "passe" assinado por este servidor (HMAC). Sem a assinatura
   o passe não vale, e sem o celular a digital não assina.

   O usuário e a senha NÃO ficam aqui: configure no painel do Cloudflare,
   em Workers & Pages → estudos-rt → Settings → Variables and Secrets:
     ACESSO_USUARIO  (texto)
     ACESSO_SENHA    (tipo "Secret")
   A chave das assinaturas sai desses dois: trocar a senha desconecta todos
   os aparelhos e invalida as digitais cadastradas.
   Enquanto não estiverem configurados, o site fica fechado para todos.
   Este arquivo só vale no Cloudflare; no PC (localhost) ele é ignorado.
   Testes: testes/acesso.mjs (roda junto com node testes/validar.js).
   ========================================================= */

const DIA = 24 * 60 * 60;
const DIAS_SESSAO = 30;
const RENOVAR_COM_MENOS_DE = 15 * DIA;  // renova o cookie quando faltar menos que isso
const VALIDADE_DESAFIO = 5 * 60;        // segundos para usar um desafio da digital
const COOKIE = '__Host-estudos-sessao';
/** Arquivos sem nada secreto que precisam passar sem login: o js da tela de entrada e o sw.js
    (o celular busca o sw.js para se atualizar; se ele pedir login, a cópia velha fica presa para sempre) */
const PUBLICOS = ['/js/acesso.js', '/sw.js'];

const enc = new TextEncoder();
const dec = new TextDecoder();

/* ---------- Base64url ---------- */
function paraB64(bytes) {
  let s = '';
  new Uint8Array(bytes).forEach((b) => { s += String.fromCharCode(b); });
  return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function deB64(texto) {
  const s = String(texto).replace(/-/g, '+').replace(/_/g, '/');
  return Uint8Array.from(atob(s + '='.repeat((4 - (s.length % 4)) % 4)), (c) => c.charCodeAt(0));
}

/** Compara dois textos em tempo constante (não entrega pistas pelo tempo de resposta) */
function iguais(a, b) {
  const ta = enc.encode(a);
  const tb = enc.encode(b);
  let diferenca = ta.length ^ tb.length;
  for (let i = 0; i < Math.max(ta.length, tb.length); i++) diferenca |= (ta[i] || 0) ^ (tb[i] || 0);
  return diferenca === 0;
}
function bytesIguais(a, b) {
  if (a.length !== b.length) return false;
  let d = 0;
  for (let i = 0; i < a.length; i++) d |= a[i] ^ b[i];
  return d === 0;
}

const agora = () => Math.floor(Date.now() / 1000);

/* ---------- Passes assinados (HMAC-SHA-256) ---------- */
async function chave(env) {
  const semente = await crypto.subtle.digest('SHA-256', enc.encode('estudos-acesso:' + env.ACESSO_USUARIO + ':' + env.ACESSO_SENHA));
  return crypto.subtle.importKey('raw', semente, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign', 'verify']);
}
/** tipo: 's' = sessão, 'd' = desafio da digital, 'p' = passe da digital cadastrada */
async function criarPasse(env, tipo, dados, validade) {
  const corpo = paraB64(enc.encode(JSON.stringify({ ...dados, t: tipo, exp: validade ? agora() + validade : 0 })));
  const assinatura = await crypto.subtle.sign('HMAC', await chave(env), enc.encode(corpo));
  return corpo + '.' + paraB64(assinatura);
}
async function lerPasse(env, passe, tipo) {
  try {
    const [corpo, assinatura] = String(passe || '').split('.');
    if (!corpo || !assinatura) return null;
    const ok = await crypto.subtle.verify('HMAC', await chave(env), deB64(assinatura), enc.encode(corpo));
    if (!ok) return null;
    const dados = JSON.parse(dec.decode(deB64(corpo)));
    if (dados.t !== tipo) return null;
    if (dados.exp && dados.exp < agora()) return null;
    return dados;
  } catch (erro) {
    return null;
  }
}

/* ---------- Respostas ---------- */
const SEM_CACHE = { 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex, nofollow' };
function json(dados, status = 200, extra = {}) {
  return new Response(JSON.stringify(dados), { status, headers: { 'Content-Type': 'application/json; charset=utf-8', ...SEM_CACHE, ...extra } });
}
async function cookieSessao(env) {
  const passe = await criarPasse(env, 's', {}, DIAS_SESSAO * DIA);
  return `${COOKIE}=${passe}; Path=/; Secure; HttpOnly; SameSite=Lax; Max-Age=${DIAS_SESSAO * DIA}`;
}
function lerCookie(request) {
  const m = (request.headers.get('Cookie') || '').match(new RegExp('(?:^|;\\s*)' + COOKIE + '=([^;]+)'));
  return m ? m[1] : '';
}
const espera = (ms) => new Promise((r) => setTimeout(r, ms));

/* ---------- Conferência da digital (WebAuthn) ---------- */

/** Assinatura ECDSA vem em DER; o WebCrypto quer r||s com 32 bytes cada */
function derParaBruto(der) {
  let i = 0;
  if (der[i++] !== 0x30) throw new Error('DER');
  if (der[i] & 0x80) i += (der[i] & 0x7f) + 1; else i++;
  const partes = [];
  for (let k = 0; k < 2; k++) {
    if (der[i++] !== 0x02) throw new Error('DER');
    const n = der[i++];
    let v = der.slice(i, i + n);
    i += n;
    while (v.length > 32 && v[0] === 0) v = v.slice(1);
    if (v.length > 32) throw new Error('DER');
    const p = new Uint8Array(32);
    p.set(v, 32 - v.length);
    partes.push(p);
  }
  const bruto = new Uint8Array(64);
  bruto.set(partes[0], 0);
  bruto.set(partes[1], 32);
  return bruto;
}

async function importarChavePublica(spki, alg) {
  if (alg === -7) return crypto.subtle.importKey('spki', spki, { name: 'ECDSA', namedCurve: 'P-256' }, false, ['verify']);
  if (alg === -257) return crypto.subtle.importKey('spki', spki, { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' }, false, ['verify']);
  throw new Error('algoritmo não suportado');
}

/** Confere o clientDataJSON: tipo, origem e desafio (emitido por nós e ainda válido) */
async function conferirClientData(env, request, clientDataB64, tipo) {
  const bruto = deB64(clientDataB64);
  const cd = JSON.parse(dec.decode(bruto));
  if (cd.type !== tipo) return null;
  if (cd.origin !== new URL(request.url).origin) return null;
  const desafio = dec.decode(deB64(cd.challenge));
  if (!(await lerPasse(env, desafio, 'd'))) return null;
  return bruto;
}

async function entrarComDigital(env, request, corpo) {
  const passe = await lerPasse(env, corpo.chave, 'p');
  if (!passe || passe.id !== corpo.id) return false;
  const clientData = await conferirClientData(env, request, corpo.clientDataJSON, 'webauthn.get');
  if (!clientData) return false;
  const authData = deB64(corpo.authenticatorData);
  if (authData.length < 37) return false;
  // Os 32 primeiros bytes são o hash do site (rpId); o byte 32 traz as bandeiras
  const rpHash = new Uint8Array(await crypto.subtle.digest('SHA-256', enc.encode(new URL(request.url).hostname)));
  if (!bytesIguais(authData.slice(0, 32), rpHash)) return false;
  const bandeiras = authData[32];
  if (!(bandeiras & 0x01) || !(bandeiras & 0x04)) return false; // presença + verificação (digital/PIN)
  const hashCd = new Uint8Array(await crypto.subtle.digest('SHA-256', clientData));
  const assinado = new Uint8Array(authData.length + 32);
  assinado.set(authData, 0);
  assinado.set(hashCd, authData.length);
  const chavePub = await importarChavePublica(deB64(passe.k), passe.a);
  const assinatura = deB64(corpo.signature);
  if (passe.a === -7) return crypto.subtle.verify({ name: 'ECDSA', hash: 'SHA-256' }, chavePub, derParaBruto(assinatura), assinado);
  return crypto.subtle.verify('RSASSA-PKCS1-v1_5', chavePub, assinatura, assinado);
}

async function cadastrarDigital(env, request, corpo) {
  if (!(await conferirClientData(env, request, corpo.clientDataJSON, 'webauthn.create'))) return null;
  const alg = Number(corpo.alg);
  await importarChavePublica(deB64(corpo.publicKey), alg); // garante que a chave é válida
  return criarPasse(env, 'p', { id: String(corpo.id), k: String(corpo.publicKey), a: alg }, 0);
}

/* ---------- Entrar com o Google ----------
   Usa o mesmo cliente OAuth do Drive (o ID do cliente não é segredo).
   Só entra a conta com o e-mail que estiver em ACESSO_EMAIL (variável do Cloudflare).
   Conferimos a assinatura do Google (chaves públicas dele), o cliente (aud), quem emitiu (iss),
   a validade, o e-mail verificado e o "nonce": um desafio nosso, para o token não ser reaproveitado. */
const GOOGLE_CLIENT_ID = '1015026035973-lrpkjem5lge7t30pv01vpst6t7tif6ar.apps.googleusercontent.com';
const GOOGLE_CHAVES_URL = 'https://www.googleapis.com/oauth2/v3/certs';
let chavesGoogle = { lista: null, ate: 0 };

async function chavesDoGoogle(renovar) {
  if (!renovar && chavesGoogle.lista && chavesGoogle.ate > Date.now()) return chavesGoogle.lista;
  const resposta = await fetch(GOOGLE_CHAVES_URL);
  const dados = await resposta.json();
  chavesGoogle = { lista: dados.keys || [], ate: Date.now() + 60 * 60 * 1000 };
  return chavesGoogle.lista;
}

async function entrarComGoogle(env, token) {
  const [cab64, dados64, assinatura64] = String(token || '').split('.');
  if (!cab64 || !dados64 || !assinatura64) return false;
  const cab = JSON.parse(dec.decode(deB64(cab64)));
  if (cab.alg !== 'RS256') return false;
  let jwk = (await chavesDoGoogle(false)).find((k) => k.kid === cab.kid);
  if (!jwk) jwk = (await chavesDoGoogle(true)).find((k) => k.kid === cab.kid); // o Google troca as chaves de tempos em tempos
  if (!jwk) return false;
  const chavePub = await crypto.subtle.importKey('jwk', jwk, { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' }, false, ['verify']);
  const ok = await crypto.subtle.verify('RSASSA-PKCS1-v1_5', chavePub, deB64(assinatura64), enc.encode(cab64 + '.' + dados64));
  if (!ok) return false;
  const d = JSON.parse(dec.decode(deB64(dados64)));
  if (d.iss !== 'accounts.google.com' && d.iss !== 'https://accounts.google.com') return false;
  if (d.aud !== GOOGLE_CLIENT_ID) return false;
  if (!d.exp || d.exp < agora()) return false;
  if (d.email_verified !== true && d.email_verified !== 'true') return false;
  if (!d.nonce || !(await lerPasse(env, d.nonce, 'd'))) return false;
  return iguais(String(d.email || '').trim().toLowerCase(), String(env.ACESSO_EMAIL || '').trim().toLowerCase());
}

/* ---------- Rotas da entrada: /_acesso/... ---------- */
async function rotaAcesso(contexto, caminho, logado) {
  const { request, env } = contexto;
  if (caminho === '/_acesso/sair') {
    return new Response(null, { status: 302, headers: { Location: '/', 'Set-Cookie': `${COOKIE}=; Path=/; Secure; HttpOnly; SameSite=Lax; Max-Age=0`, ...SEM_CACHE } });
  }
  if (caminho === '/_acesso/desafio') {
    const n = paraB64(crypto.getRandomValues(new Uint8Array(16)));
    return json({ desafio: await criarPasse(env, 'd', { n }, VALIDADE_DESAFIO) });
  }
  if (request.method !== 'POST') return json({ erro: 'método' }, 405);
  let corpo;
  try { corpo = await request.json(); } catch (erro) { return json({ erro: 'pedido inválido' }, 400); }

  if (caminho === '/_acesso/senha') {
    const ok = iguais(String(corpo.usuario || ''), env.ACESSO_USUARIO) & iguais(String(corpo.senha || ''), env.ACESSO_SENHA);
    if (!ok) { await espera(800); return json({ erro: 'Usuário ou senha incorretos.' }, 401); }
    return json({ ok: true }, 200, { 'Set-Cookie': await cookieSessao(env) });
  }
  if (caminho === '/_acesso/digital') {
    let ok = false;
    try { ok = await entrarComDigital(env, request, corpo); } catch (erro) { ok = false; }
    if (!ok) { await espera(800); return json({ erro: 'Não reconheci esta digital. Entre com a senha e cadastre de novo.' }, 401); }
    return json({ ok: true }, 200, { 'Set-Cookie': await cookieSessao(env) });
  }
  if (caminho === '/_acesso/google') {
    if (!String(env.ACESSO_EMAIL || '').trim()) return json({ erro: 'Entrar com o Google ainda não foi configurado (falta ACESSO_EMAIL no Cloudflare).' }, 503);
    let ok = false;
    try { ok = await entrarComGoogle(env, corpo.credencial); } catch (erro) { ok = false; }
    if (!ok) { await espera(800); return json({ erro: 'Esta conta do Google não tem acesso a este app.' }, 401); }
    return json({ ok: true }, 200, { 'Set-Cookie': await cookieSessao(env) });
  }
  if (caminho === '/_acesso/cadastrar') {
    if (!logado) return json({ erro: 'Entre primeiro.' }, 401);
    let passe = null;
    try { passe = await cadastrarDigital(env, request, corpo); } catch (erro) { passe = null; }
    if (!passe) return json({ erro: 'Não consegui cadastrar a digital.' }, 400);
    return json({ chave: passe });
  }
  return json({ erro: 'não encontrado' }, 404);
}

/* ---------- Tela de entrada ----------
   comGoogle: mostra o botão "Entrar com o Google" (só quando ACESSO_EMAIL está configurado) */
function telaEntrada(comGoogle) {
  return `<!doctype html>
<html lang="pt-BR"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow"><meta name="theme-color" content="#1e3a6e">
<title>Entrar · Estudos</title>
<style>
  :root { color-scheme: light dark; --fundo:#f6f3ec; --cartao:#fffdf8; --texto:#17213a; --suave:#5a6478; --primaria:#1e3a6e; --borda:#e2dccf; --erro:#b3392f; }
  @media (prefers-color-scheme: dark) { :root { --fundo:#0c1424; --cartao:#121d33; --texto:#e8e4da; --suave:#9aa5b8; --primaria:#8fb0ee; --borda:#24324f; --erro:#ee8478; } }
  * { box-sizing: border-box; }
  body { margin:0; min-height:100vh; display:grid; place-items:center; background:var(--fundo); color:var(--texto);
         font: 16px/1.5 system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; padding:16px; }
  main { width:100%; max-width:380px; background:var(--cartao); border:1px solid var(--borda); border-radius:16px; padding:24px; }
  h1 { margin:0 0 4px; font-size:1.5rem; } p { margin:.4rem 0; } .suave { color:var(--suave); font-size:.9rem; }
  button { width:100%; font:inherit; font-weight:600; border-radius:12px; padding:14px; border:1px solid var(--borda);
           background:transparent; color:var(--texto); cursor:pointer; margin-top:10px; }
  button.primario { background:var(--primaria); border-color:var(--primaria); color:var(--cartao); font-size:1.1rem; }
  label { display:block; margin-top:12px; font-size:.9rem; }
  input { width:100%; font:inherit; padding:12px; margin-top:4px; border-radius:10px; border:1px solid var(--borda); background:transparent; color:var(--texto); }
  details { margin-top:16px; } summary { cursor:pointer; color:var(--primaria); font-weight:600; }
  #msg { min-height:1.5em; margin-top:12px; } #msg.erro { color:var(--erro); }
  [hidden] { display:none !important; }
  #google { margin-top:14px; display:grid; justify-items:center; min-height:44px; }
</style></head>
<body><main>
  <h1>Estudos</h1>
  <p class="suave">App pessoal. Entre para continuar.</p>
  <div id="digital" hidden><button class="primario" id="btDigital">Entrar com a digital</button></div>
  ${comGoogle ? '<div id="google"><div id="botaoGoogle"></div></div>' : ''}
  <details id="caixaSenha"><summary>Entrar com usuário e senha</summary>
    <form id="form" autocomplete="on">
      <label>Usuário <input id="usuario" name="username" autocomplete="username" required autocapitalize="none"></label>
      <label>Senha <input id="senha" name="password" type="password" autocomplete="current-password" required></label>
      <button class="primario" type="submit">Entrar</button>
    </form>
  </details>
  <div id="oferta" hidden>
    <p><strong>Entrar com a digital da próxima vez?</strong></p>
    <p class="suave">A digital nunca sai do seu celular. O aparelho fica liberado por 30 dias.</p>
    <button class="primario" id="btCadastrar">Cadastrar a digital</button>
    <button id="btAgoraNao">Agora não</button>
  </div>
  <p id="msg" role="status" aria-live="polite"></p>
</main>
<script src="/js/acesso.js"></script>
<script>
  const $ = (id) => document.getElementById(id);
  const msg = (t, erro) => { $('msg').textContent = t; $('msg').className = erro ? 'erro' : ''; };
  const entrar = () => location.reload();
  const temDigital = Acesso.disponivel() && Acesso.salvo();
  const comGoogle = ${comGoogle ? 'true' : 'false'};
  if (temDigital) $('digital').hidden = false; else if (!comGoogle) $('caixaSenha').open = true;
  /** Depois de entrar com senha ou Google: oferece cadastrar a digital (se ainda não tem) */
  function depoisDeEntrar() {
    if (Acesso.disponivel() && !Acesso.salvo()) {
      $('caixaSenha').hidden = true; $('digital').hidden = true; if ($('google')) $('google').hidden = true;
      $('oferta').hidden = false; msg('');
    } else { msg('Entrando…'); entrar(); }
  }
  /** Botão do Google: o desafio vira o "nonce" (o token só vale para esta tentativa) */
  async function iniciarGoogle() {
    try {
      const { desafio } = await (await fetch('/_acesso/desafio', { cache: 'no-store' })).json();
      google.accounts.id.initialize({
        client_id: '${GOOGLE_CLIENT_ID}', nonce: desafio, ux_mode: 'popup', auto_select: false,
        callback: async (r) => {
          msg('Conferindo…');
          const resposta = await fetch('/_acesso/google', { method: 'POST', cache: 'no-store',
            headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ credencial: r.credential }) });
          if (resposta.ok) { depoisDeEntrar(); return; }
          let erro = 'Não deu certo. Tente de novo.';
          try { erro = (await resposta.json()).erro || erro; } catch (e) { /* sem detalhe */ }
          msg(erro, true);
          iniciarGoogle(); // novo desafio para a próxima tentativa
        },
      });
      google.accounts.id.renderButton($('botaoGoogle'), { theme: 'outline', size: 'large', text: 'signin_with', shape: 'pill', locale: 'pt-BR', width: 300 });
    } catch (e) {
      if ($('google')) $('google').hidden = true;
      $('caixaSenha').open = true;
    }
  }
  $('btDigital').onclick = async () => {
    msg('Encoste o dedo no leitor…');
    try { await Acesso.entrar(); msg('Entrando…'); entrar(); } catch (e) { msg(e.message, true); $('caixaSenha').open = true; }
  };
  $('form').onsubmit = async (ev) => {
    ev.preventDefault();
    msg('Conferindo…');
    try {
      await Acesso.entrarComSenha($('usuario').value, $('senha').value);
      depoisDeEntrar();
    } catch (e) { msg(e.message, true); }
  };
  $('btCadastrar').onclick = async () => {
    msg('Encoste o dedo no leitor…');
    try { await Acesso.cadastrar(); msg('Digital cadastrada ✓ Entrando…'); setTimeout(entrar, 700); }
    catch (e) { msg(e.message + ' Você pode cadastrar depois em Configurações.', true); setTimeout(entrar, 2500); }
  };
  $('btAgoraNao').onclick = entrar;
  if (temDigital) $('btDigital').click(); // já abre o leitor (se o navegador deixar)
</script>
${comGoogle ? '<script src="https://accounts.google.com/gsi/client" async onload="iniciarGoogle()"></script>' : ''}
</body></html>`;
}

function pedirEntrada(request, env) {
  const querPagina = (request.headers.get('Accept') || '').includes('text/html');
  if (querPagina) return new Response(telaEntrada(Boolean(String(env.ACESSO_EMAIL || '').trim())), { status: 401, headers: { 'Content-Type': 'text/html; charset=utf-8', ...SEM_CACHE } });
  return new Response('Entre no app para continuar.', { status: 401, headers: { 'Content-Type': 'text/plain; charset=utf-8', ...SEM_CACHE } });
}

/** Autenticação básica (reserva): cabeçalho Authorization com usuário e senha */
function basicaOk(request, env) {
  const [tipo, codigo] = (request.headers.get('Authorization') || '').split(' ');
  if (tipo !== 'Basic' || !codigo) return false;
  try {
    const texto = dec.decode(Uint8Array.from(atob(codigo), (c) => c.charCodeAt(0)));
    const separador = texto.indexOf(':');
    if (separador < 0) return false;
    return Boolean(iguais(texto.slice(0, separador), env.ACESSO_USUARIO) & iguais(texto.slice(separador + 1), env.ACESSO_SENHA));
  } catch (erro) {
    return false;
  }
}

export async function onRequest(contexto) {
  const { request, env } = contexto;
  if (!env.ACESSO_USUARIO || !env.ACESSO_SENHA) {
    return new Response('Site fechado: configure ACESSO_USUARIO e ACESSO_SENHA no painel do Cloudflare.', {
      status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' },
    });
  }
  const caminho = new URL(request.url).pathname;
  const sessao = await lerPasse(env, lerCookie(request), 's');
  const pelaBasica = !sessao && basicaOk(request, env);
  const logado = Boolean(sessao) || pelaBasica;

  if (caminho.startsWith('/_acesso/')) return rotaAcesso(contexto, caminho, logado);
  if (!logado && PUBLICOS.includes(caminho)) return contexto.next();
  if (!logado) return pedirEntrada(request, env);

  const resposta = await contexto.next();
  // Páginas protegidas não devem ficar em caches públicos no caminho
  const nova = new Response(resposta.body, resposta);
  nova.headers.set('Cache-Control', 'private, no-cache');
  nova.headers.set('X-Robots-Tag', 'noindex, nofollow');
  // Entrou pela básica, ou a sessão está perto de vencer: renova o cookie de 30 dias
  if (pelaBasica || (sessao && sessao.exp - agora() < RENOVAR_COM_MENOS_DE)) nova.headers.append('Set-Cookie', await cookieSessao(env));
  return nova;
}
