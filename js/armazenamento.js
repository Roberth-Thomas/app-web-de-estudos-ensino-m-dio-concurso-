/* =========================================================
   armazenamento.js — o "banco de dados" do app
   Todo o progresso fica num único objeto (o "estado"),
   salvo como JSON no localStorage do navegador.

   Formato do estado:
   {
     versao: 1,
     atualizadoEm: "2026-10-17T21:00:00.000Z" | null,  // null = nunca alterado
     config: { inicio: "AAAA-MM-DD" | null, tema: "auto" | "claro" | "escuro" },
     diasConcluidos: { "AAAA-MM-DD": true },
     assuntos: [{ id, materia, fase, titulo, estudado }],
     questoesExtras: [{ id, materia, pergunta, opcoes: [], correta, explicacao }],
     respostas: { idDaMateria: { acertos, total } },
     redacoes: [{ id, data, tema, texto, checklist: { idDoItem: true } }],
     respostasEstudo: { idDoAssunto: { idDaPergunta: "texto" } },
     revisoes: { idDoAssunto: { proxima: "AAAA-MM-DD", feitas: 0 } },
     checagens: { idDoAssunto: { indiceDoBloco: { acertos, erros, ultima: "certo" | "errado" } } },
     rascunho: { tema, texto, checklist }
   }
   ========================================================= */
App.store = (function () {
  const CHAVE = 'estudosapp:estado';
  const ouvintes = [];
  let estado = null;

  function estadoInicial() {
    return {
      versao: 1,
      atualizadoEm: null,
      config: { inicio: null, tema: 'auto' },
      diasConcluidos: {},
      assuntos: App.dados.assuntosPadrao(),
      questoesExtras: [],
      respostas: {},
      redacoes: [],
      respostasEstudo: {},
      revisoes: {},
      checagens: {},
      rascunho: { tema: '', texto: '', checklist: {} },
    };
  }

  /**
   * Garante que todos os campos existem. Útil quando o arquivo
   * importado é de uma versão antiga ou veio incompleto.
   */
  function normalizar(obj) {
    const base = estadoInicial();
    const e = Object.assign({}, base, obj);
    e.config = Object.assign({}, base.config, obj.config);
    e.rascunho = Object.assign({}, base.rascunho, obj.rascunho);
    if (!Array.isArray(e.assuntos)) e.assuntos = base.assuntos;
    if (!Array.isArray(e.questoesExtras)) e.questoesExtras = [];
    if (!Array.isArray(e.redacoes)) e.redacoes = [];
    if (typeof e.diasConcluidos !== 'object' || !e.diasConcluidos) e.diasConcluidos = {};
    if (typeof e.respostas !== 'object' || !e.respostas) e.respostas = {};
    if (typeof e.respostasEstudo !== 'object' || !e.respostasEstudo) e.respostasEstudo = {};
    if (typeof e.revisoes !== 'object' || !e.revisoes) e.revisoes = {};
    if (typeof e.checagens !== 'object' || !e.checagens) e.checagens = {};
    return e;
  }

  function carregar() {
    try {
      const bruto = localStorage.getItem(CHAVE);
      if (bruto) {
        estado = normalizar(JSON.parse(bruto));
        return;
      }
    } catch (erro) {
      console.warn('Não consegui ler o progresso salvo:', erro);
    }
    estado = estadoInicial();
  }

  function gravarLocal() {
    try {
      localStorage.setItem(CHAVE, JSON.stringify(estado));
    } catch (erro) {
      console.error('Falha ao salvar no localStorage:', erro);
      App.util.aviso('⚠️ Não consegui salvar neste navegador. Exporte seu progresso.');
    }
  }

  /** O estado atual. Altere os campos e depois chame salvar(). */
  function get() {
    if (!estado) carregar();
    return estado;
  }

  /** Salva uma alteração feita pelo usuário e avisa quem estiver ouvindo (ex.: a nuvem) */
  function salvar() {
    estado.atualizadoEm = new Date().toISOString();
    gravarLocal();
    ouvintes.forEach((fn) => fn(estado));
  }

  /** Troca o estado inteiro (vindo da nuvem). Não muda a data de atualização. */
  function substituir(novo) {
    estado = normalizar(novo);
    gravarLocal();
  }

  function aoSalvar(fn) { ouvintes.push(fn); }

  /** Baixa o progresso como arquivo .json */
  function exportar() {
    const json = JSON.stringify(estado, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'estudos-progresso-' + App.util.iso(new Date()) + '.json';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  /** Lê um arquivo .json escolhido pelo usuário e substitui o progresso */
  function importar(arquivo) {
    return arquivo.text().then((texto) => {
      const dados = JSON.parse(texto);
      if (!dados || typeof dados !== 'object' || !Array.isArray(dados.assuntos)) {
        throw new Error('Este arquivo não parece ser um progresso do app.');
      }
      estado = normalizar(dados);
      salvar(); // conta como alteração nova, então também vai para a nuvem
    });
  }

  function resetar() {
    estado = estadoInicial();
    salvar();
  }

  return { get, salvar, substituir, aoSalvar, exportar, importar, resetar };
})();
