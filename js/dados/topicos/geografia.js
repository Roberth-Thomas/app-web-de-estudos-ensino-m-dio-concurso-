/* =========================================================
   topicos/geografia.js — conteúdo de Geografia
   Mesmo formato de js/dados/conteudos.js (veja o cabeçalho de lá),
   mas separado por matéria para cada uma crescer no seu arquivo.
   Aqui ficam, desta matéria:
   - os textos de estudo (App.dados.conteudos)
   - os extras dos testes "Entendeu?" (App.dados.checagensExtras)
   - os termos novos do glossário (App.dados.adicionarTermos)
   ========================================================= */
Object.assign(App.dados.conteudos, {

  /* ======================= GEOGRAFIA — CARTOGRAFIA (do mapa do celular ao mapa da prova + cálculo passo a passo) ======================= */
  'geografia-1-0': {
    metodo: 'freire',
    prerequisitos: [
      { texto: '**Multiplicar e dividir por 10, 100, 1.000...** (para converter centímetros em quilômetros).', revisao: 'Multiplicar por 100.000 é acrescentar 5 zeros: 8 × 100.000 = 800.000. Dividir por 100.000 é tirar 5 zeros (ou andar com a vírgula 5 casas para a esquerda): 800.000 ÷ 100.000 = 8. É só isso que a conta de escala usa.' },
      { texto: '**Grau como medida de volta**: uma volta inteira tem 360°.', revisao: 'Pense no ponteiro de um relógio: uma volta completa = 360°, meia volta = 180°, um quarto de volta = 90°. A Terra é (quase) uma esfera, então dá para localizar qualquer ponto dizendo quantos graus ele está "girado" a partir de uma linha de referência.' },
    ],
    bncc: [
      { codigo: 'EM13CHS106', texto: 'Utilizar as linguagens cartográfica, gráfica e iconográfica, diferentes gêneros textuais e tecnologias digitais de informação e comunicação de forma crítica, significativa, reflexiva e ética nas diversas práticas sociais (incluindo as escolares) para se comunicar, acessar e difundir informações, produzir conhecimentos, resolver problemas e exercer protagonismo e autoria na vida pessoal e coletiva.' },
      { codigo: 'EM13CHS206', texto: 'Analisar a ocupação humana e a produção do espaço em diferentes tempos, aplicando os princípios de localização, distribuição, ordem, extensão, conexão, arranjos, casualidade, entre outros que contribuem para o raciocínio geográfico.' },
    ],
    bnccBase: [
      { codigo: 'EF06GE08', texto: 'Medir distâncias na superfície pelas escalas gráficas e numéricas dos mapas.' },
      { codigo: 'EF06GE03', texto: 'Descrever os movimentos do planeta e sua relação com a circulação geral da atmosfera, o tempo atmosférico e os padrões climáticos.' },
    ],
    blocos: [
      /* ---------- 1. Leitura do mundo ---------- */
      { tipo: 'etapa', etapa: 'leitura', texto: 'O mapa que está no seu bolso' },
      { tipo: 'texto', texto: 'Você provavelmente usa mapa todo dia sem chamar isso de "cartografia": o aplicativo de mapas do celular. Faça agora, se puder, este pequeno experimento:' },
      { tipo: 'lista', itens: [
        '**1.** Abra o mapa do celular e repare no canto da tela: em algum momento aparece uma **barrinha** com um número, como "500 m" ou "2 km".',
        '**2.** Afaste os dedos (zoom). A barrinha muda de número. Junte os dedos: muda de novo.',
        '**3.** Toque e segure num ponto qualquer. O aplicativo mostra **dois números com vírgula**, como **-15,80, -47,86** (perto da Esplanada dos Ministérios, em Brasília).',
        '**4.** Por fim, pense: quando você manda mensagem para alguém em outro país, a hora lá é a mesma daqui?',
      ] },
      { tipo: 'pergunta', id: 'p1', texto: 'Antes de qualquer explicação: o que a barrinha do mapa está te dizendo, e por que ela muda com o zoom? E o que você acha que significam aqueles dois números do ponto que você tocou? Por que um deles (ou os dois) é negativo?' },
      { tipo: 'revelar', texto: 'A **barrinha** é uma **escala**: ela diz quanto do mundo real cabe naquele pedaço da tela. Com zoom, um pedaço da tela mostra menos chão, então a barrinha passa a valer menos metros.\n\nOs **dois números** são as **coordenadas geográficas** do ponto: o primeiro é a **latitude** (quantos graus ao norte ou ao sul do Equador), o segundo é a **longitude** (quantos graus a leste ou a oeste de Greenwich). O sinal de menos quer dizer **sul** e **oeste**: o Brasil fica quase todo ao sul do Equador e todo a oeste de Greenwich.\n\nE a hora em outro país é diferente por causa dos **fusos horários**, que também são contados em graus.\n\nOu seja: você já usa escala, coordenadas e fusos. Este tópico só dá nome a eles e ensina a **fazer a conta**, que é o que a prova cobra.' },

      /* ---------- 2. Problematização ---------- */
      { tipo: 'etapa', etapa: 'problematizacao', texto: 'Mapa é retrato fiel do mundo?' },
      { tipo: 'texto', texto: 'Parece que sim, mas não. Todo mapa é uma **escolha**: alguém decide o que aparece (ruas, rios, favelas, fronteiras), o que fica de fora, que tamanho cada coisa tem e o que fica no centro. O mapa do celular, por exemplo, mostra restaurantes e lojas porque é feito por empresas que ganham com isso; um mapa do IBGE mostra limites de municípios e dados da população porque serve ao planejamento público.' },
      { tipo: 'texto', texto: 'Um exemplo famoso: no mapa-múndi mais comum nas salas de aula (a projeção de Mercator), a **Groenlândia parece do tamanho da África**. Na realidade, a África é cerca de **14 vezes maior**. Isso não é um erro de desenho: é consequência de uma escolha técnica, que você vai entender no Passo 6, mas que por séculos reforçou a impressão de que a Europa e a América do Norte "ocupam mais espaço" no mundo.\n\nSaber ler um mapa, então, é saber **perguntar a ele**: quem fez, para quê, com que escala, com que projeção? E, em concurso, cartografia é presença certa: escala e fuso horário caem com conta, e projeções caem com interpretação.' },
      { tipo: 'pergunta', id: 'p2', texto: 'Pense num mapa que você já viu e que te deu uma impressão forte (de distância, de tamanho, de perigo, de "centro" e "periferia"). Que escolha de quem fez o mapa pode ter criado essa impressão?' },

      /* ---------- 3. Sistematização ---------- */
      { tipo: 'etapa', etapa: 'sistematizacao', texto: 'As ferramentas do mapa, uma de cada vez' },
      { tipo: 'texto', texto: 'Vamos em 7 passos, sempre do mais concreto para o mais abstrato: primeiro medir (escala), depois localizar (paralelos, meridianos, coordenadas), depois a hora (fusos) e, por fim, como a Terra redonda vira papel (projeções) e o que todo mapa precisa ter (elementos).' },

      // ----- Passo 1
      { tipo: 'titulo', texto: 'Passo 1 — O que é um mapa' },
      { tipo: 'texto', texto: 'Um **mapa** é uma representação da superfície da Terra (ou de parte dela) que é:\n• **reduzida**: o mundo real é encolhido muitas vezes;\n• **plana**: a Terra é quase esférica, o papel e a tela são planos;\n• **seletiva**: mostra só o que interessa àquele mapa.\n\nCada uma dessas três características gera uma ferramenta: a redução gera a **escala**; a passagem do redondo para o plano gera a **projeção**; a seleção gera a **legenda**. A **cartografia** é a área que estuda e produz mapas.' },

      // ----- Passo 2
      { tipo: 'titulo', texto: 'Passo 2 — Escala numérica: a conta que mais cai' },
      { tipo: 'texto', texto: 'A [[escala]] numérica é escrita assim: **1:50.000** (lê-se "um para cinquenta mil"). Ela quer dizer:\n**1 unidade no mapa = 50.000 unidades iguais no terreno.**\nA unidade pode ser qualquer uma, mas em prova é quase sempre o **centímetro**: 1 cm no mapa = 50.000 cm no mundo real.' },
      { tipo: 'texto', texto: 'O único "trabalho" é converter centímetros em metros ou quilômetros. Guarde só isto:' },
      { tipo: 'tabela', cabecalho: ['De', 'Para', 'Faça'], linhas: [
        ['cm', 'm', 'divida por **100** (tire 2 zeros)'],
        ['m', 'km', 'divida por **1.000** (tire 3 zeros)'],
        ['cm', 'km', 'divida por **100.000** (tire 5 zeros)'],
      ] },
      { tipo: 'exemplo', titulo: 'Passo a passo: do mapa para o terreno', texto: 'Num mapa de escala **1:50.000**, duas cidades estão a **8 cm** uma da outra. Qual a distância real?\n1º) Multiplique a medida do mapa pelo número da escala: 8 × 50.000 = **400.000 cm**\n2º) Converta para km (tire 5 zeros): 400.000 cm = **4 km**\nResposta: as cidades estão a **4 km** uma da outra (em linha reta).' },
      { tipo: 'exemplo', titulo: 'Passo a passo: descobrir a escala', texto: 'Duas cidades estão a **12 km** de distância e, no mapa, aparecem a **6 cm**. Qual é a escala?\n1º) Deixe tudo na mesma unidade (cm): 12 km = 12 × 100.000 = **1.200.000 cm**\n2º) Divida o real pelo mapa: 1.200.000 ÷ 6 = **200.000**\n3º) Escreva a escala: **1:200.000** (1 cm do mapa vale 200.000 cm = 2 km).' },
      { tipo: 'atencao', texto: 'O erro mais comum é esquecer de **converter para a mesma unidade** antes de dividir. Na fórmula **escala = distância no mapa ÷ distância real**, as duas distâncias precisam estar em centímetros.' },
      { tipo: 'checagem', pergunta: 'Num mapa de escala 1:50.000, a distância entre duas cidades é de 8 cm. Qual é a distância real?', opcoes: ['400 m', '4 km', '40 km', '400 km'], correta: 1,
        explicacao: '8 × 50.000 = 400.000 cm. Tirando 5 zeros para passar de cm para km: **4 km**.',
        outraExplicacao: 'Comece pelo que vale 1 cm: 50.000 cm = 500 m (tire 2 zeros). Então 8 cm valem 8 × 500 m = 4.000 m = **4 km**.' },

      // ----- Escala grande × pequena
      { tipo: 'titulo', texto: 'Escala grande ou pequena? (a pegadinha de nome)' },
      { tipo: 'texto', texto: 'Pense na escala como uma **fração**: 1:10.000 é 1/10.000, e 1:1.000.000 é 1/1.000.000. Qual fração é maior? **1/10.000**, porque divide em menos pedaços. Por isso:\n• **Escala grande** = número de baixo **pequeno** = o mundo foi pouco reduzido = **muito detalhe, pouca área** (uma planta de bairro, o celular com muito zoom).\n• **Escala pequena** = número de baixo **grande** = o mundo foi muito reduzido = **pouco detalhe, muita área** (mapa do Brasil, mapa-múndi, o celular com pouco zoom).' },
      { tipo: 'tabela', cabecalho: ['Escala', 'Tipo', 'Serve para', 'No celular'], linhas: [
        ['1:2.000 a 1:10.000', '**grande**', 'planta de bairro, cadastro de imóveis', 'zoom máximo: dá para ver cada casa'],
        ['1:50.000 a 1:250.000', 'média', 'município, região, mapa topográfico', 'zoom médio: cidades e estradas'],
        ['1:1.000.000 em diante (número de baixo cada vez maior)', '**pequena**', 'mapa do Brasil, continentes, mapa-múndi', 'zoom mínimo: o país inteiro'],
      ] },
      { tipo: 'checagem', pergunta: 'Você quer um mapa para enxergar cada rua e quarteirão do seu bairro. Qual escala serve melhor?', opcoes: ['1:5.000', '1:500.000', '1:50.000.000', '1:1.000.000'], correta: 0,
        explicacao: 'Para ver detalhes (ruas, quarteirões) você precisa de **escala grande**, ou seja, o menor número de baixo: **1:5.000** (1 cm = 50 m).',
        outraExplicacao: 'Calcule quanto vale 1 cm em cada uma: 1:5.000 → 50 m; 1:500.000 → 5 km; 1:1.000.000 → 10 km. Um quarteirão tem uns 100 m: só na primeira ele ocupa um tamanho que dá para ver (2 cm).' },

      // ----- Escala gráfica
      { tipo: 'titulo', texto: 'Escala gráfica: a barrinha do celular' },
      { tipo: 'texto', texto: 'A **escala gráfica** é uma barra dividida em pedaços iguais, cada um com o valor real que ele representa. É exatamente a barrinha do mapa do celular. Ela tem uma grande vantagem: se o mapa for **ampliado ou reduzido** (zoom, fotocópia, print), a barra aumenta ou diminui **junto** e continua certa. Já a escala numérica impressa deixa de valer quando você amplia uma cópia.' },
      { tipo: 'exemplo', titulo: 'Passo a passo: medir com a escala gráfica', texto: 'Escala gráfica: |——|——|——| 0 · 10 · 20 · 30 km, e cada pedaço da barra mede **2 cm**.\nNo mapa, a distância entre duas cidades é de **7 cm**.\n1º) Descubra quanto vale 1 cm: 2 cm = 10 km → 1 cm = **5 km**\n2º) Multiplique: 7 × 5 = **35 km**\nBônus: dá para transformar em escala numérica. 1 cm = 5 km = 500.000 cm → **1:500.000**.' },
      { tipo: 'checagem', pergunta: 'Numa escala gráfica, um trecho de 4 cm da barra representa 20 km. Se duas cidades estão a 10 cm no mapa, qual a distância real?', opcoes: ['20 km', '40 km', '50 km', '200 km'], correta: 2,
        explicacao: '4 cm = 20 km, então 1 cm = 20 ÷ 4 = 5 km. Logo, 10 cm = 10 × 5 = **50 km**.',
        outraExplicacao: 'Pense em "quantas barras cabem": 10 cm é duas barras e meia de 4 cm (4 + 4 + 2). Cada barra vale 20 km: 20 + 20 + 10 = **50 km**.' },

      // ----- Passo 3
      { tipo: 'titulo', texto: 'Passo 3 — Paralelos e meridianos: a grade da Terra' },
      { tipo: 'texto', texto: 'Para localizar qualquer ponto numa esfera, foi criada uma **grade de linhas imaginárias**, como as linhas e colunas de uma planilha (ou do tabuleiro de batalha naval: "B5").\n• Os [[paralelos]] são círculos "deitados", paralelos ao **Equador**. Eles vão diminuindo até virar um ponto nos polos.\n• Os [[meridianos]] são meias-voltas "em pé", que ligam o Polo Norte ao Polo Sul. Todos têm o mesmo tamanho.' },
      { tipo: 'tabela', cabecalho: ['Linha', 'Tipo', 'Onde fica', 'Para que serve'], linhas: [
        ['**[[Equador]]**', 'paralelo principal', '0° de latitude', 'divide a Terra em hemisférios **Norte** e **Sul**'],
        ['**Trópico de Câncer**', 'paralelo', 'cerca de 23°27\' N', 'limite norte das áreas onde o Sol fica a pino ao meio-dia em algum dia do ano'],
        ['**Trópico de Capricórnio**', 'paralelo', 'cerca de 23°27\' S', 'o mesmo, no sul; passa pelo Brasil (SP, PR, MS)'],
        ['**Círculos Polares** Ártico e Antártico', 'paralelos', 'cerca de 66°33\' N e S', 'limites das áreas com dia ou noite de 24 horas em algum momento do ano'],
        ['**[[Meridiano de Greenwich|greenwich]]**', 'meridiano principal', '0° de longitude', 'divide a Terra em hemisférios **Leste** (Oriental) e **Oeste** (Ocidental)'],
        ['**Antimeridiano** (180°)', 'meridiano', 'do lado oposto a Greenwich', 'base da [[Linha Internacional de Data|linha internacional de data]]'],
      ] },
      { tipo: 'checagem', pergunta: 'Qual linha imaginária divide a Terra em hemisférios Norte e Sul?', opcoes: ['Meridiano de Greenwich', 'Equador', 'Trópico de Capricórnio', 'Linha Internacional de Data'], correta: 1,
        explicacao: 'O **Equador** (0° de latitude) é o paralelo que corta a Terra ao meio na horizontal: o que está acima é Norte, o que está abaixo é Sul.',
        outraExplicacao: 'Associe: paralelos (deitados) separam **em cima e embaixo** = Norte e Sul. Meridianos (em pé) separam **esquerda e direita** = Oeste e Leste. O paralelo principal é o Equador.' },

      // ----- Passo 4
      { tipo: 'titulo', texto: 'Passo 4 — Latitude e longitude: o "endereço" de qualquer ponto' },
      { tipo: 'texto', texto: 'Com a grade pronta, qualquer ponto tem um endereço com dois números, as **[[coordenadas geográficas]]**:\n• **[[Latitude]]**: a distância, em graus, do ponto até o **Equador**. Vai de **0° a 90°**, para **Norte (N)** ou **Sul (S)**. Medida sobre os meridianos, ela diz em que **paralelo** o ponto está.\n• **[[Longitude]]**: a distância, em graus, do ponto até o **Meridiano de Greenwich**. Vai de **0° a 180°**, para **Leste (L ou E)** ou **Oeste (O ou W)**. Ela diz em que **meridiano** o ponto está.' },
      { tipo: 'exemplo', titulo: 'Lendo o número do celular', texto: 'O celular mostrou **-15,80, -47,86**.\n1º) O primeiro número é sempre a **latitude**; o segundo, a **longitude**.\n2º) Sinal de **menos** na latitude = **Sul**; na longitude = **Oeste**. Sem sinal = Norte / Leste.\n3º) Então o ponto está a cerca de **15,8° S** e **47,9° O**: Brasília.\nEm livros e provas, aparece em graus e minutos: **15°48\' S, 47°52\' O** (cada grau tem 60 minutos: 0,80° × 60 = 48\').' },
      { tipo: 'atencao', texto: 'Cuidado: no celular, **-15,80** está em **graus decimais**, não em "15 graus e 80 minutos" (isso nem existe, pois o minuto vai só até 59). Para passar a parte decimal para minutos, **multiplique por 60**.\nCuriosidade útil para conferir contas: cada **1° de latitude** equivale a cerca de **111 km** sobre a superfície.' },
      { tipo: 'checagem', pergunta: 'Ao tocar num ponto do Rio de Janeiro, o celular mostra -22,9, -43,2. Isso quer dizer que o ponto está a:', opcoes: ['22,9° N e 43,2° L', '22,9° S e 43,2° O', '22,9° S e 43,2° L', '22,9° N e 43,2° O'], correta: 1,
        explicacao: 'O primeiro número é a latitude e o segundo é a longitude. O sinal de menos indica **Sul** na latitude e **Oeste** na longitude: **22,9° S e 43,2° O**.',
        outraExplicacao: 'Pense no mapa-múndi: o Brasil está **abaixo** do Equador (Sul) e **à esquerda** de Greenwich (Oeste). Qualquer cidade brasileira ao sul do Equador terá os dois números negativos no celular.' },

      // ----- Passo 5
      { tipo: 'titulo', texto: 'Passo 5 — Fusos horários: a conta da hora' },
      { tipo: 'texto', texto: 'A Terra dá uma volta completa em torno de si mesma (**rotação**) em cerca de **24 horas**, girando de **oeste para leste**. Por isso o Sol "nasce" primeiro nos lugares mais a leste.\nUma volta tem 360°. Dividindo: **360° ÷ 24 h = 15° por hora**. Cada faixa de 15° de longitude é um **[[fuso horário]]**, e a hora muda de 1 em 1 a cada fuso.\nA referência mundial é o fuso de Greenwich, chamado **[[UTC]]**. (Atenção: no verão europeu, de março a outubro, Londres adianta o relógio e fica em UTC+1. Em prova, use o fuso que o enunciado der.) Os outros são escritos assim: Brasília = **UTC−3** (3 horas a menos); Tóquio = **UTC+9** (9 horas a mais).' },
      { tipo: 'texto', texto: '**A regra de ouro:** quem está **a leste está adiantado**; quem está **a oeste está atrasado**. (Leste: o Sol chegou antes, a hora "andou" mais.)' },
      { tipo: 'lista', itens: [
        '**1.** Descubra o fuso de cada lugar (em UTC). Se a prova der só a longitude, divida por 15: 45° O ÷ 15 = 3 → UTC−3.',
        '**2.** Calcule a diferença entre os fusos. Se os dois estão do mesmo lado, subtraia (UTC−3 e UTC−5 → 2 h). Se estão em lados opostos, **some** (UTC−3 e UTC+9 → 12 h).',
        '**3.** Indo para **leste**, **some** as horas. Indo para **oeste**, **subtraia**.',
        '**4.** Confira se passou da meia-noite: o **dia** também pode mudar.',
      ] },
      { tipo: 'exemplo', titulo: 'Passo a passo: o episódio que estreia em Tóquio', texto: 'Um anime estreia à **0h de sábado** em Tóquio (UTC+9). Que horas são em Brasília (UTC−3)?\n1º) Fusos: Tóquio +9, Brasília −3.\n2º) Lados opostos de Greenwich → some: 9 + 3 = **12 horas** de diferença.\n3º) Brasília fica a **oeste** de Tóquio → subtraia: 0h − 12h.\n4º) Voltou antes da meia-noite: 0h de sábado − 12h = **12h (meio-dia) de sexta-feira**.\nOu seja, em Brasília você assiste na sexta, na hora do almoço.' },
      { tipo: 'exemplo', titulo: 'Passo a passo: só com a longitude', texto: 'A cidade A está em **30° L** e a cidade B em **45° O**. Em A são **14h**. Que horas são em B?\n1º) Distância em graus: lados opostos de Greenwich → 30 + 45 = **75°**.\n2º) Em horas: 75 ÷ 15 = **5 horas**.\n3º) B está a **oeste** de A → subtraia: 14h − 5h = **9h**.' },
      { tipo: 'checagem', pergunta: 'Em Brasília (UTC−3) são 10h. Que horas são em Londres (UTC 0)?', opcoes: ['7h', '10h', '13h', '15h'], correta: 2,
        explicacao: 'A diferença é de **3 horas**. Londres fica a **leste** de Brasília, então está adiantada: 10h + 3h = **13h**.',
        outraExplicacao: 'Leia o "UTC−3" ao pé da letra: a hora de Brasília é a de Londres **menos 3**. Então a de Londres é a de Brasília **mais 3**: 10 + 3 = **13h**.' },

      // ----- Fusos do Brasil
      { tipo: 'titulo', texto: 'Os fusos do Brasil' },
      { tipo: 'texto', texto: 'Na prática, os fusos não seguem linhas retas: acompanham fronteiras de países e estados, para não dividir uma cidade em duas horas. O Brasil, por ser muito largo no sentido leste-oeste, tem **4 fusos** (Lei nº 12.876/2013). Desde 2019 **não há horário de verão**, então as diferenças valem o ano todo.' },
      { tipo: 'tabela', cabecalho: ['Fuso', 'Em relação a Brasília', 'Onde'], linhas: [
        ['**UTC−2**', '+1 hora', 'Fernando de Noronha e outras ilhas oceânicas (Atol das Rocas, Trindade, São Pedro e São Paulo)'],
        ['**UTC−3**', '— (hora de Brasília)', 'Distrito Federal e 20 estados: Sul, Sudeste, Nordeste, Goiás, Tocantins, Pará e Amapá'],
        ['**UTC−4**', '−1 hora', 'Mato Grosso, Mato Grosso do Sul, Rondônia, Roraima e a maior parte do Amazonas'],
        ['**UTC−5**', '−2 horas', 'Acre e o sudoeste do Amazonas'],
      ] },
      { tipo: 'checagem', pergunta: 'Quando é meio-dia (12h) em Brasília, que horas são no Acre?', opcoes: ['10h', '11h', '13h', '14h'], correta: 0,
        explicacao: 'O Acre está no fuso **UTC−5**, duas horas atrás de Brasília (UTC−3), porque fica bem mais a oeste: 12h − 2h = **10h**.',
        outraExplicacao: 'Use a regra de ouro: o Acre está **a oeste** de Brasília, então está **atrasado**. Quantos fusos? De −3 para −5 são 2. Atrasado 2 horas: **10h**.' },
      { tipo: 'atencao', texto: '**Linha Internacional de Data:** fica perto do meridiano de 180°, no oceano Pacífico. Quem a atravessa indo para **oeste** pula **um dia para a frente**; indo para **leste**, volta um dia. Ela existe porque, somando 12 fusos de um lado e 12 do outro, os dois lados do 180° têm a mesma hora, mas dias diferentes.' },

      // ----- Passo 6
      { tipo: 'titulo', texto: 'Passo 6 — Projeções cartográficas: por que todo mapa-múndi "mente" um pouco' },
      { tipo: 'texto', texto: 'Tente achatar a casca de uma laranja sobre a mesa sem rasgar nem esticar: é impossível. Com a Terra acontece o mesmo. Uma **[[projeção cartográfica]]** é o método (geométrico e matemático) de passar a superfície curva da Terra para o plano. Toda projeção **distorce alguma coisa**: formas, áreas, distâncias ou direções. O cartógrafo escolhe o que preservar conforme o uso do mapa.' },
      { tipo: 'texto', texto: '**Pela superfície em que a Terra é "projetada":**' },
      { tipo: 'tabela', cabecalho: ['Tipo', 'Como imaginar', 'Onde distorce menos', 'Uso comum'], linhas: [
        ['**Cilíndrica**', 'um tubo de papel enrolado em volta da Terra', 'perto do Equador', 'mapas-múndi (Mercator, Peters)'],
        ['**Cônica**', 'um chapéu de papel em cone sobre a Terra', 'nas latitudes médias', 'mapas de países e continentes de latitude média'],
        ['**Plana ou azimutal**', 'uma folha encostada num ponto da Terra', 'perto do ponto de contato', 'mapas dos polos; o emblema da ONU'],
      ] },
      { tipo: 'texto', texto: '**Pelo que a projeção preserva:**' },
      { tipo: 'tabela', cabecalho: ['Propriedade', 'Preserva', 'Distorce', 'Exemplo'], linhas: [
        ['**[[Conforme|projeção conforme]]**', 'ângulos (direções) e as formas de áreas pequenas', 'áreas, que crescem muito perto dos polos', '**Mercator** (1569), criada para navegação'],
        ['**[[Equivalente|projeção equivalente]]**', 'áreas (tamanhos proporcionais)', 'formas, que ficam esticadas', '**Peters** (Gall-Peters, divulgada em 1973)'],
        ['**Equidistante**', 'distâncias a partir de certos pontos ou linhas', 'formas e áreas', 'azimutal equidistante (emblema da ONU)'],
        ['**Afilática**', 'nada perfeitamente: equilibra as distorções', 'um pouco de tudo', '**Robinson**, comum em atlas'],
      ] },
      { tipo: 'exemplo', titulo: 'Mercator × Peters', texto: 'A **[[projeção de Mercator]]** mantém os ângulos: uma linha reta nela é um rumo constante de bússola, o que era perfeito para os navegadores europeus do século XVI. O preço é aumentar as áreas longe do Equador: a Europa e a Groenlândia parecem enormes; a África e a América do Sul parecem menores do que são.\nA **projeção de Peters** faz o contrário: mantém as áreas certas e deixa os continentes "esticados" na vertical. Ela foi divulgada justamente como crítica ao **eurocentrismo** do mapa de Mercator.\nNenhuma das duas é "a verdadeira": cada uma responde a uma pergunta diferente.' },
      { tipo: 'checagem', pergunta: 'Na projeção de Mercator, a Groenlândia parece ter o tamanho da África, embora seja cerca de 14 vezes menor. Por quê?', opcoes: ['Porque o desenhista errou as medidas', 'Porque é uma projeção equivalente, que preserva as áreas', 'Porque é uma projeção conforme: preserva formas e ângulos, mas aumenta as áreas perto dos polos', 'Porque a Groenlândia está perto do Equador'], correta: 2,
        explicacao: 'Mercator é **conforme**: mantém formas e ângulos (bom para navegar) e, em troca, **exagera as áreas** quanto mais longe do Equador. A Groenlândia, perto do Polo Norte, fica enorme.',
        outraExplicacao: 'Lembre da casca de laranja: para ela ficar retangular, é preciso **esticar** as partes de cima e de baixo (perto dos polos). Tudo que fica lá em cima, como a Groenlândia, sai esticado e parece maior.' },

      // ----- Passo 7
      { tipo: 'titulo', texto: 'Passo 7 — Os elementos do mapa' },
      { tipo: 'texto', texto: 'Um mapa completo responde sozinho às perguntas de quem o lê. Para isso, precisa destes elementos:' },
      { tipo: 'tabela', cabecalho: ['Elemento', 'Responde', 'No celular'], linhas: [
        ['**Título**', 'o que o mapa mostra, onde e quando', 'a busca que você fez ("restaurantes perto de mim")'],
        ['**[[Legenda]]**', 'o que significa cada cor, símbolo ou linha', 'ícones de garfo, hospital, ônibus; linha azul da rota'],
        ['**Escala**', 'quanto o mundo foi reduzido', 'a barrinha "500 m"'],
        ['**Orientação** ([[rosa dos ventos]] ou seta do norte)', 'para que lado fica o norte', 'a bússola que aparece quando você gira o mapa'],
        ['**Fonte e data**', 'de onde vêm os dados e se ainda valem', 'o rodapé com o nome de quem fez o mapa'],
        ['**Coordenadas** (grade)', 'onde exatamente fica cada ponto', 'os números que aparecem ao tocar e segurar'],
      ] },
      { tipo: 'checagem', pergunta: 'Num mapa da densidade de população do Brasil, cada estado tem uma cor. Qual elemento explica o que cada cor significa?', opcoes: ['A escala', 'A legenda', 'A rosa dos ventos', 'O título'], correta: 1,
        explicacao: 'A **legenda** traduz os símbolos e as cores do mapa (por exemplo: verde-claro = menos de 10 habitantes por km²).',
        outraExplicacao: 'Pense na legenda de um filme: ela traduz o que você não entende. No mapa é igual: ela "traduz" cada cor e cada símbolo. A escala mede, a rosa dos ventos orienta e o título diz o assunto.' },

      /* ---------- 4. Ação ---------- */
      { tipo: 'etapa', etapa: 'acao', texto: 'Use no seu mapa' },
      { tipo: 'lista', itens: [
        '**Medir com a escala:** abra o mapa do celular e encontre sua casa e um lugar que você frequenta (trabalho, academia, mercado). Use a **barrinha** para estimar a distância em linha reta. Depois compare com a distância de rota que o aplicativo calcula: por que são diferentes?',
        '**Seu endereço em graus:** toque e segure sobre a sua casa. Anote a latitude e a longitude, diga se são N ou S, L ou O, e converta a parte decimal da latitude em minutos (× 60).',
        '**Conta de fuso:** escolha um país que você gostaria de visitar, descubra o fuso dele (em UTC) e calcule que horas são lá quando são 20h em Brasília.',
        '**Ler um mapa de verdade:** abra um mapa do IBGE (por exemplo, no Atlas Escolar do IBGE Educa) e encontre nele os 6 elementos do Passo 7. Algum está faltando?',
      ] },
      { tipo: 'pergunta', id: 'p3', texto: 'Anote aqui seus resultados: a distância medida, as suas coordenadas (em graus e minutos) e a conta de fuso que você fez.' },

      /* ---------- 5. Reflexão ---------- */
      { tipo: 'etapa', etapa: 'reflexao', texto: 'O que mudou?' },
      { tipo: 'texto', texto: 'Volte ao experimento do começo. Agora você sabe que a barrinha é uma **escala gráfica** (e que o zoom troca escala pequena por escala grande), que os dois números são **latitude e longitude** (o sinal de menos quer dizer Sul e Oeste), e que a hora em outro país depende de **quantos fusos de 15°** separam os dois lugares. Sabe também que o mapa-múndi da parede é uma **escolha**, e não um retrato neutro.' },
      { tipo: 'pergunta', id: 'p4', texto: 'Explique, com suas palavras, para alguém que nunca estudou cartografia: por que a Groenlândia parece tão grande no mapa da escola? E como você calcularia a hora em Tóquio a partir da hora de Brasília?' },
    ],
    resumo: [
      'Mapa = representação reduzida (escala), plana (projeção) e seletiva (legenda).',
      'Escala numérica 1:50.000 → 1 cm no mapa = 50.000 cm (500 m) no terreno. Distância real = medida no mapa × número da escala; cm → km: tire 5 zeros.',
      'Escala grande = número de baixo pequeno = mais detalhe e menos área. Escala pequena = muita área e pouco detalhe.',
      'Escala gráfica é a barrinha: continua certa quando o mapa é ampliado ou reduzido.',
      'Paralelos (Equador = 0°) medem a latitude: 0° a 90° N/S. Meridianos (Greenwich = 0°) medem a longitude: 0° a 180° L/O. No celular, sinal de menos = Sul / Oeste.',
      'Fusos: 360° ÷ 24 h = 15° por hora. Leste adiantado, oeste atrasado. Mesmo lado de Greenwich: subtraia os fusos; lados opostos: some.',
      'Brasil: 4 fusos (UTC−2, −3, −4, −5), sem horário de verão desde 2019. Acre = Brasília − 2 h.',
      'Projeções: cilíndrica, cônica, plana. Conforme (Mercator) preserva formas e exagera áreas perto dos polos; equivalente (Peters) preserva áreas e distorce formas.',
      'Elementos do mapa: título, legenda, escala, orientação, fonte/data e coordenadas.',
    ],
    fontes: [
      { nome: 'IBGE — Noções Básicas de Cartografia (Manuais Técnicos em Geociências, nº 8)', url: 'https://biblioteca.ibge.gov.br/visualizacao/livros/liv8595_v1.pdf' },
      { nome: 'IBGE Educa — Trabalhando com coordenadas geográficas', url: 'https://educa.ibge.gov.br/professores/blog/20772-trabalhando-com-coordenadas-geograficas.html' },
      { nome: 'IBGE Educa — Atividade: escalas e área de triângulo', url: 'https://educa.ibge.gov.br/professores/educa-atividades/17672-escalas-e-area-de-triangulo.html' },
      { nome: 'Câmara dos Deputados — Lei nº 12.876/2013 (fusos horários do Brasil)', url: 'https://www2.camara.leg.br/legin/fed/lei/2013/lei-12876-30-outubro-2013-777336-publicacaooriginal-141612-pl.html' },
    ],
  },
});

