/* =========================================================
   topicos/filosofia.js — conteúdo de Filosofia
   Mesmo formato de js/dados/conteudos.js (veja o cabeçalho de lá),
   mas separado por matéria para cada uma crescer no seu arquivo.
   Aqui ficam, desta matéria:
   - os textos de estudo (App.dados.conteudos)
   - os extras dos testes "Entendeu?" (App.dados.checagensExtras)
   - os termos novos do glossário (App.dados.adicionarTermos)
   ========================================================= */
Object.assign(App.dados.conteudos, {

  /* ======================= FILOSOFIA — O QUE É FILOSOFIA (perguntas que puxam perguntas + contraste mito × logos) ======================= */
  'filosofia-1-0': {
    metodo: 'freire',
    prerequisitos: [
      { texto: '**Nenhum.** Este tópico começa do zero. Você só precisa de uma coisa que todo mundo já tem: a vontade de perguntar "por quê?".' },
    ],
    bncc: [
      { codigo: 'EM13CHS101', texto: 'Identificar, analisar e comparar diferentes fontes e narrativas expressas em diversas linguagens, com vistas à compreensão de ideias filosóficas e de processos e eventos históricos, geográficos, políticos, econômicos, sociais, ambientais e culturais.' },
      { codigo: 'EM13CHS103', texto: 'Elaborar hipóteses, selecionar evidências e compor argumentos relativos a processos políticos, econômicos, sociais, ambientais, culturais e epistemológicos, com base na sistematização de dados e informações de diversas naturezas (expressões artísticas, textos filosóficos e sociológicos, documentos históricos e geográficos, gráficos, mapas, tabelas, tradições orais, entre outros).' },
      { codigo: 'EM13CHS501', texto: 'Analisar os fundamentos da ética em diferentes culturas, tempos e espaços, identificando processos que contribuem para a formação de sujeitos éticos que valorizem a liberdade, a cooperação, a autonomia, o empreendedorismo, a convivência democrática e a solidariedade.' },
    ],
    bnccBase: [
      { codigo: 'EF06HI09', texto: 'Discutir o conceito de Antiguidade Clássica, seu alcance e limite na tradição ocidental, assim como os impactos sobre outras sociedades e culturas.' },
    ],
    blocos: [
      /* ---------- 1. Leitura do mundo ---------- */
      { tipo: 'etapa', etapa: 'leitura', texto: 'Você já fez filosofia, só não sabia o nome' },
      { tipo: 'texto', texto: 'Toda criança passa por uma fase de perguntar "por quê?" para tudo. Algumas perguntas comuns dessa fase:' },
      { tipo: 'lista', itens: [
        'Por que o céu é azul?',
        'Para onde a gente vai quando morre?',
        'Por que eu tenho que obedecer se a regra é injusta?',
        'Como eu sei que não estou sonhando agora?',
        'Por que essa música é bonita e aquela não?',
      ] },
      { tipo: 'pergunta', id: 'p1', texto: 'Lembre de uma pergunta que você fazia quando criança (ou que faz até hoje) e que nenhum adulto respondeu direito. Qual era? Por que ninguém conseguia responder?' },
      { tipo: 'texto', texto: 'Agora olhe a lista de novo e tente separar: quais dessas perguntas dá para responder com um **experimento** ou uma **medição**? E quais não dá?' },
      { tipo: 'revelar', texto: 'Só a primeira ("por que o céu é azul?") se resolve com experimento: a física explica como a luz do Sol se espalha no ar.\n\nAs outras são diferentes. Não existe aparelho que meça se uma regra é **justa**, nem laboratório que prove que você **não está sonhando**, nem balança que pese a **beleza** de uma música. Mesmo assim, são perguntas sérias, e as pessoas discutem sobre elas há milhares de anos.\n\nÉ exatamente aí que mora a **filosofia**: nas perguntas importantes que não se resolvem só olhando, medindo ou obedecendo a alguém. A criança que pergunta "por quê?" sem parar já está fazendo o gesto básico da filosofia. O adulto muitas vezes para de perguntar. A filosofia é o hábito de **não parar**.' },

      /* ---------- 2. Problematização ---------- */
      { tipo: 'etapa', etapa: 'problematizacao', texto: 'Para que serve uma matéria que não dá resposta pronta?' },
      { tipo: 'texto', texto: 'É comum ouvir que filosofia "não serve para nada", porque ela não ensina uma conta nem uma técnica. Mas pense no contrário: quem **não** pergunta por quê aceita a explicação que outra pessoa der. A propaganda, o boato no grupo da família, o político, o chefe: todos oferecem respostas prontas. A filosofia treina o hábito de perguntar "isso é verdade? quem disse? com base em quê?" antes de aceitar.' },
      { tipo: 'texto', texto: 'Freire chamava isso de passar da **consciência ingênua** (que aceita o mundo como ele aparece) para a **consciência crítica** (que pergunta por que o mundo é assim e se poderia ser diferente). É o mesmo movimento que a filosofia faz desde a Grécia antiga. E tem um lado prático: bancas de concurso e o Enem cobram justamente isso, ler um texto e perceber a ideia por trás dele, além dos conceitos básicos que você vai ver aqui.' },
      { tipo: 'pergunta', id: 'p2', texto: 'Pense numa ideia que você aceitava sem questionar e que depois mudou (sobre dinheiro, religião, trabalho, família, política...). O que fez você começar a duvidar dela?' },

      /* ---------- 3. Sistematização ---------- */
      { tipo: 'etapa', etapa: 'sistematizacao', texto: 'Quatro perguntas para entender a filosofia' },
      { tipo: 'texto', texto: 'Como a filosofia é feita de perguntas, vamos estudá-la assim também. São quatro perguntas, uma de cada vez: **de onde vem a palavra?**, **onde e como ela nasceu?**, **qual é o jeito filosófico de pensar?** e **sobre o que ela pergunta?**' },

      // ----- 1. A palavra
      { tipo: 'titulo', texto: '1. De onde vem a palavra "filosofia"?' },
      { tipo: 'texto', texto: 'A palavra é grega e tem duas partes:\n• **philo** (de "philía"): amizade, amor de amigo;\n• **sophía**: sabedoria.\n\nFilosofia é, ao pé da letra, **amizade pela sabedoria** (ou amor ao saber). Filósofo é o **amigo do saber**.' },
      { tipo: 'texto', texto: 'Conta a tradição antiga que o primeiro a usar a palavra foi **Pitágoras** (o mesmo do teorema). Perguntado se era um sábio, teria respondido que não: sábio de verdade só um deus seria; ele era apenas um **amigo da sabedoria**. Ninguém tem como provar que a história aconteceu, mas ela mostra a ideia central: o filósofo **não é dono** do saber. Ele está sempre **procurando**, como quem gosta de alguém e quer ficar perto.' },
      { tipo: 'checagem', pergunta: 'Pela origem da palavra, qual frase descreve melhor o filósofo?', opcoes: ['Aquele que já possui toda a sabedoria.', 'Aquele que ama e busca a sabedoria, sem se dizer dono dela.', 'Aquele que estuda os deuses gregos.', 'Aquele que decora as respostas dos sábios antigos.'], correta: 1,
        explicacao: '**Philo** = amizade, amor; **sophía** = sabedoria. O filósofo é o **amigo do saber**: alguém que busca, e não alguém que já tem tudo. Por isso a história de Pitágoras dizendo "não sou sábio, sou amigo da sabedoria".',
        outraExplicacao: 'Pense em amizade: você procura estar perto de um amigo, mas ele não vira sua propriedade. Com o saber é igual: o filósofo vive perto dele, perguntando, mas nunca diz "pronto, já sei tudo". Quem diz que já tem toda a sabedoria parou de procurar, e aí deixou de ser filósofo.' },

      // ----- 2. Do mito ao logos
      { tipo: 'titulo', texto: '2. Onde e como ela nasceu? Do mito ao logos' },
      { tipo: 'texto', texto: 'Antes da filosofia, os gregos já tinham explicações para o mundo: os [[mitos|mito]]. As histórias de **Homero** (Ilíada e Odisseia) e de **Hesíodo** (Teogonia, uma [[cosmogonia]] que conta como os deuses e o mundo surgiram) eram contadas de geração em geração. Elas explicavam a chuva, o mar, a guerra, o amor e a morte pela **vontade dos deuses**.' },
      { tipo: 'texto', texto: 'Por volta do **século VI a.C.**, em **Mileto** (uma cidade grega na Jônia, costa da atual Turquia), algumas pessoas começaram a explicar o mundo de outro jeito: buscando **causas naturais** e dando **razões** que qualquer um podia discutir. Os gregos chamavam esse tipo de explicação de [[logos]]: palavra, discurso, **razão que se explica**. O primeiro nome dessa lista é **Tales de Mileto**.' },
      { tipo: 'exemplo', titulo: 'O mesmo terremoto, duas explicações', texto: '**No mito:** a terra treme porque **Poseidon**, deus do mar, está furioso. Os gregos o chamavam de "o que abala a terra". Para parar o tremor, faça oferendas e acalme o deus.\n\n**No logos (Tales):** a terra flutua sobre a água, como um tronco num rio. Quando a água se agita, a terra balança, e isso é o terremoto.\n\nA explicação de Tales está **errada** (hoje sabemos das placas tectônicas). Mas repare na mudança: ele não chamou nenhum deus. Deu uma causa **natural**, que outra pessoa podia **examinar e criticar**. E foi isso que aconteceu: os filósofos seguintes discordaram dele e propuseram outras explicações.' },
      { tipo: 'tabela', cabecalho: ['', 'Mito', 'Logos (filosofia)'], linhas: [
        ['Explica pela...', 'vontade de deuses e heróis', 'natureza e razão'],
        ['Por que acreditar?', 'pela **autoridade** de quem conta (tradição, poeta inspirado pelas Musas)', 'pelos **argumentos**: a explicação precisa se justificar'],
        ['Pode ser discutido?', 'em geral, não: é aceito e repetido', 'sim: está **aberto à crítica** e pode ser corrigido'],
        ['Forma', 'narrativa (uma história com personagens)', 'explicação geral (busca a causa de tudo)'],
      ] },
      { tipo: 'texto', texto: 'Esses primeiros filósofos são chamados de [[pré-socráticos]] (vieram antes de Sócrates). A grande pergunta deles era: **do que tudo é feito?** Qual é a [[arché]], o princípio de todas as coisas? Tales disse a água; outros disseram o ar, o fogo, os átomos. Eles têm um tópico só deles, logo depois deste.' },
      { tipo: 'checagem', pergunta: 'Qual das explicações abaixo segue o modo de pensar do logos?', opcoes: ['A colheita foi ruim porque a deusa Deméter está de luto.', 'O raio caiu porque Zeus ficou irritado com a cidade.', 'As coisas mudam porque tudo vem de um mesmo princípio natural, que se transforma.', 'O mar ficou bravo porque os marinheiros não fizeram a oferenda.'], correta: 2,
        explicacao: 'Só a terceira explica sem recorrer a deuses: ela fala de um **princípio natural** (como a arché dos pré-socráticos) e pode ser discutida com argumentos. As outras explicam pela vontade ou pelo humor de um deus, que é o jeito do **mito**.',
        outraExplicacao: 'Faça o teste: na explicação aparece um deus que "quis" ou "ficou bravo"? Então é mito. A explicação busca uma causa na própria natureza, que alguém poderia examinar e contestar? Então é logos. Só a terceira passa no teste.' },
      { tipo: 'titulo', texto: 'Por que lá? E foi uma ruptura total?' },
      { tipo: 'texto', texto: 'A filosofia não caiu do céu. Algumas condições da Grécia daquela época ajudaram:\n• a **[[pólis]]**: cidades em que os cidadãos discutiam as leis na praça pública, a [[ágora]]. Quem se acostuma a defender ideias em público passa a exigir **argumentos**;\n• o **comércio e as viagens**: Mileto era um porto, em contato com egípcios, babilônios e fenícios. Quem conhece outros povos percebe que cada um tem os seus mitos, e começa a se perguntar qual explicação vale;\n• a **escrita alfabética** e a **moeda**, que deixaram ideias e valores mais fáceis de registrar, comparar e discutir.' },
      { tipo: 'atencao', texto: 'Cuidado com duas ideias erradas que aparecem em prova:\n• **"Milagre grego"**: a filosofia não surgiu do nada. Ela aproveitou saberes de outros povos (a astronomia dos babilônios, a geometria dos egípcios), e outras culturas, como a Índia e a China, também desenvolveram pensamentos profundos. O que nasceu na Grécia foi um jeito específico de pensar, que deu origem à tradição ocidental.\n• **"O mito é burrice"**: o mito também organiza e dá sentido ao mundo, e a passagem para o logos foi **lenta**. Os primeiros filósofos ainda falavam de forças divinas, e Platão, séculos depois, usava mitos para ensinar. Muitos livros falam em **ruptura**; outros preferem **continuidade**. As bancas costumam cobrar as duas visões.' },
      { tipo: 'checagem', pergunta: 'Sobre a passagem do mito ao logos, qual afirmação é a mais adequada?', opcoes: ['Foi uma mudança instantânea: num dia os gregos abandonaram todos os mitos.', 'Foi um processo gradual, ligado a condições como a vida na pólis, o comércio e a escrita.', 'Mostrou que os mitos eram mentiras sem nenhum valor.', 'Só foi possível porque nenhum outro povo tinha conhecimentos de astronomia ou geometria.'], correta: 1,
        explicacao: 'A passagem foi **gradual** e teve **condições históricas**: o debate na pólis, o contato com outros povos pelo comércio, a escrita alfabética. As outras opções repetem os dois erros clássicos: achar que foi um "milagre" instantâneo e isolado, ou que o mito não tinha valor.',
        outraExplicacao: 'Desconfie de alternativas absolutas ("num dia", "todos", "nenhum valor", "nenhum outro povo"). A história quase nunca muda de uma vez. Os primeiros filósofos ainda misturavam ideias míticas com explicações naturais, e aprenderam com egípcios e babilônios. Por isso a resposta é a que fala em processo gradual.' },

      // ----- 3. A atitude filosófica
      { tipo: 'titulo', texto: '3. Qual é o jeito filosófico de pensar?' },
      { tipo: 'texto', texto: 'Filosofia não é um assunto: é uma **atitude**, um jeito de olhar para qualquer assunto. Essa atitude tem três momentos, que costumam vir nesta ordem:' },
      { tipo: 'tabela', cabecalho: ['Momento', 'O que é', 'Como soa'], linhas: [
        ['**Espanto** ("thaumázein")', 'estranhar o que parecia óbvio; sentir que aquilo merece uma explicação', '"Espera aí... por que as coisas são assim?"'],
        ['**Dúvida**', 'reconhecer que não sabe, ou que o que achava saber pode estar errado', '"Será que o que eu penso é verdade mesmo?"'],
        ['**Crítica**', 'examinar as razões: pedir justificativa, comparar argumentos, procurar contradições', '"Com base em quê? Isso faz sentido? Qual é o melhor argumento?"'],
      ] },
      { tipo: 'texto', texto: '**O espanto.** Platão (no diálogo Teeteto) e Aristóteles (no início da Metafísica) disseram a mesma coisa: a filosofia **começa pelo espanto**. Não é susto: é aquele estranhamento de olhar para algo de todo dia (o tempo, a morte, a justiça, a própria consciência) e perceber que você não sabe explicar.' },
      { tipo: 'texto', texto: '**A dúvida.** Sócrates é o exemplo clássico. Segundo Platão, o oráculo de Delfos disse que ninguém era mais sábio que Sócrates. Ele estranhou e foi conversar com políticos, poetas e artesãos que tinham fama de sábios. Descobriu que eles achavam que sabiam o que não sabiam. Concluiu que a sua vantagem era só uma: **saber que não sabia**. Daí veio a frase popular "só sei que nada sei".' },
      { tipo: 'texto', texto: '**A crítica.** Sócrates não parava na dúvida: fazia perguntas até a pessoa perceber as falhas do próprio pensamento e chegar a uma ideia melhor, a [[maiêutica]]. Crítica, aqui, não é "falar mal". É **examinar**. Na Apologia, Platão põe na boca de Sócrates uma frase famosa: **uma vida sem exame não vale a pena ser vivida**.' },
      { tipo: 'exemplo', titulo: 'Atitude comum × atitude filosófica', texto: '**Diante de uma notícia que viraliza:** "Todo mundo está compartilhando, então deve ser verdade."\n**Com atitude filosófica:** "Espera (espanto). Será que é verdade? (dúvida). Quem publicou, com que provas, e o que ganha com isso? (crítica)."\n\n**Diante de uma regra:** "Sempre foi assim."\n**Com atitude filosófica:** "Por que é assim? Essa regra é justa? Para quem ela é boa?"' },
      { tipo: 'atencao', texto: 'A frase "**só sei que nada sei**" não aparece com essas palavras nos textos de Platão. É um resumo popular da ideia de Sócrates: reconhecer a própria ignorância é o começo do saber. Ela não quer dizer "não sei nada, então tanto faz". Quer dizer: **por saber que não sei, eu continuo procurando**.' },
      { tipo: 'checagem', pergunta: 'Uma pessoa lê que "o cérebro humano usa só 10% da capacidade" e pensa: "Que estranho... Será verdade? De onde saiu esse número e como alguém teria medido isso?". Ela mostrou:', opcoes: ['senso comum, porque aceitou a informação sem pensar', 'atitude mítica, porque explicou o cérebro por forças divinas', 'atitude filosófica: espanto, dúvida e crítica', 'apenas desconfiança, que não tem relação com a filosofia'], correta: 2,
        explicacao: 'Ela **estranhou** ("que estranho"), **duvidou** ("será verdade?") e passou a **examinar as razões** ("de onde saiu? como mediram?"). São os três momentos da atitude filosófica. (E, de fato, esse "10%" é um mito popular sem base científica.)',
        outraExplicacao: 'Procure as três marcas na fala dela: o estranhamento é o **espanto**, a pergunta "será verdade?" é a **dúvida**, e pedir a origem e o método é a **crítica**. O [[senso comum]] faria o contrário: repetiria a informação sem perguntar nada.' },

      // ----- 4. As grandes áreas
      { tipo: 'titulo', texto: '4. Sobre o que ela pergunta? As grandes áreas' },
      { tipo: 'texto', texto: 'Com o tempo, as perguntas filosóficas foram se agrupando em **áreas**. Cada área tem uma **pergunta central**. Para reconhecer a área numa prova, não decore a lista: identifique **que tipo de pergunta** está sendo feita.' },
      { tipo: 'tabela', cabecalho: ['Área', 'Pergunta central', 'Exemplos de perguntas'], linhas: [
        ['**[[Ética|ética]]**', 'Como devo agir?', 'O que é o bem? Mentir é sempre errado? O fim justifica os meios?'],
        ['**Política**', 'Como viver junto? Quem deve mandar?', 'O que é justiça? Por que obedecer ao Estado? O que é poder legítimo?'],
        ['**[[Epistemologia|epistemologia]]** (teoria do conhecimento)', 'O que posso conhecer?', 'O que é a verdade? Os sentidos enganam? Como justificar o que eu sei?'],
        ['**[[Metafísica|metafísica]]**', 'O que é real? O que existe?', 'Existe alma? Temos livre-arbítrio? O que faz algo continuar sendo ele mesmo?'],
        ['**[[Lógica|lógica]]**', 'O que torna um raciocínio correto?', 'Esse argumento é válido? A conclusão decorre das premissas?'],
        ['**[[Estética|estética]]**', 'O que é o belo? O que é arte?', 'A beleza está no objeto ou em quem olha? Qualquer coisa pode ser arte?'],
      ] },
      { tipo: 'texto', texto: 'Uma curiosidade sobre dois nomes: **metafísica** vem de "metà tà physiká", "o que vem depois da física". Foi o título que os organizadores das obras de Aristóteles deram aos livros que vinham depois dos de física e tratavam do que está **além** da natureza que vemos. E **estética** vem de "aísthesis", "sensação, percepção": a área estuda o que sentimos diante do belo e da arte, e não só "o que é bonito".' },
      { tipo: 'exemplo', titulo: 'Um assunto, seis áreas: as IAs que escrevem e desenham', texto: 'A mesma novidade puxa perguntas de todas as áreas:\n• **Ética:** é certo treinar uma IA com desenhos de artistas sem pedir permissão a eles?\n• **Política:** quem deve fazer as regras para as IAs: governos, empresas, os cidadãos?\n• **Epistemologia:** se a IA às vezes inventa fatos com toda a confiança, como saber quando dá para confiar no que ela diz?\n• **Metafísica:** uma máquina pode **pensar** de verdade, ou só imita? O que é uma mente?\n• **Lógica:** "ela conversa como um humano, logo pensa como um humano" é um argumento válido?\n• **Estética:** uma imagem feita por IA é arte? Quem é o artista?' },
      { tipo: 'checagem', pergunta: 'A pergunta "É certo mentir para proteger um amigo?" pertence principalmente a qual área?', opcoes: ['Estética', 'Lógica', 'Metafísica', 'Ética'], correta: 3,
        explicacao: 'A pergunta é sobre **como devemos agir**, sobre o que é certo ou errado fazer. Esse é o campo da **ética**.',
        outraExplicacao: 'Procure a palavra-chave: "é **certo**...?". Quando a pergunta é sobre certo e errado numa ação, é ética. Se fosse "isso é bonito?", seria estética; "esse raciocínio está correto?", lógica; "isso existe?", metafísica.' },
      { tipo: 'atencao', texto: 'Dois pares que confundem:\n• **Ética × moral:** a **moral** é o conjunto de regras e costumes de um grupo (o que aquela sociedade considera certo). A **ética** é a reflexão filosófica **sobre** essas regras: por que são certas? valem para todos?\n• **Epistemologia × metafísica:** a epistemologia pergunta **como conhecemos** ("posso confiar nos meus sentidos?"). A metafísica pergunta **o que existe** ("existe um mundo fora da minha mente?"). Uma é sobre o conhecer; a outra, sobre o ser.' },
      { tipo: 'checagem', pergunta: '"Como posso ter certeza de que aquilo que vejo corresponde à realidade, e não é uma ilusão dos meus sentidos?" Essa pergunta é típica de qual área?', opcoes: ['Epistemologia', 'Política', 'Ética', 'Estética'], correta: 0,
        explicacao: 'A pergunta é sobre os **limites e a confiabilidade do conhecimento**: posso confiar no que os sentidos me mostram? Esse é o problema central da **epistemologia** (teoria do conhecimento).',
        outraExplicacao: 'Repare no verbo principal: "como posso **ter certeza**". A pergunta não é sobre o que é certo fazer (ética), nem sobre o poder (política), nem sobre o belo (estética). É sobre **como sabemos** o que sabemos: epistemologia.' },

      /* ---------- 4. Ação ---------- */
      { tipo: 'etapa', etapa: 'acao', texto: 'Treine o olhar filosófico' },
      { tipo: 'lista', itens: [
        '**Uma notícia, seis perguntas:** escolha uma notícia de hoje e escreva uma pergunta de cada área sobre ela (ética, política, epistemologia, metafísica, lógica e estética), como no exemplo das IAs.',
        '**Mito ou logos?** Lembre de uma explicação que você ouviu na família para algo do dia a dia (uma doença, um azar, o tempo). Ela explica pela natureza ou por algo sobrenatural? Dá para discuti-la com argumentos?',
        '**Teste socrático:** pegue uma opinião forte sua e pergunte "por quê?" pelo menos três vezes seguidas. Onde a resposta começou a ficar difícil?',
      ] },
      { tipo: 'pergunta', id: 'p3', texto: 'Escreva aqui as suas seis perguntas sobre a notícia, ou conte o que aconteceu no teste socrático.' },

      /* ---------- 5. Reflexão ---------- */
      { tipo: 'etapa', etapa: 'reflexao', texto: 'O que mudou?' },
      { tipo: 'texto', texto: 'Volte às perguntas de criança do começo. Agora dá para dar nome a elas: "para onde a gente vai quando morre?" é **metafísica**; "por que obedecer a uma regra injusta?" é **ética** e **política**; "como sei que não estou sonhando?" é **epistemologia**; "por que essa música é bonita?" é **estética**. Você já fazia filosofia. Agora sabe o nome, a origem e o jeito de fazer.' },
      { tipo: 'pergunta', id: 'p4', texto: 'Pegue a pergunta que você escreveu no começo (a que ninguém respondeu). A que área ela pertence? Com o que você viu aqui, como começaria a pensar sobre ela?' },
    ],
    resumo: [
      'Filosofia = **philo** (amizade, amor) + **sophía** (sabedoria): amor ao saber. O filósofo busca o saber, não é dono dele (história atribuída a Pitágoras).',
      'Mito: explica pela vontade dos deuses, vale pela autoridade da tradição. Logos: explica por causas naturais e argumentos, aberto à crítica.',
      'A filosofia nasce em Mileto (Jônia), no século VI a.C., com Tales e os pré-socráticos, que buscavam a arché (o princípio de tudo).',
      'Condições: a pólis e o debate na ágora, o comércio e o contato com outros povos, a escrita alfabética e a moeda. Foi um processo gradual, não um "milagre grego".',
      'Atitude filosófica: espanto (estranhar o óbvio), dúvida (saber que não sabe, como Sócrates) e crítica (examinar as razões).',
      'Áreas: ética (como agir?), política (como viver junto?), epistemologia (o que posso conhecer?), metafísica (o que existe?), lógica (o raciocínio é válido?), estética (o que é belo/arte?).',
      'Moral = regras de um grupo; ética = reflexão sobre essas regras.',
    ],
    fontes: [
      { nome: 'MEC — Base Nacional Comum Curricular (Ciências Humanas e Sociais Aplicadas no Ensino Médio)', url: 'https://basenacionalcomum.mec.gov.br/images/BNCC_EI_EF_110518_versaofinal_site.pdf' },
      { nome: 'Stanford Encyclopedia of Philosophy — Presocratic Philosophy (acesso aberto, em inglês)', url: 'https://plato.stanford.edu/entries/presocratics/' },
      { nome: 'Projeto Gutenberg — Platão, Apologia de Sócrates (domínio público, em inglês)', url: 'https://www.gutenberg.org/ebooks/1656' },
      { nome: 'Projeto Gutenberg — Platão, Teeteto (domínio público, em inglês; o espanto está em 155d)', url: 'https://www.gutenberg.org/ebooks/1726' },
    ],
  },
});

