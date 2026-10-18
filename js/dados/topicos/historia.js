/* =========================================================
   topicos/historia.js — conteúdo de História
   Mesmo formato de js/dados/conteudos.js (veja o cabeçalho de lá),
   mas separado por matéria para cada uma crescer no seu arquivo.
   Aqui ficam, desta matéria:
   - os textos de estudo (App.dados.conteudos)
   - os extras dos testes "Entendeu?" (App.dados.checagensExtras)
   - os termos novos do glossário (App.dados.adicionarTermos)
   ========================================================= */
Object.assign(App.dados.conteudos, {

  /* ======================= HISTÓRIA — ANTIGUIDADE (linha do tempo + pergunta-guia + comparação) ======================= */
  'historia-1-0': {
    metodo: 'freire',
    prerequisitos: [
      { texto: '**Ler datas antes e depois de Cristo** (a.C. e d.C.).', revisao: 'Pense numa régua com o zero no meio. À direita ficam os anos d.C. (depois de Cristo), que crescem como sempre: 1, 2, 3... 2026. À esquerda ficam os anos a.C. (antes de Cristo), que crescem **para trás**: 500 a.C. é **mais antigo** que 100 a.C. Por isso, em a.C., o número maior é o mais velho.' },
      { texto: '**Saber o que é um século**: um período de 100 anos.', revisao: 'O século I vai do ano 1 ao 100; o século II, de 101 a 200; e assim por diante. Truque: corte os dois últimos algarismos e some 1. Ano 476 → 4 + 1 = **século V**. Se o ano termina em 00, não some: ano 1900 → século XIX.' },
    ],
    bncc: [
      { codigo: 'EM13CHS101', texto: 'Identificar, analisar e comparar diferentes fontes e narrativas expressas em diversas linguagens, com vistas à compreensão de ideias filosóficas e de processos e eventos históricos, geográficos, políticos, econômicos, sociais, ambientais e culturais.' },
      { codigo: 'EM13CHS603', texto: 'Analisar a formação de diferentes países, povos e nações e de suas experiências políticas e de exercício da cidadania, aplicando conceitos políticos básicos (Estado, poder, formas, sistemas e regimes de governo, soberania etc.).' },
    ],
    bnccBase: [
      { codigo: 'EF06HI07', texto: 'Identificar aspectos e formas de registro das sociedades antigas na África, no Oriente Médio e nas Américas, distinguindo alguns significados presentes na cultura material e na tradição oral dessas sociedades.' },
      { codigo: 'EF06HI09', texto: 'Discutir o conceito de Antiguidade Clássica, seu alcance e limite na tradição ocidental, assim como os impactos sobre outras sociedades e culturas.' },
      { codigo: 'EF06HI10', texto: 'Explicar a formação da Grécia Antiga, com ênfase na formação da pólis e nas transformações políticas, sociais e culturais.' },
      { codigo: 'EF06HI11', texto: 'Caracterizar o processo de formação da Roma Antiga e suas configurações sociais e políticas nos períodos monárquico e republicano.' },
      { codigo: 'EF06HI12', texto: 'Associar o conceito de cidadania a dinâmicas de inclusão e exclusão na Grécia e Roma antigas.' },
    ],
    blocos: [
      /* ---------- 1. Leitura do mundo ---------- */
      { tipo: 'etapa', etapa: 'leitura', texto: 'Você usa a Antiguidade todo dia' },
      { tipo: 'texto', texto: 'Antes de qualquer data, olhe para coisas bem comuns da sua vida:' },
      { tipo: 'lista', itens: [
        'A hora tem **60** minutos, e o minuto, **60** segundos.',
        'O Brasil tem um **Senado** e é uma **República**.',
        'Na eleição, falamos em **democracia** e em **política**.',
        'Quando alguém é muito duro na punição, dizem: "isso é **olho por olho, dente por dente**".',
      ] },
      { tipo: 'pergunta', id: 'p1', texto: 'De onde você acha que vêm essas ideias? Elas foram inventadas por um povo só ou por povos diferentes? Escreva o seu palpite antes de abrir a resposta.' },
      { tipo: 'revelar', texto: 'Todas vêm da **Antiguidade**, mas de povos diferentes:\n• **60 minutos**: os povos da **Mesopotâmia** contavam em grupos de 60 (base 60). Astrônomos gregos e, muito depois, os relojoeiros herdaram essa conta, e por isso o relógio divide a hora em 60.\n• **"Olho por olho"**: é a ideia central do **Código de Hamurábi**, também da Mesopotâmia, escrito há quase 4 mil anos.\n• **Democracia** e **política**: palavras **gregas**. "Política" vem de **pólis**, a cidade grega.\n• **Senado** e **República**: palavras **romanas**. "República" vem de *res publica*, "a coisa pública".\n\nOu seja: você já carrega pedaços de Egito, Mesopotâmia, Grécia e Roma. Este tópico organiza esses pedaços numa **linha do tempo** e compara os povos entre si.' },

      /* ---------- 2. Problematização ---------- */
      { tipo: 'etapa', etapa: 'problematizacao', texto: 'A democracia de Atenas era para todos?' },
      { tipo: 'texto', texto: 'Os livros chamam Atenas de "berço da democracia". Mas, em Atenas, **mulheres não votavam**, estrangeiros que moravam lá havia gerações não votavam, e uma grande parte da população era de pessoas **escravizadas**. Os que podiam votar eram uma minoria.\n\nIsso não torna a invenção grega menos importante. Mostra uma coisa que serve para toda a História: **a mesma palavra muda de sentido com o tempo**. "Democracia" e "cidadão" em Atenas não significavam o mesmo que hoje.' },
      { tipo: 'texto', texto: 'Por isso, neste tópico, vamos fazer **as mesmas três perguntas** a cada povo antigo. Elas são a nossa ferramenta para comparar:\n**1. Quem manda?**\n**2. Quem trabalha?**\n**3. Quem fica de fora das decisões?**\nAs provas de concurso cobram exatamente isso: formas de governo, grupos sociais e os limites da [[cidadania]].' },
      { tipo: 'pergunta', id: 'p2', texto: 'E hoje, no Brasil: quem pode votar? Sempre foi assim? Você conhece algum grupo que demorou a conquistar esse direito?' },

      /* ---------- 3. Sistematização ---------- */
      { tipo: 'etapa', etapa: 'sistematizacao', texto: 'Uma linha do tempo, três perguntas, cinco sociedades' },

      // ----- Passo 0: ler o tempo
      { tipo: 'titulo', texto: 'Passo 0 — Como ler a linha do tempo' },
      { tipo: 'texto', texto: 'A **Antiguidade** começa com o surgimento da **escrita**, por volta de 3500–3000 a.C., e termina, por convenção, em **476 d.C.**, com a queda do Império Romano do Ocidente. São mais de 3.500 anos. Para não se perder, guarde duas regras:\n• Em **a.C.**, o número maior é o mais antigo: 753 a.C. (fundação de Roma) vem **antes** de 509 a.C. (República romana).\n• Para achar o **século**, corte os dois últimos algarismos e some 1: 476 → século **V**; 509 a.C. → século **VI a.C.**' },
      { tipo: 'tabela', cabecalho: ['Quando', 'Onde', 'O que aconteceu'], linhas: [
        ['c. 3500–3200 a.C.', 'Mesopotâmia', 'Primeiras cidades dos sumérios e escrita **cuneiforme**'],
        ['c. 3100 a.C.', 'Egito', 'Unificação do Alto e do Baixo Egito sob um só faraó'],
        ['c. 2500 a.C.', 'Egito', 'Pirâmides de Gizé'],
        ['c. 1750 a.C.', 'Mesopotâmia', '**Código de Hamurábi**, na Babilônia'],
        ['753 a.C.', 'Roma', 'Fundação (segundo a lenda) e início da **Monarquia**'],
        ['594 a.C.', 'Atenas', 'Reformas de Sólon: fim da escravidão por dívidas'],
        ['509 a.C.', 'Roma', 'Expulsão do último rei: início da **República**'],
        ['508/507 a.C.', 'Atenas', 'Reformas de Clístenes: início da **democracia**'],
        ['490–479 a.C.', 'Grécia', 'Guerras Médicas: gregos contra o Império Persa'],
        ['431–404 a.C.', 'Grécia', 'Guerra do Peloponeso: Atenas contra Esparta (Esparta vence)'],
        ['336–323 a.C.', 'Grécia e Oriente', 'Alexandre, o Grande: início do período **helenístico**'],
        ['264–146 a.C.', 'Roma', 'Guerras Púnicas contra Cartago: Roma domina o Mediterrâneo'],
        ['27 a.C.', 'Roma', 'Otávio recebe o título de Augusto: início do **Império**'],
        ['395 d.C.', 'Roma', 'Morte de Teodósio: o Império é dividido em Ocidente e Oriente'],
        ['**476 d.C.**', 'Roma', '**Queda do Império Romano do Ocidente**: fim da Antiguidade'],
      ] },
      { tipo: 'texto', texto: 'Repare na ordem: **Egito e Mesopotâmia vêm primeiro** e duram milênios. Grécia e Roma (a chamada **Antiguidade Clássica**) vêm depois e, por um tempo, **acontecem ao mesmo tempo**: a República romana e a democracia ateniense começam com poucos anos de diferença.' },
      { tipo: 'checagem', pergunta: 'O Império Romano do Ocidente caiu em 476. Esse ano fica em qual século?', opcoes: ['Século IV', 'Século V', 'Século XLVII', 'Século VI'], correta: 1,
        explicacao: 'Corte os dois últimos algarismos (476 → 4) e some 1: **século V**. O século V vai de 401 a 500.',
        outraExplicacao: 'Pense em 2026: estamos no século XXI, não no XX. O século está sempre "um à frente" do começo do ano. 476 começa com 4, então é o século **V**.' },

      // ----- Passo 1: Egito e Mesopotâmia
      { tipo: 'titulo', texto: 'Passo 1 — Egito e Mesopotâmia: as civilizações dos rios' },
      { tipo: 'texto', texto: 'Comece pela geografia, porque ela explica quase tudo. As duas civilizações nasceram em regiões **secas**, ao lado de **rios** que transbordavam todo ano e deixavam a terra fértil. Para aproveitar a cheia, era preciso cavar canais, construir diques e guardar grãos. Obra desse tamanho precisa de **muita gente organizada** e de alguém que mande. Daí surgem o **Estado**, os impostos, os escribas e a escrita (no começo, para **contar** colheitas e tributos).' },
      { tipo: 'tabela', cabecalho: ['Pergunta', 'Egito', 'Mesopotâmia'], linhas: [
        ['Onde?', 'Nordeste da **África**, às margens do rio **Nilo**', '"Terra entre rios": **Tigre e Eufrates** (atual Iraque)'],
        ['Unidade política', 'Quase sempre **um só reino**, protegido pelos desertos', '**Cidades-Estado** (Ur, Uruk) e impérios que se sucediam: sumérios, acádios, babilônios, assírios'],
        ['Quem manda?', 'O **faraó**, visto como um **deus** vivo: [[teocracia]]', 'Reis vistos como **representantes** dos deuses'],
        ['Quem trabalha?', 'Camponeses (a maioria), que pagavam tributos e eram convocados para obras', 'Camponeses e artesãos, também com tributos e trabalho nas obras'],
        ['Escrita', '[[Hieróglifos|hieróglifo]]', '[[Cuneiforme|cuneiforme]] (marcas em forma de cunha na argila)'],
        ['Legado', 'Pirâmides, mumificação, calendário de 365 dias', 'Código de Hamurábi, contagem em base 60, [[zigurates|zigurate]]'],
      ] },
      { tipo: 'texto', texto: 'O **Código de Hamurábi** (c. 1750 a.C.) é um dos conjuntos de leis escritas mais antigos que conhecemos. Ele segue a [[lei de talião]]: a punição imita o crime ("olho por olho, dente por dente"). Mas a pena **mudava conforme a camada social** da vítima e do culpado: ferir um nobre custava mais caro do que ferir uma pessoa escravizada. A lei escrita não significava igualdade.' },
      { tipo: 'atencao', texto: 'Duas pegadinhas comuns:\n• O **Egito fica na África**. A BNCC pede que você o veja como uma sociedade africana, não como um "pedaço do Oriente" solto no mapa.\n• As pirâmides **não foram erguidas principalmente por escravizados**, como nos filmes. As escavações em Gizé acharam vilas e túmulos de **trabalhadores egípcios**: especialistas fixos e camponeses convocados em turnos.' },
      { tipo: 'texto', texto: 'O Brasil já teve a maior coleção egípcia da América Latina, no **Museu Nacional**, no Rio de Janeiro. O incêndio de 2018 atingiu muito esse acervo, e hoje a UFRJ trabalha para recuperar e reconstruir o que for possível. É um lembrete de que as fontes da Antiguidade (múmias, sarcófagos, tabuinhas) são frágeis e não se repõem.' },
      { tipo: 'checagem', pergunta: 'Qual afirmação compara corretamente Egito e Mesopotâmia?', opcoes: [
        'O Egito era formado por cidades-Estado rivais; a Mesopotâmia, por um só reino unido.',
        'No Egito o faraó era visto como um deus; na Mesopotâmia surgiu o Código de Hamurábi, baseado na lei de talião.',
        'As duas civilizações surgiram em regiões de muita chuva, sem depender de rios.',
        'A escrita cuneiforme surgiu no Egito e os hieróglifos, na Mesopotâmia.',
      ], correta: 1,
        explicacao: 'O **faraó** era tratado como um deus vivo (teocracia), e o **Código de Hamurábi** é mesopotâmico (Babilônia). As outras trocam as características: a Mesopotâmia é que tinha cidades-Estado, as duas dependiam de rios, e o cuneiforme é mesopotâmico.',
        outraExplicacao: 'Associe cada civilização a uma imagem: **Egito** = Nilo + pirâmide + faraó-deus + hieróglifo. **Mesopotâmia** = dois rios + tabuinha de argila + Hamurábi + cuneiforme. Só a alternativa B respeita esses pares.' },

      // ----- Passo 2: Grécia
      { tipo: 'titulo', texto: 'Passo 2 — Grécia: muitas cidades, nenhum país' },
      { tipo: 'texto', texto: 'A Grécia antiga **não era um país**. O relevo montanhoso e o litoral recortado separavam os povoados, e cada um virou uma [[pólis]]: uma cidade-Estado **independente**, com governo, leis, exército e deuses protetores próprios. O que unia os gregos era a **língua**, a **religião** e festas comuns, como os **Jogos Olímpicos** (desde 776 a.C.). Eles se chamavam de **helenos**.\nAs duas pólis mais cobradas em prova são **Atenas** e **Esparta**, e elas são quase opostas.' },
      { tipo: 'titulo', texto: 'Atenas: o caminho até a democracia' },
      { tipo: 'texto', texto: 'Atenas não "nasceu" democrática. No começo, quem mandava eram os grandes donos de terra (os **eupátridas**, "bem-nascidos"). Pequenos camponeses que se endividavam podiam virar escravos do credor. As tensões levaram a reformas, uma depois da outra:' },
      { tipo: 'lista', itens: [
        '**Drácon** (c. 621 a.C.): as leis passam a ser **escritas**. Eram tão duras que "draconiano" virou sinônimo de severo.',
        '**Sólon** (594 a.C.): acaba com a **escravidão por dívidas** e divide os cidadãos pela renda, não mais pelo nascimento.',
        '**Clístenes** (508/507 a.C.): reorganiza a população em 10 tribos misturando regiões, cria o Conselho dos 500 e o [[ostracismo]]. É o marco da **democracia**.',
        '**Péricles** (c. 461–429 a.C.): auge de Atenas. Passa a **pagar** quem exercia funções públicas (assim os pobres também podiam participar) e restringe a cidadania a filhos de pai **e** mãe atenienses.',
      ] },
      { tipo: 'texto', texto: 'Como funcionava: era uma [[democracia direta]]. Os cidadãos iam pessoalmente à **Eclésia** (a Assembleia, ao ar livre) e votavam leis, guerra e paz. Muitos cargos eram preenchidos por **sorteio**, porque os atenienses achavam que eleição favorecia os ricos e famosos.\n\n**Quem era cidadão?** Só o **homem**, **adulto**, **livre** e **filho de atenienses**. Ficavam de fora:\n• as **mulheres**, mesmo as atenienses;\n• os [[metecos|meteco]], estrangeiros que moravam e pagavam impostos em Atenas;\n• as pessoas **escravizadas**, em geral prisioneiros de guerra ou comprados.\nAs estimativas variam, mas os cidadãos eram uma **minoria**, algo entre 10% e 20% dos habitantes.' },
      { tipo: 'indicacao', obra: 'História da Guerra do Peloponeso (Livro II: o discurso fúnebre de Péricles)', autor: 'Tucídides', texto: 'Texto de domínio público, escrito por um ateniense que viveu a guerra. Nesse discurso, Péricles elogia a democracia de Atenas. Leia procurando o que ele diz sobre quem participa e repare no que ele **não** diz: as mulheres aparecem só numa frase curta, pedindo que não se fale delas. É um ótimo treino de ler uma fonte com olhar crítico.' },
      { tipo: 'checagem', pergunta: 'Sobre a democracia ateniense do século V a.C., é correto afirmar:', opcoes: [
        'Era representativa: os cidadãos elegiam deputados para votar em seu nome.',
        'Todos os moradores de Atenas votavam, inclusive mulheres e estrangeiros.',
        'Era direta, mas restrita: só votavam homens adultos, livres e filhos de atenienses.',
        'O poder ficava com dois reis e um conselho de anciãos.',
      ], correta: 2,
        explicacao: 'Na Eclésia, o cidadão votava **pessoalmente** (democracia direta). Mas cidadão era só o homem adulto, livre e filho de atenienses: **mulheres, metecos e escravizados ficavam de fora**. "Dois reis e conselho de anciãos" é Esparta.',
        outraExplicacao: 'Use as três perguntas. **Quem manda?** A Assembleia dos cidadãos, votando sem intermediários → direta. **Quem fica de fora?** Mulheres, estrangeiros e escravizados → restrita. Junte as duas respostas e você chega na C.' },

      { tipo: 'titulo', texto: 'Esparta: a cidade-quartel' },
      { tipo: 'texto', texto: 'Esparta conquistou os vizinhos e transformou a população dominada em [[hilotas|hilota]]: servos que pertenciam ao **Estado**, presos à terra, obrigados a entregar parte da colheita. Os hilotas eram **muito mais numerosos** que os espartanos, e o medo de revoltas explica o resto: Esparta virou uma sociedade **militar**.\n• Os meninos saíam de casa aos 7 anos para a **agogê**, a educação militar do Estado.\n• O governo era uma [[oligarquia]]: **dois reis** (diarquia), a **Gerúsia** (conselho de 28 anciãos com mais de 60 anos, mais os reis), cinco **éforos** que fiscalizavam tudo, e uma assembleia (a **Ápela**) que tinha pouco poder real.' },
      { tipo: 'tabela', cabecalho: ['Pergunta', 'Atenas', 'Esparta'], linhas: [
        ['Quem manda?', 'Assembleia dos cidadãos (**democracia direta**)', 'Poucos: dois reis, Gerúsia e éforos (**oligarquia**)'],
        ['Quem trabalha?', 'Escravizados, metecos (comércio e artesanato) e cidadãos pobres', '**Hilotas** (terra) e **periecos** (livres, comércio e artesanato)'],
        ['Quem fica de fora?', 'Mulheres, metecos e escravizados', 'Todos que não eram **esparciatas** (cidadãos-soldados)'],
        ['Economia', 'Comércio marítimo, artesanato, moeda', 'Agricultura, pouco comércio'],
        ['Mulheres', 'Vida restrita à casa', 'Mais liberdade: faziam exercícios e podiam ter terras'],
        ['Destaque', 'Filosofia, teatro, arquitetura', 'Exército mais temido da Grécia'],
      ] },
      { tipo: 'texto', texto: 'As duas se uniram contra os persas nas **Guerras Médicas** (490–479 a.C.). Depois, rivalizaram na **Guerra do Peloponeso** (431–404 a.C.), vencida por Esparta. Enfraquecidas, as pólis foram dominadas pela **Macedônia**. **Alexandre, o Grande** levou a cultura grega até o Egito e a Índia, misturando-a com a oriental: é o período [[helenístico|helenismo]].' },
      { tipo: 'checagem', pergunta: 'Em Esparta, os hilotas eram:', opcoes: [
        'cidadãos-soldados com direito a votar na assembleia',
        'estrangeiros livres dedicados ao comércio',
        'servos do Estado, presos à terra e obrigados a entregar parte da colheita',
        'os anciãos que formavam o conselho de governo',
      ], correta: 2,
        explicacao: 'Os **hilotas** eram a população dominada pelos espartanos: servos que pertenciam ao Estado e trabalhavam a terra. Cidadãos-soldados eram os **esparciatas**; comerciantes livres eram os **periecos**; os anciãos formavam a **Gerúsia**.',
        outraExplicacao: 'Pergunte "quem trabalha?" em Esparta. Os cidadãos só treinavam para a guerra, então alguém tinha de plantar: os **hilotas**. E como eram muitos e oprimidos, Esparta vivia armada com medo das revoltas deles.' },

      // ----- Passo 3: Roma
      { tipo: 'titulo', texto: 'Passo 3 — Roma: uma cidade, três formas de governo' },
      { tipo: 'texto', texto: 'Roma é ótima para treinar a linha do tempo, porque a história dela se divide em **três fases**, cada uma com um governo diferente. Guarde as datas de corte: **753 a.C.**, **509 a.C.**, **27 a.C.** e **476 d.C.**' },
      { tipo: 'tabela', cabecalho: ['Fase', 'Período', 'Quem manda?', 'Marcas'], linhas: [
        ['**Monarquia**', '753–509 a.C.', 'Um **rei**, aconselhado pelo **Senado**', 'Lenda de Rômulo e Remo; últimos reis etruscos; termina com a expulsão de Tarquínio, o Soberbo'],
        ['**República**', '509–27 a.C.', 'Dois **cônsules** eleitos por 1 ano e o **Senado** (dominado pelos patrícios)', 'Lutas entre patrícios e plebeus; conquista do Mediterrâneo; crise e guerras civis'],
        ['**Império**', '27 a.C.–476 d.C.', 'O **imperador**, com poder quase absoluto; o Senado continua, mas sem força', 'Pax Romana; expansão do cristianismo; crise do século III; divisão em 395; queda em 476'],
      ] },
      { tipo: 'titulo', texto: 'República: patrícios × plebeus' },
      { tipo: 'texto', texto: 'Na República, a sociedade se dividia em:\n• [[patrícios|patrício]]: as famílias aristocráticas, donas das terras; só eles chegavam ao Senado e ao consulado no início;\n• [[plebeus|plebeu]]: homens livres (camponeses, artesãos, comerciantes), sem os mesmos direitos;\n• **clientes**: pessoas ligadas a uma família patrícia, que davam apoio em troca de proteção;\n• **escravizados**: cada vez mais numerosos com as conquistas.\nOs plebeus eram também os **soldados** de Roma. Usando isso como pressão (chegaram a se retirar da cidade), foram arrancando conquistas:' },
      { tipo: 'lista', itens: [
        '**Tribunos da plebe** (494 a.C.): representantes que podiam **vetar** decisões contrárias aos plebeus.',
        '**Lei das Doze Tábuas** (c. 450 a.C.): as leis passam a ser **escritas** e públicas, o que limita a arbitrariedade dos juízes patrícios.',
        '**Lei Canuleia** (445 a.C.): permite o **casamento** entre patrícios e plebeus.',
        'Depois: fim da **escravidão por dívidas** e acesso dos plebeus ao consulado.',
      ] },
      { tipo: 'atencao', texto: '**República não é sinônimo de democracia.** Em Roma, "república" queria dizer que o governo era "coisa pública", e não propriedade de um rei. Mas quem decidia de fato era o Senado aristocrático. Em prova, desconfie de alternativa que diz que a República romana era "democrática" ou "igualitária".' },
      { tipo: 'checagem', pergunta: 'Na República romana, a criação dos tribunos da plebe e a Lei das Doze Tábuas foram:', opcoes: [
        'conquistas dos plebeus nas lutas contra o domínio dos patrícios',
        'medidas do imperador Augusto para controlar o Senado',
        'leis gregas copiadas de Esparta',
        'privilégios criados pelos patrícios para afastar os plebeus do governo',
      ], correta: 0,
        explicacao: 'Os **plebeus** pressionaram os patrícios (eram a base do exército) e conquistaram representantes com poder de veto (**tribunos**) e leis **escritas** (Doze Tábuas), que deixavam as regras à vista de todos.',
        outraExplicacao: 'Pense em quem **ganha** com cada medida. Lei escrita protege quem não faz as leis: se a regra está pública, o juiz patrício não pode inventá-la na hora. E um tribuno com veto defende a plebe. Logo, são conquistas dos **plebeus**, na fase da República (antes de Augusto).' },

      { tipo: 'titulo', texto: 'Da crise da República ao Império' },
      { tipo: 'texto', texto: 'As vitórias nas **Guerras Púnicas** (contra Cartago, 264–146 a.C.) deram a Roma o Mediterrâneo inteiro, que os romanos chamavam de *mare nostrum* ("nosso mar"). Mas trouxeram problemas:\n• chegaram **milhares de escravizados** de guerra, que substituíram o trabalho livre;\n• os pequenos camponeses, longe de casa servindo no exército, perderam as terras para os **latifúndios** e foram para Roma sem emprego;\n• os irmãos **Graco** propuseram uma reforma agrária e foram **mortos** na violência política: Tibério em 133 a.C. e Caio em 121 a.C.\nOs generais, com exércitos fiéis a eles, passaram a disputar o poder. **Júlio César** se tornou ditador e foi assassinado em 44 a.C. Seu herdeiro, **Otávio**, venceu as guerras civis e, em **27 a.C.**, recebeu do Senado o título de **Augusto**. Na aparência a República continuava; na prática, começava o **Império**.' },
      { tipo: 'texto', texto: 'Nos dois primeiros séculos houve a **Pax Romana**, uma longa fase de relativa paz interna e comércio. Para conter a pobreza na capital, os governantes usavam a política do [[pão e circo]]: trigo barato e espetáculos gratuitos, como as lutas de gladiadores no Coliseu.' },
      { tipo: 'titulo', texto: 'A queda do Ocidente: um processo, não um dia' },
      { tipo: 'texto', texto: 'O ano 476 é o **marco**, mas a queda levou mais de dois séculos. Junte as causas em três grupos:\n• **Economia**: sem novas conquistas, faltaram escravizados e riquezas. O comércio diminuiu, as cidades se esvaziaram e muita gente foi para o campo. Os grandes proprietários passaram a usar o [[colonato]]: o colono trabalhava na terra do senhor, preso a ela, em troca de proteção. É uma **semente da servidão medieval**.\n• **Política e exército**: disputas pelo trono (na **crise do século III**, dezenas de imperadores em poucas décadas), gastos enormes com a defesa das fronteiras e exércitos cada vez mais formados por mercenários germânicos.\n• **Pressão externa**: povos germânicos (que os romanos chamavam de "bárbaros", isto é, estrangeiros) entraram no território, empurrados pelos **hunos**.' },
      { tipo: 'texto', texto: 'Enquanto isso, o **cristianismo**, antes perseguido, cresceu: **Constantino** deu liberdade de culto (Édito de Milão, 313) e **Teodósio** o tornou religião oficial (380). Em **395**, com a morte de Teodósio, o Império foi dividido entre os seus dois filhos: **Ocidente** (com capital em Milão e, a partir de 402, Ravena) e **Oriente** (capital **Constantinopla**).\nEm **476**, o chefe germânico **Odoacro** depôs **Rômulo Augusto**, o último imperador do Ocidente. O **Oriente**, depois chamado de Império Bizantino, durou quase mil anos a mais: caiu só em **1453**, quando os turcos otomanos tomaram Constantinopla.' },
      { tipo: 'checagem', pergunta: 'Qual fato está ligado à crise do Império Romano do Ocidente e ajuda a explicar a origem da servidão medieval?', opcoes: [
        'A criação dos tribunos da plebe',
        'O colonato: trabalhadores presos à terra dos grandes proprietários em troca de proteção',
        'A democracia direta na Eclésia',
        'A unificação do Alto e do Baixo Egito',
      ], correta: 1,
        explicacao: 'Com a crise, a economia se **ruralizou** e os grandes proprietários fixaram os colonos na terra. Essa relação de dependência entre quem tem a terra e quem trabalha nela vai dar origem à **servidão** do feudalismo.',
        outraExplicacao: 'Pense na linha do tempo: o que vem **depois** de Roma é a Idade Média, com servos presos à terra. Procure a alternativa que já mostra trabalhadores presos à terra no fim de Roma: é o **colonato**. As outras são de outra época (tribunos, na República) ou de outro povo (Eclésia é Atenas; unificação é Egito).' },

      // ----- Visão geral
      { tipo: 'titulo', texto: 'Agora sim: as cinco sociedades lado a lado' },
      { tipo: 'tabela', cabecalho: ['Sociedade', 'Quem manda?', 'Quem trabalha (base)?', 'Quem fica de fora?'], linhas: [
        ['**Egito**', 'Faraó-deus (teocracia)', 'Camponeses, com tributos e trabalho nas obras', 'Quase todos: o poder é do faraó e dos sacerdotes'],
        ['**Mesopotâmia**', 'Reis ligados aos deuses', 'Camponeses e artesãos', 'Quase todos; a lei mudava conforme a camada social'],
        ['**Atenas**', 'Assembleia dos cidadãos (democracia direta)', 'Escravizados e metecos, além de cidadãos pobres', 'Mulheres, metecos e escravizados'],
        ['**Esparta**', 'Poucos: dois reis, Gerúsia, éforos (oligarquia)', 'Hilotas e periecos', 'Todos que não eram esparciatas'],
        ['**Roma**', 'Rei → Senado e cônsules → imperador', 'Camponeses e, cada vez mais, escravizados; no fim, colonos', 'Mulheres e escravizados; na República, plebeus tinham menos poder'],
      ] },
      { tipo: 'texto', texto: 'Repare que, nas cinco sociedades, **quem trabalha na base quase nunca é quem decide**. Mesmo a "invenção" da cidadania na Grécia e em Roma veio com uma lista de excluídos. Essa leitura, olhando também para quem fica de fora, é o que a BNCC chama de associar a cidadania a "dinâmicas de inclusão e exclusão".' },
      { tipo: 'checagem', pergunta: 'Qual afirmação sobre a cidadania na Antiguidade está correta?', opcoes: [
        'Atenas e Roma deram direitos políticos iguais a todos os seus habitantes.',
        'Em Atenas e em Roma havia cidadãos, mas mulheres e escravizados ficavam fora das decisões políticas.',
        'Esparta era a pólis com mais cidadãos com direito a voto.',
        'No Egito antigo, os camponeses escolhiam o faraó em assembleia.',
      ], correta: 1,
        explicacao: 'Grécia e Roma criaram a ideia de **cidadão** com direitos políticos, mas ela era **restrita**: mulheres e escravizados ficavam de fora nas duas. Esparta era oligárquica, e no Egito o faraó era um rei-deus hereditário.',
        outraExplicacao: 'Faça a pergunta 3 ("quem fica de fora?") para Atenas e para Roma. Nas duas, a resposta inclui **mulheres** e **escravizados**. Qualquer alternativa que fale em "todos" ou "iguais" na Antiguidade costuma ser a errada.' },

      /* ---------- 4. Ação ---------- */
      { tipo: 'etapa', etapa: 'acao', texto: 'Monte a sua linha do tempo' },
      { tipo: 'lista', itens: [
        '**Linha do tempo de bolso:** numa folha ou no caderno do app, desenhe uma linha com o zero no meio e marque só estas datas: 3100 a.C., 1750 a.C., 753 a.C., 509 a.C., 508 a.C., 27 a.C., 395 e 476. Escreva ao lado de cada uma o que aconteceu, sem olhar.',
        '**As três perguntas:** escolha um país de hoje (o Brasil, por exemplo) e responda: quem manda, quem trabalha, quem fica de fora das decisões? Compare com Atenas.',
        '**Treino de prova:** responda, em 5 linhas, a dissertativa "A democracia de Atenas era para todos?". Use as palavras **direta**, **cidadão**, **mulheres**, **metecos** e **escravizados**.',
      ] },
      { tipo: 'pergunta', id: 'p3', texto: 'Escreva aqui a sua resposta para "A democracia de Atenas era para todos?" ou cole a sua linha do tempo.' },

      /* ---------- 5. Reflexão ---------- */
      { tipo: 'etapa', etapa: 'reflexao', texto: 'O que mudou?' },
      { tipo: 'texto', texto: 'Volte ao começo: o relógio de 60 minutos, o Senado, a República, a democracia, o "olho por olho". Agora você sabe de onde cada coisa veio e em que ordem.\n\nE volte também à pergunta da problematização. No Brasil, as mulheres conquistaram o voto em **1932**, e as pessoas analfabetas, só em **1985**. A cidadania foi se ampliando aos poucos, com luta, como aconteceu com os plebeus em Roma. Olhar a Antiguidade com a pergunta "quem fica de fora?" ajuda a enxergar isso também no presente.' },
      { tipo: 'pergunta', id: 'p4', texto: 'Explique com suas palavras a diferença entre a democracia de Atenas e a de hoje. Das três perguntas (quem manda, quem trabalha, quem fica de fora), qual mais ajudou você a organizar o conteúdo?' },
    ],
    resumo: [
      'Antiguidade: do surgimento da escrita (c. 3500–3000 a.C.) até 476 d.C. Em a.C., o número maior é o mais antigo.',
      'Egito (Nilo, África) e Mesopotâmia (Tigre e Eufrates): civilizações dos rios. Faraó-deus (teocracia) × cidades-Estado e impérios; hieróglifo × cuneiforme.',
      'Código de Hamurábi (c. 1750 a.C.): lei de talião ("olho por olho"), com penas diferentes conforme a camada social.',
      'Grécia: pólis independentes. Atenas: Sólon (fim da escravidão por dívidas), Clístenes (democracia, 508/507 a.C.), Péricles (auge).',
      'Democracia ateniense: direta e restrita. Cidadão = homem adulto, livre, filho de atenienses. Fora: mulheres, metecos e escravizados.',
      'Esparta: oligarquia militar (dois reis, Gerúsia, éforos); hilotas eram servos do Estado.',
      'Roma: Monarquia (753–509 a.C.), República (509–27 a.C., Senado e cônsules, lutas de patrícios × plebeus) e Império (27 a.C.–476 d.C.).',
      'Conquistas plebeias: tribunos da plebe, Lei das Doze Tábuas, Lei Canuleia. República romana não era democracia.',
      'Queda do Ocidente (476): Odoacro depõe Rômulo Augusto. Causas: crise econômica, colonato, disputas políticas, invasões germânicas. O Oriente dura até 1453.',
    ],
    fontes: [
      { nome: 'MEC — Base Nacional Comum Curricular (documento oficial)', url: 'https://basenacionalcomum.mec.gov.br/images/BNCC_EI_EF_110518_versaofinal_site.pdf' },
      { nome: 'World History Encyclopedia (em português, conteúdo aberto) — Democracia Ateniense', url: 'https://www.worldhistory.org/trans/pt/1-13310/democracia-ateniense/' },
      { nome: 'World History Encyclopedia (em português, conteúdo aberto) — A Queda do Império Romano do Ocidente', url: 'https://www.worldhistory.org/trans/pt/2-835/a-queda-do-imperio-romano-do-ocidente/' },
      { nome: 'Museu Nacional/UFRJ — Seshat, Laboratório de Egiptologia (coleção egípcia)', url: 'https://seshat.museunacional.ufrj.br/' },
    ],
  },
});

