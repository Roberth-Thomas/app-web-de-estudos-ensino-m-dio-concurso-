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
   Dentro dos textos, **assim** vira negrito, ~~assim~~ marca uma forma errada
   (riscada) e \n vira quebra de linha.
   ========================================================= */
App.dados = App.dados || {};

App.dados.bnccUrl = 'https://basenacionalcomum.mec.gov.br/images/BNCC_EI_EF_110518_versaofinal_site.pdf';

App.dados.conteudos = {

  /* ======================= PORCENTAGEM (formato Paulo Freire) ======================= */
  'matematica-1-0': {
    metodo: 'freire',
    prerequisitos: [
      { texto: '**Multiplicar por um número com vírgula** (ex.: 0,35 × 80).', revisao: 'Faça a conta sem a vírgula: 35 × 80 = 2.800. Depois conte as casas depois da vírgula no número original (0,35 tem 2) e "ande" 2 casas da direita para a esquerda: 28,00 = **28**.' },
      { texto: '**Fração como divisão**: 25/100 significa 25 ÷ 100.', revisao: 'O traço da fração é uma divisão. 25/100 = 25 ÷ 100 = 0,25. Dividir por 100 é só andar com a vírgula 2 casas para a esquerda: 25 → 0,25; 7 → 0,07.' },
    ],
    bncc: [
      { codigo: 'EM13MAT104', texto: 'Interpretar taxas e índices de natureza socioeconômica (índice de desenvolvimento humano, taxas de inflação, entre outros), investigando os processos de cálculo desses números, para analisar criticamente a realidade e produzir argumentos.' },
      { codigo: 'EM13MAT203', texto: 'Aplicar conceitos matemáticos no planejamento, na execução e na análise de ações envolvendo a utilização de aplicativos e a criação de planilhas (para o controle de orçamento familiar, simuladores de cálculos de juros simples e compostos, entre outros), para tomar decisões.' },
    ],
    bnccBase: [
      { codigo: 'EF07MA02', texto: 'Problemas com porcentagens, como acréscimos e decréscimos simples, no contexto de educação financeira.' },
      { codigo: 'EF09MA05', texto: 'Problemas com porcentagens, com a ideia de aplicação de percentuais sucessivos e a determinação das taxas percentuais.' },
    ],
    blocos: [
      /* ---------- 1. Leitura do mundo ---------- */
      { tipo: 'etapa', etapa: 'leitura', texto: 'A espada e o anel' },
      { tipo: 'tirinha', titulo: 'Equipamento novo', quadros: [
        { cena: 'No quarto do Tito, jogando RPG.', fundo: 'quarto', falas: [{ quem: 'tito', texto: 'Achei uma espada: +20% de ataque! E um anel: +10%!', expressao: 'feliz' }] },
        { fundo: 'quarto', falas: [{ quem: 'lia', texto: 'Seu ataque é 100. Com os dois, vai pra quanto?', expressao: 'pensativo' }, { quem: 'tito', texto: '', expressao: 'neutro' }] },
        { fundo: 'quarto', falas: [{ quem: 'tito', texto: 'Fácil: 130!', expressao: 'feliz' }, { quem: 'pipoca', texto: 'Ou 132. Depende de quem programou o jogo.', tipo: 'pensamento' }] },
      ] },
      { tipo: 'pergunta', id: 'p1', texto: 'Antes de qualquer conta "certa": quem tem razão, o Tito (130) ou a Pipoca (132)? Por quê? Escreva o que você acha.' },
      { tipo: 'texto', texto: 'Guarde a sua resposta. Vamos voltar a ela no fim, e você vai ver que as duas respostas podem estar certas, dependendo de como o jogo faz a conta.' },

      /* ---------- 2. Problematização ---------- */
      { tipo: 'etapa', etapa: 'problematizacao', texto: 'Quem usa porcentagem para decidir por você?' },
      { tipo: 'texto', texto: 'Porcentagem é a língua de quem define preços, salários, juros e impostos. Quem não domina essa língua aceita o número que aparece na tela. Freire dizia que a leitura do mundo vem antes da leitura da palavra. Aqui, ler o mundo é perceber **quem ganha** com cada porcentagem.' },
      { tipo: 'exemplo', titulo: 'O "desconto" de Black Friday', texto: 'Um SSD custava **R$ 200** em setembro. Em outubro subiu para **R$ 250**. Na Black Friday aparece: "De R$ 250 por R$ 200: **20% OFF!**"\nO desconto anunciado é de 20%, mas o desconto real, comparando com setembro, é **0%**.' },
      { tipo: 'exemplo', titulo: 'O reajuste que parece aumento', texto: 'Seu salário teve **reajuste de 5%**, mas a [[inflação]] do ano foi de **6%**. Você ganhou mais reais, só que compra **menos coisas** do que antes. (Até o fim da página você vai saber calcular quanto.)' },
      { tipo: 'indicacao', obra: 'Calvin e Haroldo', autor: 'Bill Watterson', texto: 'Em várias tiras, Calvin apresenta ao pai "pesquisas de aprovação" sobre o desempenho dele **como pai**, como se ele fosse um político. Procure essas tiras nas coletâneas publicadas no Brasil e repare como porcentagens de pesquisa podem ser usadas para pressionar alguém.' },
      { tipo: 'pergunta', id: 'p2', texto: 'Lembre de uma situação sua com porcentagem: promoção, juros do cartão, reajuste, nota de prova, bateria do celular. Você conseguiu entender o número na hora?' },

      /* ---------- 3. Sistematização ---------- */
      { tipo: 'etapa', etapa: 'sistematizacao', texto: 'As ferramentas, uma de cada vez' },
      { tipo: 'titulo', texto: 'Passo 0 — O que é porcentagem' },
      { tipo: 'texto', texto: '"Por cento" quer dizer **por cem**: dividir algo em 100 partes iguais e pegar algumas. **25%** = 25 partes de 100 = 25/100 = **0,25** (um [[decimal]]).\nPense na barra de vida de um jogo: 100% é a barra cheia, 50% é metade, 25% é um quarto.' },
      { tipo: 'tabela', cabecalho: ['Porcentagem', 'Decimal', 'Fração', 'Barra de vida'], linhas: [
        ['100%', '1', 'o todo', 'cheia'], ['75%', '0,75', '3/4', '3 de 4 corações'],
        ['50%', '0,5', '1/2', 'metade'], ['25%', '0,25', '1/4', '1 de 4 corações'],
        ['10%', '0,1', '1/10', '1 de 10 pedaços'], ['1%', '0,01', '1/100', 'quase vazia'],
      ] },
      { tipo: 'checagem', pergunta: 'Quanto é 40% escrito como decimal?', opcoes: ['4,0', '0,4', '0,04', '40,0'], correta: 1,
        explicacao: '40% = 40/100 = 40 ÷ 100 = **0,4**. Dividir por 100 é andar com a vírgula 2 casas para a esquerda.',
        outraExplicacao: 'Pense em dinheiro: 40% de R$ 1,00 são 40 centavos, ou seja, R$ **0,40**.' },

      { tipo: 'titulo', texto: 'Ferramenta 1 — Calcular X% de um valor' },
      { tipo: 'texto', texto: '**Regra:** transforme a porcentagem em decimal e multiplique.\n**X% de V = (X ÷ 100) × V**' },
      { tipo: 'exemplo', titulo: 'Passo a passo: promoção de jogo', texto: 'Um jogo de **R$ 80** está com **35% de desconto**. Quanto você economiza?\n1º) 35% em decimal: 35 ÷ 100 = 0,35\n2º) Multiplique: 0,35 × 80 = **28**\n3º) Você economiza R$ 28 e paga 80 − 28 = **R$ 52**.' },
      { tipo: 'texto', texto: '**Atalho de cabeça**, montando com pedaços fáceis:' },
      { tipo: 'lista', itens: ['**10%**: divida por 10 (de 80 → 8).', '**5%**: metade de 10% (→ 4).', '**1%**: divida por 100 (→ 0,8).', '**50%**: metade (meia-entrada no museu!); **25%**: metade da metade.', 'Então 35% = 10% + 10% + 10% + 5% = 8 + 8 + 8 + 4 = **28** ✓'] },
      { tipo: 'checagem', pergunta: 'O ingresso de um museu custa R$ 60. Com 25% de desconto, quanto você paga?', opcoes: ['R$ 15', 'R$ 35', 'R$ 45', 'R$ 50'], correta: 2,
        explicacao: '25% de 60 = 0,25 × 60 = 15 de desconto. Você paga 60 − 15 = **R$ 45**.',
        outraExplicacao: '25% é um quarto. Divida 60 em 4 pedaços de 15 e tire um pedaço: sobram 3 pedaços = **45**. Cuidado: R$ 15 é o desconto, não o preço final.' },

      { tipo: 'titulo', texto: 'Ferramenta 2 — Que porcentagem A é de B?' },
      { tipo: 'texto', texto: '**Regra:** divida a parte pelo todo e multiplique por 100.\n**(parte ÷ todo) × 100**' },
      { tipo: 'exemplo', titulo: 'Passo a passo: 100% do jogo', texto: 'Num jogo de exploração há **72 baús** e você abriu **18**.\n1º) Parte ÷ todo: 18 ÷ 72 = 0,25\n2º) × 100: 0,25 × 100 = **25%**. Ainda faltam 75%.' },

      { tipo: 'titulo', texto: 'Ferramenta 3 — O fator: aumento e desconto numa conta só' },
      { tipo: 'texto', texto: 'Em vez de calcular a porcentagem e depois somar ou subtrair, multiplique direto pelo [[fator]]:\n• Aumento de i% → × **(1 + i/100)**. Por quê? Você fica com o valor inteiro (1) **mais** o pedaço do aumento.\n• Desconto de i% → × **(1 − i/100)**. Você fica com o valor inteiro **menos** o pedaço do desconto.' },
      { tipo: 'exemplo', titulo: 'Montando o PC', texto: 'Uma memória RAM custa **R$ 250**.\nSubiu 12%: fator 1,12 → 250 × 1,12 = **R$ 280**\nCom 30% de desconto: fator 0,70 → 250 × 0,70 = **R$ 175**' },
      { tipo: 'checagem', pergunta: 'Qual é o fator de um desconto de 15%?', opcoes: ['0,15', '1,15', '0,85', '0,015'], correta: 2,
        explicacao: 'Desconto → 1 − 0,15 = **0,85**. Você paga 85% do preço.',
        outraExplicacao: 'Se tiram 15 de cada 100 reais, sobram 85 de cada 100: 85% = **0,85**. O 0,15 é só o pedaço que sai, não o que você paga.' },

      { tipo: 'titulo', texto: 'Ferramenta 4 — Porcentagens seguidas se multiplicam' },
      { tipo: 'texto', texto: 'Agora dá para responder à tirinha do início. **Depende da regra do jogo:**\n• Se o jogo **soma** os bônus (20% + 10% = 30%): 100 × 1,30 = **130** (o Tito).\n• Se o jogo aplica um bônus **depois do outro**: 100 × 1,20 × 1,10 = **132** (a Pipoca).\nNa vida real (preços, juros, reajustes), porcentagens [[sucessivas]] funcionam do **segundo jeito**: os fatores se **multiplicam**.' },
      { tipo: 'exemplo', titulo: 'Pokémon: fraqueza dupla', texto: 'Nos jogos principais de Pokémon, um golpe "super efetivo" causa **dano ×2**, ou seja, +100%. Se o Pokémon é fraco a esse tipo nos **dois** tipos dele, o dano vira **×4** (2 × 2), e não ×3. Os multiplicadores se multiplicam.' },
      { tipo: 'exemplo', titulo: 'A placa de vídeo que sobe e desce', texto: 'Placa de **R$ 2.000**. Sobe 20% e depois cai 20%:\n2.000 × 1,20 × 0,80 = **R$ 1.920**. Ficou **4% mais barata**, e não igual. (1,20 × 0,80 = 0,96)\n\nPor quê? Os 20% de desconto foram calculados em cima de um valor **maior** (R$ 2.400), então tiraram mais do que tinham colocado.' },
      { tipo: 'checagem', pergunta: 'Um preço sobe 10% e depois sobe mais 10%. O aumento total foi de:', opcoes: ['20%', '21%', '11%', '100%'], correta: 1,
        explicacao: '1,10 × 1,10 = 1,21 → aumento de **21%**.',
        outraExplicacao: 'Teste com R$ 100: +10% → 110. Mais 10% **de 110** → +11 → 121. De 100 para 121 é **21%**. O segundo aumento foi em cima de um valor que já tinha crescido.' },

      { tipo: 'titulo', texto: 'Ferramenta 5 — Variação percentual: a base é o valor antigo' },
      { tipo: 'texto', texto: '**[[Variação percentual]] = (novo − antigo) ÷ antigo × 100**. A [[base]] é sempre o valor de antes.' },
      { tipo: 'exemplo', titulo: 'Streams de uma música', texto: 'Uma faixa foi de **40 mil** para **50 mil** streams: (50 − 40) ÷ 40 = **+25%**.\nSe cair de volta para 40 mil: (40 − 50) ÷ 50 = **−20%**.\nA mesma diferença (10 mil) dá porcentagens diferentes porque a **base mudou**.' },

      { tipo: 'titulo', texto: 'Ferramenta 6 — Descobrir o preço antes do aumento' },
      { tipo: 'exemplo', titulo: 'PC gamer', texto: 'Depois de um aumento de 25%, um PC gamer saiu por **R$ 5.000**. Quanto custava antes?\nO preço antigo × 1,25 = 5.000, então o preço antigo = 5.000 ÷ 1,25 = **R$ 4.000** (divida pelo fator).\n~~Tirar 25% de 5.000 = 3.750~~: está errado, porque os 25% eram em cima do preço **antigo**.' },
      { tipo: 'checagem', pergunta: 'Depois de um desconto de 20%, um fone saiu por R$ 160. Qual era o preço original?', opcoes: ['R$ 192', 'R$ 200', 'R$ 180', 'R$ 128'], correta: 1,
        explicacao: 'Fator do desconto: 0,80. Preço original = 160 ÷ 0,80 = **R$ 200**. Confira: 200 × 0,80 = 160 ✓',
        outraExplicacao: 'R$ 160 é o que **sobrou** depois de tirar 20%, ou seja, são 80% do preço. Se 80% valem 160, então 10% valem 20, e 100% valem **200**.' },

      { tipo: 'titulo', texto: 'Ferramenta 7 — Pontos percentuais × porcentagem' },
      { tipo: 'exemplo', titulo: 'Uma IA que melhorou', texto: 'Uma IA acertava **80%** das questões de um teste. A versão nova acerta **88%**.\n• Melhorou **8 [[pontos percentuais|ponto percentual]]** (88 − 80).\n• Em termos relativos, melhorou **10%** (8 ÷ 80).\nNotícias sobre desemprego, inflação e juros usam as duas formas, e às vezes escolhem a que parece maior.' },

      { tipo: 'titulo', texto: 'Voltando ao salário' },
      { tipo: 'exemplo', titulo: 'Reajuste de 5% com inflação de 6%', texto: '[[Poder de compra]] = 1,05 ÷ 1,06 ≈ **0,9906**.\nVocê perdeu cerca de **0,94%** de poder de compra, mesmo com "aumento".' },
      { tipo: 'atencao', texto: 'Na prova, a banca vai cobrar exatamente estas armadilhas: somar porcentagens seguidas, usar a base errada na variação e "tirar a porcentagem" para achar o valor original. Agora você sabe as três.' },

      /* ---------- 4. Ação ---------- */
      { tipo: 'etapa', etapa: 'acao', texto: 'Use na sua realidade' },
      { tipo: 'lista', itens: [
        '**Conta de luz:** pegue a última conta e a anterior e calcule a variação percentual do valor e do consumo (kWh). Subiu o preço, o uso, ou os dois?',
        '**Salário × inflação:** compare o último reajuste do seu salário (ou do salário mínimo) com o [[IPCA]] do mesmo período, que o IBGE divulga. Use a conta do "Voltando ao salário".',
        '**Lista de desejos:** escolha um jogo ou peça de hardware que você quer. Anote o preço hoje e confira o desconto **real** na próxima promoção.',
      ] },
      { tipo: 'pergunta', id: 'p3', texto: 'Anote aqui o que você calculou e o que descobriu.' },

      /* ---------- 5. Reflexão ---------- */
      { tipo: 'etapa', etapa: 'reflexao', texto: 'O que mudou?' },
      { tipo: 'texto', texto: 'Releia a sua resposta lá do começo: Tito ou Pipoca? Agora você consegue explicar por que os dois podem estar certos, e qual dos dois jeitos vale para preços e salários?' },
      { tipo: 'pergunta', id: 'p4', texto: 'Explique com suas palavras, como se fosse para um amigo, por que dois aumentos de 10% não dão 20%. Onde você já foi, ou poderia ser, enganado por uma porcentagem?' },
    ],
    resumo: [
      'X% = X/100. Para calcular, multiplique pelo decimal.',
      'Aumento: × (1 + i/100). Desconto: × (1 − i/100).',
      'Porcentagens seguidas se **multiplicam** (×2 e ×2 = ×4), nunca se somam.',
      'Variação percentual usa o valor **antigo** como base.',
      'Para achar o valor original, **divida** pelo fator.',
      'Pontos percentuais (diferença de taxas) ≠ variação percentual.',
      'Poder de compra = (1 + reajuste) ÷ (1 + inflação).',
    ],
    fontes: [
      { nome: 'IBGE — Inflação (o que é o IPCA e onde ver o índice oficial)', url: 'https://www.ibge.gov.br/explica/inflacao.php' },
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

  /* ======================= PORTUGUÊS — CLASSES DE PALAVRAS ======================= */
  'portugues-1-0': {
    bncc: [
      { codigo: 'EM13LP08', texto: 'Analisar elementos e aspectos da sintaxe do português, como a ordem dos constituintes da sentença (e os efeito que causam sua inversão), a estrutura dos sintagmas, as categorias sintáticas, os processos de coordenação e subordinação (e os efeitos de seus usos) e a sintaxe de concordância e de regência, de modo a potencializar os processos de compreensão e produção de textos.' },
      { codigo: 'EM13LP09', texto: 'Comparar o tratamento dado pela gramática tradicional e pelas gramáticas de uso contemporâneas em relação a diferentes tópicos gramaticais, de forma a perceber as diferenças de abordagem e o fenômeno da variação linguística e analisar motivações que levam ao predomínio do ensino da norma-padrão na escola.' },
    ],
    bnccBase: [
      { codigo: 'EF06LP04', texto: 'Analisar a função e as flexões de substantivos e adjetivos e de verbos nos modos Indicativo, Subjuntivo e Imperativo: afirmativo e negativo.' },
      { codigo: 'EF07LP09', texto: 'Identificar, em textos lidos ou de produção própria, advérbios e locuções adverbiais que ampliam o sentido do verbo núcleo da oração.' },
    ],
    blocos: [
      { tipo: 'texto', texto: 'A gramática tradicional divide as palavras em **10 classes**. Saber a classe de uma palavra é a base para entender concordância, regência, crase e pontuação, que são os assuntos mais cobrados em concurso.' },
      { tipo: 'tabela', cabecalho: ['Classe', 'O que faz', 'Exemplos'], linhas: [
        ['**Substantivo**', 'dá nome a seres, coisas, ideias', 'casa, Maria, saudade, justiça'],
        ['**Adjetivo**', 'caracteriza o substantivo', 'casa **antiga**, aluno **dedicado**'],
        ['**Artigo**', 'determina o substantivo (definido/indefinido)', 'o, a, os, as · um, uma'],
        ['**Numeral**', 'indica quantidade ou ordem', 'dois, segundo, metade, triplo'],
        ['**Pronome**', 'substitui ou acompanha o substantivo', 'ele, meu, este, alguém, que'],
        ['**Verbo**', 'indica ação, estado ou fenômeno; varia em tempo e pessoa', 'estudar, ser, chover'],
        ['**Advérbio**', 'modifica verbo, adjetivo ou outro advérbio (circunstância)', 'ontem, aqui, muito, não'],
        ['**Preposição**', 'liga palavras, criando relação entre elas', 'a, de, em, para, por, com'],
        ['**Conjunção**', 'liga orações ou termos de mesma função', 'e, mas, porque, quando, embora'],
        ['**Interjeição**', 'expressa emoção ou apelo', 'ah!, ufa!, socorro!'],
      ] },
      { tipo: 'lista', itens: [
        '**Variáveis** (mudam de forma: gênero, número, pessoa, tempo): substantivo, adjetivo, artigo, numeral, pronome e verbo.',
        '**Invariáveis** (não mudam de forma): advérbio, preposição, conjunção e interjeição.',
      ] },

      { tipo: 'titulo', texto: '1. A classe depende do uso na frase' },
      { tipo: 'texto', texto: 'A mesma palavra pode mudar de classe conforme a função. Por isso, nunca classifique uma palavra solta: olhe a frase.' },
      { tipo: 'exemplo', titulo: 'Exemplos', texto: '"O **jantar** estava ótimo." → substantivo (veio do verbo jantar)\n"Um prédio **alto**." → adjetivo (caracteriza prédio)\n"Ela fala **alto**." → advérbio (modifica o verbo falar)\n"Comprei **meia** dúzia." → numeral · "Ela está **meio** cansada." → advérbio (= um pouco)' },

      { tipo: 'titulo', texto: '2. Adjetivo × advérbio: a pegadinha da concordância' },
      { tipo: 'texto', texto: 'Como o **advérbio é invariável**, palavras como meio, bastante, muito, pouco e só **não variam** quando são advérbios. Quando acompanham um substantivo, elas variam normalmente.' },
      { tipo: 'exemplo', titulo: 'Compare', texto: '"Havia **bastantes** candidatos." → acompanha o substantivo: varia\n"Os candidatos estavam **bastante** nervosos." → modifica o adjetivo: invariável\n"Ela ficou **meio** preocupada." (e nunca "meia preocupada")\n"Há **menos** pessoas aqui." ("menas" não existe: menos é sempre invariável)' },

      { tipo: 'titulo', texto: '3. Preposição + artigo = contração' },
      { tipo: 'texto', texto: 'Preposições se juntam a artigos e pronomes: de + o = **do**, em + a = **na**, por + o = **pelo**, de + este = **deste**. A crase (à) é a junção da preposição **a** com o artigo **a**, e por isso só acontece antes de palavras femininas.' },

      { tipo: 'titulo', texto: '4. Conjunções: as mais cobradas' },
      { tipo: 'tabela', cabecalho: ['Sentido', 'Conjunções'], linhas: [
        ['Adição', 'e, nem, não só… mas também'],
        ['Oposição (adversativa)', 'mas, porém, contudo, todavia, entretanto, no entanto'],
        ['Alternância', 'ou… ou, ora… ora, quer… quer'],
        ['Conclusão', 'logo, portanto, por isso, pois (depois do verbo)'],
        ['Explicação', 'porque, pois (antes do verbo), que'],
        ['Concessão', 'embora, ainda que, mesmo que, conquanto'],
        ['Condição', 'se, caso, desde que, contanto que'],
      ] },
      { tipo: 'atencao', texto: 'Em prova, a pergunta costuma ser "a conjunção pode ser substituída por qual outra **sem alterar o sentido**?". Troque só por uma do **mesmo grupo**: "mas" ↔ "porém"; "embora" ↔ "ainda que". Lembre que "embora" pede o verbo no **subjuntivo** ("embora estivesse").' },
    ],
    resumo: [
      '10 classes: 6 variáveis (substantivo, adjetivo, artigo, numeral, pronome, verbo) e 4 invariáveis (advérbio, preposição, conjunção, interjeição).',
      'A classe depende da função na frase.',
      'Advérbio não varia: "meio cansada", "bastante nervosos", "menos pessoas".',
      'Crase = preposição a + artigo a.',
      'Ao trocar conjunções, mantenha o mesmo sentido (mesmo grupo).',
    ],
    fontes: [
      { nome: 'Academia Brasileira de Letras — VOLP (mostra a classe gramatical de cada palavra)', url: 'https://www.academia.org.br/nossa-lingua/busca-no-vocabulario' },
      { nome: 'gov.br — Manual de Redação da Presidência da República', url: 'https://www.gov.br/pt-br/servicos/consultar-o-manual-de-redacao-da-presidencia-da-republica' },
    ],
  },

  /* ======================= PORTUGUÊS — ACENTUAÇÃO ======================= */
  'portugues-1-1': {
    bncc: [
      { codigo: 'EM13LP15', texto: 'Planejar, produzir, revisar, editar, reescrever e avaliar textos escritos e multissemióticos, considerando [...] a variedade linguística apropriada a esse contexto e o uso do conhecimento dos aspectos notacionais (ortografia padrão, pontuação adequada, mecanismos de concordância nominal e verbal, regência verbal etc.), sempre que o contexto o exigir.' },
    ],
    bnccBase: [
      { codigo: 'EF67LP32', texto: 'Escrever palavras com correção ortográfica, obedecendo as convenções da língua escrita.' },
      { codigo: 'EF69LP56', texto: 'Fazer uso consciente e reflexivo de regras e normas da norma-padrão em situações de fala e escrita nas quais ela deve ser usada.' },
    ],
    blocos: [
      { tipo: 'texto', texto: 'As regras de acento seguem o **Acordo Ortográfico de 1990**, em vigor no Brasil pelo Decreto nº 6.583/2008 (Bases VIII a XI do Acordo). Tudo começa por achar a **sílaba tônica**, a mais forte da palavra:' },
      { tipo: 'tabela', cabecalho: ['Posição da tônica', 'Nome', 'Exemplos'], linhas: [
        ['última sílaba', '**oxítona**', 'ca-**fé**, a-mor, ur-u-**bu**'],
        ['penúltima', '**paroxítona**', '**ca**-sa, **lá**-pis, **ú**-til'],
        ['antepenúltima', '**proparoxítona**', '**lâm**-pa-da, **mé**-di-co'],
      ] },

      { tipo: 'titulo', texto: '1. As três regras principais' },
      { tipo: 'lista', itens: [
        '**Proparoxítonas: todas são acentuadas.** lâmpada, médico, público, árvore.',
        '**Oxítonas**: acentue as terminadas em **a(s), e(s), o(s), em, ens**: sofá, café, avô, também, parabéns. As terminadas em i e u não levam acento: caqui, urubu, tatu.',
        '**Monossílabos tônicos** terminados em **a(s), e(s), o(s)**: pá, pé, pó, três, nós.',
      ] },

      { tipo: 'titulo', texto: '2. Paroxítonas: o contrário das oxítonas' },
      { tipo: 'texto', texto: 'A maioria das palavras é paroxítona e **não** leva acento (casa, livro, item, jovem). Acentue as paroxítonas terminadas em:' },
      { tipo: 'tabela', cabecalho: ['Terminação', 'Exemplos'], linhas: [
        ['l, n, r, x, ps', 'útil, hífen, açúcar, tórax, bíceps'],
        ['ã(s), ão(s)', 'ímã, órfãs, órgão, bênção'],
        ['i(s), us', 'táxi, lápis, vírus, bônus'],
        ['um, uns', 'álbum, álbuns, fórum'],
        ['ditongo oral', 'história, série, água, jóquei'],
      ] },
      { tipo: 'atencao', texto: 'Pegadinha clássica: **hífen** tem acento (paroxítona terminada em n), mas o plural **hifens** não tem (paroxítona terminada em ens). O mesmo vale para **pólen → polens**.' },

      { tipo: 'titulo', texto: '3. Hiato com i e u' },
      { tipo: 'texto', texto: 'Acentue o **i** e o **u** tônicos que formam hiato e ficam **sozinhos na sílaba** (ou com s): sa-**í**-da, sa-**ú**-de, ba-**ú**, pa-**ís**, ju-**í**-zes.' },
      { tipo: 'lista', itens: [
        'Não se acentua se vier **nh** depois: ra-i-nha, mo-i-nho.',
        'Não se acentua se a sílaba tiver outra letra além de s: ju-iz, ra-iz, ca-ir.',
        'Pelo Acordo, paroxítonas com i/u tônico depois de ditongo perderam o acento: **feiura**, **baiuca**.',
      ] },

      { tipo: 'titulo', texto: '4. O que mudou com o Acordo' },
      { tipo: 'tabela', cabecalho: ['Regra', 'Antes', 'Agora'], linhas: [
        ['Ditongos abertos éi/ói em **paroxítonas** perderam o acento', 'idéia, heróico, jibóia', 'ideia, heroico, jiboia'],
        ['…mas nas **oxítonas e monossílabos** o acento continua', '—', 'papéis, herói, chapéu, dói, céu'],
        ['Hiatos **ee** e **oo** perderam o acento', 'crêem, lêem, vôo, enjôo', 'creem, leem, voo, enjoo'],
        ['Trema abolido (fica só em nomes estrangeiros)', 'lingüiça, freqüente', 'linguiça, frequente'],
        ['Acentos diferenciais caíram', 'pára (verbo), pêlo, pêra, pólo', 'para, pelo, pera, polo'],
      ] },

      { tipo: 'titulo', texto: '5. Acentos diferenciais que continuam' },
      { tipo: 'lista', itens: [
        '**pôde** (passado) × **pode** (presente): "Ontem ele não pôde vir; hoje ele pode."',
        '**pôr** (verbo) × **por** (preposição).',
        '**têm / vêm** (eles) × **tem / vem** (ele). Derivados: ele **contém**, eles **contêm**; ele **mantém**, eles **mantêm**.',
        'Facultativos: **fôrma** (molde) × forma; **dêmos** (subjuntivo) × demos.',
      ] },
    ],
    resumo: [
      'Proparoxítonas: todas acentuadas.',
      'Oxítonas: a(s), e(s), o(s), em, ens.',
      'Paroxítonas: l, n, r, x, ps, ã(s), ão(s), i(s), us, um, uns, ditongo. Nunca em a, e, o, em, ens.',
      'i/u de hiato sozinhos na sílaba: saída, saúde (mas rainha, juiz).',
      'Acordo: ideia, heroico, voo, creem, linguiça, para (verbo) sem acento.',
      'Continuam: pôde/pode, pôr/por, têm/tem, vêm/vem.',
    ],
    fontes: [
      { nome: 'Planalto — Decreto nº 6.583/2008 (texto oficial do Acordo Ortográfico, Bases VIII a XI)', url: 'https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2008/decreto/d6583.htm' },
      { nome: 'Academia Brasileira de Letras — VOLP (tire a dúvida de qualquer palavra)', url: 'https://www.academia.org.br/nossa-lingua/busca-no-vocabulario' },
    ],
  },

  /* ======================= PORTUGUÊS — ORTOGRAFIA ======================= */
  'portugues-1-2': {
    bncc: [
      { codigo: 'EM13LP15', texto: 'Planejar, produzir, revisar, editar, reescrever e avaliar textos escritos e multissemióticos, considerando [...] o uso do conhecimento dos aspectos notacionais (ortografia padrão, pontuação adequada, mecanismos de concordância nominal e verbal, regência verbal etc.), sempre que o contexto o exigir.' },
    ],
    bnccBase: [
      { codigo: 'EF67LP32', texto: 'Escrever palavras com correção ortográfica, obedecendo as convenções da língua escrita.' },
      { codigo: 'EF08LP04', texto: 'Utilizar, ao produzir texto, conhecimentos linguísticos e gramaticais: ortografia, regências e concordâncias nominal e verbal, modos e tempos verbais, pontuação etc.' },
    ],
    blocos: [
      { tipo: 'texto', texto: 'A grafia oficial das palavras é a do **VOLP** (Vocabulário Ortográfico da Língua Portuguesa), publicado pela Academia Brasileira de Letras de acordo com o Acordo Ortográfico. Na dúvida, **consulte o VOLP**. As regrinhas abaixo resolvem a maioria dos casos.' },

      { tipo: 'titulo', texto: '1. S ou Z?' },
      { tipo: 'lista', itens: [
        '**-ês / -esa** para origem e títulos: português, francesa, marquês, princesa.',
        '**-ez / -eza** para substantivos abstratos vindos de adjetivos: rápido → rapidez; belo → beleza; pobre → pobreza.',
        '**-isar** quando a palavra de origem já tem s: análise → analisar; pesquisa → pesquisar; aviso → avisar.',
        '**-izar** quando o sufixo é acrescentado: real → realizar; útil → utilizar; atual → atualizar.',
      ] },

      { tipo: 'titulo', texto: '2. X ou CH?' },
      { tipo: 'lista', itens: [
        'Depois de **ditongo**, use X: caixa, peixe, frouxo, ameixa.',
        'Depois de **en-**, use X: enxada, enxugar, enxergar. Exceções: **encher** e **encharcar** (vêm de cheio e charco).',
        'Depois de **me-**, use X: mexer, mexerica. Exceção: **mecha**.',
      ] },

      { tipo: 'titulo', texto: '3. G ou J?' },
      { tipo: 'lista', itens: [
        'Substantivos em **-agem, -igem, -ugem** levam G: garagem, viagem, vertigem, ferrugem. Exceções: pajem, lambujem.',
        'Verbos terminados em **-jar** mantêm o J em todas as formas: viajar → que eles **viajem**; arranjar → **arranje**.',
      ] },
      { tipo: 'exemplo', titulo: 'Pegadinha', texto: 'A **viagem** foi ótima. (substantivo, com G)\nEspero que eles **viajem** amanhã. (verbo viajar, com J)' },

      { tipo: 'titulo', texto: '4. SS, Ç ou S? Olhe o verbo de origem' },
      { tipo: 'tabela', cabecalho: ['Verbo termina em', 'Substantivo com', 'Exemplos'], linhas: [
        ['-ceder', '-cessão', 'conceder → concessão; ceder → cessão'],
        ['-gredir', '-gressão', 'agredir → agressão; progredir → progressão'],
        ['-mitir', '-missão', 'permitir → permissão; omitir → omissão'],
        ['-ter', '-tenção', 'deter → detenção; reter → retenção'],
        ['-nder', '-nsão', 'pretender → pretensão; compreender → compreensão'],
      ] },

      { tipo: 'titulo', texto: '5. Hífen com prefixos (Acordo de 1990)' },
      { tipo: 'tabela', cabecalho: ['Situação', 'Regra', 'Exemplos'], linhas: [
        ['Prefixo termina com a **mesma vogal** que inicia a palavra', 'com hífen', 'micro-ondas, anti-inflamatório, auto-observação'],
        ['Vogais **diferentes**', 'junto', 'autoescola, infraestrutura, extraescolar'],
        ['Prefixo em vogal + palavra com **r** ou **s**', 'junto, dobrando r/s', 'antirrugas, contrassenso, minissaia'],
        ['Palavra começa com **h**', 'com hífen', 'anti-higiênico, super-homem'],
        ['Prefixos **ex-, vice-, pré-, pós-, pró-**', 'com hífen', 'ex-aluno, vice-presidente, pós-graduação'],
      ] },
      { tipo: 'texto', texto: 'Exceção importante: **co-** se junta sempre: coautor, cooperar, coordenar.' },

      { tipo: 'titulo', texto: '6. Palavras que confundem' },
      { tipo: 'tabela', cabecalho: ['Par', 'Como saber'], linhas: [
        ['**mal × mau**', 'mal é o oposto de bem; mau é o oposto de bom ("mau humor", "passou mal")'],
        ['**há × a** (tempo)', 'há = passado ("há dois anos"); a = futuro ou distância ("daqui a dois dias", "a 5 km")'],
        ['**mas × mais**', 'mas = porém; mais = quantidade'],
        ['**senão × se não**', 'senão = caso contrário / a não ser; se não = "caso não"'],
        ['**a fim de × afim**', 'a fim de = para; afim = semelhante, com afinidade'],
        ['**onde × aonde**', 'onde = lugar em que se está; aonde = para onde se vai ("aonde você vai?")'],
      ] },
    ],
    resumo: [
      '-ês/-esa (origem, título) × -ez/-eza (substantivo abstrato).',
      '-isar se a base tem s; -izar se é sufixo.',
      'X depois de ditongo, en- e me- (exceções: encher, encharcar, mecha).',
      'viagem (substantivo) × viajem (verbo).',
      'ceder → cessão; mitir → missão; ter → tenção; nder → nsão.',
      'Hífen: vogais iguais ou h → hífen; vogais diferentes → junto; r/s → dobra.',
      'Na dúvida, consulte o VOLP da ABL.',
    ],
    fontes: [
      { nome: 'Academia Brasileira de Letras — VOLP (grafia oficial das palavras)', url: 'https://www.academia.org.br/nossa-lingua/busca-no-vocabulario' },
      { nome: 'Planalto — Decreto nº 6.583/2008 (Acordo Ortográfico; hífen nas Bases XV a XVII)', url: 'https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2008/decreto/d6583.htm' },
    ],
  },

  /* ======================= PORTUGUÊS — PONTUAÇÃO (formato Paulo Freire) ======================= */
  'portugues-1-3': {
    metodo: 'freire',
    prerequisitos: [
      { texto: 'Reconhecer o **[[verbo]]** de uma frase.', revisao: 'O verbo é a palavra que muda quando você muda o tempo ou a pessoa: "Eu **estudo**" → "Ontem eu **estudei**" → "Eles **estudam**". Em "Os alunos chegaram cedo", o verbo é **chegaram**.' },
      { texto: 'Achar o **[[sujeito]]**: quem faz ou de quem se fala.', revisao: 'Pergunte ao verbo "quem?". Em "Os alunos chegaram cedo": quem chegou? **Os alunos**. Esse é o sujeito.' },
      { texto: 'Achar o **[[complemento]]** do verbo.', revisao: 'Alguns verbos pedem um "o quê?" ou "a quem?". Em "Ela aprovou **o projeto**": aprovou o quê? **O projeto** é o complemento.' },
    ],
    bncc: [
      { codigo: 'EM13LP15', texto: 'Planejar, produzir, revisar, editar, reescrever e avaliar textos escritos e multissemióticos, considerando [...] o uso do conhecimento dos aspectos notacionais (ortografia padrão, pontuação adequada, mecanismos de concordância nominal e verbal, regência verbal etc.), sempre que o contexto o exigir.' },
      { codigo: 'EM13LP06', texto: 'Analisar efeitos de sentido decorrentes de usos expressivos da linguagem, da escolha de determinadas palavras ou expressões e da ordenação, combinação e contraposição de palavras, dentre outros, para ampliar as possibilidades de construção de sentidos e de uso crítico da língua.' },
    ],
    bnccBase: [
      { codigo: 'EF67LP33', texto: 'Pontuar textos adequadamente.' },
    ],
    blocos: [
      /* ---------- 1. Leitura do mundo ---------- */
      { tipo: 'etapa', etapa: 'leitura', texto: 'A mensagem' },
      { tipo: 'tirinha', titulo: 'Não espere', quadros: [
        { cena: 'Lia, atrasada, manda mensagem.', fundo: 'rua', falas: [{ quem: 'lia', texto: '"Tito, não espere."', expressao: 'neutro' }] },
        { cena: 'No ponto de ônibus...', fundo: 'ponto', falas: [{ quem: 'tito', texto: 'Ok... então eu vou embora.', expressao: 'surpreso' }] },
        { cena: 'Lia chega. O ponto está vazio.', fundo: 'ponto', falas: [{ quem: 'lia', texto: 'Era "não, espere"!!!', tipo: 'grito', expressao: 'bravo' }, { quem: 'pipoca', texto: 'A vírgula também não esperou.', tipo: 'pensamento' }] },
      ] },
      { tipo: 'pergunta', id: 'p1', texto: 'Explique com suas palavras: qual é a diferença entre "Não espere." e "Não, espere."? O que a vírgula mudou?' },
      { tipo: 'texto', texto: 'Repare: as palavras são **exatamente as mesmas**. Só a vírgula mudou, e com ela o significado virou o contrário. Pontuação não é enfeite nem "pausa para respirar": ela **organiza o sentido**.' },

      /* ---------- 2. Problematização ---------- */
      { tipo: 'etapa', etapa: 'problematizacao', texto: 'Quem perde quando a vírgula some?' },
      { tipo: 'texto', texto: 'Em conversa de WhatsApp, o erro vira piada. Mas em **contratos, leis, editais e documentos oficiais**, uma vírgula pode decidir quem tem direito e quem fica de fora. Por isso o serviço público tem até um manual oficial de redação, e por isso a banca de concurso adora cobrar vírgula.' },
      { tipo: 'exemplo', titulo: 'Uma regra de órgão público (exemplo inventado)', texto: '**Versão A:** "Os servidores, que têm mais de 10 anos de serviço, receberão o adicional."\n**Versão B:** "Os servidores que têm mais de 10 anos de serviço receberão o adicional."\n\nNa versão A, as vírgulas dizem que **todos** os servidores têm mais de 10 anos, e **todos** recebem. Na versão B, **só** quem tem mais de 10 anos recebe. Duas vírgulas mudam quem ganha dinheiro público.' },
      { tipo: 'indicacao', obra: 'Mafalda', autor: 'Quino', texto: 'Nas tiras da Mafalda, a pontuação dos balões (as perguntas, as exclamações, as reticências) carrega boa parte da ironia: uma pergunta "inocente" da Mafalda costuma ser, na verdade, uma crítica. Leia algumas tiras na coletânea **Toda Mafalda** prestando atenção só na pontuação.' },
      { tipo: 'pergunta', id: 'p2', texto: 'Lembre de uma mensagem, sua ou de alguém, que foi mal entendida por causa da pontuação (ou da falta dela). O que aconteceu?' },

      /* ---------- 3. Sistematização ---------- */
      { tipo: 'etapa', etapa: 'sistematizacao', texto: 'As regras, uma de cada vez' },

      { tipo: 'titulo', texto: 'Passo 1 — A regra de ouro: o que a vírgula NÃO separa' },
      { tipo: 'texto', texto: 'Toda frase tem um "esqueleto": **[[sujeito]] + [[verbo]] + [[complemento]]**. A vírgula **nunca** quebra esse esqueleto.' },
      { tipo: 'lista', itens: [
        'O sujeito do verbo: ~~"Os candidatos aprovados, serão convocados."~~ → "Os candidatos aprovados serão convocados."',
        'O verbo do complemento: ~~"O diretor aprovou, o projeto."~~ → "O diretor aprovou o projeto."',
        'O nome do seu complemento: ~~"A entrega, dos documentos foi ontem."~~ → "A entrega dos documentos foi ontem."',
      ] },
      { tipo: 'atencao', texto: 'Por maior que seja o sujeito, ele não se separa do verbo: "**Todos os candidatos que entregaram os documentos dentro do prazo** serão convocados." (sem vírgula antes de "serão"). A vontade de "respirar" ali é a pegadinha.' },
      { tipo: 'checagem', pergunta: 'Qual frase está pontuada corretamente?', opcoes: ['Os moradores do bairro, reclamaram da obra.', 'Os moradores do bairro reclamaram da obra.', 'Os moradores, do bairro reclamaram da obra.', 'Os moradores do bairro reclamaram, da obra.'], correta: 1,
        explicacao: '"Os moradores do bairro" é o sujeito, "reclamaram" é o verbo e "da obra" é o complemento. Nenhuma vírgula pode separar esse esqueleto.',
        outraExplicacao: 'Tente ler perguntando ao verbo: **quem** reclamou? "Os moradores do bairro", e tudo isso fica junto do verbo. Reclamou **de quê**? "Da obra", que também fica colado. Não sobra lugar para vírgula.' },

      { tipo: 'titulo', texto: 'Passo 2 — Quando a vírgula é obrigatória' },
      { tipo: 'texto', texto: 'Se o esqueleto não se separa, onde entra a vírgula? Em tudo o que **interrompe** ou **foi deslocado** do esqueleto, e nas listas:' },
      { tipo: 'tabela', cabecalho: ['Uso', 'Exemplo'], linhas: [
        ['Itens de uma **enumeração**', 'Comprei SSD, memória, fonte e gabinete.'],
        ['[[Vocativo]] (quem é chamado)', '**Tito**, me espera!'],
        ['[[Aposto]] explicativo', 'Zelda, **a princesa de Hyrule**, dá nome à série.'],
        ['[[Adjunto adverbial]] deslocado (longo)', '**Depois de três horas de partida**, o time venceu.'],
        ['Antes de **mas, porém, contudo, pois** (explicativo)', 'Estudou muito, **mas** não passou.'],
        ['[[Conjunção]] deslocada, entre vírgulas', 'Ele estudou; não foi, **porém**, aprovado.'],
        ['[[Oração]] adverbial **antes** da principal', '**Quando chegar**, me avise.'],
        ['Verbo omitido ([[zeugma]])', 'Eu prefiro RPG; ela, luta.'],
      ] },
      { tipo: 'checagem', pergunta: 'Em "Pipoca traga a almofada", falta uma vírgula. Onde, e por quê?', opcoes: ['Depois de "traga", para separar o verbo', 'Depois de "Pipoca", porque é um vocativo', 'Antes de "almofada", para separar o complemento', 'Não falta vírgula nenhuma'], correta: 1,
        explicacao: '"Pipoca" é o nome de quem está sendo chamado: um **vocativo**. Fica "Pipoca, traga a almofada." O vocativo sempre vem separado por vírgula.',
        outraExplicacao: 'Sem a vírgula, parece que alguém está **contando** que a Pipoca traz a almofada. Com a vírgula, é um **pedido** feito à Pipoca. A vírgula do vocativo marca quem está ouvindo.' },

      { tipo: 'titulo', texto: 'Passo 3 — A vírgula que muda o sentido' },
      { tipo: 'texto', texto: 'É a regra do exemplo do órgão público. Com orações que começam por **que / o qual**, a vírgula decide se a informação vale para todos ou só para alguns:\n• **Com** vírgulas → oração [[explicativa]]: vale para **todos**.\n• **Sem** vírgulas → oração [[restritiva]]: vale só para **uma parte**.' },
      { tipo: 'exemplo', titulo: 'Compare', texto: '"Os jogadores, **que treinaram**, venceram o torneio."\n→ **todos** os jogadores treinaram, e todos venceram.\n\n"Os jogadores **que treinaram** venceram o torneio."\n→ **só** os que treinaram venceram; os outros, não.' },
      { tipo: 'checagem', pergunta: '"Os funcionários que fizeram o curso foram promovidos." Pela pontuação, entende-se que:', opcoes: ['todos os funcionários fizeram o curso e foram promovidos', 'apenas os funcionários que fizeram o curso foram promovidos', 'nenhum funcionário foi promovido', 'a frase tem erro de pontuação'], correta: 1,
        explicacao: 'Sem vírgulas, a oração "que fizeram o curso" é **restritiva**: separa só um grupo de funcionários. Só esse grupo foi promovido.',
        outraExplicacao: 'Imagine um filtro: "que fizeram o curso" **filtra** os funcionários. Quem passou pelo filtro foi promovido. Se a oração viesse entre vírgulas, seria só um comentário sobre todos, e não um filtro.' },

      { tipo: 'titulo', texto: 'Passo 4 — Vírgula antes de "e"?' },
      { tipo: 'texto', texto: 'Em geral, **não**. Mas use quando:\n• os **sujeitos forem diferentes**: "O pai trabalhava, e a mãe estudava à noite";\n• o "e" tiver sentido de **oposição** (= mas): "Estudou, e não passou";\n• o "e" se **repetir** para dar ênfase: "E corre, e pula, e grita".' },

      { tipo: 'titulo', texto: 'Passo 5 — Os outros sinais' },
      { tipo: 'tabela', cabecalho: ['Sinal', 'Para que serve', 'Exemplo'], linhas: [
        ['**;** ponto e vírgula', 'separar partes longas ou que já têm vírgulas; itens de listas e leis', 'Uns jogam de manhã; outros, à noite.'],
        ['**:** dois-pontos', 'anunciar enumeração, citação ou explicação', 'Só faltava uma coisa: coragem.'],
        ['**—** travessão', 'fala em diálogo; destacar uma intercalação', 'O resultado — para surpresa geral — saiu ontem.'],
        ['**( )** parênteses', 'informação acessória', 'A CF/88 (Constituição Cidadã) ampliou direitos.'],
        ['**" "** aspas', 'citação literal, ironia, termo estrangeiro', 'Ele chamou o atraso de "detalhe".'],
        ['**...** reticências', 'interrupção, hesitação, suspense', 'Eu ia dizer que... deixa pra lá.'],
      ] },
      { tipo: 'texto', texto: 'Nos quadrinhos, a pontuação ganha ajuda visual: letras maiores ou em negrito para o grito, balão tremido para o medo, balão de nuvem para o pensamento. Repare nisso nas tirinhas deste app.' },

      /* ---------- 4. Ação ---------- */
      { tipo: 'etapa', etapa: 'acao', texto: 'Use na sua realidade' },
      { tipo: 'lista', itens: [
        '**Suas mensagens:** pegue 3 mensagens longas que você mandou esta semana e pontue de novo, seguindo os passos 1 a 4.',
        '**Um texto oficial:** abra um edital de concurso de nível médio e procure 3 vírgulas. Diga qual regra da tabela cada uma segue.',
        '**Sua redação:** na próxima redação de sábado, use a checklist de revisão e confira só a pontuação.',
      ] },
      { tipo: 'pergunta', id: 'p3', texto: 'Cole aqui uma frase sua, antes e depois de corrigir a pontuação, e diga qual regra usou.' },

      /* ---------- 5. Reflexão ---------- */
      { tipo: 'etapa', etapa: 'reflexao', texto: 'O que mudou?' },
      { tipo: 'texto', texto: 'Volte à tirinha do início. Agora você sabe o nome da regra: em "Não, espere", a vírgula separa a resposta ("não") do pedido ("espere").' },
      { tipo: 'pergunta', id: 'p4', texto: 'Explique para um amigo, com suas palavras, a "regra de ouro" da vírgula. Você pontua diferente no WhatsApp e num texto formal? Por quê?' },
    ],
    resumo: [
      'Nunca separe sujeito-verbo, verbo-complemento ou nome-complemento.',
      'Vírgula obrigatória: vocativo, aposto, enumeração, conjunção deslocada.',
      'Adjunto adverbial e oração adverbial deslocados: use vírgula.',
      'Com vírgula = explicativa (todos); sem vírgula = restritiva (só alguns).',
      'Vírgula antes de "e" só com sujeitos diferentes, oposição ou repetição.',
      'Ponto e vírgula separa partes longas; dois-pontos anunciam.',
    ],
    fontes: [
      { nome: 'gov.br — Manual de Redação da Presidência da República (inclui pontuação na redação oficial)', url: 'https://www.gov.br/pt-br/servicos/consultar-o-manual-de-redacao-da-presidencia-da-republica' },
      { nome: 'Academia Brasileira de Letras — VOLP', url: 'https://www.academia.org.br/nossa-lingua/busca-no-vocabulario' },
    ],
  },
};
