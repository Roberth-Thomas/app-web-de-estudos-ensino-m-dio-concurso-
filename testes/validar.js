/* =========================================================
   testes/validar.js — confere os dados e as regras do app
   Como rodar (na pasta do projeto):  node testes/validar.js
   Carrega os arquivos do app num "navegador de mentira" (vm)
   e verifica questões, assuntos, sequência e ritmo.
   ========================================================= */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');

const raiz = path.join(__dirname, '..');
const contexto = { window: {}, console };
contexto.App = contexto.window.App = {};
vm.createContext(contexto);
['js/util.js', 'js/dados/materias.js', 'js/dados/assuntos.js', 'js/dados/conteudos.js', 'js/dados/questoes.js',
 'js/dados/redacao.js', 'js/calculos.js'].forEach((arq) => {
  vm.runInContext(fs.readFileSync(path.join(raiz, arq), 'utf8'), contexto, { filename: arq });
});
const App = contexto.App;
const U = App.util;
let testes = 0;
function teste(nome, fn) { fn(); testes++; console.log('  ✓ ' + nome); }

console.log('Dados');
teste('16 questões por matéria, 160 no total', () => {
  App.dados.materias.forEach((m) => {
    const n = App.dados.questoes.filter((q) => q.materia === m.id).length;
    assert.strictEqual(n, 16, m.id + ' tem ' + n);
  });
  assert.strictEqual(App.dados.questoes.length, 160);
});
teste('toda questão tem 4 opções, gabarito válido e explicação', () => {
  App.dados.questoes.forEach((q) => {
    assert.strictEqual(q.opcoes.length, 4, q.id);
    assert.ok(Number.isInteger(q.correta) && q.correta >= 0 && q.correta < 4, q.id);
    assert.ok(q.explicacao.length > 10, q.id);
    assert.strictEqual(new Set(q.opcoes).size, 4, 'opções repetidas em ' + q.id);
  });
});
teste('IDs de questões são únicos', () => {
  const ids = App.dados.questoes.map((q) => q.id);
  assert.strictEqual(new Set(ids).size, ids.length);
});
teste('alternativas embaralhadas mantêm a resposta certa e espalham as letras', () => {
  const porLetra = [0, 0, 0, 0];
  App.dados.questoes.forEach((q) => {
    const e = App.calc.embaralharOpcoes(q);
    assert.strictEqual(e.opcoes[e.correta], q.opcoes[q.correta], q.id);
    assert.deepStrictEqual(e.opcoes.slice().sort(), q.opcoes.slice().sort(), q.id);
    porLetra[e.correta]++;
  });
  console.log('    letras certas após embaralhar (A/B/C/D):', porLetra.join(' / '));
  assert.ok(porLetra.every((n) => n > 15));
});
teste('assuntos: todas as matérias têm as 3 fases, IDs únicos', () => {
  const lista = App.dados.assuntosPadrao();
  App.dados.materias.forEach((m) => [1, 2, 3].forEach((f) =>
    assert.ok(lista.some((a) => a.materia === m.id && a.fase === f), m.id + ' fase ' + f)));
  assert.strictEqual(new Set(lista.map((a) => a.id)).size, lista.length);
  console.log('    total de assuntos:', lista.length);
});
teste('simulado sorteia das matérias de segunda a sexta', () => {
  const ms = App.dados.materiasDaSemana();
  // JSON porque arrays criados dentro do vm têm outro protótipo
  assert.strictEqual(JSON.stringify(ms.slice().sort()),
    JSON.stringify(['administracao', 'biologia', 'geografia', 'historia', 'informatica', 'logica', 'matematica', 'portugues']));
});

