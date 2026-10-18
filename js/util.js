/* =========================================================
   util.js — funções pequenas usadas no app inteiro
   Tudo fica dentro de window.App para não poluir o escopo
   global (já que não usamos módulos ES, ver index.html).
   ========================================================= */
window.App = window.App || {};

App.util = (function () {
  const MS_DIA = 24 * 60 * 60 * 1000;

  /** Completa com zero à esquerda: 7 → "07" */
  function dois(n) { return String(n).padStart(2, '0'); }

  /** Data → "AAAA-MM-DD" no fuso local (toISOString usaria UTC e erraria o dia à noite) */
  function iso(data) {
    return data.getFullYear() + '-' + dois(data.getMonth() + 1) + '-' + dois(data.getDate());
  }

  /** "AAAA-MM-DD" → Date à meia-noite local */
  function lerISO(texto) {
    const [a, m, d] = texto.split('-').map(Number);
    return new Date(a, m - 1, d);
  }

  /** Hoje à meia-noite (sem horas, para comparar só datas) */
  function hoje() {
    const d = new Date();
    return new Date(d.getFullYear(), d.getMonth(), d.getDate());
  }

  function somarDias(data, n) {
    return new Date(data.getFullYear(), data.getMonth(), data.getDate() + n);
  }

  function somarMeses(data, n) {
    return new Date(data.getFullYear(), data.getMonth() + n, data.getDate());
  }

  /** Quantos dias de a até b (positivo se b é depois) */
  function diasEntre(a, b) {
    return Math.round((b - a) / MS_DIA);
  }

  /** "Sexta-feira, 17 de outubro" (só a primeira letra maiúscula) */
  function dataLonga(data) {
    const texto = data.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' });
    return texto.charAt(0).toUpperCase() + texto.slice(1);
  }

  /** "17/10/2026" */
  function dataCurta(data) {
    return data.toLocaleDateString('pt-BR');
  }

  /**
   * Escapa texto antes de colocar em HTML.
   * Sem isso, um assunto chamado "<b>" viraria HTML de verdade
   * (e um texto malicioso importado poderia rodar script).
   */
  function esc(texto) {
    return String(texto ?? '')
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  /** ID curto e único o bastante para uso local */
  function novoId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  }

  function contarPalavras(texto) {
    return (texto.trim().match(/\S+/g) || []).length;
  }

  /** Embaralha uma cópia do array (algoritmo de Fisher–Yates) */
  function embaralhar(lista) {
    const copia = lista.slice();
    for (let i = copia.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
  }

  function porcentagem(parte, total) {
    return total ? Math.round((parte / total) * 100) : 0;
  }

  /** Mostra um aviso curto no rodapé que some sozinho */
  let timerAviso;
  function aviso(mensagem) {
    let el = document.querySelector('.aviso');
    if (!el) {
      el = document.createElement('div');
      el.className = 'aviso';
      el.setAttribute('role', 'status');
      document.body.appendChild(el);
    }
    el.textContent = mensagem;
    el.hidden = false;
    clearTimeout(timerAviso);
    timerAviso = setTimeout(() => { el.hidden = true; }, 2600);
  }

  return {
    iso, lerISO, hoje, somarDias, somarMeses, diasEntre, dataLonga, dataCurta,
    esc, novoId, contarPalavras, embaralhar, porcentagem, aviso,
  };
})();
