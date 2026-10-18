/* =========================================================
   topicos/sociologia.js — conteúdo de Sociologia
   Mesmo formato de js/dados/conteudos.js (veja o cabeçalho de lá),
   mas separado por matéria para cada uma crescer no seu arquivo.
   Aqui ficam, desta matéria:
   - os textos de estudo (App.dados.conteudos)
   - os extras dos testes "Entendeu?" (App.dados.checagensExtras)
   - os termos novos do glossário (App.dados.adicionarTermos)
   ========================================================= */
Object.assign(App.dados.conteudos, {

  /* ======================= SOCIOLOGIA — CLÁSSICOS: DURKHEIM, MARX, WEBER (uma cena, três lentes) ======================= */
  'sociologia-1-0': {
    metodo: 'freire',
    prerequisitos: [
      { texto: '**Saber, em linhas gerais, o que foi a Revolução Industrial** (séculos XVIII e XIX).', revisao: 'Antes, quase tudo era feito à mão, em oficinas ou no campo, e a maioria das pessoas vivia em vilas onde todos se conheciam. Com as máquinas a vapor e as fábricas, milhões de pessoas foram para as cidades trabalhar por salário, em jornadas longas, com patrões que não conheciam. Foi uma mudança enorme no jeito de viver, e é dela que a Sociologia nasce.' },
      { texto: '**Saber a diferença entre ser dono do negócio e ser empregado.**', revisao: 'O dono tem a empresa, as máquinas e o capital e fica com o lucro. O empregado não tem nada disso: entra com o próprio trabalho e recebe um salário. Os três autores deste tópico olham para essa relação, cada um de um jeito.' },
    ],
    bncc: [
      { codigo: 'EM13CHS103', texto: 'Elaborar hipóteses, selecionar evidências e compor argumentos relativos a processos políticos, econômicos, sociais, ambientais, culturais e epistemológicos, com base na sistematização de dados e informações de diversas naturezas (expressões artísticas, textos filosóficos e sociológicos, documentos históricos e geográficos, gráficos, mapas, tabelas, tradições orais, entre outros).' },
      { codigo: 'EM13CHS401', texto: 'Identificar e analisar as relações entre sujeitos, grupos, classes sociais e sociedades com culturas distintas diante das transformações técnicas, tecnológicas e informacionais e das novas formas de trabalho ao longo do tempo, em diferentes espaços (urbanos e rurais) e contextos.' },
      { codigo: 'EM13CHS404', texto: 'Identificar e discutir os múltiplos aspectos do trabalho em diferentes circunstâncias e contextos históricos e/ou geográficos e seus efeitos sobre as gerações, em especial, os jovens, levando em consideração, na atualidade, as transformações técnicas, tecnológicas e informacionais.' },
    ],
    bnccBase: [
      { codigo: 'EF08HI03', texto: 'Analisar os impactos da Revolução Industrial na produção e circulação de povos, produtos e culturas.' },
    ],
    blocos: [
      /* ---------- 1. Leitura do mundo ---------- */
      { tipo: 'etapa', etapa: 'leitura', texto: 'Uma segunda-feira do Rafael' },
      { tipo: 'texto', texto: 'Antes de qualquer nome famoso, uma cena comum. Leia com calma:' },
      { tipo: 'exemplo', titulo: 'A cena', texto: 'Rafael tem 26 anos e faz entregas de moto por aplicativo. Acorda às 6h, liga o app e espera. O aplicativo decide quais pedidos aparecem para ele e quanto paga cada um. Se recusar muitos, recebe menos chamadas. Ele não conhece o dono do app, nem o cozinheiro do restaurante, nem quem vai comer.\nNo fim do dia, fez 22 entregas, rodou 140 km e ficou com uma parte pequena do que os clientes pagaram. Ele diz: "Pelo menos eu sou meu próprio chefe."' },
      { tipo: 'pergunta', id: 'p1', texto: 'Por que o Rafael trabalha desse jeito? Tente dar **três explicações diferentes**, sem se preocupar se estão "certas".' },
      { tipo: 'revelar', texto: 'Quando fazem esse exercício, as pessoas costumam dar respostas de três tipos:\n\n• "**É assim que as coisas funcionam hoje.** Tem regra, tem app, todo mundo depende de todo mundo." → olha para as **regras da sociedade**, que estão acima de cada pessoa.\n• "**Porque ele precisa, e alguém lucra com isso.** O dono do app ganha em cima de cada entrega." → olha para o **conflito** entre quem é dono e quem trabalha.\n• "**Porque ele escolheu.** Quer flexibilidade, gosta de não ter patrão por perto." → olha para o **sentido** que a própria pessoa dá ao que faz.\n\nSem saber, você acabou de usar as três lentes da Sociologia clássica: a de **Durkheim**, a de **Marx** e a de **Weber**. Este tópico só vai dar nome e ferramentas para o que você já fez.' },

      /* ---------- 2. Problematização ---------- */
      { tipo: 'etapa', etapa: 'problematizacao', texto: 'Por que essas três lentes nasceram no mesmo século?' },
      { tipo: 'texto', texto: 'No século XIX, a [[Revolução Industrial|revolução industrial]] virou a vida de cabeça para baixo. As pessoas saíram do campo, onde todos se conheciam e seguiam os costumes dos pais, e foram para cidades cheias de fábricas, cortiços e desconhecidos. Surgiram perguntas novas: **o que mantém uma sociedade unida** quando ninguém se conhece? **Por que tanta riqueza** de um lado e tanta miséria do outro? **Por que o mundo moderno** passou a funcionar à base de cálculo, horário e papelada?\n\nA Sociologia nasceu para responder a essas perguntas. Durkheim (francês, 1858–1917), Marx (alemão, 1818–1883) e Weber (alemão, 1864–1920) deram respostas diferentes, e é por isso que são chamados de **clássicos**: quase tudo o que veio depois parte de um deles.' },
      { tipo: 'texto', texto: 'Freire dizia que o primeiro passo para mudar a realidade é **deixar de achar que ela é natural**. "Sempre foi assim" e "cada um tem o que merece" são frases que escondem escolhas feitas por pessoas. A Sociologia ajuda a **desnaturalizar**: a ver que o trabalho do Rafael, o seu salário e as regras do seu emprego foram construídos pela sociedade, e por isso podem ser entendidos e discutidos.\n\nE, para o concurso e o ENEM: Durkheim, Marx e Weber são dos temas mais cobrados em Sociologia. Quase sempre a questão dá uma frase ou situação e pergunta **de qual autor é aquela ideia**.' },
      { tipo: 'pergunta', id: 'p2', texto: 'Pense no seu trabalho (ou num que você já teve, ou no de alguém da família). O que nele parece "natural", mas talvez tenha sido decidido por alguém?' },

      /* ---------- 3. Sistematização ---------- */
      { tipo: 'etapa', etapa: 'sistematizacao', texto: 'A mesma cena, três lentes' },
      { tipo: 'texto', texto: 'Vamos colocar uma lente de cada vez sobre a cena do Rafael. Para cada autor, três ideias. No fim, uma tabela junta tudo.' },

      // ----- Lente 1: Durkheim
      { tipo: 'titulo', texto: 'Lente 1 — Durkheim: a sociedade vem antes de você' },
      { tipo: 'texto', texto: 'Durkheim queria provar que a Sociologia era uma ciência, com um objeto só dela. Esse objeto ele chamou de **[[fato social]]**: maneiras de agir, pensar e sentir que **já existiam antes de você nascer** e que pressionam você a segui-las. A língua que você fala, as leis, a moeda, o horário comercial, o costume de dar "bom dia" no trabalho.\n\nUm fato social tem **três características**:' },
      { tipo: 'tabela', cabecalho: ['Característica', 'O que quer dizer', 'Na cena do Rafael'], linhas: [
        ['**Exterior**', 'existe fora da pessoa, antes dela e depois dela', 'as regras do trânsito e o jeito de pagar por app já existiam quando ele começou'],
        ['**Coercitivo**', 'pressiona; quem não segue sofre alguma sanção (multa, crítica, exclusão)', 'se recusar muitas corridas, o app manda menos pedidos'],
        ['**Geral**', 'vale para o grupo, não só para um indivíduo', 'vale para todos os entregadores, não só para ele'],
      ] },
      { tipo: 'texto', texto: 'Por isso Durkheim dizia que os fatos sociais devem ser estudados **"como coisas"**: de fora, com dados, do jeito que um cientista observa a natureza, sem partir da opinião de cada um.' },
      { tipo: 'checagem', pergunta: 'Para Durkheim, qual destes é um **fato social**?', opcoes: ['A vontade do Rafael de comer pizza hoje', 'Uma dor de cabeça depois de um dia no sol', 'A obrigação de usar a língua portuguesa nos documentos oficiais', 'O gosto pessoal de alguém pela cor azul'], correta: 2,
        explicacao: 'A obrigação de usar o português nos documentos já existia antes de você (**exterior**), quem não cumpre tem o documento recusado (**coercitivo**) e vale para todos (**geral**). As outras são vontades, sensações ou gostos individuais.',
        outraExplicacao: 'Faça o teste das três perguntas: já existia antes de mim? Se eu não seguir, sofro alguma pressão? Vale para todo mundo? Só a regra da língua nos documentos responde "sim" às três.' },

      { tipo: 'titulo', texto: 'O que mantém a sociedade unida? As duas solidariedades' },
      { tipo: 'texto', texto: 'Para Durkheim, toda sociedade precisa de alguma "cola" que une as pessoas. Ele chamou essa cola de **solidariedade** (aqui a palavra não quer dizer "caridade", e sim **ligação**). E percebeu que a cola muda conforme a sociedade:' },
      { tipo: 'tabela', cabecalho: ['', 'Solidariedade mecânica', 'Solidariedade orgânica'], linhas: [
        ['O que é', '[[solidariedade mecânica]]: união pela semelhança', '[[solidariedade orgânica]]: união pela interdependência'],
        ['Onde aparece', 'sociedades pequenas e tradicionais (aldeias, vilas)', 'sociedades modernas, industriais, grandes cidades'],
        ['O que une as pessoas', 'a **semelhança**: todos fazem coisas parecidas e pensam parecido', 'a **diferença**: cada um faz uma parte e todos dependem uns dos outros'],
        ['[[Consciência coletiva|consciência coletiva]]', 'forte: crenças e valores comuns mandam em quase tudo', 'mais fraca: há mais espaço para o indivíduo'],
        ['Divisão do trabalho', 'pequena', 'grande: cada um é especialista em algo'],
        ['Imagem', 'peças iguais de uma máquina', 'órgãos de um corpo: o coração não faz o trabalho do pulmão, mas um não vive sem o outro'],
      ] },
      { tipo: 'exemplo', titulo: 'Na cena do Rafael', texto: 'Rafael não conhece o cozinheiro, o programador do app nem o cliente. Mesmo assim, o jantar só chega à mesa porque **cada um faz a sua parte**. É a solidariedade **orgânica**: a divisão do trabalho cria uma dependência entre desconhecidos.' },
      { tipo: 'atencao', texto: 'Pegadinha de prova: os nomes parecem trocados. "Mecânica" é a das sociedades **tradicionais** (peças iguais), e "orgânica" é a das **modernas** (órgãos diferentes que dependem uns dos outros). Lembre do corpo: órgão = diferença.' },
      { tipo: 'checagem', pergunta: 'Numa cidade grande, você depende do padeiro, do motorista do ônibus e do técnico que mantém a internet funcionando, sem conhecer nenhum deles. Para Durkheim, isso é:', opcoes: ['solidariedade mecânica', 'solidariedade orgânica', 'anomia', 'luta de classes'], correta: 1,
        explicacao: 'A ligação vem da **divisão do trabalho**: cada um faz uma função diferente e todos dependem uns dos outros. É a **solidariedade orgânica**, típica das sociedades modernas.',
        outraExplicacao: 'Pense nos órgãos do corpo: cada um faz uma coisa diferente, e um precisa do outro. Pessoas diferentes que dependem umas das outras = orgânica. Pessoas parecidas que se unem por serem iguais = mecânica.' },

      { tipo: 'titulo', texto: 'Quando a cola falha: anomia' },
      { tipo: 'texto', texto: 'Às vezes a sociedade muda tão depressa que as regras antigas deixam de valer e as novas ainda não se firmaram. As pessoas ficam sem saber o que esperar, o que é justo, até onde podem ir. Durkheim chamou isso de **[[anomia]]** (do grego: "sem norma").\n\nEle viu anomia nas crises econômicas e nas mudanças rápidas da indústria. No livro **O suicídio** (1897), mostrou que até um ato que parece totalmente pessoal varia conforme a sociedade, e que os momentos de anomia aumentam esses casos. Foi uma forma de provar que existem causas **sociais** por trás de atos individuais.' },
      { tipo: 'exemplo', titulo: 'Na cena do Rafael', texto: 'O trabalho por aplicativo é novo. O Rafael é empregado ou autônomo? Quem paga se ele se acidentar? Quanto deveria valer uma entrega? As regras ainda estão sendo discutidas. Essa sensação de "não tem regra clara para isso" é o que Durkheim chamaria de **anomia**.' },
      { tipo: 'checagem', pergunta: 'Para Durkheim, **anomia** é:', opcoes: ['a falta de qualquer governo, como numa anarquia', 'a luta entre patrões e empregados', 'o trabalho repetitivo das fábricas', 'o enfraquecimento das regras sociais, que deixa as pessoas sem referência'], correta: 3,
        explicacao: '**Anomia** é a situação em que as normas sociais ficam fracas ou confusas, geralmente em mudanças rápidas, e as pessoas perdem a referência do que é esperado delas.',
        outraExplicacao: 'Desmonte a palavra: "a" (sem) + "nomos" (norma, regra) = **sem regra**. Não é "sem governo" (isso seria anarquia): é sem as regras sociais que orientam o dia a dia.' },

      // ----- Lente 2: Marx
      { tipo: 'titulo', texto: 'Lente 2 — Marx: siga o dinheiro (e quem é dono do quê)' },
      { tipo: 'texto', texto: 'Marx (que escreveu muitas obras junto com Friedrich Engels) começou por outra pergunta: **como uma sociedade produz aquilo de que precisa para viver, e quem controla isso?** Para ele, a resposta explica quase todo o resto. Esse jeito de estudar a história a partir das condições materiais de produção é o **[[materialismo histórico]]**.' },
      { tipo: 'texto', texto: 'Imagine a sociedade como um prédio:\n• **Base (infraestrutura)**: a economia. Quais são as ferramentas e as técnicas, e quem é dono dos **[[meios de produção]]** (terras, fábricas, máquinas; hoje, também plataformas digitais).\n• **Andares de cima (superestrutura)**: as leis, a política, a religião, a escola, as ideias que parecem "normais".\nPara Marx, a base sustenta e molda os andares de cima. Quando a forma de produzir muda, as leis e as ideias acabam mudando junto.' },
      { tipo: 'texto', texto: 'No capitalismo, a divisão principal é entre duas classes:\n• a **[[burguesia]]**, dona dos meios de produção;\n• o **[[proletariado]]**, que não tem meios de produção e precisa vender a sua força de trabalho em troca de salário.\nOs interesses das duas são opostos (uma quer pagar menos, a outra quer ganhar mais). Esse conflito é a **[[luta de classes]]**. No Manifesto Comunista (1848), Marx e Engels afirmam que a história das sociedades até então tinha sido a história da luta de classes: senhores e escravizados, senhores feudais e servos, burgueses e proletários.' },
      { tipo: 'checagem', pergunta: 'Para Marx, o que mais explica como uma sociedade se organiza?', opcoes: ['As ideias dos grandes pensadores de cada época', 'A religião que a maioria da população segue', 'A forma de produzir e quem controla os meios de produção', 'O clima e o relevo da região'], correta: 2,
        explicacao: 'É o **materialismo histórico**: a base econômica (como se produz e quem é dono dos meios de produção) molda a política, as leis e as ideias. Para Marx, não são as ideias que movem a história em primeiro lugar, e sim as condições materiais.',
        outraExplicacao: 'Lembre do prédio: a economia é a base, e as ideias, as leis e a religião estão nos andares de cima. Se a base muda, o prédio todo se reorganiza. "Materialismo" aqui não é gostar de coisas caras: é partir da vida material, do trabalho e da produção.' },

      { tipo: 'titulo', texto: 'De onde vem o lucro? A mais-valia' },
      { tipo: 'texto', texto: 'Marx fez uma pergunta incômoda: se o patrão paga o salário combinado, de onde sai o lucro? A resposta dele é a **[[mais-valia]]**: o trabalhador produz **mais valor** do que recebe de salário. A diferença fica com o dono dos meios de produção.' },
      { tipo: 'exemplo', titulo: 'Passo a passo: o padeiro', texto: 'Um padeiro trabalha 8 horas. Depois de descontar farinha, luz e o desgaste do forno, os pães que ele fez num dia acrescentaram **R$ 250** de valor.\nO salário dele é **R$ 100** por dia.\nA diferença, **R$ 250 − R$ 100 = R$ 150**, fica com o dono da padaria. Isso é a **mais-valia**.\nEm tempo: em pouco mais de 3 horas o padeiro já produziu o valor do próprio salário. O resto da jornada é, para Marx, **trabalho não pago**.' },
      { tipo: 'texto', texto: 'Há dois jeitos de aumentar a mais-valia:\n• **Mais-valia absoluta**: aumentar a jornada (trabalhar mais horas pelo mesmo salário).\n• **Mais-valia relativa**: aumentar a produtividade (máquinas e métodos que fazem o trabalhador produzir mais no mesmo tempo).\nNa cena do Rafael: ele roda mais horas para fechar o mês (absoluta), e o app usa a tecnologia para encaixar mais entregas por hora (relativa).' },
      { tipo: 'checagem', pergunta: 'Uma costureira produz, num dia, peças que acrescentam R$ 300 de valor (já descontados tecido e máquina). Ela recebe R$ 120 por dia. Para Marx, a mais-valia desse dia é:', opcoes: ['R$ 120', 'R$ 180', 'R$ 300', 'R$ 420'], correta: 1,
        explicacao: 'Mais-valia = valor produzido − salário = 300 − 120 = **R$ 180**. É a parte do valor criado pela costureira que fica com o dono.',
        outraExplicacao: 'Pense em quem fica com cada parte dos R$ 300: R$ 120 vão para ela (salário). O que sobra, R$ 180, vai para o dono. Essa sobra é a mais-valia. R$ 120 é o salário e R$ 300 é o valor total, não a mais-valia.' },

      { tipo: 'titulo', texto: 'Trabalhar e não se reconhecer no trabalho: alienação' },
      { tipo: 'texto', texto: 'Para Marx, o trabalho deveria ser a forma de o ser humano se expressar e transformar o mundo, como um artesão que desenha, faz e assina a sua peça. No capitalismo industrial, isso se perde. Essa perda ele chamou de **[[alienação]]** (de "alheio": que pertence a outro). O trabalhador fica separado:' },
      { tipo: 'lista', itens: [
        '**do produto**: o que ele faz não é dele, é do patrão, e muitas vezes ele nem conseguiria comprar;',
        '**do processo**: não decide como, quando nem em que ritmo trabalha;',
        '**de si mesmo**: o trabalho vira só um meio de sobreviver, não algo em que ele se reconhece;',
        '**dos outros**: os colegas viram concorrentes.',
      ] },
      { tipo: 'exemplo', titulo: 'Na cena do Rafael', texto: 'Ele não escolhe as entregas, não sabe como o app calcula o preço e não vê o resultado do próprio trabalho além de uma notificação de "pedido entregue". Os outros entregadores disputam os mesmos pedidos. Para Marx, isso é **alienação**, mesmo que o Rafael diga que é "o próprio chefe".' },
      { tipo: 'indicacao', obra: 'Tempos Modernos (filme, 1936)', autor: 'Charles Chaplin', texto: 'O operário que aperta parafusos na linha de montagem até continuar repetindo o movimento fora da fábrica. É a imagem mais famosa da **alienação** no cinema. Assista à cena da linha de montagem e pense: o que mudou e o que continua igual no trabalho de hoje?' },
      { tipo: 'atencao', texto: 'Na linguagem do dia a dia, "alienado" quer dizer "desligado, que não sabe das coisas". Em Marx, **alienação** é outra coisa: é o trabalhador ser separado do produto e do controle do próprio trabalho. Na prova, use o sentido de Marx.' },
      { tipo: 'checagem', pergunta: 'Um operário aperta o mesmo parafuso o dia inteiro, não sabe qual é o produto final e não decide nada sobre o próprio trabalho. Marx chamaria isso de:', opcoes: ['alienação', 'solidariedade orgânica', 'ação social afetiva', 'dominação carismática'], correta: 0,
        explicacao: 'O operário está separado do **produto** (não sabe o que é), do **processo** (não decide nada) e de si mesmo (repete um gesto sem sentido para ele). É a **alienação** do trabalho, em Marx.',
        outraExplicacao: 'Pergunte: o trabalho pertence a quem o faz? O operário não controla nem conhece o que produz. O trabalho ficou "alheio" a ele, e é daí que vem a palavra alienação.' },

      // ----- Lente 3: Weber
      { tipo: 'titulo', texto: 'Lente 3 — Weber: entenda o sentido que as pessoas dão ao que fazem' },
      { tipo: 'texto', texto: 'Weber partiu do lado oposto de Durkheim. Em vez de começar pelas regras que pressionam o indivíduo, começou pelo **indivíduo que age e dá um sentido ao que faz**. Por isso a Sociologia dele se chama **compreensiva**: o trabalho do sociólogo é **compreender** os motivos das pessoas.\n\nO ponto de partida é a **[[ação social]]**: uma ação com sentido para quem a faz e **orientada pelo comportamento de outras pessoas**.' },
      { tipo: 'exemplo', titulo: 'O que é e o que não é ação social', texto: '• Duas bicicletas batem sem querer → **não** é ação social (não houve intenção voltada para o outro).\n• Os dois ciclistas discutem ou pedem desculpas depois da batida → **é** ação social.\n• Várias pessoas abrem o guarda-chuva quando começa a chover → **não** é: cada uma reage à chuva, não às outras.\n• Rafael aceita uma corrida pensando no cliente que espera e no valor que vai receber → **é** ação social.' },
      { tipo: 'texto', texto: 'Weber separou a ação social em **quatro tipos**, conforme o motivo principal. Ele sabia que na vida real os motivos se misturam: esses tipos são **[[tipos ideais|tipo ideal]]**, modelos "puros" que servem para comparar com a realidade.' },
      { tipo: 'tabela', cabecalho: ['Tipo de ação', 'O que move a pessoa', 'Na cena do Rafael'], linhas: [
        ['**Racional com relação a fins**', 'um objetivo, escolhendo os meios mais eficientes para chegar a ele', 'calcula quais horários e bairros rendem mais por km rodado'],
        ['**Racional com relação a valores**', 'uma convicção (ética, religiosa, política), mesmo que custe caro', 'recusa entregar algo que considera errado, mesmo perdendo pontos no app'],
        ['**Afetiva**', 'uma emoção do momento', 'desliga o app de raiva depois de uma avaliação injusta'],
        ['**Tradicional**', 'o costume, o "sempre foi assim"', 'para no mesmo lugar para almoçar todo dia, porque é o hábito do grupo'],
      ] },
      { tipo: 'checagem', pergunta: 'Para Weber, qual destas situações é uma **ação social**?', opcoes: ['Duas bicicletas batem sem querer numa curva', 'Várias pessoas abrem o guarda-chuva quando começa a chover', 'Uma pessoa espirra no ônibus', 'Rafael escolhe o caminho mais curto pensando no cliente que espera'], correta: 3,
        explicacao: 'Só na última há uma ação com **sentido** para quem age e **orientada por outra pessoa** (o cliente que espera). A batida é acidente, o guarda-chuva é reação à chuva, e o espirro é reflexo.',
        outraExplicacao: 'Faça duas perguntas: a pessoa teve uma intenção? Essa intenção levou em conta outra pessoa? Rafael escolheu o caminho (intenção) pensando no cliente (outra pessoa). Nas outras, falta uma das duas coisas.' },

      { tipo: 'titulo', texto: 'Por que obedecemos? Os três tipos de dominação' },
      { tipo: 'texto', texto: 'Weber também perguntou: por que as pessoas aceitam obedecer a alguém sem precisar de força o tempo todo? Porque acreditam que aquele mando é **legítimo**. Ele descreveu três tipos puros de **[[dominação]] legítima**:' },
      { tipo: 'tabela', cabecalho: ['Tipo', 'Por que se obedece', 'Exemplos'], linhas: [
        ['**Legal (racional-legal)**', 'porque existe uma **regra impessoal** (lei, estatuto, regulamento) que dá o poder ao cargo, não à pessoa', 'o servidor que obedece ao chefe do setor; o presidente eleito; a [[burocracia]] do Estado'],
        ['**Tradicional**', 'porque **sempre foi assim**: o costume e o passado dão o poder', 'reis por herança, o patriarca de uma família, o chefe de um clã'],
        ['**Carismática**', 'por causa das **qualidades extraordinárias** que os seguidores veem no líder', 'profetas, líderes revolucionários, líderes populares que "arrastam multidões"'],
      ] },
      { tipo: 'texto', texto: 'Para Weber, o mundo moderno é marcado pela dominação **legal** e pela burocracia: regras escritas, cargos, horários, cálculo. Na cena do Rafael, o "chefe" nem é uma pessoa. São as regras do aplicativo e um algoritmo que decide quem recebe cada pedido. É uma forma nova de mando impessoal, que Weber ajuda a enxergar.' },
      { tipo: 'checagem', pergunta: 'Um servidor público obedece ao chefe do setor porque o cargo do chefe está previsto em lei e no regimento do órgão. Para Weber, é dominação:', opcoes: ['carismática', 'tradicional', 'legal (racional-legal)', 'afetiva'], correta: 2,
        explicacao: 'A obediência vem de uma **regra impessoal** (lei, regimento) que dá o poder ao **cargo**. Se o chefe sair, quem ocupar o cargo terá o mesmo poder. É dominação **legal**, típica da burocracia.',
        outraExplicacao: 'Pergunte: o servidor obedece por causa da pessoa ou do cargo? Do cargo, garantido pela lei. Se fosse pela pessoa admirada, seria carismática; se fosse por costume antigo, tradicional. ("Afetiva" é um tipo de ação, não de dominação.)' },

      { tipo: 'titulo', texto: 'A ética protestante e o espírito do capitalismo' },
      { tipo: 'texto', texto: 'No livro **A ética protestante e o espírito do capitalismo** (1904–1905), Weber fez uma pergunta curiosa: por que o capitalismo moderno se desenvolveu com mais força em regiões protestantes da Europa? O caminho que ele encontrou passa pelas **ideias religiosas**:' },
      { tipo: 'lista', itens: [
        'O **calvinismo** ensinava a **predestinação**: Deus já decidiu quem será salvo, e ninguém sabe se está entre os escolhidos.',
        'Isso gerava uma angústia enorme. Uma saída foi ver o **sucesso no trabalho** como um possível **sinal** de ter sido escolhido.',
        'O trabalho virou **vocação**: um dever diante de Deus, feito com disciplina e método.',
        'Ao mesmo tempo, o luxo e o desperdício eram pecado (**ascetismo**). Quem trabalha muito e gasta pouco **acumula**, e o que acumula reinveste.',
        'Resultado: uma **ética** de trabalho metódico, poupança e reinvestimento, que combinava com o **espírito do capitalismo**.',
      ] },
      { tipo: 'atencao', texto: 'Cuidado com a pegadinha: Weber **não** disse que o protestantismo "criou" o capitalismo sozinho. Ele mostrou que **valores religiosos** favoreceram uma mentalidade que ajudou o capitalismo a crescer. É o contrário de olhar só para a economia, como Marx: para Weber, **as ideias também movem a história**.' },
      { tipo: 'texto', texto: 'Ainda hoje se ouve que "trabalhar duro é uma virtude" e que "quem é rico mereceu". O Rafael, ao dizer que é "o próprio chefe", fala uma língua parecida: a do esforço individual como valor. Weber ajuda a perceber que essas ideias têm uma história.' },
      { tipo: 'checagem', pergunta: 'Qual frase resume a tese de Weber em "A ética protestante e o espírito do capitalismo"?', opcoes: ['O protestantismo foi a única causa do capitalismo.', 'Valores do protestantismo, como o trabalho visto como vocação e a vida sem luxo, favoreceram o espírito do capitalismo.', 'O capitalismo inventou o protestantismo para controlar os operários.', 'A religião não tem nenhuma influência sobre a economia.'], correta: 1,
        explicacao: 'Weber mostrou uma **afinidade** entre a ética protestante (trabalho como vocação, disciplina, poupança) e o espírito do capitalismo. Ele não falou em causa única, e defendia justamente que ideias e religião **influenciam** a economia.',
        outraExplicacao: 'Desconfie das palavras extremas: "única causa", "nenhuma influência". Weber dizia que a religião **ajudou** a criar uma mentalidade favorável ao capitalismo, junto com outros fatores. A resposta certa é a que fala em "favorecer".' },

      // ----- Comparação
      { tipo: 'titulo', texto: 'As três lentes lado a lado' },
      { tipo: 'tabela', cabecalho: ['', 'Durkheim', 'Marx', 'Weber'], linhas: [
        ['Pergunta central', 'O que mantém a sociedade unida?', 'Quem controla a produção, e quem fica com a riqueza?', 'Que sentido as pessoas dão ao que fazem?'],
        ['Ponto de partida', 'a **sociedade**, que vem antes do indivíduo', 'as **classes sociais** e o modo de produzir', 'o **indivíduo** que age com um sentido'],
        ['Sociedade é vista como…', 'um corpo que busca equilíbrio (coesão)', 'um campo de **conflito**', 'uma teia de ações e de sentidos'],
        ['Método', 'tratar os fatos sociais "como coisas", de fora', 'materialismo histórico', 'sociologia compreensiva e **tipos ideais**'],
        ['Conceitos-chave', 'fato social, solidariedade mecânica e orgânica, anomia', 'luta de classes, mais-valia, alienação, meios de produção', 'ação social, dominação legítima, ética protestante, burocracia'],
        ['O trabalho é…', 'divisão de funções que cria **dependência** entre as pessoas', 'lugar da **exploração** (mais-valia) e da alienação', 'atividade com **sentido**, que pode virar vocação'],
        ['Na cena do Rafael', 'regras novas e confusas (anomia); dependência de desconhecidos', 'quem é dono do app fica com a mais-valia; ele não controla o próprio trabalho', 'cálculo de ganhos (ação racional); o algoritmo como chefe impessoal'],
      ] },
      { tipo: 'texto', texto: 'Nenhuma lente é a "certa". Cada uma ilumina uma parte da cena e deixa outra no escuro. Um bom sociólogo (e um bom candidato) sabe trocar de lente conforme a pergunta.' },
      { tipo: 'checagem', pergunta: '"Para entender a sociedade, é preciso compreender o sentido que os indivíduos dão às suas ações." Essa ideia combina com:', opcoes: ['Durkheim', 'Marx', 'Weber', 'nenhum dos três'], correta: 2,
        explicacao: 'Partir do **indivíduo** e do **sentido** da ação é a marca de Weber e da sua sociologia **compreensiva**. Durkheim parte da sociedade que pressiona o indivíduo, e Marx parte das classes e da produção.',
        outraExplicacao: 'Procure a palavra-pista: "sentido", "compreender", "ação" → Weber. "Coesão", "coisas", "regras que pressionam" → Durkheim. "Classes", "exploração", "produção" → Marx.' },

      /* ---------- 4. Ação ---------- */
      { tipo: 'etapa', etapa: 'acao', texto: 'Use as lentes na sua vida' },
      { tipo: 'lista', itens: [
        '**O seu trabalho em três frases:** escreva uma frase sobre o seu trabalho (ou estudo) usando cada lente. Uma sobre regras e dependência (Durkheim), uma sobre quem lucra e quem controla (Marx), uma sobre o sentido que você dá a ele (Weber).',
        '**Notícia com três lentes:** escolha uma notícia sobre trabalho (greve, aplicativo, desemprego, mudança na lei trabalhista) e diga o que cada autor destacaria.',
        '**Treino de prova:** sempre que vir uma frase sobre sociedade, procure a palavra-pista (coesão, classes, sentido) e diga de qual autor ela é.',
      ] },
      { tipo: 'pergunta', id: 'p3', texto: 'Escreva aqui as suas três frases sobre o seu trabalho ou estudo, uma para cada lente.' },

      /* ---------- 5. Reflexão ---------- */
      { tipo: 'etapa', etapa: 'reflexao', texto: 'O que mudou?' },
      { tipo: 'texto', texto: 'Volte à sua resposta do começo, sobre por que o Rafael trabalha daquele jeito. Agora dá para dar nome a cada explicação: "é assim que funciona, todos dependem de todos" é **Durkheim**; "alguém lucra com o trabalho dele" é **Marx**; "ele escolheu, tem os motivos dele" é **Weber**. E a frase "sou meu próprio chefe" pode ser lida pelas três: como regra nova ainda sem forma (anomia), como alienação escondida, ou como um valor de esforço individual com longa história.' },
      { tipo: 'pergunta', id: 'p4', texto: 'Qual das três lentes mais combina com o seu jeito de ver o mundo? E qual delas mostrou algo que você não tinha percebido antes?' },
    ],
    resumo: [
      'Durkheim: a sociedade vem antes do indivíduo. Fato social é exterior, coercitivo e geral, e deve ser estudado "como coisa".',
      'Solidariedade mecânica: semelhança, sociedades tradicionais. Orgânica: diferença e interdependência, sociedades modernas (órgãos de um corpo).',
      'Anomia: enfraquecimento das normas sociais, comum em mudanças rápidas ("sem regra").',
      'Marx: materialismo histórico, a economia (base) molda leis e ideias. A história é movida pela luta de classes (burguesia × proletariado).',
      'Mais-valia: valor que o trabalhador produz além do salário e que fica com o dono. Absoluta (mais horas) e relativa (mais produtividade).',
      'Alienação: o trabalhador separado do produto, do processo, de si e dos outros.',
      'Weber: sociologia compreensiva. Ação social tem sentido e se orienta pelos outros. Quatro tipos: racional a fins, racional a valores, afetiva, tradicional.',
      'Dominação legítima: legal (regras e burocracia), tradicional (costume) e carismática (qualidades do líder).',
      'Ética protestante: trabalho como vocação e vida sem luxo favoreceram o espírito do capitalismo; as ideias também movem a história.',
    ],
    fontes: [
      { nome: 'MEC — Base Nacional Comum Curricular (Ciências Humanas e Sociais Aplicadas no Ensino Médio)', url: 'https://basenacionalcomum.mec.gov.br/images/BNCC_EI_EF_110518_versaofinal_site.pdf' },
      { nome: 'Marxists Internet Archive — obras de Marx e Engels em português, incluindo o Manifesto do Partido Comunista (acesso aberto)', url: 'https://www.marxists.org/portugues/marx/index.htm' },
      { nome: 'Gallica (Biblioteca Nacional da França) — Durkheim, "De la division du travail social", edição original de 1893, em francês (domínio público)', url: 'https://gallica.bnf.fr/ark:/12148/bpt6k207547' },
    ],
  },
});

