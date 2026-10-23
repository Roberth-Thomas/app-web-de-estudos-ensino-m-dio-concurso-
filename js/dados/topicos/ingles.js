/* =========================================================
   topicos/ingles.js — conteúdo de Inglês
   Mesmo formato de js/dados/conteudos.js (veja o cabeçalho de lá),
   mas separado por matéria para cada uma crescer no seu arquivo.
   Aqui ficam, desta matéria:
   - os textos de estudo (App.dados.conteudos)
   - os extras dos testes "Entendeu?" (App.dados.checagensExtras)
   - os termos novos do glossário (App.dados.adicionarTermos)
   Nível intermediário, com foco em leitura para ENEM e concursos.
   Todos os textos em inglês daqui foram escritos para o app (nada copiado de cursos).
   ========================================================= */
Object.assign(App.dados.conteudos, {

  /* ======================= ESTRATÉGIAS DE LEITURA (partir do que já se lê sem perceber) ======================= */
  'ingles-1-0': {
    metodo: 'freire',
    prerequisitos: [
      { texto: '**Nenhum vocabulário especial.** Você já lê em português, e é exatamente isso que vamos usar para ler em inglês.' },
      { texto: 'Ajuda lembrar o que é **interpretar um texto**: perceber o assunto, a finalidade e as informações principais, e não só traduzir palavras.', revisao: 'Quando você lê um aviso de "Proibido estacionar" com um desenho de guincho, entende tudo em um segundo: o assunto (estacionar), a finalidade (proibir) e a consequência (guincho). Você não leu letra por letra; juntou o formato, a imagem e duas palavras. Em inglês é a mesma coisa.' },
    ],
    bncc: [
      { codigo: 'EM13LGG403', texto: 'Fazer uso do inglês como língua de comunicação global, levando em conta a multiplicidade e variedade de usos, usuários e funções dessa língua no mundo contemporâneo.' },
    ],
    bnccBase: [
      { codigo: 'EF06LI07', texto: 'Formular hipóteses sobre a finalidade de um texto em língua inglesa, com base em sua estrutura, organização textual e pistas gráficas.' },
      { codigo: 'EF06LI08', texto: 'Identificar o assunto de um texto, reconhecendo sua organização textual e palavras cognatas.' },
      { codigo: 'EF06LI09', texto: 'Localizar informações específicas em texto.' },
      { codigo: 'EF07LI09', texto: 'Selecionar, em um texto, a informação desejada como objetivo de leitura.' },
    ],
    blocos: [
      /* ---------- 1. Leitura do mundo ---------- */
      { tipo: 'etapa', etapa: 'leitura', texto: 'Você já lê inglês sem perceber' },
      { tipo: 'texto', texto: 'Imagine que um jogo que você tem no PC recebeu uma atualização, e aparece esta tela:' },
      { tipo: 'exemplo', titulo: 'PATCH NOTES – VERSION 2.4', texto: '• **New feature:** photo mode with filters.\n• **Improved** performance on older graphics cards.\n• **Fixed** a bug that caused the game to crash during the final battle.\n• Online servers will be offline for maintenance on **Tuesday, from 2 a.m. to 6 a.m.**' },
      { tipo: 'pergunta', id: 'p1', texto: 'Sem dicionário: o que essa atualização trouxe? Quando os servidores ficam fora do ar? Quais palavras te ajudaram a descobrir?' },
      { tipo: 'revelar', texto: 'Você provavelmente entendeu quase tudo: há um **modo de foto com filtros**, o jogo ficou **mais leve em placas de vídeo antigas**, um **erro que travava o jogo na batalha final foi corrigido**, e os servidores param **na terça, das 2h às 6h**.\n\nO que ajudou não foi saber todas as palavras. Foram três coisas:\n• **O formato**: título "PATCH NOTES", versão, lista com marcadores. Antes de ler, você já sabia que era uma lista de mudanças.\n• **Palavras parecidas com o português**: version (versão), photo, filters (filtros), performance, graphics (gráficos), final, servers (servidores), maintenance (manutenção).\n• **Palavras que o português já pegou emprestadas**: bug, crash, online, offline.\n\nE o que ficou sem saber (como "feature" ou "fixed")? O resto do texto deu a pista. Isso é ler em inglês de verdade: usar o que você sabe para chegar ao que não sabe.' },

      /* ---------- 2. Problematização ---------- */
      { tipo: 'etapa', etapa: 'problematizacao', texto: 'Por que a gente trava no inglês da prova?' },
      { tipo: 'texto', texto: 'No ENEM, a prova de Linguagens traz **5 questões de língua estrangeira** (você escolhe inglês ou espanhol na inscrição), quase sempre com textos reais: notícias, anúncios, poemas, letras de música, tirinhas, cartazes. As perguntas vêm **em português**. Em concursos, o inglês aparece em textos curtos, muitas vezes técnicos.\n\nO erro mais comum não é falta de vocabulário. É o **jeito de ler**: tentar traduzir palavra por palavra, do começo ao fim, e travar na primeira palavra desconhecida. Isso gasta tempo e esconde o sentido, que está no conjunto.' },
      { tipo: 'pergunta', id: 'p2', texto: 'Quando você encontra uma palavra que não conhece num texto em inglês, o que costuma fazer? Isso te ajuda ou te atrasa? Por quê?' },
      { tipo: 'texto', texto: 'Leitores experientes, em qualquer língua, não leem tudo do mesmo jeito. Eles **escolhem uma estratégia** conforme o objetivo: entender o assunto, achar um dado, ou ler com cuidado um trecho importante. É isso que você vai treinar agora: cinco estratégias que funcionam juntas.' },

      /* ---------- 3. Sistematização ---------- */
      { tipo: 'etapa', etapa: 'sistematizacao', texto: 'Cinco estratégias de leitura' },

      { tipo: 'titulo', texto: '1. Prever pelo formato (as pistas gráficas)' },
      { tipo: 'texto', texto: 'Antes de ler uma linha, olhe o **formato**: título, subtítulo, imagem, legenda, data, nome do autor ou do site, números, listas, logotipo. Esse conjunto é a **pista gráfica**, e ela já diz o **gênero** do texto (notícia, anúncio, receita, aviso, poema) e a sua **finalidade** (informar, vender, ensinar, avisar, emocionar).\n\nCom o gênero em mente, você sabe o que esperar: notícia responde "o quê, quem, quando, onde"; anúncio quer convencer; receita tem ingredientes e modo de fazer.' },
      { tipo: 'checagem', pergunta: 'Um texto tem um título grande, o nome de uma cidade e uma data logo no início, uma foto com legenda e parágrafos curtos. Antes de ler, a hipótese mais provável é que seja:', opcoes: ['uma receita', 'uma notícia', 'um poema', 'um manual de instruções'], correta: 1,
        explicacao: 'Título + cidade + data no início + foto com legenda é o desenho típico de uma **notícia**. Receita teria lista de ingredientes; poema, versos; manual, passos numerados.',
        outraExplicacao: 'Pense num jornal: a notícia começa dizendo onde e quando aconteceu, e quase sempre tem uma foto com legenda. Você reconhece isso antes de ler qualquer palavra, em qualquer língua.' },

      { tipo: 'titulo', texto: '2. Cognatos: as palavras amigas' },
      { tipo: 'texto', texto: 'Inglês e português têm milhares de palavras com a mesma origem (muitas vêm do latim). Elas se parecem na escrita e têm o mesmo sentido: são os [[cognatos|cognato]]. Num texto acadêmico ou jornalístico, eles aparecem em quase toda frase. Alguns finais de palavra se correspondem com frequência:' },
      { tipo: 'tabela', cabecalho: ['Em inglês', 'Em português', 'Exemplos'], linhas: [
        ['-tion', '-ção', 'information (informação), education (educação)'],
        ['-ty', '-dade', 'city (cidade), university (universidade)'],
        ['-ous', '-oso', 'famous (famoso), delicious (delicioso)'],
        ['-ly', '-mente', 'rapidly (rapidamente), finally (finalmente)'],
        ['-al', '-al', 'national (nacional), digital (digital)'],
      ] },
      { tipo: 'atencao', texto: 'Nem toda palavra parecida é amiga. Existem os [[falsos cognatos|falso cognato]], que parecem uma coisa e significam outra: **pretend** é fingir (e não pretender), **actually** é na verdade (e não atualmente), **push** é empurrar (e não puxar), **library** é biblioteca (e não livraria). Eles são o assunto do próximo tópico. Por enquanto, a regra é: **o cognato precisa fazer sentido no contexto**. Se a tradução pela aparência deixar a frase estranha, desconfie.' },
      { tipo: 'checagem', pergunta: 'Qual é a tradução mais provável de "The government announced a national celebration"?', opcoes: ['O governo anunciou uma celebração nacional.', 'O governante anulou uma festa local.', 'O governo adiou uma comemoração nacional.', 'A nação anunciou um governo novo.'], correta: 0,
        explicacao: 'Quase tudo é cognato: government (governo), announced (anunciou), national (nacional), celebration (celebração). A frase fica "O governo anunciou uma celebração nacional".',
        outraExplicacao: 'Troque cada palavra pela parecida em português e veja se a frase faz sentido: governo + anunciou + nacional + celebração. Faz. As outras opções inventam palavras que não estão no texto (adiou, anulou, local).' },

      { tipo: 'titulo', texto: '3. Skimming: a ideia geral' },
      { tipo: 'texto', texto: 'O [[skimming]] é a leitura rápida, "por cima", para responder uma pergunta só: **do que trata este texto?** Em cerca de um minuto, leia o título, a primeira frase de cada parágrafo, a última frase do texto e repare nas palavras que se repetem. Não pare em palavra desconhecida.\n\nTreine com este texto curto:' },
      { tipo: 'exemplo', titulo: 'Sleep and Memory', texto: 'Scientists have studied sleep for decades. Many studies show that the brain organizes new information while we sleep. Students who sleep well after studying usually remember more the next day.\n\nHowever, sleep is not magic. Without study, there is nothing to organize. The best plan is simple: study, review, and then sleep at least seven hours.' },
      { tipo: 'checagem', pergunta: 'Fazendo skimming no texto "Sleep and Memory", qual é a ideia principal?', opcoes: ['Dormir substitui o estudo.', 'O sono ajuda a fixar o que foi estudado, mas não substitui o estudo.', 'Os cientistas ainda não sabem nada sobre o sono.', 'Estudantes devem dormir menos para estudar mais.'], correta: 1,
        explicacao: 'O 1º parágrafo diz que o cérebro **organiza a informação nova** durante o sono. O 2º começa com "However" (porém) e corrige o exagero: o sono **não é mágica**, sem estudo não há o que organizar. Juntando: o sono ajuda, mas não substitui o estudo.',
        outraExplicacao: 'Leia só três pedaços: o título (sono e memória), "the brain organizes new information while we sleep" e "sleep is not magic". Já dá a ideia: dormir ajuda a memória, mas não faz milagre sozinho.' },

      { tipo: 'titulo', texto: '4. Scanning: a informação exata' },
      { tipo: 'texto', texto: 'O [[scanning]] é o contrário: você **já sabe o que procura** (um número, um nome, uma data, um lugar) e passa os olhos pelo texto até achar. É como procurar o seu nome numa lista de aprovados: você não lê os outros nomes.\n\nA dica é transformar a pergunta numa **palavra-alvo**. Se a pergunta é sobre inteligência artificial, procure "Artificial Intelligence" ou "AI".' },
      { tipo: 'exemplo', titulo: 'TECH WEEK – CITY LIBRARY', texto: '**Monday 14:** Workshop: Build your own PC (room 3, 6 p.m.)\n**Wednesday 16:** Talk: Artificial Intelligence in everyday life (auditorium, 7 p.m.)\n**Friday 18:** Retro games night (room 1, 8 p.m.) – free entry' },
      { tipo: 'checagem', pergunta: 'Em que dia e em que lugar é a palestra (talk) sobre inteligência artificial?', opcoes: ['Segunda, sala 3', 'Quarta, auditório', 'Sexta, sala 1', 'Quarta, sala 3'], correta: 1,
        explicacao: 'Procurando "Artificial Intelligence", você cai na linha de **Wednesday 16** (quarta, dia 16): "Talk ... (auditorium, 7 p.m.)". Auditório, às 19h.',
        outraExplicacao: 'Não leia a programação inteira. Ache o cognato "Artificial Intelligence" e leia só aquela linha: Wednesday = quarta-feira; auditorium = auditório.' },

      { tipo: 'titulo', texto: '5. Pergunta primeiro, e o contexto completa o resto' },
      { tipo: 'texto', texto: 'Em prova, **leia as perguntas antes do texto**. No ENEM elas estão em português e dizem exatamente o que procurar: aí você escolhe entre skimming e scanning.\n\nE a palavra desconhecida? Muitas vezes, não precisa dela. Quando precisar, use o **contexto**: o que vem antes e depois limita muito o sentido possível. Isso é [[inferência]]. Só depois, se ainda fizer falta, consulte o dicionário.' },
      { tipo: 'checagem', pergunta: 'Em "The shop was so crowded that we could not move", a palavra crowded significa, pelo contexto:', opcoes: ['vazia', 'lotada', 'fechada', 'barata'], correta: 1,
        explicacao: '"So ... that we could not move" = tão ... que **não conseguíamos nos mexer**. Uma loja em que ninguém se mexe está **lotada** (crowded = cheia de gente).',
        outraExplicacao: 'Pergunte: o que faz uma pessoa não conseguir se mexer dentro de uma loja? Gente demais. Se estivesse vazia, fechada ou barata, você se mexeria normalmente.' },

      /* ---------- 4. Ação ---------- */
      { tipo: 'etapa', etapa: 'acao', texto: 'Use no seu dia (15 minutos)' },
      { tipo: 'lista', itens: [
        '**1 min:** escolha um texto curto em inglês do seu dia: notas de atualização de um jogo, a página de um produto, uma notícia, a descrição de uma música.',
        '**1 min:** olhe o formato e diga qual é o gênero e a finalidade.',
        '**2 min:** faça o skimming e escreva, em uma frase em português, a ideia principal.',
        '**3 min:** invente duas perguntas de scanning (um número, um nome) e ache as respostas.',
        '**3 min:** sublinhe 5 cognatos. Algum parecia amigo e não era?',
        '**5 min:** escolha 2 palavras desconhecidas, tente adivinhar pelo contexto e só então confira no dicionário.',
      ] },
      { tipo: 'titulo', texto: 'Treino de escuta' },
      { tipo: 'texto', texto: 'As mesmas estratégias valem para ouvir: leia a pergunta antes, ouça a ideia geral (skimming) e depois procure o detalhe (scanning). O celular vai ler um recado de trabalho.' },
      { tipo: 'escuta', titulo: 'Recado no escritório', texto: 'Good morning, everyone. Before we start, a quick update about the office. The coffee machine on the second floor is broken, so please use the one in the kitchen. Also, the meeting with the design team has moved from ten to eleven thirty. See you there!' },
      { tipo: 'checagem', pergunta: 'No recado, o que mudou?', opcoes: ['A reunião passou das 10h para as 11h30.', 'Chegou uma máquina de café nova.', 'A reunião foi cancelada.', 'A cozinha está fechada.'], correta: 0,
        explicacao: '"The meeting with the design team has moved from ten to eleven thirty" = a reunião com a equipe de design **mudou das 10h para as 11h30**. A máquina de café do 2º andar está **quebrada** (broken), e a da cozinha pode ser usada.',
        outraExplicacao: 'Ouça de novo procurando só os números: "ten" e "eleven thirty". O verbo antes deles é "moved" (mudou). Mudou o quê? "The meeting".' },
      { tipo: 'pergunta', id: 'p3', texto: 'Faça o roteiro acima com um texto do seu dia. Escreva aqui: que texto era, a ideia principal em uma frase e uma palavra que você descobriu pelo contexto.' },

      /* ---------- 5. Reflexão ---------- */
      { tipo: 'etapa', etapa: 'reflexao', texto: 'O que mudou?' },
      { tipo: 'texto', texto: 'Volte às notas de atualização do começo. Agora você tem nome para o que fez sem perceber: **previu pelo formato** (uma lista de mudanças), apoiou-se nos **cognatos**, fez **scanning** para achar o horário da manutenção e **inferiu** "fixed" (corrigido) pelo contexto do "bug". Ler em inglês não é traduzir tudo: é escolher a estratégia certa para o que você quer saber.' },
      { tipo: 'pergunta', id: 'p4', texto: 'O que muda, para você, entre "traduzir palavra por palavra" e "ler com estratégia"? Qual das cinco estratégias você vai usar primeiro na próxima prova, e por quê?' },
    ],
    resumo: [
      'Antes de ler: olhe o formato (título, imagem, data, listas) e levante uma hipótese sobre o gênero e a finalidade.',
      'Cognatos são palavras parecidas e com o mesmo sentido (information, city, famous). Confira sempre se fazem sentido no contexto.',
      'Falsos cognatos enganam: pretend = fingir, actually = na verdade, push = empurrar, library = biblioteca.',
      'Skimming: leitura rápida para a ideia geral (título, primeiras frases, palavras repetidas).',
      'Scanning: procurar uma informação exata (número, nome, data), guiado por uma palavra-alvo.',
      'Em prova, leia as perguntas primeiro. Palavra desconhecida: pule ou deduza pelo contexto (inferência).',
      'ENEM: 5 questões de língua estrangeira em Linguagens, com textos reais e perguntas em português.',
    ],
    fontes: [
      { nome: 'Base Nacional Comum Curricular (MEC) — Língua Inglesa e Linguagens no Ensino Médio', url: 'https://www.basenacionalcomum.mec.gov.br/' },
      { nome: 'Inep — Provas e gabaritos do ENEM (para treinar com as questões oficiais de inglês)', url: 'https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem/provas-e-gabaritos' },
      { nome: 'British Council LearnEnglish — textos para praticar leitura, por nível', url: 'https://learnenglish.britishcouncil.org/free-resources/reading' },
      { nome: 'Wiktionary — dicionário aberto (significados e traduções)', url: 'https://en.wiktionary.org/' },
    ],
  },
});

