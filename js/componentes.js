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

  /* ---------- Pedir correção a uma IA ----------
     O app não tem servidor nem chave de IA. Então o botão monta um
     pedido de correção completo, copia para a área de transferência
     e oferece links para abrir o Claude ou o Gemini, onde você cola. */

  /** Tira a marcação dos textos do app (**, ~~, [[ ]]) para mandar texto limpo */
  function textoLimpo(texto) {
    return String(texto || '')
      .replace(/\[\[(.+?)\]\]/g, (_, d) => d.split('|')[0])
      .replace(/\*\*|~~/g, '');
  }

  /**
   * Monta o pedido para a IA.
   * dados: { tipo: 'resposta' | 'redacao', materia, topico, pergunta, resposta, contexto: [frases] }
   */
  function pedidoDeCorrecao(d) {
    const contexto = (d.contexto || []).map((c) => '- ' + textoLimpo(c)).join('\n');
    const sobre = d.tipo === 'redacao'
      ? `Escrevi uma redação curta (texto dissertativo-argumentativo) sobre o tema: "${textoLimpo(d.pergunta)}".`
      : `Estou estudando ${d.materia}, tópico "${d.topico}", e respondi esta pergunta: "${textoLimpo(d.pergunta)}".`;
    const materia = (d.materia || 'redação').toLowerCase();
    const professor = materia === 'português' || materia === 'redação'
      ? 'professor particular de português'
      : 'professor particular de português e de ' + materia;
    return [
      'Você é meu ' + professor + '. Sou adulto, estou revisando o ensino médio e me preparando para concurso público.',
      sobre,
      contexto ? '\nPontos principais do conteúdo que estudei:\n' + contexto : '',
      '\nMINHA ' + (d.tipo === 'redacao' ? 'REDAÇÃO' : 'RESPOSTA') + ':\n"""\n' + d.resposta.trim() + '\n"""',
      '\nPor favor, corrija em português do Brasil, com linguagem simples, nesta ordem:',
      '1. ERROS DE GRAMÁTICA E ESCRITA: liste cada erro (ortografia, acentuação, pontuação, concordância, regência, crase), mostrando o trecho original, a correção e a regra em uma frase. Se não houver, diga isso.',
      d.tipo === 'redacao'
        ? '2. ESTRUTURA E ARGUMENTAÇÃO: avalie introdução, desenvolvimento e conclusão, a clareza da tese e a força dos argumentos.'
        : '2. CONTEÚDO: minha resposta está correta em relação ao que a pergunta pede? O que está certo, o que está errado ou incompleto e por quê.',
      '3. COMO ESCREVER MELHOR: 2 ou 3 dicas práticas de escrita a partir do meu texto (clareza, vocabulário, organização das frases).',
      '4. VERSÃO MELHORADA: reescreva meu texto corrigido e mais claro, mantendo minhas ideias e meu jeito de escrever.',
      'Seja direto e honesto, sem elogios vazios. Explique como se eu estivesse aprendendo do zero.',
    ].filter(Boolean).join('\n');
  }

  /** Copia um texto. Devolve true/false (tenta o jeito moderno e, se falhar, o antigo). */
  async function copiar(texto) {
    try {
      await navigator.clipboard.writeText(texto);
      return true;
    } catch (e) {
      const area = document.createElement('textarea');
      area.value = texto;
      area.style.position = 'fixed'; area.style.opacity = '0';
      document.body.appendChild(area);
      area.select();
      let ok = false;
      try { ok = document.execCommand('copy'); } catch (e2) { ok = false; }
      area.remove();
      return ok;
    }
  }

  /**
   * IAs que aceitam receber o pedido pelo próprio link (?q=):
   * - ChatGPT: abre e ENVIA sozinho (funciona até sem login)
   * - Claude: abre com o pedido no campo de mensagem; você aperta Enter
   * O Gemini não aceita: para ele (e outras) o pedido é copiado para colar.
   */
  const IAS = {
    chatgpt: { nome: 'ChatGPT', link: (q) => 'https://chatgpt.com/?q=' + encodeURIComponent(q) },
    claude: { nome: 'Claude', link: (q) => 'https://claude.ai/new?q=' + encodeURIComponent(q) },
  };
  const LIMITE_LINK = 14000; // links muito longos podem ser recusados; acima disso, copiamos

  /** Botões de correção. "atributos" identifica de onde vem o texto (ex.: data-corrigir="p1") */
  function botoesCorrecao(atributos) {
    return `
      <div class="linha botoes-correcao">
        <button type="button" class="botao pequeno" ${atributos} data-ia="chatgpt">✨ Corrigir no ChatGPT</button>
        <button type="button" class="botao pequeno" ${atributos} data-ia="claude">✨ Corrigir no Claude</button>
        <button type="button" class="link-botao pequeno" ${atributos} data-ia="copiar">Copiar pedido (Gemini e outras)</button>
      </div>`;
  }

  /**
   * Abre a IA com o pedido já colado. Precisa ser chamada direto do clique
   * (antes de qualquer "await"), senão o navegador bloqueia a nova aba.
   * Também copia o pedido, como reserva. Devolve o HTML do painel de instruções.
   */
  async function enviarParaIA(ia, pedido) {
    const destino = IAS[ia];
    let abriu = false;
    if (destino) {
      const link = destino.link(pedido);
      if (link.length <= LIMITE_LINK) {
        const aba = window.open(link, '_blank');
        if (aba) { aba.opener = null; abriu = true; } // a nova aba não consegue mexer no app
      }
    }
    const copiou = await copiar(pedido);
    return painelCorrecao(destino && abriu ? destino.nome : null, ia, copiou, pedido);
  }

  /** Painel com o que aconteceu e os próximos passos */
  function painelCorrecao(abriuEm, ia, copiou, pedido) {
    let titulo, passos;
    if (abriuEm === 'ChatGPT') {
      titulo = '✅ Abri o ChatGPT com o seu pedido: ele já envia sozinho.';
      passos = '<li>Veja a nova aba e leia a correção.</li>';
    } else if (abriuEm === 'Claude') {
      titulo = '✅ Abri o Claude com o seu pedido no campo de mensagem.';
      passos = '<li>Na nova aba, só aperte <strong>Enter</strong> para enviar (se pedir login, entre e o texto continua lá).</li>';
    } else {
      titulo = copiou ? '✅ Pedido copiado.' : '⚠️ Não consegui copiar sozinho. Copie o texto abaixo.';
      passos = `<li>Abra uma IA: <a href="https://gemini.google.com/app" target="_blank" rel="noopener">Gemini ↗</a>,
                  <a href="https://claude.ai/new" target="_blank" rel="noopener">Claude ↗</a> ou
                  <a href="https://chatgpt.com/" target="_blank" rel="noopener">ChatGPT ↗</a></li>
                <li>Cole no campo de mensagem (<strong>Ctrl + V</strong>, ou toque e segure → Colar) e envie.</li>`;
      if (IAS[ia]) titulo = '⚠️ O texto ficou grande demais para ir pelo link. ' + (copiou ? 'Copiei o pedido para você colar.' : 'Copie o texto abaixo.');
    }
    return `
      <div class="painel-correcao" role="status">
        <strong>${titulo}</strong>
        <ol>${passos}<li>Depois, se quiser, reescreva sua resposta aqui com as correções.</li></ol>
        ${copiou || abriuEm ? '' : `<textarea readonly rows="6">${U.esc(pedido)}</textarea>`}
        <p class="suave pequeno" style="margin:.4rem 0 0">${abriuEm ? 'O pedido também foi copiado, caso precise colar de novo.' : 'Seu texto só é enviado à IA quando você cola e envia lá.'}</p>
      </div>`;
  }

  return { formatar, tirinha, cliqueGlossario, pedidoDeCorrecao, copiar, botoesCorrecao, enviarParaIA };
})();
