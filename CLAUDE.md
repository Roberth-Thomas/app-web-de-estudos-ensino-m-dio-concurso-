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

## Conteúdo (js/dados/conteudos.js)
- Seguir a **BNCC/MEC**, com os códigos oficiais conferidos. Resumos próprios + links oficiais/abertos. Nunca copiar apostilas.
- Formato `metodo: 'freire'`, com `prerequisitos`. Cada tópico usa o **jeito de explicar que combina com ele**, sem pressa, como se fosse do zero.
- Referências aos gostos do usuário (RPG, Zelda, Pokémon, hardware, IA, música, museus, anime) **só quando forem naturais**, nunca em tudo.
- **Não criar tirinhas.** Quadrinhos só livres de verdade (ex.: Agostini, domínio público), e só se fizer sentido. Mafalda/Calvin só como indicação, sem a imagem.
- Termos técnicos: `[[termo]]` ou `[[mostrado|chave]]`, e o termo precisa existir em `App.dados.glossarios` (js/dados/apoio.js) da matéria.
- Cada checagem precisa de variações em `js/dados/checagens.js` (conceito, `outraExplicacao`).

## Tópicos já aprovados no formato novo
- Português: Classes de palavras, Acentuação, Ortografia.

## Próximos passos
1. Pontuação (portugues-1-3): refazer e remover a tirinha criada "Não espere".
2. Porcentagem (matematica-1-0): remover a tirinha "Equipamento novo" e cortar exemplos de juros em excesso.
3. Razão e proporção, Regra de três, Funções (ainda no formato antigo).
4. Remover as 4 questões `qt()` com tirinha criada em `js/dados/questoes.js`.
5. Depois, os demais tópicos, um por vez.

Pendências do usuário: ativar o GitHub Pages e configurar o `CLIENT_ID` do Google (README, seção 4).
