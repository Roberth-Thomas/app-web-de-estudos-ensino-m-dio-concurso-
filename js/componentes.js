/* =========================================================
   componentes.js — peças de interface usadas em várias telas:
   - formatar(): marcação simples dos textos de estudo
   - tirinha(): desenha uma tirinha em quadros com balões
   - glossário: palavras que mostram a definição ao tocar
   ========================================================= */
App.comp = (function () {
  const U = App.util;

  /**
   * Escapa o texto e aplica a marcação:
   *   **negrito**   ~~forma errada~~   \n = quebra de linha
   *   [[termo]] ou [[texto que aparece|termo]] = palavra do glossário
   */
  function formatar(texto) {
    return U.esc(texto)
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/~~(.+?)~~/g, '<s class="errado" title="forma errada">$1</s>')
      .replace(/\[\[(.+?)\]\]/g, (_, dentro) => {
        const [mostrado, chave] = dentro.split('|');
        const termo = (chave || mostrado).toLowerCase();
        return App.dados.glossario[termo]
          ? `<button type="button" class="termo" data-termo="${termo}">${mostrado}</button>`
          : mostrado;
      })
      .replace(/\n/g, '<br>');
  }

  /**
   * Tirinha em quadrinhos, com personagens desenhados (js/desenhos.js).
   * { titulo, quadros: [{ cena, fundo, falas: [{ quem, texto, tipo, expressao }] }] }
   * - cena: texto da caixa amarela de narração (opcional)
   * - fundo: quarto | rua | ponto | loja | cozinha | parque (cenário do quadro)
   * - tipo: 'fala' (padrão), 'pensamento' (balão de nuvem) ou 'grito'
   * - expressao: neutro | feliz | bravo | surpreso | pensativo | grito
   * - texto vazio = o personagem aparece no quadro, mas não fala
   * - quem: 'placa' desenha uma placa com o texto escrito nela
   */
  function tirinha(t) {
    const P = App.dados.personagens;
    const quadros = t.quadros.map((q, i) => {
      const atores = (q.falas || []).map((f) => {
        const nome = (P[f.quem] || { nome: f.quem }).nome;
        if (f.quem === 'placa') {
          return `<div class="ator"><div class="placa"><div class="placa-tabua">${formatar(f.texto)}</div><div class="placa-poste"></div></div></div>`;
        }
        const tipo = f.tipo || 'fala';
        const expressao = f.expressao || (tipo === 'grito' ? 'grito' : tipo === 'pensamento' ? 'pensativo' : 'neutro');
        const balao = f.texto
          ? `<div class="balao ${U.esc(tipo)}"><span class="oculto-visual">${U.esc(nome)}${tipo === 'pensamento' ? ' pensa' : ' diz'}: </span>${formatar(f.texto)}</div>`
          : '';
        return `<div class="ator${balao ? ' falando' : ''}">${balao}${App.desenhos.personagem(f.quem, expressao) || ''}<span class="nome-ator">${U.esc(nome)}</span></div>`;
      }).join('');
      return `
        <div class="quadro fundo-${U.esc(q.fundo || 'neutro')}" aria-label="Quadro ${i + 1}">
          ${q.cena ? `<div class="recordatorio">${formatar(q.cena)}</div>` : ''}
          <div class="elenco">${atores}</div>
        </div>`;
    }).join('');
    return `
      <figure class="tirinha">
        <figcaption>${U.esc(t.titulo || 'Tirinha')}</figcaption>
        <div class="tirinha-quadros">${quadros}</div>
      </figure>`;
  }

  /**
   * Trata o toque numa palavra do glossário: mostra a definição logo abaixo.
   * Devolve true se o clique era num termo (a tela não precisa fazer mais nada).
   */
  function cliqueGlossario(ev) {
    const botao = ev.target.closest('.termo');
    if (!botao) return false;
    // A definição entra depois do bloco inteiro (numa tabela, depois da tabela, para não quebrá-la)
    const bloco = botao.closest('.estudo-tabela, .estudo-exemplo, .estudo-atencao, .fala, p, li, label') || botao.parentElement;
    const aberta = bloco.nextElementSibling;
    // Tocar de novo no mesmo termo fecha a definição
    if (aberta && aberta.classList.contains('definicao') && aberta.dataset.termo === botao.dataset.termo) {
      aberta.remove();
      return true;
    }
    if (aberta && aberta.classList.contains('definicao')) aberta.remove();
    const def = document.createElement('div');
    def.className = 'definicao';
    def.dataset.termo = botao.dataset.termo;
    def.setAttribute('role', 'note');
    def.innerHTML = `<strong>${U.esc(botao.dataset.termo)}:</strong> ${formatar(App.dados.glossario[botao.dataset.termo])}`;
    bloco.insertAdjacentElement('afterend', def);
    return true;
  }

  return { formatar, tirinha, cliqueGlossario };
})();
