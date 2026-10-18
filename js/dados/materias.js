/* =========================================================
   materias.js — as matérias e o cronograma semanal
   Para mudar o cronograma, edite só este arquivo.
   ========================================================= */
App.dados = App.dados || {};

/** Lista de matérias. "id" é usado internamente; "nome" aparece na tela. */
App.dados.materias = [
  { id: 'portugues',     nome: 'Português',              emoji: '📖', tipo: 'base' },
  { id: 'matematica',    nome: 'Matemática',             emoji: '➗', tipo: 'base' },
  { id: 'biologia',      nome: 'Biologia',               emoji: '🧬', tipo: 'base' },
  { id: 'historia',      nome: 'História',               emoji: '🏛️', tipo: 'base' },
  { id: 'geografia',     nome: 'Geografia',              emoji: '🌎', tipo: 'base' },
  { id: 'filosofia',     nome: 'Filosofia',              emoji: '🤔', tipo: 'base' },
  { id: 'sociologia',    nome: 'Sociologia',             emoji: '👥', tipo: 'base' },
  { id: 'logica',        nome: 'Raciocínio lógico',      emoji: '🧩', tipo: 'concurso' },
  { id: 'informatica',   nome: 'Informática',            emoji: '💻', tipo: 'concurso' },
  { id: 'administracao', nome: 'Noções de Administração', emoji: '🗂️', tipo: 'concurso' },
];

/** Busca uma matéria pelo id */
App.dados.materia = function (id) {
  return App.dados.materias.find((m) => m.id === id) || { id, nome: id, emoji: '📌' };
};

/**
 * Cronograma da semana. A chave é o número do dia da semana
 * igual ao Date.getDay(): 0 = domingo, 1 = segunda ... 6 = sábado.
 * "materias" liga cada bloco às matérias (usado no simulado e nos atalhos).
 * "acao" indica um bloco especial: 'simulado' ou 'redacao'.
 */
App.dados.cronograma = {
  1: { nome: 'Segunda',
       base:     { titulo: 'Português: gramática', materias: ['portugues'] },
       concurso: { titulo: 'Raciocínio lógico', materias: ['logica'] } },
  2: { nome: 'Terça',
       base:     { titulo: 'Matemática', materias: ['matematica'] },
       concurso: { titulo: 'Informática', materias: ['informatica'] } },
  3: { nome: 'Quarta',
       base:     { titulo: 'Português: interpretação e redação', materias: ['portugues'] },
       concurso: { titulo: 'Noções de Administração', materias: ['administracao'] } },
  4: { nome: 'Quinta',
       base:     { titulo: 'Matemática', materias: ['matematica'] },
       concurso: { titulo: 'Biologia', materias: ['biologia'] } },
  5: { nome: 'Sexta',
       base:     { titulo: 'História e Geografia (atualidades)', materias: ['historia', 'geografia'] },
       concurso: { titulo: 'Simulado ou revisão da semana', materias: [], acao: 'simulado' } },
  6: { nome: 'Sábado',
       base:     { titulo: 'Filosofia e Sociologia', materias: ['filosofia', 'sociologia'] },
       concurso: { titulo: 'Escrever um texto curto usando o que estudou', materias: [], acao: 'redacao' } },
  0: { nome: 'Domingo', descanso: true },
};

/** Meta diária de estudo (texto exibido na tela inicial) */
App.dados.metaDiaria = '1h a 1h30';

/** Matérias estudadas de segunda a sexta — de onde o simulado sorteia as questões */
App.dados.materiasDaSemana = function () {
  const ids = new Set();
  [1, 2, 3, 4, 5].forEach((dia) => {
    const d = App.dados.cronograma[dia];
    d.base.materias.forEach((m) => ids.add(m));
    d.concurso.materias.forEach((m) => ids.add(m));
  });
  return Array.from(ids);
};