Object.assign(App.dados.checagensExtras, {

  /* ================= Cartografia ================= */
  'geografia-1-0': [
    { // 1. escala numérica: mapa → terreno
      conceito: 'Usar a **escala numérica**: distância real = medida no mapa × número da escala, e depois converter (cm → km: tire 5 zeros).',
      variacoes: [
        { pergunta: 'Num mapa de escala 1:100.000, uma estrada mede 5 cm. Qual é o comprimento real dela?', opcoes: ['500 m', '5 km', '50 km', '500 km'], correta: 1,
          explicacao: '5 × 100.000 = 500.000 cm. Tirando 5 zeros (cm → km): **5 km**.',
          outraExplicacao: 'Na escala 1:100.000, 1 cm vale 100.000 cm, que é exatamente **1 km**. Então 5 cm valem **5 km**.' },
        { pergunta: 'Duas cidades estão a 30 km uma da outra e, no mapa, aparecem a 6 cm. Qual é a escala do mapa?', opcoes: ['1:5.000', '1:50.000', '1:500.000', '1:5.000.000'], correta: 2,
          explicacao: 'Passe tudo para cm: 30 km = 3.000.000 cm. Divida o real pelo mapa: 3.000.000 ÷ 6 = 500.000. Escala **1:500.000**.',
          outraExplicacao: 'Descubra quanto vale 1 cm: 30 km ÷ 6 = 5 km. E 5 km = 500.000 cm. Então 1 cm do mapa vale 500.000 cm: **1:500.000**.' },
      ],
    },
    { // 2. escala grande × pequena
      conceito: 'Diferenciar **escala grande** (número de baixo pequeno: muito detalhe, pouca área) de **escala pequena** (número de baixo grande: pouco detalhe, muita área).',
      variacoes: [
        { pergunta: 'Para mostrar o mundo inteiro numa folha A4, o mapa precisa de qual escala?', opcoes: ['1:2.000', '1:20.000', '1:200.000', '1:100.000.000'], correta: 3,
          explicacao: 'Para caber o mundo todo numa folha, a redução tem que ser enorme: **escala pequena**, com o número de baixo muito grande. Em 1:100.000.000, 1 cm vale 1.000 km.',
          outraExplicacao: 'Faça a conta da primeira opção: em 1:2.000, 1 cm = 20 m. Uma folha de 30 cm mostraria só 600 m, nem um bairro inteiro. Só a última reduz o bastante para o planeta caber.' },
        { pergunta: 'Qual afirmação está correta?', opcoes: ['1:10.000 é uma escala maior que 1:1.000.000', '1:1.000.000 mostra mais detalhes que 1:10.000', 'Quanto maior o número de baixo, maior a escala', 'Escala grande serve para mapas-múndi'], correta: 0,
          explicacao: 'Como fração, 1/10.000 é maior que 1/1.000.000. Por isso **1:10.000 é escala maior**: reduz menos e mostra mais detalhes.',
          outraExplicacao: 'Pense no zoom do celular: muito zoom = cada casa aparece = escala **grande**, e o número da escala é pequeno (1:10.000). Pouco zoom = o país inteiro = escala pequena (1:1.000.000).' },
      ],
    },
    { // 3. escala gráfica
      conceito: 'Ler a **escala gráfica**: descobrir quanto vale 1 cm da barra e multiplicar pela medida no mapa. Ela continua certa quando o mapa é ampliado ou reduzido.',
      variacoes: [
        { pergunta: 'Numa escala gráfica, cada pedaço de 1 cm da barra vale 500 m. Duas praças estão a 6 cm no mapa. Qual a distância real?', opcoes: ['300 m', '600 m', '3 km', '30 km'], correta: 2,
          explicacao: '6 × 500 m = 3.000 m = **3 km**.',
          outraExplicacao: 'Conte de 2 em 2 cm: cada 2 cm são 1 km (500 + 500). Em 6 cm cabem três vezes 2 cm: **3 km**.' },
        { pergunta: 'Você tirou um print de um mapa e ampliou a imagem. Qual escala continua valendo?', opcoes: ['A escala gráfica, porque a barra aumenta junto com o mapa', 'A escala numérica, porque usa números maiores', 'Nenhuma das duas', 'As duas, sem nenhuma diferença'], correta: 0,
          explicacao: 'A **escala gráfica** é desenhada no próprio mapa: ao ampliar, a barra cresce na mesma proporção e continua certa. O número "1:50.000" impresso deixa de corresponder ao novo tamanho.',
          outraExplicacao: 'Imagine uma régua desenhada na foto: se você amplia a foto, a régua também cresce, e a medida "bate". O número escrito não muda sozinho, então para de valer.' },
      ],
    },
    { // 4. paralelos e meridianos
      conceito: 'Reconhecer as linhas da grade: **paralelos** (Equador, trópicos, círculos polares) separam Norte e Sul; **meridianos** (Greenwich, 180°) separam Leste e Oeste.',
      variacoes: [
        { pergunta: 'O Meridiano de Greenwich divide a Terra em hemisférios:', opcoes: ['Norte e Sul', 'Leste e Oeste', 'Tropical e Polar', 'do dia e da noite'], correta: 1,
          explicacao: 'Greenwich é o **meridiano** principal (0° de longitude). Meridianos vão de polo a polo e separam **Leste (Oriental)** de **Oeste (Ocidental)**.',
          outraExplicacao: 'Meridiano é a linha "em pé". Uma linha em pé separa o que está à **esquerda** (Oeste) do que está à **direita** (Leste).' },
        { pergunta: 'Qual paralelo atravessa o território brasileiro, passando pelo estado de São Paulo?', opcoes: ['Trópico de Câncer', 'Círculo Polar Ártico', 'Trópico de Capricórnio', 'Círculo Polar Antártico'], correta: 2,
          explicacao: 'O **Trópico de Capricórnio** (cerca de 23°27\' S) passa por São Paulo, Paraná e Mato Grosso do Sul.',
          outraExplicacao: 'O Brasil fica quase todo no hemisfério **Sul**, então o paralelo tem que ser do Sul. Os círculos polares ficam muito longe (perto dos polos). Sobra o Trópico de Capricórnio.' },
      ],
    },
    { // 5. latitude e longitude
      conceito: 'Ler **coordenadas geográficas**: latitude (0° a 90°, N/S, a partir do Equador) e longitude (0° a 180°, L/O, a partir de Greenwich). No celular, sinal de menos = Sul / Oeste.',
      variacoes: [
        { pergunta: 'A latitude de um ponto pode variar de:', opcoes: ['0° a 90°, para norte ou sul', '0° a 180°, para leste ou oeste', '0° a 360°, sempre para leste', '0° a 90°, para leste ou oeste'], correta: 0,
          explicacao: 'A latitude é medida a partir do **Equador** até os polos: no máximo **90°**, para **Norte** ou **Sul**. A longitude é que vai até 180°, para leste ou oeste.',
          outraExplicacao: 'Do Equador até o Polo Norte é um quarto de volta: 90°. Não dá para ir "mais ao norte" do que o polo. Por isso a latitude para em 90°.' },
        { pergunta: 'Um ponto com latitude 0° e longitude 0° fica:', opcoes: ['no Polo Norte', 'em Londres', 'no encontro do Equador com Greenwich, no oceano Atlântico', 'no centro do Brasil'], correta: 2,
          explicacao: 'Latitude 0° = sobre o **Equador**. Longitude 0° = sobre **Greenwich**. As duas linhas se cruzam no oceano Atlântico, no golfo da Guiné, na costa da África.',
          outraExplicacao: 'Londres está sobre Greenwich, mas bem ao norte do Equador (cerca de 51° N), então a latitude dela não é 0°. O ponto 0°, 0° é onde as duas linhas de referência se cruzam: no mar.' },
      ],
    },
    { // 6. cálculo de fuso
      conceito: 'Calcular **fusos horários**: 15° = 1 hora; leste adiantado, oeste atrasado; mesmo lado de Greenwich subtrai os fusos, lados opostos soma.',
      variacoes: [
        { pergunta: 'São 20h de segunda-feira em Brasília (UTC−3). Que horas são em Tóquio (UTC+9)?', opcoes: ['8h de segunda-feira', '8h de terça-feira', '20h de terça-feira', '17h de segunda-feira'], correta: 1,
          explicacao: 'Lados opostos de Greenwich: 3 + 9 = **12 horas**. Tóquio está a leste → adiantado: 20h + 12h = 32h, ou seja, **8h do dia seguinte (terça)**.',
          outraExplicacao: 'Vá por partes: de Brasília para Londres (UTC 0), some 3 h → 23h de segunda. De Londres para Tóquio, some mais 9 h → passou da meia-noite: **8h de terça**.' },
        { pergunta: 'A cidade A fica em 30° L e a cidade B em 45° O. Pelos fusos teóricos, qual a diferença de horário entre elas?', opcoes: ['1 hora', '3 horas', '5 horas', '75 horas'], correta: 2,
          explicacao: 'Lados opostos de Greenwich → some: 30° + 45° = 75°. Cada 15° é 1 hora: 75 ÷ 15 = **5 horas**.',
          outraExplicacao: 'Converta cada uma em fuso: 30° L ÷ 15 = UTC+2; 45° O ÷ 15 = UTC−3. De −3 até +2 são **5 horas** (−3, −2, −1, 0, +1, +2).' },
      ],
    },
    { // 7. fusos do Brasil
      conceito: 'Conhecer os **4 fusos do Brasil**: UTC−2 (ilhas oceânicas), UTC−3 (Brasília), UTC−4 (MT, MS, RO, RR, maior parte do AM) e UTC−5 (Acre e sudoeste do AM).',
      variacoes: [
        { pergunta: 'Quantos fusos horários o Brasil tem hoje, contando as ilhas oceânicas?', opcoes: ['2', '3', '4', '5'], correta: 2,
          explicacao: 'São **4**: UTC−2 (Fernando de Noronha), UTC−3 (Brasília), UTC−4 (MT, MS, RO, RR e maior parte do AM) e UTC−5 (Acre e sudoeste do AM), conforme a Lei nº 12.876/2013.',
          outraExplicacao: 'Vá do leste para o oeste: as ilhas no mar (−2), o litoral e o centro com Brasília (−3), o Centro-Oeste e boa parte da Amazônia (−4) e o Acre (−5). Quatro faixas.' },
        { pergunta: 'São 15h em Brasília. Que horas são em Fernando de Noronha?', opcoes: ['13h', '14h', '16h', '17h'], correta: 2,
          explicacao: 'Fernando de Noronha está no fuso **UTC−2**, uma hora à frente de Brasília (UTC−3): 15h + 1h = **16h**.',
          outraExplicacao: 'A ilha fica no oceano Atlântico, **a leste** do continente. Leste é adiantado: uma hora a mais, **16h**.' },
      ],
    },
    { // 8. projeções
      conceito: 'Entender as **projeções cartográficas**: toda projeção distorce algo. Conforme (Mercator) preserva formas e ângulos; equivalente (Peters) preserva áreas.',
      variacoes: [
        { pergunta: 'Uma projeção que mantém as áreas proporcionais, mas distorce as formas, é chamada de:', opcoes: ['conforme', 'equivalente', 'equidistante', 'azimutal'], correta: 1,
          explicacao: '**Equivalente** quer dizer "de valor igual": as áreas ficam proporcionais às reais (como na projeção de Peters), mesmo que as formas fiquem esticadas.',
          outraExplicacao: 'Associe pelo nome: con**forme** guarda a **forma**; equi**valente** guarda o **valor** da área; equi**distante** guarda a **distância**. Azimutal é o tipo de superfície (plana), não a propriedade.' },
        { pergunta: 'Por que todo mapa-múndi tem alguma distorção?', opcoes: ['Porque os cartógrafos erram as medidas', 'Porque não dá para passar uma superfície curva para o plano sem esticar ou cortar', 'Porque a Terra muda de forma todo ano', 'Porque os satélites não fotografam os polos'], correta: 1,
          explicacao: 'A Terra é quase esférica, e uma esfera **não pode ser planificada** sem deformar. Cada projeção escolhe o que preservar e o que distorcer.',
          outraExplicacao: 'Lembre da casca de laranja: tente deixá-la plana sobre a mesa. Ou ela rasga, ou você precisa esticar partes dela. Com o mapa-múndi é a mesma coisa.' },
      ],
    },
    { // 9. elementos do mapa
      conceito: 'Reconhecer os **elementos do mapa**: título, legenda, escala, orientação (rosa dos ventos), fonte e data, coordenadas.',
      variacoes: [
        { pergunta: 'Qual elemento do mapa indica para que lado fica o norte?', opcoes: ['A legenda', 'A escala', 'A rosa dos ventos (ou seta do norte)', 'O título'], correta: 2,
          explicacao: 'A **rosa dos ventos** (ou uma simples seta com "N") é o elemento de **orientação**: mostra os pontos cardeais no mapa.',
          outraExplicacao: 'No celular, é a bússola que aparece quando você gira o mapa: tocando nela, o norte volta para cima. Esse é o papel da rosa dos ventos.' },
        { pergunta: 'Um mapa sem fonte e sem data é um problema porque:', opcoes: ['fica visualmente feio', 'você não sabe de onde vêm os dados nem se eles ainda valem', 'a escala deixa de funcionar', 'a legenda fica sem cores'], correta: 1,
          explicacao: 'A **fonte** diz quem produziu os dados (e permite conferir) e a **data** diz se a informação ainda é atual. Sem elas, não dá para confiar no mapa.',
          outraExplicacao: 'Pense numa notícia sem autor e sem data: você não sabe se é verdade nem se é de hoje ou de dez anos atrás. Um mapa de população de 1990 mostraria um Brasil bem diferente do atual.' },
      ],
    },
  ],
});

