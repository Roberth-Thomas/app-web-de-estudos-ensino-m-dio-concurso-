/* =========================================================
   redacao.js — temas sugeridos e checklist de revisão
   ========================================================= */
App.dados = App.dados || {};

/** Temas curtos ligados a Filosofia, Sociologia e atualidades */
App.dados.temasRedacao = [
  { area: 'Filosofia', tema: 'A frase de Sócrates "Só sei que nada sei" ainda faz sentido na era da internet?' },
  { area: 'Filosofia', tema: 'Ética no trabalho: até onde vai a obediência a uma ordem do chefe?' },
  { area: 'Filosofia', tema: 'Liberdade e responsabilidade: somos o que escolhemos ser (Sartre)?' },
  { area: 'Filosofia', tema: 'A banalidade do mal (Hannah Arendt) e o comportamento nas redes sociais' },
  { area: 'Filosofia', tema: 'Razão ou emoção: o que deve guiar as grandes decisões da vida?' },
  { area: 'Filosofia', tema: 'Platão e o mito da caverna: que "sombras" enganam as pessoas hoje?' },
  { area: 'Sociologia', tema: 'Os desafios do trabalho por aplicativo no Brasil' },
  { area: 'Sociologia', tema: 'Desigualdade social e acesso à educação de qualidade' },
  { area: 'Sociologia', tema: 'O papel dos movimentos sociais na democracia brasileira' },
  { area: 'Sociologia', tema: 'Cidadania além do voto: como participar da vida pública' },
  { area: 'Sociologia', tema: 'Cultura de massa e identidade: ainda escolhemos o que consumimos?' },
  { area: 'Sociologia', tema: 'O serviço público e a confiança da população no Estado' },
  { area: 'Atualidades', tema: 'Desinformação e fake news: como proteger a sociedade?' },
  { area: 'Atualidades', tema: 'Inteligência artificial e o futuro do emprego' },
  { area: 'Atualidades', tema: 'Mudanças climáticas e eventos extremos nas cidades brasileiras' },
  { area: 'Atualidades', tema: 'Saúde mental dos jovens adultos no Brasil' },
  { area: 'Atualidades', tema: 'Uso excessivo de celular e a capacidade de concentração' },
  { area: 'Atualidades', tema: 'Mobilidade urbana: o transporte público nas grandes cidades' },
  { area: 'Atualidades', tema: 'Educação financeira deveria ser obrigatória nas escolas?' },
  { area: 'Atualidades', tema: 'Proteção de dados pessoais na era digital' },
];

/** Itens da checklist de revisão (a chave é salva junto com cada texto) */
App.dados.checklistRevisao = [
  { id: 'pontuacao',   texto: 'Pontuação: vírgulas e pontos no lugar certo' },
  { id: 'concordancia', texto: 'Concordância verbal e nominal' },
  { id: 'crase',       texto: 'Crase usada só antes de palavra feminina (e casos especiais)' },
  { id: 'paragrafos',  texto: 'Parágrafos claros, cada um com uma ideia principal' },
  { id: 'estrutura',   texto: 'Introdução, desenvolvimento e conclusão' },
];
