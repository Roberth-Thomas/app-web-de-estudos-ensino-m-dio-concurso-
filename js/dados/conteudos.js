/* =========================================================
   conteudos.js — textos de estudo de cada tópico
   A chave é o id do assunto (ver assuntos.js): "materia-fase-posição".
   Os textos são originais (escritos para este app) e cada tópico
   indica as habilidades da BNCC (MEC, 2018) que ele ajuda a desenvolver.
   Códigos conferidos no documento oficial da BNCC (versão final).

   Formato:
   {
     bncc:     [{ codigo, texto }],   // habilidades do Ensino Médio
     bnccBase: [{ codigo, texto }],   // base que vem do Ensino Fundamental
     blocos:   [ { tipo: 'texto' | 'titulo' | 'lista' | 'exemplo' | 'atencao' | 'tabela', ... } ],
     resumo:   ['frases curtas para revisar'],
     fontes:   [{ nome, url }]
   }
   Dentro dos textos, **assim** vira negrito e \n vira quebra de linha.
   ========================================================= */
App.dados = App.dados || {};

App.dados.bnccUrl = 'https://basenacionalcomum.mec.gov.br/images/BNCC_EI_EF_110518_versaofinal_site.pdf';

App.dados.conteudos = {

  /* ======================= PORCENTAGEM ======================= */
  'matematica-1-0': {
    bncc: [
      { codigo: 'EM13MAT104', texto: 'Interpretar taxas e índices de natureza socioeconômica (índice de desenvolvimento humano, taxas de inflação, entre outros), investigando os processos de cálculo desses números, para analisar criticamente a realidade e produzir argumentos.' },
      { codigo: 'EM13MAT203', texto: 'Aplicar conceitos matemáticos no planejamento, na execução e na análise de ações envolvendo a utilização de aplicativos e a criação de planilhas (para o controle de orçamento familiar, simuladores de cálculos de juros simples e compostos, entre outros), para tomar decisões.' },
    ],
    bnccBase: [
      { codigo: 'EF07MA02', texto: 'Problemas com porcentagens, como acréscimos e decréscimos simples, no contexto de educação financeira.' },
      { codigo: 'EF09MA05', texto: 'Problemas com porcentagens, com a ideia de aplicação de percentuais sucessivos e a determinação das taxas percentuais.' },
    ],
    blocos: [
      { tipo: 'texto', texto: '"Por cento" quer dizer **por cem**. Porcentagem é só uma fração com denominador 100 escrita de outro jeito: 25% = 25/100 = 0,25 = 1/4. Por isso todo cálculo de porcentagem vira uma multiplicação por um número decimal.' },
      { tipo: 'tabela', cabecalho: ['Porcentagem', 'Decimal', 'Fração'], linhas: [
        ['1%', '0,01', '1/100'], ['10%', '0,1', '1/10'], ['20%', '0,2', '1/5'],
        ['25%', '0,25', '1/4'], ['50%', '0,5', '1/2'], ['75%', '0,75', '3/4'], ['100%', '1', 'o todo'],
      ] },

      { tipo: 'titulo', texto: '1. Calcular X% de um valor' },
      { tipo: 'texto', texto: 'Transforme a porcentagem em decimal e multiplique: **X% de V = (X ÷ 100) × V**.' },
      { tipo: 'exemplo', titulo: 'Exemplo', texto: '35% de 80 = 0,35 × 80 = **28**\n\nDe cabeça: 10% de 80 = 8 → 30% = 24; 5% é a metade de 10% = 4. Total: 24 + 4 = 28.' },
      { tipo: 'lista', itens: ['**10%**: divida por 10.', '**5%**: metade de 10%.', '**1%**: divida por 100.', '**50%**: metade; **25%**: metade da metade.'] },

      { tipo: 'titulo', texto: '2. Que porcentagem A é de B?' },
      { tipo: 'texto', texto: 'Divida a parte pelo todo e multiplique por 100: **(A ÷ B) × 100**.' },
      { tipo: 'exemplo', titulo: 'Exemplo', texto: 'Numa turma de 72 alunos, 18 foram aprovados em recuperação.\n18 ÷ 72 = 0,25 → **25%** da turma.' },

      { tipo: 'titulo', texto: '3. Aumento e desconto: use o fator' },
      { tipo: 'texto', texto: 'Em vez de calcular a porcentagem e depois somar ou subtrair, multiplique direto pelo **fator**:\n• Aumento de i% → multiplique por **(1 + i/100)**\n• Desconto de i% → multiplique por **(1 − i/100)**' },
      { tipo: 'exemplo', titulo: 'Exemplo', texto: 'Produto de R$ 250,00.\nAumento de 12%: 250 × 1,12 = **R$ 280,00**\nDesconto de 30%: 250 × 0,70 = **R$ 175,00**' },

      { tipo: 'titulo', texto: '4. Porcentagens sucessivas' },
      { tipo: 'texto', texto: 'Quando há vários aumentos e/ou descontos seguidos, **multiplique os fatores**. Nunca some as porcentagens.' },
      { tipo: 'exemplo', titulo: 'Exemplo clássico de prova', texto: 'Um preço sobe 20% e depois cai 20%. Voltou ao original?\n1,20 × 0,80 = 0,96 → o preço final é 96% do inicial: **queda de 4%**.\n\nDois aumentos de 10%: 1,10 × 1,10 = 1,21 → **aumento de 21%** (e não 20%).' },

      { tipo: 'titulo', texto: '5. Variação percentual' },
      { tipo: 'texto', texto: '**Variação = (novo − antigo) ÷ antigo × 100.** A base é sempre o valor **antigo**.' },
      { tipo: 'exemplo', titulo: 'Exemplo', texto: 'De 40 para 50: (50 − 40) ÷ 40 = 0,25 → **aumento de 25%**\nDe 50 para 40: (40 − 50) ÷ 50 = −0,20 → **queda de 20%**\nA mesma diferença (10) dá porcentagens diferentes porque a base mudou.' },

      { tipo: 'titulo', texto: '6. Descobrir o valor original' },
      { tipo: 'texto', texto: 'Se você sabe o valor **depois** do aumento ou do desconto, **divida pelo fator**.' },
      { tipo: 'exemplo', titulo: 'Exemplo', texto: 'Depois de um aumento de 25%, um aluguel ficou em R$ 1.500,00. Qual era o valor antes?\n1.500 ÷ 1,25 = **R$ 1.200,00**\n(Errado: tirar 25% de 1.500 = 1.125, porque os 25% eram do valor antigo.)' },

      { tipo: 'titulo', texto: '7. Ponto percentual × porcentagem (leitura de índices)' },
      { tipo: 'texto', texto: 'Quando uma **taxa** muda (desemprego, inflação, juros), há duas formas de medir a mudança, e notícias e provas exploram essa diferença:' },
      { tipo: 'exemplo', titulo: 'Exemplo', texto: 'A taxa de desemprego passou de 10% para 12%.\n• Subiu **2 pontos percentuais** (12 − 10).\n• Em termos relativos, subiu **20%** (2 ÷ 10).' },
      { tipo: 'atencao', texto: 'Esse é o tipo de leitura crítica de índices que a habilidade EM13MAT104 pede: entender **como** o número foi calculado antes de tirar conclusões.' },
    ],
    resumo: [
      'X% = X/100. Para calcular, multiplique pelo decimal.',
      'Aumento: × (1 + i/100). Desconto: × (1 − i/100).',
      'Porcentagens seguidas se **multiplicam**, nunca se somam.',
      'Variação percentual usa o valor **antigo** como base.',
      'Para achar o valor original, **divida** pelo fator.',
      'Pontos percentuais (diferença de taxas) ≠ variação percentual.',
    ],
    fontes: [
      { nome: 'Khan Academy — O significado de porcentagem (vídeo)', url: 'https://pt.khanacademy.org/math/pre-algebra/xb4832e56:percentages/xb4832e56:intro-to-percents/v/describing-the-meaning-of-percent-2' },
      { nome: 'Khan Academy — Como encontrar uma porcentagem (vídeo)', url: 'https://pt.khanacademy.org/math/pre-algebra/pre-algebra-ratios-rates/pre-algebra-percent-problems/v/finding-percentages-example' },
    ],
  },

  /* ======================= RAZÃO E PROPORÇÃO ======================= */
  'matematica-1-1': {
    bncc: [
      { codigo: 'EM13MAT314', texto: 'Resolver e elaborar problemas que envolvem grandezas determinadas pela razão ou pelo produto de outras (velocidade, densidade demográfica, energia elétrica etc.).' },
    ],
    bnccBase: [
      { codigo: 'EF07MA09', texto: 'Utilizar a associação entre razão e fração, como a fração 2/3 para expressar a razão de duas partes de uma grandeza para três partes.' },
      { codigo: 'EF09MA07', texto: 'Resolver problemas que envolvam a razão entre duas grandezas de espécies diferentes, como velocidade e densidade demográfica.' },
    ],
    blocos: [
      { tipo: 'titulo', texto: '1. Razão' },
      { tipo: 'texto', texto: '**Razão** é a comparação de duas quantidades por meio de uma **divisão**: a razão de a para b é a/b (com b ≠ 0). Lê-se "a está para b". A **ordem importa**: a razão de homens para mulheres não é a mesma de mulheres para homens.' },
      { tipo: 'exemplo', titulo: 'Exemplo', texto: 'Uma equipe tem 12 homens e 18 mulheres.\nRazão homens/mulheres = 12/18 = **2/3** ("2 para 3").\nRazão homens/total = 12/30 = **2/5**.\nCuidado para não confundir a razão **parte/parte** com a razão **parte/todo**.' },

      { tipo: 'titulo', texto: '2. Razões com nome próprio' },
      { tipo: 'texto', texto: 'Muitas grandezas do dia a dia são razões entre grandezas **de espécies diferentes**. Elas são as mais cobradas:' },
      { tipo: 'tabela', cabecalho: ['Razão', 'Fórmula', 'Unidade'], linhas: [
        ['Velocidade média', 'distância ÷ tempo', 'km/h, m/s'],
        ['Densidade demográfica', 'habitantes ÷ área', 'hab/km²'],
        ['Escala', 'medida no mapa ÷ medida real', 'sem unidade (1:50.000)'],
        ['Consumo', 'distância ÷ combustível', 'km/L'],
      ] },
      { tipo: 'exemplo', titulo: 'Exemplos', texto: 'Um ônibus percorre 360 km em 4 h → 360 ÷ 4 = **90 km/h**.\nUma cidade tem 1.200.000 habitantes em 400 km² → **3.000 hab/km²**.\nNa escala 1:50.000, 3 cm no mapa = 3 × 50.000 = 150.000 cm = **1,5 km**.' },

      { tipo: 'titulo', texto: '3. Proporção' },
      { tipo: 'texto', texto: '**Proporção** é uma igualdade entre duas razões: a/b = c/d. Vale a **propriedade fundamental**: o produto dos meios é igual ao produto dos extremos → **a · d = b · c** (a famosa "multiplicação cruzada").' },
      { tipo: 'exemplo', titulo: 'Exemplo', texto: 'x/15 = 4/6\n6 · x = 15 · 4\n6x = 60 → **x = 10**' },

      { tipo: 'titulo', texto: '4. Divisão em partes proporcionais' },
      { tipo: 'texto', texto: 'Muito comum em concurso (lucro dividido entre sócios, herança, prêmios). **Diretamente proporcional**: some as "partes", ache o valor de uma parte e multiplique.' },
      { tipo: 'exemplo', titulo: 'Diretamente proporcional', texto: 'Dividir R$ 900,00 entre Ana e Beto na razão 2 : 3.\nTotal de partes: 2 + 3 = 5 → cada parte = 900 ÷ 5 = 180.\nAna: 2 × 180 = **R$ 360,00** · Beto: 3 × 180 = **R$ 540,00**' },
      { tipo: 'exemplo', titulo: 'Inversamente proporcional', texto: 'Dividir 260 em partes inversamente proporcionais a 2 e 3 (quem tem o número menor recebe mais).\nInverso de 2 e 3: 1/2 e 1/3. Multiplicando por 6 para tirar as frações: 3 e 2.\nTotal: 5 partes → cada parte = 52.\nPrimeiro: 3 × 52 = **156** · Segundo: 2 × 52 = **104**' },

      { tipo: 'atencao', texto: 'Antes de montar uma razão, deixe as grandezas **na mesma unidade** (minutos com minutos, metros com metros). 30 min para 2 h é 30/120 = 1/4, e não 30/2.' },
    ],
    resumo: [
      'Razão = divisão a/b. A ordem importa.',
      'Diferencie parte/parte de parte/todo.',
      'Velocidade, densidade, escala e consumo são razões.',
      'Proporção a/b = c/d → a·d = b·c.',
      'Partes proporcionais: some as partes, ache o valor de uma e multiplique.',
      'Inversamente proporcional: use os inversos dos números.',
    ],
    fontes: [
      { nome: 'Khan Academy — Pré-álgebra (unidade Razões e taxas)', url: 'https://pt.khanacademy.org/math/pre-algebra' },
      { nome: 'Khan Academy — Resolução de proporções (vídeo)', url: 'https://pt.khanacademy.org/math/pre-algebra/xb4832e56:proportional-relationships/xb4832e56:writing-solving-proportions/v/find-an-unknown-in-a-proportion' },
    ],
  },

  /* ======================= REGRA DE TRÊS ======================= */
  'matematica-1-2': {
    bncc: [
      { codigo: 'EM13MAT314', texto: 'Resolver e elaborar problemas que envolvem grandezas determinadas pela razão ou pelo produto de outras (velocidade, densidade demográfica, energia elétrica etc.).' },
      { codigo: 'EM13MAT401', texto: 'Converter representações algébricas de funções polinomiais de 1º grau em representações geométricas no plano cartesiano, distinguindo os casos nos quais o comportamento é proporcional, recorrendo ou não a softwares ou aplicativos de álgebra e geometria dinâmica.' },
    ],
    bnccBase: [
      { codigo: 'EF07MA17', texto: 'Resolver e elaborar problemas que envolvam variação de proporcionalidade direta e de proporcionalidade inversa entre duas grandezas.' },
      { codigo: 'EF09MA08', texto: 'Resolver e elaborar problemas que envolvam relações de proporcionalidade direta e inversa entre duas ou mais grandezas, inclusive escalas, divisão em partes proporcionais e taxa de variação.' },
    ],
    blocos: [
      { tipo: 'texto', texto: 'A regra de três é um **método** para achar um valor desconhecido quando as grandezas são proporcionais. O mais importante não é a conta, e sim decidir **se** a relação é direta ou inversa. Não é à toa que a BNCC do 6º ano pede porcentagem "sem fazer uso da regra de três": primeiro se entende a proporcionalidade, depois vem o atalho.' },

      { tipo: 'titulo', texto: '1. Direta ou inversa?' },
      { tipo: 'tabela', cabecalho: ['Tipo', 'Comportamento', 'O que fica constante'], linhas: [
        ['Diretamente proporcional', 'uma dobra → a outra dobra', 'a razão (y ÷ x)'],
        ['Inversamente proporcional', 'uma dobra → a outra cai pela metade', 'o produto (x · y)'],
      ] },
      { tipo: 'texto', texto: 'Pergunte: "se eu **aumentar** esta grandeza, a outra **aumenta** ou **diminui**?" Mais quilos → mais preço (direta). Mais torneiras → menos tempo (inversa).' },

      { tipo: 'titulo', texto: '2. Regra de três simples: passo a passo' },
      { tipo: 'lista', itens: [
        'Monte uma coluna para cada grandeza, com as unidades iguais na mesma coluna.',
        'Coloque **x** no valor desconhecido.',
        'Decida se a relação é direta ou inversa.',
        'Se for **inversa**, inverta uma das colunas.',
        'Multiplique cruzado e resolva.',
      ] },
      { tipo: 'exemplo', titulo: 'Direta', texto: '5 kg de carne custam R$ 32,00. Quanto custam 8 kg?\nkg   R$\n5  → 32\n8  → x\nMais kg → mais caro (direta): 5x = 8 · 32 → 5x = 256 → **x = R$ 51,20**' },
      { tipo: 'exemplo', titulo: 'Inversa', texto: '6 torneiras enchem um tanque em 10 h. Em quanto tempo 4 torneiras enchem o mesmo tanque?\nMenos torneiras → mais tempo (inversa). O produto é constante:\n6 · 10 = 4 · x → 60 = 4x → **x = 15 h**' },

      { tipo: 'titulo', texto: '3. Regra de três composta' },
      { tipo: 'texto', texto: 'Quando há **três ou mais** grandezas, compare **cada uma** delas com a grandeza de **x**, separadamente, e veja se é direta ou inversa. Depois multiplique: x = valor conhecido × (fator de cada grandeza).' },
      { tipo: 'exemplo', titulo: 'Só diretas', texto: '4 máquinas produzem 600 peças em 5 dias. Quantas peças 6 máquinas produzem em 8 dias?\nMais máquinas → mais peças (direta) · mais dias → mais peças (direta)\nx = 600 × 6/4 × 8/5 = 600 × 1,5 × 1,6 = **1.440 peças**' },
      { tipo: 'exemplo', titulo: 'Com inversas', texto: '8 operários, trabalhando 6 h por dia, fazem uma obra em 15 dias. Em quantos dias 10 operários, trabalhando 8 h por dia, fazem a mesma obra?\nMais operários → menos dias (inversa) · mais horas por dia → menos dias (inversa)\nx = 15 × 8/10 × 6/8 = 15 × 0,8 × 0,75 = **9 dias**' },

      { tipo: 'atencao', texto: '**Nem tudo é proporcional.** Se você dobra o lado de um quadrado, o perímetro dobra (proporcional), mas a área fica **4 vezes** maior (não proporcional ao lado). Idade e altura também não são proporcionais. Só use regra de três quando a relação for de fato direta ou inversa.' },
    ],
    resumo: [
      'Direta: razão constante (as duas sobem juntas).',
      'Inversa: produto constante (uma sobe, a outra desce).',
      'Na inversa, inverta uma coluna antes de multiplicar cruzado.',
      'Composta: compare cada grandeza só com a grandeza do x.',
      'Confira se a relação é mesmo proporcional antes de aplicar.',
    ],
    fontes: [
      { nome: 'Khan Academy — Introdução à regra de três (artigo)', url: 'https://pt.khanacademy.org/math/pt-8-ano/algebra-sequencia-proporcoes-8ano/x7a9edfd8911d9c95:regrade-tres/a/introducao-a-regra-de-tres' },
    ],
  },

  /* ======================= FUNÇÕES DO 1º E 2º GRAU ======================= */
  'matematica-1-3': {
    bncc: [
      { codigo: 'EM13MAT302', texto: 'Construir modelos empregando as funções polinomiais de 1º ou 2º graus, para resolver problemas em contextos diversos, com ou sem apoio de tecnologias digitais.' },
      { codigo: 'EM13MAT401', texto: 'Converter representações algébricas de funções polinomiais de 1º grau em representações geométricas no plano cartesiano, distinguindo os casos nos quais o comportamento é proporcional.' },
      { codigo: 'EM13MAT402', texto: 'Converter representações algébricas de funções polinomiais de 2º grau em representações geométricas no plano cartesiano, distinguindo os casos nos quais uma variável for diretamente proporcional ao quadrado da outra.' },
      { codigo: 'EM13MAT501', texto: 'Investigar relações entre números expressos em tabelas para representá-los no plano cartesiano, identificando padrões e criando conjecturas para generalizar e expressar algebricamente essa generalização, reconhecendo quando essa representação é de função polinomial de 1º grau.' },
      { codigo: 'EM13MAT503', texto: 'Investigar pontos de máximo ou de mínimo de funções quadráticas em contextos envolvendo superfícies, Matemática Financeira ou Cinemática, entre outros, com apoio de tecnologias digitais.' },
    ],
    bnccBase: [
      { codigo: 'EF09MA06', texto: 'Compreender as funções como relações de dependência unívoca entre duas variáveis e suas representações numérica, algébrica e gráfica.' },
    ],
    blocos: [
      { tipo: 'texto', texto: 'Uma **função** é uma regra que associa a cada valor de entrada (x) **um único** valor de saída (y). Escrevemos y = f(x). Exemplo: o preço de uma corrida de táxi é função dos quilômetros rodados.' },

      { tipo: 'titulo', texto: 'Parte 1 — Função do 1º grau (afim)' },
      { tipo: 'texto', texto: 'Forma: **f(x) = ax + b**, com a ≠ 0. O gráfico é sempre uma **reta**.' },
      { tipo: 'lista', itens: [
        '**a** (coeficiente angular) = taxa de variação: quanto y muda quando x aumenta 1. a > 0 → **crescente**; a < 0 → **decrescente**.',
        '**b** (coeficiente linear) = valor de f(0): onde a reta **corta o eixo y**.',
        '**Zero (raiz)**: onde a reta corta o eixo x → ax + b = 0 → **x = −b/a**.',
        'Se **b = 0** (f(x) = ax), a função é **linear**: x e y são **diretamente proporcionais** e a reta passa pela origem.',
      ] },
      { tipo: 'exemplo', titulo: 'Modelando um problema', texto: 'Um táxi cobra R$ 5,00 de bandeirada + R$ 2,50 por km.\nf(x) = 2,5x + 5\nCorrida de 12 km: f(12) = 2,5 · 12 + 5 = **R$ 35,00**\nCom R$ 40,00, quantos km? 2,5x + 5 = 40 → 2,5x = 35 → **x = 14 km**\nNão é proporcional: por causa da bandeirada, 24 km não custam o dobro de 12 km.' },
      { tipo: 'exemplo', titulo: 'Achar a função a partir de dois pontos', texto: 'A reta passa por (1, 5) e (3, 11).\na = (11 − 5) ÷ (3 − 1) = 6 ÷ 2 = 3\nb: 5 = 3 · 1 + b → b = 2\n**f(x) = 3x + 2**' },

      { tipo: 'titulo', texto: 'Parte 2 — Função do 2º grau (quadrática)' },
      { tipo: 'texto', texto: 'Forma: **f(x) = ax² + bx + c**, com a ≠ 0. O gráfico é uma **parábola**.' },
      { tipo: 'lista', itens: [
        '**a > 0**: concavidade para cima (∪) → a função tem **valor mínimo**.',
        '**a < 0**: concavidade para baixo (∩) → a função tem **valor máximo**.',
        '**c** = f(0): onde a parábola corta o eixo y.',
      ] },
      { tipo: 'texto', texto: '**Raízes (fórmula de Bhaskara)**\nΔ = b² − 4ac  e  x = (−b ± √Δ) ÷ 2a\n• Δ > 0 → duas raízes reais diferentes\n• Δ = 0 → uma raiz real (dupla)\n• Δ < 0 → nenhuma raiz real (a parábola não toca o eixo x)\nAtalhos: **soma das raízes = −b/a** e **produto = c/a**.' },
      { tipo: 'texto', texto: '**Vértice** (ponto de máximo ou de mínimo)\nxv = −b ÷ 2a  e  yv = −Δ ÷ 4a (ou calcule f(xv))' },
      { tipo: 'exemplo', titulo: 'Exemplo completo', texto: 'f(x) = x² − 6x + 8 (a = 1, b = −6, c = 8)\nΔ = (−6)² − 4 · 1 · 8 = 36 − 32 = 4\nx = (6 ± 2) ÷ 2 → raízes **2 e 4** (soma 6 = −b/a ✓; produto 8 = c/a ✓)\nVértice: xv = 6 ÷ 2 = 3; yv = 9 − 18 + 8 = −1 → **mínimo = −1 em x = 3**' },
      { tipo: 'exemplo', titulo: 'Máximo em um contexto (EM13MAT503)', texto: 'O lucro de uma loja é L(x) = −x² + 40x − 300, em que x é a quantidade vendida.\na < 0 → tem máximo. xv = −40 ÷ (2 · −1) = **20 unidades**\nL(20) = −400 + 800 − 300 = **lucro máximo de 100**' },
      { tipo: 'exemplo', titulo: 'Área máxima', texto: 'Com 40 m de cerca, qual o maior cercado retangular possível?\nLados x e (20 − x) → Área A(x) = x(20 − x) = −x² + 20x\nxv = 10 → um quadrado de 10 m × 10 m → **100 m²**' },
      { tipo: 'texto', texto: '**Caso especial y = ax²**: y é proporcional ao **quadrado** de x. Dobrando x, y fica **4 vezes** maior. É o caso da área de um quadrado (A = l²) e da distância de queda livre (d = 5t², aproximadamente).' },

      { tipo: 'atencao', texto: 'Pegadinhas: (1) em xv = −b/2a, se b for negativo, −b fica **positivo**; (2) (−3)² = 9, mas −3² = −9: use parênteses ao substituir; (3) se a = 0, a função **não** é do 2º grau.' },
    ],
    resumo: [
      'Função: cada x tem um único y.',
      '1º grau f(x) = ax + b: reta; a = inclinação, b = corte no eixo y, raiz = −b/a.',
      'f(x) = ax (b = 0): proporcional, passa pela origem.',
      '2º grau f(x) = ax² + bx + c: parábola; a > 0 tem mínimo, a < 0 tem máximo.',
      'Δ = b² − 4ac; x = (−b ± √Δ)/2a; soma = −b/a; produto = c/a.',
      'Vértice: xv = −b/2a; yv = −Δ/4a. Use para problemas de máximo e mínimo.',
    ],
    fontes: [
      { nome: 'Khan Academy — Função (unidade de Matemática EM: Álgebra 1)', url: 'https://pt.khanacademy.org/math/em-mat-algebra/x34e9dd8107ca5eda:funcao' },
      { nome: 'Khan Academy — Mais sobre função afim (artigo)', url: 'https://pt.khanacademy.org/math/em-mat-algebra/x34e9dd8107ca5eda:funcao-afim/x34e9dd8107ca5eda:untitled-707/a/mais-sobre-funcao-afim' },
      { nome: 'Khan Academy — Calcule o vértice das funções quadráticas (prática)', url: 'https://pt.khanacademy.org/math/em-mat-algebra/x34e9dd8107ca5eda:funcao-quadratica/x34e9dd8107ca5eda:vertice-da-parabola/e/calcule-o-vertice-das-funcoes-quadraticas' },
    ],
  },
};