App.dados.adicionarTermos('geografia', {
  'equador': 'O paralelo principal (0° de latitude): divide a Terra em hemisférios Norte e Sul.',
  'greenwich': 'O meridiano principal (0° de longitude), que passa por Greenwich, em Londres: divide a Terra em hemisférios Leste e Oeste e é a base dos fusos (UTC).',
  'linha internacional de data': 'Linha perto do meridiano de 180°, no Pacífico. Atravessando para oeste, a data avança um dia; para leste, volta um dia.',
  'coordenadas geográficas': 'O "endereço" de um ponto na Terra: a latitude e a longitude, em graus.',
  'latitude': 'Distância em graus de um ponto até o Equador, de 0° a 90°, para norte (N) ou sul (S).',
  'longitude': 'Distância em graus de um ponto até o Meridiano de Greenwich, de 0° a 180°, para leste (L) ou oeste (O).',
  'fuso horário': 'Faixa de 15° de longitude com a mesma hora. A cada fuso a hora muda 1 hora: adiantada a leste, atrasada a oeste.',
  'utc': 'Tempo Universal Coordenado: a hora de referência mundial, a do fuso de Greenwich. Brasília é UTC−3.',
  'projeção cartográfica': 'Método de passar a superfície curva da Terra para o plano. Toda projeção distorce formas, áreas, distâncias ou direções.',
  'projeção conforme': 'Projeção que preserva formas e ângulos, mas distorce as áreas (ex.: Mercator).',
  'projeção equivalente': 'Projeção que preserva as áreas proporcionais, mas distorce as formas (ex.: Peters).',
  'projeção de mercator': 'Projeção cilíndrica e conforme de 1569, feita para navegação: mantém os ângulos e exagera as áreas perto dos polos.',
  'legenda': 'Parte do mapa que explica o significado de cada cor, símbolo ou linha.',
  'rosa dos ventos': 'Símbolo que mostra os pontos cardeais (N, S, L, O) e serve para orientar o mapa.',
});
