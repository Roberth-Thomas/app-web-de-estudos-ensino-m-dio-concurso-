/* =========================================================
   apoio.js — glossário (por matéria) e personagens das tirinhas
   Glossário: nos textos, [[fator]] ou [[os fatores|fator]] vira uma
   palavra sublinhada que mostra a definição ao tocar. Nas explicações
   dos exercícios e dos "Entendeu?", os termos são marcados sozinhos
   (ver App.comp.marcarTermos).
   A mesma palavra pode ter sentidos diferentes em cada matéria
   ("conjunção" em Português × em Raciocínio lógico), por isso o
   glossário é separado por matéria. Chaves sempre em minúsculas.
   ========================================================= */
App.dados = App.dados || {};

App.dados.glossarios = {
  /* ================= Português ================= */
  portugues: {
    'norma-padrão': 'A variedade da língua usada como referência em documentos oficiais, leis, provas e textos formais. Não é a única forma "certa" de falar, mas é a esperada nessas situações.',
    'invariável': 'Que não muda de forma: não tem masculino/feminino, singular/plural, nem muda com o tempo. Ex.: "ontem", "de", "mas".',
    'flexão': 'A mudança na forma da palavra para indicar gênero (aluno/aluna), número (aluno/alunos), pessoa ou tempo (estudo/estudei).',
    'substantivo': 'Palavra que dá nome a seres, coisas, lugares, sentimentos e ideias: casa, Maria, saudade. Teste: cabe "o/a/um/uma" antes.',
    'adjetivo': 'Palavra que dá uma característica ao substantivo e muda junto com ele: aluno dedicado → alunas dedicadas.',
    'advérbio': 'Palavra que indica uma circunstância (quando, onde, como, quanto) e não muda de forma: ontem, aqui, bem, muito, não.',
    'pronome': 'Palavra que substitui ou acompanha o substantivo: ela, nós, meu, este, alguém. Evita repetir nomes.',
    'artigo': 'Palavra que vem antes do substantivo: o, a, os, as (definidos: algo específico) e um, uma, uns, umas (indefinidos: qualquer um).',
    'numeral': 'Palavra que indica quantidade, ordem, fração ou multiplicação: dois, segundo, metade, dobro.',
    'preposição': 'Palavra que liga duas palavras criando uma relação entre elas: a, de, em, para, por, com, sem ("copo de vidro").',
    'interjeição': 'Palavra que expressa emoção ou apelo, geralmente com ponto de exclamação: Ufa! Nossa! Socorro!',
    'sujeito': 'O termo sobre o qual se declara algo na oração. Em "Os candidatos chegaram", o sujeito é "os candidatos". Dica: pergunte "quem?" ou "o quê?" ao verbo.',
    'verbo': 'A palavra que indica ação, estado ou fenômeno e muda com o tempo e a pessoa: estudar, ser, chover.',
    'complemento': 'Termo que completa o sentido de um verbo ou nome. Em "Ela aprovou o projeto", "o projeto" completa o verbo aprovar.',
    'vocativo': 'O nome de quem está sendo chamado ou interpelado na frase: "**Maria**, venha cá." Sempre vem separado por vírgula.',
    'aposto': 'Um termo que explica outro, logo ao lado dele: "Brasília, **a capital do país**, ..." O aposto explicativo vem entre vírgulas.',
    'adjunto adverbial': 'Termo que indica uma circunstância (tempo, lugar, modo, causa...) da ação: "**ontem**", "**na escola**", "**com calma**".',
    'oração': 'Um trecho da frase organizado em torno de um verbo. "Quando chegar, me avise" tem duas orações (dois verbos: chegar e avisar).',
    'conjunção': 'Palavra que liga orações ou termos e cria uma relação de sentido entre eles: e, mas, porque, embora, portanto.',
    'conjunção adversativa': 'Conjunção que indica oposição entre duas ideias: mas, porém, contudo, todavia, entretanto, no entanto.',
    'concessão': 'Relação em que um fato poderia impedir outro, mas não impede: "**Embora** chovesse, saímos." Conjunções: embora, ainda que, mesmo que.',
    'explicativa': 'Oração que acrescenta uma informação sobre TODO o termo anterior. Vem entre vírgulas: "Os alunos, que estudaram, passaram" (todos estudaram).',
    'restritiva': 'Oração que separa só UMA PARTE do termo anterior. Vem sem vírgulas: "Os alunos que estudaram passaram" (só esses).',
    'zeugma': 'Omissão de uma palavra que já apareceu antes na frase. A vírgula marca o lugar dela: "Eu prefiro café; ela, chá" (= ela prefere chá).',
    'impessoal': 'Verbo sem sujeito, que fica sempre no singular: "**Faz** dois anos", "**Houve** problemas" (haver = existir).',
    'concordância': 'A combinação entre palavras: o verbo concorda com o sujeito (eles estudam) e o adjetivo com o substantivo (casas antigas).',
    'regência': 'A relação entre um verbo (ou nome) e o seu complemento, com ou sem preposição: "obedecer **aos** sinais", "assistir **ao** filme".',
    'crase': 'A junção da preposição "a" com o artigo "a", marcada pelo acento grave: "vou **à** praia" (a + a praia).',
    'próclise': 'O pronome oblíquo antes do verbo: "Nunca **o** vi". Palavras como não, nunca e que puxam o pronome para antes.',
    'ênclise': 'O pronome oblíquo depois do verbo, ligado por hífen: "Entregue-**me** o livro".',
    'subjuntivo': 'Modo verbal da dúvida, do desejo ou da hipótese: "que eu **estude**", "se eu **estudasse**", "quando eu **estudar**".',
    'sufixo': 'Pedaço acrescentado no fim da palavra para formar outra: rápida + **-mente** = rapidamente.',
    'prefixo': 'Pedaço acrescentado no começo da palavra para formar outra: **anti-** + inflamatório, **micro-** + ondas.',
    'sílaba tônica': 'A sílaba pronunciada com mais força na palavra: ca-**FÉ**, **CA**-sa, **LÂM**-pa-da.',
    'oxítona': 'Palavra com a sílaba forte na **última** sílaba: ca-**fé**, a-**mor**, ca-**qui**.',
    'paroxítona': 'Palavra com a sílaba forte na **penúltima** sílaba: **ca**-sa, **lá**-pis, **ú**-til. É o tipo mais comum em português.',
    'proparoxítona': 'Palavra com a sílaba forte na **antepenúltima** sílaba: **lâm**-pa-da, **mé**-di-co. Todas levam acento.',
    'ditongo': 'Duas vogais pronunciadas juntas, na **mesma sílaba**: p**ai**, h**ei**-ma, he-**rói**. "Ditongo aberto" é quando o som é aberto: éi, ói, éu.',
    'hiato': 'Duas vogais vizinhas que ficam em **sílabas separadas**: sa-**ú**-de, sa-**í**-da, ba-**ú**.',
    'acordo ortográfico': 'O acordo entre os países de língua portuguesa (1990) que unificou a escrita. Vale no Brasil pelo Decreto nº 6.583/2008 e mudou regras de acento, trema e hífen.',
    'trema': 'Os dois pontinhos sobre o u (lingüiça). Foi abolido pelo Acordo Ortográfico; hoje só aparece em nomes estrangeiros (Müller).',
    'acento diferencial': 'Acento usado só para diferenciar palavras iguais na escrita: pôde (passado) × pode (presente); pôr (verbo) × por (preposição).',
    'coesão': 'A ligação entre as partes do texto, feita com conectivos (mas, porque, portanto) e retomadas (ele, esse fato). Deixa o texto "amarrado".',
    'coerência': 'A lógica das ideias do texto: elas não se contradizem e fazem sentido juntas.',
    'tese': 'A opinião principal que o texto dissertativo defende, numa frase clara. Todo o resto do texto serve para sustentá-la.',
  },

  /* ================= Matemática ================= */
  matematica: {
    'decimal': 'Número escrito com vírgula, como 0,25. Toda porcentagem pode ser escrita como decimal: é só dividir por 100 (25% = 0,25).',
    'fator': 'Número pelo qual você multiplica um valor para aplicar um aumento ou desconto de uma vez só. Aumento de 10% → fator 1,10. Desconto de 10% → fator 0,90.',
    'base': 'O valor de referência sobre o qual a porcentagem é calculada: "20% de QUÊ?". Numa variação, a base é sempre o valor antigo.',
    'variação percentual': 'Quanto um valor mudou, medido em relação ao valor antigo: (novo − antigo) ÷ antigo × 100.',
    'ponto percentual': 'A diferença simples entre duas porcentagens. De 10% para 12% são 2 pontos percentuais (e um aumento relativo de 20%).',
    'sucessivas': 'Porcentagens aplicadas uma depois da outra, cada uma sobre o resultado da anterior. Os fatores se multiplicam.',
    'aumentos sucessivos': 'Aumentos aplicados um depois do outro. Os fatores se multiplicam: +10% e +10% → 1,1 × 1,1 = 1,21 (+21%).',
    'inflação': 'O aumento geral dos preços ao longo do tempo. Com inflação de 6%, o que custava R$ 100 passa a custar, em média, R$ 106.',
    'ipca': 'Índice Nacional de Preços ao Consumidor Amplo: a medida oficial da inflação no Brasil, calculada pelo IBGE.',
    'poder de compra': 'O quanto o seu dinheiro consegue comprar. Se o salário sobe menos que os preços, o poder de compra cai.',
    'razão': 'Comparação entre duas quantidades por divisão: 12 homens e 18 mulheres → razão 12/18 = 2/3.',
    'proporção': 'Igualdade entre duas razões: a/b = c/d. Vale a multiplicação cruzada: a·d = b·c.',
    'regra de três': 'Método para achar um valor desconhecido quando as grandezas são proporcionais (direta ou inversamente).',
    'inversamente proporcionais': 'Grandezas em que, quando uma dobra, a outra cai pela metade (o produto fica constante): mais operários → menos dias.',
    'diretamente proporcionais': 'Grandezas que crescem juntas na mesma proporção (a razão fica constante): mais quilos → mais caro.',
    'função': 'Regra que associa a cada valor de entrada (x) um único valor de saída (y). Ex.: o preço do táxi depende dos km rodados.',
    'raízes': 'Os valores de x que tornam a função igual a zero: onde o gráfico corta o eixo x.',
    'parábola': 'O gráfico da função do 2º grau: uma curva em forma de "U" (para cima ou para baixo).',
    'vértice': 'O ponto mais alto ou mais baixo da parábola: onde está o valor máximo ou mínimo.',
    'pa': 'Progressão aritmética: sequência em que se soma sempre o mesmo número (a razão). Ex.: 3, 7, 11, 15 (soma 4).',
    'pg': 'Progressão geométrica: sequência em que se multiplica sempre pelo mesmo número (a razão). Ex.: 2, 6, 18, 54 (× 3).',
    'probabilidade': 'A chance de algo acontecer: casos favoráveis ÷ casos possíveis. Sair 6 num dado: 1/6.',
    'permutação': 'O número de jeitos de organizar elementos em ordem. 4 letras diferentes: 4! = 4 × 3 × 2 × 1 = 24.',
    'juros simples': 'Juros calculados sempre sobre o valor inicial: J = capital × taxa × tempo. Crescem em linha reta.',
    'juros compostos': 'Juros calculados sobre o valor que já cresceu ("juros sobre juros"): M = C × (1 + i)ᵗ.',
    'montante': 'O valor final de uma aplicação ou dívida: o capital inicial mais os juros.',
    'média aritmética': 'A soma de todos os valores dividida pela quantidade de valores. Média de 4, 6 e 8 = 18 ÷ 3 = 6.',
  },

  /* ================= Raciocínio lógico ================= */
  logica: {
    'proposição': 'Frase declarativa que pode ser julgada como verdadeira ou falsa. "Brasília é a capital" é proposição; "Feche a porta" não é.',
    'conjunção': 'Em lógica, o conectivo "e" (∧): "p e q" só é verdadeira quando as duas partes são verdadeiras.',
    'disjunção': 'O conectivo "ou" (∨): "p ou q" só é falsa quando as duas partes são falsas.',
    'condicional': 'O "se..., então..." (→). Só é falso quando a primeira parte é verdadeira e a segunda é falsa.',
    'negação': 'Inverter o valor de uma proposição (~p). A negação de "todo" é "algum... não".',
    'tabela-verdade': 'Tabela com todas as combinações de verdadeiro e falso das proposições. Com n proposições, tem 2ⁿ linhas.',
    'contrapositiva': 'Forma equivalente do condicional: "se p, então q" equivale a "se não q, então não p".',
    'equivalência': 'Duas proposições que têm sempre o mesmo valor (verdadeiro ou falso), escritas de formas diferentes.',
    'de morgan': 'Leis para negar "e" e "ou": não (p e q) = não p ou não q; não (p ou q) = não p e não q.',
    'fibonacci': 'Sequência em que cada termo é a soma dos dois anteriores: 1, 1, 2, 3, 5, 8, 13...',
  },

  /* ================= Biologia ================= */
  biologia: {
    'organela': 'Estrutura dentro da célula com uma função própria, como um "órgão" da célula: mitocôndria, cloroplasto, ribossomo.',
    'mitocôndria': 'Organela que faz a respiração celular: usa glicose e oxigênio para produzir energia (ATP). A "usina" da célula.',
    'cloroplasto': 'Organela das plantas e algas que faz a fotossíntese, graças à clorofila (o pigmento verde).',
    'fotossíntese': 'Processo em que plantas e algas usam luz, água e gás carbônico para produzir glicose e liberar oxigênio.',
    'respiração celular': 'Processo em que a célula quebra a glicose com oxigênio para liberar energia, produzindo gás carbônico e água.',
    'procariontes': 'Seres de células sem núcleo organizado (sem carioteca), como as bactérias.',
    'dna': 'A molécula que guarda as informações genéticas, formada por nucleotídeos com as bases A, T, C e G.',
    'nucleotídeos': 'As unidades que formam o DNA: cada uma tem um açúcar, um fosfato e uma base nitrogenada.',
    'xilema': 'Tecido da planta que leva a seiva bruta (água e sais minerais) das raízes até as folhas.',
    'floema': 'Tecido da planta que distribui a seiva elaborada (com açúcares) produzida nas folhas.',
    'hemácias': 'Glóbulos vermelhos do sangue: transportam oxigênio, graças à hemoglobina.',
    'leucócitos': 'Glóbulos brancos do sangue: defendem o corpo contra infecções.',
    'heterótrofos': 'Seres que não produzem o próprio alimento e precisam obtê-lo de outros seres (animais, fungos).',
    'seleção natural': 'Ideia de Darwin: os indivíduos mais adaptados ao ambiente sobrevivem e se reproduzem mais, passando suas características adiante.',
    'efeito estufa': 'Retenção de calor na atmosfera por gases como CO₂ e metano. É natural, mas o excesso desses gases aquece o planeta.',
  },

  /* ================= História ================= */
  historia: {
    'feudalismo': 'Sistema da Europa medieval baseado na terra: senhores feudais, vassalos e servos presos à terra, com pouca circulação de dinheiro.',
    'reforma protestante': 'Movimento iniciado por Lutero em 1517 contra práticas da Igreja Católica, que deu origem às igrejas protestantes.',
    'indulgências': 'Perdões de pecados vendidos pela Igreja na época de Lutero; a venda foi um dos motivos da Reforma.',
    'revolução industrial': 'A troca do trabalho artesanal pelas máquinas e fábricas, começando na Inglaterra no século XVIII.',
    'clt': 'Consolidação das Leis do Trabalho (1943, Era Vargas): o conjunto de leis trabalhistas do Brasil.',
    'ai-5': 'Ato Institucional nº 5 (1968): o mais duro da ditadura militar; permitiu fechar o Congresso e suspender garantias.',
    'habeas corpus': 'Garantia que protege a pessoa de ser presa ou mantida presa de forma ilegal.',
    'guerra fria': 'Disputa entre EUA (capitalismo) e URSS (socialismo), de 1947 a 1991, sem guerra direta entre os dois.',
    'democracia direta': 'Os próprios cidadãos votam as decisões, sem representantes (como na Atenas antiga).',
  },

  /* ================= Geografia ================= */
  geografia: {
    'escala': 'A relação entre o tamanho no mapa e o tamanho real. 1:100.000 = 1 cm no mapa vale 100.000 cm (1 km) no terreno.',
    'meridianos': 'Linhas imaginárias que ligam os polos e medem a longitude (leste ou oeste de Greenwich).',
    'paralelos': 'Linhas imaginárias paralelas ao Equador que medem a latitude (norte ou sul).',
    'semiárido': 'Clima com chuvas escassas e irregulares e longos períodos de seca, como no Sertão nordestino.',
    'intemperismo': 'O desgaste das rochas pela chuva, pelo vento e pela variação de temperatura.',
    'erosão': 'O transporte do material desgastado (solo, rochas) pela água, pelo vento ou pelo gelo.',
    'transição demográfica': 'A passagem de uma população com muitos nascimentos e mortes para uma com poucos nascimentos e vida mais longa.',
    'conurbação': 'Quando duas ou mais cidades crescem tanto que se encontram e parecem uma só.',
    'êxodo rural': 'A saída de pessoas do campo para as cidades.',
    'globalização': 'A integração mundial das economias, culturas e comunicações, com fluxos cada vez maiores de mercadorias, capitais e informações.',
    'mercosul': 'Bloco econômico criado em 1991 por Brasil, Argentina, Uruguai e Paraguai.',
    'matriz elétrica': 'O conjunto das fontes usadas para gerar eletricidade num país (no Brasil, principalmente hidrelétricas).',
  },

  /* ================= Filosofia ================= */
  filosofia: {
    'arché': 'O "princípio" de todas as coisas, que os pré-socráticos procuravam: a água (Tales), o fogo (Heráclito)...',
    'pré-socráticos': 'Os primeiros filósofos gregos, antes de Sócrates, que buscavam explicar a natureza pela razão, e não pelos mitos.',
    'maiêutica': 'O método de Sócrates: fazer perguntas para a pessoa descobrir o conhecimento por si mesma ("arte do parto").',
    'mundo sensível': 'Para Platão, o mundo que percebemos pelos sentidos: mutável e imperfeito, como as sombras da caverna.',
    'mundo inteligível': 'Para Platão, o mundo das ideias, alcançado pela razão: perfeito e eterno.',
    'justo meio': 'Para Aristóteles, a virtude é o meio-termo entre o excesso e a falta. Coragem: entre a covardia e a imprudência.',
    'escolástica': 'Filosofia medieval que buscava conciliar fé e razão, como em Tomás de Aquino.',
    'dúvida metódica': 'O método de Descartes: duvidar de tudo até achar algo indubitável ("Penso, logo existo").',
    'empirismo': 'Corrente que diz que todo conhecimento vem da experiência e dos sentidos (Locke, Hume).',
    'tábula rasa': 'Para Locke, a mente ao nascer é como uma folha em branco, preenchida pela experiência.',
    'imperativo categórico': 'Regra moral de Kant: aja de modo que sua ação pudesse virar uma lei para todos.',
    'existencialismo': 'Corrente de Sartre: o ser humano primeiro existe e depois se define pelas próprias escolhas.',
    'banalidade do mal': 'Expressão de Hannah Arendt: o mal pode ser cometido por pessoas comuns que apenas "cumprem ordens", sem pensar.',
    'estado de natureza': 'A situação imaginada antes do Estado. Para Hobbes, uma "guerra de todos contra todos".',
  },

  /* ================= Sociologia ================= */
  sociologia: {
    'fato social': 'Para Durkheim, maneiras de agir, pensar e sentir que vêm da sociedade e se impõem ao indivíduo (leis, costumes, a língua).',
    'luta de classes': 'Para Marx, o conflito entre quem tem os meios de produção (burguesia) e quem vende sua força de trabalho (proletariado).',
    'meios de produção': 'Aquilo que é necessário para produzir: terras, fábricas, máquinas, ferramentas.',
    'ação social': 'Para Weber, uma ação com sentido, orientada pelo comportamento de outras pessoas.',
    'etnocentrismo': 'Julgar outras culturas a partir dos valores da própria, considerada superior.',
    'relativismo cultural': 'Compreender cada cultura a partir dos seus próprios valores e contexto, sem julgá-la pela nossa.',
    'fordismo': 'Modelo de produção em massa em linha de montagem, com tarefas repetitivas (Henry Ford).',
    'toyotismo': 'Modelo de produção flexível, conforme a demanda ("just in time"), com estoques pequenos e trabalhadores multifuncionais.',
    'mobilidade social': 'A mudança de posição de uma pessoa ou grupo na estrutura social (subir ou descer de classe).',
    'movimentos sociais': 'Ações coletivas organizadas que buscam mudanças ou a garantia de direitos.',
    'democracia representativa': 'Os cidadãos elegem representantes que tomam as decisões em seu nome.',
    'indústria cultural': 'Para Adorno e Horkheimer, a produção da cultura como mercadoria em massa.',
  },

  /* ================= Informática ================= */
  informatica: {
    'sistema operacional': 'O programa principal do computador, que gerencia o hardware e roda os outros programas: Windows, Linux, Android.',
    'protocolo': 'Conjunto de regras para os computadores se comunicarem: HTTP, HTTPS, SMTP...',
    'https': 'Versão segura do HTTP: os dados trocados com o site vão criptografados (o cadeado no navegador).',
    'smtp': 'Protocolo usado para ENVIAR e-mails.',
    'pop3': 'Protocolo para receber e-mails, baixando as mensagens para o aparelho.',
    'imap': 'Protocolo para receber e-mails mantendo as mensagens sincronizadas no servidor.',
    'cco': 'Cópia carbono oculta: envia o e-mail para alguém sem que os outros destinatários vejam.',
    'phishing': 'Golpe que usa mensagens ou sites falsos para enganar a pessoa e roubar dados ("pescar" senhas).',
    'ransomware': 'Programa malicioso que criptografa (sequestra) os arquivos e cobra um resgate para devolvê-los.',
    'firewall': 'Barreira que controla e filtra o tráfego da rede conforme regras. Não é antivírus.',
    'dns': 'Sistema que traduz nomes de sites (gov.br) em endereços IP, como uma "agenda telefônica" da internet.',
    'lan': 'Rede local, de uma casa ou escritório.',
    'referência absoluta': 'No Excel, a referência que não muda ao copiar a fórmula, marcada com cifrão: $A$1.',
  },

  /* ================= Noções de Administração ================= */
  administracao: {
    'podc': 'As funções administrativas: Planejar, Organizar, Dirigir e Controlar.',
    'eficácia': 'Atingir os objetivos e resultados esperados.',
    'eficiência': 'Usar bem os recursos, sem desperdício, para fazer as coisas.',
    'recrutamento': 'Atrair candidatos para uma vaga (interno ou externo). Não confundir com seleção, que é escolher entre eles.',
    'maslow': 'Pirâmide das necessidades humanas: fisiológicas, segurança, sociais, estima e autorrealização (de baixo para cima).',
    'fatores higiênicos': 'Para Herzberg, salário, condições de trabalho etc.: quando faltam, causam insatisfação, mas sozinhos não motivam.',
    'limpe': 'Os princípios da administração pública (art. 37 da Constituição): Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência.',
    'princípio da legalidade': 'O agente público só pode fazer o que a lei permite ou determina.',
    'impessoalidade': 'Princípio que manda a administração agir pelo interesse público, sem favorecer nem prejudicar pessoas específicas.',
    'patrimonialismo': 'Quando o governante trata cargos e bens públicos como se fossem seus, com nepotismo e corrupção.',
  },
};

