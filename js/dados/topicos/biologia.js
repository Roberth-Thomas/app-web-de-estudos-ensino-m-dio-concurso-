/* =========================================================
   topicos/biologia.js — conteúdo de Biologia
   Mesmo formato de js/dados/conteudos.js (veja o cabeçalho de lá),
   mas separado por matéria para cada uma crescer no seu arquivo.
   Aqui ficam, desta matéria:
   - os textos de estudo (App.dados.conteudos)
   - os extras dos testes "Entendeu?" (App.dados.checagensExtras)
   - os termos novos do glossário (App.dados.adicionarTermos)
   ========================================================= */
Object.assign(App.dados.conteudos, {

  /* ======================= BIOLOGIA — CÉLULAS (das necessidades da vida às estruturas + a viagem de uma proteína) ======================= */
  'biologia-1-0': {
    metodo: 'freire',
    prerequisitos: [
      { texto: '**Saber que os seres vivos são feitos de moléculas**: água, açúcar (glicose), gordura (lipídios) e proteínas.', revisao: 'Pense na tabela nutricional de um alimento: carboidratos (açúcares), gorduras e proteínas. Essas mesmas moléculas formam o seu corpo. A **glicose** é o açúcar que vira energia; os **lipídios** são as gorduras (formam, entre outras coisas, as "paredes" das células); as **proteínas** são as "peças de trabalho": enzimas, músculos, hormônios como a insulina.' },
      { texto: '**Ter noção de tamanhos pequenos**: milímetro (mm) e micrômetro (µm).', revisao: 'Um milímetro é um tracinho da régua. Divida esse tracinho em **mil** partes: cada uma é um **micrômetro** (µm). Uma bactéria tem uns poucos micrômetros; uma célula do seu corpo, em geral, de 10 a 100 µm. Por isso quase nenhuma célula é visível a olho nu: é preciso microscópio.' },
    ],
    bncc: [
      { codigo: 'EM13CNT202', texto: 'Analisar as diversas formas de manifestação da vida em seus diferentes níveis de organização, bem como as condições ambientais favoráveis e os fatores limitantes a elas, com ou sem o uso de dispositivos e aplicativos digitais (como softwares de simulação e de realidade virtual, entre outros).' },
      { codigo: 'EM13CNT301', texto: 'Construir questões, elaborar hipóteses, previsões e estimativas, empregar instrumentos de medição e representar e interpretar modelos explicativos, dados e/ou resultados experimentais para construir, avaliar e justificar conclusões no enfrentamento de situações-problema sob uma perspectiva científica.' },
    ],
    bnccBase: [
      { codigo: 'EF06CI05', texto: 'Explicar a organização básica das células e seu papel como unidade estrutural e funcional dos seres vivos.' },
      { codigo: 'EF06CI06', texto: 'Concluir, com base na análise de ilustrações e/ou modelos (físicos ou digitais), que os organismos são um complexo arranjo de sistemas com diferentes níveis de organização.' },
    ],
    blocos: [
      /* ---------- 1. Leitura do mundo ---------- */
      { tipo: 'etapa', etapa: 'leitura', texto: 'Você começou como uma célula só' },
      { tipo: 'texto', texto: 'Você já foi **uma única célula**: o óvulo fecundado. Hoje o seu corpo tem algo em torno de **30 trilhões** delas. E você convive com células o tempo todo, mesmo sem ver: o fermento do pão é feito de **leveduras** (fungos de uma célula só, vivos), o iogurte tem **bactérias** vivas, e a alface da salada é um monte de células vegetais.' },
      { tipo: 'texto', texto: 'Antes de decorar qualquer nome, faça um exercício de imaginação.' },
      { tipo: 'exemplo', titulo: 'Imagine', texto: 'Um ser vivo minúsculo, feito de **uma célula só**, solto numa gota d\'água. Ninguém vai ajudá-lo. Ele precisa se virar sozinho para continuar vivo e, um dia, se dividir em dois.' },
      { tipo: 'pergunta', id: 'p1', texto: 'Do que esse ser precisa para continuar vivo? Liste o máximo de "necessidades" que conseguir (pense no que você mesmo precisa para viver).' },
      { tipo: 'revelar', texto: 'Quase todo mundo chega numa lista parecida com esta:\n• **separar o "dentro" do "fora"** e escolher o que entra e o que sai;\n• **guardar as instruções** de como ele é e de como funciona;\n• **fabricar as próprias peças** (principalmente proteínas);\n• **conseguir energia** a partir do alimento;\n• **digerir** o que comeu e **reciclar** o que está velho;\n• **transportar e despachar** o que fabricou.\n\nPois é: cada necessidade dessas tem uma **estrutura responsável** dentro da célula. Você acabou de inventar, do zero, a lista do que uma célula precisa ter. O resto do tópico é só **dar nome aos responsáveis**.' },

      /* ---------- 2. Problematização ---------- */
      { tipo: 'etapa', etapa: 'problematizacao', texto: 'Por que o antibiótico mata a bactéria e não mata você?' },
      { tipo: 'texto', texto: 'Quando você toma um antibiótico para uma infecção bacteriana, ele circula pelo corpo inteiro, encostando em trilhões das suas células. Mesmo assim, ataca as bactérias e (quase sempre) deixa você em paz. Como ele "sabe" a diferença?' },
      { tipo: 'texto', texto: 'A resposta está na **estrutura da célula**. A bactéria tem peças que as suas células não têm, ou que são diferentes das suas. A penicilina, por exemplo, atrapalha a construção da **parede** da bactéria, uma estrutura que a célula humana não possui. Outros antibióticos travam a "fábrica de proteínas" da bactéria, que é um pouco diferente da nossa.\n\nOu seja: saber como a célula é por dentro não é decoreba de livro. É a base da medicina, dos alimentos, da agricultura, e cai sempre em prova (ENEM e concursos com Biologia adoram "qual organela faz o quê").' },
      { tipo: 'pergunta', id: 'p2', texto: 'Muita gente toma antibiótico quando está gripada. Pelo que você sabe hoje, isso funciona? Por quê? Escreva o seu palpite: vamos voltar a ele no fim.' },

      /* ---------- 3. Sistematização ---------- */
      { tipo: 'etapa', etapa: 'sistematizacao', texto: 'De cada necessidade ao seu responsável' },

      // ----- O que é célula
      { tipo: 'titulo', texto: 'Primeiro: o que é uma célula' },
      { tipo: 'texto', texto: 'Em 1665, o inglês Robert Hooke olhou uma fatia fina de cortiça num microscópio simples e viu um monte de "caixinhas" vazias. Chamou-as de **células** (do latim "cella", "quartinho"). Eram, na verdade, as paredes de células mortas. Quase dois séculos depois, cientistas juntaram as observações na [[teoria celular]], que tem três ideias:' },
      { tipo: 'lista', itens: [
        '**Todo ser vivo é formado por células** (uma só, como a bactéria, ou trilhões, como você).',
        '**A célula é a menor unidade da vida**: a menor coisa que, sozinha, já está viva.',
        '**Toda célula vem de outra célula**, que se dividiu.',
      ] },
      { tipo: 'atencao', texto: '**Vírus não é célula.** Ele é só material genético dentro de uma capa de proteína, e não consegue fazer nada sozinho: precisa invadir uma célula e usar as "máquinas" dela para se multiplicar. Por isso se diz que o vírus é **acelular**.' },

      // ----- O kit básico
      { tipo: 'titulo', texto: 'O "kit básico": o que toda célula tem' },
      { tipo: 'texto', texto: 'Volte à sua lista de necessidades. Três delas são tão essenciais que **toda célula do planeta**, da bactéria ao neurônio, resolve do mesmo jeito:' },
      { tipo: 'tabela', cabecalho: ['Necessidade', 'Responsável', 'Em uma frase'], linhas: [
        ['Separar dentro e fora', '[[membrana plasmática]]', 'a "pele" da célula, que escolhe o que entra e sai'],
        ['Ter onde as coisas acontecerem', '[[citoplasma]]', 'tudo o que fica dentro da membrana: um líquido gelatinoso e o que está nele'],
        ['Guardar as instruções', '[[DNA|dna]]', 'a molécula com a "receita" de tudo o que a célula fabrica'],
        ['Fabricar proteínas', '[[ribossomos|ribossomo]]', 'as pequenas "máquinas" que montam as proteínas'],
      ] },
      { tipo: 'texto', texto: 'A diferença entre os tipos de célula está no **resto**: se o DNA fica guardado num compartimento fechado e se existem "salas" separadas para cada tarefa.' },

      // ----- Procariótica x eucariótica
      { tipo: 'titulo', texto: 'Dois projetos de célula: procariótica e eucariótica' },
      { tipo: 'texto', texto: 'Pense em duas formas de montar um local de trabalho. Uma é um **galpão aberto**: tudo no mesmo espaço, sem paredes internas. A outra é um **prédio com salas**: cada setor tem a sua sala, e o arquivo com os documentos mais importantes fica trancado numa sala própria.' },
      { tipo: 'tabela', cabecalho: ['', 'Procariótica (o "galpão")', 'Eucariótica (o "prédio com salas")'], linhas: [
        ['Núcleo', '**não tem**: o DNA fica solto no citoplasma, numa região chamada [[nucleoide]]', '**tem**: o DNA fica dentro do [[núcleo]], fechado pela [[carioteca]]'],
        ['Organelas com membrana', 'não tem', 'tem (mitocôndria, retículo, complexo golgiense...)'],
        ['Ribossomos', 'tem (menores)', 'tem'],
        ['Tamanho', 'pequena (poucos µm)', 'em geral bem maior (10 a 100 µm)'],
        ['Quem é', 'bactérias e arqueas', 'protozoários, algas, fungos, plantas e animais'],
      ] },
      { tipo: 'texto', texto: 'Os nomes ajudam: em grego, "pro" = antes, "eu" = verdadeiro e "karyon" = núcleo. [[Procariótica|procariontes]] = "antes do núcleo"; [[eucariótica|eucariontes]] = "núcleo verdadeiro". **O critério que decide é o núcleo**: tem núcleo envolvido por membrana, é eucariótica.' },
      { tipo: 'checagem', pergunta: 'Ao microscópio, uma célula mostra DNA espalhado no citoplasma, sem nenhuma membrana em volta, e ribossomos. Ela é:', opcoes: ['eucariótica, porque tem ribossomos', 'procariótica, porque não tem núcleo delimitado por membrana', 'eucariótica, porque tem DNA', 'um vírus, porque não tem núcleo'], correta: 1,
        explicacao: 'O que separa os dois tipos é o **núcleo envolvido por membrana (carioteca)**. Sem ele, com o DNA solto no citoplasma, a célula é **procariótica**, como uma bactéria. Ribossomos e DNA não decidem nada: **todas** as células têm.',
        outraExplicacao: 'Use a imagem do galpão e do prédio. O DNA está numa "sala trancada" (núcleo com membrana)? Não, está solto no espaço aberto. Então é o galpão: **procariótica**. E não pode ser vírus, porque vírus não tem ribossomo nem citoplasma.' },

      // ----- Membrana e citoplasma
      { tipo: 'titulo', texto: 'Membrana plasmática: a portaria da célula' },
      { tipo: 'texto', texto: 'A membrana é uma película finíssima feita de **duas camadas de lipídios** (gordura), com **proteínas** espalhadas e encaixadas nela. As proteínas funcionam como portas, canais e "porteiros" que reconhecem quem chega. Como os lipídios e proteínas se movem o tempo todo, como peças de um mosaico flutuando, esse modelo é chamado de **mosaico fluido**.' },
      { tipo: 'texto', texto: 'A característica mais importante: a membrana tem [[permeabilidade seletiva]]. Ela **não é um muro** (senão a célula morreria de fome) e **não é uma peneira** (senão tudo vazaria). Ela **escolhe**: deixa entrar água, oxigênio e nutrientes, deixa sair gás carbônico e restos, e barra o que não deve passar.' },
      { tipo: 'checagem', pergunta: 'Dizer que a membrana plasmática tem "permeabilidade seletiva" significa que ela:', opcoes: ['impede a entrada de qualquer substância', 'deixa passar qualquer substância livremente', 'controla quais substâncias entram e saem da célula', 'só existe nas células vegetais'], correta: 2,
        explicacao: '"Permeável" = deixa passar; "seletiva" = escolhe. A membrana **controla** o que entra e o que sai. Ela existe em **todas** as células, de bactérias a plantas e animais.',
        outraExplicacao: 'Pense na portaria de um prédio: não tranca todo mundo para fora, nem deixa qualquer um entrar. Ela confere e escolhe. A membrana faz o mesmo com as substâncias.' },
      { tipo: 'texto', texto: 'Dentro da membrana fica o **citoplasma**. Ele tem três partes: o [[citosol]] (o líquido gelatinoso, cheio de água, sais e moléculas), as **organelas** (as "salas", nas células eucarióticas) e o [[citoesqueleto]], uma rede de fibras de proteína que dá forma à célula e serve de "trilho" para as coisas se moverem lá dentro.' },

      // ----- Núcleo
      { tipo: 'titulo', texto: 'O núcleo: o arquivo trancado' },
      { tipo: 'texto', texto: 'Nas células eucarióticas, o DNA fica guardado no **núcleo**. Ele tem três partes que caem em prova:' },
      { tipo: 'tabela', cabecalho: ['Parte', 'O que é', 'Para que serve'], linhas: [
        ['**Carioteca**', 'envoltório de **duas membranas**, cheio de poros', 'protege o DNA e controla, pelos poros, o que entra e sai do núcleo'],
        ['**Cromatina**', 'o DNA enrolado em proteínas', 'guarda as instruções; quando a célula vai se dividir, enrola-se mais e forma os **cromossomos**'],
        ['**Nucléolo**', 'região mais densa dentro do núcleo', 'produz as peças dos **ribossomos**'],
      ] },
      { tipo: 'texto', texto: 'O núcleo é o **centro de comando**: o DNA traz a receita de cada proteína, e são as proteínas que fazem quase todo o trabalho da célula. Quem manda na receita manda na célula.' },
      { tipo: 'checagem', pergunta: 'Qual é a principal função do núcleo da célula eucariótica?', opcoes: ['produzir energia a partir da glicose', 'guardar o DNA e, com isso, comandar as atividades da célula', 'digerir partículas que entram na célula', 'fazer a fotossíntese'], correta: 1,
        explicacao: 'O núcleo guarda o **material genético (DNA)**, que traz as instruções para fabricar as proteínas. Por isso ele comanda a célula. Energia é com a mitocôndria, digestão com o lisossomo e fotossíntese com o cloroplasto.',
        outraExplicacao: 'Volte à lista de necessidades do começo: "guardar as instruções". Nas células eucarióticas, o lugar onde as instruções (DNA) ficam guardadas é o núcleo. Como as instruções definem tudo o que a célula faz, ele é o centro de comando.' },

      // ----- A viagem de uma proteína
      { tipo: 'titulo', texto: 'As organelas, seguindo a viagem de uma proteína' },
      { tipo: 'texto', texto: 'Em vez de decorar uma lista solta, vamos acompanhar **um produto** sendo fabricado e entregue. O exemplo: a **insulina**, uma proteína feita por células do pâncreas e despachada para o sangue. No caminho, você vai encontrar quatro organelas, cada uma numa etapa.' },
      { tipo: 'exemplo', titulo: 'A viagem da insulina, passo a passo', texto: '**1. Núcleo:** o trecho do DNA com a receita da insulina é copiado numa molécula mensageira, o [[RNA|rna]]. A cópia sai pelos poros da carioteca; o original nunca sai.\n**2. Ribossomo:** lê a cópia e monta a proteína, encaixando as peças (aminoácidos) na ordem certa.\n**3. Retículo endoplasmático rugoso:** como esses ribossomos estão grudados nele, a proteína recém-feita já cai dentro dos seus canais e é levada adiante.\n**4. Complexo golgiense:** recebe a proteína, dá os acabamentos, **embala** numa bolsinha de membrana ([[vesícula]]) e "endereça".\n**5. Membrana:** a vesícula se funde com a membrana e solta a insulina para fora da célula (é a **secreção**).' },
      { tipo: 'texto', texto: 'Se você gosta de hardware, a comparação é quase literal: o DNA é o **arquivo do projeto**, guardado num servidor que nunca sai da sala; o RNA é a **cópia** enviada para produção; o ribossomo é a **impressora 3D**, que lê a cópia e monta a peça camada por camada.' },
      { tipo: 'texto', texto: 'Agora, cada organela dessa viagem com mais detalhe:' },
      { tipo: 'lista', itens: [
        '**[[Ribossomo|ribossomo]]:** é a fábrica de proteínas. Não tem membrana (é feito de RNA e proteína), por isso existe até nas bactérias. Pode ficar solto no citosol (faz proteínas que ficam na própria célula) ou grudado no retículo (faz proteínas que vão ser exportadas ou que vão para a membrana).',
        '**[[Retículo endoplasmático|retículo endoplasmático]] rugoso** (ou granuloso): uma rede de canais e bolsas achatadas, com ribossomos grudados por fora, o que lhe dá o aspecto "áspero". Recebe e transporta as proteínas feitas por esses ribossomos.',
        '**Retículo endoplasmático liso** (ou agranular): os mesmos canais, mas sem ribossomos. Produz **lipídios** (inclusive hormônios como os sexuais) e **desintoxica** a célula. Por isso ele é enorme nas células do fígado de quem bebe álcool ou usa certos remédios com frequência.',
        '**[[Complexo golgiense|complexo golgiense]]** (também chamado complexo de Golgi ou aparelho de Golgi): pilhas de bolsas achatadas. Modifica, **embala e despacha** o que vem do retículo. É o "setor de expedição". Também é ele que forma os lisossomos.',
      ] },
      { tipo: 'checagem', pergunta: 'Uma pessoa bebe álcool com frequência, e as células do seu fígado passam a ter muito mais de uma organela, a que ajuda a desintoxicar. Qual?', opcoes: ['retículo endoplasmático rugoso', 'retículo endoplasmático liso', 'ribossomo', 'cloroplasto'], correta: 1,
        explicacao: 'O **retículo liso** (sem ribossomos) produz lipídios e **desintoxica** a célula, por isso cresce no fígado de quem bebe muito. O rugoso, com ribossomos, cuida do transporte de **proteínas**.',
        outraExplicacao: 'Separe pelo que cada retículo tem: o **rugoso** tem ribossomos grudados, então mexe com **proteínas**; o **liso** não tem ribossomos, então fica com o resto: **lipídios e desintoxicação**.' },
      { tipo: 'checagem', pergunta: 'Uma célula fabrica uma proteína e a libera para fora (secreção). Qual o caminho correto, a partir do ribossomo?', opcoes: ['ribossomo → complexo golgiense → retículo rugoso → vesícula → membrana', 'ribossomo → retículo rugoso → complexo golgiense → vesícula → membrana', 'ribossomo → mitocôndria → núcleo → membrana', 'ribossomo → lisossomo → retículo liso → membrana'], correta: 1,
        explicacao: 'O ribossomo monta a proteína já dentro do **retículo rugoso**, que a transporta até o **complexo golgiense**. Lá ela é embalada numa **vesícula**, que se funde com a **membrana** e libera a proteína.',
        outraExplicacao: 'Pense numa fábrica: primeiro se **monta** (ribossomo), depois a peça anda pela **esteira** (retículo), depois vai para a **expedição**, que embala e endereça (Golgi), e por fim sai pela **porta** (membrana). A expedição sempre vem depois da esteira.' },

      // ----- Lisossomo
      { tipo: 'titulo', texto: 'Lisossomo: digestão e reciclagem' },
      { tipo: 'texto', texto: 'O [[lisossomo]] é uma bolsinha de membrana, formada pelo complexo golgiense, cheia de [[enzimas|enzima]] digestivas. Ele faz duas coisas:\n• **digestão intracelular**: quebra o que a célula "engoliu", como alimento ou uma bactéria capturada por um glóbulo branco;\n• **[[autofagia]]** ("comer a si mesmo"): digere organelas velhas ou estragadas, e a célula reaproveita as peças.\n\nO nome vem do grego: "lise" = quebra, "soma" = corpo. "Corpo que quebra."' },
      { tipo: 'checagem', pergunta: 'Um glóbulo branco engole uma bactéria. Qual organela vai digeri-la dentro da célula?', opcoes: ['ribossomo', 'lisossomo', 'mitocôndria', 'retículo endoplasmático rugoso'], correta: 1,
        explicacao: 'O **lisossomo** tem enzimas digestivas e faz a **digestão intracelular**: ele se junta à bolsa com a bactéria e a quebra em pedaços pequenos.',
        outraExplicacao: 'Volte à lista de necessidades: "digerir o que comeu". O responsável por isso é o lisossomo: o nome já diz, "lise" = quebra.' },

      // ----- Energia
      { tipo: 'titulo', texto: 'Energia: mitocôndria e cloroplasto' },
      { tipo: 'texto', texto: 'Falta a necessidade "conseguir energia". Aqui entram duas organelas, uma que **libera** energia e outra que **captura** energia do Sol.' },
      { tipo: 'tabela', cabecalho: ['', 'Mitocôndria', 'Cloroplasto'], linhas: [
        ['O que faz', '[[respiração celular]]: quebra a glicose com oxigênio e libera energia', '[[fotossíntese]]: usa a luz para fabricar glicose'],
        ['Entra', 'glicose + oxigênio', 'gás carbônico + água + luz'],
        ['Sai', 'gás carbônico + água + energia (na forma de [[ATP|atp]])', 'glicose + oxigênio'],
        ['Onde existe', 'em quase todas as células eucarióticas: **animais, plantas, fungos**', 'só em **plantas e algas**'],
      ] },
      { tipo: 'texto', texto: 'Repare que uma é quase o "contrário" da outra: o que a fotossíntese produz, a respiração consome. As duas reações são aprofundadas no próximo tópico, **Metabolismo**.\n\nUm detalhe que cai em prova: [[mitocôndria]] e [[cloroplasto]] têm **duas membranas**, **DNA próprio** e **ribossomos próprios**, parecidos com os das bactérias. A explicação mais aceita é a [[endossimbiose]]: há muito tempo, bactérias foram englobadas por uma célula maior e, em vez de serem digeridas, passaram a viver lá dentro.' },
      { tipo: 'checagem', pergunta: 'Sobre as células de uma planta, é correto dizer que:', opcoes: ['têm cloroplastos e por isso não precisam de mitocôndrias', 'têm mitocôndrias e não têm cloroplastos', 'têm cloroplastos e também mitocôndrias', 'não têm nenhuma das duas organelas'], correta: 2,
        explicacao: 'A planta faz **fotossíntese** (cloroplasto) para fabricar a glicose, mas depois precisa **quebrar** essa glicose para ter energia, como qualquer ser vivo: isso é a **respiração celular**, na mitocôndria. Por isso as células vegetais têm **as duas**.',
        outraExplicacao: 'Pense numa padaria que faz o próprio pão: ela produz o alimento, mas os funcionários ainda precisam **comer** para ter energia. O cloroplasto produz o "pão" (glicose); a mitocôndria "come" esse pão e libera energia. A planta precisa das duas etapas.' },

      // ----- Animal x vegetal
      { tipo: 'titulo', texto: 'Célula animal e célula vegetal' },
      { tipo: 'texto', texto: 'As duas são eucarióticas e têm quase tudo em comum: membrana, citoplasma, núcleo, ribossomos, retículos, complexo golgiense e mitocôndrias. As diferenças vêm do **modo de vida**: a planta não se move, fabrica o próprio alimento e precisa ficar "em pé" sem esqueleto.' },
      { tipo: 'tabela', cabecalho: ['Estrutura', 'Célula vegetal', 'Célula animal'], linhas: [
        ['[[Parede celular|parede celular]] (de celulose)', '**tem**: uma "caixa" rígida por fora da membrana, que dá sustentação', 'não tem'],
        ['Cloroplastos', '**tem** (nas partes verdes)', 'não tem'],
        ['[[Vacúolo|vacúolo]]', 'um **grande vacúolo central**, cheio de água, que "enche" a célula e a deixa firme', 'pequenos, quando existem'],
        ['[[Centríolos|centríolo]]', 'não tem (nas plantas com flor)', '**tem**: ajudam na divisão celular'],
        ['Lisossomos', 'raros; o vacúolo faz boa parte desse papel', '**tem**, bem típicos'],
        ['Reserva de energia', 'amido', 'glicogênio'],
        ['Forma', 'geralmente geométrica (por causa da parede)', 'variada, arredondada'],
      ] },
      { tipo: 'atencao', texto: '**Pegadinha clássica:** a parede celular **não substitui** a membrana. A célula vegetal tem as duas: a parede por fora (sustentação) e a membrana logo abaixo (que escolhe o que entra e sai). E parede celular **não é exclusiva** das plantas: bactérias e fungos também têm, mas de outros materiais (nos fungos, de **quitina**, a mesma substância da casca dos insetos).' },
      { tipo: 'checagem', pergunta: 'Qual conjunto de estruturas indica que uma célula é **vegetal**, e não animal?', opcoes: ['membrana plasmática, núcleo e mitocôndrias', 'parede de celulose, cloroplastos e grande vacúolo central', 'ribossomos, retículo e complexo golgiense', 'centríolos e lisossomos'], correta: 1,
        explicacao: '**Parede de celulose, cloroplastos e um grande vacúolo central** são as marcas da célula vegetal. Membrana, núcleo, mitocôndrias, ribossomos, retículo e Golgi as duas têm. Centríolos e lisossomos típicos apontam para célula **animal**.',
        outraExplicacao: 'Pense no que a planta precisa e o animal não: ficar em pé sem esqueleto (parede rígida + vacúolo cheio d\'água) e fabricar o próprio alimento com luz (cloroplasto). As estruturas que resolvem isso são as marcas da célula vegetal.' },

      // ----- Visão geral
      { tipo: 'titulo', texto: 'Agora sim: tudo junto' },
      { tipo: 'tabela', cabecalho: ['Estrutura', 'Função', 'Procariótica?', 'Animal?', 'Vegetal?'], linhas: [
        ['Membrana plasmática', 'controla o que entra e sai', 'sim', 'sim', 'sim'],
        ['Citoplasma', 'onde ficam as organelas e acontecem as reações', 'sim', 'sim', 'sim'],
        ['Ribossomo', 'fabrica proteínas', 'sim', 'sim', 'sim'],
        ['Núcleo', 'guarda o DNA e comanda a célula', '**não**', 'sim', 'sim'],
        ['Retículo rugoso', 'transporta proteínas feitas pelos ribossomos grudados nele', 'não', 'sim', 'sim'],
        ['Retículo liso', 'produz lipídios e desintoxica', 'não', 'sim', 'sim'],
        ['Complexo golgiense', 'modifica, embala e despacha; forma lisossomos', 'não', 'sim', 'sim'],
        ['Lisossomo', 'digestão intracelular e reciclagem', 'não', 'sim', 'raro'],
        ['Mitocôndria', 'respiração celular (energia)', 'não', 'sim', '**sim**'],
        ['Cloroplasto', 'fotossíntese', 'não', 'não', 'sim'],
        ['Parede celular', 'sustentação e proteção', 'sim (maioria)', 'não', 'sim (celulose)'],
      ] },

      // ----- Pegadinhas
      { tipo: 'titulo', texto: 'As pegadinhas de prova (agora você entende o porquê)' },
      { tipo: 'lista', itens: [
        '**"Bactéria não tem ribossomo."** Errado: toda célula fabrica proteína, então toda célula tem ribossomo. O que a bactéria não tem é núcleo e organelas com membrana.',
        '**"Planta não tem mitocôndria."** Errado: ela tem cloroplasto **e** mitocôndria.',
        '**"Vírus é o ser vivo mais simples, uma célula pequena."** Errado: vírus não é célula.',
        '**Sinônimos que a banca troca:** retículo rugoso = granuloso; retículo liso = agranular; complexo golgiense = complexo de Golgi = aparelho de Golgi; carioteca = envoltório nuclear.',
        '**"Toda célula eucariótica tem núcleo."** Quase: a hemácia madura dos mamíferos **perde o núcleo** para caber mais hemoglobina. Ela continua sendo de um ser eucarionte.',
      ] },

      { tipo: 'indicacao', obra: 'Micrographia (1665)', autor: 'Robert Hooke', texto: 'O livro em que a palavra "célula" aparece pela primeira vez com esse sentido. É de **domínio público** e está digitalizado em bibliotecas on-line. Procure a gravura da cortiça (Observação XVIII) e compare com o que você aprendeu: Hooke viu só as **paredes** das células mortas, sem nada dentro.' },

      /* ---------- 4. Ação ---------- */
      { tipo: 'etapa', etapa: 'acao', texto: 'Monte a célula com as suas mãos' },
      { tipo: 'lista', itens: [
        '**Desenho de memória:** sem olhar, desenhe uma célula animal e uma vegetal lado a lado e escreva o nome e a função de cada estrutura. Depois confira com as tabelas e marque o que esqueceu.',
        '**Conte a viagem:** explique em voz alta (ou grave um áudio) o caminho da insulina, do núcleo até sair da célula, dizendo o que cada organela faz. Se travar em algum passo, é aí que você precisa revisar.',
        '**Ligue com o dia a dia:** escolha três situações (o pão crescendo, a alface murchando, o fígado de quem bebe muito) e diga que estrutura celular está envolvida em cada uma.',
      ] },
      { tipo: 'pergunta', id: 'p3', texto: 'Escreva aqui, com as suas palavras, a viagem de uma proteína que sai da célula, do núcleo até a membrana.' },

      /* ---------- 5. Reflexão ---------- */
      { tipo: 'etapa', etapa: 'reflexao', texto: 'O que mudou?' },
      { tipo: 'texto', texto: 'Volte à sua lista do começo. Agora cada necessidade tem nome: **separar dentro e fora** → membrana; **guardar as instruções** → núcleo (DNA); **fabricar peças** → ribossomos e retículo; **despachar** → complexo golgiense; **digerir e reciclar** → lisossomo; **energia** → mitocôndria (e cloroplasto, nas plantas).\n\nE a pergunta do antibiótico na gripe? A gripe é causada por um **vírus**, que não tem parede nem ribossomos próprios, as peças que os antibióticos atacam nas bactérias. Por isso **antibiótico não trata gripe**. E tomá-lo sem necessidade ainda ajuda a selecionar bactérias resistentes.' },
      { tipo: 'pergunta', id: 'p4', texto: 'Compare com o palpite que você escreveu no começo sobre o antibiótico na gripe. O que você acertou? O que mudou na sua explicação?' },
    ],
    resumo: [
      'Teoria celular: todo ser vivo é feito de células, a célula é a menor unidade da vida e toda célula vem de outra. Vírus não é célula.',
      'Toda célula tem membrana plasmática, citoplasma, DNA e ribossomos.',
      'Procariótica (bactérias e arqueas): sem núcleo e sem organelas com membrana. Eucariótica (protozoários, algas, fungos, plantas, animais): núcleo com carioteca e organelas.',
      'Membrana: bicamada de lipídios com proteínas (mosaico fluido), com permeabilidade seletiva.',
      'Núcleo: carioteca (com poros), cromatina (DNA) e nucléolo (forma ribossomos). Comanda a célula.',
      'Viagem da proteína: núcleo (RNA) → ribossomo → retículo rugoso → complexo golgiense → vesícula → membrana.',
      'Retículo liso: lipídios e desintoxicação. Lisossomo: digestão intracelular e autofagia.',
      'Mitocôndria: respiração celular (energia, ATP), em animais E plantas. Cloroplasto: fotossíntese, só em plantas e algas.',
      'Vegetal tem parede de celulose, cloroplastos e grande vacúolo; animal tem centríolos e lisossomos típicos.',
    ],
    fontes: [
      { nome: 'Conceitos em Biologia (OpenStax, licença aberta CC BY) — cap. 3: Estrutura e função celular, em português', url: 'https://query.libretexts.org/Idioma_Portugues/Livro:_Conceitos_em_Biologia_(OpenStax)/03:_Estrutura_e_fun%C3%A7%C3%A3o_celular' },
      { nome: 'Khan Academy (gratuito) — Biologia do ensino médio: Células', url: 'https://pt.khanacademy.org/science/biologia-ensino-medio/x008af9690f00e6cd:celulas' },
      { nome: 'MEC — Base Nacional Comum Curricular (Ciências da Natureza no Ensino Médio)', url: 'https://basenacionalcomum.mec.gov.br/images/BNCC_EI_EF_110518_versaofinal_site.pdf' },
    ],
  },
});