teste('conteúdos: ligados a assuntos que existem, com BNCC, blocos e fontes válidos', () => {
  const ids = new Set(App.dados.assuntosPadrao().map((a) => a.id));
  const tipos = new Set(['texto', 'titulo', 'lista', 'exemplo', 'atencao', 'tabela']);
  const chaves = Object.keys(App.dados.conteudos);
  assert.ok(chaves.length > 0);
  chaves.forEach((id) => {
    const c = App.dados.conteudos[id];
    assert.ok(ids.has(id), 'conteúdo sem assunto: ' + id);
    assert.ok(c.bncc.length > 0, id + ' sem BNCC');
    c.bncc.forEach((h) => assert.ok(/^EM13[A-Z]{3}\d{3}$/.test(h.codigo), id + ' código EM inválido: ' + h.codigo));
    (c.bnccBase || []).forEach((h) => assert.ok(/^EF\d{2}[A-Z]{2}\d{2}$/.test(h.codigo), id + ' código EF inválido: ' + h.codigo));
    c.blocos.forEach((b) => assert.ok(tipos.has(b.tipo), id + ' bloco desconhecido: ' + b.tipo));
    c.blocos.filter((b) => b.tipo === 'tabela').forEach((b) =>
      b.linhas.forEach((l) => assert.strictEqual(l.length, b.cabecalho.length, id + ' tabela com colunas erradas')));
    assert.ok(c.resumo.length >= 3, id + ' resumo curto');
    c.fontes.forEach((f) => assert.ok(f.url.startsWith('https://'), id + ' fonte sem https'));
  });
  console.log('    tópicos com conteúdo:', chaves.join(', '));
});

console.log('Regras');
const d = (s) => U.lerISO(s);
teste('sequência: domingo é neutro', () => {
  // seg 12/10/2026 a sáb 17/10 estudados, domingo 18 não, segunda 19 estudado
  const dias = {};
  ['2026-10-12', '2026-10-13', '2026-10-14', '2026-10-15', '2026-10-16', '2026-10-17', '2026-10-19']
    .forEach((x) => { dias[x] = true; });
  assert.strictEqual(App.calc.sequencia(dias, d('2026-10-19')), 7);
});
teste('sequência: hoje ainda não marcado não quebra', () => {
  const dias = { '2026-10-15': true, '2026-10-16': true };
  assert.strictEqual(App.calc.sequencia(dias, d('2026-10-17')), 2);
});
teste('sequência: dia útil sem estudo quebra', () => {
  const dias = { '2026-10-13': true, '2026-10-15': true, '2026-10-16': true };
  assert.strictEqual(App.calc.sequencia(dias, d('2026-10-16')), 2);
});
teste('domingo marcado não soma na sequência', () => {
  const dias = { '2026-10-17': true, '2026-10-18': true };
  assert.strictEqual(App.calc.sequencia(dias, d('2026-10-18')), 1);
});

function estadoTeste(inicio) {
  return { config: { inicio }, assuntos: App.dados.assuntosPadrao(), respostas: {}, questoesExtras: [] };
}
teste('fases de 2 meses a partir do início', () => {
  const e = estadoTeste('2026-01-10');
  assert.strictEqual(App.calc.faseAtual(e, d('2026-01-10')), 1);
  assert.strictEqual(App.calc.faseAtual(e, d('2026-03-09')), 1);
  assert.strictEqual(App.calc.faseAtual(e, d('2026-03-10')), 2);
  assert.strictEqual(App.calc.faseAtual(e, d('2026-07-10')), 4);
  assert.strictEqual(App.calc.faseAtual(e, d('2026-01-01')), 0);
  assert.strictEqual(App.calc.mesAtual(e, d('2026-02-09')), 1);
  assert.strictEqual(App.calc.mesAtual(e, d('2026-02-10')), 2);
});
teste('ritmo: sem estudar no fim da fase 1 = atrasado', () => {
  const e = estadoTeste('2026-01-10');
  const r = App.calc.ritmo(e, d('2026-03-09'));
  const daFase1 = e.assuntos.filter((a) => a.fase === 1).length;
  assert.strictEqual(r.esperado, daFase1);
  assert.strictEqual(r.status, 'atrasado');
});
teste('ritmo: fase 1 completa no fim dela = em dia', () => {
  const e = estadoTeste('2026-01-10');
  e.assuntos.forEach((a) => { if (a.fase === 1) a.estudado = true; });
  assert.strictEqual(App.calc.ritmo(e, d('2026-03-09')).status, 'em-dia');
});
teste('ritmo: fase 2 inteira já no início = adiantado', () => {
  const e = estadoTeste('2026-01-10');
  e.assuntos.forEach((a) => { if (a.fase <= 2) a.estudado = true; });
  assert.strictEqual(App.calc.ritmo(e, d('2026-03-10')).status, 'adiantado');
});

console.log('\n' + testes + ' testes passaram ✅');
