/* =========================================================
   sw.js — service worker: guarda os arquivos do app no
   aparelho para ele abrir mesmo sem internet.
   Ao publicar uma versão nova, aumente o número de VERSAO
   para os aparelhos baixarem os arquivos atualizados.
   ========================================================= */
const VERSAO = 'estudos-v16';
const ARQUIVOS = [
  './',
  'index.html',
  'manifest.webmanifest',
  'css/estilo.css',
  'icones/icone.svg',
  'icones/icone-192.png',
  'icones/icone-512.png',
  'js/util.js',
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

// Requisições: responde do cache na hora e atualiza o cache em segundo plano
// ("stale-while-revalidate"). Google (login e Drive) passa direto pela rede.
self.addEventListener('fetch', (evento) => {
  const url = new URL(evento.request.url);
  if (evento.request.method !== 'GET' || url.origin !== location.origin) return;

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