Object.assign(App.dados.checagensExtras, {

  /* ================= Células ================= */
  'biologia-1-0': [
    { // 1. procariótica × eucariótica
      conceito: 'O que separa célula **procariótica** de **eucariótica** é o **núcleo envolvido por membrana (carioteca)**. Procariótica não tem; eucariótica tem. Ribossomos, membrana e DNA todas têm.',
      variacoes: [
        { pergunta: 'Qual destes seres é formado por células procarióticas?', opcoes: ['cogumelo', 'bactéria', 'samambaia', 'ameba'], correta: 1,
          explicacao: '**Bactérias** (e arqueas) são procariontes: não têm núcleo delimitado por membrana. Cogumelo (fungo), samambaia (planta) e ameba (protozoário) são eucariontes.',
          outraExplicacao: 'Pense nos grandes grupos: fungos, plantas, animais e protozoários têm núcleo verdadeiro (eucariontes). Só bactérias e arqueas ficaram no "galpão aberto", sem núcleo.' },
        { pergunta: 'Qual estrutura existe tanto na célula procariótica quanto na eucariótica?', opcoes: ['carioteca', 'mitocôndria', 'ribossomo', 'complexo golgiense'], correta: 2,
          explicacao: 'O **ribossomo** fabrica proteínas, e toda célula precisa delas. Por isso ele existe nas duas. Carioteca, mitocôndria e Golgi têm membrana e só existem nas eucarióticas.',
          outraExplicacao: 'Lembre o "kit básico" que toda célula tem: membrana, citoplasma, DNA e ribossomos. Das opções, só o ribossomo está nesse kit.' },
      ],
    },
    { // 2. membrana: permeabilidade seletiva
      conceito: 'A **membrana plasmática** é feita de duas camadas de lipídios com proteínas (mosaico fluido) e tem **permeabilidade seletiva**: controla o que entra e sai.',
      variacoes: [
        { pergunta: 'A membrana plasmática é formada principalmente por:', opcoes: ['celulose e quitina', 'lipídios e proteínas', 'DNA e RNA', 'amido e glicogênio'], correta: 1,
          explicacao: 'A membrana é uma **bicamada de lipídios** (fosfolipídios) com **proteínas** encaixadas: o modelo do mosaico fluido. Celulose forma a parede da célula vegetal, não a membrana.',
          outraExplicacao: 'Imagine uma película de gordura (lipídios) com "portas" espalhadas nela (proteínas). Essas portas são o que permite à membrana escolher o que passa.' },
        { pergunta: 'Se a membrana de uma célula deixasse passar qualquer substância, o que aconteceria?', opcoes: ['a célula ficaria mais protegida', 'a célula perderia o controle do que tem dentro e não conseguiria se manter viva', 'nada mudaria', 'a célula viraria procariótica'], correta: 1,
          explicacao: 'Sem a **permeabilidade seletiva**, tudo vazaria e qualquer coisa entraria. A célula não conseguiria manter as substâncias de que precisa nem barrar as perigosas.',
          outraExplicacao: 'É como um prédio sem portaria e sem paredes: qualquer um entra, e o que está guardado lá dentro some. A membrana existe justamente para escolher.' },
      ],
    },
    { // 3. núcleo
      conceito: 'O **núcleo** guarda o DNA e comanda a célula. Partes: **carioteca** (envoltório com poros), **cromatina** (DNA com proteínas) e **nucléolo** (produz as peças dos ribossomos).',
      variacoes: [
        { pergunta: 'A membrana dupla, com poros, que envolve o núcleo se chama:', opcoes: ['cromatina', 'nucléolo', 'carioteca', 'citoesqueleto'], correta: 2,
          explicacao: '**Carioteca** (ou envoltório nuclear) é a membrana dupla do núcleo. Os poros controlam o que entra e sai, como a cópia de RNA que vai para os ribossomos.',
          outraExplicacao: '"Karyon" = núcleo, "theke" = caixa: "caixa do núcleo". Cromatina é o DNA lá dentro; nucléolo é uma região interna.' },
        { pergunta: 'O nucléolo, região densa dentro do núcleo, é responsável por:', opcoes: ['produzir as peças dos ribossomos', 'fazer a fotossíntese', 'digerir organelas velhas', 'produzir lipídios'], correta: 0,
          explicacao: 'O **nucléolo** produz as peças (RNA ribossômico) que formam os **ribossomos**. Fotossíntese é no cloroplasto, digestão no lisossomo e lipídios no retículo liso.',
          outraExplicacao: 'Lembre: o núcleo manda a receita, mas quem fabrica a proteína é o ribossomo. Faz sentido que o próprio núcleo tenha uma "oficina" (nucléolo) para montar essas máquinas.' },
      ],
    },
    { // 4. retículo rugoso × liso
      conceito: 'O **ribossomo** fabrica proteínas. O **retículo rugoso** tem ribossomos grudados e transporta proteínas; o **retículo liso** não tem ribossomos, produz lipídios e desintoxica.',
      variacoes: [
        { pergunta: 'Por que o retículo endoplasmático rugoso tem esse nome?', opcoes: ['porque é feito de celulose', 'porque tem ribossomos grudados na sua superfície', 'porque fica dentro do núcleo', 'porque produz lipídios'], correta: 1,
          explicacao: 'Os **ribossomos** grudados por fora dão ao retículo um aspecto "áspero" (rugoso, granuloso) no microscópio. O retículo **liso** não tem ribossomos e é ele que produz lipídios.',
          outraExplicacao: 'Imagine uma folha lisa e outra com grãozinhos colados: a segunda fica rugosa. Os "grãozinhos" do retículo rugoso são os ribossomos.' },
        { pergunta: 'Células que produzem muita proteína para exportar (como as do pâncreas que fazem insulina) costumam ter bastante:', opcoes: ['retículo endoplasmático rugoso', 'retículo endoplasmático liso', 'cloroplastos', 'vacúolos'], correta: 0,
          explicacao: 'Quem fabrica e transporta proteínas de exportação são os **ribossomos grudados no retículo rugoso**. Muita proteína = muito retículo rugoso.',
          outraExplicacao: 'Uma fábrica que produz muito precisa de muitas máquinas e esteiras. Na célula, as máquinas de proteína (ribossomos) e a esteira (retículo rugoso) andam juntas.' },
      ],
    },
    { // 5. Golgi e secreção
      conceito: 'O **complexo golgiense** recebe o que vem do retículo, modifica, **embala em vesículas e despacha** (secreção). Também forma os lisossomos.',
      variacoes: [
        { pergunta: 'Qual organela funciona como o "setor de expedição" da célula, embalando e despachando substâncias?', opcoes: ['mitocôndria', 'complexo golgiense', 'nucléolo', 'cloroplasto'], correta: 1,
          explicacao: 'O **complexo golgiense** (complexo de Golgi) modifica, embala em vesículas e endereça as substâncias, inclusive as que serão secretadas.',
          outraExplicacao: 'Na viagem da insulina, a etapa entre o retículo e a membrana é o Golgi: é ele que "põe na caixa e etiqueta" antes de a proteína sair.' },
        { pergunta: 'Além de participar da secreção, o complexo golgiense é responsável por formar:', opcoes: ['os ribossomos', 'os lisossomos', 'os cloroplastos', 'a parede celular de quitina'], correta: 1,
          explicacao: 'Os **lisossomos** são bolsinhas com enzimas digestivas que se desprendem do **complexo golgiense**. Os ribossomos vêm do nucléolo.',
          outraExplicacao: 'O Golgi embala coisas em bolsinhas. Quando o que ele embala são enzimas digestivas que ficam dentro da célula, essa bolsinha é o lisossomo.' },
      ],
    },
    { // 6. lisossomo
      conceito: 'O **lisossomo** tem enzimas digestivas: faz a **digestão intracelular** e a **autofagia** (digere organelas velhas para reaproveitar as peças).',
      variacoes: [
        { pergunta: 'Quando uma célula digere as próprias organelas velhas para reaproveitar as peças, ocorre:', opcoes: ['fotossíntese', 'autofagia', 'secreção', 'respiração celular'], correta: 1,
          explicacao: '**Autofagia** ("comer a si mesmo") é feita pelos **lisossomos**: eles digerem organelas gastas, e a célula reaproveita as moléculas.',
          outraExplicacao: 'Pense em reciclagem: em vez de jogar a peça velha fora, a célula a desmonta e usa o material de novo. Quem desmonta é o lisossomo.' },
        { pergunta: 'O lisossomo contém principalmente:', opcoes: ['clorofila', 'enzimas digestivas', 'DNA', 'celulose'], correta: 1,
          explicacao: 'O lisossomo é uma bolsa de membrana cheia de **enzimas digestivas**, que quebram moléculas grandes em pequenas. A membrana impede que essas enzimas digiram a própria célula.',
          outraExplicacao: '"Lise" = quebra. Para quebrar moléculas, a célula usa enzimas. O lisossomo é o "estômago" da célula, e as enzimas são o seu suco digestivo.' },
      ],
    },
    { // 7. mitocôndria e cloroplasto
      conceito: '**Mitocôndria** faz a respiração celular (glicose + O₂ → CO₂ + água + energia/ATP) e existe em animais, plantas e fungos. **Cloroplasto** faz a fotossíntese e existe só em plantas e algas. Os dois têm DNA próprio.',
      variacoes: [
        { pergunta: 'Qual organela libera a energia da glicose, usando oxigênio, na forma de ATP?', opcoes: ['cloroplasto', 'mitocôndria', 'ribossomo', 'complexo golgiense'], correta: 1,
          explicacao: 'A **mitocôndria** faz a **respiração celular**: quebra a glicose com oxigênio e libera energia (ATP), gás carbônico e água.',
          outraExplicacao: 'O cloroplasto **fabrica** a glicose; a mitocôndria **queima** a glicose para liberar energia. Quem libera energia é a mitocôndria.' },
        { pergunta: 'Mitocôndrias e cloroplastos têm DNA próprio e ribossomos parecidos com os das bactérias. A explicação mais aceita para isso é:', opcoes: ['a teoria celular', 'a endossimbiose', 'a autofagia', 'a permeabilidade seletiva'], correta: 1,
          explicacao: 'Pela **endossimbiose**, essas organelas descendem de bactérias que foram englobadas por uma célula maior e passaram a viver dentro dela, trazendo o próprio DNA.',
          outraExplicacao: '"Endo" = dentro, "simbiose" = viver junto: "viver junto, lá dentro". Uma bactéria que passou a morar dentro de outra célula e virou organela.' },
      ],
    },
    { // 8. animal × vegetal
      conceito: 'A célula **vegetal** tem parede de celulose, cloroplastos e um grande vacúolo central (e também membrana e mitocôndrias). A **animal** tem centríolos e lisossomos típicos, e não tem parede.',
      variacoes: [
        { pergunta: 'A parede celular da célula vegetal é formada principalmente por:', opcoes: ['quitina', 'celulose', 'glicogênio', 'proteínas e lipídios'], correta: 1,
          explicacao: 'A parede da célula **vegetal** é de **celulose**. A de fungos é de quitina. Proteínas e lipídios formam a **membrana**, que fica por baixo da parede.',
          outraExplicacao: 'O papel e o algodão são feitos de celulose: ela vem das paredes das células de plantas. Por isso esses materiais são firmes e fibrosos.' },
        { pergunta: 'Qual estrutura existe na célula animal e **não** existe na célula vegetal das plantas com flor?', opcoes: ['mitocôndria', 'membrana plasmática', 'centríolo', 'núcleo'], correta: 2,
          explicacao: 'Os **centríolos** (que ajudam na divisão celular) são típicos da célula animal. Mitocôndria, membrana e núcleo existem nas duas.',
          outraExplicacao: 'Elimine o que é "kit comum" das eucarióticas: membrana, núcleo, mitocôndria. Sobra o centríolo, a marca da célula animal na tabela.' },
      ],
    },
  ],
});