Object.assign(App.dados.checagensExtras, {

  /* ================= O que é filosofia ================= */
  'filosofia-1-0': [
    { // 1. origem da palavra
      conceito: 'A **origem da palavra**: philo (amizade, amor) + sophía (sabedoria). O filósofo é o amigo do saber, que busca, e não o dono do saber.',
      variacoes: [
        { pergunta: 'A palavra "filosofia" vem do grego e significa, ao pé da letra:', opcoes: ['estudo dos deuses', 'amor (amizade) à sabedoria', 'ciência da natureza', 'arte de falar bem'], correta: 1,
          explicacao: '**Philo** = amizade, amor; **sophía** = sabedoria. Filosofia é **amor à sabedoria**.',
          outraExplicacao: 'Pense em palavras com "filo": filantropia é amor à humanidade (ántropos = ser humano). Com "sophía" (sabedoria), fica amor à sabedoria.' },
        { pergunta: 'Na história atribuída a Pitágoras, ele se dizia "amigo da sabedoria", e não "sábio". O que essa história quer mostrar?', opcoes: ['Que Pitágoras era modesto só por educação.', 'Que a sabedoria completa é impossível, então não vale a pena buscá-la.', 'Que o filósofo está sempre em busca do saber, sem se considerar dono dele.', 'Que só os matemáticos podem ser filósofos.'], correta: 2,
          explicacao: 'A história mostra a ideia central da palavra: o filósofo **procura** o saber, como um amigo que quer estar perto, mas nunca se declara dono da sabedoria.',
          outraExplicacao: 'Quem se diz sábio para de procurar. Quem se diz amigo da sabedoria continua procurando. A filosofia é essa busca sem fim, e não a desistência dela.' },
      ],
    },
    { // 2. mito × logos
      conceito: 'Diferenciar **mito** (explica pela vontade dos deuses, aceito pela tradição) e **logos** (explica por causas naturais e argumentos, aberto à crítica).',
      variacoes: [
        { pergunta: 'Qual característica pertence ao **logos**, e não ao mito?', opcoes: ['Ser aceito pela autoridade de quem conta.', 'Explicar o mundo pela vontade de deuses e heróis.', 'Ser transmitido como uma história sagrada que não se discute.', 'Precisar se justificar com argumentos e poder ser criticado.'], correta: 3,
          explicacao: 'O logos é a explicação que **se justifica com razões** e fica **aberta à crítica**. As outras três opções descrevem o mito.',
          outraExplicacao: 'Pergunte: "posso discordar e propor outra explicação melhor?". No logos, sim, e é isso que os filósofos faziam uns com os outros. No mito, a explicação vale porque a tradição diz.' },
        { pergunta: 'Tales de Mileto disse que a água é o princípio de todas as coisas. Mesmo estando errado, por que ele é considerado um dos primeiros filósofos?', opcoes: ['Porque explicou o mundo por um princípio natural, que podia ser discutido.', 'Porque descobriu a fórmula química da água.', 'Porque foi o primeiro a escrever os mitos gregos.', 'Porque provou que os deuses gregos não existiam.'], correta: 0,
          explicacao: 'O que conta não é a resposta, e sim o **jeito** de responder: Tales buscou uma **causa natural** (a [[arché]]), sem chamar os deuses, e deixou a explicação aberta para os outros criticarem.',
          outraExplicacao: 'A filosofia não começou com respostas certas, começou com uma nova forma de perguntar. Os filósofos depois de Tales discordaram dele (o ar, o fogo...) e isso só foi possível porque a explicação dele era discutível.' },
      ],
    },
    { // 3. condições e processo gradual
      conceito: 'A passagem do mito ao logos foi **gradual** e teve **condições históricas** (pólis, ágora, comércio, escrita, moeda). Não foi um "milagre grego" isolado, e o mito não era "burrice".',
      variacoes: [
        { pergunta: 'Qual destes fatores ajudou o surgimento da filosofia nas cidades gregas?', opcoes: ['A proibição de qualquer contato com outros povos.', 'O debate público de ideias na ágora da pólis.', 'O fim de todas as religiões na Grécia.', 'A obrigação de decorar os poemas de Homero sem questionar.'], correta: 1,
          explicacao: 'Na [[pólis]], os cidadãos discutiam as leis em público, na [[ágora]]. Esse hábito de **defender ideias com argumentos** favoreceu o pensamento filosófico.',
          outraExplicacao: 'A filosofia é feita de argumentos e discussão. Um lugar onde as pessoas já discutiam em público as decisões da cidade era terreno fértil para ela. As outras opções descrevem o contrário: isolamento e repetição.' },
        { pergunta: 'A expressão "milagre grego" é criticada por muitos estudiosos porque:', opcoes: ['os gregos nunca fizeram filosofia', 'a filosofia surgiu primeiro em Roma', 'ignora as condições históricas e os saberes que os gregos receberam de outros povos', 'os mitos gregos eram mais racionais que a filosofia'], correta: 2,
          explicacao: '"Milagre" sugere algo que surgiu do nada. Mas a filosofia teve **condições** (pólis, comércio, escrita) e aproveitou saberes de **egípcios e babilônios**.',
          outraExplicacao: 'Mileto era um porto cheio de viajantes e comerciantes estrangeiros. Os gregos aprenderam geometria e astronomia com outros povos. Chamar de "milagre" apaga essa história.' },
      ],
    },
    { // 4. atitude filosófica
      conceito: 'A **atitude filosófica**: espanto (estranhar o óbvio), dúvida (reconhecer que não sabe) e crítica (examinar as razões).',
      variacoes: [
        { pergunta: 'Para Platão e Aristóteles, a filosofia começa com:', opcoes: ['o espanto diante das coisas', 'a obediência à tradição', 'o medo dos deuses', 'a leitura dos livros sagrados'], correta: 0,
          explicacao: 'Os dois afirmaram que a filosofia nasce do **espanto** ("thaumázein"): estranhar o que parecia óbvio e sentir que aquilo merece explicação.',
          outraExplicacao: 'Sem estranhar, ninguém pergunta. Quem acha tudo normal não procura explicação. O espanto é a faísca que dá início à busca.' },
        { pergunta: 'A frase popular "só sei que nada sei", ligada a Sócrates, expressa a ideia de que:', opcoes: ['não vale a pena estudar, porque nada pode ser conhecido', 'reconhecer a própria ignorância é o começo da busca pelo saber', 'Sócrates era o homem mais ignorante de Atenas', 'só os deuses podem pensar'], correta: 1,
          explicacao: 'Sócrates percebeu que sua vantagem sobre os outros era **saber que não sabia**. Isso não é desistência: é o ponto de partida para continuar procurando.',
          outraExplicacao: 'Compare duas pessoas: uma acha que já sabe tudo e para de aprender; a outra sabe que não sabe e continua perguntando. Para Sócrates, a segunda está mais perto da sabedoria.' },
      ],
    },
    { // 5. áreas: ética e outras
      conceito: 'Reconhecer a **área** pela pergunta central: ética (como agir?), política (como viver junto?), epistemologia (o que posso conhecer?), metafísica (o que existe?), lógica (o raciocínio é válido?), estética (o que é belo/arte?).',
      variacoes: [
        { pergunta: 'A pergunta "Uma obra feita por inteligência artificial pode ser considerada arte?" pertence principalmente a qual área?', opcoes: ['Lógica', 'Política', 'Estética', 'Epistemologia'], correta: 2,
          explicacao: 'A pergunta é sobre **o que é arte**, e esse é o campo da **estética**.',
          outraExplicacao: 'Palavras-chave como "arte", "belo", "bonito", "gosto" apontam para a estética. A pergunta não é sobre agir, governar, conhecer ou raciocinar.' },
        { pergunta: '"Por que devemos obedecer às leis do Estado?" é uma pergunta típica de qual área?', opcoes: ['Estética', 'Metafísica', 'Lógica', 'Política'], correta: 3,
          explicacao: 'A pergunta é sobre **poder, Estado e convivência**: quem deve mandar e por que obedecer. Esse é o campo da **filosofia política**.',
          outraExplicacao: 'Sempre que aparecem Estado, leis, poder, governo ou justiça na sociedade, pense em política. (Ela conversa com a ética, mas o foco aqui é a autoridade do Estado.)' },
      ],
    },
    { // 6. epistemologia × metafísica (e lógica)
      conceito: 'Separar **epistemologia** (como conhecemos? podemos confiar nos sentidos?) de **metafísica** (o que existe? o que é real?) e de **lógica** (o argumento é válido?).',
      variacoes: [
        { pergunta: '"Existe uma alma separada do corpo?" é uma pergunta típica de qual área?', opcoes: ['Epistemologia', 'Metafísica', 'Lógica', 'Estética'], correta: 1,
          explicacao: 'A pergunta é sobre **o que existe**, sobre a natureza da realidade. Esse é o campo da **metafísica**.',
          outraExplicacao: 'Repare no verbo: "**existe**...?". Perguntas sobre o que existe ou o que é real são metafísica. Se fosse "como posso **saber** se existe uma alma?", estaria mais perto da epistemologia.' },
        { pergunta: '"Todo gato é mamífero. Rex é mamífero. Logo, Rex é gato." Perguntar se esse raciocínio é válido é tarefa de qual área?', opcoes: ['Lógica', 'Ética', 'Metafísica', 'Política'], correta: 0,
          explicacao: 'Avaliar se a conclusão **decorre** das premissas é o trabalho da **lógica**. (E o raciocínio é inválido: Rex pode ser um cachorro, que também é mamífero.)',
          outraExplicacao: 'A pergunta não é se gatos existem nem se é certo ter gatos: é se o **raciocínio** está bem montado. Isso é lógica.' },
      ],
    },
  ],
});