Object.assign(App.dados.checagensExtras, {
  'ingles-1-0': [
    { // 1. pistas gráficas
      conceito: 'Usar as **pistas gráficas** (título, imagem, data, listas, logotipo) para prever o gênero e a finalidade do texto antes de ler.',
      variacoes: [
        { pergunta: 'Um texto em inglês tem a foto de um tênis, o preço riscado, "50% OFF" em letras grandes e o botão "Buy now". A finalidade mais provável é:', opcoes: ['informar uma notícia esportiva', 'vender um produto em promoção', 'ensinar a correr', 'contar uma história'], correta: 1,
          explicacao: 'Foto de produto + preço riscado + "50% OFF" + "Buy now" (compre agora) formam um **anúncio**: a finalidade é vender.',
          outraExplicacao: 'Você veria a mesma página numa loja virtual brasileira. Preço com desconto e botão de compra só aparecem quando alguém quer vender algo.' },
      ],
    },
    { // 2. cognatos
      conceito: 'Reconhecer **cognatos** (palavras parecidas e com o mesmo sentido) e conferir se a tradução faz sentido no contexto.',
      variacoes: [
        { pergunta: 'Em "The university offers free online courses in several areas", qual grupo reúne só cognatos?', opcoes: ['university, online, courses, areas', 'offers, free, several', 'the, in, free', 'several, offers, the'], correta: 0,
          explicacao: 'University (universidade), online (palavra emprestada), courses (cursos) e areas (áreas) são cognatos. "Offers" (oferece), "free" (grátis) e "several" (vários) não se parecem com o português.',
          outraExplicacao: 'Leia cada palavra em voz alta pensando em português: universidade, cursos, áreas... soam iguais. "Free" e "several" não lembram nada do português: não são cognatos.' },
      ],
    },
    { // 3. skimming
      conceito: 'Fazer **skimming**: ler rápido o título, as primeiras frases e as palavras repetidas para descobrir a ideia geral.',
      variacoes: [
        { pergunta: 'Texto: "Cities around the world are planting more trees. Trees reduce heat, clean the air and make streets more pleasant. Some cities now measure their tree cover every year." A ideia geral é:', opcoes: ['As cidades estão cortando árvores para construir prédios.', 'As cidades estão plantando mais árvores por causa dos benefícios delas.', 'As árvores deixam as ruas mais quentes.', 'Ninguém mede a quantidade de árvores nas cidades.'], correta: 1,
          explicacao: 'A primeira frase já diz o assunto: as cidades estão **plantando mais árvores** (planting more trees). A segunda explica por quê: reduzem o calor, limpam o ar e deixam as ruas mais agradáveis.',
          outraExplicacao: 'Na leitura rápida, a primeira frase de um parágrafo costuma trazer a ideia principal. "Cities... planting more trees" basta para escolher a resposta.' },
      ],
    },
    { // 4. scanning
      conceito: 'Fazer **scanning**: transformar a pergunta numa palavra-alvo e ler só a parte do texto em que ela aparece.',
      variacoes: [
        { pergunta: 'Cardápio: "Pizza – $12 · Burger – $9 · Salad – $7 · Juice – $4". Quanto custa a salada?', opcoes: ['$12', '$9', '$7', '$4'], correta: 2,
          explicacao: 'A palavra-alvo é **Salad** (salada). Ao lado dela: **$7**.',
          outraExplicacao: 'Não precisa ler o cardápio todo. Procure só "salad", que é parecida com "salada", e olhe o preço do lado.' },
      ],
    },
    { // 5. inferência pelo contexto
      conceito: 'Descobrir o sentido de uma palavra desconhecida pelo **contexto** (inferência), sem parar a leitura.',
      variacoes: [
        { pergunta: 'Em "I was starving, so I ate two plates of rice and beans", a palavra starving significa, pelo contexto:', opcoes: ['com muito sono', 'morrendo de fome', 'com muito frio', 'atrasado'], correta: 1,
          explicacao: 'A segunda parte dá a pista: "so I ate two plates" = **por isso comi dois pratos**. Quem come dois pratos estava **morrendo de fome** (starving = faminto).',
          outraExplicacao: 'O "so" (por isso) liga causa e consequência. A consequência foi comer muito. Qual causa leva a comer muito? Fome.' },
      ],
    },
    { // 6. escuta (o recado no escritório)
      conceito: 'Na **escuta**, ler a pergunta antes, ouvir a ideia geral e depois procurar o detalhe (números, dias, lugares).',
      variacoes: [
        { pergunta: 'No recado do escritório, qual máquina de café está quebrada?', opcoes: ['a da cozinha', 'a do segundo andar', 'a do térreo', 'nenhuma'], correta: 1,
          explicacao: '"The coffee machine on the second floor is broken" = a máquina do **segundo andar** está quebrada. Por isso o recado pede para usar a da cozinha (the one in the kitchen).',
          outraExplicacao: 'Ouça procurando "broken" (quebrada). Logo antes vem o lugar: "on the second floor", no segundo andar.' },
      ],
    },
  ],
});

App.dados.adicionarTermos('ingles', {
  'cognato': 'Palavra de outra língua parecida com uma do português e com o mesmo sentido, porque as duas têm a mesma origem. Ex.: information = informação, city = cidade.',
  'falso cognato': 'Palavra parecida com uma do português, mas com outro sentido. Ex.: pretend = fingir (não "pretender"), actually = na verdade (não "atualmente").',
  'skimming': 'Leitura rápida, "por cima", para descobrir a ideia geral de um texto: título, primeiras frases e palavras que se repetem.',
  'scanning': 'Leitura de busca: passar os olhos pelo texto procurando uma informação exata (número, nome, data), guiado por uma palavra-alvo.',
  'inferência': 'Descobrir algo que o texto não diz com todas as letras, juntando pistas do contexto. Ex.: "so crowded that we could not move" → crowded = lotado.',
});
