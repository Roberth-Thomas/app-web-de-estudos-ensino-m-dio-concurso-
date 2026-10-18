/* =========================================================
   plano-redacao.js — "Do zero à boa redação" em 12 semanas
   Uma habilidade por semana, na ordem em que se aprende:
   entender o que é dissertar → tema → tese → linguagem →
   introdução → argumentos → desenvolvimento → repertório →
   coesão → conclusão → redação completa → redação cronometrada.

   Baseado nos critérios oficiais de correção do Inep (Cartilha do
   Participante — A Redação do Enem). Muitas bancas de concurso
   usam critérios parecidos; confira sempre o edital do seu concurso.

   Cada semana: { numero, titulo, competencia, objetivo, blocos, tarefa, checklist }
   Os blocos usam os mesmos tipos da página de estudo
   (texto, titulo, lista, exemplo, atencao, tabela, revelar).
   ========================================================= */
App.dados = App.dados || {};

App.dados.planoRedacao = {
  fonte: { nome: 'Inep — A Redação do Enem 2025: Cartilha do Participante (PDF oficial)', url: 'https://download.inep.gov.br/publicacoes/institucionais/avaliacoes_e_exames_da_educacao_basica/a_redacao_no_enem_2025_cartilha_do_participante.pdf' },
  fonte2026: { nome: 'Inep — Cartilha da redação do Enem 2026 (notícia oficial)', url: 'https://www.gov.br/inep/pt-br/centrais-de-conteudo/noticias/enem/enem-2026-cartilha-da-redacao-esta-disponivel' },

  /** As 5 competências oficiais, com o texto da Matriz de Referência do Inep */
  competencias: [
    { numero: 'I', oficial: 'Demonstrar domínio da modalidade escrita formal da língua portuguesa.', simples: 'Escrever de acordo com a norma-padrão: ortografia, acentuação, pontuação, concordância, sem gírias.' },
    { numero: 'II', oficial: 'Compreender a proposta de redação e aplicar conceitos das várias áreas de conhecimento para desenvolver o tema dentro dos limites estruturais do texto dissertativo-argumentativo em prosa.', simples: 'Entender o tema, não fugir dele e escrever um texto que defende uma opinião, usando o que você sabe de outras matérias.' },
    { numero: 'III', oficial: 'Selecionar, relacionar, organizar e interpretar informações, fatos, opiniões e argumentos em defesa de um ponto de vista.', simples: 'Escolher bons argumentos e organizá-los para defender a sua tese.' },
    { numero: 'IV', oficial: 'Demonstrar conhecimento dos mecanismos linguísticos necessários para a construção da argumentação.', simples: 'Ligar bem as frases e os parágrafos (conectivos, retomadas), sem repetir palavras.' },
    { numero: 'V', oficial: 'Elaborar proposta de intervenção para o problema abordado, respeitando os direitos humanos.', simples: 'No fim, propor uma solução detalhada para o problema, sem desrespeitar direitos humanos.' },
  ],

  semanas: [
    /* ===================== SEMANA 1 ===================== */
    { numero: 1, titulo: 'O que é dissertar (e por que não é bicho de sete cabeças)', competencia: 'II',
      objetivo: 'Entender que dissertar é só defender uma opinião com bons motivos, por escrito.',
      blocos: [
        { tipo: 'texto', texto: 'Se você acha que é "horrível em dissertação", comece por aqui: **você já disserta todo dia**. Quando você explica para alguém por que um jogo é melhor que outro, ou por que não vale a pena pegar um empréstimo, você está fazendo exatamente isso: dando uma **opinião** e defendendo com **motivos**. A redação só pede que isso seja feito por escrito, com organização.' },
        { tipo: 'tabela', cabecalho: ['Tipo de texto', 'O que faz', 'Exemplo'], linhas: [
          ['**Narração**', 'conta uma história, com fatos em sequência', '"Ontem, ao sair de casa, João encontrou..."'],
          ['**Descrição**', 'mostra como algo é', '"A sala era pequena, clara e cheia de livros."'],
          ['**Dissertação argumentativa**', '**defende uma opinião** sobre um problema, com argumentos', '"O uso excessivo de celular prejudica a concentração dos jovens, porque..."'],
        ] },
        { tipo: 'texto', texto: 'A redação do Enem e da maioria dos concursos pede o texto **dissertativo-argumentativo**: você recebe um tema (um problema da sociedade), toma uma posição e prova que ela faz sentido.' },
        { tipo: 'exemplo', titulo: 'Um parágrafo dissertativo bem simples', texto: '**Opinião:** O uso do celular deve ser limitado nas salas de aula.\n**Motivo:** As notificações constantes interrompem a atenção dos estudantes.\n**Explicação:** Cada interrupção obriga o cérebro a "recomeçar" a tarefa, o que diminui o aprendizado.' },
        { tipo: 'atencao', texto: 'Você não precisa "escrever bonito" agora. Nesta semana, o único objetivo é: **dizer o que pensa e dar um motivo**.' },
      ],
      tarefa: { texto: 'Escreva de 3 a 5 linhas respondendo: **o uso do celular deveria ser proibido nas escolas?** Diga claramente o que você pensa e dê pelo menos um motivo, explicando-o.' },
      checklist: ['Deixei claro o que eu penso (sim ou não, e com que limites).', 'Dei pelo menos um motivo.', 'Expliquei o motivo, em vez de só repetir a opinião.'],
    },

    /* ===================== SEMANA 2 ===================== */
    { numero: 2, titulo: 'Entender o tema e não fugir dele', competencia: 'II',
      objetivo: 'Separar o assunto geral do recorte que o tema pede, para não tangenciar nem fugir.',
      blocos: [
        { tipo: 'texto', texto: 'O erro que mais derruba nota é **não responder exatamente ao tema**. O tema não é só um assunto: ele vem com um **recorte**, um pedaço específico do assunto.' },
        { tipo: 'exemplo', titulo: 'Tema real do Enem 2019', texto: '**"Democratização do acesso ao cinema no Brasil"**\n• **Assunto geral:** cinema.\n• **Recorte:** o **acesso** ao cinema, para que **mais pessoas** possam ir (democratização), **no Brasil**.\n• Falar só da "importância da cultura" ou "da história do cinema" é **tangenciar** (ficar em volta do tema).' },
        { tipo: 'tabela', cabecalho: ['Situação', 'O que acontece'], linhas: [
          ['**Desenvolver o tema**', 'Você discute exatamente o recorte pedido. É o objetivo.'],
          ['**Tangenciar**', 'Você fala do assunto, mas não do recorte. A nota cai bastante.'],
          ['**Fugir do tema**', 'Você fala de outra coisa. Na redação do Enem, isso zera a nota.'],
        ] },
        { tipo: 'texto', texto: '**Técnica das palavras-chave:** sublinhe as palavras do tema que não podem faltar no seu texto. No exemplo: **acesso**, **cinema**, **Brasil**, e a ideia de **ampliar** (democratizar).' },
        { tipo: 'exemplo', titulo: 'Outros temas reais do Enem para treinar', texto: '2021: "Invisibilidade e registro civil: garantia de acesso à cidadania no Brasil"\n2022: "Desafios para a valorização de comunidades e povos tradicionais no Brasil"\n2023: "Desafios para o enfrentamento da invisibilidade do trabalho de cuidado realizado pela mulher no Brasil"' },
      ],
      tarefa: { texto: 'Escolha **um** dos temas de 2021, 2022 ou 2023 acima e escreva: (1) qual é o **assunto geral**; (2) qual é o **recorte**; (3) as **palavras-chave** que não podem faltar; (4) um exemplo de como alguém **tangenciaria** esse tema.' },
      checklist: ['Separei assunto geral e recorte.', 'Listei as palavras-chave do tema.', 'Entendi a diferença entre desenvolver e tangenciar.'],
    },

    /* ===================== SEMANA 3 ===================== */
    { numero: 3, titulo: 'A tese: sua opinião numa frase', competencia: 'II e III',
      objetivo: 'Escrever uma tese clara, que responde ao tema e anuncia por onde o texto vai.',
      blocos: [
        { tipo: 'texto', texto: 'A **tese** é a sua resposta ao tema, numa frase. Todo o resto da redação existe para prová-la. Sem tese, o texto vira um amontoado de informações.' },
        { tipo: 'exemplo', titulo: 'Uma "fórmula" para começar', texto: '**[O problema do tema]** persiste no Brasil, sobretudo por causa de **[causa 1]** e de **[causa 2]**.\n\nTema 2019: "O acesso ao cinema ainda é restrito no Brasil, sobretudo por causa da **concentração das salas nos grandes centros** e do **alto preço dos ingressos**."' },
        { tipo: 'tabela', cabecalho: ['Tese fraca', 'Por quê', 'Tese boa'], linhas: [
          ['"O cinema é muito importante."', 'não responde ao recorte (acesso)', '"O acesso ao cinema ainda é restrito no Brasil, sobretudo pela concentração das salas e pelo preço dos ingressos."'],
          ['"Existem vários problemas."', 'vaga: quais problemas?', 'Diga **quais** são as causas, de forma concreta.'],
        ] },
        { tipo: 'atencao', texto: 'As duas causas da tese viram os **dois parágrafos de desenvolvimento** mais tarde. Uma boa tese já é o "esqueleto" da redação inteira.' },
      ],
      tarefa: { texto: 'Escreva uma tese (1 frase, com 2 causas) para **cada um** dos três temas da semana 2.' },
      checklist: ['Cada tese responde ao recorte do tema.', 'Cada tese tem duas causas concretas.', 'Cada tese cabe em uma frase.'],
    },

    /* ===================== SEMANA 4 ===================== */
    { numero: 4, titulo: 'A linguagem da redação', competencia: 'I',
      objetivo: 'Trocar a linguagem do dia a dia pela linguagem formal e impessoal.',
      blocos: [
        { tipo: 'texto', texto: 'A Competência I avalia o **domínio da escrita formal**. Não é escrever difícil: é escrever **claro, correto e impessoal**. Tudo o que você está estudando em Português (acentuação, ortografia, pontuação, classes de palavras) entra aqui.' },
        { tipo: 'tabela', cabecalho: ['Evite', 'Prefira'], linhas: [
          ['"Eu acho que…", "Na minha opinião…"', 'Afirme diretamente: "É preciso…", "Percebe-se que…"'],
          ['"A gente", "tá", "pra", "tipo"', '"Nós" ou "a sociedade", "está", "para", "como"'],
          ['"Coisa", "negócio"', 'A palavra exata: "problema", "medida", "fator"'],
          ['Abreviações (vc, tb, q)', 'Palavras inteiras'],
          ['Perguntas ao leitor ("Você já pensou…?")', 'Afirmações e argumentos'],
        ] },
        { tipo: 'exemplo', titulo: 'Reescrevendo', texto: '~~Eu acho que a gente tem que tipo diminuir o tempo no celular porque é muita coisa.~~\n**É necessário reduzir o tempo de uso do celular, pois o excesso de estímulos prejudica a concentração.**' },
        { tipo: 'atencao', texto: 'Releia sempre procurando: acentos, vírgulas separando sujeito do verbo (erro!), concordância e palavras repetidas. Use os tópicos de Português do app como checklist.' },
      ],
      tarefa: { texto: 'Reescreva em linguagem formal e impessoal o parágrafo que você fez na **semana 1**. Depois, use o botão de correção da IA para conferir.' },
      checklist: ['Tirei "eu acho" e marcas de 1ª pessoa.', 'Troquei gírias e abreviações.', 'Revisei acentos, vírgulas e concordância.'],
    },

    /* ===================== SEMANA 5 ===================== */
    { numero: 5, titulo: 'A introdução', competencia: 'II e III',
      objetivo: 'Montar uma introdução em 3 partes: contexto, tese e anúncio dos argumentos.',
      blocos: [
        { tipo: 'texto', texto: 'A introdução tem **um parágrafo** e três peças, nesta ordem:' },
        { tipo: 'lista', itens: [
          '**1. Contextualização:** uma frase que apresenta o assunto, de preferência com um repertório (um fato histórico, uma lei, um pensador, um dado de que você tenha certeza).',
          '**2. Tese:** a sua resposta ao tema (semana 3).',
          '**3. Anúncio:** as duas causas que você vai desenvolver (muitas vezes já estão na tese).',
        ] },
        { tipo: 'exemplo', titulo: 'Introdução-modelo (tema 2019)', texto: '**[Contexto]** A Constituição Federal de 1988 garante a todos os cidadãos o direito ao acesso às fontes da cultura nacional. **[Tese]** No entanto, o acesso ao cinema ainda é restrito no Brasil, **[anúncio]** sobretudo por causa da concentração das salas nos grandes centros urbanos e do alto preço dos ingressos.' },
        { tipo: 'revelar', titulo: 'Por que essa introdução funciona? (toque para ver)', texto: 'Ela começa com um **repertório legítimo** (a Constituição), mostra o **contraste** entre o direito e a realidade ("no entanto"), apresenta a **tese** e já diz quais serão os **dois argumentos**. O leitor sabe exatamente o que vem a seguir.' },
      ],
      tarefa: { texto: 'Escolha um dos temas da semana 2 e escreva uma introdução com as 3 peças (contexto + tese + anúncio). Marque cada parte entre colchetes, como no modelo.' },
      checklist: ['Comecei com uma contextualização (de preferência com repertório).', 'Escrevi a tese com clareza.', 'Anunciei os dois argumentos.'],
    },

    /* ===================== SEMANA 6 ===================== */
    { numero: 6, titulo: 'Argumentos: como provar o que você diz', competencia: 'III',
      objetivo: 'Conhecer os tipos de argumento e escolher os mais fortes para a sua tese.',
      blocos: [
        { tipo: 'texto', texto: 'Argumento é **o motivo que prova a tese**. Opinião sem argumento é só "achismo". Os tipos mais usados:' },
        { tipo: 'tabela', cabecalho: ['Tipo', 'Como funciona', 'Exemplo'], linhas: [
          ['**Causa e consequência**', 'mostra por que o problema acontece e o que ele provoca', 'Salas concentradas nos centros → moradores da periferia gastam tempo e dinheiro → deixam de ir.'],
          ['**Exemplo / fato**', 'um caso concreto que comprova a ideia', 'Cidades pequenas sem nenhuma sala de cinema.'],
          ['**Alusão histórica**', 'um acontecimento do passado que explica o presente', 'A urbanização desigual do século XX concentrou serviços nos centros.'],
          ['**Autoridade / citação**', 'um pensador ou lei que apoia a ideia', 'Constituição de 1988; um filósofo ou sociólogo estudado no app.'],
          ['**Comparação**', 'compara situações para destacar o problema', 'O preço do ingresso comparado ao salário mínimo.'],
        ] },
        { tipo: 'atencao', texto: '**Nunca invente dados**. Se não tiver certeza de um número, use um argumento de causa e consequência ou um exemplo. Dado falso tira credibilidade.' },
      ],
      tarefa: { texto: 'Para a tese que você escreveu na semana 5, escreva **dois argumentos** (um para cada causa), dizendo de que tipo é cada um.' },
      checklist: ['Cada argumento prova uma das causas da tese.', 'Usei pelo menos dois tipos diferentes.', 'Não inventei números.'],
    },

    /* ===================== SEMANA 7 ===================== */
    { numero: 7, titulo: 'O parágrafo de desenvolvimento', competencia: 'III',
      objetivo: 'Construir um parágrafo completo: tópico frasal, explicação, repertório e fechamento.',
      blocos: [
        { tipo: 'texto', texto: 'Cada parágrafo de desenvolvimento defende **um** argumento e tem quatro peças:' },
        { tipo: 'lista', itens: [
          '**1. Tópico frasal:** a ideia principal do parágrafo (a causa 1 da tese).',
          '**2. Explicação:** por que isso acontece e o que provoca (causa → consequência).',
          '**3. Repertório / exemplo:** algo que comprove (fato, lei, pensador, exemplo).',
          '**4. Fechamento:** uma frase que liga o parágrafo de volta à tese.',
        ] },
        { tipo: 'exemplo', titulo: 'Desenvolvimento-modelo (tema 2019)', texto: '**[Tópico]** Em primeiro lugar, a concentração das salas de cinema nos grandes centros limita o acesso da população periférica. **[Explicação]** Como as salas ficam, em geral, em shoppings de regiões centrais, quem mora longe precisa gastar tempo e dinheiro com transporte, o que torna o lazer cultural um privilégio. **[Repertório]** Esse cenário dialoga com o conceito de segregação socioespacial, em que o acesso a serviços depende do lugar onde se mora. **[Fechamento]** Dessa forma, a distribuição desigual das salas impede que o cinema seja, de fato, democrático.' },
        { tipo: 'atencao', texto: 'Um parágrafo = uma ideia. Se aparecer uma segunda ideia, ela vai para o próximo parágrafo.' },
      ],
      tarefa: { texto: 'Escreva **um parágrafo de desenvolvimento** completo (as 4 peças, marcadas entre colchetes) para o primeiro argumento da semana 6.' },
      checklist: ['Comecei com um tópico frasal claro.', 'Expliquei causa e consequência.', 'Usei um repertório ou exemplo.', 'Fechei ligando à tese.'],
    },

    /* ===================== SEMANA 8 ===================== */
    { numero: 8, titulo: 'Repertório: use o que você estuda', competencia: 'II',
      objetivo: 'Transformar o que você estuda (Filosofia, Sociologia, História, leis) em argumentos.',
      blocos: [
        { tipo: 'texto', texto: 'O Inep chama de **repertório sociocultural** uma informação, um fato, uma citação ou uma experiência vivida **relacionada ao tema**, usada como argumento. O segredo não é "decorar citações bonitas", e sim **explicar a ligação** com o tema.' },
        { tipo: 'tabela', cabecalho: ['Do app', 'Serve para temas sobre…'], linhas: [
          ['**Constituição de 1988** (direitos sociais, cidadania)', 'saúde, educação, cultura, acesso a direitos'],
          ['**Durkheim** (fato social)', 'comportamentos coletivos, normas sociais'],
          ['**Marx** (luta de classes)', 'trabalho, desigualdade, exploração'],
          ['**Hannah Arendt** (banalidade do mal)', 'violência, omissão, discurso de ódio'],
          ['**Paulo Freire** (educação libertadora)', 'educação, autonomia, leitura crítica'],
          ['**Revolução Industrial / Era Vargas**', 'trabalho, urbanização, direitos trabalhistas'],
        ] },
        { tipo: 'exemplo', titulo: 'Repertório mal usado × bem usado', texto: '~~"Como dizia Platão, o mundo é feito de ideias." (solto, sem ligação com o tema)~~\n**"A situação lembra o mito da caverna, de Platão: muitos jovens enxergam apenas as \"sombras\" das redes sociais e tomam informações falsas como verdade, o que favorece a desinformação."** (explica a ligação)' },
      ],
      tarefa: { texto: 'Para o tema **"Desinformação e fake news: como proteger a sociedade?"**, escreva 3 repertórios do app e, para cada um, uma frase explicando como ele se liga ao tema.' },
      checklist: ['Escolhi repertórios que eu realmente entendo.', 'Expliquei a ligação de cada um com o tema.', 'Não usei citação "solta".'],
    },

    /* ===================== SEMANA 9 ===================== */
    { numero: 9, titulo: 'Coesão: amarrando o texto', competencia: 'IV',
      objetivo: 'Usar conectivos e retomadas para o texto fluir, sem repetir palavras.',
      blocos: [
        { tipo: 'texto', texto: 'Coesão é a "cola" do texto. Ela aparece de dois jeitos: **conectivos** (que mostram a relação entre as ideias) e **retomadas** (que evitam repetir palavras).' },
        { tipo: 'tabela', cabecalho: ['Para…', 'Conectivos'], linhas: [
          ['**começar o desenvolvimento**', 'Em primeiro lugar, Inicialmente, De início'],
          ['**acrescentar**', 'Além disso, Ademais, Também, Outrossim'],
          ['**opor**', 'No entanto, Contudo, Todavia, Entretanto'],
          ['**explicar a causa**', 'Isso ocorre porque, Uma vez que, Visto que'],
          ['**exemplificar**', 'Por exemplo, É o caso de, A exemplo de'],
          ['**concluir**', 'Portanto, Dessa forma, Logo, Assim'],
        ] },
        { tipo: 'exemplo', titulo: 'Retomada: evite repetir', texto: '~~O celular é útil. O celular também distrai. Por isso, o celular deve ter limites.~~\n**O celular é útil. Esse aparelho, porém, também distrai. Por isso, seu uso deve ter limites.**' },
        { tipo: 'atencao', texto: 'Cuidado com conectivo "decorado" que não combina com a ideia: "portanto" só pode vir depois de algo que leve àquela conclusão.' },
      ],
      tarefa: { texto: 'Reescreva o parágrafo da semana 7 melhorando a coesão: use pelo menos 3 conectivos diferentes e troque palavras repetidas por retomadas.' },
      checklist: ['Usei conectivos entre as frases e os parágrafos.', 'Cada conectivo combina com a relação entre as ideias.', 'Troquei repetições por pronomes ou sinônimos.'],
    },

    /* ===================== SEMANA 10 ===================== */
    { numero: 10, titulo: 'Conclusão e proposta de intervenção', competencia: 'V',
      objetivo: 'Fechar o texto com uma proposta de solução completa (no Enem) ou uma conclusão firme (em concursos).',
      blocos: [
        { tipo: 'texto', texto: 'No **Enem**, a Competência V pede uma **proposta de intervenção**: uma solução para o problema, que **respeite os direitos humanos**. Uma proposta completa responde a cinco perguntas:' },
        { tipo: 'tabela', cabecalho: ['Elemento', 'Pergunta', 'Exemplo (tema 2019)'], linhas: [
          ['**Agente**', 'Quem vai fazer?', 'o Ministério da Cultura'],
          ['**Ação**', 'O que vai ser feito?', 'deve ampliar a oferta de sessões de cinema'],
          ['**Meio / modo**', 'Como?', 'por meio de salas itinerantes e parcerias com escolas públicas das periferias'],
          ['**Finalidade / efeito**', 'Para quê?', 'a fim de levar o cinema a quem hoje não tem acesso'],
          ['**Detalhamento**', 'Um detalhe a mais sobre algum elemento', 'com sessões gratuitas aos fins de semana'],
        ] },
        { tipo: 'exemplo', titulo: 'Conclusão-modelo', texto: 'Portanto, é necessário democratizar o acesso ao cinema no Brasil. Para isso, o Ministério da Cultura deve ampliar a oferta de sessões, por meio de salas itinerantes e de parcerias com escolas públicas das periferias, com sessões gratuitas aos fins de semana, a fim de levar a experiência do cinema a quem hoje não tem acesso a ela.' },
        { tipo: 'atencao', texto: '**Em concursos**, nem sempre se pede proposta de intervenção: muitas bancas pedem só uma conclusão que **retome a tese** e feche o raciocínio. Leia o edital. Em qualquer caso, nunca traga argumento novo na conclusão.' },
      ],
      tarefa: { texto: 'Escreva uma conclusão para a redação que você está construindo, com os 5 elementos da proposta de intervenção marcados entre colchetes.' },
      checklist: ['Retomei a tese.', 'A proposta tem agente, ação, meio, finalidade e detalhamento.', 'A proposta respeita os direitos humanos.', 'Não trouxe argumento novo.'],
    },

    /* ===================== SEMANA 11 ===================== */
    { numero: 11, titulo: 'Sua primeira redação completa', competencia: 'I a V',
      objetivo: 'Juntar tudo: planejar, escrever, revisar e reescrever.',
      blocos: [
        { tipo: 'texto', texto: 'Agora você junta as peças. A estrutura mais segura tem **4 parágrafos**:' },
        { tipo: 'tabela', cabecalho: ['Parágrafo', 'Conteúdo', 'Semana'], linhas: [
          ['1. Introdução', 'contexto + tese + anúncio', '5'],
          ['2. Desenvolvimento 1', 'causa 1: tópico, explicação, repertório, fechamento', '6 e 7'],
          ['3. Desenvolvimento 2', 'causa 2: mesma estrutura', '6 e 7'],
          ['4. Conclusão', 'retomada + proposta de intervenção', '10'],
        ] },
        { tipo: 'lista', itens: [
          '**Planeje antes (10 min):** escreva o "esqueleto": tese, causa 1, causa 2, repertórios e proposta, em tópicos.',
          '**Escreva** seguindo o esqueleto.',
          '**Revise** com a checklist da aba Redação e com os tópicos de Português.',
          '**Peça a correção da IA** e **reescreva** o que ela apontar. A reescrita é onde mais se aprende.',
        ] },
        { tipo: 'atencao', texto: 'Na redação do Enem, o texto tem até 30 linhas, e um texto muito curto recebe nota zero. Treine escrever entre 20 e 30 linhas.' },
      ],
      tarefa: { texto: 'Escreva uma redação completa sobre **"Desafios para a valorização de comunidades e povos tradicionais no Brasil"** (tema do Enem 2022): primeiro o esqueleto, depois o texto.' },
      checklist: ['Fiz o esqueleto antes de escrever.', 'O texto tem os 4 parágrafos.', 'Revisei com a checklist.', 'Pedi a correção da IA e reescrevi.'],
    },

    /* ===================== SEMANA 12 ===================== */
    { numero: 12, titulo: 'Redação cronometrada: como no dia da prova', competencia: 'I a V',
      objetivo: 'Escrever uma redação completa em tempo de prova e comparar com a anterior.',
      blocos: [
        { tipo: 'texto', texto: 'Na prova, o tempo é curto. Treine com o relógio:' },
        { tipo: 'tabela', cabecalho: ['Etapa', 'Tempo'], linhas: [
          ['Ler o tema e os textos de apoio, achar o recorte', '5 min'],
          ['Esqueleto (tese, causas, repertórios, proposta)', '10 min'],
          ['Escrever o texto', '35 min'],
          ['Revisar (acentos, vírgulas, concordância, repetições)', '10 min'],
        ] },
        { tipo: 'texto', texto: 'Depois, compare com a redação da semana 11: o que melhorou? O que você ainda erra? Leve os erros que se repetem para o seu **caderno de erros** (tópico Ortografia) e continue escrevendo **uma redação por semana** no sábado, como está no seu cronograma.' },
      ],
      tarefa: { texto: 'Com o cronômetro ligado (60 minutos), escreva uma redação sobre **"Desafios para o enfrentamento da invisibilidade do trabalho de cuidado realizado pela mulher no Brasil"** (tema do Enem 2023).' },
      checklist: ['Respeitei os tempos de cada etapa.', 'Terminei dentro de 60 minutos.', 'Comparei com a redação da semana 11.', 'Anotei meus erros repetidos.'],
    },
  ],
};
