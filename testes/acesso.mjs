/* =========================================================
   testes/acesso.mjs — testa a porta de entrada (functions/_middleware.js)
   sem o Cloudflare: monta pedidos falsos e um "leitor de digital" de mentira
   (uma chave ECDSA P-256 gerada aqui, que assina como o celular assinaria).
   Roda sozinho (node testes/acesso.mjs) e também pelo node testes/validar.js.
   ========================================================= */
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert';
import { fileURLToPath } from 'node:url';

const raiz = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const fonte = fs.readFileSync(path.join(raiz, 'functions/_middleware.js'), 'utf8');
const { onRequest } = await import('data:text/javascript;charset=utf-8,' + encodeURIComponent(fonte));

const SITE = 'https://estudos-rt.pages.dev';
const ENV = { ACESSO_USUARIO: 'usuario-teste', ACESSO_SENHA: 'senha-de-teste-123' };
const enc = new TextEncoder();
const b64 = (bytes) => Buffer.from(bytes).toString('base64url');
const sha256 = async (bytes) => new Uint8Array(await crypto.subtle.digest('SHA-256', bytes));

let testes = 0;
async function teste(nome, fn) { await fn(); testes++; console.log('  ✓ ' + nome); }

/** Chama o middleware como o Cloudflare faria */
async function pedido(caminho, { metodo = 'GET', corpo, cookie, html, basica, env = ENV } = {}) {
  const headers = {};
  if (corpo) headers['Content-Type'] = 'application/json';
  if (cookie) headers.Cookie = cookie;
  if (html) headers.Accept = 'text/html';
  if (basica) headers.Authorization = 'Basic ' + Buffer.from(basica).toString('base64');
  const request = new Request(SITE + caminho, { method: metodo, headers, body: corpo ? JSON.stringify(corpo) : undefined });
  let passou = false;
  const resposta = await onRequest({ request, env, next: async () => { passou = true; return new Response('APP'); } });
  return { resposta, passou };
}
const cookieDe = (resposta) => (resposta.headers.get('Set-Cookie') || '').split(';')[0];

/** Assinatura ECDSA crua (r||s) → DER, como o leitor do celular entrega */
function brutoParaDer(bruto) {
  const inteiro = (b) => {
    let i = 0;
    while (i < b.length - 1 && b[i] === 0) i++;
    let v = b.slice(i);
    if (v[0] & 0x80) v = Uint8Array.from([0, ...v]);
    return [0x02, v.length, ...v];
  };
  const corpo = [...inteiro(bruto.slice(0, 32)), ...inteiro(bruto.slice(32))];
  return Uint8Array.from([0x30, corpo.length, ...corpo]);
}

async function desafio() {
  const { resposta } = await pedido('/_acesso/desafio');
  return (await resposta.json()).desafio;
}

/** O "celular": cria a credencial e assina pedidos de entrada */
async function novoLeitor() {
  const par = await crypto.subtle.generateKey({ name: 'ECDSA', namedCurve: 'P-256' }, true, ['sign', 'verify']);
  const id = b64(crypto.getRandomValues(new Uint8Array(16)));
  const spki = new Uint8Array(await crypto.subtle.exportKey('spki', par.publicKey));
  return { par, id, spki };
}
function clientData(tipo, d, origem = SITE) {
  return enc.encode(JSON.stringify({ type: tipo, challenge: b64(enc.encode(d)), origin: origem }));
}
async function assinarEntrada(leitor, { origem = SITE, bandeiras = 0x05, host = 'estudos-rt.pages.dev', chavePar = leitor.par } = {}) {
  const cd = clientData('webauthn.get', await desafio(), origem);
  const authData = new Uint8Array(37);
  authData.set(await sha256(enc.encode(host)), 0);
  authData[32] = bandeiras;
  const assinado = new Uint8Array([...authData, ...(await sha256(cd))]);
  const bruto = new Uint8Array(await crypto.subtle.sign({ name: 'ECDSA', hash: 'SHA-256' }, chavePar.privateKey, assinado));
  return { id: leitor.id, clientDataJSON: b64(cd), authenticatorData: b64(authData), signature: b64(brutoParaDer(bruto)) };
}

console.log('Porta de entrada (functions/_middleware.js)');

await teste('sem as variáveis no Cloudflare o site fica fechado (503)', async () => {
  const { resposta, passou } = await pedido('/', { env: {} });
  assert.strictEqual(resposta.status, 503);
  assert.ok(!passou);
});

await teste('sem entrar: tela de entrada (sem a janelinha do navegador) e nada do app', async () => {
  const { resposta, passou } = await pedido('/', { html: true });
  assert.strictEqual(resposta.status, 401);
  assert.ok(!passou);
  assert.strictEqual(resposta.headers.get('WWW-Authenticate'), null);
  assert.match(await resposta.text(), /Entrar com a digital/);
  const js = await pedido('/js/dados/conteudos.js');
  assert.strictEqual(js.resposta.status, 401);
  assert.ok(!js.passou);
});

await teste('só o js/acesso.js é público (a tela de entrada precisa dele)', async () => {
  assert.ok((await pedido('/js/acesso.js')).passou);
});

