/* =========================================================
   functions/_middleware.js — senha na frente do site (Cloudflare Pages)
   Roda no servidor do Cloudflare ANTES de entregar qualquer arquivo,
   então sem a senha ninguém vê o app nem o código.
   Usa a autenticação básica do navegador (janelinha de usuário e senha).

   O usuário e a senha NÃO ficam aqui: configure no painel do Cloudflare,
   em Workers & Pages → estudos-rt → Settings → Variables and Secrets:
     ACESSO_USUARIO  (texto)
     ACESSO_SENHA    (tipo "Secret")
   Enquanto não estiverem configurados, o site fica fechado para todos.
   Este arquivo só vale no Cloudflare; no PC (localhost) ele é ignorado.
   ========================================================= */

/** Compara dois textos em tempo constante (não entrega pistas pelo tempo de resposta) */
function iguais(a, b) {
  const ta = new TextEncoder().encode(a);
  const tb = new TextEncoder().encode(b);
  let diferenca = ta.length ^ tb.length;
  for (let i = 0; i < Math.max(ta.length, tb.length); i++) diferenca |= (ta[i] || 0) ^ (tb[i] || 0);
  return diferenca === 0;
}

function pedirLogin(mensagem) {
  return new Response(mensagem, {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Estudos", charset="UTF-8"',
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

export async function onRequest(contexto) {
  const { ACESSO_USUARIO, ACESSO_SENHA } = contexto.env;
  if (!ACESSO_USUARIO || !ACESSO_SENHA) {
    return new Response('Site fechado: configure ACESSO_USUARIO e ACESSO_SENHA no painel do Cloudflare.', {
      status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' },
    });
  }
  const cabecalho = contexto.request.headers.get('Authorization') || '';
  const [tipo, codigo] = cabecalho.split(' ');
  if (tipo !== 'Basic' || !codigo) return pedirLogin('Entre com seu usuário e senha.');
  let usuario = '', senha = '';
  try {
    const texto = new TextDecoder().decode(Uint8Array.from(atob(codigo), (c) => c.charCodeAt(0)));
    const separador = texto.indexOf(':');
    usuario = texto.slice(0, separador);
    senha = texto.slice(separador + 1);
  } catch (erro) {
    return pedirLogin('Login inválido.');
  }
  const ok = iguais(usuario, ACESSO_USUARIO) & iguais(senha, ACESSO_SENHA);
  if (!ok) return pedirLogin('Usuário ou senha incorretos.');
  const resposta = await contexto.next();
  // Páginas protegidas não devem ficar em caches públicos no caminho
  const nova = new Response(resposta.body, resposta);
  nova.headers.set('Cache-Control', 'private, no-cache');
  nova.headers.set('X-Robots-Tag', 'noindex, nofollow');
  return nova;
}
