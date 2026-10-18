# 📚 Estudos — Ensino Médio + Concurso

App web para revisar o ensino médio (1º ao 3º ano) intercalando com preparação para concurso e treino de escrita.
Feito em **HTML + CSS + JavaScript puro**, sem servidor, sem build e sem `npm`. Todo o progresso fica no navegador (localStorage) e, se você quiser, no seu **Google Drive**.

## O que tem

| Tela | O que faz |
|---|---|
| 🏠 **Hoje** | O dia em destaque, o que estudar (base + concurso), sugestão de assuntos, botão "dia concluído", sequência de dias 🔥 e o cronograma da semana |
| ✅ **Assuntos** | Checklist por fase (1º, 2º e 3º ano) e matéria. Marcar, adicionar, renomear (✏️) e remover (🗑️) |
| 📝 **Exercícios** | 160 questões (16 por matéria) com correção na hora e explicação. Índice de acertos por matéria, simulado de 10 questões e cadastro de questões novas |
| ✍️ **Redação** | Tema sugerido, contador de palavras, checklist de revisão e histórico dos textos com data |
| 📈 **Progresso** | % geral, por fase e por matéria, se você está adiantado ou atrasado, acertos e calendário dos dias estudados |
| ⚙️ **Configurações** | Data de início, tema claro/escuro, Google Drive, exportar/importar backup |

**Regras do plano**
- As fases duram 2 meses cada, contando da data de início. Fase 1 = meses 1–2 (1º ano), fase 2 = meses 3–4, fase 3 = meses 5–6.
- **Adiantado/atrasado:** o app calcula quantos assuntos você *deveria* ter estudado até hoje (as fases já encerradas mais a parte proporcional da fase atual) e compara com os que você marcou. Uma diferença de até 10% conta como "em dia".
- **Sequência:** o domingo é neutro, ou seja, não quebra e não soma. Um dia de segunda a sábado sem marcar quebra a sequência. Se hoje ainda não foi marcado, a sequência continua valendo até o fim do dia.
- **Simulado:** sorteia 10 questões das matérias de segunda a sexta, e as respostas contam no índice de acertos.
- As alternativas são **embaralhadas** cada vez que a questão aparece, então não adianta decorar a letra.

---

## 1. Rodar no computador

### Jeito mais simples: duplo clique
Abra a pasta e dê **duplo clique em `index.html`**. Pronto.
> Assim funciona tudo, menos o Google Drive e o modo offline. Esses dois exigem que o app seja aberto por um endereço `http://` ou `https://`.

### Jeito completo: servidor local
No terminal, dentro da pasta do projeto:

```bash
python -m http.server 8080
```

Depois abra **http://localhost:8080** no navegador. Para parar o servidor, use `Ctrl + C`.

---

## 2. Publicar na internet (GitHub Pages, grátis)

É o que permite abrir no celular de qualquer lugar e instalar como app.

1. Crie uma conta em **github.com**, se ainda não tiver.
2. Clique em **New repository**, dê o nome `estudos` e marque **Public** (o GitHub Pages grátis exige repositório público). Clique em **Create repository**.
   > Só o *código* fica público. Seu progresso fica no seu navegador e no seu Drive, nunca no GitHub.
3. Na página do repositório, clique em **uploading an existing file** e arraste **todo o conteúdo** da pasta `EstudosAPP`: `index.html`, `manifest.webmanifest`, `sw.js` e as pastas `css`, `js` e `icones`. Clique em **Commit changes**.
   - Se preferir o terminal (o projeto já é um repositório git):
     ```bash
     git add .
     ```
     ```bash
     git commit -m "Primeira versão do app de estudos"
     ```
     ```bash
     git remote add origin https://github.com/SEU-USUARIO/estudos.git
     ```
     ```bash
     git push -u origin main
     ```
4. No repositório, vá em **Settings → Pages**. Em *Branch*, escolha `main` e a pasta `/ (root)` e clique em **Save**.
5. Em 1 ou 2 minutos o app estará em: **https://SEU-USUARIO.github.io/estudos/**

**Para atualizar depois:** envie os arquivos alterados de novo e **aumente a versão** na primeira linha de `sw.js` (`estudos-v1` → `estudos-v2`). Sem isso, os celulares continuam usando a versão guardada no aparelho.

---

## 3. Abrir e instalar no celular

1. No celular, abra **https://SEU-USUARIO.github.io/estudos/**.
2. Instale como app:
   - **Android (Chrome):** menu **⋮** → **Instalar app** (ou **Adicionar à tela inicial**).
   - **iPhone (Safari):** botão **Compartilhar** → **Adicionar à Tela de Início**.
3. Pronto: o ícone 📚 aparece na tela inicial, abre em tela cheia e funciona **sem internet** depois do primeiro acesso.

> O progresso de cada aparelho fica separado. Para usar o mesmo progresso no PC e no celular, configure o Google Drive (seção 4) ou use **⚙️ → Exportar** num aparelho e **Importar** no outro.

---

## 4. Salvar no Google Drive (opcional)

