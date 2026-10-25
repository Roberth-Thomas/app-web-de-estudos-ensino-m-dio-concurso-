/* =========================================================
   topicos/agentes.js — conteúdo de Agentes de IA (curso livre)
   Mesmo formato de js/dados/conteudos.js (veja o cabeçalho de lá).
   A ordem segue o ano 1 do plano "Agentes Inteligentes" (docs/planos-fiap.md),
   montado a partir da grade PÚBLICA do tecnólogo da FIAP. Todo o texto foi escrito
   para o app; nada vem de material de aluno da FIAP. Não há BNCC (bncc: []).
   Prática no navegador (Google Colab), sem instalar nada: funciona no celular e no PC.
   ========================================================= */
Object.assign(App.dados.conteudos, {

  /* ======================= UNIDADE 1 · O QUE É UM LLM E O QUE É UM AGENTE ======================= */
  'agentes-1-0': {
    metodo: 'freire',
    prerequisitos: [
      { texto: '**Ter conversado com uma IA** (ChatGPT, Claude, Gemini). Você já usa: o botão "Corrigir com IA" do app é isso.' },
      { texto: '**Python básico**: variáveis, `if`, `for` e funções. Só para ler o código do fim; a Unidade 3 revisa tudo com calma.',
        revisao: 'Uma função é um pedaço de código com nome, que recebe valores e devolve um resultado: `def soma(a, b): return a + b`. O `if` escolhe um caminho ("se chover, leve guarda-chuva") e o `for` repete ("para cada aula da lista, marque como vista").' },
    ],
    bncc: [],
    blocos: [
      /* ---------- 1. Leitura do mundo ---------- */
      { tipo: 'etapa', etapa: 'leitura', texto: 'Você já é o "agente" da sua IA' },
      { tipo: 'texto', texto: 'Pense no que acontece quando você usa o botão **Corrigir com IA** aqui no app:' },
      { tipo: 'lista', itens: [
        'você escreve a resposta;',
        'toca no botão, e o app monta um pedido e abre o ChatGPT ou o Claude;',
        'você cola o pedido e lê a correção;',
        'decide se concorda, se pergunta de novo ou se reescreve;',
        'copia a conversa e guarda no caderno.',
      ] },
      { tipo: 'pergunta', id: 'p1', texto: 'Nessa sequência, o que a IA fez e o que **você** fez? Quais passos exigiram decisão e quais foram só "levar e trazer" texto?' },
      { tipo: 'revelar', texto: 'A IA fez uma coisa só: **leu um texto e escreveu outro**. Todo o resto foi você: abriu o site, colou, leu, decidiu o próximo passo, copiou, guardou.\n\nVocê foi as **mãos** (abrir, colar, guardar) e também o **ciclo** (olhar o resultado e decidir o que fazer em seguida).\n\nUm **agente de IA** é exatamente isso, só que feito por um programa: o modelo continua escrevendo texto, mas agora ele pode **pedir para usar ferramentas** (buscar, calcular, salvar, abrir um arquivo) e **decidir o próximo passo** olhando o resultado, várias vezes, até terminar a tarefa.' },

      /* ---------- 2. Problematização ---------- */
      { tipo: 'etapa', etapa: 'problematizacao', texto: 'Por que a mesma IA acerta tanto e erra tão feio?' },
      { tipo: 'texto', texto: 'A mesma IA que escreve uma redação muito boa pode errar uma conta grande, não saber que dia é hoje ou citar um livro que não existe, **com toda a confiança**.\n\nPara construir agentes, isso não é detalhe: um agente **age** com base no que o modelo escreve. Se o modelo inventa, o agente pode fazer a coisa errada. Antes de dar "mãos" ao modelo, é preciso entender o que ele é, e o que ele não é.' },
      { tipo: 'pergunta', id: 'p2', texto: 'Você já viu uma IA inventar alguma coisa com cara de verdade? O que era? Por que você acha que isso acontece?' },

      /* ---------- 3. Sistematização ---------- */
      { tipo: 'etapa', etapa: 'sistematizacao', texto: 'Do modelo ao agente, em cinco ideias' },

      { tipo: 'titulo', texto: '1. O que é um LLM' },
      { tipo: 'texto', texto: 'Um [[LLM]] (do inglês large language model, "modelo de linguagem grande") é um programa treinado com uma quantidade enorme de texto. Na primeira fase do treino, o [[pré-treino]], ele aprende uma tarefa só: **prever a continuação de um texto**, pedaço por pedaço.\n\nDepois, ele passa por outras etapas de treino (ajuste fino e treino com avaliação humana) para **seguir instruções e conversar**. É por isso que um assistente como o Claude ou o ChatGPT responde perguntas em vez de só completar frases.\n\nO ponto mais importante: ao responder, o modelo **não consulta uma tabela de fatos conferidos**. Ele gera o texto que, pelo que aprendeu, é a continuação mais plausível. Na maior parte das vezes isso dá certo, mas nem sempre.' },
      { tipo: 'checagem', pergunta: 'No pré-treino, o que o LLM aprende a fazer?', opcoes: ['Prever a continuação de um texto, pedaço por pedaço.', 'Buscar na internet a resposta de cada pergunta.', 'Guardar uma tabela de fatos já conferidos.', 'Executar programas no computador do usuário.'], correta: 0,
        explicacao: 'O pré-treino ensina uma tarefa só: dado um texto, **prever o que vem depois**. Seguir instruções vem em etapas de treino posteriores. Buscar na internet ou executar programas não é o modelo sozinho: são **ferramentas** que um sistema pode oferecer a ele, e é aí que entra o agente.',
        outraExplicacao: 'Pense no corretor do teclado do celular, que sugere a próxima palavra. Um LLM é parecido, só que imensamente maior e treinado com muito mais texto. Ele não "pesquisa", ele continua o texto.' },

      { tipo: 'titulo', texto: '2. Tokens: os pedaços que o modelo lê e escreve' },
      { tipo: 'texto', texto: 'O modelo não lê letras nem palavras inteiras: ele lê [[tokens|token]]. Um token pode ser uma palavra curta, um pedaço de palavra, um sinal de pontuação ou até um caractere. "Estudando" pode virar dois ou três tokens, por exemplo.\n\nQuantos caracteres cabem num token **depende do modelo e da língua**, e a mesma frase pode gastar quantidades diferentes de tokens em modelos diferentes. Para saber o número exato, os provedores oferecem ferramentas de contagem.\n\nPor que isso importa para quem constrói agentes: o **tamanho máximo** do que o modelo consegue ler e o **preço** das APIs são medidos em tokens. Um agente que manda textos enormes a cada passo fica lento e caro.' },
      { tipo: 'checagem', pergunta: 'Por que quem constrói agentes precisa prestar atenção nos tokens?', opcoes: ['Porque o limite de tamanho e o custo das APIs são medidos em tokens.', 'Porque cada token é sempre uma palavra inteira.', 'Porque o modelo só entende textos em inglês.', 'Porque os tokens guardam a memória entre conversas.'], correta: 0,
        explicacao: 'O quanto cabe numa chamada e quanto ela custa são contados em **tokens**. Token não é sempre uma palavra (pode ser um pedaço dela), o modelo entende várias línguas, e token não é memória.',
        outraExplicacao: 'Pense no pacote de dados do celular: você paga por megabyte, não por site. Na API de IA, você paga e tem limite por token, não por pergunta.' },

      { tipo: 'titulo', texto: '3. Janela de contexto: a memória de trabalho' },
      { tipo: 'texto', texto: 'A [[janela de contexto]] é a quantidade de texto que o modelo consegue "olhar" na hora de gerar a resposta: as instruções, a conversa até ali, os documentos colados. É a **memória de trabalho** dele, e é diferente de tudo o que ele viu no treino.\n\nDisso saem duas consequências práticas:\n• **O que não está no contexto, o modelo não sabe sobre você.** Numa conversa nova, ele não lembra da anterior, a não ser que o app guarde e coloque esse texto de novo no contexto.\n• **O treino tem uma data de corte.** O modelo não sabe que dia é hoje nem o que aconteceu depois do treino, a não ser que alguém (ou uma ferramenta) ponha essa informação no contexto.' },
      { tipo: 'checagem', pergunta: 'Você pergunta "que dia é hoje?" a um modelo **sem ferramentas** e sem a data no contexto. O que é esperado?', opcoes: ['Ele não tem como saber: pode dizer que não sabe ou errar a data.', 'Ele sempre acerta, porque o modelo tem um relógio interno.', 'Ele consulta o calendário do seu celular sozinho.', 'Ele responde a data em que você criou a conta.'], correta: 0,
        explicacao: 'Sem a data no contexto e sem uma ferramenta de relógio, o modelo **não tem de onde tirar** o dia de hoje. Quando um assistente acerta a data, é porque o sistema colocou a data no contexto ou deu a ele uma ferramenta.',
        outraExplicacao: 'Imagine alguém que leu todos os jornais até certo dia e depois ficou numa sala sem janela. Se você pergunta a data, ele só pode chutar ou dizer que não sabe. Alguém precisa contar para ele.' },

      { tipo: 'titulo', texto: '4. Alucinação: quando o plausível não é verdadeiro' },
      { tipo: 'texto', texto: 'Como o modelo gera o texto mais plausível, às vezes ele produz uma resposta **convincente e falsa**: um dado errado, uma lei que não existe, uma citação inventada. Isso se chama [[alucinação]].\n\nNão dá para zerar, mas dá para reduzir bastante:\n• **Pôr a fonte no contexto** e pedir que ele responda só com base nela (essa ideia vira técnica na unidade de RAG).\n• **Dar permissão para dizer "não sei"**, em vez de exigir uma resposta sempre.\n• **Pedir as citações** de onde tirou cada afirmação, e conferir.\n• **Usar ferramentas** no lugar de "adivinhar": calculadora para contas, busca para fatos recentes.' },
      { tipo: 'checagem', pergunta: 'Qual atitude reduz mais a chance de o modelo inventar a resposta?', opcoes: ['Colocar o documento certo no contexto e pedir que responda só com base nele.', 'Escrever a pergunta em letras maiúsculas.', 'Pedir "tenha certeza absoluta".', 'Fazer a mesma pergunta várias vezes até gostar da resposta.'], correta: 0,
        explicacao: 'Com a **fonte no contexto**, o modelo deixa de depender só do que lembra do treino. Maiúsculas e "tenha certeza" não dão informação nova; repetir a pergunta até gostar só escolhe a resposta mais agradável, não a mais verdadeira.',
        outraExplicacao: 'Prova com consulta × prova de memória: com o livro aberto na página certa, você erra muito menos. Pôr o documento no contexto é dar a "consulta" ao modelo.' },

      { tipo: 'titulo', texto: '5. Do chat ao agente' },
      { tipo: 'texto', texto: 'Juntando tudo: o LLM escreve texto. Para ele **fazer** coisas, o sistema em volta oferece [[ferramentas|ferramenta]]: funções que o seu código executa quando o modelo pede (buscar, calcular, ler um arquivo, salvar uma nota). O resultado volta para o contexto, e o modelo decide o próximo passo.\n\nA Anthropic, empresa que faz o Claude, separa dois jeitos de montar isso:\n• Num [[workflow]], o caminho é **fixo e escrito no código**: "receba o e-mail, peça um resumo ao modelo, salve na planilha". O modelo trabalha em etapas que você definiu.\n• Num [[agente]], **o modelo dirige o próprio processo**: escolhe quais ferramentas usar, em que ordem e quando parar.' },
      { tipo: 'tabela', cabecalho: ['', 'Quem decide os passos', 'Usa ferramentas?', 'Exemplo'], linhas: [
        ['**Chat**', 'Você', 'Não (ou só as do site)', 'Conversar com o ChatGPT'],
        ['**Workflow**', 'O código, num caminho fixo', 'Sim, nas etapas definidas', 'Toda resposta escrita vai para correção e vira nota no caderno'],
        ['**Agente**', 'O modelo, passo a passo', 'Sim, escolhe quais e quando', '"Monte minha revisão da semana olhando o que eu mais errei"'],
      ] },
      { tipo: 'texto', texto: 'Por dentro, todo agente roda o mesmo **ciclo**: o modelo **pensa** (qual o próximo passo?), **age** (pede uma ferramenta), **observa** (lê o resultado) e repete, até poder responder.' },
      { tipo: 'atencao', texto: 'Mais autonomia também quer dizer **mais custo e erros que se acumulam**: um passo errado leva a outro. Por isso a recomendação é começar pela solução **mais simples que resolve** (muitas vezes, uma boa chamada ao modelo ou um workflow) e só partir para um agente quando os passos não dão para prever. E todo agente precisa de **limites**: número máximo de passos e confirmação humana antes de qualquer ação que não dá para desfazer.' },
      { tipo: 'checagem', pergunta: 'Um programa sempre recebe o e-mail, pede ao modelo um resumo e salva o resumo numa planilha, sempre nessa ordem. Isso é:', opcoes: ['um workflow', 'um agente', 'só um chat', 'um token'], correta: 0,
        explicacao: 'O caminho é **fixo e definido no código** (e-mail → resumo → planilha). O modelo só faz uma etapa. Isso é um **workflow**. Seria um agente se o modelo decidisse sozinho o que fazer com cada e-mail (responder, arquivar, criar uma tarefa).',
        outraExplicacao: 'Pergunte: quem escolhe o próximo passo? Se a resposta é "o programador, antes de tudo começar", é workflow. Se é "o modelo, olhando o resultado", é agente.' },

      { tipo: 'titulo', texto: 'O ciclo em código: um agente de brinquedo' },
      { tipo: 'texto', texto: 'Para ver o ciclo funcionando sem gastar nada, este agente usa uma regra simples no lugar do modelo: a função `decidir` faz o papel do LLM. Na Unidade 4, ela vira uma chamada de verdade a um modelo. O resto (ferramentas, ciclo, limite de passos) é igual ao de um agente real.' },
      { tipo: 'codigo', titulo: 'agente_de_brinquedo.py', texto: 'from datetime import date\n\ndef ferramenta_data():\n    return date.today().strftime("%d/%m/%Y")\n\ndef ferramenta_soma(a, b):\n    return a + b\n\nFERRAMENTAS = {"data": ferramenta_data, "soma": ferramenta_soma}\n\ndef decidir(pergunta, observacoes):\n    # Faz o papel do modelo: olha a pergunta e o que já viu, e escolhe a próxima ação\n    if observacoes:\n        return ("responder", f"Resposta: {observacoes[-1]}")\n    if "dia" in pergunta:\n        return ("usar", "data", [])\n    if "some" in pergunta:\n        numeros = [int(p) for p in pergunta.split() if p.isdigit()]\n        return ("usar", "soma", numeros)\n    return ("responder", "Não sei fazer isso ainda.")\n\ndef agente(pergunta):\n    observacoes = []\n    for passo in range(5):  # limite de passos: um agente nunca roda sem fim\n        decisao = decidir(pergunta, observacoes)\n        if decisao[0] == "responder":\n            return decisao[1]\n        _, nome, argumentos = decisao\n        resultado = FERRAMENTAS[nome](*argumentos)\n        print(f"Passo {passo + 1}: usei \'{nome}\' e vi {resultado}")\n        observacoes.append(resultado)\n    return "Parei: passos demais."\n\nprint(agente("que dia é hoje?"))\nprint(agente("some 1200 e 345"))\nprint(agente("conte uma piada"))' },
      { tipo: 'texto', texto: 'Repare nas três partes que aparecem em todo agente:\n• **Ferramentas**: funções comuns de Python, num dicionário com nome (`FERRAMENTAS`).\n• **Decisão**: `decidir` olha a pergunta e as **observações** (o que as ferramentas já devolveram) e escolhe entre usar uma ferramenta ou responder.\n• **Ciclo com limite**: o `for passo in range(5)` repete pensar → agir → observar, e para no máximo em 5 passos.' },
      { tipo: 'checagem', pergunta: 'Rodando `agente("some 1200 e 345")`, quantas vezes a função `decidir` é chamada?', opcoes: ['1 vez', '2 vezes', '5 vezes', 'Nenhuma'], correta: 1,
        explicacao: '**1ª vez:** ainda não há observações e a pergunta tem "some", então ela escolhe usar a ferramenta `soma` com 1200 e 345 (resultado 1545, que vira uma observação). **2ª vez:** já há observação, então ela escolhe **responder** "Resposta: 1545", e o ciclo termina. São 2 chamadas.',
        outraExplicacao: 'Siga o ciclo como num jogo de turnos: turno 1, o "modelo" pede a calculadora; a calculadora devolve 1545; turno 2, o "modelo" já tem o resultado e responde. Dois turnos, duas decisões.' },

      /* ---------- 4. Ação ---------- */
      { tipo: 'etapa', etapa: 'acao', texto: 'Rode e mexa no agente (20 minutos)' },
      { tipo: 'lista', itens: [
        '**Abra o Google Colab** (colab.research.google.com) e entre com a sua conta Google. Toque em **Novo notebook**. Funciona no navegador do celular e do PC, sem instalar nada.',
        '**Copie o código** acima (botão Copiar), cole na primeira célula e toque em ▶. Confira se a saída mostra os passos e as respostas.',
        '**Desafio 1:** crie a ferramenta `ferramenta_multiplica(a, b)`, coloque no dicionário `FERRAMENTAS` e ensine `decidir` a usá-la quando a pergunta tiver "multiplique". Teste com `agente("multiplique 12 e 7")`.',
        '**Desafio 2:** mude a primeira regra de `decidir` para nunca responder (troque `if observacoes:` por `if False:`) e rode de novo. O que o limite de 5 passos evitou? Depois volte ao original.',
        '**Experimento com a IA de chat:** pergunte a ela "Que dia é hoje?" e "Quem venceu um jogo de ontem do seu time?". Repare: ela respondeu do treino, disse que não sabe ou usou uma ferramenta (busca)?',
      ] },
      { tipo: 'pergunta', id: 'p3', texto: 'Anote aqui: o código rodou? Como ficou a sua regra do desafio 1? No desafio 2, o que aconteceu? E no experimento com a IA de chat, o que ela fez em cada pergunta?' },

      /* ---------- 5. Reflexão ---------- */
      { tipo: 'etapa', etapa: 'reflexao', texto: 'O que muda quando a IA ganha mãos' },
      { tipo: 'texto', texto: 'Volte ao "Corrigir com IA" do começo. Agora você tem nome para cada parte: o **LLM** escreveu o texto; você foi as **ferramentas** (abrir, colar, guardar) e o **ciclo** (olhar o resultado e decidir o próximo passo). Um agente automatiza justamente o seu papel, e por isso precisa de limites: o que ele pode fazer sozinho, o que precisa da sua confirmação e quando deve parar.' },
      { tipo: 'pergunta', id: 'p4', texto: 'Que tarefa do seu dia (estudos, jogos, PC) você daria a um agente? De quais ferramentas ele precisaria? E qual ação ele **não** deveria fazer sem te perguntar antes?' },
    ],
    resumo: [
      'LLM: modelo treinado com muito texto para prever a continuação; depois ajustado para seguir instruções e conversar.',
      'Ele gera o texto mais plausível; não consulta uma tabela de fatos conferidos.',
      'Tokens são os pedaços de texto que o modelo lê e escreve. Limite de tamanho e preço das APIs são contados em tokens.',
      'Janela de contexto é a memória de trabalho: o que não está nela, o modelo não sabe (nem a data de hoje).',
      'Alucinação: resposta convincente e falsa. Reduza com a fonte no contexto, permissão para "não sei", citações e ferramentas.',
      'Workflow: caminho fixo no código. Agente: o modelo escolhe as ferramentas e os passos, num ciclo pensar → agir → observar.',
      'Comece pelo mais simples. Todo agente precisa de limite de passos e de confirmação humana antes de ações sem volta.',
    ],
    fontes: [
      { nome: 'Anthropic — Building effective agents (workflows × agentes, quando usar cada um)', url: 'https://www.anthropic.com/engineering/building-effective-agents' },
      { nome: 'Documentação do Claude — Glossário (LLM, tokens, janela de contexto, pré-treino)', url: 'https://platform.claude.com/docs/en/about-claude/glossary' },
      { nome: 'Hugging Face — Curso de Agentes (gratuito, em inglês)', url: 'https://huggingface.co/learn/agents-course' },
      { nome: 'Hugging Face — Curso de LLMs (gratuito, em inglês)', url: 'https://huggingface.co/learn/llm-course' },
      { nome: 'Google Colab — Python no navegador, sem instalar nada', url: 'https://colab.research.google.com/' },
    ],
  },
});