Object.assign(App.dados.checagensExtras, {

  /* ================= Antiguidade ================= */
  'historia-1-0': [
    { // 1. século de 476
      conceito: 'Ler a **linha do tempo**: achar o século (corte os dois últimos algarismos e some 1) e lembrar que, em a.C., o número maior é o mais antigo.',
      variacoes: [
        { pergunta: 'A República romana começou em 509 a.C. Esse ano fica em qual século?', opcoes: ['Século V a.C.', 'Século VI a.C.', 'Século L a.C.', 'Século IX a.C.'], correta: 1,
          explicacao: '509 → corte os dois últimos algarismos (5) e some 1: **século VI a.C.** A regra vale igual para a.C.',
          outraExplicacao: 'O século VI a.C. vai de 600 a 501 a.C. (contando para trás). 509 está dentro desse intervalo, logo é **século VI a.C.**' },
        { pergunta: 'Qual destes acontecimentos é o mais antigo?', opcoes: ['Início da República romana (509 a.C.)', 'Início do Império romano (27 a.C.)', 'Fundação de Roma (753 a.C.)', 'Reformas de Clístenes (508 a.C.)'], correta: 2,
          explicacao: 'Em a.C., **o número maior é o mais antigo**, porque a contagem anda para trás. 753 a.C. é o maior número, então é o mais antigo.',
          outraExplicacao: 'Pense numa contagem regressiva até o ano 1: quem está em 753 ainda tem muito mais anos pela frente até o zero do que quem está em 27. Quem está mais longe do zero veio **antes**.' },
      ],
    },
    { // 2. Egito × Mesopotâmia
      conceito: 'Diferenciar **Egito** (Nilo, faraó-deus, hieróglifos, pirâmides) e **Mesopotâmia** (Tigre e Eufrates, cidades-Estado, cuneiforme, Código de Hamurábi).',
      variacoes: [
        { pergunta: 'A escrita cuneiforme, feita com marcas em forma de cunha em tabuinhas de argila, surgiu:', opcoes: ['no Egito, às margens do Nilo', 'na Mesopotâmia, entre os rios Tigre e Eufrates', 'em Atenas, no século V a.C.', 'em Roma, durante a República'], correta: 1,
          explicacao: 'O **cuneiforme** foi criado pelos sumérios, na **Mesopotâmia**, por volta de 3200 a.C. O Egito usava os **hieróglifos**.',
          outraExplicacao: 'Associe: Mesopotâmia = **argila** (havia muito barro entre os dois rios) → tabuinha → cunha → cuneiforme. Egito = pedra e papiro → hieróglifo.' },
        { pergunta: 'Na sociedade do Egito antigo, o faraó:', opcoes: ['era eleito pelos camponeses a cada ano', 'dividia o poder com uma assembleia de cidadãos', 'era considerado um deus vivo e concentrava o poder político e religioso', 'era um representante enviado pelos reis da Mesopotâmia'], correta: 2,
          explicacao: 'O faraó era visto como um **deus vivo**: o poder político e o religioso estavam juntos nele. Esse tipo de governo se chama **teocracia**.',
          outraExplicacao: 'Faça a pergunta "quem manda?" no Egito: um rei hereditário que também era deus. Não havia eleição nem assembleia; isso só aparece bem depois, na Grécia.' },
      ],
    },
    { // 3. democracia ateniense
      conceito: 'A **democracia ateniense** era **direta** (o cidadão votava pessoalmente) e **restrita** (só homens adultos, livres e filhos de atenienses; mulheres, metecos e escravizados ficavam de fora).',
      variacoes: [
        { pergunta: 'Em Atenas, os metecos eram:', opcoes: ['estrangeiros livres que moravam na cidade, sem direitos políticos', 'cidadãos ricos que governavam o Senado', 'servos do Estado presos à terra', 'sacerdotes que escolhiam o faraó'], correta: 0,
          explicacao: 'Os **metecos** eram estrangeiros livres que viviam em Atenas, trabalhavam e pagavam impostos, mas **não eram cidadãos**: não votavam na Eclésia.',
          outraExplicacao: 'Pense num estrangeiro que mora há anos no Brasil, trabalha e paga imposto, mas não pode votar porque não se naturalizou. Em Atenas, nem a naturalização era comum. Esse era o meteco.' },
        { pergunta: 'Qual reformador ateniense é considerado o marco da democracia, ao reorganizar a população em tribos e criar o ostracismo?', opcoes: ['Drácon', 'Sólon', 'Clístenes', 'Alexandre'], correta: 2,
          explicacao: '**Clístenes** (508/507 a.C.) misturou as regiões em 10 tribos, criou o Conselho dos 500 e o ostracismo. Drácon escreveu as leis, Sólon acabou com a escravidão por dívidas, e Alexandre é macedônio, bem depois.',
          outraExplicacao: 'Monte a escadinha de Atenas: Drácon (leis escritas) → Sólon (fim da escravidão por dívidas) → **Clístenes** (democracia) → Péricles (auge). A democracia começa no terceiro degrau.' },
      ],
    },
    { // 4. Esparta
      conceito: 'Reconhecer **Esparta**: oligarquia militar (dois reis, Gerúsia, éforos), com **esparciatas** (cidadãos-soldados), **periecos** (livres, comércio) e **hilotas** (servos do Estado).',
      variacoes: [
        { pergunta: 'A forma de governo de Esparta era uma:', opcoes: ['democracia direta, com sorteio de cargos', 'oligarquia, com dois reis, um conselho de anciãos e éforos', 'teocracia, chefiada por um faraó', 'república, chefiada por dois cônsules eleitos'], correta: 1,
          explicacao: 'Em Esparta, **poucos** governavam: dois reis, a Gerúsia (anciãos) e os éforos. Governo de poucos = **oligarquia**. Cônsules são de Roma; democracia direta é Atenas.',
          outraExplicacao: '"Oligo" quer dizer "poucos" em grego (como em "oligopólio"). Conte quem decidia em Esparta: 2 reis + 28 anciãos + 5 éforos. Poucos, então oligarquia.' },
        { pergunta: 'Comparando Atenas e Esparta, é correto dizer que:', opcoes: ['Esparta valorizava o comércio marítimo, e Atenas, apenas a guerra', 'as mulheres espartanas tinham mais liberdade que as atenienses, praticando exercícios e podendo ter terras', 'as duas eram democracias diretas iguais', 'Atenas venceu a Guerra do Peloponeso e dominou Esparta'], correta: 1,
          explicacao: 'As espartanas faziam exercícios e podiam ter terras; as atenienses viviam restritas à casa. As outras estão trocadas: Atenas era a comercial, só Atenas era democrática, e **Esparta** venceu a Guerra do Peloponeso.',
          outraExplicacao: 'Lembre o motivo: em Esparta os homens viviam no quartel, e as mulheres cuidavam das terras e eram treinadas para gerar "bons soldados". Isso dava a elas mais espaço que às atenienses.' },
      ],
    },
    { // 5. patrícios × plebeus
      conceito: 'Na **República romana**, os **plebeus** lutaram contra o domínio dos **patrícios** e conquistaram os tribunos da plebe, a Lei das Doze Tábuas (leis escritas) e a Lei Canuleia (casamento misto).',
      variacoes: [
        { pergunta: 'A Lei Canuleia (445 a.C.), na República romana:', opcoes: ['permitiu o casamento entre patrícios e plebeus', 'criou o cargo de imperador', 'dividiu o Império em Ocidente e Oriente', 'tornou o cristianismo religião oficial'], correta: 0,
          explicacao: 'A **Lei Canuleia** permitiu o **casamento** entre patrícios e plebeus, uma das conquistas plebeias. As outras alternativas são do Império, séculos depois.',
          outraExplicacao: 'Veja a data: 445 a.C. está na **República** (509–27 a.C.), época da luta patrícios × plebeus. Imperador, divisão do Império e cristianismo oficial são todos d.C.' },
        { pergunta: 'Durante a República romana, quem detinha de fato o maior poder político era:', opcoes: ['a assembleia de todos os habitantes, inclusive escravizados', 'o Senado, dominado pelas famílias patrícias', 'o faraó, como deus vivo', 'os éforos, que fiscalizavam os reis'], correta: 1,
          explicacao: 'Na República, o **Senado**, formado pela aristocracia **patrícia**, controlava a política, junto com os dois cônsules. Por isso a República romana **não era uma democracia**.',
          outraExplicacao: '"República" é "coisa pública", não "governo do povo". Pergunte "quem manda?" em Roma entre 509 e 27 a.C.: os patrícios, pelo Senado. Faraó é Egito; éforos, Esparta.' },
      ],
    },
    { // 6. crise e queda de Roma
      conceito: 'A **queda do Império Romano do Ocidente** (476) foi um processo: fim das conquistas e falta de escravizados, **ruralização** e **colonato**, disputas políticas e invasões germânicas.',
      variacoes: [
        { pergunta: 'O ano de 476, marco do fim da Antiguidade, corresponde a qual acontecimento?', opcoes: ['A tomada de Constantinopla pelos turcos otomanos', 'A deposição de Rômulo Augusto, último imperador romano do Ocidente, pelo germânico Odoacro', 'O assassinato de Júlio César', 'A divisão do Império após a morte de Teodósio'], correta: 1,
          explicacao: 'Em **476**, Odoacro depôs **Rômulo Augusto**: fim do Império do Ocidente. Constantinopla cai em 1453 (fim do Oriente), César morre em 44 a.C., e a divisão é de 395.',
          outraExplicacao: 'Organize na linha do tempo: 44 a.C. (César) → 395 (divisão) → **476 (queda do Ocidente)** → 1453 (queda do Oriente). Cada data tem um fato só.' },
        { pergunta: 'Entre as causas da crise do Império Romano do Ocidente, está:', opcoes: ['o excesso de escravizados vindos de novas conquistas no século V', 'o fim das grandes conquistas, que reduziu a oferta de escravizados e riquezas', 'a adoção da democracia direta pelo Senado', 'a unificação do Egito com a Mesopotâmia'], correta: 1,
          explicacao: 'Quando as **conquistas pararam**, deixaram de chegar escravizados e riquezas. A economia encolheu, as cidades se esvaziaram e o trabalho passou ao **colonato**.',
          outraExplicacao: 'A economia romana dependia das guerras: conquistar trazia escravizados e tributos. Sem novas conquistas, essa "máquina" parou. Excesso de escravizados foi um problema da **República** (após as Guerras Púnicas), não do fim do Império.' },
      ],
    },
    { // 7. cidadania: inclusão e exclusão
      conceito: 'A **cidadania** na Grécia e em Roma era **restrita**: criou direitos políticos para alguns, mas deixou de fora mulheres, escravizados e (em Atenas) estrangeiros.',
      variacoes: [
        { pergunta: 'Um traço comum a Atenas, Esparta e Roma na Antiguidade é que:', opcoes: ['as mulheres votavam nas assembleias', 'a escravidão ou a servidão sustentava boa parte do trabalho', 'o governo era exercido por um faraó', 'todos os habitantes eram cidadãos'], correta: 1,
          explicacao: 'Nas três, grande parte do trabalho vinha de **escravizados** (Atenas, Roma) ou **servos** (os hilotas em Esparta). E nas três as mulheres ficavam fora da política.',
          outraExplicacao: 'Faça a pergunta 2 ("quem trabalha?") para as três: Atenas → escravizados; Esparta → hilotas; Roma → escravizados e, no fim, colonos. A resposta comum é o trabalho **não livre**.' },
        { pergunta: 'A expressão "democracia restrita", usada para Atenas, quer dizer que:', opcoes: ['o voto era secreto e pela internet', 'só uma parte da população tinha direitos políticos', 'apenas o rei podia votar', 'a democracia durou só um ano'], correta: 1,
          explicacao: '"Restrita" significa **limitada a um grupo**: só os cidadãos (homens adultos, livres, filhos de atenienses) votavam, e eles eram uma minoria dos habitantes.',
          outraExplicacao: 'Restrito = para poucos, como uma "área restrita" de um prédio. Em Atenas, a área das decisões era aberta só aos cidadãos; mulheres, metecos e escravizados não entravam.' },
      ],
    },
  ],
});