App.dados.adicionarTermos('filosofia', {
  'mito': 'Narrativa tradicional e sagrada que explica a origem do mundo e dos fenômenos pela ação de deuses e heróis. Vale pela autoridade de quem conta.',
  'logos': 'Palavra grega para "palavra, discurso, razão". Na filosofia, a explicação racional, que se justifica com argumentos e pode ser criticada.',
  'cosmogonia': 'Narrativa sobre a origem do mundo (do grego kósmos, "mundo ordenado", e gonía, "nascimento"). A Teogonia de Hesíodo é um exemplo.',
  'pólis': 'A cidade-Estado grega, com governo e leis próprios, em que os cidadãos participavam das decisões.',
  'ágora': 'A praça pública da pólis grega, lugar do comércio e dos debates entre os cidadãos.',
  'senso comum': 'O conjunto de crenças aceitas sem exame, porque "todo mundo sabe" ou "sempre foi assim".',
  'ética': 'Área da filosofia que reflete sobre como devemos agir e sobre os valores morais (o bem, o justo, o dever).',
  'epistemologia': 'Área da filosofia que estuda o conhecimento: o que podemos conhecer, o que é a verdade e como justificar o que sabemos. Também chamada de teoria do conhecimento.',
  'metafísica': 'Área da filosofia que pergunta o que existe e o que é a realidade (o ser, a alma, a liberdade). O nome vem de "o que vem depois da física" nas obras de Aristóteles.',
  'lógica': 'Área da filosofia que estuda as regras do raciocínio correto: quando uma conclusão decorre das premissas.',
  'estética': 'Área da filosofia que estuda o belo, a arte e a experiência sensível (do grego aísthesis, "sensação").',
});
