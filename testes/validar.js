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
const contexto = { window: {}, console, TextEncoder }; // TextEncoder: o .zip do caderno
contexto.App = contexto.window.App = {};
vm.createContext(contexto);
['js/util.js', 'js/dados/materias.js', 'js/dados/assuntos.js', 'js/dados/conteudos.js', 'js/dados/apoio.js', 'js/dados/checagens.js', 
 'js/dados/topicos/biologia.js', 'js/dados/topicos/historia.js', 'js/dados/topicos/geografia.js', 'js/dados/topicos/filosofia.js', 'js/dados/topicos/sociologia.js', 'js/dados/topicos/logica.js', 'js/dados/topicos/informatica.js', 'js/dados/topicos/administracao.js',
 'js/dados/questoes.js', 'js/dados/dissertativas.js',
 'js/dados/redacao.js', 'js/dados/plano-redacao.js', 'js/calculos.js', 'js/desenhos.js', 'js/componentes.js', 'js/caderno.js'].forEach((arq) => {
  vm.runInContext(fs.readFileSync(path.join(raiz, arq), 'utf8'), contexto, { filename: arq });
});
const App = contexto.App;
const U = App.util;
let testes = 0;
function teste(nome, fn) { fn(); testes++; console.log('  ✓ ' + nome); }

console.log('Dados');
teste('pelo menos 16 questões por matéria', () => {
  App.dados.materias.forEach((m) => {
    const n = App.dados.questoes.filter((q) => q.materia === m.id).length;
    assert.ok(n >= 16, m.id + ' tem ' + n);
  });
  console.log('    total de questões:', App.dados.questoes.length,
    '· com tirinha:', App.dados.questoes.filter((q) => q.tirinha).length);
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
  const tipos = new Set(['texto', 'titulo', 'lista', 'exemplo', 'atencao', 'tabela', 'etapa', 'pergunta',
    'checagem', 'tirinha', 'indicacao', 'revelar']);
  const etapas = new Set(['leitura', 'problematizacao', 'sistematizacao', 'acao', 'reflexao']);
  const chaves = Object.keys(App.dados.conteudos);
  assert.ok(chaves.length > 0);
  chaves.forEach((id) => {
    const c = App.dados.conteudos[id];
    assert.ok(ids.has(id), 'conteúdo sem assunto: ' + id);
    // Matérias de concurso (ex.: Raciocínio lógico) podem não ter habilidade na BNCC: bncc: []
    const deConcurso = App.dados.materia(id.split('-')[0]).tipo === 'concurso';
    assert.ok(Array.isArray(c.bncc) && (c.bncc.length > 0 || deConcurso), id + ' sem BNCC');
    c.bncc.forEach((h) => assert.ok(/^EM13(?:[A-Z]{3}\d{3}|LP\d{2})$/.test(h.codigo), id + ' código EM inválido: ' + h.codigo));
    (c.bnccBase || []).forEach((h) => assert.ok(/^EF\d{2}[A-Z]{2}\d{2}$/.test(h.codigo), id + ' código EF inválido: ' + h.codigo));
    c.blocos.forEach((b) => assert.ok(tipos.has(b.tipo), id + ' bloco desconhecido: ' + b.tipo));
    // Perguntas: id único no tópico (é a chave da resposta salva)
    const perguntas = c.blocos.filter((b) => b.tipo === 'pergunta').map((b) => b.id);
    assert.ok(perguntas.every(Boolean) && new Set(perguntas).size === perguntas.length, id + ' perguntas sem id ou com id repetido');
    if (c.metodo === 'freire') {
      const vistas = c.blocos.filter((b) => b.tipo === 'etapa').map((b) => b.etapa);
      assert.deepStrictEqual(JSON.stringify(vistas), JSON.stringify([...etapas]), id + ' deve ter as 5 etapas de Freire, em ordem');
      assert.ok(perguntas.length >= 2, id + ' formato Freire precisa de perguntas');
    }
    c.blocos.filter((b) => b.tipo === 'tabela').forEach((b) =>
      b.linhas.forEach((l) => assert.strictEqual(l.length, b.cabecalho.length, id + ' tabela com colunas erradas')));
    c.blocos.filter((b) => b.tipo === 'checagem').forEach((b) => {
      assert.ok(b.opcoes.length >= 2 && b.correta >= 0 && b.correta < b.opcoes.length, id + ' checagem com gabarito inválido');
      assert.ok(b.explicacao && b.outraExplicacao, id + ' checagem sem as duas explicações');
    });
    c.blocos.filter((b) => b.tipo === 'tirinha').forEach((t) => validarTirinha(t, id));
    (c.prerequisitos || []).forEach((p) => assert.ok(p.texto, id + ' pré-requisito vazio'));
    assert.ok(c.resumo.length >= 3, id + ' resumo curto');
    c.fontes.forEach((f) => assert.ok(f.url.startsWith('https://'), id + ' fonte sem https'));
  });
  console.log('    tópicos com conteúdo:', chaves.join(', '));
});

