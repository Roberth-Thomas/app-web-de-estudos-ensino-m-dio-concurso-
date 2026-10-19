# EstudosAPP — regras do projeto

App de estudos (ensino médio + concurso + redação) para um adulto de 26 anos.
JS puro (sem módulos, sem build), namespace global `window.App`, localStorage, PWA no GitHub Pages.
O celular é o aparelho principal. Interface e comentários do código em pt-BR.

**Não mexer no projeto Bolt.** Este projeto é individual.

## Como trabalhar
- **Um tópico por vez.** Refaça, mostre no navegador e espere a aprovação antes de seguir.
- Commit e push só quando o usuário pedir (ele diz "faça o commit e envie para o GitHub").
- Antes de commitar: `node testes/validar.js` (todos devem passar).
- Ao adicionar arquivo novo: incluir em `index.html` (ordem dos scripts) e em `sw.js` (`ARQUIVOS`), e subir `VERSAO`.
- Não pensar em Kindle/e-reader agora. Primeiro fazer funcionar no celular e no PC.
- Teste local: servidor sem cache na porta 8080 (configuração em `.claude/launch.json`).
- Não sujar o progresso do usuário (localStorage) em testes. Se mexer, restaure.

## Conteúdo (js/dados/conteudos.js e js/dados/topicos/<materia>.js)
- Português e Matemática ficam em `conteudos.js`. As outras matérias ficam cada uma em `js/dados/topicos/<materia>.js`, com textos, checagens extras e termos (`App.dados.adicionarTermos`).
- Seguir a **BNCC/MEC**, com os códigos oficiais conferidos. Resumos próprios + links oficiais/abertos. Nunca copiar apostilas.
- Formato `metodo: 'freire'`, com `prerequisitos`. Cada tópico usa o **jeito de explicar que combina com ele**, sem pressa, como se fosse do zero.
- Referências aos gostos do usuário (RPG, Zelda, Pokémon, hardware, IA, música, museus, anime) **só quando forem naturais**, nunca em tudo.
- **Não criar tirinhas.** Quadrinhos só livres de verdade (ex.: Agostini, domínio público), e só se fizer sentido. Mafalda/Calvin só como indicação, sem a imagem.
- Termos técnicos: `[[termo]]` ou `[[mostrado|chave]]`, e o termo precisa existir em `App.dados.glossarios` (js/dados/apoio.js) da matéria.
- Cada checagem precisa de variações em `js/dados/checagens.js` (conceito, `outraExplicacao`).

## Tópicos já aprovados no formato novo
- Português: Classes de palavras, Acentuação, Ortografia.

## Auditoria (feita em 2026-10-18, relatório em `docs/auditoria.md`)
- Todo tópico novo precisa ser **conferido** antes de ir para o usuário: fatos e datas com fontes confiáveis, todas as contas refeitas,
  cada gabarito de teste conferido e o texto de cada habilidade BNCC comparado palavra por palavra com o PDF oficial do MEC.
- Depois de conferir, acrescente o id em `App.dados.auditoria.topicos` (fim de `js/dados/conteudos.js`): a tela de estudo mostra o selo "✅ Conferido".
  Sem isso, o tópico aparece como "⚠️ Ainda não conferido".
- Os 17 tópicos com apostila já foram conferidos. Já não há tirinhas criadas no app.

## Próximos passos
1. Preencher as questões reais do ENEM (`js/dados/vestibular.js`, hoje vazio), conferindo cada uma no PDF e no gabarito do Inep.
2. Os demais tópicos de cada matéria, um por vez, com auditoria antes de mostrar.

## Correção por IA
- O prompt fica em `App.comp.pedidoDeCorrecao` (js/componentes.js): contexto do app, modo (estudo, prova, redacao, plano),
  momento do estudante (`momentoNoApp`, só desempenho) e duas etapas: modo socrático primeiro, correção completa depois.

## Entrada no site (Cloudflare Pages)
- `functions/_middleware.js` protege tudo: tela de entrada própria, cookie assinado de 30 dias, digital (passkey/WebAuthn)
  e usuário/senha como reserva. Sem banco: o passe da digital volta assinado (HMAC) para o celular (`js/acesso.js`).
- A senha fica só nas variáveis do Cloudflare (ACESSO_USUARIO / ACESSO_SENHA). Nunca no código.
- Testes da entrada: `testes/acesso.mjs` (rodam dentro de `node testes/validar.js`).