Object.assign(App.dados.checagensExtras, {

  /* ================= Clássicos: Durkheim, Marx, Weber ================= */
  'sociologia-1-0': [
    { // 1. fato social
      conceito: 'Reconhecer o **fato social** de Durkheim: maneiras de agir, pensar e sentir que são **exteriores** ao indivíduo, **coercitivas** (pressionam) e **gerais** (valem para o grupo).',
      variacoes: [
        { pergunta: 'Qual destas características **não** faz parte da definição de fato social de Durkheim?', opcoes: ['Exterioridade', 'Coercitividade', 'Generalidade', 'Originalidade individual'], correta: 3,
          explicacao: 'Fato social é **exterior**, **coercitivo** e **geral**. "Originalidade individual" é justamente o contrário: algo que nasce de uma pessoa só, não da sociedade.',
          outraExplicacao: 'Lembre: o fato social vem da sociedade e pressiona todo mundo. Tudo o que for "individual", "pessoal" ou "único" não é fato social.' },
        { pergunta: 'Durkheim dizia que os fatos sociais devem ser estudados:', opcoes: ['a partir dos sentimentos de cada pessoa', 'como coisas, de fora, com dados e observação', 'só por meio da religião', 'apenas pela economia'], correta: 1,
          explicacao: 'Para Durkheim, o sociólogo deve tratar os fatos sociais **"como coisas"**: observá-los de fora, com método científico, sem partir da opinião pessoal.',
          outraExplicacao: 'Pense num cientista que estuda as pedras: ele não pergunta o que a pedra "sente". Durkheim queria estudar a sociedade com essa distância, olhando dados como taxas, leis e costumes.' },
      ],
    },
    { // 2. solidariedade mecânica × orgânica
      conceito: 'Diferenciar **solidariedade mecânica** (semelhança, sociedades tradicionais) de **solidariedade orgânica** (diferença e interdependência, sociedades modernas).',
      variacoes: [
        { pergunta: 'Numa pequena aldeia, todos plantam, caçam e rezam do mesmo jeito, e os valores comuns orientam quase tudo. Para Durkheim, é um exemplo de:', opcoes: ['solidariedade orgânica', 'anomia', 'solidariedade mecânica', 'mais-valia'], correta: 2,
          explicacao: 'A união vem da **semelhança** entre as pessoas e de uma consciência coletiva forte. É a **solidariedade mecânica**, típica das sociedades tradicionais.',
          outraExplicacao: 'Peças iguais de uma máquina = mecânica. Aqui todos fazem as mesmas coisas e pensam parecido, como peças iguais.' },
        { pergunta: 'Na solidariedade orgânica, o que une as pessoas é:', opcoes: ['a crença religiosa comum a todos', 'a divisão do trabalho, que torna cada um dependente dos outros', 'o medo de castigos físicos', 'o parentesco entre todos os membros'], correta: 1,
          explicacao: 'Na solidariedade **orgânica**, cada um faz uma função diferente (divisão do trabalho), e por isso todos dependem uns dos outros, como os órgãos de um corpo.',
          outraExplicacao: 'Imagine uma cidade: você não planta o seu arroz nem conserta o seu celular. Depende de quem faz isso. Essa dependência entre pessoas diferentes é a cola da sociedade moderna.' },
      ],
    },
    { // 3. anomia
      conceito: 'Entender a **anomia**: o enfraquecimento ou a confusão das normas sociais, que deixa as pessoas sem referência (não é "falta de governo").',
      variacoes: [
        { pergunta: 'Durante uma crise econômica brusca, muitas pessoas perdem o emprego e as regras que organizavam a vida delas deixam de fazer sentido. Durkheim chamaria essa situação de:', opcoes: ['anomia', 'alienação', 'dominação tradicional', 'solidariedade mecânica'], correta: 0,
          explicacao: 'Quando as normas sociais ficam fracas ou confusas por causa de uma mudança rápida, há **anomia**. Durkheim ligou a anomia às crises e às transformações aceleradas.',
          outraExplicacao: '"Sem regra" (a + nomos). As regras que davam rumo à vida das pessoas pararam de funcionar: isso é anomia. Alienação é de Marx e fala do trabalho, não da falta de normas.' },
        { pergunta: 'Em "O suicídio" (1897), Durkheim quis mostrar principalmente que:', opcoes: ['o suicídio é sempre causado por doença individual', 'atos que parecem pessoais também têm causas sociais', 'a religião não influencia o comportamento', 'só as classes ricas são afetadas pela anomia'], correta: 1,
          explicacao: 'Durkheim mostrou que as taxas variam conforme a sociedade e o grau de integração e de regras, ou seja, que até um ato que parece pessoal tem **causas sociais**. A anomia é uma delas.',
          outraExplicacao: 'A ideia central do livro é provar que a Sociologia tem um objeto próprio: se até algo tão íntimo varia conforme a sociedade, então existem forças sociais agindo sobre as pessoas.' },
      ],
    },
    { // 4. materialismo histórico e luta de classes
      conceito: 'Entender o **materialismo histórico** de Marx: a forma de produzir e quem controla os **meios de produção** explicam a organização da sociedade e a **luta de classes**.',
      variacoes: [
        { pergunta: 'Para Marx, a burguesia é a classe que:', opcoes: ['vende a força de trabalho em troca de salário', 'é dona dos meios de produção', 'vive no campo sob o poder de um senhor feudal', 'ocupa os cargos da burocracia do Estado'], correta: 1,
          explicacao: 'A **burguesia** é dona dos meios de produção (fábricas, máquinas, terras, capital). Quem vende a força de trabalho é o **proletariado**.',
          outraExplicacao: 'Pergunte: quem é dono da fábrica? A burguesia. Quem trabalha nela por salário? O proletariado. A luta de classes é o conflito entre esses dois interesses.' },
        { pergunta: 'Segundo o materialismo histórico, as leis, a política e as ideias de uma época:', opcoes: ['surgem livremente, sem relação com a economia', 'são moldadas pela base econômica (a forma de produzir)', 'são sempre iguais em todas as sociedades', 'são decididas apenas pela religião'], correta: 1,
          explicacao: 'Para Marx, a **base** econômica (infraestrutura) molda a **superestrutura**: leis, política, religião e ideias. Por isso, quando muda a forma de produzir, essas coisas também mudam.',
          outraExplicacao: 'Lembre do prédio: a economia é o térreo que sustenta os andares de cima (leis, ideias). Mexeu na base, o prédio se reorganiza.' },
      ],
    },
    { // 5. mais-valia
      conceito: 'Calcular e reconhecer a **mais-valia**: a diferença entre o valor que o trabalhador produz e o salário que recebe, que fica com o dono dos meios de produção.',
      variacoes: [
        { pergunta: 'Um operário produz, por dia, R$ 400 de valor novo e recebe R$ 150 de salário. Qual é a mais-valia?', opcoes: ['R$ 150', 'R$ 400', 'R$ 550', 'R$ 250'], correta: 3,
          explicacao: 'Mais-valia = valor produzido − salário = 400 − 150 = **R$ 250**. É a parte do valor criado pelo operário que fica com o dono.',
          outraExplicacao: 'Divida os R$ 400 entre os dois: R$ 150 vão para o operário. O resto, R$ 250, fica com o patrão. Esse "resto" é a mais-valia.' },
        { pergunta: 'Uma empresa instala máquinas novas e os funcionários passam a produzir o dobro no mesmo horário, com o mesmo salário. Para Marx, isso aumenta a:', opcoes: ['mais-valia absoluta', 'mais-valia relativa', 'solidariedade mecânica', 'dominação carismática'], correta: 1,
          explicacao: 'Aumentar a produção **no mesmo tempo**, com técnica e máquinas, eleva a **mais-valia relativa**. A absoluta aumenta quando se estende a jornada.',
          outraExplicacao: 'Absoluta = mais **horas**. Relativa = mais **produtividade** nas mesmas horas. Aqui o horário não mudou; o que mudou foi a máquina.' },
      ],
    },
    { // 6. alienação
      conceito: 'Reconhecer a **alienação** em Marx: o trabalhador separado do produto, do processo, de si mesmo e dos outros (não é o "alienado" do dia a dia).',
      variacoes: [
        { pergunta: 'Para Marx, um trabalhador está alienado quando:', opcoes: ['não acompanha as notícias e a política', 'não controla nem se reconhece no próprio trabalho, cujo produto pertence a outro', 'vive numa sociedade de solidariedade orgânica', 'obedece a um líder carismático'], correta: 1,
          explicacao: 'Em Marx, **alienação** é a separação entre o trabalhador e o seu trabalho: o produto é de outro, o processo é decidido por outro, e ele não se reconhece no que faz.',
          outraExplicacao: 'Esqueça o sentido do dia a dia ("alienado = desinformado"). Em Marx a palavra vem de "alheio": o trabalho fica alheio a quem o faz.' },
        { pergunta: 'No filme "Tempos Modernos", o operário de Chaplin continua repetindo o movimento de apertar parafusos mesmo fora da fábrica. A cena é usada para ilustrar:', opcoes: ['a alienação do trabalho', 'a dominação tradicional', 'a ação social afetiva', 'a ética protestante'], correta: 0,
          explicacao: 'O gesto repetitivo, sem sentido para quem o faz e controlado pela máquina, ilustra a **alienação**: o trabalhador virou uma peça do processo.',
          outraExplicacao: 'Ele não sabe o que produz nem decide nada, só repete. Quando o trabalho domina a pessoa, e não o contrário, é alienação.' },
      ],
    },
    { // 7. ação social
      conceito: 'Identificar a **ação social** de Weber (ação com sentido, orientada pelos outros) e os seus quatro tipos: racional com relação a fins, racional com relação a valores, afetiva e tradicional.',
      variacoes: [
        { pergunta: 'Uma pessoa compara preços, prazos e juros antes de escolher um financiamento, buscando o melhor resultado. Para Weber, é uma ação:', opcoes: ['tradicional', 'afetiva', 'racional com relação a valores', 'racional com relação a fins'], correta: 3,
          explicacao: 'Ela tem um **objetivo** (o melhor financiamento) e escolhe os **meios** mais eficientes para alcançá-lo. É ação **racional com relação a fins**.',
          outraExplicacao: 'Pista: "calcular", "comparar", "o meio mais eficiente para um objetivo" → racional a fins. Se agisse por convicção, mesmo perdendo, seria racional a valores.' },
        { pergunta: 'Alguém come peru no Natal "porque na minha família sempre foi assim". Para Weber, é uma ação:', opcoes: ['tradicional', 'racional com relação a fins', 'afetiva', 'racional com relação a valores'], correta: 0,
          explicacao: 'O motivo é o **costume** herdado, o "sempre foi assim". É ação **tradicional**.',
          outraExplicacao: 'Pergunte o porquê: não é cálculo, não é emoção do momento, não é uma convicção ética. É hábito passado de geração em geração → tradicional.' },
      ],
    },
    { // 8. dominação
      conceito: 'Diferenciar os três tipos de **dominação legítima** de Weber: **legal** (regras impessoais e cargos), **tradicional** (costume) e **carismática** (qualidades extraordinárias do líder).',
      variacoes: [
        { pergunta: 'Um líder religioso atrai milhares de seguidores, que o obedecem porque acreditam que ele tem dons excepcionais. É dominação:', opcoes: ['legal', 'tradicional', 'carismática', 'burocrática'], correta: 2,
          explicacao: 'A obediência vem da crença nas **qualidades extraordinárias** do líder, não de uma lei nem de um costume. É dominação **carismática**.',
          outraExplicacao: 'Pergunte: se o líder morrer, o poder passa para o cargo? Não: o poder estava na pessoa. Poder que mora na pessoa admirada = carisma.' },
        { pergunta: 'Um rei governa porque herdou o trono do pai, como manda o costume do reino há séculos. É dominação:', opcoes: ['carismática', 'tradicional', 'legal', 'racional com relação a fins'], correta: 1,
          explicacao: 'O poder vem do **passado** e do costume (a herança). É dominação **tradicional**.',
          outraExplicacao: '"Sempre foi assim, o filho do rei vira rei" → tradicional. Se fosse por eleição e regras escritas, seria legal; se fosse pela admiração ao líder, carismática.' },
      ],
    },
    { // 9. ética protestante
      conceito: 'Entender a tese da **ética protestante**: valores do protestantismo ascético (trabalho como vocação, disciplina, vida sem luxo) favoreceram o **espírito do capitalismo**, sem ser a sua causa única.',
      variacoes: [
        { pergunta: 'Na análise de Weber, qual ideia do calvinismo gerou a busca por sinais de salvação no trabalho?', opcoes: ['a confissão dos pecados a um padre', 'a predestinação', 'a venda de indulgências', 'o voto de pobreza dos monges'], correta: 1,
          explicacao: 'Pela **predestinação**, Deus já escolheu quem será salvo, e ninguém sabe se está entre os eleitos. O sucesso no trabalho passou a ser visto como possível sinal de ter sido escolhido.',
          outraExplicacao: 'A angústia de "será que fui escolhido?" levou a buscar sinais. O trabalho disciplinado e bem-sucedido virou esse sinal. A ideia que gera a angústia é a predestinação.' },
        { pergunta: 'Para Weber, por que a ética protestante favoreceu a acumulação de capital?', opcoes: ['Porque mandava gastar tudo em festas religiosas', 'Porque proibia qualquer forma de comércio', 'Porque unia trabalho intenso como dever e condenação do luxo, levando a poupar e reinvestir', 'Porque obrigava todos a trabalhar nas fábricas do Estado'], correta: 2,
          explicacao: 'Trabalhar muito (vocação) e gastar pouco (**ascetismo**, rejeição do luxo) gera **acumulação**. O que sobra é reinvestido, e isso combina com o espírito do capitalismo.',
          outraExplicacao: 'Faça a conta: entra muito (trabalho como dever) e sai pouco (sem luxo). O resultado é sobra, que vira investimento. É esse comportamento que Weber liga ao capitalismo.' },
      ],
    },
    { // 10. comparação entre os três
      conceito: 'Identificar **de qual autor é uma ideia**: Durkheim (coesão, fato social, sociedade antes do indivíduo), Marx (classes, produção, exploração) ou Weber (sentido da ação, compreensão, dominação).',
      variacoes: [
        { pergunta: '"A história de todas as sociedades até hoje é a história da luta de classes." A frase é de:', opcoes: ['Durkheim', 'Marx (e Engels)', 'Weber', 'nenhum dos três'], correta: 1,
          explicacao: 'A frase está no **Manifesto do Partido Comunista** (1848), de **Marx e Engels**. "Luta de classes" é a palavra-pista.',
          outraExplicacao: 'Classes em conflito como motor da história → Marx. Durkheim falaria em coesão e solidariedade; Weber, em sentido da ação.' },
        { pergunta: 'Qual autor começa pela **sociedade**, que existe antes do indivíduo e o pressiona por meio de regras e costumes?', opcoes: ['Weber', 'Marx', 'Durkheim', 'os três igualmente'], correta: 2,
          explicacao: 'Essa é a lente de **Durkheim**: o fato social é exterior e coercitivo, ou seja, a sociedade vem antes e molda o indivíduo.',
          outraExplicacao: 'Weber faz o caminho contrário (começa pelo indivíduo e pelo sentido da ação). Marx começa pelas classes e pela produção. Sociedade que pressiona o indivíduo → Durkheim.' },
      ],
    },
  ],
});

