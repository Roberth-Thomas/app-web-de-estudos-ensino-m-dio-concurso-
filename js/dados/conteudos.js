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
      { codigo: 'EF07MA02', texto: 'Resolver e elaborar problemas que envolvam porcentagens, como os que lidam com acréscimos e decréscimos simples, utilizando estratégias pessoais, cálculo mental e calculadora, no contexto de educação financeira, entre outros.' },
      { codigo: 'EF09MA05', texto: 'Resolver e elaborar problemas que envolvam porcentagens, com a ideia de aplicação de percentuais sucessivos e a determinação das taxas percentuais, preferencialmente com o uso de tecnologias digitais, no contexto da educação financeira.' },
    ],
    blocos: [
      /* ---------- 1. Leitura do mundo ---------- */
      { tipo: 'etapa', etapa: 'leitura', texto: 'A espada e o anel' },
      { tipo: 'exemplo', titulo: 'A espada e o anel', texto: 'Num RPG, o ataque do seu personagem é **100**. Você encontra uma espada que dá **+20% de ataque** e um anel que dá **+10%**.\nCom os dois equipados, o ataque vai para quanto?\n• Um amigo responde na hora: **130**.\n• Outro diz: **132**, mas que "depende de quem programou o jogo".' },
      { tipo: 'pergunta', id: 'p1', texto: 'Antes de qualquer conta "certa": quem tem razão, o amigo do 130 ou o do 132? Por quê? Escreva o que você acha.' },
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
      { tipo: 'texto', texto: 'Agora dá para responder à pergunta do início. **Depende da regra do jogo:**\n• Se o jogo **soma** os bônus (20% + 10% = 30%): 100 × 1,30 = **130** (o primeiro amigo).\n• Se o jogo aplica um bônus **depois do outro**: 100 × 1,20 × 1,10 = **132** (o segundo amigo).\nNa vida real (preços, juros, reajustes), porcentagens [[sucessivas]] funcionam do **segundo jeito**: os fatores se **multiplicam**.' },
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
      { tipo: 'texto', texto: 'Releia a sua resposta lá do começo: 130 ou 132? Agora você consegue explicar por que os dois podem estar certos, e qual dos dois jeitos vale para preços e salários?' },
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
    metodo: 'freire',
    prerequisitos: [
      { texto: '**Fração como divisão**: 3/4 quer dizer 3 ÷ 4.', revisao: 'O traço da fração é uma divisão. 3/4 = 3 ÷ 4 = 0,75. E dá para simplificar dividindo em cima e embaixo pelo mesmo número: 12/18 → dividindo os dois por 6 → 2/3.' },
      { texto: '**Converter unidades** (horas em minutos, quilos em gramas).', revisao: '1 hora = 60 minutos; 1 kg = 1.000 g; 1 km = 1.000 m. Para passar de hora para minuto, multiplique por 60: 2 h = 120 min.' },
    ],
    bncc: [
      { codigo: 'EM13MAT314', texto: 'Resolver e elaborar problemas que envolvem grandezas determinadas pela razão ou pelo produto de outras (velocidade, densidade demográfica, energia elétrica etc.).' },
    ],
    bnccBase: [
      { codigo: 'EF07MA09', texto: 'Utilizar, na resolução de problemas, a associação entre razão e fração, como a fração 2/3 para expressar a razão de duas partes de uma grandeza para três partes da mesma ou três partes de outra grandeza.' },
      { codigo: 'EF09MA07', texto: 'Resolver problemas que envolvam a razão entre duas grandezas de espécies diferentes, como velocidade e densidade demográfica.' },
    ],
    blocos: [
      /* ---------- 1. Leitura do mundo ---------- */
      { tipo: 'etapa', etapa: 'leitura', texto: 'Você compara coisas o tempo todo' },
      { tipo: 'texto', texto: 'Três situações comuns:' },
      { tipo: 'lista', itens: [
        'O rótulo do suco concentrado diz: "misture **1 parte** de suco para **4 partes** de água".',
        'No mercado, o pacote de 500 g de café custa R$ 12, e o de 1 kg custa R$ 22.',
        'Você coloca uma foto do celular como papel de parede do monitor e ela fica **esticada**, com as pessoas mais gordas.',
      ] },
      { tipo: 'pergunta', id: 'p1', texto: 'Se você quiser fazer o dobro de suco, quanto de cada coisa usa? Qual pacote de café sai mais barato? E por que a foto ficou esticada? Escreva o que acha antes de continuar.' },
      { tipo: 'revelar', texto: 'As três perguntas têm a mesma ideia por trás: **comparar uma quantidade com outra por divisão**.\n• **Suco:** 1 para 4. Para o dobro, 2 de suco para 8 de água. A comparação (1 para 4) não muda: é uma **proporção**.\n• **Café:** não adianta olhar só o preço. Compare o **preço por quilo**: 500 g por R$ 12 dá R$ 24 o quilo; o pacote de 1 kg sai por R$ 22. O grande é mais barato.\n• **Foto:** a foto do celular em pé é "mais alta que larga"; a tela do monitor é **16:9** (16 de largura para 9 de altura). Para caber, o computador esticou a foto e quebrou a proporção dela.\n\nEsse "comparar por divisão" tem nome: **razão**. É o assunto deste tópico.' },

      /* ---------- 2. Problematização ---------- */
      { tipo: 'etapa', etapa: 'problematizacao', texto: 'Um número sozinho não diz nada' },
      { tipo: 'texto', texto: '"O ônibus estava com 60 pessoas." É muito? Depende: num micro-ônibus de 20 lugares é um absurdo; num ônibus articulado de 150 lugares, sobra espaço. "A cidade teve 300 assaltos no ano." É violenta? Depende de quantos habitantes ela tem.\n\nNúmero solto engana. Quem compara **em relação a quê** enxerga o que está acontecendo, e quem não compara aceita a manchete do jeito que ela vem. É por isso que índices oficiais (densidade, velocidade, preço por quilo, casos por 100 mil habitantes) são todos **razões**.' },
      { tipo: 'pergunta', id: 'p2', texto: 'Lembre de uma vez em que um número te impressionou (num preço, numa notícia, numa promoção). Comparado com o quê ele faria mais sentido?' },

      /* ---------- 3. Sistematização ---------- */
      { tipo: 'etapa', etapa: 'sistematizacao', texto: 'Razão, proporção e divisão justa' },

      { tipo: 'titulo', texto: 'Passo 1 — Razão: comparar dividindo' },
      { tipo: 'texto', texto: '**Razão** de a para b é a divisão **a/b** (com b diferente de zero). Lê-se "a está para b". A **ordem importa**: a razão de suco para água (1/4) não é a mesma de água para suco (4/1).' },
      { tipo: 'exemplo', titulo: 'Parte com parte, ou parte com o todo?', texto: 'Uma equipe tem **12 homens** e **18 mulheres** (30 pessoas).\n• Homens para mulheres: 12/18 = **2/3** ("2 para 3"). Parte com parte.\n• Homens para o total: 12/30 = **2/5**. Parte com o todo.\nAs duas estão certas, mas respondem perguntas diferentes. A banca adora trocar uma pela outra.' },
      { tipo: 'checagem', pergunta: 'Numa turma há 8 aprovados e 12 reprovados. Qual é a razão entre aprovados e o total de alunos?', opcoes: ['8/12', '2/3', '2/5', '12/20'], correta: 2,
        explicacao: 'O total é 8 + 12 = **20**. Aprovados para o total: 8/20 = **2/5** (dividindo os dois por 4). 8/12 (= 2/3) seria aprovados para reprovados, parte com parte.',
        outraExplicacao: 'Leia a pergunta procurando "o total". Quando aparece "total", o número de baixo é a soma de todos: 20. Em cima ficam só os aprovados: 8/20, que simplifica para 2/5.' },
      { tipo: 'atencao', texto: 'Antes de dividir, ponha tudo **na mesma unidade**. A razão entre 30 minutos e 2 horas é 30/120 = **1/4**, e não 30/2.' },

      { tipo: 'titulo', texto: 'Passo 2 — Razões com nome próprio' },
      { tipo: 'texto', texto: 'Muitas medidas do dia a dia são razões entre grandezas **diferentes**, e por isso têm unidade com "por":' },
      { tipo: 'tabela', cabecalho: ['Razão', 'Conta', 'Unidade', 'Exemplo'], linhas: [
        ['Preço por unidade', 'preço ÷ quantidade', 'R$/kg, R$/L', 'café: R$ 12 ÷ 0,5 kg = R$ 24/kg'],
        ['Velocidade média', 'distância ÷ tempo', 'km/h', '360 km em 4 h = 90 km/h'],
        ['Consumo', 'distância ÷ combustível', 'km/L', '420 km com 35 L = 12 km/L'],
        ['Densidade demográfica', 'habitantes ÷ área', 'hab/km²', '1.200.000 hab em 400 km² = 3.000 hab/km²'],
        ['Escala', 'medida no mapa ÷ medida real', 'sem unidade', '1:50.000'],
      ] },
      { tipo: 'checagem', pergunta: 'O detergente A tem 500 mL e custa R$ 2,50. O B tem 750 mL e custa R$ 3,30. Qual é mais barato por mililitro?', opcoes: ['O A, porque custa menos', 'O B, porque sai por R$ 0,0044 o mL contra R$ 0,005 do A', 'Os dois custam o mesmo por mL', 'Não dá para comparar volumes diferentes'], correta: 1,
        explicacao: 'Preço por mL: A = 2,50 ÷ 500 = **R$ 0,005**; B = 3,30 ÷ 750 = **R$ 0,0044**. O B é mais barato por mL, mesmo custando mais no total.',
        outraExplicacao: 'Compare quanto daria 1.500 mL de cada (o mesmo volume): A precisaria de 3 frascos = R$ 7,50; B precisaria de 2 frascos = R$ 6,60. O B sai mais barato.' },

      { tipo: 'titulo', texto: 'Passo 3 — Proporção: duas razões iguais' },
      { tipo: 'texto', texto: '**Proporção** é uma igualdade entre duas razões: **a/b = c/d**. O suco é o exemplo: 1/4 = 2/8 = 3/12 (as receitas mudam de tamanho, mas o "gosto" é o mesmo).\n\nToda proporção tem a **propriedade fundamental**: o produto dos meios é igual ao produto dos extremos, **a · d = b · c**. É a famosa "multiplicação cruzada". Ela funciona porque, se multiplicarmos os dois lados de a/b = c/d por b e por d, as frações somem e sobra a · d = c · b.' },
      { tipo: 'exemplo', titulo: 'Passo a passo: achar o valor que falta', texto: 'O suco é 1 para 4. Quantos litros de água para 3 litros de suco?\n1/4 = 3/x\n1 · x = 4 · 3\n**x = 12 litros** de água.' },
      { tipo: 'checagem', pergunta: 'Na proporção x/15 = 4/6, quanto vale x?', opcoes: ['6', '10', '12', '22,5'], correta: 1,
        explicacao: 'Multiplicação cruzada: 6 · x = 15 · 4 → 6x = 60 → **x = 10**. Confira: 10/15 = 2/3 e 4/6 = 2/3 ✓',
        outraExplicacao: 'Simplifique o lado conhecido: 4/6 = 2/3. Agora pense: x/15 tem que valer 2/3. De 3 para 15, multiplicou por 5. Então x = 2 × 5 = **10**.' },
      { tipo: 'exemplo', titulo: 'A tela 16:9', texto: 'Um monitor Full HD tem 1920 × 1080 pixels. 1920/1080, simplificando por 120, dá **16/9**. Por isso ele é "16:9". Uma imagem de 1280 × 720 também é 16:9 (1280/720 = 16/9) e cabe na tela sem esticar. Uma foto em pé, de 1080 × 1920, tem a razão invertida: para caber, precisa de bordas pretas ou fica esticada.' },

      { tipo: 'titulo', texto: 'Passo 4 — Divisão em partes proporcionais' },
      { tipo: 'texto', texto: 'É a pergunta "como dividir de forma justa?": lucro entre sócios conforme o que cada um investiu, um prêmio conforme as horas trabalhadas. Na divisão **diretamente proporcional**, quem tem mais "partes" recebe mais.\n**Método:** some as partes, descubra quanto vale uma parte e multiplique.' },
      { tipo: 'exemplo', titulo: 'Passo a passo: dois sócios', texto: 'Ana investiu R$ 2 mil e Beto, R$ 3 mil, num negócio que deu R$ 900 de lucro. Dividindo na razão 2 : 3:\n1º) Total de partes: 2 + 3 = 5\n2º) Uma parte: 900 ÷ 5 = 180\n3º) Ana: 2 × 180 = **R$ 360**; Beto: 3 × 180 = **R$ 540**. (Confira: 360 + 540 = 900 ✓)' },
      { tipo: 'checagem', pergunta: 'Um prêmio de R$ 1.200 será dividido entre três pessoas na proporção 1 : 2 : 3. Quanto recebe a que tem 3 partes?', opcoes: ['R$ 400', 'R$ 500', 'R$ 600', 'R$ 900'], correta: 2,
        explicacao: 'Total de partes: 1 + 2 + 3 = 6. Uma parte: 1.200 ÷ 6 = 200. Quem tem 3 partes: 3 × 200 = **R$ 600**.',
        outraExplicacao: 'Imagine o prêmio cortado em 6 fatias iguais de R$ 200. As três pessoas pegam 1, 2 e 3 fatias. Três fatias = R$ 600. (E 200 + 400 + 600 = 1.200 ✓)' },
      { tipo: 'texto', texto: 'Na divisão **inversamente proporcional**, quem tem o número **menor** recebe mais (por exemplo, quem faltou menos dias). O truque é usar os **inversos**.' },
      { tipo: 'exemplo', titulo: 'Passo a passo: inversamente proporcional', texto: 'Dividir 260 em partes inversamente proporcionais a 2 e 3.\n1º) Inversos: 1/2 e 1/3. Multiplique os dois por 6 para sumir com as frações: **3 e 2**.\n2º) Agora é direta: 3 + 2 = 5 partes; uma parte = 260 ÷ 5 = 52.\n3º) Quem tinha o 2 recebe 3 × 52 = **156**; quem tinha o 3 recebe 2 × 52 = **104**.' },

      /* ---------- 4. Ação ---------- */
      { tipo: 'etapa', etapa: 'acao', texto: 'Use no mercado e na tela' },
      { tipo: 'lista', itens: [
        '**Preço por quilo:** na próxima compra, escolha um produto com dois tamanhos e calcule o preço por kg ou por litro de cada. (Muitos mercados já mostram esse valor na etiqueta: confira se a sua conta bate.)',
        '**Sua tela:** veja a resolução do seu celular e do seu monitor (nas configurações de tela) e simplifique a razão largura/altura. Dá 16:9, 20:9 ou outra?',
        '**Divisão justa:** pense numa conta dividida em grupo (um churrasco em que cada um levou uma quantidade de gente) e faça a divisão proporcional.',
      ] },
      { tipo: 'pergunta', id: 'p3', texto: 'Anote aqui o que você comparou e qual opção saiu mais vantajosa.' },

      /* ---------- 5. Reflexão ---------- */
      { tipo: 'etapa', etapa: 'reflexao', texto: 'O que mudou?' },
      { tipo: 'texto', texto: 'Volte às três situações do começo. O suco é uma **proporção** (1 para 4 continua 1 para 4 em qualquer quantidade), o café se decide pelo **preço por quilo** (uma razão) e a foto esticou porque a **razão** dela não era a da tela. E o número solto do ônibus lotado só faz sentido quando vira razão: pessoas por lugar.' },
      { tipo: 'pergunta', id: 'p4', texto: 'Explique para alguém, com um exemplo seu, a diferença entre razão "parte com parte" e "parte com o todo". Onde um número solto já te enganou?' },
    ],
    resumo: [
      'Razão = comparação por divisão (a/b). A ordem importa.',
      'Diferencie parte/parte (homens/mulheres) de parte/todo (homens/total).',
      'Antes de dividir, deixe as grandezas na mesma unidade.',
      'Preço por unidade, velocidade, consumo, densidade e escala são razões.',
      'Proporção: a/b = c/d → a · d = b · c (multiplicação cruzada).',
      'Partes diretamente proporcionais: some as partes, ache uma parte e multiplique. Inversamente: use os inversos.',
    ],
    fontes: [
      { nome: 'Khan Academy — Pré-álgebra (unidade Razões e taxas)', url: 'https://pt.khanacademy.org/math/pre-algebra' },
      { nome: 'Khan Academy — Resolução de proporções (vídeo)', url: 'https://pt.khanacademy.org/math/pre-algebra/xb4832e56:proportional-relationships/xb4832e56:writing-solving-proportions/v/find-an-unknown-in-a-proportion' },
    ],
  },

  /* ======================= REGRA DE TRÊS ======================= */
  'matematica-1-2': {
    metodo: 'freire',
    prerequisitos: [
      { texto: '**Proporção e multiplicação cruzada** (tópico anterior).', revisao: 'Se a/b = c/d, então a · d = b · c. Exemplo: 5/32 = 8/x → 5 · x = 32 · 8 → 5x = 256 → x = 51,2.' },
      { texto: '**Resolver uma equação simples** do tipo 4x = 60.', revisao: 'Para achar o x, desfaça a multiplicação dividindo os dois lados pelo mesmo número: 4x = 60 → x = 60 ÷ 4 = 15.' },
    ],
    bncc: [
      { codigo: 'EM13MAT314', texto: 'Resolver e elaborar problemas que envolvem grandezas determinadas pela razão ou pelo produto de outras (velocidade, densidade demográfica, energia elétrica etc.).' },
      { codigo: 'EM13MAT401', texto: 'Converter representações algébricas de funções polinomiais de 1º grau em representações geométricas no plano cartesiano, distinguindo os casos nos quais o comportamento é proporcional, recorrendo ou não a softwares ou aplicativos de álgebra e geometria dinâmica.' },
    ],
    bnccBase: [
      { codigo: 'EF07MA17', texto: 'Resolver e elaborar problemas que envolvam variação de proporcionalidade direta e de proporcionalidade inversa entre duas grandezas.' },
      { codigo: 'EF09MA08', texto: 'Resolver e elaborar problemas que envolvam relações de proporcionalidade direta e inversa entre duas ou mais grandezas, inclusive escalas, divisão em partes proporcionais e taxa de variação.' },
    ],
    blocos: [
      /* ---------- 1. Leitura do mundo ---------- */
      { tipo: 'etapa', etapa: 'leitura', texto: 'A receita, a pizza e os pintores' },
      { tipo: 'texto', texto: 'Responda de cabeça, sem fazer conta no papel:' },
      { tipo: 'lista', itens: [
        '**1.** Uma receita de bolo para 4 pessoas usa 2 xícaras de farinha. Para 8 pessoas, quanto de farinha?',
        '**2.** Um pintor pinta uma sala em 6 horas. Dois pintores, no mesmo ritmo, pintam em quanto tempo?',
        '**3.** Com 10 anos, uma criança tinha 1,40 m. Com 20 anos, vai ter 2,80 m?',
      ] },
      { tipo: 'pergunta', id: 'p1', texto: 'Escreva as suas três respostas. Em qual delas "dobrar" uma coisa dobrou a outra? Em qual fez a outra cair pela metade? E em qual a pergunta nem faz sentido?' },
      { tipo: 'revelar', texto: '• **Bolo:** 4 xícaras. Dobrou a quantidade de pessoas, dobrou a farinha: as grandezas andam **juntas** (diretamente proporcionais).\n• **Pintores:** 3 horas. Dobrou o número de pintores, o tempo caiu **pela metade**: uma sobe, a outra desce na mesma proporção (inversamente proporcionais).\n• **Altura:** não! Ninguém cresce na mesma proporção da idade. Essas grandezas **não são proporcionais**, e nenhuma conta de proporção serve.\n\nA **regra de três** é só um jeito organizado de fazer as duas primeiras contas. O difícil não é a conta: é decidir **se** a relação é direta, inversa ou se não existe.' },

      /* ---------- 2. Problematização ---------- */
      { tipo: 'etapa', etapa: 'problematizacao', texto: 'Por que tanta gente erra a regra de três?' },
      { tipo: 'texto', texto: 'Porque muita gente aprendeu a regra de três como **receita automática**: "monta o X e multiplica cruzado". Funciona nos problemas diretos e dá resposta errada nos inversos, sem a pessoa perceber. E aplicada onde não há proporção (idade e altura, lado e área), dá respostas absurdas com cara de certas.\n\nA BNCC, inclusive, pede que no 6º ano a porcentagem seja ensinada **sem** usar a regra de três, para primeiro se entender a ideia de proporção. Aqui vamos fazer assim: primeiro entender a relação, depois usar o atalho.' },
      { tipo: 'pergunta', id: 'p2', texto: 'No seu dia a dia, onde você já usou (ou poderia usar) uma regra de três? Pense em receita, combustível, tempo de viagem, preço.' },

      /* ---------- 3. Sistematização ---------- */
      { tipo: 'etapa', etapa: 'sistematizacao', texto: 'Primeiro a pergunta, depois a conta' },

      { tipo: 'titulo', texto: 'Passo 1 — A pergunta que decide tudo' },
      { tipo: 'texto', texto: 'Antes de qualquer conta, pergunte: **"se eu dobrar esta grandeza, a outra dobra, cai pela metade ou nenhuma das duas?"**' },
      { tipo: 'tabela', cabecalho: ['Tipo', 'Se uma dobra...', 'O que fica constante', 'Exemplos'], linhas: [
        ['**Diretamente proporcional**', 'a outra dobra', 'a divisão (y ÷ x)', 'quilos e preço; litros e km rodados; horas trabalhadas e salário por hora'],
        ['**Inversamente proporcional**', 'a outra cai pela metade', 'a multiplicação (x · y)', 'trabalhadores e tempo; velocidade e tempo de viagem; torneiras e tempo para encher'],
        ['**Não proporcional**', 'nada disso', 'nada', 'idade e altura; lado e área de um quadrado'],
      ] },
      { tipo: 'checagem', pergunta: 'Um carro faz uma viagem em 3 horas a 60 km/h. Se a velocidade for 90 km/h, o tempo e a velocidade são grandezas:', opcoes: ['diretamente proporcionais', 'inversamente proporcionais', 'não proporcionais', 'iguais'], correta: 1,
        explicacao: 'Mais velocidade → **menos** tempo para a mesma distância. E o produto fica constante: 60 × 3 = 180 km = 90 × 2. São **inversamente proporcionais** (a 90 km/h, a viagem leva 2 horas).',
        outraExplicacao: 'Faça a pergunta do dobro: se a velocidade dobrar (120 km/h), o tempo cai pela metade (1,5 h). Uma dobra e a outra cai pela metade: inversa.' },

      { tipo: 'titulo', texto: 'Passo 2 — Regra de três direta' },
      { tipo: 'texto', texto: '**Montagem:** uma coluna para cada grandeza, com a mesma unidade na mesma coluna, e **x** no valor que falta. Se for direta, multiplique cruzado.' },
      { tipo: 'exemplo', titulo: 'Passo a passo: o açougue', texto: '5 kg de carne custam R$ 32. Quanto custam 8 kg?\n kg   →  R$\n 5    →  32\n 8    →  x\nMais quilos → mais caro (direta). Multiplique cruzado: 5 · x = 8 · 32 → 5x = 256 → **x = R$ 51,20**.\nConfira pelo "preço por quilo": 32 ÷ 5 = 6,40 por kg; 8 × 6,40 = 51,20 ✓' },
      { tipo: 'checagem', pergunta: 'Um carro roda 240 km com 20 litros. Quantos km roda com 35 litros, no mesmo ritmo?', opcoes: ['360 km', '400 km', '420 km', '480 km'], correta: 2,
        explicacao: 'Direta (mais litros → mais km): 20 · x = 35 · 240 → 20x = 8.400 → **x = 420 km**. Ou: 240 ÷ 20 = 12 km/L, e 35 × 12 = 420.',
        outraExplicacao: 'Descubra quanto ele faz com 1 litro: 240 ÷ 20 = 12 km. Com 35 litros: 35 × 12 = **420 km**. A regra de três é só esse raciocínio organizado.' },

      { tipo: 'titulo', texto: 'Passo 3 — Regra de três inversa' },
      { tipo: 'texto', texto: 'Na inversa, **não** multiplique cruzado direto: aí está a armadilha. O jeito mais seguro é lembrar que o **produto é constante** e igualar os produtos de cada linha.' },
      { tipo: 'exemplo', titulo: 'Passo a passo: as torneiras', texto: '6 torneiras iguais enchem um tanque em 10 h. Em quanto tempo 4 torneiras enchem o mesmo tanque?\nMenos torneiras → **mais** tempo (inversa).\nProduto constante: 6 · 10 = 4 · x → 60 = 4x → **x = 15 horas**.\n~~Multiplicar cruzado direto (6x = 40 → x ≈ 6,7 h)~~ daria menos tempo com menos torneiras, um absurdo.' },
      { tipo: 'checagem', pergunta: '4 pedreiros constroem um muro em 9 dias. Em quantos dias 6 pedreiros, no mesmo ritmo, constroem o mesmo muro?', opcoes: ['6 dias', '13,5 dias', '4 dias', '12 dias'], correta: 0,
        explicacao: 'Mais pedreiros → menos dias (inversa). Produto constante: 4 · 9 = 6 · x → 36 = 6x → **x = 6 dias**.',
        outraExplicacao: 'Pense no muro como "36 dias de trabalho de 1 pedreiro" (4 × 9). Dividindo esse trabalho entre 6 pedreiros: 36 ÷ 6 = **6 dias**. Os 13,5 dias saem de quem multiplicou cruzado como se fosse direta.' },

      { tipo: 'titulo', texto: 'Passo 4 — Regra de três composta' },
      { tipo: 'texto', texto: 'Quando há **três ou mais** grandezas, compare **cada uma** com a grandeza do x, **separadamente**, como se as outras estivessem paradas. Depois multiplique o valor conhecido por uma fração de cada grandeza: na direta, a fração "novo/antigo"; na inversa, "antigo/novo".' },
      { tipo: 'exemplo', titulo: 'Passo a passo: só diretas', texto: '4 máquinas produzem 600 peças em 5 dias. Quantas peças 6 máquinas produzem em 8 dias?\n• Mais máquinas → mais peças (direta) → fração 6/4\n• Mais dias → mais peças (direta) → fração 8/5\nx = 600 × 6/4 × 8/5 = 600 × 1,5 × 1,6 = **1.440 peças**' },
      { tipo: 'exemplo', titulo: 'Passo a passo: com inversas', texto: '8 operários, trabalhando 6 h por dia, fazem uma obra em 15 dias. Em quantos dias 10 operários, trabalhando 8 h por dia, fazem a mesma obra?\n• Mais operários → menos dias (inversa) → fração 8/10\n• Mais horas por dia → menos dias (inversa) → fração 6/8\nx = 15 × 8/10 × 6/8 = 15 × 0,8 × 0,75 = **9 dias**' },
      { tipo: 'checagem', pergunta: '2 impressoras imprimem 400 páginas em 10 minutos. Quantas páginas 3 impressoras imprimem em 8 minutos?', opcoes: ['320', '480', '600', '750'], correta: 1,
        explicacao: 'Mais impressoras → mais páginas (direta): 3/2. Mais minutos → mais páginas (direta): 8/10. x = 400 × 3/2 × 8/10 = 400 × 1,5 × 0,8 = **480 páginas**.',
        outraExplicacao: 'Vá por partes: 1 impressora faz 200 páginas em 10 min, ou seja, 20 por minuto. 3 impressoras fazem 60 por minuto. Em 8 minutos: 60 × 8 = **480**.' },

      { tipo: 'titulo', texto: 'Passo 5 — Quando NÃO usar regra de três' },
      { tipo: 'texto', texto: 'Só use quando a relação for de fato direta ou inversa. Alguns casos parecem, mas não são:\n• **Lado e área:** dobrando o lado de um quadrado, a área fica **4 vezes** maior (2 × 2), e não o dobro.\n• **Idade e altura, idade e peso:** ninguém cresce em ritmo constante.\n• **Corrida de aplicativo:** por causa da taxa fixa, 20 km não custam o dobro de 10 km.' },
      { tipo: 'checagem', pergunta: 'Em qual situação **não** dá para usar regra de três simples?', opcoes: ['Quantidade de gasolina e km rodados, no mesmo ritmo', 'Número de pedreiros e dias para fazer o mesmo muro', 'Lado de um quadrado e a área dele', 'Quilos de arroz e preço pago'], correta: 2,
        explicacao: 'A área do quadrado é lado × lado: dobrar o lado **quadruplica** a área. Não é direta nem inversa, então a regra de três dá errado. As outras são direta, inversa e direta.',
        outraExplicacao: 'Teste com números: lado 1 → área 1; lado 2 → área 4; lado 3 → área 9. Nem a divisão nem a multiplicação ficam constantes. Sem proporção, sem regra de três.' },

      /* ---------- 4. Ação ---------- */
      { tipo: 'etapa', etapa: 'acao', texto: 'Use na sua realidade' },
      { tipo: 'lista', itens: [
        '**Combustível:** anote quantos km você (ou alguém da família) roda com um tanque e calcule quantos litros precisa para uma viagem que vai fazer.',
        '**Receita:** pegue uma receita e recalcule para o número de pessoas da sua casa.',
        '**Estudos:** se você estuda 10 páginas em 40 minutos, quanto tempo leva para as 150 páginas de uma matéria? (E isso é mesmo proporcional, ou você cansa no meio?)',
      ] },
      { tipo: 'pergunta', id: 'p3', texto: 'Escreva uma das contas que você fez e diga se a relação era direta ou inversa.' },

      /* ---------- 5. Reflexão ---------- */
      { tipo: 'etapa', etapa: 'reflexao', texto: 'O que mudou?' },
      { tipo: 'texto', texto: 'Volte às três perguntas do começo. O bolo é **direto**, os pintores são **inversos** e a altura **não é proporcional**. A regra de três só entra depois dessa decisão. Quem pula a pergunta "se dobrar, o que acontece?" cai na pegadinha da inversa e nas falsas proporções.' },
      { tipo: 'pergunta', id: 'p4', texto: 'Explique para alguém, com suas palavras, por que 4 pedreiros em 9 dias viram 6 pedreiros em 6 dias, e não 13,5 dias.' },
    ],
    resumo: [
      'Primeiro decida: se uma grandeza dobra, a outra dobra (direta), cai pela metade (inversa) ou nenhuma das duas (não proporcional).',
      'Direta: a divisão fica constante; multiplique cruzado.',
      'Inversa: o produto fica constante; iguale os produtos (6 · 10 = 4 · x). Não multiplique cruzado direto.',
      'Composta: compare cada grandeza só com a do x; direta usa novo/antigo, inversa usa antigo/novo.',
      'Lado e área, idade e altura e tarifas com taxa fixa não são proporcionais.',
    ],
    fontes: [
      { nome: 'Khan Academy — Introdução à regra de três (artigo)', url: 'https://pt.khanacademy.org/math/pt-8-ano/algebra-sequencia-proporcoes-8ano/x7a9edfd8911d9c95:regrade-tres/a/introducao-a-regra-de-tres' },
    ],
  },

  /* ======================= FUNÇÕES DO 1º E 2º GRAU ======================= */
  'matematica-1-3': {
    metodo: 'freire',
    prerequisitos: [
      { texto: '**Substituir uma letra por um número** numa expressão.', revisao: 'Em 2x + 3, se x = 5: troque o x por 5 → 2 · 5 + 3 = 10 + 3 = 13. Cuidado com negativos: use parênteses. Se x = −3, x² = (−3)² = 9.' },
      { texto: '**Ler um ponto no plano cartesiano**: (3, 11) quer dizer x = 3 e y = 11.', revisao: 'O primeiro número anda na horizontal (eixo x) e o segundo na vertical (eixo y). (0, 5) está em cima do eixo y; (4, 0) está em cima do eixo x.' },
    ],
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
      /* ---------- 1. Leitura do mundo ---------- */
      { tipo: 'etapa', etapa: 'leitura', texto: 'A corrida de aplicativo' },
      { tipo: 'texto', texto: 'Imagine um aplicativo de transporte que cobra assim: **R$ 5 para começar** a corrida (a "bandeirada") e mais **R$ 2,50 por quilômetro**.' },
      { tipo: 'pergunta', id: 'p1', texto: 'Quanto custa uma corrida de 12 km? E uma de 24 km custa o dobro da de 12? Com R$ 40 no bolso, até quantos km você consegue ir? Tente responder antes de continuar.' },
      { tipo: 'revelar', texto: '• **12 km:** 5 + 2,50 × 12 = 5 + 30 = **R$ 35**.\n• **24 km:** 5 + 2,50 × 24 = 5 + 60 = **R$ 65**. Não é o dobro de 35 (seria 70): a bandeirada é cobrada **uma vez só**.\n• **Com R$ 40:** tirando os R$ 5 da bandeirada sobram 35, e 35 ÷ 2,50 = **14 km**.\n\nVocê acabou de usar uma **função**: uma regra que transforma um número (os km) em outro (o preço). Escrita em matemática: **f(x) = 2,5x + 5**. Este tópico ensina a ler, montar e usar regras assim.' },

      /* ---------- 2. Problematização ---------- */
      { tipo: 'etapa', etapa: 'problematizacao', texto: 'Para que escrever uma regra como fórmula?' },
      { tipo: 'texto', texto: 'Porque quem tem a fórmula **prevê**: quanto vai custar, quando vai acabar, qual é o melhor preço. Planos de celular, contas de luz, salário com comissão, juros, lucro de uma loja: tudo isso são funções. Quem não sabe lê-las depende de que o vendedor faça a conta "a favor" dele.\n\nE tem uma pergunta que só as funções do 2º grau respondem: **qual é o melhor possível?** O preço que dá mais lucro, o tamanho de cercado com mais área. É matemática para decidir.' },
      { tipo: 'pergunta', id: 'p2', texto: 'Pense numa conta que você paga e que tem uma parte fixa e uma parte que varia (celular, luz, academia, aplicativo). Qual é a parte fixa e qual é a que muda?' },

      /* ---------- 3. Sistematização ---------- */
      { tipo: 'etapa', etapa: 'sistematizacao', texto: 'Da regra à fórmula, da fórmula ao gráfico' },

      { tipo: 'titulo', texto: 'Passo 1 — O que é uma função' },
      { tipo: 'texto', texto: 'Uma **função** é como uma máquina: entra um número (**x**), a máquina aplica uma regra e sai **um único** número (**y**). Escrevemos **y = f(x)** ("f de x").\nA exigência é só uma: para cada entrada, **uma única** saída. A corrida de 12 km não pode custar R$ 35 e R$ 40 ao mesmo tempo.' },
      { tipo: 'checagem', pergunta: 'Na função f(x) = 2x + 3, quanto vale f(5)?', opcoes: ['10', '13', '16', '25'], correta: 1,
        explicacao: 'Troque o x por 5: f(5) = 2 · 5 + 3 = 10 + 3 = **13**.',
        outraExplicacao: 'Leia f(5) como "o que sai da máquina quando entra o 5". A máquina dobra (5 → 10) e soma 3 (10 → 13).' },

      { tipo: 'titulo', texto: 'Passo 2 — Função do 1º grau: parte que varia + parte fixa' },
      { tipo: 'texto', texto: 'Forma: **f(x) = ax + b**, com a diferente de zero. Na corrida: a = 2,5 e b = 5.' },
      { tipo: 'tabela', cabecalho: ['Peça', 'O que é', 'Na corrida', 'No gráfico'], linhas: [
        ['**a**', 'quanto y muda quando x aumenta 1 (a taxa)', 'R$ 2,50 a cada km', 'a inclinação da reta: a > 0 sobe, a < 0 desce'],
        ['**b**', 'o valor quando x = 0 (a parte fixa)', 'a bandeirada de R$ 5', 'onde a reta corta o eixo y'],
        ['**raiz**', 'o x que faz y = 0: x = −b/a', '(não faz sentido aqui: o preço nunca é zero)', 'onde a reta corta o eixo x'],
      ] },
      { tipo: 'texto', texto: 'O gráfico de uma função do 1º grau é sempre uma **reta**, porque y muda sempre do mesmo tanto a cada passo de x.\nQuando **b = 0** (f(x) = ax), não há parte fixa: x e y são **diretamente proporcionais** e a reta passa pela origem (0, 0). É o caso de "R$ 6,40 por quilo, sem taxa".' },
      { tipo: 'checagem', pergunta: 'Uma academia cobra R$ 50 de matrícula mais R$ 80 por mês. Quanto uma pessoa paga, no total, em 6 meses?', opcoes: ['R$ 480', 'R$ 530', 'R$ 780', 'R$ 650'], correta: 1,
        explicacao: 'f(x) = 80x + 50, com x = meses. f(6) = 80 · 6 + 50 = 480 + 50 = **R$ 530**.',
        outraExplicacao: 'Separe as partes: a mensalidade varia (6 × 80 = 480) e a matrícula é fixa (50, uma vez só). Total: 530. R$ 480 é quem esqueceu a matrícula.' },
      { tipo: 'exemplo', titulo: 'Passo a passo: descobrir a função a partir de dois pontos', texto: 'Uma reta passa por (1, 5) e (3, 11).\n1º) Taxa: quando x foi de 1 para 3 (+2), y foi de 5 para 11 (+6). a = 6 ÷ 2 = **3**.\n2º) Parte fixa: use um ponto. 5 = 3 · 1 + b → b = **2**.\n3º) **f(x) = 3x + 2**. Confira com o outro ponto: 3 · 3 + 2 = 11 ✓' },
      { tipo: 'checagem', pergunta: 'Qual destas funções representa duas grandezas diretamente proporcionais?', opcoes: ['f(x) = 4x + 1', 'f(x) = 4x', 'f(x) = x² ', 'f(x) = 10 − x'], correta: 1,
        explicacao: 'Proporcional = sem parte fixa: **f(x) = 4x** (b = 0). Dobrando x, y dobra, e a reta passa pela origem. Com "+ 1" já não dobra; x² quadruplica; e 10 − x diminui.',
        outraExplicacao: 'Teste com x = 1 e x = 2: em 4x dá 4 e 8 (dobrou ✓). Em 4x + 1 dá 5 e 9 (não dobrou). Em x² dá 1 e 4 (quadruplicou).' },

      { tipo: 'titulo', texto: 'Passo 3 — Função do 2º grau: a parábola' },
      { tipo: 'texto', texto: 'Forma: **f(x) = ax² + bx + c**, com a diferente de zero. O gráfico é uma **parábola**, uma curva em "U".\n• **a > 0**: o U abre para cima (∪) e a função tem um **valor mínimo**.\n• **a < 0**: abre para baixo (∩) e a função tem um **valor máximo**.\n• **c** é onde a parábola corta o eixo y (o valor de f(0)).' },
      { tipo: 'texto', texto: '**Raízes** (onde a parábola corta o eixo x), pela fórmula de Bhaskara:\n**Δ = b² − 4ac** e **x = (−b ± √Δ) ÷ 2a**\n• Δ > 0 → duas raízes diferentes\n• Δ = 0 → uma raiz só (a parábola encosta no eixo)\n• Δ < 0 → nenhuma raiz real (a parábola não toca o eixo x)\nAtalho para conferir: **soma das raízes = −b/a** e **produto = c/a**.' },
      { tipo: 'exemplo', titulo: 'Passo a passo: raízes', texto: 'f(x) = x² − 6x + 8 (a = 1, b = −6, c = 8)\n1º) Δ = (−6)² − 4 · 1 · 8 = 36 − 32 = **4**\n2º) x = (6 ± 2) ÷ 2 → **x = 4** ou **x = 2**\n3º) Confira: soma 4 + 2 = 6 = −b/a ✓; produto 4 · 2 = 8 = c/a ✓' },
      { tipo: 'checagem', pergunta: 'Quantas raízes reais tem a função f(x) = x² + 2x + 5?', opcoes: ['Duas raízes diferentes', 'Uma raiz só', 'Nenhuma raiz real', 'Infinitas raízes'], correta: 2,
        explicacao: 'Δ = 2² − 4 · 1 · 5 = 4 − 20 = **−16**. Δ negativo → **nenhuma raiz real**: a parábola fica toda acima do eixo x.',
        outraExplicacao: 'Não precisa da fórmula inteira: calcule só o Δ. Se der negativo, não existe raiz quadrada real dele, e a parábola não toca o eixo x.' },

      { tipo: 'titulo', texto: 'Passo 4 — O vértice: o melhor (ou o pior) possível' },
      { tipo: 'texto', texto: 'O **vértice** é o ponto mais baixo (se a > 0) ou mais alto (se a < 0) da parábola. É ele que responde às perguntas de **máximo e mínimo**:\n**xv = −b ÷ 2a** e **yv = f(xv)** (ou yv = −Δ ÷ 4a).' },
      { tipo: 'exemplo', titulo: 'Passo a passo: lucro máximo', texto: 'O lucro de uma loja é L(x) = −x² + 40x − 300, em que x é a quantidade vendida.\n1º) a = −1 < 0 → a parábola abre para baixo → tem **máximo**.\n2º) xv = −40 ÷ (2 · (−1)) = **20 unidades**.\n3º) L(20) = −400 + 800 − 300 = **lucro máximo de 100**.' },
      { tipo: 'exemplo', titulo: 'Passo a passo: o cercado com mais área', texto: 'Com 40 m de cerca, qual o maior cercado retangular?\n1º) Lados x e (20 − x), porque metade da cerca (20 m) dá um lado mais o outro.\n2º) Área: A(x) = x(20 − x) = −x² + 20x.\n3º) xv = −20 ÷ (2 · (−1)) = 10 → um **quadrado de 10 m × 10 m**, com **100 m²**.' },
      { tipo: 'checagem', pergunta: 'Qual é o vértice da parábola f(x) = x² − 4x + 1?', opcoes: ['(2, −3)', '(−2, 13)', '(4, 1)', '(2, 1)'], correta: 0,
        explicacao: 'xv = −(−4) ÷ (2 · 1) = 4 ÷ 2 = **2**. yv = f(2) = 4 − 8 + 1 = **−3**. Vértice (2, −3), um ponto de **mínimo** (a = 1 > 0).',
        outraExplicacao: 'Cuidado com o sinal: b = −4, então −b = +4. Depois é só trocar o x por 2 na função: 2² − 4 · 2 + 1 = 4 − 8 + 1 = −3.' },
      { tipo: 'atencao', texto: 'Pegadinhas de prova:\n(1) em xv = −b/2a, se b for negativo, −b fica **positivo**;\n(2) (−3)² = 9, mas −3² = −9: ponha parênteses ao substituir números negativos;\n(3) se a = 0, a função **não** é do 2º grau;\n(4) **y = ax²** não é proporcional a x: dobrando x, y fica **4 vezes** maior (como a área de um quadrado).' },

      /* ---------- 4. Ação ---------- */
      { tipo: 'etapa', etapa: 'acao', texto: 'Monte as funções da sua vida' },
      { tipo: 'lista', itens: [
        '**Sua conta:** escolha uma conta com parte fixa e parte variável (celular, luz, aplicativo) e escreva a função dela no formato f(x) = ax + b. Calcule o valor para dois usos diferentes.',
        '**Comparar planos:** um plano A cobra R$ 30 + R$ 0,50 por minuto; um B cobra R$ 50 + R$ 0,10 por minuto. A partir de quantos minutos o B fica mais barato? (Dica: iguale as duas funções.)',
        '**Máximo:** invente um problema de cercado com o comprimento de cerca que você quiser e ache a área máxima.',
      ] },
      { tipo: 'pergunta', id: 'p3', texto: 'Escreva aqui a função da sua conta e a resposta da comparação dos planos.' },

      /* ---------- 5. Reflexão ---------- */
      { tipo: 'etapa', etapa: 'reflexao', texto: 'O que mudou?' },
      { tipo: 'texto', texto: 'Volte à corrida do começo. Agora você sabe que ela é uma função do **1º grau** (f(x) = 2,5x + 5): a taxa por km é o **a**, a bandeirada é o **b**, e por causa do b ela **não é proporcional** (24 km não custam o dobro de 12). E sabe que, quando a pergunta é "qual o melhor possível?", a resposta mora no **vértice** de uma parábola.' },
      { tipo: 'pergunta', id: 'p4', texto: 'Explique para alguém, com suas palavras, o que o "a" e o "b" querem dizer numa conta do dia a dia. E onde você usaria o vértice de uma parábola?' },
    ],
    resumo: [
      'Função: para cada x, um único y. Escreve-se y = f(x).',
      '1º grau f(x) = ax + b: reta; a = taxa (inclinação), b = parte fixa (corte no eixo y), raiz = −b/a.',
      'f(x) = ax (b = 0): grandezas diretamente proporcionais; a reta passa pela origem.',
      '2º grau f(x) = ax² + bx + c: parábola; a > 0 tem mínimo, a < 0 tem máximo; c = corte no eixo y.',
      'Δ = b² − 4ac; x = (−b ± √Δ)/2a; Δ < 0 → sem raiz real. Soma = −b/a; produto = c/a.',
      'Vértice: xv = −b/2a e yv = f(xv). Responde a perguntas de máximo e mínimo.',
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
      { codigo: 'EM13LP15', texto: 'Planejar, produzir, revisar, editar, reescrever e avaliar textos escritos e multissemióticos, considerando sua adequação às condições de produção do texto, no que diz respeito ao lugar social a ser assumido e à imagem que se pretende passar a respeito de si mesmo, ao leitor pretendido, ao veículo e mídia em que o texto ou produção cultural vai circular, ao contexto imediato e sócio-histórico mais geral, ao gênero textual em questão e suas regularidades, à variedade linguística apropriada a esse contexto e ao uso do conhecimento dos aspectos notacionais (ortografia padrão, pontuação adequada, mecanismos de concordância nominal e verbal, regência verbal etc.), sempre que o contexto o exigir.' },
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
      { codigo: 'EM13LP15', texto: 'Planejar, produzir, revisar, editar, reescrever e avaliar textos escritos e multissemióticos, considerando sua adequação às condições de produção do texto, no que diz respeito ao lugar social a ser assumido e à imagem que se pretende passar a respeito de si mesmo, ao leitor pretendido, ao veículo e mídia em que o texto ou produção cultural vai circular, ao contexto imediato e sócio-histórico mais geral, ao gênero textual em questão e suas regularidades, à variedade linguística apropriada a esse contexto e ao uso do conhecimento dos aspectos notacionais (ortografia padrão, pontuação adequada, mecanismos de concordância nominal e verbal, regência verbal etc.), sempre que o contexto o exigir.' },
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

  /* ======================= PORTUGUÊS — PONTUAÇÃO (pares que mudam de sentido + esqueleto da frase + teste da retirada) ======================= */
  'portugues-1-3': {
    metodo: 'freire',
    prerequisitos: [
      { texto: 'Reconhecer o **[[verbo]]** de uma frase.', revisao: 'O verbo é a palavra que muda quando você muda o tempo ou a pessoa: "Eu **estudo**" → "Ontem eu **estudei**" → "Eles **estudam**". Em "Os alunos chegaram cedo", o verbo é **chegaram**.' },
      { texto: 'Achar o **[[sujeito]]**: quem faz ou de quem se fala.', revisao: 'Pergunte ao verbo "quem?". Em "Os alunos chegaram cedo": quem chegou? **Os alunos**. Esse é o sujeito.' },
      { texto: 'Achar o **[[complemento]]** do verbo.', revisao: 'Alguns verbos pedem um "o quê?" ou "a quem?". Em "Ela aprovou **o projeto**": aprovou o quê? **O projeto** é o complemento.' },
    ],
    bncc: [
      { codigo: 'EM13LP15', texto: 'Planejar, produzir, revisar, editar, reescrever e avaliar textos escritos e multissemióticos, considerando sua adequação às condições de produção do texto, no que diz respeito ao lugar social a ser assumido e à imagem que se pretende passar a respeito de si mesmo, ao leitor pretendido, ao veículo e mídia em que o texto ou produção cultural vai circular, ao contexto imediato e sócio-histórico mais geral, ao gênero textual em questão e suas regularidades, à variedade linguística apropriada a esse contexto e ao uso do conhecimento dos aspectos notacionais (ortografia padrão, pontuação adequada, mecanismos de concordância nominal e verbal, regência verbal etc.), sempre que o contexto o exigir.' },
      { codigo: 'EM13LP06', texto: 'Analisar efeitos de sentido decorrentes de usos expressivos da linguagem, da escolha de determinadas palavras ou expressões e da ordenação, combinação e contraposição de palavras, dentre outros, para ampliar as possibilidades de construção de sentidos e de uso crítico da língua.' },
      { codigo: 'EM13LP08', texto: 'Analisar elementos e aspectos da sintaxe do português, como a ordem dos constituintes da sentença (e os efeito que causam sua inversão), a estrutura dos sintagmas, as categorias sintáticas, os processos de coordenação e subordinação (e os efeitos de seus usos) e a sintaxe de concordância e de regência, de modo a potencializar os processos de compreensão e produção de textos.' },
    ],
    bnccBase: [
      { codigo: 'EF67LP33', texto: 'Pontuar textos adequadamente.' },
      { codigo: 'EF08LP04', texto: 'Utilizar, ao produzir texto, conhecimentos linguísticos e gramaticais: ortografia, regências e concordâncias nominal e verbal, modos e tempos verbais, pontuação etc.' },
    ],
    blocos: [
      /* ---------- 1. Leitura do mundo ---------- */
      { tipo: 'etapa', etapa: 'leitura', texto: 'Duas mensagens, as mesmas palavras' },
      { tipo: 'texto', texto: 'Você combinou de encontrar um amigo, mas vai se atrasar. Ele pergunta: "Vou embora?". Você responde com uma destas mensagens:' },
      { tipo: 'exemplo', titulo: 'Leia as duas', texto: '**Mensagem 1:** "Não espere."\n**Mensagem 2:** "Não, espere."' },
      { tipo: 'pergunta', id: 'p1', texto: 'Ao receber cada mensagem, o que o seu amigo faz: vai embora ou fica? O que a vírgula mudou, se as palavras são as mesmas?' },
      { tipo: 'revelar', texto: 'Na **mensagem 1**, "não" nega o verbo: "não espere" = pode ir embora.\nNa **mensagem 2**, a vírgula separa duas coisas: a **resposta** ("Não", ou seja, não vá embora) e o **pedido** ("espere"). O amigo fica.\n\nAs palavras são exatamente as mesmas. Só a vírgula mudou, e o sentido virou o contrário. Pontuação não é enfeite: ela **organiza o sentido** da frase.' },

      /* ---------- 2. Problematização ---------- */
      { tipo: 'etapa', etapa: 'problematizacao', texto: 'A vírgula é uma "pausa para respirar"?' },
      { tipo: 'texto', texto: 'Muita gente aprendeu assim na escola: "põe vírgula onde você respira". Essa dica engana. Leia em voz alta: "Todos os candidatos que entregaram os documentos dentro do prazo serão convocados." Você provavelmente respirou antes de "serão", e ali **não** pode ter vírgula.\n\nA vírgula não segue o fôlego: segue a **estrutura da frase**. Em conversa de WhatsApp, o erro vira piada. Em **contratos, leis e editais**, ele pode decidir quem tem direito a quê. Por isso o serviço público tem um manual oficial de redação, e por isso a banca de concurso adora cobrar vírgula.' },
      { tipo: 'exemplo', titulo: 'Uma regra de órgão público (exemplo inventado)', texto: '**Versão A:** "Os servidores, que têm mais de 10 anos de serviço, receberão o adicional."\n**Versão B:** "Os servidores que têm mais de 10 anos de serviço receberão o adicional."\n\nNa versão A, as vírgulas dizem que **todos** os servidores têm mais de 10 anos, e **todos** recebem. Na versão B, **só** quem tem mais de 10 anos recebe. Duas vírgulas mudam quem ganha dinheiro público.' },
      { tipo: 'indicacao', obra: 'Mafalda', autor: 'Quino', texto: 'Nas tiras da Mafalda, a pontuação dos balões (as perguntas, as exclamações, as reticências) carrega boa parte da ironia: uma pergunta "inocente" da Mafalda costuma ser, na verdade, uma crítica. Leia algumas tiras na coletânea **Toda Mafalda** prestando atenção só na pontuação.' },
      { tipo: 'pergunta', id: 'p2', texto: 'Lembre de uma mensagem, sua ou de alguém, que foi mal entendida por causa da pontuação (ou da falta dela). O que aconteceu? E onde você costuma ficar em dúvida se põe vírgula ou não?' },

      /* ---------- 3. Sistematização ---------- */
      { tipo: 'etapa', etapa: 'sistematizacao', texto: 'A lógica da vírgula, um passo de cada vez' },

      // ----- Passo 1
      { tipo: 'titulo', texto: 'Passo 1 — A vírgula muda o sentido' },
      { tipo: 'texto', texto: 'Antes de qualquer regra, veja mais pares de frases com as mesmas palavras e sentidos diferentes. Em cada par, pergunte: **o que a vírgula separou?**' },
      { tipo: 'tabela', cabecalho: ['Sem vírgula', 'Com vírgula'], linhas: [
        ['"Não espere." → pode ir', '"Não, espere." → fique'],
        ['"Os jogadores que treinaram venceram." → **só** os que treinaram', '"Os jogadores, que treinaram, venceram." → **todos** treinaram'],
        ['"O chefe disse: o funcionário errou." → quem errou foi o **funcionário**', '"O chefe, disse o funcionário, errou." → quem errou foi o **chefe**'],
      ] },
      { tipo: 'texto', texto: 'Repare que, em todos os pares, a vírgula **separa um pedaço** da frase do resto. Mudar o que fica junto e o que fica separado muda o sentido. Os próximos passos mostram **o que pode** e **o que não pode** ser separado.' },
      { tipo: 'checagem', pergunta: 'Na frase "O professor, disse o aluno, chegou atrasado", quem chegou atrasado?', opcoes: ['O aluno', 'O professor', 'Os dois', 'Não dá para saber'], correta: 1,
        explicacao: 'As vírgulas separam o trecho "disse o aluno": é só a indicação de **quem contou**. Tirando esse trecho, sobra "O professor chegou atrasado". Quem chegou atrasado foi o **professor**; o aluno é quem disse.',
        outraExplicacao: 'Compare com "O professor disse: o aluno chegou atrasado." Agora é o professor quem fala, e o atrasado é o aluno. As palavras são quase as mesmas; o que mudou foi o que a pontuação separou.' },

      // ----- Passo 2
      { tipo: 'titulo', texto: 'Passo 2 — A regra de ouro: nunca separe o sujeito do verbo' },
      { tipo: 'texto', texto: 'Toda frase tem um "esqueleto": **[[sujeito]] + [[verbo]] + [[complemento]]**, nesta ordem direta. Essas peças estão **coladas** umas nas outras. A vírgula **nunca** quebra esse esqueleto, por maior que ele seja.' },
      { tipo: 'lista', itens: [
        'Sujeito | verbo: ~~"Os candidatos aprovados, serão convocados."~~ → "Os candidatos aprovados serão convocados."',
        'Verbo | complemento: ~~"O diretor aprovou, o projeto."~~ → "O diretor aprovou o projeto."',
        'Nome | complemento do nome: ~~"A entrega, dos documentos foi ontem."~~ → "A entrega dos documentos foi ontem."',
      ] },
      { tipo: 'exemplo', titulo: 'Como achar o esqueleto de uma frase longa', texto: '"Todos os candidatos que entregaram os documentos dentro do prazo serão convocados."\n1º) Ache o verbo principal: **serão convocados**.\n2º) Pergunte "quem?": quem será convocado? **Todos os candidatos que entregaram os documentos dentro do prazo**. Esse bloco inteiro é o sujeito.\n3º) Sujeito e verbo ficam colados → **nenhuma vírgula** antes de "serão".' },
      { tipo: 'atencao', texto: 'É a pegadinha mais cobrada em concurso: um sujeito **longo** dá vontade de "respirar" antes do verbo, e a banca coloca uma vírgula ali para ver se você cai. Sujeito longo continua sendo sujeito.' },
      { tipo: 'checagem', pergunta: 'Qual frase está pontuada corretamente?', opcoes: ['Os moradores do bairro, reclamaram da obra.', 'Os moradores do bairro reclamaram da obra.', 'Os moradores, do bairro reclamaram da obra.', 'Os moradores do bairro reclamaram, da obra.'], correta: 1,
        explicacao: '"Os moradores do bairro" é o sujeito, "reclamaram" é o verbo e "da obra" é o complemento. Nenhuma vírgula pode separar esse esqueleto.',
        outraExplicacao: 'Pergunte ao verbo: **quem** reclamou? "Os moradores do bairro", e tudo isso fica junto do verbo. Reclamou **de quê**? "Da obra", que também fica colado. Não sobra lugar para vírgula.' },

      // ----- Passo 3
      { tipo: 'titulo', texto: 'Passo 3 — O teste da retirada' },
      { tipo: 'texto', texto: 'Se o esqueleto não se separa, onde entra a vírgula? Nos pedaços que estão **"pendurados"** no esqueleto: eles interrompem a frase, ou foram tirados do lugar normal. Para saber se um trecho é assim, faça o **teste da retirada**: tire o trecho. Se a frase continua de pé, com o mesmo sentido básico, ele pode (e geralmente deve) vir entre vírgulas.' },
      { tipo: 'exemplo', titulo: 'Aplicando o teste', texto: '"A prova, **segundo o edital**, terá 60 questões."\nTire o trecho: "A prova terá 60 questões." → a frase continua de pé. Por isso "segundo o edital" vem **entre vírgulas** (uma antes e outra depois).' },
      { tipo: 'texto', texto: 'O primeiro pedaço "pendurado" é o **[[vocativo]]**: o nome de quem está sendo **chamado**, a pessoa com quem você fala. Ele fica fora do esqueleto, e por isso vem sempre separado por vírgula, esteja no começo, no meio ou no fim:' },
      { tipo: 'lista', itens: [
        '"**Professor**, posso entregar amanhã?"',
        '"Posso, **professor**, entregar amanhã?"',
        '"Posso entregar amanhã, **professor**?"',
      ] },
      { tipo: 'checagem', pergunta: 'Em "Carla traga os relatórios", falta uma vírgula. Onde, e por quê?', opcoes: ['Depois de "traga", para separar o verbo', 'Depois de "Carla", porque é um vocativo', 'Antes de "relatórios", para separar o complemento', 'Não falta vírgula nenhuma'], correta: 1,
        explicacao: '"Carla" é o nome de quem está sendo chamado: um **vocativo**. Fica "Carla, traga os relatórios." O vocativo sempre vem separado por vírgula.',
        outraExplicacao: 'Sem a vírgula, parece que alguém está **contando** o que a Carla faz (como em "Carla traz os relatórios"). Com a vírgula, é um **pedido** feito à Carla. A vírgula do vocativo marca quem está ouvindo.' },

      // ----- Passo 4
      { tipo: 'titulo', texto: 'Passo 4 — O aposto: a explicação ao lado' },
      { tipo: 'texto', texto: 'O **[[aposto]]** é um trecho que **explica** o termo que vem logo antes dele, como um "ou seja". Ele passa no teste da retirada, e por isso vem entre vírgulas (ou com uma vírgula só, se a frase acabar nele):' },
      { tipo: 'lista', itens: [
        '"Brasília, **a capital do país**, foi inaugurada em 1960."',
        '"Zelda, **a princesa de Hyrule**, dá nome à série, embora o herói seja o Link."',
        '"O contrato foi assinado por Ana, **a nova gerente**."',
      ] },
      { tipo: 'exemplo', titulo: 'Vocativo ou aposto? A vírgula decide', texto: '"Maria, a professora chegou."\n→ uma vírgula só: você está **chamando** Maria (vocativo) para avisar que a professora chegou.\n\n"Maria, a professora, chegou."\n→ duas vírgulas: "a professora" **explica** quem é Maria (aposto). Quem chegou foi a própria Maria.' },
      { tipo: 'checagem', pergunta: 'Qual frase está pontuada corretamente?', opcoes: ['Machado de Assis o primeiro presidente da Academia Brasileira de Letras, nasceu no Rio.', 'Machado de Assis, o primeiro presidente da Academia Brasileira de Letras nasceu no Rio.', 'Machado de Assis, o primeiro presidente da Academia Brasileira de Letras, nasceu no Rio.', 'Machado de Assis o primeiro presidente, da Academia Brasileira de Letras nasceu no Rio.'], correta: 2,
        explicacao: '"O primeiro presidente da Academia Brasileira de Letras" é um **aposto**: explica quem foi Machado de Assis. No meio da frase, o aposto fica **entre duas vírgulas**, uma antes e outra depois.',
        outraExplicacao: 'Faça o teste da retirada: "Machado de Assis nasceu no Rio." A frase continua de pé, então o trecho tirado precisa de vírgula **dos dois lados**. Com uma vírgula só (opção b), o sujeito ficaria separado do verbo "nasceu".' },

      // ----- Passo 5
      { tipo: 'titulo', texto: 'Passo 5 — Orações intercaladas e a vírgula que filtra' },
      { tipo: 'texto', texto: 'Às vezes o pedaço "pendurado" é uma **[[oração]]** inteira, com verbo próprio, enfiada no meio de outra. É a **[[oração intercalada]]**: um comentário, a indicação de quem disse, uma observação. Ela vem entre vírgulas (ou entre travessões, ou parênteses):' },
      { tipo: 'lista', itens: [
        '"A prova, **disse o coordenador**, será adiada."',
        '"O resultado, **como todos esperavam**, saiu ontem."',
        '"Esse prazo, **acredite**, é suficiente."',
      ] },
      { tipo: 'texto', texto: 'Um caso especial são as orações que começam por **que / o qual**. Aqui a vírgula é justamente o que muda o sentido no exemplo do órgão público:\n• **Com** vírgulas → oração [[explicativa]]: um comentário que vale para **todos**. Passa no teste da retirada.\n• **Sem** vírgulas → oração [[restritiva]]: um **filtro** que separa só **uma parte**. Se for retirada, o sentido muda.' },
      { tipo: 'exemplo', titulo: 'Compare', texto: '"Os funcionários, **que fizeram o curso**, foram promovidos."\n→ **todos** os funcionários fizeram o curso, e todos foram promovidos.\n\n"Os funcionários **que fizeram o curso** foram promovidos."\n→ **só** os que fizeram o curso foram promovidos; os outros, não.' },
      { tipo: 'checagem', pergunta: '"Os candidatos que faltaram à prova foram eliminados." Pela pontuação, entende-se que:', opcoes: ['todos os candidatos faltaram e foram eliminados', 'apenas os candidatos que faltaram foram eliminados', 'nenhum candidato foi eliminado', 'a frase tem erro de pontuação'], correta: 1,
        explicacao: 'Sem vírgulas, a oração "que faltaram à prova" é **restritiva**: separa só um grupo de candidatos. Só esse grupo foi eliminado.',
        outraExplicacao: 'Imagine um filtro: "que faltaram à prova" **filtra** os candidatos. Quem ficou no filtro foi eliminado. Se a oração viesse entre vírgulas, seria um comentário sobre todos ("os candidatos, que aliás faltaram, ..."), e todos teriam sido eliminados.' },

      // ----- Passo 6
      { tipo: 'titulo', texto: 'Passo 6 — Pedaços fora do lugar e listas' },
      { tipo: 'texto', texto: 'A ordem "normal" do português é: sujeito + verbo + complemento + **circunstâncias** (tempo, lugar, modo...). Quando uma circunstância muda de lugar e vem **antes** ou no meio, a vírgula marca o deslocamento. E numa lista, a vírgula separa os itens.' },
      { tipo: 'tabela', cabecalho: ['Caso', 'Exemplo', 'Observação'], linhas: [
        ['[[Adjunto adverbial]] deslocado', '**Depois de três horas de reunião**, a proposta foi aprovada.', 'Se for curto (uma ou duas palavras), a vírgula é opcional: "Ontem a proposta foi aprovada."'],
        ['[[Oração]] adverbial **antes** da principal', '**Quando o resultado sair**, avise-me.', 'Na ordem direta, a vírgula costuma sumir: "Avise-me quando o resultado sair."'],
        ['Itens de uma **enumeração**', 'Levei RG, CPF, comprovante e caneta.', 'O último item vem com "e", sem vírgula antes.'],
      ] },

      // ----- Passo 7
      { tipo: 'titulo', texto: 'Passo 7 — Vírgula antes de "e" e de outras conjunções' },
      { tipo: 'texto', texto: 'As **[[conjunções|conjunção]]** ligam orações. Cada uma tem seu costume com a vírgula:' },
      { tipo: 'tabela', cabecalho: ['Conjunção', 'Vírgula?', 'Exemplo'], linhas: [
        ['**e**', 'em geral, **não**', 'Estudou a matéria e fez os exercícios.'],
        ['**e** com sujeitos **diferentes**', 'sim', 'O pai trabalhava de dia, **e** a mãe estudava à noite.'],
        ['**e** com sentido de oposição (= mas)', 'sim', 'Estudou o ano inteiro, **e** não passou.'],
        ['**e** repetido para dar ênfase ([[polissíndeto]])', 'sim', 'E chorou, e riu, e abraçou todo mundo.'],
        ['**mas, porém, contudo, todavia** ([[adversativas|conjunção adversativa]])', 'sim, **antes** delas', 'Estudou muito, **mas** não passou.'],
        ['**porém, contudo, portanto** deslocadas para o meio', 'sim, **entre vírgulas**', 'Ele estudou; não foi, **porém**, aprovado.'],
        ['**pois** (= porque, explicando)', 'sim', 'Leve o guarda-chuva, **pois** vai chover.'],
        ['**que, se, porque** em ordem direta', 'em geral, não', 'Ele disse **que** vem. Saí cedo **porque** tinha prova.'],
      ] },
      { tipo: 'checagem', pergunta: 'Em qual frase a vírgula antes de "e" está correta?', opcoes: ['Comprei o livro, e o caderno.', 'O governo anunciou o corte, e os servidores protestaram.', 'Ela leu, e releu o edital com calma.', 'Os alunos, e os professores chegaram cedo.'], correta: 1,
        explicacao: 'Em "O governo anunciou o corte, e os servidores protestaram", há duas orações com **sujeitos diferentes** (o governo / os servidores). Nesse caso, a vírgula antes de "e" é aceita e ajuda na leitura. Nas outras frases, o "e" só soma itens ou verbos do mesmo sujeito, e a vírgula atrapalha (na última, ainda separa o sujeito do verbo).',
        outraExplicacao: 'Pergunte: o que vem depois do "e" tem **outro sujeito**? "e **os servidores** protestaram": sim, outro sujeito → vírgula. "e o caderno", "e releu", "e os professores": continuam a mesma lista ou o mesmo sujeito → sem vírgula.' },

      // ----- Passo 8
      { tipo: 'titulo', texto: 'Passo 8 — Ponto e vírgula: a pausa do meio' },
      { tipo: 'texto', texto: 'O **ponto e vírgula (;)** fica entre a vírgula e o ponto: separa mais que a vírgula, mas não encerra a frase. Use em três situações:' },
      { tipo: 'lista', itens: [
        '**Partes que já têm vírgulas por dentro**: "Na equipe, uns cuidam do projeto; outros, do orçamento; e o chefe, da aprovação."',
        '**Orações relacionadas, mas com ideias completas**: "O prazo terminou ontem; não haverá prorrogação."',
        '**Itens de leis, editais e listas longas**: "São requisitos: I – ser brasileiro; II – ter 18 anos; III – estar em dia com o serviço militar."',
      ] },
      { tipo: 'checagem', pergunta: 'Qual frase usa o ponto e vírgula corretamente?', opcoes: ['Os candidatos; chegaram cedo.', 'Uns preferem a manhã, outros, a tarde; e alguns, a noite.', 'De manhã, estudam os mais novos; à tarde, os mais velhos.', 'Comprei pão; e leite.'], correta: 2,
        explicacao: 'Em "De manhã, estudam os mais novos; à tarde, os mais velhos", cada parte já tem vírgula por dentro. O **ponto e vírgula** separa as duas partes maiores, para o leitor não se perder. Nas outras opções, ele separa o sujeito do verbo (a), está trocado com a vírgula (b) ou separa uma lista curta (d).',
        outraExplicacao: 'Pense em níveis: a vírgula separa pedaços pequenos; o ponto e vírgula separa **blocos** que já têm vírgulas dentro. Na opção c há dois blocos ("de manhã, ..." e "à tarde, ..."), e o ";" fica entre eles.' },

      // ----- Passo 9
      { tipo: 'titulo', texto: 'Passo 9 — Dois-pontos: o anúncio' },
      { tipo: 'texto', texto: 'Os **dois-pontos (:)** avisam o leitor: **"agora vem o que eu anunciei"**. Eles abrem:' },
      { tipo: 'lista', itens: [
        'uma **enumeração**: "Leve três documentos: RG, CPF e comprovante de residência."',
        'uma **citação** ou fala: O coordenador avisou: "A prova começa às 8h."',
        'uma **explicação, consequência ou resumo** do que veio antes: "Só faltava uma coisa: coragem."',
      ] },
      { tipo: 'texto', texto: 'Depois dos dois-pontos, use letra **minúscula**, a não ser que venha citação, nome próprio ou uma frase completa que você queira destacar.' },
      { tipo: 'checagem', pergunta: 'Em qual frase os dois-pontos estão bem usados?', opcoes: ['Os aprovados: serão chamados amanhã.', 'O motivo da reprovação foi um só: faltou revisão.', 'Ela comprou: um livro.', 'Os documentos são: necessários.'], correta: 1,
        explicacao: 'Em "O motivo da reprovação foi um só: faltou revisão", a primeira parte **anuncia** algo ("um só") e os dois-pontos abrem a explicação. Nas outras, os dois-pontos cortam o esqueleto: separam sujeito e verbo (a), verbo e complemento (c) ou verbo e predicativo (d).',
        outraExplicacao: 'Teste: a parte antes dos dois-pontos **promete** alguma coisa que vem depois? "foi um só:" promete o motivo → sim. "Ela comprou:" só corta o verbo do complemento, não anuncia nada.' },

      // ----- Passo 10
      { tipo: 'titulo', texto: 'Passo 10 — Os outros sinais, em resumo' },
      { tipo: 'tabela', cabecalho: ['Sinal', 'Para que serve', 'Exemplo'], linhas: [
        ['**—** travessão', 'fala em diálogo; destacar uma intercalação', 'O resultado — para surpresa geral — saiu ontem.'],
        ['**( )** parênteses', 'informação acessória', 'A Constituição de 1988 (a "Constituição Cidadã") ampliou direitos.'],
        ['**" "** aspas', 'citação literal, ironia, termo estrangeiro', 'Ele chamou o atraso de "detalhe".'],
        ['**...** reticências', 'interrupção, hesitação, suspense', 'Eu ia dizer que... deixa pra lá.'],
      ] },

      /* ---------- 4. Ação ---------- */
      { tipo: 'etapa', etapa: 'acao', texto: 'Use na sua realidade' },
      { tipo: 'lista', itens: [
        '**Suas mensagens:** pegue 3 mensagens longas que você mandou esta semana. Ache o esqueleto de cada frase (sujeito + verbo + complemento) e pontue de novo usando o teste da retirada.',
        '**Um texto oficial:** abra um edital de concurso de nível médio e procure 3 vírgulas e 1 ponto e vírgula. Diga qual passo explica cada um.',
        '**Sua redação:** na próxima redação, faça uma revisão só da pontuação. Procure, principalmente, vírgula entre sujeito e verbo.',
      ] },
      { tipo: 'pergunta', id: 'p3', texto: 'Cole aqui uma frase sua, antes e depois de corrigir a pontuação, e diga qual passo usou.' },

      /* ---------- 5. Reflexão ---------- */
      { tipo: 'etapa', etapa: 'reflexao', texto: 'O que mudou?' },
      { tipo: 'texto', texto: 'Volte às duas mensagens do início. Agora você sabe explicar: em "Não, espere", a vírgula separa a resposta ("não") do pedido ("espere"). E sabe por que a "pausa para respirar" engana: a vírgula segue o **esqueleto da frase**, não o fôlego. O esqueleto fica colado; o que está "pendurado" nele ganha vírgula.' },
      { tipo: 'pergunta', id: 'p4', texto: 'Explique para um amigo, com suas palavras, a "regra de ouro" e o "teste da retirada". Você pontua diferente no WhatsApp e num texto formal? Por quê?' },
    ],
    resumo: [
      'A vírgula segue a estrutura da frase, não a respiração. Mudar a vírgula pode mudar o sentido.',
      'Regra de ouro: nunca separe sujeito e verbo, nem verbo e complemento (mesmo com sujeito longo).',
      'Teste da retirada: se o trecho sai e a frase fica de pé, ele vai entre vírgulas.',
      'Vocativo (quem é chamado) e aposto (explicação ao lado) vêm separados por vírgula.',
      'Oração intercalada vai entre vírgulas. Com vírgula = explicativa (todos); sem vírgula = restritiva (só alguns).',
      'Adjunto adverbial longo e oração adverbial antes da principal: vírgula. Enumeração: vírgula entre os itens.',
      'Antes de "e": só com sujeitos diferentes, oposição ou repetição. Antes de mas/porém/pois: vírgula.',
      'Ponto e vírgula separa blocos com vírgulas dentro e itens de leis; dois-pontos anunciam enumeração, citação ou explicação.',
    ],
    fontes: [
      { nome: 'gov.br — Manual de Redação da Presidência da República (inclui pontuação na redação oficial)', url: 'https://www.gov.br/pt-br/servicos/consultar-o-manual-de-redacao-da-presidencia-da-republica' },
    ],
  },

  /* ======================= PORTUGUÊS — INTERPRETAÇÃO DE TEXTO (leitura com método + perguntas de banca) ======================= */
  'portugues-3-1': {
    metodo: 'freire',
    prerequisitos: [
      { texto: 'Perceber o papel das **conjunções** (mas, porque, portanto, embora) na ligação das ideias.', revisao: 'A [[conjunção]] diz qual é a relação entre duas ideias. "Estudou, **mas** não passou" → oposição. "Não passou **porque** não estudou" → causa. "Estudou, **portanto** passou" → conclusão. Numa prova de interpretação, essas palavras são placas de trânsito: mostram para onde o raciocínio do autor vai.' },
      { texto: 'Perceber a quem um **pronome** se refere.', revisao: 'O [[pronome]] evita repetir nomes: "A prefeitura abriu o edital. **Ele** prevê 200 vagas." Quem prevê 200 vagas? O edital. Muitas questões perguntam exatamente isso: "o termo **ele** retoma...".' },
    ],
    bncc: [
      { codigo: 'EM13LP01', texto: 'Relacionar o texto, tanto na produção como na leitura/escuta, com suas condições de produção e seu contexto sócio-histórico de circulação (leitor/audiência previstos, objetivos, pontos de vista e perspectivas, papel social do autor, época, gênero do discurso etc.), de forma a ampliar as possibilidades de construção de sentidos e de análise crítica e produzir textos adequados a diferentes situações.' },
      { codigo: 'EM13LP02', texto: 'Estabelecer relações entre as partes do texto, tanto na produção como na leitura/escuta, considerando a construção composicional e o estilo do gênero, usando/reconhecendo adequadamente elementos e recursos coesivos diversos que contribuam para a coerência, a continuidade do texto e sua progressão temática, e organizando informações, tendo em vista as condições de produção e as relações lógico-discursivas envolvidas (causa/efeito ou consequência; tese/argumentos; problema/solução; definição/exemplos etc.).' },
      { codigo: 'EM13LP06', texto: 'Analisar efeitos de sentido decorrentes de usos expressivos da linguagem, da escolha de determinadas palavras ou expressões e da ordenação, combinação e contraposição de palavras, dentre outros, para ampliar as possibilidades de construção de sentidos e de uso crítico da língua.' },
    ],
    bnccBase: [
      { codigo: 'EF35LP04', texto: 'Inferir informações implícitas nos textos lidos.' },
      { codigo: 'EF69LP05', texto: 'Inferir e justificar, em textos multissemióticos – tirinhas, charges, memes, gifs etc. –, o efeito de humor, ironia e/ou crítica pelo uso ambíguo de palavras, expressões ou imagens ambíguas, de clichês, de recursos iconográficos, de pontuação etc.' },
    ],
    blocos: [
      /* ---------- 1. Leitura do mundo ---------- */
      { tipo: 'etapa', etapa: 'leitura', texto: 'O aviso do elevador' },
      { tipo: 'texto', texto: 'Imagine que você chega em casa e encontra este aviso colado no elevador do prédio:' },
      { tipo: 'exemplo', titulo: 'O aviso', texto: '**AVISO AOS MORADORES**\nA partir de segunda-feira, o portão da garagem **voltará** a ser fechado às 22h. Pedimos, **mais uma vez**, a colaboração de todos.\n— A administração' },
      { tipo: 'pergunta', id: 'p1', texto: 'Separe em três listas: (1) o que o aviso **diz com todas as letras**; (2) o que dá para **concluir com segurança**, mesmo sem estar escrito; (3) o que **parece**, mas o aviso não permite afirmar.' },
      { tipo: 'revelar', texto: '**(1) Está escrito:** a partir de segunda, o portão fecha às 22h.\n\n**(2) Dá para concluir com segurança:** o portão **já fechava** às 22h antes e, em algum momento, **deixou de fechar**. Quem garante isso é a palavra "**voltará**". E "**mais uma vez**" mostra que a administração **já tinha pedido** colaboração antes.\n\n**(3) Parece, mas não dá para afirmar:** "os moradores desobedeceram", "houve um assalto", "o síndico está irritado". Pode ser verdade, mas o aviso **não diz** e **não obriga** a concluir isso.\n\nVocê acabou de fazer, sozinho, as três operações de toda prova de interpretação: **ler o que está escrito**, **concluir o que está implícito** e **segurar a imaginação**. O resto do tópico só dá nome e método a isso.' },

      /* ---------- 2. Problematização ---------- */
      { tipo: 'etapa', etapa: 'problematizacao', texto: 'Por que alguém que sabe ler erra questão de interpretação?' },
      { tipo: 'texto', texto: 'Interpretação de texto é a parte que mais pesa em Português nos concursos e no ENEM, e quase toda questão de outras matérias também começa com um texto. Mesmo assim, é onde muita gente boa erra. O motivo quase nunca é "não entender as palavras". O erro mais comum é **responder com a própria cabeça**, e não com o texto: concordar com uma alternativa porque ela é verdadeira no mundo, ou porque é o que você pensa, mesmo que o texto não diga aquilo.\n\nA banca sabe disso e monta as alternativas erradas de propósito: uma que **vai além** do texto, uma que **fica aquém**, uma que **diz o contrário**. Quem lê sem método cai nelas.' },
      { tipo: 'texto', texto: 'Paulo Freire dizia que "**a leitura do mundo precede a leitura da palavra**" (no livro A importância do ato de ler). Você já lê o mundo o tempo todo: percebe quando um vendedor quer te empurrar algo, quando uma mensagem é indireta, quando um elogio é ironia. Ler um texto com atenção é usar essa mesma esperteza no papel, e ela serve muito além da prova: para não cair em notícia falsa, em propaganda enganosa ou em cláusula escondida de contrato.' },
      { tipo: 'pergunta', id: 'p2', texto: 'Lembre de uma vez em que você entendeu algo que **não estava dito** (uma indireta, um "tá bom" que não era bom, um anúncio que prometia sem prometer). Como você percebeu?' },

      /* ---------- 3. Sistematização ---------- */
      { tipo: 'etapa', etapa: 'sistematizacao', texto: 'Ler com método, como a banca lê' },

      // ----- Compreensão × interpretação
      { tipo: 'titulo', texto: '1. Compreensão × interpretação: o comando diz o que fazer' },
      { tipo: 'texto', texto: 'As bancas usam duas famílias de pergunta. Saber qual delas você tem na frente muda o jeito de responder.' },
      { tipo: 'tabela', cabecalho: ['', 'Compreensão', 'Interpretação'], linhas: [
        ['O que pede', 'o que o texto **diz** (está escrito, explícito)', 'o que se **conclui** do texto (está implícito)'],
        ['Palavras do comando', '"segundo o texto", "de acordo com o autor", "o texto informa", "conforme o texto"', '"infere-se", "depreende-se", "conclui-se", "o texto sugere", "o autor dá a entender"'],
        ['Como responder', 'ache o trecho que diz aquilo, quase com as mesmas palavras (às vezes com sinônimos)', 'ache o trecho que **obriga** àquela conclusão'],
        ['No aviso do elevador', 'o portão fechará às 22h a partir de segunda', 'o portão já fechou às 22h no passado'],
      ] },
      { tipo: 'atencao', texto: 'Nos dois casos, a resposta **sai do texto**. Interpretar não é dar opinião: é tirar uma conclusão que o texto sustenta. Se você não consegue apontar o trecho que justifica a alternativa, desconfie dela.' },
      { tipo: 'checagem', pergunta: 'Uma questão começa assim: "Depreende-se do texto que...". Ela pede:', opcoes: ['uma informação copiada literalmente do texto', 'uma conclusão que o texto permite tirar, mesmo sem dizer com todas as letras', 'a opinião do candidato sobre o assunto', 'um resumo de todos os parágrafos'], correta: 1,
        explicacao: '"Depreender" é tirar uma conclusão a partir de algo. É uma pergunta de **interpretação**: a resposta está implícita, mas precisa estar **apoiada** no texto.',
        outraExplicacao: 'Troque "depreende-se" por "dá para concluir". "Dá para concluir do texto que..." Não é copiar (isso seria "segundo o texto") nem opinar (isso nunca é pedido). É concluir com base no que está escrito.' },

      // ----- Ideia principal
      { tipo: 'titulo', texto: '2. Tema e ideia principal' },
      { tipo: 'texto', texto: 'Duas coisas que parecem iguais, mas não são:\n• **Tema** é o **assunto**, cabe em poucas palavras: "sono e memória".\n• **Ideia principal** é **o que o texto afirma** sobre o assunto, e precisa de uma frase com verbo: "dormir pouco prejudica a memória de quem estuda".\n\nQuestões de "ideia central", "tese" ou "objetivo do texto" querem a **ideia principal**. Uma alternativa que só repete o tema costuma estar incompleta.' },
      { tipo: 'exemplo', titulo: 'Ache a ideia principal', texto: '"Muita gente troca horas de sono por horas de estudo na reta final antes da prova. Parece um bom negócio, mas não é. Durante o sono, o cérebro organiza o que foi aprendido no dia e guarda o que é importante. Quem corta o sono estuda mais horas, só que lembra menos do que estudou."\n\n• Tema: sono e estudo.\n• Ideia principal: **trocar sono por estudo é um mau negócio, porque o sono ajuda a fixar o que se aprende.**\n• O resto é **sustentação**: a explicação do que o cérebro faz e a consequência para quem corta o sono.' },
      { tipo: 'texto', texto: '**Método do título:** depois de ler, pergunte "se eu tivesse que dar um título-frase a esse texto, qual seria?". Outro atalho: a ideia principal costuma aparecer logo depois de um "mas", "porém", "na verdade" ou "portanto", que é onde o autor mostra a posição dele. No exemplo, ela vem logo depois de "mas não é".' },
      { tipo: 'checagem', pergunta: 'Qual alternativa expressa a **ideia principal** do texto sobre sono e estudo?', opcoes: ['O texto fala sobre sono.', 'Durante o sono, o cérebro organiza o que foi aprendido.', 'Cortar o sono para estudar mais é um mau negócio, porque o sono ajuda a guardar o que se aprendeu.', 'Quem estuda na reta final costuma ser aprovado.'], correta: 2,
        explicacao: 'É a única que diz **o que o autor defende** sobre o assunto e por quê. A primeira é só o tema; a segunda é um argumento de apoio (parte do texto, não o todo); a quarta não está no texto.',
        outraExplicacao: 'Pense: qual frase o autor quer que você leve para casa? "Não troque sono por estudo." Todas as outras frases do parágrafo existem para convencer você disso. A alternativa C é essa mensagem.' },

      // ----- Inferência
      { tipo: 'titulo', texto: '3. Inferência: concluir sem inventar' },
      { tipo: 'texto', texto: '[[Inferência]] é a conclusão que o texto **autoriza**, mesmo sem dizer. A palavra-chave é **autoriza**: uma boa inferência não é palpite. É algo que, se o texto for verdadeiro, **também tem que ser** verdadeiro.\n\n**Teste da inferência:** "o texto me **obriga** a concluir isso, ou só me **deixa imaginar**?". Se só deixa imaginar, a alternativa está errada.' },
      { tipo: 'exemplo', titulo: 'Inferência válida × palpite', texto: 'Texto: "Na última seleção, Carla foi a única candidata do grupo de estudos que conseguiu a vaga."\n\n• Os outros membros do grupo que fizeram a seleção não conseguiram a vaga. → **inferência válida** ("a única" obriga a essa conclusão).\n• Carla estudou mais que os colegas. → **palpite**. Pode ter sido sorte, experiência, outro motivo. O texto não diz.\n• O grupo de estudos é ruim. → **palpite**, e ainda um julgamento.' },
      { tipo: 'checagem', pergunta: 'Texto: "Desde que o aplicativo do banco mudou de layout, o número de reclamações no atendimento triplicou." Qual é uma inferência **válida**?', opcoes: ['O novo layout é pior que o antigo.', 'O banco vai voltar ao layout antigo.', 'As reclamações aumentaram depois da mudança de layout.', 'Os clientes do banco são idosos e não sabem usar celular.'], correta: 2,
        explicacao: '"Desde que" + "triplicou" garantem que as reclamações aumentaram **depois** da mudança. Que o layout é pior, que o banco vai voltar atrás ou quem são os clientes, o texto **não obriga** a concluir.',
        outraExplicacao: 'Faça o teste em cada uma: "o texto me obriga?". Pior? Talvez as pessoas só estranhem o novo, então não obriga. Voltar atrás? Não se fala nisso. Clientes idosos? Inventado. Aumento depois da mudança? Está garantido pelas próprias palavras do texto.' },

      // ----- Pressuposto × subentendido
      { tipo: 'titulo', texto: '4. Pressuposto × subentendido: os dois tipos de implícito' },
      { tipo: 'texto', texto: 'Há dois jeitos de um texto dizer algo sem dizer:\n• O [[pressuposto]] vem **preso a uma palavra** da frase. Quem fala não tem como "desdizer".\n• O [[subentendido]] é uma **insinuação**: depende da situação, e quem fala pode sempre dizer "eu não falei isso".' },
      { tipo: 'tabela', cabecalho: ['', 'Pressuposto', 'Subentendido'], linhas: [
        ['De onde vem', 'de uma palavra ou expressão da frase', 'do contexto, da situação'],
        ['Quem fala pode negar?', '**não**: a palavra está ali', '**sim**: "você é que entendeu assim"'],
        ['Exemplo', '"Você **ainda** trabalha lá?" → antes você trabalhava lá', '"Nossa, que calor aqui dentro..." → abra a janela / ligue o ventilador'],
        ['Na prova', 'cai muito, com gabarito firme', 'cai em charges, propagandas e ironias'],
      ] },
      { tipo: 'texto', texto: '**Palavras que carregam pressupostos** (as bancas adoram):\n• **ainda, já, continuar, permanecer** → a situação existia antes. "Ele **continua** desempregado" → estava desempregado antes.\n• **voltar a, de novo, outra vez, mais uma vez** → já aconteceu antes. (O "voltará" do aviso!)\n• **deixar de, parar de** → antes fazia. "Ela **parou de** fumar" → fumava.\n• **até, inclusive, também** → há outros, e aquele era o menos esperado. "**Até** o diretor errou" → outros erraram, e não se esperava que o diretor errasse.\n• **verbos como descobrir, perceber, lamentar** → o que vem depois é verdade. "Ele **descobriu** que foi enganado" → foi enganado mesmo.' },
      { tipo: 'texto', texto: '**Teste da negação:** negue a frase. Se a informação **continua valendo**, é pressuposto. "Ela parou de fumar" → "Ela **não** parou de fumar": nas duas, ela fumava antes. O pressuposto sobreviveu à negação.' },
      { tipo: 'checagem', pergunta: '"O candidato **voltou a** liderar as pesquisas." Qual informação é **pressuposta** pela frase?', opcoes: ['O candidato vai ganhar a eleição.', 'O candidato já tinha liderado as pesquisas antes e perdeu a liderança em algum momento.', 'As pesquisas estão erradas.', 'O candidato é o mais preparado.'], correta: 1,
        explicacao: '"Voltar a" pressupõe que ele **já liderava** e **deixou de liderar**. Ganhar a eleição, pesquisa errada ou "mais preparado" não estão presos a nenhuma palavra da frase.',
        outraExplicacao: 'Use o teste da negação: "O candidato **não** voltou a liderar". Mesmo negando, continua valendo que ele liderou antes. O que sobrevive à negação é o pressuposto.' },
      { tipo: 'checagem', pergunta: 'Na reunião, o chefe diz: "Interessante... o relatório de vocês chegou bem no último minuto, de novo." Além do pressuposto (já chegou atrasado antes), qual é o **subentendido** mais provável?', opcoes: ['O relatório estava excelente.', 'O chefe está cobrando, de forma indireta, que a equipe entregue antes do prazo.', 'O chefe vai demitir a equipe.', 'O relatório chegou depois do prazo.'], correta: 1,
        explicacao: 'O chefe não diz "entreguem antes", mas a situação (reunião, "de novo", "interessante...") deixa a cobrança no ar. É **subentendido**: ele poderia negar ("só comentei"). Demitir é extrapolação; "depois do prazo" contradiz "no último minuto" (ainda dentro do prazo).',
        outraExplicacao: 'Pergunte "por que ele disse isso?". Ninguém comenta o horário de entrega à toa numa reunião. A mensagem que ele **insinua**, sem falar diretamente, é: "parem de deixar para a última hora".' },

      // ----- Erros clássicos
      { tipo: 'titulo', texto: '5. Os três erros que a banca planta nas alternativas' },
      { tipo: 'texto', texto: 'Quase toda alternativa errada de interpretação cai em um destes três tipos. Reconhecer o tipo é o jeito mais rápido de eliminar.' },
      { tipo: 'tabela', cabecalho: ['Erro', 'O que faz', 'Sinais típicos'], linhas: [
        ['[[Extrapolação]]', '**vai além** do texto: generaliza, acrescenta informação de fora, faz previsão', '"sempre", "nunca", "todos", "único", "certamente", "vai acontecer"'],
        ['**Redução**', '**fica aquém**: pega só uma parte do texto e apresenta como se fosse o todo', '"o texto trata **apenas** de...", "o objetivo é **só**..."'],
        ['**Contradição**', '**diz o contrário** do texto', 'troca de sinal: aumentou ↔ diminuiu, pode ↔ deve, causa ↔ consequência'],
      ] },
      { tipo: 'exemplo', titulo: 'Os três erros em ação', texto: 'Texto: "Pesquisas indicam que dormir bem melhora a memória. Por isso, quem estuda à noite e dorme pouco tende a render menos no dia seguinte."\n\nA) Dormir bem é a **única** forma de melhorar a memória. → **extrapolação** (o texto não diz "única").\nB) O texto trata **apenas** de quem estuda à noite. → **redução** (ele fala de sono e memória em geral).\nC) Dormir pouco **não afeta** o rendimento. → **contradição**.\nD) O sono tem relação com o desempenho nos estudos. → **correta**: mais "sem graça", e exatamente por isso segura.' },
      { tipo: 'atencao', texto: 'A alternativa certa costuma ser a **mais modesta**. Desconfie de palavras absolutas (sempre, nunca, todos, nenhum, apenas, exclusivamente) e de verbos que trocam a força do texto: o texto diz "**tende a**", a alternativa diz "**vai**"; o texto diz "**pode**", a alternativa diz "**deve**".' },
      { tipo: 'checagem', pergunta: 'Texto: "Parte dos jovens brasileiros tem usado redes sociais como principal fonte de notícias." Alternativa: "Os jovens brasileiros não leem mais jornais." Essa alternativa comete:', opcoes: ['redução', 'extrapolação', 'nenhum erro: é uma inferência válida', 'erro de compreensão do vocabulário'], correta: 1,
        explicacao: 'O texto fala de **parte** dos jovens e de **principal** fonte. A alternativa generaliza ("os jovens", todos) e afirma algo que o texto não diz ("não leem mais jornais"). Foi **além** do texto: **extrapolação**.',
        outraExplicacao: 'Compare a força das palavras: "parte" virou "todos"; "principal fonte" virou "única fonte". Quando a alternativa é mais forte e mais ampla que o texto, é extrapolação. Redução seria o contrário: ficar com um pedaço só.' },

      // ----- Tipos e gêneros
      { tipo: 'titulo', texto: '6. Tipos e gêneros textuais' },
      { tipo: 'texto', texto: 'O [[gênero textual]] é o "formato" que o texto tem no mundo real, com nome próprio: notícia, receita, bula, edital, e-mail, crônica, meme. O [[tipo textual]] é o **modo de organizar** o texto por dentro. São poucos, e cabem em uma tabela:' },
      { tipo: 'tabela', cabecalho: ['Tipo', 'O que faz', 'Marcas', 'Gêneros onde predomina'], linhas: [
        ['**Narrativo**', 'conta fatos em sequência', 'personagens, tempo, verbos no passado', 'conto, crônica, notícia, relato'],
        ['**Descritivo**', 'mostra como algo é', 'adjetivos, verbos de estado (ser, estar, ter)', 'classificado, laudo, cardápio'],
        ['**Expositivo**', 'explica, informa', 'definições, dados, tom neutro', 'verbete, aula, artigo de divulgação'],
        ['**Argumentativo**', 'defende uma opinião ([[tese]])', 'argumentos, conectivos (portanto, porém), opinião', 'artigo de opinião, editorial, redação do ENEM'],
        ['**Injuntivo**', 'manda, orienta, instrui', 'verbos no imperativo ou infinitivo', 'receita, manual, bula, edital'],
      ] },
      { tipo: 'texto', texto: 'Um gênero quase sempre **mistura** tipos. Uma receita tem a lista de ingredientes (descritiva) e o modo de preparo (injuntivo). Por isso a banca pergunta qual tipo **predomina**. E reconhecer o gênero já diz muito sobre a **intenção**: ninguém escreve um edital para emocionar, nem uma crônica para dar instruções.' },
      { tipo: 'checagem', pergunta: 'Um edital de concurso diz: "O candidato deverá comparecer ao local de prova com uma hora de antecedência, munido de documento oficial com foto." Qual tipo textual predomina nesse trecho?', opcoes: ['narrativo', 'descritivo', 'injuntivo', 'argumentativo'], correta: 2,
        explicacao: 'O trecho **orienta** o que o candidato deve fazer ("deverá comparecer", "munido de documento"). Texto que instrui ou ordena é **injuntivo**.',
        outraExplicacao: 'Pergunte: o trecho está contando uma história (narrativo)? Mostrando como algo é (descritivo)? Defendendo opinião (argumentativo)? Não. Está dizendo **o que fazer**. Isso é injunção, igual a uma receita ou um manual.' },

      // ----- Intenção do autor
      { tipo: 'titulo', texto: '7. Intenção do autor: para que esse texto existe?' },
      { tipo: 'texto', texto: 'Todo texto foi escrito por alguém, para alguém, com um objetivo: **informar, convencer, instruir, criticar, divertir, emocionar, vender**. A pergunta "qual é a intenção do autor?" se responde com pistas:\n• **O gênero:** propaganda quer vender; editorial quer convencer; manual quer instruir.\n• **A escolha das palavras:** o mesmo fato pode ser contado com palavras que acusam ou que defendem.\n• **Palavras de avaliação**, como "**infelizmente**", "**felizmente**", "**supostamente**", "**apenas**", "**finalmente**": elas mostram a posição de quem escreve, mesmo num texto que parece neutro.' },
      { tipo: 'exemplo', titulo: 'O mesmo fato, duas intenções', texto: 'Fato: a prefeitura aumentou a passagem de ônibus de R$ 5,00 para R$ 5,50.\n\nManchete 1: "Prefeitura **reajusta** passagem em 10% após **três anos** sem aumento."\nManchete 2: "Passagem **dispara** e trabalhador vai pagar **mais caro** para chegar ao emprego."\n\nOs números são os mesmos. A primeira escolhe "reajusta" e "três anos sem aumento" e deixa o aumento com cara de **justo**. A segunda escolhe "dispara" e "trabalhador" e deixa o aumento com cara de **abuso**. Nenhuma mentiu; as duas **escolheram**.' },
      { tipo: 'checagem', pergunta: 'Num texto sobre uma nova lei, o autor escreve: "A medida, **finalmente** aprovada, corrige uma injustiça antiga." O advérbio "finalmente" indica que o autor:', opcoes: ['é contra a medida', 'considera a aprovação algo esperado e positivo, que demorou', 'apenas informa a data da aprovação, de forma neutra', 'não sabe se a medida foi aprovada'], correta: 1,
        explicacao: '"Finalmente" mostra **espera** e **alívio**: o autor queria que a medida fosse aprovada e acha que demorou. Junto com "corrige uma injustiça", deixa clara uma posição **favorável**.',
        outraExplicacao: 'Tire a palavra: "A medida, aprovada ontem, ..." fica neutro. Coloque de volta: "A medida, **finalmente** aprovada" e aparece um suspiro de "até que enfim". Essa diferença é a voz do autor.' },

      // ----- Ironia e humor
      { tipo: 'titulo', texto: '8. Ironia e humor em textos curtos' },
      { tipo: 'texto', texto: 'A [[ironia]] é dizer uma coisa querendo dizer o **contrário**, e contar que o leitor vai perceber pelo contexto. Ela é um tipo de subentendido: as palavras dizem "A", a situação grita "não A".' },
      { tipo: 'exemplo', titulo: 'Ironia', texto: '"Que maravilha: o ônibus quebrou de novo, justo no dia da prova."\n→ Ninguém acha maravilhoso perder a prova. O elogio é **falso**, e a situação mostra isso. A frase é uma **reclamação**.\n\nQuem já jogou Zelda: Ocarina of Time e ouviu um amigo dizer "Oba, chegou o templo da água!" entende na hora: a fase mais odiada do jogo não é motivo de "oba". É a mesma ironia.' },
      { tipo: 'texto', texto: 'O **humor** em textos curtos (piadas, tiras, memes, charges) quase sempre nasce de uma **quebra de expectativa**: o texto leva você a esperar uma coisa e entrega outra. Os recursos mais comuns:\n• **Duplo sentido** (ambiguidade): uma palavra ou frase com dois significados, e o humor está em trocar um pelo outro.\n• **Sentido literal × figurado**: alguém entende "ao pé da letra" o que era uma expressão.\n• **Exagero**: aumentar algo até o absurdo.\n• **Contraste**: personagem que fala de um jeito que não combina com ele (uma criança com vocabulário de professor universitário).' },
      { tipo: 'exemplo', titulo: 'Duplo sentido', texto: 'Na praça:\n— Você soube? O banco da esquina fechou.\n— Fechou nada, eu estava sentado nele agora há pouco.\n\nO primeiro fala do **banco instituição** (agência). O segundo entende **banco de sentar**. A graça está na troca de um sentido pelo outro: a palavra é a mesma, a expectativa é quebrada.\n\nEm charges e memes, o humor muitas vezes traz junto uma **crítica**. Nesses casos, a pergunta de prova não é só "por que é engraçado?", mas "**o que está sendo criticado?**".' },
      { tipo: 'indicacao', obra: 'Calvin e Haroldo', autor: 'Bill Watterson', texto: 'Muitas tiras de Calvin funcionam por **contraste**: um menino de seis anos usa vocabulário e argumentos de adulto para justificar por que não vai fazer o dever de casa, ou para fazer um discurso filosófico no meio de uma brincadeira. Leia algumas nas coletâneas publicadas no Brasil e pergunte em cada uma: **de onde vem a graça?** E, quando houver, **qual é a crítica?**' },
      { tipo: 'checagem', pergunta: 'Depois de três horas na fila do banco, uma cliente comenta: "Adoro passar minha folga aqui, é o meu programa favorito." A frase é:', opcoes: ['uma informação literal sobre os gostos da cliente', 'uma ironia, que expressa insatisfação com a demora', 'um pressuposto de que ela trabalha no banco', 'uma extrapolação, porque ela não disse quanto tempo esperou'], correta: 1,
        explicacao: 'Depois de três horas de fila, ninguém "adora" estar ali. As palavras elogiam, a situação desmente: é **ironia**, e o sentido real é uma **reclamação** da demora.',
        outraExplicacao: 'Compare o que é **dito** ("adoro", "programa favorito") com o que está **acontecendo** (três horas de fila numa folga). Quando os dois brigam, o sentido verdadeiro é o da situação. Isso é ironia.' },

      // ----- Método de prova
      { tipo: 'titulo', texto: 'Juntando tudo: o passo a passo na prova' },
      { tipo: 'lista', itens: [
        '**1. Leia o comando antes do texto.** "Segundo o texto" (compreensão) ou "infere-se" (interpretação)? Você já lê o texto sabendo o que procurar.',
        '**2. Leia o texto inteiro uma vez, sem marcar alternativa.** Pergunte: qual é o gênero? Quem escreveu, para quem, para quê?',
        '**3. Resuma cada parágrafo numa frase curta** (de cabeça ou na margem). No fim, junte numa ideia principal.',
        '**4. Volte ao texto para cada alternativa.** Ache o trecho que a confirma. Sem trecho, sem resposta.',
        '**5. Elimine pelos três erros:** foi além (extrapolação), ficou aquém (redução), disse o contrário (contradição)?',
        '**6. Desconfie das palavras absolutas** e da troca de força ("pode" → "deve", "tende" → "vai").',
        '**7. Em provas de certo ou errado** (como as do Cebraspe), basta um pedaço errado para o item inteiro estar errado. Leia a afirmação até o fim.',
      ] },

      /* ---------- 4. Ação ---------- */
      { tipo: 'etapa', etapa: 'acao', texto: 'Leia o mundo com método' },
      { tipo: 'lista', itens: [
        '**Notícia aberta:** escolha uma notícia da Agência Brasil (o conteúdo tem licença livre, Creative Commons). Escreva o tema, a ideia principal e um pressuposto que você encontrou (procure "ainda", "voltou a", "deixou de").',
        '**Duas manchetes:** pegue um fato do dia e escreva você mesmo duas manchetes, uma favorável e outra crítica, como no exemplo da passagem de ônibus.',
        '**Caça à ironia:** na próxima vez que vir um meme ou charge, pergunte: o que é dito? O que a situação mostra? Qual é a crítica?',
        '**Questões reais:** resolva questões de Linguagens de provas anteriores do ENEM (o Inep disponibiliza as provas e os gabaritos). Em cada erro, anote qual dos três erros você cometeu.',
      ] },
      { tipo: 'pergunta', id: 'p3', texto: 'Cole aqui o tema, a ideia principal e o pressuposto da notícia que você leu, ou as suas duas manchetes.' },

      /* ---------- 5. Reflexão ---------- */
      { tipo: 'etapa', etapa: 'reflexao', texto: 'O que mudou?' },
      { tipo: 'texto', texto: 'Volte ao aviso do elevador. Agora você tem nome para tudo: o horário é **informação explícita**; "voltará" e "mais uma vez" carregam **pressupostos**; e "os moradores desobedeceram" seria um **subentendido** possível, mas nunca uma resposta segura de prova. Já "o síndico vai multar todo mundo" seria pura **extrapolação**.' },
      { tipo: 'pergunta', id: 'p4', texto: 'Qual dos três erros (extrapolação, redução, contradição) você acha que mais comete? Por quê? Explique, com suas palavras, a diferença entre pressuposto e subentendido.' },
    ],
    resumo: [
      '"Segundo o texto" = compreensão (está escrito). "Infere-se / depreende-se" = interpretação (está implícito, mas sustentado pelo texto).',
      'Tema é o assunto; ideia principal é o que o autor afirma sobre ele (frase com verbo).',
      'Inferência válida: o texto obriga a concluir. Se só deixa imaginar, é palpite.',
      'Pressuposto vem preso a uma palavra (ainda, voltar a, deixar de, até) e sobrevive à negação. Subentendido é insinuação e pode ser negado.',
      'Erros clássicos: extrapolação (vai além), redução (fica aquém), contradição (diz o contrário).',
      'Desconfie de "sempre, nunca, todos, apenas" e da troca de força: "pode" → "deve".',
      'Tipos: narrativo, descritivo, expositivo, argumentativo, injuntivo. Gêneros: notícia, receita, edital... (misturam tipos).',
      'Ironia: dizer o contrário do que se pensa, com o contexto desmentindo. Humor: quebra de expectativa, duplo sentido.',
    ],
    fontes: [
      { nome: 'Inep — Provas e gabaritos do ENEM (questões reais de Linguagens)', url: 'https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem/provas-e-gabaritos' },
      { nome: 'Agência Brasil (EBC) — notícias com licença Creative Commons, boas para praticar a leitura', url: 'https://agenciabrasil.ebc.com.br/' },
      { nome: 'gov.br — Manual de Redação da Presidência da República', url: 'https://www.gov.br/pt-br/servicos/consultar-o-manual-de-redacao-da-presidencia-da-republica' },
    ],
  },
};

/**
 * Auditoria do conteúdo (relatório completo em docs/auditoria.md).
 * Cada tópico listado teve fatos, contas, gabaritos e textos da BNCC
 * conferidos com fontes confiáveis. A tela de estudo mostra um selo.
 * { idDoTópico: 'observação curta, quando houver' }
 */
App.dados.auditoria = {
  data: '2026-10-18',
  topicos: {
    'portugues-1-0': '', 'portugues-1-1': '', 'portugues-1-2': '', 'portugues-1-3': '', 'portugues-3-1': '',
    'matematica-1-0': '',
    'matematica-1-1': '',
    'matematica-1-2': '',
    'matematica-1-3': '',
    'historia-1-0': '', 'geografia-1-0': '', 'filosofia-1-0': '', 'sociologia-1-0': '',
    'biologia-1-0': '', 'informatica-1-0': '', 'administracao-1-0': '', 'logica-1-0': '',
    // Conferidos depois: o valor é a data da conferência
    'ingles-1-0': '2026-10-21',
  },
};
