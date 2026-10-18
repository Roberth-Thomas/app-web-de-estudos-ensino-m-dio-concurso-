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

  /* ======================= PORTUGUÊS — CLASSES DE PALAVRAS (descoberta guiada + testes práticos) ======================= */
  'portugues-1-0': {
    metodo: 'freire',
    prerequisitos: [
      { texto: '**Nenhum.** Este tópico começa do zero. Você só precisa saber ler uma frase e prestar atenção em como as palavras se comportam.' },
    ],
    bncc: [
      { codigo: 'EM13LP08', texto: 'Analisar elementos e aspectos da sintaxe do português, como a ordem dos constituintes da sentença (e os efeito que causam sua inversão), a estrutura dos sintagmas, as categorias sintáticas, os processos de coordenação e subordinação (e os efeitos de seus usos) e a sintaxe de concordância e de regência, de modo a potencializar os processos de compreensão e produção de textos.' },
      { codigo: 'EM13LP09', texto: 'Comparar o tratamento dado pela gramática tradicional e pelas gramáticas de uso contemporâneas em relação a diferentes tópicos gramaticais, de forma a perceber as diferenças de abordagem e o fenômeno da variação linguística e analisar motivações que levam ao predomínio do ensino da norma-padrão na escola.' },
    ],
    bnccBase: [
      { codigo: 'EF06LP04', texto: 'Analisar a função e as flexões de substantivos e adjetivos e de verbos nos modos Indicativo, Subjuntivo e Imperativo: afirmativo e negativo.' },
      { codigo: 'EF07LP09', texto: 'Identificar, em textos lidos ou de produção própria, advérbios e locuções adverbiais que ampliam o sentido do verbo núcleo da oração.' },
    ],
    blocos: [
      /* ---------- 1. Leitura do mundo ---------- */
      { tipo: 'etapa', etapa: 'leitura', texto: 'Você já sabe mais gramática do que imagina' },
      { tipo: 'texto', texto: 'Leia esta frase. As palavras principais **não existem**, foram inventadas:' },
      { tipo: 'exemplo', titulo: 'A frase inventada', texto: '**O glumpo trenzou a bica verdosa.**' },
      { tipo: 'pergunta', id: 'p1', texto: 'Mesmo sem saber o que essas palavras significam: qual delas é uma "coisa"? Qual é uma "ação"? Qual "descreve" algo? Como você descobriu?' },
      { tipo: 'revelar', texto: 'Quase todo mundo acerta: **glumpo** e **bica** são coisas, **trenzou** é uma ação e **verdosa** descreve a bica.\n\nVocê não usou o significado. Usou **pistas**: o "o" e o "a" antes das coisas; o final "-ou" de trenzou, igual a "andou" e "comprou"; e verdosa colada em bica, terminando em "-a" como ela.\n\nVocê já usa essas pistas todos os dias, sem perceber. **Classes de palavras** são só os **nomes** que a gramática dá a essas pistas.' },

      /* ---------- 2. Problematização ---------- */
      { tipo: 'etapa', etapa: 'problematizacao', texto: 'Por que dar nome ao que eu já sei?' },
      { tipo: 'texto', texto: 'Porque quase todas as regras da [[norma-padrão]] dependem da classe da palavra. Exemplo: quem escreve "ela está **meia** cansada" num e-mail de trabalho ou numa prova é julgado, embora todo mundo entenda. A regra por trás é simples (você vai ver no bloco 3), mas só dá para aplicá-la sabendo se "meio" ali é uma palavra que varia ou não.' },
      { tipo: 'texto', texto: 'Freire defendia que dominar a norma culta não é "falar certo" contra "falar errado". É ter **mais uma ferramenta**: a língua de prestígio é usada em concursos, leis, contratos e entrevistas de emprego. Quem não a domina fica de fora de lugares onde as decisões são tomadas. A sua fala do dia a dia continua valendo; a norma-padrão entra como uma variedade a mais, para quando a situação pedir.' },
      { tipo: 'pergunta', id: 'p2', texto: 'Você já ficou inseguro ao escrever algo formal (e-mail, currículo, prova, mensagem para chefe)? Em que tipo de coisa?' },

      /* ---------- 3. Sistematização ---------- */
      { tipo: 'etapa', etapa: 'sistematizacao', texto: 'As 10 classes, em 4 grupos' },
      { tipo: 'texto', texto: 'São 10 classes, mas você não precisa decorar todas de uma vez. Elas se organizam em **4 grupos**, e cada classe tem um **teste prático** para reconhecer.' },

      // ----- Grupo 1
      { tipo: 'titulo', texto: 'Grupo 1 — As três principais: substantivo, verbo e adjetivo' },
      { tipo: 'texto', texto: 'São as que você reconheceu na frase inventada. Com elas já dá para montar quase qualquer frase.' },
      { tipo: 'tabela', cabecalho: ['Classe', 'O que faz', 'Teste prático', 'Exemplos'], linhas: [
        ['**Substantivo**', 'dá nome a seres, coisas, lugares, sentimentos, ideias', 'dá para colocar **o, a, um, uma** antes', 'o professor, a cidade, a saudade, uma ideia'],
        ['**Verbo**', 'indica ação, estado ou fenômeno da natureza', 'muda com **eu / nós / ontem / amanhã**', 'estudo → estudei → estudaremos; ser, chover'],
        ['**Adjetivo**', 'dá uma característica ao substantivo', 'acompanha um substantivo e **muda junto** com ele', 'aluno dedicado → alunas dedicadas'],
      ] },
      { tipo: 'exemplo', titulo: 'Aplicando os testes', texto: '"A estudante **dedicada** passou no concurso."\n• **estudante**: cabe "a" antes → substantivo\n• **passou**: vira "passarei", "passamos" → verbo\n• **dedicada**: acompanha estudante e muda com ela (os estudantes dedicad**os**) → adjetivo\n• **concurso**: cabe "o" antes → substantivo' },
      { tipo: 'checagem', pergunta: 'Em "O professor exigente corrigiu as provas", a palavra "exigente" é:', opcoes: ['substantivo', 'verbo', 'adjetivo', 'advérbio'], correta: 2,
        explicacao: '"Exigente" dá uma característica ao substantivo "professor" e acompanha a mudança dele: "os professores exigent**es**". É **adjetivo**.',
        outraExplicacao: 'Faça os testes um por um. Cabe "o" antes, formando uma coisa sozinha? Não ("o exigente corrigiu" muda o sentido). Muda com eu/ontem? Não existe "eu exigento". Está colado em "professor", dizendo como ele é? **Sim**, então é adjetivo.' },

      // ----- Grupo 2
      { tipo: 'titulo', texto: 'Grupo 2 — As que acompanham ou substituem o substantivo: artigo, numeral e pronome' },
      { tipo: 'tabela', cabecalho: ['Classe', 'O que faz', 'Teste prático', 'Exemplos'], linhas: [
        ['**Artigo**', 'vem antes do substantivo, indicando se é algo específico ou qualquer um', 'são só 8 palavras: decore', 'definidos: **o, a, os, as** · indefinidos: **um, uma, uns, umas**'],
        ['**Numeral**', 'indica quantidade, ordem, fração ou multiplicação', 'responde "quantos?" ou "em que posição?"', 'dois, segundo, metade, dobro'],
        ['**Pronome**', 'substitui o substantivo ou o acompanha, indicando pessoa, posse, posição...', 'dá para **trocar por um nome**, ou indica de quem é / qual é', 'ela, nós, meu, este, alguém, que'],
      ] },
      { tipo: 'exemplo', titulo: 'Artigo definido × indefinido', texto: '"Me empresta **o** livro?" → um livro específico, que os dois sabem qual é.\n"Me empresta **um** livro?" → qualquer livro serve.' },
      { tipo: 'exemplo', titulo: 'O pronome evita repetir', texto: '"Maria passou no concurso. **Ela** estudou dois anos."\n"Ela" substitui "Maria": **pronome pessoal**.\n"**Meu** caderno" → indica posse: **pronome possessivo**.\n"**Este** caderno" → indica qual (o que está perto): **pronome demonstrativo**.' },
      { tipo: 'checagem', pergunta: 'Em "Ela comprou dois livros", as palavras "ela" e "dois" são, respectivamente:', opcoes: ['pronome e numeral', 'artigo e numeral', 'pronome e adjetivo', 'substantivo e numeral'], correta: 0,
        explicacao: '"Ela" substitui o nome de uma pessoa: **pronome**. "Dois" indica quantidade: **numeral**.',
        outraExplicacao: 'Teste do pronome: troque "ela" por um nome, como "Ana comprou dois livros". Funciona, então "ela" está no lugar de um nome. Teste do numeral: "dois" responde "quantos livros?".' },

      // ----- Grupo 3
      { tipo: 'titulo', texto: 'Grupo 3 — A que dá a circunstância: advérbio' },
      { tipo: 'texto', texto: 'O **advérbio** diz **quando, onde, como, quanto** ou se **sim/não** algo acontece. Ele se liga principalmente ao **verbo**, mas também pode intensificar um adjetivo ou outro advérbio. E tem uma característica importante: **o advérbio nunca muda de forma** (é [[invariável]]).' },
      { tipo: 'tabela', cabecalho: ['Pergunta ao verbo', 'Tipo de advérbio', 'Exemplo'], linhas: [
        ['Quando?', 'tempo', 'Chegou **ontem**. Volta **logo**.'],
        ['Onde?', 'lugar', 'Mora **aqui**. Ficou **lá**.'],
        ['Como?', 'modo', 'Explicou **bem**. Saiu **rapidamente**.'],
        ['Quanto? (intensidade)', 'intensidade', 'Estudou **muito**. Ficou **bastante** cansado.'],
        ['Sim ou não?', 'afirmação / negação', '**Não** desistiu. **Sim**, eu vou.'],
      ] },
      { tipo: 'texto', texto: '**Teste prático: adjetivo ou advérbio?** Pergunte de quem a palavra está falando:\n• Se fala de um **substantivo**, é adjetivo e **muda** junto: "prédio **alto**" → "prédios **altos**".\n• Se fala de um **verbo** ou de um adjetivo, é advérbio e **não muda**: "Ela fala **alto**" → "Elas falam **alto**".' },
      { tipo: 'checagem', pergunta: '"Os alunos chegaram cedo." A palavra "cedo" é:', opcoes: ['adjetivo', 'advérbio', 'substantivo', 'verbo'], correta: 1,
        explicacao: '"Cedo" responde "quando?" ao verbo "chegaram". É **advérbio de tempo**, e não muda: ninguém diz "chegaram cedos".',
        outraExplicacao: 'Repare que "cedo" não fala dos alunos (não é "alunos cedos"). Ele fala de **como foi a chegada**, ou seja, do verbo. Palavra que fala do verbo é advérbio.' },

      // ----- Grupo 4
      { tipo: 'titulo', texto: 'Grupo 4 — As que ligam (e a que expressa emoção): preposição, conjunção e interjeição' },
      { tipo: 'tabela', cabecalho: ['Classe', 'O que faz', 'Teste prático', 'Exemplos'], linhas: [
        ['**Preposição**', 'liga duas **palavras**, criando uma relação entre elas', 'liga pedaços de uma mesma ideia', 'copo **de** vidro, vou **a** pé, saí **sem** casaco'],
        ['**Conjunção**', 'liga duas **ideias** (orações) e diz qual a relação entre elas', 'tem um verbo antes e outro depois', 'Estudei, **mas** não passei. Saí **porque** choveu.'],
        ['**Interjeição**', 'expressa emoção ou apelo, sozinha', 'costuma vir com ponto de exclamação', '**Ufa!** **Nossa!** **Socorro!**'],
      ] },
      { tipo: 'texto', texto: 'As preposições se juntam a artigos: de + o = **do**, em + a = **na**, por + o = **pelo**. Quando a preposição **a** se junta ao artigo **a**, vira **à**: essa é a **crase**, que tem um tópico só para ela na fase 2.\n\nAs conjunções têm vários grupos de sentido (oposição, causa, condição...). Aqui basta reconhecer que elas ligam ideias; os grupos são estudados em **Coesão e coerência**, na fase 3.' },
      { tipo: 'checagem', pergunta: 'Em "Estudei, mas não entendi", a palavra "mas" é:', opcoes: ['preposição', 'conjunção', 'advérbio', 'interjeição'], correta: 1,
        explicacao: '"Mas" liga duas ideias completas, cada uma com seu verbo ("estudei" / "não entendi"), e mostra uma oposição entre elas. É **conjunção**.',
        outraExplicacao: 'Use o teste: tem verbo antes ("estudei") e verbo depois ("entendi")? Sim. Então "mas" está ligando duas ideias, e não duas palavras. Quem liga ideias é a conjunção; a preposição liga palavras ("copo **de** vidro").' },

      // ----- Visão geral
      { tipo: 'titulo', texto: 'Agora sim: as 10 juntas' },
      { tipo: 'tabela', cabecalho: ['Grupo', 'Classes', 'Mudam de forma?'], linhas: [
        ['1. Principais', 'substantivo, verbo, adjetivo', 'sim'],
        ['2. Acompanham o substantivo', 'artigo, numeral, pronome', 'sim'],
        ['3. Circunstância', 'advérbio', '**não**'],
        ['4. Ligam / emoção', 'preposição, conjunção, interjeição', '**não**'],
      ] },
      { tipo: 'texto', texto: 'As 6 primeiras são **variáveis**: mudam de forma (gênero, número, pessoa, tempo) — é a [[flexão]]. As 4 últimas são **invariáveis**. Guarde isso: é a chave das pegadinhas a seguir.' },

      // ----- A classe depende do uso
      { tipo: 'titulo', texto: 'Cuidado: a classe depende do uso na frase' },
      { tipo: 'texto', texto: 'A mesma palavra pode mudar de classe dependendo do papel que faz. Por isso, **nunca classifique uma palavra solta**: aplique os testes na frase.' },
      { tipo: 'exemplo', titulo: 'Mesma palavra, classes diferentes', texto: '"Vamos **jantar** às oito." → verbo (vira "jantamos", "jantei")\n"O **jantar** estava ótimo." → substantivo (tem "o" antes)\n\n"Um prédio **alto**." → adjetivo (fala do prédio)\n"Ela fala **alto**." → advérbio (fala do verbo)' },
      { tipo: 'checagem', pergunta: 'Em "O amanhã é incerto", a palavra "amanhã" é:', opcoes: ['advérbio de tempo', 'substantivo', 'adjetivo', 'verbo'], correta: 1,
        explicacao: 'Normalmente "amanhã" é advérbio ("volto amanhã"). Mas aqui tem o artigo "o" antes e funciona como o nome de uma coisa (o futuro). Virou **substantivo**.',
        outraExplicacao: 'Use o teste do substantivo: dá para colocar "o" antes? Na frase já está: "**o** amanhã". E ele é o assunto da frase: o que é incerto? O amanhã. Palavra com artigo, funcionando como nome, é substantivo.' },

      // ----- Pegadinhas
      { tipo: 'titulo', texto: 'As pegadinhas de prova (agora você entende o porquê)' },
      { tipo: 'texto', texto: 'Como o **advérbio não muda de forma**, palavras como **meio, bastante, muito, pouco** e **só** ficam fixas quando funcionam como advérbio. Quando acompanham um substantivo, elas mudam normalmente.' },
      { tipo: 'tabela', cabecalho: ['Acompanha substantivo (muda)', 'Funciona como advérbio (não muda)'], linhas: [
        ['Comi **meia** pizza.', 'Ela está **meio** cansada. (~~meia cansada~~)'],
        ['Havia **bastantes** candidatos.', 'Eles estavam **bastante** nervosos.'],
        ['Tenho **poucas** dúvidas.', 'Elas dormiram **pouco**.'],
      ] },
      { tipo: 'atencao', texto: '**Menos** é sempre invariável: "menos pessoas", "menos dúvidas". A forma ~~menas~~ não existe na norma-padrão.' },
      { tipo: 'checagem', pergunta: 'Qual frase segue a norma-padrão?', opcoes: ['Ela ficou meio preocupada.', 'Ela ficou meia preocupada.', 'Tinha menas gente na fila.', 'Os candidatos estavam bastantes nervosos.'], correta: 0,
        explicacao: '"Meio", ligado ao adjetivo "preocupada", funciona como advérbio (= um pouco) e **não muda**. As outras erram justamente aí: "meia" e "bastantes" mudaram quando deviam ficar fixas, e "menas" não existe.',
        outraExplicacao: 'Troque a palavra por "um pouco": "Ela ficou **um pouco** preocupada" faz sentido. Quando dá para trocar por "um pouco" ou "muito", é advérbio, e advérbio não muda. Então fica "meio", não "meia".' },

      /* ---------- 4. Ação ---------- */
      { tipo: 'etapa', etapa: 'acao', texto: 'Use nos seus textos' },
      { tipo: 'lista', itens: [
        '**Caça às classes:** pegue um parágrafo de algo que você escreveu (mensagem, e-mail, redação) e marque 3 substantivos, 3 verbos, 2 adjetivos e 1 advérbio. Use os testes.',
        '**Pegadinhas:** procure nos seus textos "meio", "bastante" e "menos". Estão de acordo com a regra?',
        '**Dúvida de verdade:** quando não souber a classe de uma palavra, consulte o VOLP da Academia Brasileira de Letras. Ele mostra a classe de cada palavra.',
      ] },
      { tipo: 'pergunta', id: 'p3', texto: 'Cole aqui o seu parágrafo com as classes marcadas, ou conte o que encontrou.' },

      /* ---------- 5. Reflexão ---------- */
      { tipo: 'etapa', etapa: 'reflexao', texto: 'O que mudou?' },
      { tipo: 'texto', texto: 'Volte à frase inventada: "O glumpo trenzou a bica verdosa". Agora você consegue dar o nome de cada pista: **o** e **a** são artigos, **glumpo** e **bica** são substantivos, **trenzou** é verbo e **verdosa** é adjetivo.' },
      { tipo: 'pergunta', id: 'p4', texto: 'Explique para alguém, com suas palavras, como descobrir se uma palavra é adjetivo ou advérbio. Qual dos testes práticos foi mais útil para você?' },
    ],
    resumo: [
      'São 10 classes em 4 grupos: principais, acompanham o substantivo, circunstância e ligam/emoção.',
      'Substantivo: cabe "o/a/um/uma" antes. Verbo: muda com eu/nós/ontem. Adjetivo: acompanha o substantivo e muda com ele.',
      'Pronome: dá para trocar por um nome. Numeral: responde "quantos?" ou "em que posição?".',
      'Advérbio: responde quando, onde, como, quanto ao verbo, e **não muda de forma**.',
      'Preposição liga palavras; conjunção liga ideias (tem verbo dos dois lados).',
      'A classe depende do uso na frase: "o jantar" × "vamos jantar".',
      'Pegadinhas: "meio cansada", "bastante nervosos", "menos pessoas".',
    ],
    fontes: [
      { nome: 'Academia Brasileira de Letras — VOLP (mostra a classe gramatical de cada palavra)', url: 'https://www.academia.org.br/nossa-lingua/busca-no-vocabulario' },
      { nome: 'gov.br — Manual de Redação da Presidência da República', url: 'https://www.gov.br/pt-br/servicos/consultar-o-manual-de-redacao-da-presidencia-da-republica' },
    ],
  },

  /* ======================= PORTUGUÊS — ACENTUAÇÃO (contraste + lógica do padrão + passo a passo) ======================= */
  'portugues-1-1': {
    metodo: 'freire',
    prerequisitos: [
      { texto: '**Separar uma palavra em sílabas** (ca-fé, ár-vo-re).', revisao: 'Fale a palavra devagar, batendo palmas: cada palma é uma sílaba. "Ca-ne-ta" = 3 palmas, 3 sílabas. Toda sílaba tem uma vogal no centro.' },
    ],
    bncc: [
      { codigo: 'EM13LP15', texto: 'Planejar, produzir, revisar, editar, reescrever e avaliar textos escritos e multissemióticos, considerando [...] a variedade linguística apropriada a esse contexto e o uso do conhecimento dos aspectos notacionais (ortografia padrão, pontuação adequada, mecanismos de concordância nominal e verbal, regência verbal etc.), sempre que o contexto o exigir.' },
    ],
    bnccBase: [
      { codigo: 'EF67LP32', texto: 'Escrever palavras com correção ortográfica, obedecendo as convenções da língua escrita.' },
      { codigo: 'EF69LP56', texto: 'Fazer uso consciente e reflexivo de regras e normas da norma-padrão em situações de fala e escrita nas quais ela deve ser usada.' },
    ],
    blocos: [
      /* ---------- 1. Leitura do mundo ---------- */
      { tipo: 'etapa', etapa: 'leitura', texto: 'Três palavras com as mesmas letras' },
      { tipo: 'exemplo', titulo: 'Leia em voz alta', texto: '**sábia** · **sabia** · **sabiá**' },
      { tipo: 'pergunta', id: 'p1', texto: 'Leia as três em voz alta. O que muda na pronúncia? E no significado? Que papel o acento está fazendo aí?' },
      { tipo: 'revelar', texto: 'As letras são as mesmas, mas a **sílaba mais forte** muda de lugar:\n• **SÁ**-bia → mulher sábia (adjetivo)\n• sa-**BI**-a → "eu sabia" (verbo saber)\n• sa-bi-**Á** → o passarinho\n\nO acento serve para isso: mostrar **onde fica a sílaba forte** quando ela não está no lugar "esperado". Sem ele, quem lê não saberia qual das três palavras você escreveu.' },

      /* ---------- 2. Problematização ---------- */
      { tipo: 'etapa', etapa: 'problematizacao', texto: 'Por que o português tem tantos acentos?' },
      { tipo: 'texto', texto: 'Muita gente acha que acentuação é uma lista enorme de regras para decorar. Não é. O acento existe para que **qualquer pessoa, de qualquer região, leia a palavra do mesmo jeito**, mesmo sem nunca tê-la ouvido. Ele é um **sinal de exceção**: aparece só quando a palavra foge do padrão de pronúncia.\n\nAs regras são oficiais: estão no **Acordo Ortográfico de 1990**, em vigor no Brasil pelo Decreto nº 6.583/2008 (Bases VIII a XI). E acento cai em toda prova de português de concurso.' },
      { tipo: 'pergunta', id: 'p2', texto: 'Quais palavras você costuma ficar em dúvida se têm acento ou não? Anote algumas: vamos testar no fim.' },

      /* ---------- 3. Sistematização ---------- */
      { tipo: 'etapa', etapa: 'sistematizacao', texto: 'A lógica por trás das regras, passo a passo' },

      // ----- Passo 1
      { tipo: 'titulo', texto: 'Passo 1 — Ache a sílaba forte' },
      { tipo: 'texto', texto: 'A sílaba forte se chama **sílaba tônica**. Truque para achar: **chame a palavra como se estivesse gritando por alguém de longe**. A sílaba que você estica é a tônica: "ca-**FÉÉÉ**!", "**CAAA**-sa!", "**LÂÂÂM**-pa-da!".\n\nDepois, conte de trás para frente onde ela está:' },
      { tipo: 'tabela', cabecalho: ['A tônica é a…', 'Nome', 'Exemplos'], linhas: [
        ['última sílaba', '**oxítona**', 'ca-**fé**, a-**mor**, ca-**qui**'],
        ['penúltima', '**paroxítona**', '**ca**-sa, **lá**-pis, **ú**-til'],
        ['antepenúltima', '**proparoxítona**', '**lâm**-pa-da, **mé**-di-co'],
      ] },
      { tipo: 'checagem', pergunta: 'A palavra "computador" é:', opcoes: ['oxítona', 'paroxítona', 'proparoxítona', 'monossílabo'], correta: 0,
        explicacao: 'com-pu-ta-**DOR**: a sílaba forte é a última. **Oxítona**.',
        outraExplicacao: 'Grite a palavra: "computa**DOOOR**!". Você estica o final. Sílaba forte no final = oxítona.' },

      // ----- Passo 2
      { tipo: 'titulo', texto: 'Passo 2 — A lógica do padrão (o segredo de tudo)' },
      { tipo: 'texto', texto: 'O português tem um **padrão** de pronúncia que depende de como a palavra **termina**. Quando a palavra segue o padrão, **não precisa de acento**: o leitor já pronuncia certo. O acento aparece só quando a palavra **foge** do padrão.' },
      { tipo: 'tabela', cabecalho: ['Se a palavra termina em…', 'O padrão é ser…', 'Seguem o padrão (sem acento)', 'Fogem do padrão (com acento)'], linhas: [
        ['**a, e, o** (com ou sem s), **em, ens**', 'paroxítona', 'casa, bote, livro, jovem, itens', 'sofá, café, avô, também, parabéns (são oxítonas)'],
        ['**i, u** (com ou sem s), **l, r, x, n, um, ã, ão**…', 'oxítona', 'caqui, urubu, papel, amor, atum, irmão', 'táxi, bônus, útil, açúcar, tórax, hífen, álbum, órfã, órgão (são paroxítonas)'],
        ['qualquer terminação', '(nunca é padrão)', '—', '**toda** proparoxítona: lâmpada, médico, público'],
      ] },
      { tipo: 'texto', texto: 'Leia a tabela devagar: **todas** as regras de acento das oxítonas, paroxítonas e proparoxítonas estão nela. Repare que as duas primeiras linhas são o "espelho" uma da outra: o que é acentuado numa é justamente o que não é acentuado na outra. (O **til** de "irmão" não é acento: ele só indica som nasal.)' },
      { tipo: 'checagem', pergunta: 'Por que "táxi" tem acento e "caqui" não?', opcoes: ['Porque táxi é palavra estrangeira', 'Porque palavras terminadas em i são paroxítonas por padrão', 'Porque palavras terminadas em i são oxítonas por padrão; táxi é paroxítona, foge do padrão', 'Porque caqui é proparoxítona'], correta: 2,
        explicacao: 'Terminação em **i**: o padrão é ser oxítona (ca-**qui**). "**Tá**-xi" tem a força na penúltima, então **foge do padrão** e precisa do acento para avisar o leitor.',
        outraExplicacao: 'Imagine que "taxi" não tivesse acento. Seguindo o padrão das palavras em i (como caqui, aqui, abacaxi), você leria "ta-**XI**". O acento existe para impedir essa leitura e mostrar que a força está no "tá".' },

      // ----- Passo 3
      { tipo: 'titulo', texto: 'Passo 3 — As 3 perguntas (o passo a passo para qualquer palavra)' },
      { tipo: 'lista', itens: [
        '**1. É proparoxítona?** → leva acento. Sempre. Fim.',
        '**2. É oxítona (ou monossílabo forte) terminada em a, e, o (+s), em, ens?** → leva acento: sofá, café, avô, também, pé, pó, três.',
        '**3. É paroxítona terminada em qualquer outra coisa (que não seja a, e, o, em, ens)?** → leva acento: útil, açúcar, táxi, vírus, álbum, órgão.',
        'Se respondeu "não" às três → **sem acento** (salvo os casos especiais do passo 4).',
      ] },
      { tipo: 'exemplo', titulo: 'Aplicando: "parabens" leva acento?', texto: '1º) Ache a tônica: pa-ra-**BENS** → oxítona.\n2º) É proparoxítona? Não.\n3º) É oxítona terminada em a, e, o, em, **ens**? **Sim** → acento: **parabéns**.' },
      { tipo: 'checagem', pergunta: 'Qual palavra está acentuada corretamente?', opcoes: ['ítem', 'jóvem', 'hífen', 'cajú'], correta: 2,
        explicacao: '**Hífen** é paroxítona (**HÍ**-fen) terminada em **n**: foge do padrão (palavras em n tendem a ser oxítonas), então leva acento. "Item" e "jovem" são paroxítonas em **em**, que é o padrão, então não têm acento. "Caju" é oxítona em u, também o padrão.',
        outraExplicacao: 'Passe cada uma pelas 3 perguntas. "Item": paroxítona terminada em "em" → não entra na pergunta 3 → sem acento. "Hífen": paroxítona terminada em "n" → entra na pergunta 3 → **com acento**.' },
      { tipo: 'atencao', texto: 'Pegadinha clássica: **hífen** tem acento (paroxítona em n), mas o plural **hifens** não tem (paroxítona em ens, o padrão). O mesmo vale para **pólen → polens**. Se você entendeu a lógica do padrão, isso deixa de ser "exceção" e passa a fazer sentido.' },

      // ----- Passo 4
      { tipo: 'titulo', texto: 'Passo 4 — Os casos especiais' },
      { tipo: 'texto', texto: 'Além da lógica do padrão, há poucos casos que você precisa conhecer:' },
      { tipo: 'tabela', cabecalho: ['Caso', 'Regra', 'Exemplos'], linhas: [
        ['**Ditongo no final** de paroxítona', 'leva acento', 'his-**tó**-ria, **sé**-rie, **á**-gua'],
        ['**i** e **u** fortes sozinhos na sílaba (hiato)', 'levam acento', 'sa-**í**-da, sa-**ú**-de, ba-**ú**, pa-**ís**'],
        ['…mas se vier **nh** depois, ou outra letra na mesma sílaba', 'sem acento', 'ra-i-nha, ju-iz, ra-iz'],
        ['**éi, éu, ói** abertos em oxítonas e monossílabos', 'levam acento', 'pa-**péis**, cha-**péu**, he-**rói**, **céu**'],
        ['…mas em **paroxítonas**, desde o Acordo de 1990', 'sem acento', 'i-**dei**-a, he-**roi**-co, ji-**boi**-a'],
      ] },
      { tipo: 'checagem', pergunta: 'Qual par está correto segundo o Acordo Ortográfico?', opcoes: ['idéia / herói', 'ideia / herói', 'ideia / heroi', 'idéia / heroi'], correta: 1,
        explicacao: '"Ideia" é paroxítona (i-**dei**-a): pelo Acordo, perdeu o acento. "Herói" é oxítona (he-**rói**): o acento continua.',
        outraExplicacao: 'Pergunte onde está o "éi"/"ói": na **última** sílaba (herói, papéis) o acento fica; na **penúltima** (ideia, heroico) ele caiu. Dica: "o herói é heroico" — mesma família, um com e outro sem acento.' },

      // ----- Passo 5
      { tipo: 'titulo', texto: 'Passo 5 — Acentos que diferenciam palavras' },
      { tipo: 'lista', itens: [
        '**pôde** (passado) × **pode** (presente): "Ontem ele não **pôde** vir; hoje ele **pode**."',
        '**pôr** (verbo) × **por** (preposição): "Vou **pôr** o livro **por** cima."',
        '**têm / vêm** (eles) × **tem / vem** (ele): "Ele **tem** um carro; eles **têm** dois." Derivados: ele **mantém**, eles **mantêm**.',
        'Caíram com o Acordo: ~~pára~~ → **para** (verbo), ~~pêlo~~ → **pelo**, ~~pêra~~ → **pera**, ~~vôo~~ → **voo**, ~~lêem~~ → **leem**, ~~lingüiça~~ → **linguiça** (o trema também acabou).',
      ] },
      { tipo: 'checagem', pergunta: 'Complete: "Os candidatos ___ até amanhã para entregar os documentos."', opcoes: ['tem', 'têm', 'teem', 'tém'], correta: 1,
        explicacao: '"Os candidatos" é plural, então o verbo vai para o plural: **têm**, com acento circunflexo. No singular seria "o candidato **tem**".',
        outraExplicacao: 'Troque por um verbo que mostra o plural sem acento: "Os candidatos **possuem** até amanhã". Se o sujeito pede "possuem" (plural), use **têm**. Se pediria "possui" (singular), use **tem**.' },

      /* ---------- 4. Ação ---------- */
      { tipo: 'etapa', etapa: 'acao', texto: 'Use nos seus textos' },
      { tipo: 'lista', itens: [
        '**Suas dúvidas:** volte às palavras que você anotou lá no começo e passe cada uma pelas 3 perguntas.',
        '**Revisão real:** pegue uma mensagem ou e-mail seu e confira todos os acentos usando o passo a passo.',
        '**Na dúvida, confirme:** o VOLP da Academia Brasileira de Letras mostra a grafia oficial de qualquer palavra.',
      ] },
      { tipo: 'pergunta', id: 'p3', texto: 'Escreva aqui as suas palavras de dúvida e o resultado: tem acento ou não, e por quê.' },

      /* ---------- 5. Reflexão ---------- */
      { tipo: 'etapa', etapa: 'reflexao', texto: 'O que mudou?' },
      { tipo: 'texto', texto: 'Volte ao começo: sábia, sabia, sabiá. Agora você sabe explicar: "sabia" segue o padrão (paroxítona em a), por isso não tem acento; "sábia" é proparoxítona; "sabiá" é oxítona em a. As duas que fogem do padrão ganham acento.' },
      { tipo: 'pergunta', id: 'p4', texto: 'Explique com suas palavras a "lógica do padrão". Ficou mais fácil do que decorar uma lista de regras?' },
    ],
    resumo: [
      'O acento marca a sílaba forte quando a palavra foge do padrão de pronúncia.',
      'Terminadas em a, e, o (+s), em, ens: padrão é paroxítona → oxítonas com essa terminação levam acento (café, também).',
      'Terminadas em i, u, l, r, x, n, um, ã, ão: padrão é oxítona → paroxítonas com essa terminação levam acento (táxi, útil).',
      'Proparoxítonas: todas acentuadas.',
      'i/u de hiato sozinhos na sílaba: saída, saúde (mas rainha, juiz).',
      'Acordo: ideia, heroico, voo, leem, linguiça, para (verbo) sem acento; herói, papéis com acento.',
      'Continuam: pôde/pode, pôr/por, têm/tem, vêm/vem.',
    ],
    fontes: [
      { nome: 'Planalto — Decreto nº 6.583/2008 (texto oficial do Acordo Ortográfico, Bases VIII a XI)', url: 'https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2008/decreto/d6583.htm' },
      { nome: 'Academia Brasileira de Letras — VOLP (tire a dúvida de qualquer palavra)', url: 'https://www.academia.org.br/nossa-lingua/busca-no-vocabulario' },
    ],
  },

  /* ======================= PORTUGUÊS — ORTOGRAFIA (família de palavras + regras curtas) ======================= */
  'portugues-1-2': {
    metodo: 'freire',
    prerequisitos: [
      { texto: '**Reconhecer substantivo, adjetivo e verbo** (tópico Classes de palavras).', revisao: 'Substantivo dá nome (a análise), adjetivo caracteriza (pessoa gentil), verbo indica ação e muda com o tempo (analisar, analisei). Várias regras de ortografia dependem disso: "viagem" (substantivo) × "viajem" (verbo).' },
    ],
    bncc: [
      { codigo: 'EM13LP15', texto: 'Planejar, produzir, revisar, editar, reescrever e avaliar textos escritos e multissemióticos, considerando [...] o uso do conhecimento dos aspectos notacionais (ortografia padrão, pontuação adequada, mecanismos de concordância nominal e verbal, regência verbal etc.), sempre que o contexto o exigir.' },
    ],
    bnccBase: [
      { codigo: 'EF67LP32', texto: 'Escrever palavras com correção ortográfica, obedecendo as convenções da língua escrita.' },
      { codigo: 'EF08LP04', texto: 'Utilizar, ao produzir texto, conhecimentos linguísticos e gramaticais: ortografia, regências e concordâncias nominal e verbal, modos e tempos verbais, pontuação etc.' },
    ],
    blocos: [
      /* ---------- 1. Leitura do mundo ---------- */
      { tipo: 'etapa', etapa: 'leitura', texto: 'Por que "analisar" tem S e "realizar" tem Z?' },
      { tipo: 'texto', texto: 'As duas palavras terminam com o mesmo som: "-izar". Mas uma se escreve com **s** e a outra com **z**. Observe estes pares:' },
      { tipo: 'tabela', cabecalho: ['Palavra de origem', 'Verbo'], linhas: [
        ['análi**s**e', 'anali**s**ar'],
        ['pesqui**s**a', 'pesqui**s**ar'],
        ['real', 'reali**z**ar'],
        ['útil', 'utili**z**ar'],
      ] },
      { tipo: 'pergunta', id: 'p1', texto: 'Olhando a tabela: qual é a pista que decide entre S e Z? Escreva o que você percebeu.' },
      { tipo: 'revelar', texto: 'A pista está na **palavra de origem**:\n• "análise" e "pesquisa" **já têm s**. O verbo só aproveita: analis-ar, pesquis-ar.\n• "real" e "útil" **não têm s nem z**. O verbo ganha o final **-izar** inteiro: real-izar, util-izar.\n\nIsso é a **pista da família**: palavras da mesma família costumam manter a mesma letra. Muitas dúvidas de ortografia se resolvem perguntando "de que palavra essa veio?".' },

      /* ---------- 2. Problematização ---------- */
      { tipo: 'etapa', etapa: 'problematizacao', texto: 'Por que não dá para "escrever como se fala"?' },
      { tipo: 'texto', texto: 'Porque o mesmo som pode ser escrito com letras diferentes. O som de "s", por exemplo, aparece em: **s**apo, ma**ss**a, **c**inema, a**ç**úcar, na**sc**er, pró**x**imo, e**xc**eção. A ortografia é uma **convenção**: uma escolha histórica, que leva em conta a origem das palavras e foi oficializada pelo **Acordo Ortográfico** e registrada no **VOLP** da Academia Brasileira de Letras.\n\nConvenção não é lógica pura, e por isso ninguém nasce sabendo. Mas também não é bagunça: existem **pistas**, e é com elas que se aprende. Num concurso, num currículo ou num e-mail de trabalho, erro de ortografia é o primeiro que salta aos olhos de quem lê.' },
      { tipo: 'pergunta', id: 'p2', texto: 'Quais palavras você costuma errar ou fica em dúvida na hora de escrever? Anote: elas vão para o seu "caderno de erros" no fim.' },

      /* ---------- 3. Sistematização ---------- */
      { tipo: 'etapa', etapa: 'sistematizacao', texto: 'As pistas, uma confusão de cada vez' },

      // ----- Pista 1: família
      { tipo: 'titulo', texto: 'Pista 1 — A família de palavras' },
      { tipo: 'texto', texto: 'Antes de qualquer regra, pergunte: **"qual é a palavra-mãe?"**. A letra dela geralmente passa para as filhas.' },
      { tipo: 'tabela', cabecalho: ['Palavra-mãe', 'Filhas (mesma letra)'], linhas: [
        ['ca**s**a', 'ca**s**inha, ca**s**ebre, ca**s**arão'],
        ['parali**s**ia', 'parali**s**ar, parali**s**ação'],
        ['pu**x**ar', 'pu**x**ão, pu**x**ada'],
        ['**ch**eio', 'en**ch**er, en**ch**ente'],
        ['vi**aj**ar', 'vi**aj**ante, vi**aj**ei, que eles vi**aj**em'],
      ] },
      { tipo: 'checagem', pergunta: 'Qual é a grafia correta?', opcoes: ['analizar', 'analisar', 'análizar', 'analissar'], correta: 1,
        explicacao: 'A palavra-mãe é **análise**, com s. O verbo mantém a letra: **analisar**.',
        outraExplicacao: 'Pergunte "de onde vem?". Analisar vem de análise. Se a mãe tem s, a filha também tem: anali-s-ar.' },

      // ----- Pista 2: S ou Z
      { tipo: 'titulo', texto: 'Pista 2 — S ou Z' },
      { tipo: 'tabela', cabecalho: ['Use', 'Quando', 'Exemplos'], linhas: [
        ['**-ês, -esa**', 'origem (nacionalidade, lugar) e títulos de nobreza', 'portugu**ês**, franc**esa**, burgu**ês**, princ**esa**, duqu**esa**'],
        ['**-ez, -eza**', 'substantivo abstrato que vem de um adjetivo', 'rápido → rapid**ez**; belo → bel**eza**; pobre → pobr**eza**'],
        ['**-oso, -osa**', 'adjetivos que indicam "cheio de"', 'gost**oso**, fam**osa**, cuidad**oso**'],
        ['**-isar**', 'a palavra-mãe já tem **s**', 'análise → anal**isar**; aviso → av**isar**'],
        ['**-izar**', 'a palavra-mãe **não** tem s', 'real → real**izar**; atual → atual**izar**'],
      ] },
      { tipo: 'exemplo', titulo: 'O truque do -ês / -ez', texto: 'Pergunte: a palavra é uma **qualidade** (dá para dizer "a ___ de alguém")? → -ez/-eza: a rapid**ez**, a bel**eza**.\nÉ **de onde a pessoa é** ou um **título**? → -ês/-esa: portugu**ês**, princ**esa**.' },
      { tipo: 'checagem', pergunta: 'Qual par está escrito corretamente?', opcoes: ['beleza / francesa', 'belesa / franceza', 'beleza / franceza', 'belesa / francesa'], correta: 0,
        explicacao: '**Beleza** é qualidade que vem de "belo" → -eza. **Francesa** indica origem → -esa.',
        outraExplicacao: 'Faça as perguntas: "a beleza de alguém" funciona? Sim → qualidade → z. "Ela é de onde?" → da França → origem → s.' },

      // ----- Pista 3: SS, Ç ou S
      { tipo: 'titulo', texto: 'Pista 3 — SS, Ç ou S? Olhe o verbo de origem' },
      { tipo: 'texto', texto: 'Muitos substantivos vêm de verbos, e o final do verbo indica a letra:' },
      { tipo: 'tabela', cabecalho: ['Verbo termina em', 'Substantivo com', 'Exemplos'], linhas: [
        ['-ceder', '**-cessão**', 'conceder → conce**ss**ão; ceder → ce**ss**ão'],
        ['-gredir', '**-gressão**', 'agredir → agre**ss**ão; progredir → progre**ss**ão'],
        ['-mitir', '**-missão**', 'permitir → permi**ss**ão; omitir → omi**ss**ão'],
        ['-ter', '**-tenção**', 'deter → deten**ç**ão; reter → reten**ç**ão'],
        ['-nder', '**-nsão**', 'pretender → preten**s**ão; compreender → compreen**s**ão'],
      ] },
      { tipo: 'checagem', pergunta: 'Qual é o substantivo do verbo "permitir"?', opcoes: ['permição', 'permissão', 'permisão', 'permitição'], correta: 1,
        explicacao: 'Verbos em **-mitir** formam substantivos em **-missão**: permitir → **permissão** (como omitir → omissão).',
        outraExplicacao: 'Lembre de uma palavra da mesma "turma" que você já sabe escrever: **missão**, emi**ss**ão. Permitir segue o mesmo modelo: permi**ss**ão.' },

      // ----- Pista 4: X ou CH
      { tipo: 'titulo', texto: 'Pista 4 — X ou CH' },
      { tipo: 'lista', itens: [
        'Depois de **ditongo** (duas vogais juntas na mesma sílaba), use **X**: ca**ix**a, pe**ix**e, fro**ux**o, ame**ix**a.',
        'Depois de **en-**, use **X**: en**x**ada, en**x**ugar, en**x**ame, en**x**ergar. Exceções: **encher** e **encharcar** (vêm de **ch**eio e **ch**arco: pista da família!).',
        'Depois de **me-**, use **X**: me**x**er, me**x**erica. Exceção: **mecha** (de cabelo).',
      ] },
      { tipo: 'checagem', pergunta: 'Qual palavra está escrita corretamente?', opcoes: ['enxente', 'enxer', 'encher', 'enchugar'], correta: 2,
        explicacao: '**Encher** é exceção da regra do "en-": vem de **cheio**, que tem ch. Por isso também é en**ch**ente. Já "enxugar" segue a regra: com x.',
        outraExplicacao: 'Use a pista da família antes da regra: encher → cheio (ch). Enchente → encher → cheio (ch). Quando não há palavra-mãe com ch, depois de "en-" vem x: enxugar, enxada.' },

      // ----- Pista 5: G ou J
      { tipo: 'titulo', texto: 'Pista 5 — G ou J' },
      { tipo: 'lista', itens: [
        'Substantivos terminados em **-agem, -igem, -ugem** levam **G**: gara**g**em, via**g**em, verti**g**em, ferru**g**em. Exceções: pa**j**em, lambu**j**em.',
        'Verbos terminados em **-jar** mantêm o **J** em todas as formas: via**j**ar → que eles via**j**em; arran**j**ar → que ele arran**j**e.',
      ] },
      { tipo: 'exemplo', titulo: 'A pegadinha mais famosa', texto: 'A **viagem** foi ótima. → substantivo (dá para pôr "a" antes) → com **G**\nEspero que eles **viajem** amanhã. → verbo viajar → com **J**' },
      { tipo: 'checagem', pergunta: 'Complete: "Espero que eles ___ bem e que a ___ seja ótima."', opcoes: ['viagem / viajem', 'viajem / viagem', 'viagem / viagem', 'viajem / viajem'], correta: 1,
        explicacao: '"Que eles **viajem**" é o verbo viajar → mantém o J. "A **viagem**" é substantivo terminado em -agem → G.',
        outraExplicacao: 'Teste do substantivo: cabe "a" antes? "**A** viagem" → substantivo → G. "Que eles ___" pede um verbo → viajar → J.' },

      // ----- Pista 6: hífen
      { tipo: 'titulo', texto: 'Pista 6 — Hífen com prefixos (Acordo de 1990)' },
      { tipo: 'texto', texto: 'Prefixo é o pedaço que vai no começo da palavra (micro-, anti-, auto-, super-, contra-...). A regra olha **onde o prefixo termina** e **como a palavra começa**:' },
      { tipo: 'tabela', cabecalho: ['Situação', 'Regra', 'Exemplos'], linhas: [
        ['Termina com a **mesma vogal** que começa a palavra', 'com hífen', 'micr**o-o**ndas, ant**i-i**nflamatório'],
        ['Vogais **diferentes**', 'junto', 'aut**oe**scola, infr**ae**strutura'],
        ['Prefixo em vogal + palavra com **r** ou **s**', 'junto, dobrando r/s', 'anti**rr**ugas, contra**ss**enso, mini**ss**aia'],
        ['Palavra começa com **h**', 'com hífen', 'anti-**h**igiênico, super-**h**omem'],
        ['Prefixos **ex-, vice-, pré-, pós-, pró-**', 'com hífen', 'ex-aluno, vice-presidente, pós-graduação'],
      ] },
      { tipo: 'texto', texto: 'Exceção importante: **co-** se junta sempre: coautor, cooperar, coordenar.' },
      { tipo: 'checagem', pergunta: 'Qual palavra está escrita corretamente?', opcoes: ['microondas', 'micro-ondas', 'auto-escola', 'anti-rugas'], correta: 1,
        explicacao: '"Micro" termina em **o** e "ondas" começa com **o**: vogais iguais → **hífen**. As outras erram: autoescola (vogais diferentes → junto) e antirrugas (r dobra).',
        outraExplicacao: 'Pense que duas vogais iguais coladas ficariam estranhas de ler ("microondas" → "micr-oon-das"). O hífen separa: micro-ondas.' },

      // ----- Pista 7: palavras que confundem
      { tipo: 'titulo', texto: 'Pista 7 — Palavras que confundem (as que mais caem)' },
      { tipo: 'tabela', cabecalho: ['Par', 'Como decidir'], linhas: [
        ['**há × a** (tempo)', '**há** = passado ("há dois anos" = faz dois anos); **a** = futuro ou distância ("daqui a dois dias", "a 5 km")'],
        ['**mal × mau**', '**mal** é o contrário de bem; **mau** é o contrário de bom ("mau humor", "passou mal")'],
        ['**mas × mais**', '**mas** = porém; **mais** = quantidade'],
        ['**senão × se não**', '**senão** = caso contrário / a não ser; **se não** = "caso não"'],
        ['**a fim de × afim**', '**a fim de** = para, com o objetivo de; **afim** = semelhante, com afinidade'],
        ['**onde × aonde**', '**onde** = lugar em que se está; **aonde** = para onde se vai ("aonde você vai?")'],
      ] },
      { tipo: 'tabela', cabecalho: ['Os porquês', 'Quando usar', 'Exemplo'], linhas: [
        ['**por que**', 'pergunta; ou quando dá para trocar por "pelo qual"', '**Por que** você faltou? / O motivo **por que** saí.'],
        ['**por quê**', 'no fim da frase (antes do ponto)', 'Você faltou **por quê**?'],
        ['**porque**', 'resposta, explicação (= pois)', 'Faltei **porque** estava doente.'],
        ['**porquê**', 'substantivo (com artigo antes)', 'Não sei **o porquê** da falta.'],
      ] },
      { tipo: 'checagem', pergunta: 'Complete: "Ele saiu ___ dez minutos e volta daqui ___ pouco."', opcoes: ['há / a', 'a / há', 'há / há', 'a / a'], correta: 0,
        explicacao: '"Saiu **há** dez minutos" → passado (= faz dez minutos). "Volta daqui **a** pouco" → futuro.',
        outraExplicacao: 'Troque por "faz": "Saiu **faz** dez minutos" funciona → use **há**. "Volta daqui faz pouco" não funciona → use **a**.' },

      { tipo: 'atencao', texto: 'Na dúvida que nenhuma pista resolve, **consulte o VOLP** da Academia Brasileira de Letras: é a lista oficial de como cada palavra se escreve.' },

      /* ---------- 4. Ação ---------- */
      { tipo: 'etapa', etapa: 'acao', texto: 'Monte o seu caderno de erros' },
      { tipo: 'lista', itens: [
        '**Caderno de erros:** pegue as palavras que você anotou no começo. Para cada uma, escreva a forma certa e **qual pista** resolve (família, -ês/-ez, verbo de origem...).',
        '**Revisão real:** releia uma mensagem ou e-mail seu procurando só ortografia. Use as pistas e, na dúvida, o VOLP.',
        '**Continue alimentando:** toda vez que errar uma palavra (aqui, numa prova, no trabalho), coloque no caderno com a pista. Releia o caderno nas revisões.',
      ] },
      { tipo: 'pergunta', id: 'p3', texto: 'Seu caderno de erros: escreva cada palavra certa e a pista que resolve.' },

      /* ---------- 5. Reflexão ---------- */
      { tipo: 'etapa', etapa: 'reflexao', texto: 'O que mudou?' },
      { tipo: 'texto', texto: 'Volte ao começo: analisar × realizar. Agora você sabe que não é sorte nem decoreba: a resposta está na família da palavra.' },
      { tipo: 'pergunta', id: 'p4', texto: 'Explique a "pista da família" com um exemplo que não está nesta página. Qual das pistas vai te ajudar mais no dia a dia?' },
    ],
    resumo: [
      'Pergunte "qual é a palavra-mãe?": a letra dela passa para as filhas (análise → analisar).',
      '-ês/-esa para origem e títulos; -ez/-eza para qualidades (rapidez, beleza); -oso/-osa com s.',
      '-isar se a palavra-mãe tem s; -izar se não tem (real → realizar).',
      'ceder → cessão; mitir → missão; ter → tenção; nder → nsão; gredir → gressão.',
      'X depois de ditongo, en- e me- (exceções: encher, encharcar, mecha).',
      'viagem (substantivo, G) × viajem (verbo viajar, J).',
      'Hífen: vogais iguais ou h → hífen; vogais diferentes → junto; r/s → dobra; co- sempre junto.',
      'há (passado) × a (futuro); mal × mau; por que / por quê / porque / porquê.',
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