App.dados.adicionarTermos('sociologia', {
  'revolução industrial': 'A troca do trabalho artesanal por máquinas e fábricas, a partir da Inglaterra no século XVIII. Levou multidões do campo para as cidades e para o trabalho assalariado, e foi o cenário em que a Sociologia nasceu.',
  'consciência coletiva': 'Para Durkheim, o conjunto de crenças e sentimentos comuns aos membros de uma sociedade, que existe acima de cada pessoa.',
  'solidariedade mecânica': 'Para Durkheim, a união baseada na semelhança entre as pessoas, típica de sociedades pequenas e tradicionais, com consciência coletiva forte.',
  'solidariedade orgânica': 'Para Durkheim, a união baseada na diferença e na interdependência criada pela divisão do trabalho, típica das sociedades modernas (como os órgãos de um corpo).',
  'anomia': 'Para Durkheim, a situação em que as normas sociais ficam fracas ou confusas, deixando as pessoas sem referência. Comum em crises e mudanças rápidas. Não é o mesmo que anarquia.',
  'materialismo histórico': 'O método de Marx e Engels: explicar a história e a sociedade a partir das condições materiais, isto é, de como se produz e de quem controla os meios de produção.',
  'burguesia': 'Para Marx, a classe dona dos meios de produção (fábricas, máquinas, terras, capital) no capitalismo.',
  'proletariado': 'Para Marx, a classe que não tem meios de produção e precisa vender a sua força de trabalho em troca de salário.',
  'mais-valia': 'Para Marx, a diferença entre o valor que o trabalhador produz e o salário que recebe. Essa diferença fica com o dono dos meios de produção e é a origem do lucro.',
  'alienação': 'Para Marx, a separação entre o trabalhador e o seu trabalho: o produto pertence a outro, o processo é decidido por outro, e ele não se reconhece no que faz.',
  'tipo ideal': 'Para Weber, um modelo "puro", construído pelo pesquisador, que serve para comparar com a realidade (onde as coisas aparecem misturadas).',
  'dominação': 'Para Weber, a probabilidade de uma ordem ser obedecida. É legítima quando quem obedece acredita que o mando é válido: legal, tradicional ou carismática.',
  'burocracia': 'Para Weber, a forma de organização baseada em regras escritas, cargos com funções definidas, hierarquia e impessoalidade. É típica da dominação legal.',
  'ética protestante': 'Para Weber, o conjunto de valores do protestantismo ascético (trabalho como vocação, disciplina, poupança, rejeição do luxo) que favoreceu o espírito do capitalismo.',
  'predestinação': 'Doutrina calvinista segundo a qual Deus já decidiu quem será salvo. Para Weber, a busca por sinais dessa escolha estimulou o trabalho metódico.',
});
