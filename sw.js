/* =========================================================
   sw.js — service worker: guarda os arquivos do app no
   aparelho para ele abrir mesmo sem internet.
   Ao publicar uma versão nova, aumente o número de VERSAO
   para os aparelhos baixarem os arquivos atualizados.
   ========================================================= */
const VERSAO = 'estudos-v19';
const ARQUIVOS = [
  './',
  'index.html',
  'manifest.webmanifest',
  'css/estilo.css',
  'icones/icone.svg',
  'icones/icone-192.png',
  'icones/icone-512.png',
  'js/util.js',
  'js/acesso.js',
  'js/dados/materias.js',
  'js/dados/assuntos.js',
  'js/dados/conteudos.js',
  'js/dados/apoio.js',
  'js/dados/checagens.js',
  'js/dados/topicos/biologia.js',
  'js/dados/topicos/historia.js',
  'js/dados/topicos/geografia.js',
  'js/dados/topicos/filosofia.js',
  'js/dados/topicos/sociologia.js',
  'js/dados/topicos/logica.js',
  'js/dados/topicos/informatica.js',
  'js/dados/topicos/administracao.js',
  'js/desenhos.js',
  'js/componentes.js',
  'js/caderno.js',
  'js/dados/questoes.js',
  'js/dados/dissertativas.js',
  'js/dados/redacao.js',
  'js/dados/plano-redacao.js',
  'js/dados/vestibular.js',
  'js/armazenamento.js',
  'js/calculos.js',
  'js/nuvem-config.js',
  'js/nuvem.js',
  'js/telas/hoje.js',
  'js/telas/assuntos.js',
  'js/telas/exercicios.js',
  'js/telas/redacao.js',
  'js/telas/progresso.js',
  'js/telas/config.js',
  'js/telas/estudar.js',
  'js/telas/plano.js',
  'js/telas/provas.js',
  'js/telas/apostila.js',
  'js/telas/caderno.js',
  'js/telas/vestibular.js',
  'js/app.js',
];

// Instalação: baixa e guarda todos os arquivos
self.addEventListener('install', (evento) => {
  evento.waitUntil(caches.open(VERSAO).then((cache) => cache.addAll(ARQUIVOS)));
  self.skipWaiting();
});

// Ativação: apaga caches de versões antigas
self.addEventListener('activate', (evento) => {
  evento.waitUntil(
    caches.keys().then((nomes) => Promise.all(nomes.filter((n) => n !== VERSAO).map((n) => caches.delete(n))))
  );
  self.clients.claim();
});

// Abrir o app (navegação): tenta a rede primeiro, para a tela de entrada aparecer
// quando a sessão de 30 dias acabar. Sem internet (ou rede lenta), abre do aparelho.
const ESPERA_REDE_MS = 4000;
function abrirPagina(evento) {
  return caches.open(VERSAO).then((cache) => {
    const daRede = fetch(evento.request).then((resposta) => {
      if (resposta.ok) cache.put('./', resposta.clone());
      return resposta; // 401 = tela de entrada
    });
    const doCache = () => cache.match('./').then((r) => r || daRede);
    const limite = new Promise((ok) => setTimeout(ok, ESPERA_REDE_MS)).then(doCache);
    return Promise.race([daRede.catch(doCache), limite]);
  });
}

// Requisições: responde do cache na hora e atualiza o cache em segundo plano
// ("stale-while-revalidate"). Google (login e Drive) e a entrada (/_acesso/) passam direto pela rede.
self.addEventListener('fetch', (evento) => {
  const url = new URL(evento.request.url);
  if (evento.request.method !== 'GET' || url.origin !== location.origin) return;
  if (url.pathname.startsWith('/_acesso/')) return;
  if (evento.request.mode === 'navigate') { evento.respondWith(abrirPagina(evento)); return; }

  evento.respondWith(
    caches.open(VERSAO).then((cache) =>
      cache.match(evento.request, { ignoreSearch: true }).then((emCache) => {
        const daRede = fetch(evento.request)
          .then((resposta) => {
            if (resposta.ok) cache.put(evento.request, resposta.clone());
            return resposta;
          })
          .catch(() => emCache);
        return emCache || daRede;
      })
    )
  );
});