App.dados.adicionarTermos('historia', {
  'cidadania': 'O conjunto de direitos (votar, participar das decisões, ser protegido pelas leis) e deveres de quem pertence a uma comunidade política. Na Antiguidade, valia só para uma parte da população.',
  'teocracia': 'Governo em que o poder político é justificado pela religião: o governante é visto como deus ou como escolhido pelos deuses, como o faraó no Egito.',
  'hieróglifo': 'Sinal da escrita do Egito antigo, feito com desenhos que representavam ideias e sons. Era gravado em pedra ou escrito em papiro.',
  'cuneiforme': 'A escrita da Mesopotâmia, criada pelos sumérios: marcas em forma de cunha feitas com um estilete em tabuinhas de argila.',
  'zigurate': 'Templo da Mesopotâmia em forma de pirâmide com degraus, feito de tijolos, com um santuário no alto.',
  'lei de talião': 'Princípio de justiça em que a pena imita o crime: "olho por olho, dente por dente". Aparece no Código de Hamurábi.',
  'pólis': 'Cidade-Estado da Grécia antiga: uma cidade independente, com governo, leis e exército próprios, como Atenas e Esparta. Dela vem a palavra "política".',
  'ostracismo': 'Em Atenas, a votação que exilava por 10 anos um cidadão visto como ameaça à democracia. O nome vem dos cacos de cerâmica (óstraka) onde se escrevia o nome.',
  'meteco': 'Estrangeiro livre que morava em Atenas. Trabalhava e pagava impostos, mas não era cidadão e não votava.',
  'hilota': 'Em Esparta, servo que pertencia ao Estado, preso à terra e obrigado a entregar parte da colheita aos espartanos.',
  'oligarquia': 'Governo de poucos (do grego "oligos", poucos), em geral os mais ricos ou poderosos, como em Esparta.',
  'helenismo': 'A mistura da cultura grega com a do Oriente depois das conquistas de Alexandre, o Grande (século IV a.C.). Também chamado de período helenístico.',
  'patrício': 'Na Roma antiga, membro das famílias aristocráticas, donas das terras, que controlavam o Senado.',
  'plebeu': 'Na Roma antiga, homem livre que não era patrício: camponês, artesão ou comerciante, com menos direitos políticos.',
  'pão e circo': 'Política dos governantes romanos de distribuir trigo barato e oferecer espetáculos gratuitos para conter a insatisfação do povo pobre.',
  'colonato': 'No fim do Império Romano, sistema em que o colono trabalhava na terra de um grande proprietário, preso a ela, em troca de proteção. Deu origem à servidão medieval.',
});