function validarTirinha(t, onde) {
  const FUNDOS = ['neutro', 'quarto', 'rua', 'ponto', 'loja', 'cozinha', 'parque'];
  assert.ok(t.quadros.length >= 2, onde + ' tirinha com menos de 2 quadros');
  t.quadros.forEach((q) => {
    assert.ok(!q.fundo || FUNDOS.includes(q.fundo), onde + ' cenário desconhecido: ' + q.fundo);
    (q.falas || []).forEach((f) => {
      assert.ok(App.dados.personagens[f.quem], onde + ' personagem desconhecido: ' + f.quem);
      assert.ok(f.quem === 'placa' || App.desenhos.desenhados.includes(f.quem), onde + ' personagem sem desenho: ' + f.quem);
      assert.ok(!f.expressao || App.desenhos.EXPRESSOES.includes(f.expressao), onde + ' expressão desconhecida: ' + f.expressao);
    });
  });
}
teste('"Entendeu?": extras na mesma quantidade e variações válidas', () => {
  let total = 0;
  Object.entries(App.dados.checagensExtras).forEach(([id, extras]) => {
    const c = App.dados.conteudos[id];
    assert.ok(c, 'extras para tópico sem conteúdo: ' + id);
    const n = c.blocos.filter((b) => b.tipo === 'checagem').length;
    assert.strictEqual(extras.length, n, id + ': ' + extras.length + ' extras para ' + n + ' "Entendeu?"');
    extras.forEach((x, i) => {
      assert.ok(x.conceito, id + ' #' + (i + 1) + ' sem conceito');
      (x.variacoes || []).forEach((v) => {
        assert.strictEqual(v.opcoes.length, 4, id + ' variação sem 4 opções');
        assert.strictEqual(new Set(v.opcoes).size, 4, id + ' variação com opções repetidas');
        assert.ok(v.correta >= 0 && v.correta < 4 && v.explicacao && v.outraExplicacao, id + ' variação incompleta: ' + v.pergunta);
        total++;
      });
    });
  });
  console.log('    variações de perguntas:', total);
});
teste('glossário: termos marcados sozinhos, com plural e sentido por matéria', () => {
  const C = App.comp;
  const t = C.marcarTermos('Ditongos abertos "éi" e "ói" perderam o acento nas paroxítonas.', 'portugues');
  assert.ok(t.includes('[[Ditongos|ditongo]]'), t);
  assert.ok(t.includes('[[paroxítonas|paroxítona]]'), t);
  assert.strictEqual(C.marcarTermos('Texto já [[marcado]].', 'portugues'), 'Texto já [[marcado]].');
  assert.ok(C.definicao('conjunção', 'logica').includes('"e"'), 'conjunção em lógica é o conectivo e');
  assert.ok(C.definicao('conjunção', 'portugues').includes('liga orações'), 'conjunção em português liga orações');
  // todas as explicações de exercícios continuam válidas depois da marcação
  App.dados.questoes.forEach((q) => {
    const m = C.marcarTermos(q.explicacao, q.materia);
    (m.match(/\[\[(.+?)\]\]/g) || []).forEach((x) => {
      const chave = x.slice(2, -2).split('|')[1];
      assert.ok(C.definicao(chave, q.materia), q.id + ' marcou termo sem definição: ' + x);
    });
  });
});
teste('plano de redação: 12 semanas completas, em ordem', () => {
  const P = App.dados.planoRedacao;
  assert.strictEqual(P.competencias.length, 5);
  assert.strictEqual(JSON.stringify(P.semanas.map((s) => s.numero)), JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));
  const tipos = ['texto', 'titulo', 'lista', 'exemplo', 'atencao', 'tabela', 'revelar'];
  P.semanas.forEach((s) => {
    assert.ok(s.titulo && s.objetivo && s.tarefa.texto && s.checklist.length >= 3, 'semana ' + s.numero + ' incompleta');
    s.blocos.forEach((b) => assert.ok(tipos.includes(b.tipo), 'semana ' + s.numero + ' bloco desconhecido: ' + b.tipo));
    s.blocos.filter((b) => b.tipo === 'tabela').forEach((b) =>
      b.linhas.forEach((l) => assert.strictEqual(l.length, b.cabecalho.length, 'semana ' + s.numero + ' tabela com colunas erradas')));
  });
});
teste('questões com tirinha usam personagens que existem', () => {
  App.dados.questoes.filter((q) => q.tirinha).forEach((q) => validarTirinha(q.tirinha, q.id));
});
teste('glossário: todo [[termo]] usado nos textos existe', () => {
  // Percorre só os textos (no JSON, tabelas também começam com "[[")
  const textos = [];
  (function coletar(v) {
    if (typeof v === 'string') textos.push(v);
    else if (v && typeof v === 'object') Object.values(v).forEach(coletar);
  })(App.dados.conteudos);
  const usados = textos.flatMap((t) => t.match(/\[\[(.+?)\]\]/g) || []);
  usados.forEach((m) => {
    const [mostrado, chave] = m.slice(2, -2).split('|');
    assert.ok(App.dados.glossario[(chave || mostrado).toLowerCase()], 'termo sem definição: ' + m);
  });
  console.log('    termos marcados nos textos:', usados.length);
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

teste('revisão espaçada: 1, 3, 7 e 15 dias depois de estudar', () => {
  const e = estadoTeste('2026-10-01');
  e.revisoes = {};
  const a = e.assuntos[0];
  App.calc.marcarEstudado(e, a, true, d('2026-10-10'));
  assert.strictEqual(App.calc.revisoesPendentes(e, d('2026-10-10')).length, 0, 'nada no mesmo dia');
  const dias = [];
  let dia = d('2026-10-10');
  for (let i = 0; i < 30 && dias.length < 4; i++) {
    dia = U.somarDias(dia, 1);
    if (App.calc.revisoesPendentes(e, dia).length) { dias.push(U.diasEntre(d('2026-10-10'), dia)); App.calc.registrarRevisao(e, a.id, dia); }
  }
  assert.strictEqual(JSON.stringify(dias), JSON.stringify([1, 3, 7, 15]));
  assert.strictEqual(App.calc.revisoesPendentes(e, d('2026-12-31')).length, 0, 'acabou depois da 4ª');
});
teste('revisão atrasada aparece com o atraso; desmarcar cancela', () => {
  const e = estadoTeste('2026-10-01');
  e.revisoes = {};
  const a = e.assuntos[0];
  App.calc.marcarEstudado(e, a, true, d('2026-10-10'));
  const p = App.calc.revisoesPendentes(e, d('2026-10-14'));
  assert.strictEqual(p.length, 1);
  assert.strictEqual(p[0].atraso, 3);
  App.calc.marcarEstudado(e, a, false);
  assert.strictEqual(App.calc.revisoesPendentes(e, d('2026-10-14')).length, 0);
});

teste('toda questão do banco aponta para um tópico existente da mesma matéria', () => {
  const ids = new Set(App.dados.assuntosPadrao().map((a) => a.id));
  App.dados.questoes.forEach((q) => {
    assert.ok(ids.has(q.assunto), q.id + ' → ' + q.assunto);
    assert.ok(q.assunto.startsWith(q.materia + '-'), q.id + ' de outra matéria');
  });
});
teste('plano de ação: metas 80/60, dificuldade primeiro, histórico recente', () => {
  const e = estadoTeste('2026-10-01');
  assert.strictEqual(App.calc.nivelDeAcerto(80), 'dominado');
  assert.strictEqual(App.calc.nivelDeAcerto(79), 'atencao');
  assert.strictEqual(App.calc.nivelDeAcerto(60), 'atencao');
  assert.strictEqual(App.calc.nivelDeAcerto(59), 'dificuldade');
  const qa = { materia: 'portugues', assunto: 'portugues-1-1' };
  const qb = { materia: 'portugues', assunto: 'portugues-1-0' };
  const respondidas = [[qa, true], [qa, true], [qa, true], [qb, false], [qb, true], [qb, false]]
    .map(([questao, acertou]) => { App.calc.registrarResposta(e, questao.materia, acertou, questao.assunto); return { questao, acertou }; });
  const plano = App.calc.planoDeAcao(e, respondidas);
  assert.strictEqual(plano[0].assunto.id, 'portugues-1-0');
  assert.strictEqual(plano[0].nivel, 'dificuldade');
  assert.strictEqual(plano[1].nivel, 'dominado');
  // só as últimas 10 respostas contam
  for (let i = 0; i < 12; i++) App.calc.registrarResposta(e, 'portugues', true, 'portugues-1-0');
  assert.strictEqual(e.desempenhoAssunto['portugues-1-0'].length, 10);
  assert.strictEqual(App.calc.planoDeAcao(e, [{ questao: qb, acertou: true }])[0].nivel, 'dominado');
});
teste('dissertativas: tópico válido, pontos esperados e quantidade para as provas', () => {
  const ids = new Set(App.dados.assuntosPadrao().map((a) => a.id));
  App.dados.dissertativas.forEach((q) => {
    assert.ok(ids.has(q.assunto) && q.assunto.startsWith(q.materia + '-'), q.id + ' → ' + q.assunto);
    assert.ok(q.esperado.length >= 2, q.id + ' com poucos pontos');
  });
  App.dados.materias.forEach((m) => {
    const n = App.dados.dissertativas.filter((q) => q.materia === m.id).length;
    assert.ok(n >= App.calc.PROVA.materia.dissertativas, m.id + ' tem só ' + n + ' dissertativas');
  });
});
teste('provas: tamanho e formato certos, geral mistura as matérias', () => {
  const e = estadoTeste('2026-10-01');
  e.questoesExtras = [];
  const P = App.calc.PROVA;
  const porMateria = App.calc.montarProva(e, 'historia', 'ambas');
  assert.strictEqual(porMateria.objetivas.length, P.materia.objetivas);
  assert.strictEqual(porMateria.dissertativas.length, P.materia.dissertativas);
  assert.ok(porMateria.objetivas.every((o) => o.questao.materia === 'historia'));
  assert.strictEqual(App.calc.montarProva(e, 'historia', 'objetiva').dissertativas.length, 0);
  assert.strictEqual(App.calc.montarProva(e, 'historia', 'dissertativa').objetivas.length, 0);
  const geral = App.calc.montarProva(e, 'geral', 'ambas');
  assert.strictEqual(geral.objetivas.length, P.geral.objetivas);
  assert.strictEqual(geral.dissertativas.length, P.geral.dissertativas);
  assert.ok(new Set(geral.objetivas.map((o) => o.questao.materia)).size >= 8, 'geral concentrada em poucas matérias');
});
teste('provas: aviso a cada 14 dias e avaliação do tempo', () => {
  const e = estadoTeste('2026-10-01');
  e.provas = [];
  assert.strictEqual(App.calc.provaPendente(e, d('2026-10-14')), null);
  assert.strictEqual(App.calc.provaPendente(e, d('2026-10-15')).numero, 1);
  e.provas.push({ escopo: 'geral', data: '2026-10-16' });
  assert.strictEqual(App.calc.provaPendente(e, d('2026-10-20')), null);
  assert.strictEqual(App.calc.provaPendente(e, d('2026-10-29')).numero, 2);
  // 10 objetivas + 2 dissertativas = referência de 30 + 16 = 46 min
  assert.strictEqual(App.calc.avaliarTempo(40 * 60, 10, 2, 80).status, 'bom');
  assert.strictEqual(App.calc.avaliarTempo(55 * 60, 10, 2, 80).status, 'acima');
  assert.strictEqual(App.calc.avaliarTempo(90 * 60, 10, 2, 80).status, 'lento');
  assert.strictEqual(App.calc.avaliarTempo(5 * 60, 10, 2, 30).status, 'rapido');
});
teste('caderno: links, tags, tópicos e notas que citam', () => {
  const C = App.caderno;
  const e = estadoTeste('2026-10-01');
  e.notas = [];
  const a = C.nova(e, { titulo: 'Vírgula', texto: 'Liga com [[Pontuação]] e [[Sujeito e verbo|sujeito]]. #portugues #regra-de-ouro\n# Título não é tag' });
  const b = C.nova(e, { titulo: 'Sujeito e verbo', texto: 'Volta para [[vírgula]].' });
  assert.strictEqual(JSON.stringify(C.links(a.texto)), JSON.stringify(['Pontuação', 'Sujeito e verbo']));
  assert.strictEqual(JSON.stringify(C.tags(a.texto)), JSON.stringify(['portugues', 'regra-de-ouro']));
  assert.strictEqual(C.resolver(e, 'pontuação').tipo, 'topico');
  assert.strictEqual(C.resolver(e, 'Sujeito e verbo').nota.id, b.id);
  assert.strictEqual(C.resolver(e, 'Não existe'), null);
  assert.strictEqual(C.citadaPor(e, a)[0].id, b.id, 'busca sem diferenciar maiúsculas');
  assert.strictEqual(C.tituloLivre(e, 'vírgula'), 'vírgula 2');
});
teste('caderno: Markdown seguro e exportação para o Obsidian', () => {
  const C = App.caderno;
  const html = C.paraHtml('# Oi\n- **forte** [[Nota]]\n<script>x</script>');
  assert.ok(html.includes('<h2>Oi</h2>') && html.includes('<strong>forte</strong>') && html.includes('data-link="Nota"'));
  assert.ok(!html.includes('<script>'), 'HTML digitado não pode virar código');
  const e = estadoTeste('2026-10-01');
  e.notas = [];
  C.nova(e, { titulo: 'Pontuação', assunto: 'portugues-1-3', texto: 'Ver [[Classes de palavras]] #virgula' });
  const arquivos = C.arquivosObsidian(e, 'https://exemplo/');
  const caminhos = arquivos.map((f) => f.caminho);
  assert.ok(caminhos.includes('Caderno/Português/Pontuação (nota).md'), 'nota com nome de tópico ganha " (nota)": ' + caminhos);
  assert.ok(caminhos.includes('Tópicos/Português/Pontuação.md') && caminhos.includes('Tópicos/Português/Classes de palavras.md'));
  assert.ok(caminhos.includes('Caderno/Início.md'));
  const nota = arquivos.find((f) => f.caminho.startsWith('Caderno/Português/')).conteudo;
  assert.ok(nota.startsWith('---\ntitulo: "Pontuação"') && nota.includes('tags: ["estudos", "virgula"]') && nota.includes('topico: "[[Pontuação]]"'));
  const bytes = C.zip(arquivos);
  assert.strictEqual(bytes[0], 0x50); assert.strictEqual(bytes[1], 0x4b); // "PK"
  assert.strictEqual(C.crc32(new TextEncoder().encode('123456789')), 0xCBF43926); // valor de referência do CRC-32
  if (process.env.ZIP_SAIDA) fs.writeFileSync(process.env.ZIP_SAIDA, bytes);
});

console.log('\n' + testes + ' testes passaram ✅');