App.dados.adicionarTermos('biologia', {
  'teoria celular': 'Ideia central da Biologia: todo ser vivo é formado por células, a célula é a menor unidade da vida e toda célula surge de outra célula.',
  'eucariontes': 'Seres de células com núcleo envolvido por membrana (carioteca) e organelas membranosas: protozoários, algas, fungos, plantas e animais.',
  'nucleoide': 'Região do citoplasma das bactérias onde fica o DNA, sem membrana em volta.',
  'membrana plasmática': 'Película de duas camadas de lipídios com proteínas que envolve toda célula e controla o que entra e sai.',
  'permeabilidade seletiva': 'Capacidade da membrana plasmática de escolher quais substâncias entram e saem da célula.',
  'citoplasma': 'Tudo o que fica dentro da membrana da célula (fora do núcleo): o citosol, as organelas e o citoesqueleto.',
  'citosol': 'A parte líquida e gelatinosa do citoplasma, com água, sais e moléculas dissolvidas (também chamada hialoplasma).',
  'citoesqueleto': 'Rede de fibras de proteína dentro da célula que dá forma a ela e serve de "trilho" para o movimento das organelas.',
  'núcleo': 'Compartimento da célula eucariótica que guarda o DNA e comanda as atividades da célula.',
  'carioteca': 'A membrana dupla, com poros, que envolve o núcleo (também chamada envoltório nuclear).',
  'ribossomo': 'Pequena estrutura sem membrana, feita de RNA e proteína, que fabrica as proteínas. Existe em todas as células.',
  'rna': 'Molécula parecida com o DNA; uma das suas funções é levar a cópia de uma "receita" do DNA até os ribossomos.',
  'vesícula': 'Bolsinha de membrana que transporta substâncias dentro da célula ou para fora dela.',
  'retículo endoplasmático': 'Rede de canais e bolsas de membrana. O rugoso tem ribossomos e transporta proteínas; o liso produz lipídios e desintoxica.',
  'complexo golgiense': 'Organela formada por pilhas de bolsas achatadas que modifica, embala e despacha substâncias, e forma os lisossomos. Também chamado complexo de Golgi.',
  'lisossomo': 'Bolsinha de membrana cheia de enzimas digestivas: faz a digestão dentro da célula e recicla organelas velhas.',
  'enzima': 'Proteína que acelera uma reação química no organismo, como quebrar um alimento em pedaços menores.',
  'autofagia': 'Processo em que a célula digere, nos lisossomos, partes dela mesma que estão velhas ou danificadas, reaproveitando as peças.',
  'atp': 'Molécula que guarda e entrega energia para as atividades da célula. É a "moeda de energia", produzida principalmente nas mitocôndrias.',
  'endossimbiose': 'Teoria de que mitocôndrias e cloroplastos se originaram de bactérias que passaram a viver dentro de outra célula.',
  'parede celular': 'Camada rígida por fora da membrana, que dá sustentação e proteção. Nas plantas é de celulose; nos fungos, de quitina.',
  'vacúolo': 'Bolsa de membrana que armazena água e substâncias. Nas células vegetais é grande e central e ajuda a manter a célula firme.',
  'centríolo': 'Estrutura cilíndrica de proteína, típica da célula animal, que participa da divisão celular.',
});