let sessao = '';
await teste('senha errada recusa; senha certa dá um cookie de 30 dias que abre o app', async () => {
  const errada = await pedido('/_acesso/senha', { metodo: 'POST', corpo: { usuario: ENV.ACESSO_USUARIO, senha: 'chute' } });
  assert.strictEqual(errada.resposta.status, 401);
  assert.strictEqual(errada.resposta.headers.get('Set-Cookie'), null);
  const certa = await pedido('/_acesso/senha', { metodo: 'POST', corpo: { usuario: ENV.ACESSO_USUARIO, senha: ENV.ACESSO_SENHA } });
  assert.strictEqual(certa.resposta.status, 200);
  const cabecalho = certa.resposta.headers.get('Set-Cookie');
  assert.match(cabecalho, /HttpOnly/);
  assert.match(cabecalho, /Secure/);
  assert.match(cabecalho, /Max-Age=2592000/);
  sessao = cookieDe(certa.resposta);
  assert.ok((await pedido('/', { cookie: sessao })).passou);
});

await teste('cookie adulterado, de outra senha ou vencido não abre', async () => {
  const [nome, valor] = sessao.split('=');
  const adulterado = nome + '=' + valor.slice(0, -2) + (valor.endsWith('AA') ? 'BB' : 'AA');
  assert.ok(!(await pedido('/', { cookie: adulterado })).passou);
  assert.ok(!(await pedido('/', { cookie: sessao, env: { ...ENV, ACESSO_SENHA: 'senha-nova' } })).passou);
  const relogio = Date.now;
  Date.now = () => relogio() + 31 * 24 * 3600 * 1000;
  try { assert.ok(!(await pedido('/', { cookie: sessao })).passou); } finally { Date.now = relogio; }
});

await teste('autenticação básica continua valendo (reserva) e já entrega o cookie', async () => {
  const { resposta, passou } = await pedido('/', { basica: ENV.ACESSO_USUARIO + ':' + ENV.ACESSO_SENHA });
  assert.ok(passou);
  assert.match(resposta.headers.get('Set-Cookie') || '', /__Host-estudos-sessao=/);
  assert.ok(!(await pedido('/', { basica: ENV.ACESSO_USUARIO + ':errada' })).passou);
});

const leitor = await novoLeitor();
let passe = '';
await teste('cadastrar a digital exige ter entrado; com sessão devolve o passe assinado', async () => {
  const corpo = async () => ({ id: leitor.id, clientDataJSON: b64(clientData('webauthn.create', await desafio())), publicKey: b64(leitor.spki), alg: -7 });
  const sem = await pedido('/_acesso/cadastrar', { metodo: 'POST', corpo: await corpo() });
  assert.strictEqual(sem.resposta.status, 401);
  const com = await pedido('/_acesso/cadastrar', { metodo: 'POST', corpo: await corpo(), cookie: sessao });
  assert.strictEqual(com.resposta.status, 200);
  passe = (await com.resposta.json()).chave;
  assert.ok(passe.includes('.'));
  // Desafio inventado (sem a assinatura do servidor) não serve para cadastrar
  const falso = await pedido('/_acesso/cadastrar', { metodo: 'POST', cookie: sessao,
    corpo: { id: leitor.id, clientDataJSON: b64(clientData('webauthn.create', 'inventado.abc')), publicKey: b64(leitor.spki), alg: -7 } });
  assert.strictEqual(falso.resposta.status, 400);
});

await teste('entrar com a digital: assinatura certa abre e dá o cookie', async () => {
  const { resposta } = await pedido('/_acesso/digital', { metodo: 'POST', corpo: { chave: passe, ...(await assinarEntrada(leitor)) } });
  assert.strictEqual(resposta.status, 200);
  assert.ok((await pedido('/', { cookie: cookieDe(resposta) })).passou);
});

await teste('digital recusada: outra chave, outro site, sem verificação do dedo, passe forjado', async () => {
  const recusa = async (corpo) => {
    const { resposta } = await pedido('/_acesso/digital', { metodo: 'POST', corpo });
    assert.strictEqual(resposta.status, 401);
    assert.strictEqual(resposta.headers.get('Set-Cookie'), null);
  };
  const outro = await novoLeitor();
  await recusa({ chave: passe, ...(await assinarEntrada(leitor, { chavePar: outro.par })) });       // outra chave privada
  await recusa({ chave: passe, ...(await assinarEntrada(leitor, { origem: 'https://golpe.example' })) }); // página de outro site
  await recusa({ chave: passe, ...(await assinarEntrada(leitor, { host: 'golpe.example' })) });       // rpId de outro site
  await recusa({ chave: passe, ...(await assinarEntrada(leitor, { bandeiras: 0x01 })) });             // sem digital/PIN
  // Passe com a chave pública de outra pessoa, sem a assinatura do servidor
  const [corpoPasse, assinatura] = passe.split('.');
  const dados = JSON.parse(Buffer.from(corpoPasse, 'base64url').toString());
  const forjado = b64(enc.encode(JSON.stringify({ ...dados, k: b64(outro.spki) }))) + '.' + assinatura;
  await recusa({ chave: forjado, ...(await assinarEntrada(leitor, { chavePar: outro.par })) });
});

await teste('rotas da entrada não são guardadas em cache e "sair" apaga o cookie', async () => {
  const d = await pedido('/_acesso/desafio');
  assert.strictEqual(d.resposta.headers.get('Cache-Control'), 'no-store');
  const sair = await pedido('/_acesso/sair', { cookie: sessao });
  assert.strictEqual(sair.resposta.status, 302);
  assert.match(sair.resposta.headers.get('Set-Cookie'), /Max-Age=0/);
});

console.log(`\n${testes} testes da entrada passaram ✅`);
