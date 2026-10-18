/* =========================================================
   topicos/logica.js — conteúdo de Raciocínio lógico
   Mesmo formato de js/dados/conteudos.js (veja o cabeçalho de lá),
   mas separado por matéria para cada uma crescer no seu arquivo.
   Aqui ficam, desta matéria:
   - os textos de estudo (App.dados.conteudos)
   - os extras dos testes "Entendeu?" (App.dados.checagensExtras)
   - os termos novos do glossário (App.dados.adicionarTermos)
   Raciocínio lógico é matéria de concurso: a BNCC do Ensino Médio
   não tem habilidade própria de proposições, por isso bncc fica vazio.
   ========================================================= */
Object.assign(App.dados.conteudos, {

  /* ======================= PROPOSIÇÕES (triagem por contraste + contraexemplo) ======================= */
  'logica-1-0': {
    metodo: 'freire',
    prerequisitos: [
      { texto: '**Nenhum.** Este tópico começa do zero. Você só precisa ler uma frase com calma e perguntar: "dá para dizer se isso é verdade ou mentira?".' },
      { texto: 'Ajuda saber o que é uma **letra no lugar de um número** (como o x de uma conta).', revisao: 'Em "x + 2 = 5", o x é um espaço vazio: ainda não se sabe que número ele é. Se x for 3, a conta fica certa; se x for 10, fica errada. Enquanto ninguém diz quanto vale o x, não dá para saber se a frase é certa ou errada.' },
    ],
    bncc: [],
    blocos: [
      /* ---------- 1. Leitura do mundo ---------- */
      { tipo: 'etapa', etapa: 'leitura', texto: 'Você já julga frases o dia inteiro' },
      { tipo: 'texto', texto: 'Imagine estas cinco mensagens chegando no grupo do trabalho, uma atrás da outra:' },
      { tipo: 'exemplo', titulo: 'O grupo do trabalho', texto: '1. **O ônibus 401 passa às 7h.**\n2. **Que horas passa o 401?**\n3. **Corre, que ele está chegando!**\n4. **Que ônibus lotado!**\n5. **Ele atrasou de novo.**' },
      { tipo: 'pergunta', id: 'p1', texto: 'Em quais dessas mensagens você poderia responder "verdade" ou "mentira"? Em quais essa resposta não faz sentido? Por quê?' },
      { tipo: 'revelar', texto: 'Só a **mensagem 1** aceita "verdade" ou "mentira" sem discussão: dá para conferir no horário do ônibus.\n\nNa 2 (pergunta), responder "mentira" não faz sentido: ninguém afirmou nada. Na 3 (ordem), também não: dá para obedecer ou não, mas não para chamar de falsa. Na 4 (exclamação), a pessoa está desabafando, não afirmando. E a 5 tem um problema escondido: **quem** é "ele"? Sem saber de quem se fala, não dá para conferir.\n\nVocê acabou de fazer, sem nome técnico, o trabalho da lógica: separar as frases que **afirmam algo que pode ser conferido** das que não afirmam. A lógica chama as primeiras de **proposições**.' },

      /* ---------- 2. Problematização ---------- */
      { tipo: 'etapa', etapa: 'problematizacao', texto: 'Por que separar frases?' },
      { tipo: 'texto', texto: 'Porque só dá para discutir, provar ou derrubar o que é uma afirmação. Uma pergunta ou uma ordem não pode ser "desmentida". Quem mistura as duas coisas perde a discussão sem perceber.' },
      { tipo: 'texto', texto: 'Pense numa frase que aparece toda hora: "**Todo** político é corrupto". Muita gente acha que, para discordar, teria que provar que **nenhum** político é corrupto, o que é impossível. Mas não: para derrubar um "todo", **basta um caso** que fuja da regra. Saber isso muda o jeito de ler notícias, discursos e correntes de WhatsApp. Freire chamava isso de leitura crítica do mundo: perceber como as frases são montadas para convencer.' },
      { tipo: 'texto', texto: 'E é exatamente isso que as bancas cobram. Em quase todo edital com Raciocínio lógico, o primeiro item é "proposições", e as questões são curtas: "julgue se a frase é proposição", "qual a negação de...". As pegadinhas são sempre as mesmas, e você vai conhecer todas.' },
      { tipo: 'pergunta', id: 'p2', texto: 'Lembre de uma generalização que você já ouviu ou falou ("todo...", "ninguém...", "sempre..."). Com um exemplo só, daria para mostrar que ela está errada?' },

      /* ---------- 3. Sistematização ---------- */
      { tipo: 'etapa', etapa: 'sistematizacao', texto: 'Um teste só, aplicado a muitas frases' },
      { tipo: 'texto', texto: 'Todo este tópico gira em torno de **um único teste**. Você vai aplicá-lo a dezenas de frases curtas até ele ficar automático.' },

      // ----- O teste
      { tipo: 'titulo', texto: 'O teste: dá para julgar como verdadeira ou falsa?' },
      { tipo: 'texto', texto: '[[Proposição|proposição]] é uma **frase declarativa** (que afirma ou nega algo) e que pode ser julgada como **verdadeira** ou **falsa**, mas nunca as duas coisas.\n\nRepare em duas palavras: "**pode** ser julgada". A frase não precisa ser verdadeira. E você não precisa saber a resposta. Basta que a resposta exista.' },
      { tipo: 'tabela', cabecalho: ['Frase', 'É proposição?', 'Por quê'], linhas: [
        ['Brasília é a capital do Brasil.', '**sim**', 'afirma algo, e é verdade'],
        ['O número 7 é par.', '**sim**', 'afirma algo, e é **falso**. Falsa também é proposição!'],
        ['Existe vida em outro planeta.', '**sim**', 'ninguém sabe a resposta hoje, mas ela existe: ou existe vida, ou não'],
        ['2 + 2 = 5', '**sim**', 'é uma afirmação matemática, e falsa'],
        ['Não choveu ontem em Manaus.', '**sim**', 'frase negativa também afirma algo (que não choveu)'],
      ] },
      { tipo: 'atencao', texto: 'A pegadinha número 1 das bancas: "frase falsa não é proposição". **Errado.** Ser falsa é um dos dois resultados possíveis do teste. O que importa é se dá para fazer o teste.' },

      // ----- O que não é
      { tipo: 'titulo', texto: 'O que não passa no teste' },
      { tipo: 'texto', texto: 'Agora o contrário. Cada linha abaixo é um "tipo" de frase que **nunca** é proposição. Leia o exemplo e tente responder "verdadeiro ou falso?". Você vai sentir que a pergunta não encaixa.' },
      { tipo: 'tabela', cabecalho: ['Tipo de frase', 'Exemplo', 'Por que não é proposição'], linhas: [
        ['**Pergunta** (interrogativa)', 'Quem vai ao concurso?', 'pergunta pede resposta, não afirma nada'],
        ['**Ordem ou pedido** (imperativa)', 'Feche a porta. / Não fume aqui.', 'dá para obedecer ou não, mas não para julgar'],
        ['**Exclamação** (exclamativa)', 'Que calor! / Nossa!', 'expressa emoção, não afirma um fato'],
        ['**Desejo** (optativa)', 'Tomara que eu passe.', 'expressa vontade, não afirma um fato'],
        ['**Sentença aberta**', 'x + 2 = 5 / Ele é médico.', 'tem um "espaço vazio" (x, ele): o valor depende de quem ocupa'],
        ['**Paradoxo**', 'Esta frase é falsa.', 'se for verdadeira, é falsa; se for falsa, é verdadeira'],
      ] },
      { tipo: 'exemplo', titulo: 'Repare no "não"', texto: '"**Não** choveu ontem." → afirma um fato (negativo): **é** proposição.\n"**Não** fume aqui." → é uma ordem: **não é** proposição.\nO "não" sozinho não decide nada. O que decide é se a frase **afirma** ou **manda**.' },
      { tipo: 'checagem', pergunta: 'Qual das frases é uma proposição?', opcoes: ['Feche a janela, por favor.', 'Que horas são?', 'O Brasil tem 26 estados e um Distrito Federal.', 'Que dia bonito!'], correta: 2,
        explicacao: 'Só "O Brasil tem 26 estados e um Distrito Federal" afirma algo que pode ser conferido (e é verdade). As outras são um pedido, uma pergunta e uma exclamação.',
        outraExplicacao: 'Tente responder "verdadeiro ou falso?" para cada uma. "Feche a janela: verdadeiro?" Não encaixa. "Que horas são: falso?" Também não. "O Brasil tem 26 estados e um DF: verdadeiro?" Encaixa. Onde a pergunta encaixa, é proposição.' },

      // ----- Sentença aberta e paradoxo
      { tipo: 'titulo', texto: 'Os dois casos que mais confundem: sentença aberta e paradoxo' },
      { tipo: 'texto', texto: 'A [[sentença aberta]] **parece** uma afirmação, mas tem uma peça vazia: uma letra (x, y) ou uma palavra que não diz de quem se fala (ele, ela, alguém, aquele homem). Enquanto a peça estiver vazia, o valor muda conforme quem a ocupa.' },
      { tipo: 'exemplo', titulo: 'Fechando a sentença aberta', texto: '"x + 2 = 5" → aberta (depende do x)\n"3 + 2 = 5" → proposição verdadeira (troquei o x por 3)\n"10 + 2 = 5" → proposição falsa (troquei o x por 10)\n\n"Ele é médico." → aberta (quem?)\n"Drauzio Varella é médico." → proposição (verdadeira)' },
      { tipo: 'texto', texto: 'Existe um segundo jeito de fechar uma sentença aberta: dizer **para quantos** valores ela vale. "**Para todo** número x, x + 0 = x" já é proposição (verdadeira), porque não sobra nenhum x solto esperando valor. Essas palavras ("todo", "existe", "nenhum") são os [[quantificadores|quantificador]], e vão aparecer de novo no fim deste tópico.' },
      { tipo: 'texto', texto: 'O [[paradoxo]] é o caso raro em que a frase **fala de si mesma** e se contradiz. O mais famoso é o do mentiroso: "Esta frase é falsa". Se for verdadeira, então ela é falsa (é o que ela diz). Se for falsa, então ela é verdadeira. Não sobra nenhum valor possível, então ela **não é proposição**.' },
      { tipo: 'checagem', pergunta: 'Qual das frases **NÃO** é proposição?', opcoes: ['3 + 4 = 8', 'x + 4 = 8', 'Todo número par é divisível por 2.', 'Recife é a capital de Pernambuco.'], correta: 1,
        explicacao: '"x + 4 = 8" é **sentença aberta**: com x = 4 fica verdadeira, com x = 1 fica falsa. Já "3 + 4 = 8" é proposição (falsa), e as outras duas são proposições verdadeiras.',
        outraExplicacao: 'Procure a "peça vazia". Em "3 + 4 = 8" não tem nenhuma: é só fazer a conta e ver que está errada (mas dá para julgar!). Em "x + 4 = 8", o x está esperando um valor. Frase com peça vazia não é proposição.' },

      // ----- Valor lógico e princípios
      { tipo: 'titulo', texto: 'Valor lógico e as três regras do jogo' },
      { tipo: 'texto', texto: 'O resultado do teste tem nome: [[valor lógico]]. Ele só pode ser **V** (verdadeiro) ou **F** (falso). Para escrever mais rápido, a lógica dá letras às proposições: p, q, r...\n\np: "Brasília é a capital do Brasil." → V(p) = V\nq: "O número 7 é par." → V(q) = F\n\nLê-se "o valor lógico de p é verdadeiro".' },
      { tipo: 'texto', texto: 'Toda a lógica que você vai estudar (conectivos, tabela-verdade, equivalências) se apoia em **três regras**, chamadas de princípios. Elas parecem óbvias, e são mesmo. A banca cobra o **nome** de cada uma.' },
      { tipo: 'tabela', cabecalho: ['Princípio', 'O que diz', 'Em palavras simples'], linhas: [
        ['**Identidade**', 'uma proposição é igual a si mesma: se p é verdadeira, p é verdadeira', 'a frase não muda de valor no meio do caminho'],
        ['**Não contradição**', 'uma proposição não pode ser verdadeira **e** falsa ao mesmo tempo', 'não existe "V e F" juntos'],
        ['**Terceiro excluído**', 'toda proposição é verdadeira **ou** falsa; não há uma terceira opção', 'não existe "meio verdade" nem "talvez"'],
      ] },
      { tipo: 'texto', texto: 'Para não trocar os dois últimos: o nome diz o que ele proíbe. **Não contradição** proíbe ser as duas coisas (contradizer-se). **Terceiro excluído** exclui uma terceira opção.\n\nRepare que o paradoxo do mentiroso "quebra" justamente essas regras. Por isso ele fica de fora.' },
      { tipo: 'checagem', pergunta: 'Dizer que uma mesma proposição é verdadeira **e** falsa ao mesmo tempo contraria qual princípio?', opcoes: ['Identidade', 'Não contradição', 'Terceiro excluído', 'Nenhum: isso é permitido'], correta: 1,
        explicacao: 'O princípio da **não contradição** diz que uma proposição não pode ser V e F ao mesmo tempo. Dizer as duas coisas juntas é, literalmente, se contradizer.',
        outraExplicacao: 'Use o nome como pista. "Ser V e F junto" é uma contradição. O princípio que proíbe isso é o da **não contradição**. O do terceiro excluído é outro: ele proíbe uma terceira opção além de V e F.' },

      // ----- Simples e composta
      { tipo: 'titulo', texto: 'Proposição simples e proposição composta' },
      { tipo: 'texto', texto: 'Uma [[proposição simples]] traz **uma única ideia**: não dá para quebrá-la em outras proposições menores. Uma [[proposição composta]] junta duas ou mais proposições simples usando palavras de ligação, os [[conectivos|conectivo]].' },
      { tipo: 'tabela', cabecalho: ['Conectivo', 'Símbolo', 'Exemplo de proposição composta'], linhas: [
        ['e ([[conjunção]])', '∧', 'Ana estuda **e** Bia trabalha.'],
        ['ou ([[disjunção]])', '∨', 'Vou de ônibus **ou** vou de metrô.'],
        ['se..., então... ([[condicional]])', '→', '**Se** chover, **então** fico em casa.'],
        ['se e somente se ([[bicondicional]])', '↔', 'Passo **se e somente se** estudo.'],
      ] },
      { tipo: 'texto', texto: 'Para contar as proposições simples, **separe nos conectivos** e complete cada pedaço até ele virar uma frase inteira.' },
      { tipo: 'exemplo', titulo: 'Contando as peças', texto: '"Se Ana estuda e dorme bem, então passa na prova."\n• p: Ana estuda.\n• q: Ana dorme bem.\n• r: Ana passa na prova.\n→ **3** proposições simples, ligadas por "e" e por "se..., então".' },
      { tipo: 'atencao', texto: 'Nem todo "e" é conectivo. "Ana **e** Bia são médicas" = Ana é médica **e** Bia é médica: composta. Mas "Ana **e** Bia são irmãs" fala de uma **relação** entre as duas; não dá para separar em "Ana é irmã" e "Bia é irmã". É **simples**. Teste: tente quebrar em duas frases completas. Se o sentido muda, não é conectivo.' },
      { tipo: 'checagem', pergunta: 'Quantas proposições simples há em "Se o edital sair e eu tiver tempo, então eu me inscrevo"?', opcoes: ['1', '2', '3', '4'], correta: 2,
        explicacao: 'São **3**: "o edital sai", "eu tenho tempo" e "eu me inscrevo". O "e" e o "se..., então" são os conectivos que ligam as três.',
        outraExplicacao: 'Corte a frase nos conectivos: [o edital sair] **e** [eu tiver tempo], **então** [eu me inscrevo]. Sobram 3 pedaços, cada um com seu verbo. Cada pedaço é uma proposição simples.' },

      // ----- Negação
      { tipo: 'titulo', texto: 'Negação: inverter o valor' },
      { tipo: 'texto', texto: 'A [[negação]] de uma proposição p é escrita **~p** (ou ¬p) e lida "não p". Ela tem sempre o **valor contrário**: se p é V, ~p é F; se p é F, ~p é V.' },
      { tipo: 'tabela', cabecalho: ['p', '~p'], linhas: [
        ['V', 'F'],
        ['F', 'V'],
      ] },
      { tipo: 'exemplo', titulo: 'Três jeitos de negar a mesma frase', texto: 'p: "O servidor está de férias."\n~p: "O servidor **não** está de férias."\n~p: "**Não é verdade que** o servidor está de férias."\n~p: "**É falso que** o servidor está de férias."\nAs três formas dizem a mesma coisa.' },
      { tipo: 'texto', texto: 'Negar duas vezes volta ao começo: "Não é verdade que o servidor **não** está de férias" = "O servidor está de férias". Em símbolos: ~(~p) = p.' },
      { tipo: 'atencao', texto: '**Negação não é o contrário.** A negação de "Pedro é alto" é "Pedro **não** é alto", e não ~~Pedro é baixo~~. Pedro pode ter altura média: aí "não é alto" é verdade, mas "é baixo" também é falso. A negação precisa ter **sempre** o valor oposto, em qualquer situação. O "contrário" nem sempre tem.' },
      { tipo: 'checagem', pergunta: 'Qual é a negação de "O processo foi arquivado"?', opcoes: ['O processo foi aprovado.', 'O processo não foi arquivado.', 'Nenhum processo foi arquivado.', 'O processo foi desarquivado.'], correta: 1,
        explicacao: 'A negação só coloca o "não" e inverte o valor: "O processo **não** foi arquivado". "Aprovado" e "desarquivado" mudam o assunto, e "nenhum processo" fala de todos os processos, não deste.',
        outraExplicacao: 'Pergunte: em **qualquer** situação, se uma for verdadeira, a outra é falsa? "Foi arquivado" × "não foi arquivado": sempre opostas. "Foi arquivado" × "foi aprovado": pode acontecer as duas coisas, ou nenhuma. Então só a com "não" é negação.' },

      // ----- Quantificadores
      { tipo: 'titulo', texto: 'Quantificadores: todo, algum, nenhum' },
      { tipo: 'texto', texto: 'Os [[quantificadores|quantificador]] dizem **para quantos** a frase vale. Em concurso, são três:' },
      { tipo: 'tabela', cabecalho: ['Quantificador', 'Símbolo', 'Quer dizer', 'Exemplo'], linhas: [
        ['**todo** (qualquer, cada)', '∀', 'sem exceção', 'Todo servidor tem matrícula.'],
        ['**algum** (existe, pelo menos um)', '∃', '**pelo menos um**, podendo ser todos', 'Algum servidor faltou.'],
        ['**nenhum**', '—', 'zero', 'Nenhum servidor faltou.'],
      ] },
      { tipo: 'atencao', texto: 'Na lógica, "**algum**" quer dizer "**pelo menos um**". "Alguns candidatos passaram" continua verdadeira se **todos** passaram. No dia a dia, "alguns" dá a ideia de "não todos", mas na prova não.' },
      { tipo: 'texto', texto: 'Agora a ideia mais cobrada. Para derrubar um "todo", **basta um** [[contraexemplo]]: um único caso que não segue a regra.' },
      { tipo: 'exemplo', titulo: 'Na mesa de RPG', texto: 'O mestre diz: "**Todo** dragão desta campanha cospe fogo."\nPara provar que ele errou, quantos dragões que não cospem fogo você precisa achar? **Um só.**\nEntão o contrário de "todo dragão cospe fogo" é: "**Algum** dragão **não** cospe fogo".\nVocê **não** precisa provar que "nenhum dragão cospe fogo". Isso seria exigir demais.' },
      { tipo: 'texto', texto: 'Seguindo a mesma lógica: para derrubar "**nenhum** A é B", basta achar **um** A que seja B. E para derrubar "**algum** A é B", é preciso mostrar que **nenhum** A é B. Juntando tudo:' },
      { tipo: 'tabela', cabecalho: ['Frase', 'Negação', 'Como lembrar'], linhas: [
        ['**Todo** A é B', '**Algum** A **não** é B', 'basta um que fuja da regra'],
        ['**Algum** A é B', '**Nenhum** A é B', 'para negar "pelo menos um", só "zero"'],
        ['**Nenhum** A é B', '**Algum** A é B', 'basta aparecer um'],
        ['**Algum** A **não** é B', '**Todo** A é B', 'para ninguém fugir da regra, todos seguem'],
      ] },
      { tipo: 'texto', texto: '"**Nem todo** A é B" é só outro jeito de dizer "**algum** A **não** é B". E "**pelo menos um**", "**existe**" e "**há**" funcionam como "algum".' },
      { tipo: 'atencao', texto: 'A pegadinha mais famosa de todas: a negação de "**Todo** A é B" **não é** ~~Nenhum A é B~~. As duas podem ser falsas ao mesmo tempo. Ex.: "Todo aluno passou" e "Nenhum aluno passou" são **ambas falsas** numa turma em que metade passou. Negação precisa ter sempre o valor oposto.' },
      { tipo: 'checagem', pergunta: 'Qual é a negação de "Todos os candidatos foram aprovados"?', opcoes: ['Nenhum candidato foi aprovado.', 'Algum candidato não foi aprovado.', 'Todos os candidatos foram reprovados.', 'Algum candidato foi aprovado.'], correta: 1,
        explicacao: 'Para a frase ser falsa, basta **um** candidato que não foi aprovado. Por isso a negação é "**Algum** candidato **não** foi aprovado". "Nenhum foi aprovado" é a pegadinha: exige demais.',
        outraExplicacao: 'Pense como quem quer desmentir: "Todos foram aprovados? Não, o Carlos não foi." Um caso só já desmente. Esse "um caso" é o "algum... não".' },
      { tipo: 'checagem', pergunta: 'Qual é a negação de "Algum fiscal é honesto"?', opcoes: ['Algum fiscal não é honesto.', 'Todo fiscal é honesto.', 'Nenhum fiscal é honesto.', 'Nem todo fiscal é honesto.'], correta: 2,
        explicacao: '"Algum fiscal é honesto" diz que existe **pelo menos um** honesto. Para isso ser falso, não pode existir nenhum: "**Nenhum** fiscal é honesto".',
        outraExplicacao: 'Pense numa sala com fiscais. "Algum é honesto" é verdade se um só for honesto. Para ela ficar falsa, quantos honestos podem existir na sala? Zero. Zero é "nenhum".' },

      // ----- Pegadinhas
      { tipo: 'titulo', texto: 'As pegadinhas de banca, todas juntas' },
      { tipo: 'lista', itens: [
        '**Frase falsa é proposição.** "O número 10 é ímpar" é proposição, com valor F.',
        '**Não saber a resposta não importa.** "Há vida em Marte" é proposição.',
        '**Pergunta, ordem, exclamação e desejo nunca são proposição**, mesmo com "não" ("Não fume aqui").',
        '**Ele, ela, x, y sem dizer quem são** → sentença aberta, não é proposição.',
        '**"Esta frase é falsa"** → paradoxo, não é proposição.',
        '**Nem todo "e" é conectivo:** "Ana e Bia são irmãs" é simples.',
        '**Negação ≠ contrário:** a negação de "é alto" é "não é alto", não "é baixo".',
        '**Negação de "todo" é "algum... não"**, nunca "nenhum".',
        '**"Algum" = pelo menos um**, podendo ser todos.',
      ] },
      { tipo: 'checagem', pergunta: 'Qual afirmação está **correta**?', opcoes: ['Uma frase falsa não pode ser proposição.', '"Há vida em outro planeta" é proposição, mesmo que ninguém saiba se é verdade.', '"Esta frase é falsa" é uma proposição de valor falso.', '"Algum aluno passou" significa que nem todos passaram.'], correta: 1,
        explicacao: 'Proposição é o que **pode** ser julgado como V ou F; a resposta existe, mesmo que ninguém a conheça. As outras erram: frase falsa é proposição, "esta frase é falsa" é paradoxo, e "algum" aceita que todos tenham passado.',
        outraExplicacao: 'Volte ao teste: "existe uma resposta, V ou F?". Para "há vida em outro planeta", existe: ou há, ou não há. Não saber qual é problema da ciência, não da frase.' },

      /* ---------- 4. Ação ---------- */
      { tipo: 'etapa', etapa: 'acao', texto: 'Use no seu dia' },
      { tipo: 'lista', itens: [
        '**Caça às proposições:** abra um site de notícias e pegue 5 manchetes. Quais são proposições? Alguma é pergunta ou exclamação?',
        '**Desmonte uma generalização:** escolha uma frase com "todo", "ninguém" ou "nenhum" que você ouviu esta semana. Escreva a negação correta e pense num contraexemplo real.',
        '**Treino de banca:** faça os exercícios de Raciocínio lógico do app e, a cada erro, diga qual pegadinha da lista pegou você.',
      ] },
      { tipo: 'pergunta', id: 'p3', texto: 'Escreva aqui a generalização que você escolheu, a negação dela e o seu contraexemplo.' },

      /* ---------- 5. Reflexão ---------- */
      { tipo: 'etapa', etapa: 'reflexao', texto: 'O que mudou?' },
      { tipo: 'texto', texto: 'Volte às mensagens do grupo. Agora você dá nome a cada uma: a 1 é **proposição**; a 2 é pergunta; a 3, ordem; a 4, exclamação; e a 5 ("Ele atrasou de novo") é **sentença aberta**, porque não diz quem é "ele". Se alguém escrevesse "O motorista do 401 atrasou de novo", aí sim viraria proposição.' },
      { tipo: 'pergunta', id: 'p4', texto: 'Explique para alguém, com suas palavras, por que a negação de "Todo político é corrupto" não é "Nenhum político é corrupto". Que exemplo você usaria?' },
    ],
    resumo: [
      'Proposição: frase declarativa que pode ser julgada como verdadeira ou falsa (nunca as duas).',
      'Frase falsa também é proposição. Não saber a resposta não importa: basta que ela exista.',
      'Não são proposição: perguntas, ordens, exclamações, desejos, sentenças abertas (x, ele, ela) e paradoxos ("Esta frase é falsa").',
      'Valor lógico: V ou F. Princípios: identidade, não contradição (não é V e F juntos) e terceiro excluído (ou V ou F, sem terceira opção).',
      'Simples: uma ideia só. Composta: duas ou mais ligadas por e, ou, se...então, se e somente se.',
      'Negação (~p) inverte o valor. Negação não é o contrário: "não é alto" ≠ "é baixo".',
      'Negações: todo → algum... não; algum → nenhum; nenhum → algum; algum... não → todo.',
      '"Algum" = pelo menos um (pode ser todos). Para derrubar um "todo", basta um contraexemplo.',
    ],
    fontes: [
      { nome: 'IME-USP — texto de apoio de MAT349 sobre lógica e proposições (Universidade de São Paulo)', url: 'https://www.ime.usp.br/mat/349/textos/MAT349a2.pdf' },
      { nome: 'CESAD/UFS — Fundamentos de Matemática, aula 2: noções de lógica (Universidade Federal de Sergipe)', url: 'https://cesad.ufs.br/ORBI/public/uploadCatalago/15243116022012Fundamentos_de_Matematica_aula_2.pdf' },
      { nome: 'TJSP / Escola Judicial — apostila de Raciocínio Lógico da capacitação de servidores', url: 'https://www.tjsp.jus.br/Download/EJUS/AVAS/Capacitacao/Apostila03RaciocinioLogico.pdf' },
    ],
  },
});