/** Lista única (todas as matérias juntas), usada quando a matéria não é conhecida */
App.dados.glossario = Object.assign({},
  ...Object.keys(App.dados.glossarios).filter((m) => m !== 'portugues').map((m) => App.dados.glossarios[m]),
  App.dados.glossarios.portugues);

/**
 * Acrescenta termos ao glossário de uma matéria (usado pelos arquivos
 * de js/dados/topicos/). Também entram no glossário geral, sem
 * substituir um termo que já exista lá.
 */
App.dados.adicionarTermos = function (materia, termos) {
  App.dados.glossarios[materia] = Object.assign(App.dados.glossarios[materia] || {}, termos);
  Object.keys(termos).forEach((t) => { if (!App.dados.glossario[t]) App.dados.glossario[t] = termos[t]; });
};

/**
 * Personagens das tirinhas ORIGINAIS deste app (os desenhos estão em js/desenhos.js).
 * (Mafalda e Calvin e Haroldo são obras protegidas por direito autoral:
 *  aqui só são indicadas para você ler no original.)
 */
App.dados.personagens = {
  lia:     { nome: 'Lia', descricao: '9 anos, pergunta tudo e não aceita resposta pronta.' },
  tito:    { nome: 'Tito', descricao: 'Amigo da Lia. Gamer, adora promoção e tecnologia.' },
  pipoca:  { nome: 'Pipoca', descricao: 'A gata da Lia. Só pensa, mas pensa muito.' },
  mae:     { nome: 'Mãe da Lia' },
  pai:     { nome: 'Pai do Tito' },
  vendedor:{ nome: 'Vendedor' },
  placa:   { nome: 'Placa' },
};
