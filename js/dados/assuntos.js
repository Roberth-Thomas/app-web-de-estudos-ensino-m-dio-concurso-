/* =========================================================
   assuntos.js — lista inicial de assuntos por matéria e fase
   Fase 1 = meses 1–2 (1º ano), fase 2 = meses 3–4 (2º ano),
   fase 3 = meses 5–6 (3º ano).
   Depois da primeira abertura, a lista passa a viver no
   localStorage (você pode adicionar/editar/remover pelo app).
   ========================================================= */
App.dados = App.dados || {};

App.dados.assuntosIniciais = {
  portugues: {
    1: ['Classes de palavras', 'Acentuação', 'Ortografia', 'Pontuação'],
    2: ['Concordância verbal e nominal', 'Regência', 'Crase', 'Colocação pronominal'],
    3: ['Coesão e coerência', 'Interpretação de texto', 'Argumentação', 'Redação dissertativo-argumentativa'],
  },
  matematica: {
    1: ['Porcentagem', 'Razão e proporção', 'Regra de três', 'Funções do 1º e 2º grau'],
    2: ['Progressões (PA e PG)', 'Probabilidade', 'Análise combinatória', 'Geometria plana e espacial'],
    3: ['Estatística', 'Juros simples e compostos', 'Leitura e análise de gráficos'],
  },
  biologia: {
    1: ['Células', 'Metabolismo (fotossíntese e respiração)', 'Introdução à genética'],
    2: ['Classificação dos seres vivos', 'Plantas', 'Animais', 'Corpo humano'],
    3: ['Genética', 'Evolução', 'Ecologia e meio ambiente'],
  },
  historia: {
    1: ['Antiguidade', 'Idade Média', 'Brasil Colônia'],
    2: ['Idade Moderna', 'Revoluções', 'Brasil Império'],
    3: ['República no Brasil', 'Guerras mundiais', 'Guerra Fria', 'Ditadura militar', 'Redemocratização'],
  },
  geografia: {
    1: ['Cartografia', 'Clima', 'Relevo', 'Recursos naturais'],
    2: ['População', 'Urbanização', 'Agropecuária', 'Indústria'],
    3: ['Globalização', 'Geopolítica', 'Blocos econômicos', 'Questões ambientais atuais'],
  },
  filosofia: {
    1: ['O que é filosofia', 'Pré-socráticos', 'Sócrates', 'Platão', 'Aristóteles'],
    2: ['Filosofia medieval', 'Filosofia moderna (Descartes, Locke, Kant)', 'Ética'],
    3: ['Filosofia contemporânea (Nietzsche, Sartre, Hannah Arendt)', 'Filosofia política'],
  },
  sociologia: {
    1: ['Clássicos (Durkheim, Marx, Weber)', 'Cultura e sociedade'],
    2: ['Trabalho', 'Desigualdade social', 'Movimentos sociais'],
    3: ['Estado', 'Democracia', 'Cidadania', 'Globalização', 'Questões atuais do Brasil'],
  },
  // Inglês: as 12 unidades do nível B1 da trilha (js/dados/ingles-trilha.js), 4 por fase.
  // Os níveis B2 e C1 entram aqui quando as unidades deles forem escritas.
  ingles: {
    1: ['Estratégias de leitura: cognatos, skimming e scanning', 'Presente simples × contínuo: rotina e trabalho', 'Passado simples × contínuo: contar histórias', 'Present perfect: experiências'],
    2: ['Futuro: will, going to e planos', 'Modais: can, must, should, have to', 'Comparativos e superlativos', 'Condicionais 0 e 1'],
    3: ['Falsos cognatos e vocabulário de prova', 'Conectivos e o primeiro e-mail', 'Phrasal verbs essenciais', 'Escuta: números, datas e avisos'],
  },
  // Concurso: assuntos divididos em terços, em ordem, pelas 3 fases
  logica: {
    1: ['Proposições', 'Conectivos'],
    2: ['Tabela-verdade', 'Equivalências'],
    3: ['Sequências', 'Problemas lógicos'],
  },
  informatica: {
    1: ['Sistemas operacionais', 'Word e Excel'],
    2: ['Internet e e-mail', 'Segurança da informação'],
    3: ['Redes básicas'],
  },
  administracao: {
    1: ['Funções administrativas (planejar, organizar, dirigir, controlar)', 'Gestão de pessoas'],
    2: ['Administração pública'],
    3: ['Atendimento ao público'],
  },
  // Agentes de IA: curso livre, ano 1 do plano em docs/planos-fiap.md, 4 unidades por fase.
  // Apostilas em js/dados/topicos/agentes.js, escritas uma por vez.
  agentes: {
    1: ['O que é um LLM e o que é um agente', 'Tokens, contexto e os limites do modelo', 'Python para agentes: revisão prática', 'A primeira chamada a uma API de IA'],
    2: ['Prompt e context engineering', 'Saída estruturada em JSON', 'Tool calling: o modelo pede, o seu código executa', 'MCP: ferramentas num padrão aberto'],
    3: ['Embeddings e busca semântica', 'RAG: respostas com os seus documentos', 'Workflows e automação', 'Publicar o agente: FastAPI e Docker'],
  },
};

/**
 * Listas antigas que foram trocadas por uma nova (ex.: Inglês virou trilha).
 * Quem ainda tem a lista antiga salva recebe a nova; o que já estava estudado
 * continua marcado quando o tópico é o mesmo (mesmo id e mesmo título).
 */
App.dados.assuntosSubstituidos = {
  ingles: [
    'Estratégias de leitura: cognatos, skimming e scanning', 'Falsos cognatos e vocabulário de prova', 'Tempos verbais: presente e passado', 'Pronomes e referência no texto',
    'Futuro, modais e condicionais', 'Present perfect e voz passiva', 'Conectivos (linking words)', 'Gêneros textuais: notícia, anúncio, tirinha e poema',
    'Interpretação no estilo ENEM', 'Phrasal verbs e expressões comuns', 'Textos técnicos e de concurso', 'Escrita: frases e parágrafos curtos',
  ],
};

/** Fases do plano (2 meses cada) */
App.dados.fases = [
  { numero: 1, nome: 'Fase 1', descricao: 'Meses 1–2 · 1º ano' },
  { numero: 2, nome: 'Fase 2', descricao: 'Meses 3–4 · 2º ano' },
  { numero: 3, nome: 'Fase 3', descricao: 'Meses 5–6 · 3º ano' },
];

/**
 * Transforma o objeto acima numa lista plana, que é o formato
 * salvo no localStorage: [{ id, materia, fase, titulo, estudado }]
 */
App.dados.assuntosPadrao = function () {
  const lista = [];
  Object.entries(App.dados.assuntosIniciais).forEach(([materia, fases]) => {
    Object.entries(fases).forEach(([fase, titulos]) => {
      titulos.forEach((titulo, i) => {
        lista.push({ id: materia + '-' + fase + '-' + i, materia, fase: Number(fase), titulo, estudado: false });
      });
    });
  });
  return lista;
};