Object.assign(App.dados.checagensExtras, {

  /* ================= Proposições ================= */
  'logica-1-0': [
    { // 1. reconhecer proposição
      conceito: 'Reconhecer uma **proposição**: frase declarativa que pode ser julgada como verdadeira ou falsa. Perguntas, ordens, exclamações e desejos não passam no teste.',
      variacoes: [
        { pergunta: 'Qual das frases é uma proposição?', opcoes: ['Saia daqui agora!', 'Será que vai chover?', 'Tomara que eu passe.', 'A água ferve a 100 °C ao nível do mar.'], correta: 3,
          explicacao: 'Só "A água ferve a 100 °C ao nível do mar" afirma um fato que pode ser conferido. As outras são uma ordem, uma pergunta e um desejo.',
          outraExplicacao: 'Faça o teste com cada uma: "Tomara que eu passe: verdadeiro?" Não encaixa, é só uma vontade. "A água ferve a 100 °C: verdadeiro?" Encaixa. É proposição.' },
        { pergunta: 'Qual das frases **NÃO** é proposição?', opcoes: ['O Sol é uma estrela.', 'Lisboa é a capital da Espanha.', 'Não esqueça o documento.', 'O concurso terá 50 vagas.'], correta: 2,
          explicacao: '"Não esqueça o documento" é uma **ordem** (um pedido), e ordem não é verdadeira nem falsa. Atenção: "Lisboa é a capital da Espanha" é falsa, mas **é** proposição.',
          outraExplicacao: 'O "não" engana. Pergunte se a frase **afirma** ou **manda**. "Não esqueça" manda você fazer algo. Já "Lisboa é a capital da Espanha" afirma algo (errado, mas afirma).' },
      ],
    },
    { // 2. sentença aberta
      conceito: 'Reconhecer a **sentença aberta**: frase com uma peça vazia (x, y, ele, ela) cujo valor depende de quem ocupa essa peça. Ela não é proposição.',
      variacoes: [
        { pergunta: 'A frase "Ela foi aprovada no concurso", sem dizer quem é "ela", é:', opcoes: ['uma proposição verdadeira', 'uma proposição falsa', 'uma sentença aberta, porque não se sabe quem é "ela"', 'um paradoxo'], correta: 2,
          explicacao: 'O "ela" é uma peça vazia: se for alguém que passou, a frase fica verdadeira; se for alguém que não passou, fica falsa. Por isso é **sentença aberta**.',
          outraExplicacao: 'Troque o "ela" por nomes diferentes. Com o nome de quem passou, vira verdade; com o de quem não passou, vira mentira. Se o valor muda conforme a pessoa, a frase ainda está aberta.' },
        { pergunta: 'Qual das frases é uma proposição?', opcoes: ['x − 5 = 10', 'y é maior que 3', 'Ele mora em Belém.', 'Para todo número real x, x + 0 = x.'], correta: 3,
          explicacao: 'O "para todo" fecha a sentença: não sobra nenhum x esperando valor, e a frase é **verdadeira**. As outras três têm peça vazia (x, y, ele).',
          outraExplicacao: 'Em "x − 5 = 10", quem é o x? Não se sabe. Em "para todo x, x + 0 = x", a frase já diz: vale para **qualquer** x. Quando a frase diz para quantos vale, ela deixa de ser aberta.' },
      ],
    },
    { // 3. princípios
      conceito: 'Os três **princípios** da lógica: identidade (p é igual a si mesma), não contradição (não pode ser V e F juntos) e terceiro excluído (ou é V ou é F, sem terceira opção).',
      variacoes: [
        { pergunta: '"Toda proposição é verdadeira ou falsa; não existe uma terceira opção." Esse é o princípio:', opcoes: ['da identidade', 'da não contradição', 'do terceiro excluído', 'da negação'], correta: 2,
          explicacao: 'É o princípio do **terceiro excluído**: só existem dois valores, V ou F, e uma terceira possibilidade fica de fora (excluída).',
          outraExplicacao: 'O nome conta a regra: "terceiro" = uma terceira opção; "excluído" = posto para fora. Não existe "meio verdade".' },
        { pergunta: '"Se uma proposição é verdadeira, ela é verdadeira." Essa ideia, de que a proposição é igual a si mesma, é o princípio:', opcoes: ['da identidade', 'da não contradição', 'do terceiro excluído', 'da negação'], correta: 0,
          explicacao: 'É o princípio da **identidade**: uma proposição é igual a si mesma e não muda de valor no meio do raciocínio.',
          outraExplicacao: 'Identidade é "ser o mesmo". A carteira de identidade diz que você é você. O princípio diz que p é p.' },
      ],
    },
    { // 4. simples × composta
      conceito: 'Diferenciar **proposição simples** (uma ideia só) de **composta** (várias simples ligadas por conectivos: e, ou, se...então, se e somente se).',
      variacoes: [
        { pergunta: 'Qual das proposições é **composta**?', opcoes: ['Marta é advogada.', 'O prédio tem dez andares.', 'Chove ou faz sol.', 'Brasília fica no Centro-Oeste.'], correta: 2,
          explicacao: '"Chove ou faz sol" junta duas proposições simples ("chove", "faz sol") com o conectivo **ou**. As outras trazem uma ideia só.',
          outraExplicacao: 'Procure um conectivo (e, ou, se...então, se e somente se) que separe duas frases completas. Só em "Chove **ou** faz sol" dá para cortar em duas.' },
        { pergunta: 'Sobre "Ana e Bia são médicas" e "Ana e Bia são irmãs", é correto dizer que:', opcoes: ['as duas são compostas', 'as duas são simples', 'a primeira é composta e a segunda é simples', 'a primeira é simples e a segunda é composta'], correta: 2,
          explicacao: '"Ana e Bia são médicas" = "Ana é médica **e** Bia é médica": composta. "Ana e Bia são irmãs" fala de uma **relação** entre as duas e não se divide: simples.',
          outraExplicacao: 'Tente quebrar cada uma em duas frases. "Ana é médica" e "Bia é médica": mesmo sentido. "Ana é irmã" e "Bia é irmã": irmã de quem? O sentido se perde, então ali o "e" não é conectivo.' },
      ],
    },
    { // 5. negação
      conceito: 'A **negação** (~p) tem sempre o valor contrário de p. Ela coloca um "não" (ou "não é verdade que"), e não é o mesmo que dizer o contrário.',
      variacoes: [
        { pergunta: 'Se a proposição p é falsa, a negação ~p é:', opcoes: ['verdadeira', 'falsa', 'depende de outra proposição', 'não tem valor lógico'], correta: 0,
          explicacao: 'A negação sempre inverte o valor. Se p é F, ~p é **V**.',
          outraExplicacao: 'Exemplo: p = "O número 7 é par" (falsa). ~p = "O número 7 não é par" (verdadeira). Uma falsa, a outra verdadeira, sempre.' },
        { pergunta: 'Qual é a negação de "Carlos é rico"?', opcoes: ['Carlos é pobre.', 'Carlos não é rico.', 'Ninguém é rico.', 'Carlos é muito rico.'], correta: 1,
          explicacao: 'A negação é "Carlos **não** é rico". "Carlos é pobre" é o contrário, não a negação: Carlos pode ser de classe média, e aí as duas ("é rico" e "é pobre") seriam falsas.',
          outraExplicacao: 'Negação e frase original precisam ter **sempre** valores opostos. Pense num Carlos de classe média: "é rico" é falsa e "é pobre" também é falsa. Não ficaram opostas, então "é pobre" não serve.' },
      ],
    },
    { // 6. negação de "todo"
      conceito: 'A negação de "**Todo** A é B" é "**Algum** A **não** é B": para derrubar um "todo", basta um contraexemplo. Nunca é "Nenhum A é B".',
      variacoes: [
        { pergunta: 'Qual é a negação de "Todo político é honesto"?', opcoes: ['Nenhum político é honesto.', 'Todo político é desonesto.', 'Pelo menos um político não é honesto.', 'Algum político é honesto.'], correta: 2,
          explicacao: '"Pelo menos um político não é honesto" é o mesmo que "algum político não é honesto", a negação correta de "todo". Basta um caso para desmentir.',
          outraExplicacao: 'Lembre que "pelo menos um" = "algum". A regra é: todo → algum... não. Só a opção C tem "pelo menos um" com "não".' },
        { pergunta: 'Para mostrar que a frase "Todo número primo é ímpar" é falsa, basta:', opcoes: ['mostrar que 3 é primo e ímpar', 'achar um número primo que seja par, como o 2', 'mostrar que todos os primos são pares', 'achar um ímpar que não seja primo, como o 9'], correta: 1,
          explicacao: 'Um único **contraexemplo** derruba o "todo": o 2 é primo e é par. Pronto, a frase é falsa.',
          outraExplicacao: 'A frase fala de primos. O contraexemplo precisa ser um primo que **não** seja ímpar. O 9 não serve (nem é primo), e o 3 só confirma a regra. O 2 quebra a regra.' },
      ],
    },
    { // 7. negação de "algum" e "nenhum"
      conceito: 'Negações dos outros quantificadores: "algum A é B" → "nenhum A é B"; "nenhum A é B" → "algum A é B"; "algum A não é B" → "todo A é B".',
      variacoes: [
        { pergunta: 'Qual é a negação de "Nenhum candidato faltou"?', opcoes: ['Todos os candidatos faltaram.', 'Algum candidato faltou.', 'Algum candidato não faltou.', 'Nenhum candidato compareceu.'], correta: 1,
          explicacao: 'Para "nenhum faltou" ser falsa, basta **um** ter faltado: "Algum candidato faltou".',
          outraExplicacao: 'O fiscal diz: "Ninguém faltou". Você desmente apontando **uma** cadeira vazia. Uma já basta, não precisa que todos tenham faltado.' },
        { pergunta: 'Qual é a negação de "Algum aluno não estudou"?', opcoes: ['Nenhum aluno estudou.', 'Algum aluno estudou.', 'Todo aluno estudou.', 'Todo aluno não estudou.'], correta: 2,
          explicacao: '"Algum aluno não estudou" diz que existe pelo menos um que não estudou. Para ser falsa, não pode haver nenhum assim: **todo** aluno estudou.',
          outraExplicacao: 'Use a tabela ao contrário: a negação de "todo A é B" é "algum A não é B". Então a negação de "algum A não é B" volta para "todo A é B".' },
      ],
    },
    { // 8. pegadinhas
      conceito: 'As **pegadinhas de banca**: frase falsa é proposição; não saber a resposta não importa; sentença aberta e paradoxo não são proposição; "algum" significa "pelo menos um".',
      variacoes: [
        { pergunta: 'Qual afirmação está **correta**?', opcoes: ['"Que prova difícil!" é proposição, porque dá para concordar ou discordar.', '"x + 1 = 3" é uma proposição falsa.', '"O número 10 é ímpar" é proposição, com valor lógico falso.', 'A negação de "Todos passaram" é "Ninguém passou".'], correta: 2,
          explicacao: '"O número 10 é ímpar" afirma algo e pode ser julgada: é **falsa**, mas é proposição. As outras erram: exclamação não é proposição, "x + 1 = 3" é sentença aberta e a negação de "todos passaram" é "alguém não passou".',
          outraExplicacao: 'Lembre: ser falsa é um resultado do teste, não uma reprovação. Só não é proposição a frase em que o teste "V ou F?" nem pode ser feito.' },
        { pergunta: '"Algumas questões da prova são difíceis." Se **todas** as questões forem difíceis, essa frase é:', opcoes: ['verdadeira, porque "algum" quer dizer "pelo menos um"', 'falsa, porque "algumas" exclui "todas"', 'uma sentença aberta', 'um paradoxo'], correta: 0,
          explicacao: 'Na lógica, "algum" = **pelo menos um**. Se todas são difíceis, com certeza pelo menos uma é. A frase é **verdadeira**.',
          outraExplicacao: 'No dia a dia, "algumas" soa como "não todas", mas a prova usa o sentido lógico. Pergunte só: existe pelo menos uma questão difícil? Sim. Então é verdade.' },
      ],
    },
  ],
});

