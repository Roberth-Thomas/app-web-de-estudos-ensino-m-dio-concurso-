/* =========================================================
   ingles-trilha.js — a trilha de inglês até a fluência
   Níveis do Quadro Europeu (CEFR): B1 → B2 → C1.
   Cada unidade liga a um tópico (assunto) quando a apostila dela existe.
   Unidades sem "assunto" aparecem como "em breve" (são escritas uma por vez,
   com auditoria antes de chegar ao estudante).
   Aqui também ficam o vocabulário de cada unidade (cartões de revisão)
   e a prova de nivelamento. Tudo escrito para o app (nada copiado de cursos).
   ========================================================= */
App.dados = App.dados || {};

App.dados.trilhaIngles = {
  /** Ritmo combinado: 30 a 40 min por dia, sem obrigação */
  rotina: [
    { min: 5, texto: 'Cartões de vocabulário' },
    { min: 15, texto: 'A unidade da vez (ou uma aula do seu curso)' },
    { min: 10, texto: 'Escuta ou leitura da unidade' },
    { min: 5, texto: 'Uma escrita curta (com correção pela IA)' },
  ],

  niveis: [
    {
      id: 'b1', nome: 'B1 — Intermediário', descricao: 'Firmar a base: entender o essencial de textos e conversas do dia a dia, do trabalho e da internet.',
      unidades: [
        { id: 'b1-01', titulo: 'Estratégias de leitura: cognatos, skimming e scanning', foco: 'leitura', assunto: 'ingles-1-0' },
        { id: 'b1-02', titulo: 'Presente simples × contínuo: rotina e trabalho', foco: 'gramática', assunto: 'ingles-1-1' },
        { id: 'b1-03', titulo: 'Passado simples × contínuo: contar histórias', foco: 'gramática', assunto: 'ingles-1-2' },
        { id: 'b1-04', titulo: 'Present perfect: experiências', foco: 'gramática', assunto: 'ingles-1-3' },
        { id: 'b1-05', titulo: 'Futuro: will, going to e planos', foco: 'gramática', assunto: 'ingles-2-0' },
        { id: 'b1-06', titulo: 'Modais: can, must, should, have to', foco: 'gramática', assunto: 'ingles-2-1' },
        { id: 'b1-07', titulo: 'Comparativos e superlativos', foco: 'gramática', assunto: 'ingles-2-2' },
        { id: 'b1-08', titulo: 'Condicionais 0 e 1', foco: 'gramática', assunto: 'ingles-2-3' },
        { id: 'b1-09', titulo: 'Falsos cognatos e vocabulário de prova', foco: 'vocabulário', assunto: 'ingles-3-0' },
        { id: 'b1-10', titulo: 'Conectivos e o primeiro e-mail', foco: 'escrita', assunto: 'ingles-3-1' },
        { id: 'b1-11', titulo: 'Phrasal verbs essenciais', foco: 'vocabulário', assunto: 'ingles-3-2' },
        { id: 'b1-12', titulo: 'Escuta: números, datas e avisos', foco: 'escuta', assunto: 'ingles-3-3' },
      ],
    },
    {
      id: 'b2', nome: 'B2 — Intermediário avançado', descricao: 'Ler e ouvir com independência: notícias, séries, documentação técnica e e-mails de trabalho.',
      unidades: [
        { id: 'b2-01', titulo: 'Past perfect: a ordem dos fatos', foco: 'gramática' },
        { id: 'b2-02', titulo: 'Condicionais 2 e 3: hipóteses e arrependimentos', foco: 'gramática' },
        { id: 'b2-03', titulo: 'Voz passiva: notícias e textos técnicos', foco: 'gramática' },
        { id: 'b2-04', titulo: 'Discurso indireto: contar o que alguém disse', foco: 'gramática' },
        { id: 'b2-05', titulo: 'Orações relativas: who, which, that, whose', foco: 'gramática' },
        { id: 'b2-06', titulo: 'Gerúndio × infinitivo', foco: 'gramática' },
        { id: 'b2-07', titulo: 'Modais de dedução: must have, can\'t have, might', foco: 'gramática' },
        { id: 'b2-08', titulo: 'Collocations: as palavras que andam juntas', foco: 'vocabulário' },
        { id: 'b2-09', titulo: 'E-mail formal de trabalho', foco: 'escrita' },
        { id: 'b2-10', titulo: 'Textos técnicos: documentação, IA e hardware', foco: 'leitura' },
        { id: 'b2-11', titulo: 'Escuta: séries, vídeos e podcasts curtos', foco: 'escuta' },
        { id: 'b2-12', titulo: 'Interpretação no estilo ENEM', foco: 'leitura' },
      ],
    },
    {
      id: 'c1', nome: 'C1 — Avançado (fluência)', descricao: 'Usar o inglês com naturalidade: nuances, expressões, argumentação e escuta sem legenda.',
      unidades: [
        { id: 'c1-01', titulo: 'Expressões idiomáticas do dia a dia', foco: 'vocabulário' },
        { id: 'c1-02', titulo: 'Inversões e ênfase: "Not only...", "Had I known..."', foco: 'gramática' },
        { id: 'c1-03', titulo: 'Nuances: registro formal e informal', foco: 'vocabulário' },
        { id: 'c1-04', titulo: 'Texto argumentativo em inglês', foco: 'escrita' },
        { id: 'c1-05', titulo: 'Escuta: podcasts e entrevistas', foco: 'escuta' },
        { id: 'c1-06', titulo: 'Leitura crítica: opinião, ironia e implícito', foco: 'leitura' },
      ],
    },
  ],

  /**
   * Vocabulário de cada unidade (vira cartões de revisão espaçada).
   * { en, pt, exemplo } — o exemplo é lido em voz alta no cartão.
   * Significados conferidos no Wiktionary (dicionário aberto).
   */
  vocabulario: {
    'b1-01': [
      { en: 'feature', pt: 'recurso, funcionalidade', exemplo: 'The new feature lets you edit your photos.' },
      { en: 'to improve', pt: 'melhorar', exemplo: 'The update improved the game\'s performance.' },
      { en: 'to fix', pt: 'consertar, corrigir', exemplo: 'They fixed the bug last night.' },
      { en: 'to crash', pt: 'travar, parar de funcionar (programa); bater (veículo)', exemplo: 'My computer crashed during the meeting.' },
      { en: 'maintenance', pt: 'manutenção', exemplo: 'The servers are offline for maintenance.' },
      { en: 'however', pt: 'porém, no entanto', exemplo: 'The plan was cheap. However, it did not work.' },
      { en: 'without', pt: 'sem', exemplo: 'I can\'t work without coffee.' },
      { en: 'at least', pt: 'pelo menos', exemplo: 'Sleep at least seven hours.' },
      { en: 'talk', pt: 'palestra; conversa', exemplo: 'There is a talk about AI on Wednesday.' },
      { en: 'crowded', pt: 'lotado, cheio de gente', exemplo: 'The bus was so crowded that I stood all the way.' },
      { en: 'boring', pt: 'chato, entediante', exemplo: 'The movie was so boring that I fell asleep.' },
      { en: 'tip', pt: 'dica; gorjeta', exemplo: 'Here are five tips to save battery.' },
    ],
  },

  /**
   * Prova de nivelamento: 24 questões do A2 ao C1, com escuta (o celular lê o texto).
   * Resultado: o primeiro nível com menos de 70% de acerto é por onde começar.
   */
  nivelamento: [
    /* ---------- A2 ---------- */
    { nivel: 'a2', pergunta: 'Complete: "She ___ to work by bus every day."', opcoes: ['go', 'goes', 'going', 'is go'], correta: 1,
      explicacao: 'Presente simples com he/she/it: o verbo ganha -s. "She goes to work."' },
    { nivel: 'a2', pergunta: 'Complete: "There ___ two books on the table."', opcoes: ['is', 'are', 'be', 'am'], correta: 1,
      explicacao: '"There are" para plural (two books); "there is" para singular.' },
    { nivel: 'a2', pergunta: 'Complete: "I didn\'t ___ the email yesterday."', opcoes: ['saw', 'see', 'seen', 'seeing'], correta: 1,
      explicacao: 'Depois de "didn\'t", o verbo fica na forma básica: "I didn\'t see". O "did" já marca o passado.' },
    { nivel: 'a2', pergunta: 'Qual é o oposto de "cheap"?', opcoes: ['expensive', 'small', 'easy', 'early'], correta: 0,
      explicacao: '"Cheap" é barato; o oposto é "expensive", caro.' },
    { nivel: 'a2', pergunta: 'Alguém pergunta: "Can you help me?" Qual resposta combina?', opcoes: ['Yes, of course.', 'Yes, I do.', 'No, I am not.', 'Yes, I help yesterday.'], correta: 0,
      explicacao: 'É um pedido de ajuda: "Yes, of course" (claro). Respostas curtas repetiriam o "can": "Yes, I can".' },
    { nivel: 'a2', escuta: 'The train to Rio leaves at half past seven, from platform four.', pergunta: 'Ouça: a que horas sai o trem?', opcoes: ['7h30', '4h', '7h15', '4h30'], correta: 0,
      explicacao: '"Half past seven" = sete e meia (7h30). "Platform four" é a plataforma 4, não o horário.' },

    /* ---------- B1 ---------- */
    { nivel: 'b1', pergunta: 'Complete: "I ___ here since 2020."', opcoes: ['live', 'am living', 'have lived', 'lived'], correta: 2,
      explicacao: '"Since 2020" liga o passado ao presente (moro aqui desde 2020 e continuo): present perfect, "have lived".' },
    { nivel: 'b1', pergunta: 'Complete: "If it ___ tomorrow, we\'ll cancel the trip."', opcoes: ['rains', 'will rain', 'rained', 'raining'], correta: 0,
      explicacao: 'Condicional 1: "if" + presente simples, e "will" na outra parte. Não se usa "will" depois de "if" nesse caso.' },
    { nivel: 'b1', pergunta: 'Complete: "While I ___ dinner, the phone rang."', opcoes: ['cooked', 'was cooking', 'am cooking', 'have cooked'], correta: 1,
      explicacao: 'Ação em andamento no passado (estava cozinhando) interrompida por outra (o telefone tocou): passado contínuo, "was cooking".' },
    { nivel: 'b1', pergunta: 'Complete: "You ___ smoke here. It\'s forbidden."', opcoes: ['mustn\'t', 'don\'t have to', 'shouldn\'t to', 'can'], correta: 0,
      explicacao: '"Mustn\'t" = é proibido. "Don\'t have to" = não precisa (é opcional). "Should" não leva "to".' },
    { nivel: 'b1', pergunta: 'Complete: "This phone is ___ than my old one."', opcoes: ['more fast', 'faster', 'fastest', 'most fast'], correta: 1,
      explicacao: 'Adjetivo curto (fast) faz o comparativo com -er: "faster than". "Fastest" é o superlativo.' },
    { nivel: 'b1', pergunta: 'O que significa "actually"?', opcoes: ['atualmente', 'na verdade', 'atuante', 'de repente'], correta: 1,
      explicacao: 'Falso cognato: "actually" = na verdade. "Atualmente" é "currently" ou "nowadays".' },
    { nivel: 'b1', escuta: 'Hi, this is Ana from the dentist\'s office. Your appointment has been moved from Monday to Thursday at three p.m. Please call us back if this time doesn\'t work for you.',
      pergunta: 'Ouça o recado: o que aconteceu com a consulta?', opcoes: ['Foi cancelada.', 'Foi mudada para quinta, às 15h.', 'Foi mudada para segunda, às 15h.', 'Continua na segunda.'], correta: 1,
      explicacao: '"Has been moved from Monday to Thursday at three p.m." = foi mudada de segunda para quinta, às 15h.' },

    /* ---------- B2 ---------- */
    { nivel: 'b2', pergunta: 'Complete: "By the time we arrived, the movie ___."', opcoes: ['already started', 'had already started', 'has already started', 'was already start'], correta: 1,
      explicacao: 'Uma ação passada que aconteceu antes de outra (o filme começou antes de chegarmos): past perfect, "had already started".' },
    { nivel: 'b2', pergunta: 'Complete: "If I ___ more time, I would learn Japanese."', opcoes: ['have', 'had', 'will have', 'would have'], correta: 1,
      explicacao: 'Condicional 2 (hipótese no presente): "if" + passado simples, e "would" na outra parte. "If I had more time..."' },
    { nivel: 'b2', pergunta: 'Complete: "The report ___ by the manager tomorrow."', opcoes: ['will be reviewed', 'will review', 'is reviewing', 'reviewed'], correta: 0,
      explicacao: 'O relatório sofre a ação (é revisado pelo gerente): voz passiva no futuro, "will be reviewed".' },
    { nivel: 'b2', pergunta: 'Complete: "I\'m looking forward to ___ you."', opcoes: ['see', 'seeing', 'saw', 'to see'], correta: 1,
      explicacao: 'Em "look forward to", o "to" é preposição, e depois de preposição vem o verbo com -ing: "looking forward to seeing you".' },
    { nivel: 'b2', pergunta: 'Complete: "He must ___ forgotten the meeting; he never misses one."', opcoes: ['have', 'had', 'has', 'having'], correta: 0,
      explicacao: 'Dedução sobre o passado: "must have" + particípio = "ele deve ter esquecido".' },
    { nivel: 'b2', pergunta: 'Complete: "I need to ___ my homework."', opcoes: ['make', 'do', 'take', 'get'], correta: 1,
      explicacao: 'Collocation: em inglês se diz "do homework" (e "make a mistake", "make a decision").' },

    /* ---------- C1 ---------- */
    { nivel: 'c1', pergunta: 'Complete: "Not only ___ late, but he also forgot the tickets."', opcoes: ['he arrived', 'did he arrive', 'he did arrive', 'arrived he'], correta: 1,
      explicacao: 'Com "Not only" no começo, a frase faz inversão, como numa pergunta: "Not only did he arrive late..."' },
    { nivel: 'c1', pergunta: 'Complete: "Had I known about the traffic, I ___ earlier."', opcoes: ['would leave', 'would have left', 'had left', 'will leave'], correta: 1,
      explicacao: '"Had I known" = "If I had known" (condicional 3, invertida). A outra parte pede "would have" + particípio: "would have left".' },
    { nivel: 'c1', pergunta: '"The project was put on hold." O projeto:', opcoes: ['foi concluído', 'foi suspenso por um tempo', 'foi cancelado para sempre', 'foi acelerado'], correta: 1,
      explicacao: '"Put on hold" = colocar em espera, adiar ou suspender por um tempo. Não quer dizer cancelar de vez.' },
    { nivel: 'c1', pergunta: 'Qual frase é a mais adequada para um e-mail formal de trabalho?', opcoes: ['Hey, send me the file ASAP.', 'I would appreciate it if you could send me the file at your earliest convenience.', 'Give me the file now.', 'File, please, fast.'], correta: 1,
      explicacao: '"I would appreciate it if you could..." e "at your earliest convenience" são fórmulas educadas e formais. As outras são informais ou rudes.' },
    { nivel: 'c1', escuta: 'Although the new policy was intended to reduce costs, critics argue that it may end up increasing them in the long run, since training staff will take far longer than expected.',
      pergunta: 'Ouça: segundo os críticos, a nova política…', opcoes: ['vai reduzir os custos rapidamente', 'pode acabar aumentando os custos com o tempo', 'já foi cancelada', 'não exige treinamento'], correta: 1,
      explicacao: '"May end up increasing them in the long run" = pode acabar aumentando os custos a longo prazo, porque treinar a equipe vai demorar muito mais que o esperado.' },
  ],
};

/** Todas as unidades em ordem, com o nível de cada uma */
App.dados.unidadesIngles = function () {
  return App.dados.trilhaIngles.niveis.flatMap((n) => n.unidades.map((u) => Object.assign({ nivel: n.id }, u)));
};