Object.assign(App.dados.checagensExtras, {
  'agentes-1-0': [
    { // 1. o que é um LLM
      conceito: 'Um **LLM** é treinado para prever a continuação de um texto e depois ajustado para seguir instruções; ele gera o plausível, não consulta fatos conferidos.',
      variacoes: [
        { pergunta: 'Um amigo diz: "a IA respondeu, então ela conferiu numa base de dados". O que está errado nessa ideia?', opcoes: ['Nada: toda resposta de IA é conferida numa base.', 'O modelo gera o texto mais plausível; ele só consulta algo se tiver uma ferramenta para isso.', 'A IA só responde o que está na Wikipédia.', 'A IA copia a resposta de outra pessoa que perguntou antes.'], correta: 1,
          explicacao: 'Sozinho, o LLM **gera** texto a partir do que aprendeu no treino. Consultar uma base, a internet ou um arquivo só acontece quando o sistema oferece uma **ferramenta** para isso.',
          outraExplicacao: 'Um LLM é como alguém que leu muito e responde de memória. Ler um documento na hora só acontece se alguém entregar o documento a ele.' },
      ],
    },
    { // 2. tokens
      conceito: '**Tokens** são os pedaços de texto (palavras, partes de palavras, sinais) que o modelo lê e escreve; limites e preços são contados neles.',
      variacoes: [
        { pergunta: 'Um agente cola um livro inteiro no contexto a cada passo. Qual é o problema mais provável?', opcoes: ['Nenhum, o tamanho do texto não importa.', 'Gastar muitos tokens: fica caro, lento e pode passar do limite da janela.', 'O modelo passa a responder só em inglês.', 'O livro fica gravado na memória do modelo para sempre.'], correta: 1,
          explicacao: 'Cada passo cobra e processa **todos os tokens** enviados. Um livro inteiro a cada passo deixa tudo caro e lento, e pode não caber na janela de contexto. Por isso se usa só o trecho que importa (a ideia do RAG).',
          outraExplicacao: 'É como mandar o livro inteiro pelo correio toda vez que você quer perguntar sobre uma página. Mande só a página.' },
      ],
    },
    { // 3. janela de contexto
      conceito: 'A **janela de contexto** é a memória de trabalho: o modelo só sabe da sua conversa e da data de hoje o que estiver nela.',
      variacoes: [
        { pergunta: 'Você abre uma conversa nova (num app sem função de memória) e pergunta "lembra do que eu te contei ontem?". O esperado é:', opcoes: ['Ele lembra tudo, porque aprende com cada conversa na hora.', 'Ele não tem esse texto no contexto, então não sabe o que você contou.', 'Ele busca a conversa antiga no seu celular sozinho.', 'Ele lembra só as partes mais importantes.'], correta: 1,
          explicacao: 'A conversa de ontem **não está na janela de contexto** da conversa nova. Sem um recurso do app que guarde e devolva esse texto ao contexto, o modelo não tem como saber.',
          outraExplicacao: 'Cada conversa nova é uma folha em branco. O que não estiver escrito nela, o modelo não vê.' },
      ],
    },
    { // 4. alucinação
      conceito: '**Alucinação** é uma resposta convincente e falsa; reduz-se com fonte no contexto, permissão para "não sei", citações e ferramentas.',
      variacoes: [
        { pergunta: 'Você pede à IA o número de um artigo de lei e ela responde com segurança, sem fonte. O mais prudente é:', opcoes: ['Confiar, porque ela respondeu com segurança.', 'Conferir no texto oficial da lei antes de usar.', 'Perguntar de novo até a resposta mudar.', 'Pedir para ela responder em maiúsculas.'], correta: 1,
          explicacao: 'Segurança no tom **não é prova**. O modelo pode gerar um número plausível e errado. Para usar de verdade, confira na fonte oficial, ou dê o texto da lei a ele e peça que cite o trecho.',
          outraExplicacao: 'Trate a resposta como dica de um colega que estudou muito: provavelmente certa, mas você confere antes de colocar na prova.' },
      ],
    },
    { // 5. workflow × agente
      conceito: 'No **workflow** o caminho é fixo no código; no **agente** o modelo escolhe as ferramentas e os passos, num ciclo pensar → agir → observar.',
      variacoes: [
        { pergunta: 'Qual destes é um agente (e não um workflow)?', opcoes: ['Um programa que sempre traduz o texto e depois salva o arquivo.', 'Um assistente que recebe "organize minha pasta de estudos" e decide sozinho quais arquivos abrir, ler e mover.', 'Um formulário que envia a resposta por e-mail.', 'Um corretor ortográfico.'], correta: 1,
          explicacao: 'Só no segundo o **modelo decide os passos** (quais arquivos abrir, o que fazer com cada um) olhando os resultados. Os outros seguem um caminho fixo ou nem usam um modelo.',
          outraExplicacao: 'Procure quem escolhe o próximo passo. "Traduzir e depois salvar" já está decidido antes. "Organizar a pasta" exige olhar cada arquivo e decidir: isso é agente.' },
      ],
    },
    { // 6. o ciclo em código
      conceito: 'No código, o agente tem **ferramentas**, uma função de **decisão** que olha as observações e um **ciclo com limite** de passos.',
      variacoes: [
        { pergunta: 'No agente de brinquedo, para que serve o `for passo in range(5)`?', opcoes: ['Para somar 5 aos resultados.', 'Para garantir que o ciclo pare no máximo em 5 passos, mesmo se a decisão nunca responder.', 'Para criar 5 ferramentas novas.', 'Para repetir a mesma resposta 5 vezes.'], correta: 1,
          explicacao: 'O `for` com `range(5)` repete o ciclo pensar → agir → observar e é também o **limite de segurança**: se `decidir` nunca escolher responder, o agente para em 5 passos e devolve "Parei: passos demais."',
          outraExplicacao: 'É o "máximo de tentativas" de um jogo. Sem ele, um agente confuso poderia ficar chamando ferramentas para sempre (e gastando dinheiro numa API de verdade).' },
      ],
    },
  ],
});