Com o Drive conectado, o app **busca o save da nuvem ao abrir** (e ao voltar para ele) e **envia a cada mudança**. Ele só tem acesso a uma **pasta oculta exclusiva do app** no seu Drive (`appDataFolder`) e não enxerga nenhum outro arquivo seu. Este projeto não tem nenhuma ligação com outros projetos seus do Google.

A configuração é feita uma vez só, no Google Cloud Console (gratuito):

1. Acesse **https://console.cloud.google.com** com sua conta Google.
2. No seletor de projetos (no topo), clique em **Novo projeto**, dê o nome `EstudosAPP` e crie.
3. Menu **APIs e serviços → Biblioteca**: procure **Google Drive API** e clique em **Ativar**.
4. Menu **APIs e serviços → Tela de consentimento OAuth** (em versões novas: **Google Auth Platform**):
   - Tipo de usuário: **Externo**. Nome do app: `Estudos`. E-mail de suporte: o seu.
   - Em **Público-alvo**, deixe em **Teste** e adicione o **seu Gmail** como *usuário de teste*.
5. Menu **APIs e serviços → Credenciais** (ou **Clientes**): **Criar credenciais → ID do cliente OAuth**.
   - Tipo de aplicativo: **Aplicativo da Web**.
   - Em **Origens JavaScript autorizadas**, adicione:
     - `https://SEU-USUARIO.github.io`
     - `http://localhost:8080` (para testar no PC)
   - Não precisa preencher "URIs de redirecionamento". Clique em **Criar**.
6. Copie o **ID do cliente** (algo como `1234-abc.apps.googleusercontent.com`) e cole em `js/nuvem-config.js`:
   ```js
   CLIENT_ID: '1234-abc.apps.googleusercontent.com',
   ```
7. Publique de novo no GitHub (e aumente a versão no `sw.js`).
8. No app: **⚙️ Configurações → Conectar Google Drive** e entre com a sua conta.
   - Como o app está em modo "Teste", o Google mostra o aviso *"O Google não verificou este app"*. É o seu próprio app: clique em **Avançado → Acessar Estudos**.

**Como funciona no dia a dia**
- Na primeira conexão de cada aparelho, se já existir um save na nuvem, o app pergunta se você quer **usar o da nuvem** ou **enviar o deste aparelho**.
- Depois disso, vale sempre a gravação mais recente.
- Sem internet, ele salva no aparelho e envia quando a conexão voltar.
- Por segurança, o login do Google dura cerca de 1 hora. Quando vencer, aparece **⚠️ Reconectar** no topo: basta um toque.

---

## 5. Backup (exportar/importar)

Em **⚙️ Configurações → Backup**:
- **Exportar** baixa um arquivo `estudos-progresso-AAAA-MM-DD.json` com tudo: assuntos, dias, acertos, questões cadastradas e redações.
- **Importar** substitui o progresso atual pelo arquivo escolhido.

Exporte de vez em quando. Limpar os dados do navegador apaga o localStorage.

---

## 6. Como o código está organizado

```
EstudosAPP/
├── index.html              → estrutura da página e ordem dos scripts
├── css/estilo.css          → visual (cores em variáveis, tema claro/escuro, layout de celular)
├── js/
│   ├── util.js             → datas, escapar HTML, embaralhar, avisos
│   ├── dados/              → CONTEÚDO (edite aqui para mudar o que o app mostra)
│   │   ├── materias.js     → matérias e cronograma da semana
│   │   ├── assuntos.js     → assuntos por matéria e fase
│   │   ├── questoes.js     → banco de 160 questões
│   │   └── redacao.js      → temas e checklist de revisão
│   ├── armazenamento.js    → salvar/carregar no localStorage, exportar/importar
│   ├── calculos.js         → regras: fases, ritmo, sequência, porcentagens
│   ├── nuvem-config.js     → seu ID do cliente Google
│   ├── nuvem.js            → sincronização com o Google Drive
│   ├── telas/              → uma tela por arquivo (hoje, assuntos, exercicios, redacao, progresso, config)
│   └── app.js              → navegação entre telas, tema, primeira abertura
├── sw.js                   → service worker (modo offline / app instalável)
├── manifest.webmanifest    → nome, cores e ícones do app instalado
├── icones/                 → ícones do app
└── testes/validar.js       → testes automáticos dos dados e das regras
```

**Ideias para estudar o código**
- Comece por `js/app.js` (como a navegação funciona com o `#` do endereço) e depois `js/telas/hoje.js`.
- Todas as telas seguem o mesmo padrão: `render(el)` monta o HTML com *template strings* e trata os cliques com **delegação de eventos** (um único `el.onclick` para a tela toda).
- `App.util.esc()` evita que um texto digitado vire HTML (proteção contra XSS).
- `calculos.js` não mexe em HTML, por isso dá para testar as regras sem navegador.

**Rodar os testes** (precisa do Node.js):

```bash
node testes/validar.js
```

---

## Kindle

O app foi feito para celular e computador. O navegador "experimental" do Kindle de tinta eletrônica é muito antigo e não roda JavaScript moderno, e o desbloqueio (jailbreak) não melhora esse navegador. Por isso o Kindle e-ink ficou **fora do escopo**. Um Kindle **Fire** (tablet Android) funciona normalmente pelo navegador Silk.