App.dados.adicionarTermos('logica', {
  'valor lógico': 'O resultado do julgamento de uma proposição: V (verdadeiro) ou F (falso). Escreve-se V(p) = V ou V(p) = F.',
  'sentença aberta': 'Frase com uma peça vazia (x, y, ele, ela) cujo valor depende de quem ocupa a peça. "x + 2 = 5" e "Ele é médico" não são proposições.',
  'paradoxo': 'Frase que se contradiz: se for verdadeira, é falsa, e vice-versa. Ex.: "Esta frase é falsa". Não é proposição.',
  'proposição simples': 'Proposição com uma única ideia, que não pode ser dividida em outras proposições. Ex.: "Ana estuda."',
  'proposição composta': 'Duas ou mais proposições simples ligadas por conectivos. Ex.: "Ana estuda e Bia trabalha."',
  'conectivo': 'Palavra que liga proposições simples para formar uma composta: e (∧), ou (∨), se...então (→), se e somente se (↔).',
  'bicondicional': 'O "se e somente se" (↔). É verdadeiro quando as duas partes têm o mesmo valor (as duas V ou as duas F).',
  'quantificador': 'Palavra que diz para quantos a frase vale: todo (∀), algum/existe (∃) e nenhum. A negação de "todo" é "algum... não".',
  'contraexemplo': 'Um único caso que não segue uma regra geral. Basta um contraexemplo para mostrar que uma frase com "todo" é falsa.',
});