App.dados.adicionarTermos('agentes', {
  'llm': 'Large language model (modelo de linguagem grande): programa treinado com muito texto para prever a continuação de um texto; depois é ajustado para seguir instruções e conversar.',
  'pré-treino': 'Primeira fase do treino de um LLM: ler uma quantidade enorme de texto aprendendo a prever o próximo pedaço. Seguir instruções vem em etapas posteriores.',
  'token': 'Pedaço de texto que o modelo lê e escreve: uma palavra curta, parte de uma palavra, um sinal. O limite de tamanho e o preço das APIs são contados em tokens.',
  'janela de contexto': 'Quantidade de texto que o modelo consegue considerar ao responder (instruções, conversa, documentos): a memória de trabalho dele.',
  'alucinação': 'Resposta de IA convincente, mas falsa (um dado, uma lei, uma citação inventada). Acontece porque o modelo gera o texto mais plausível.',
  'ferramenta': 'Função que o sistema oferece ao modelo (buscar, calcular, ler um arquivo, salvar). O modelo pede, o seu código executa e devolve o resultado.',
  'workflow': 'Sistema em que o modelo trabalha em etapas de um caminho fixo, definido no código pelo programador.',
  'agente': 'Sistema em que o modelo dirige o próprio processo: escolhe quais ferramentas usar, em que ordem e quando parar, num ciclo pensar → agir → observar.',
});
