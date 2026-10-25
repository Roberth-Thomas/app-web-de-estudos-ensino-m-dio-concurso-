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
   *   **negrito**   ~~forma errada~~   `código`   \n = quebra de linha
   *   [[termo]] ou [[texto que aparece|termo]] = palavra do glossário
   */
  function formatar(texto, materia) {
    return U.esc(texto)
      .replace(/`([^`\n]+)`/g, '<code>$1</code>')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/~~(.+?)~~/g, '<s class="errado" title="forma errada">$1</s>')
      .replace(/\[\[(.+?)\]\]/g, (_, dentro) => {
        const [mostrado, chave] = dentro.split('|');
        const termo = (chave || mostrado).toLowerCase();
        return definicao(termo, materia)
          ? `<button type="button" class="termo" data-termo="${termo}" data-materia="${U.esc(materia || '')}">${mostrado}</button>`
          : mostrado;
      })
      .replace(/\n/g, '<br>');
  }

  /** Definição de um termo: primeiro no glossário da matéria, depois em qualquer outro */
  function definicao(termo, materia) {
    const G = App.dados.glossarios;
    return (materia && G[materia] && G[materia][termo]) || App.dados.glossario[termo] || null;
  }

  /**
   * Marca sozinho os termos do glossário da matéria que aparecem num texto
   * (a primeira vez de cada um), transformando "Ditongos" em [[Ditongos|ditongo]].
   * Textos que já têm marcação manual ([[...]]) ficam como estão.
   */
  const NAO_MARCAR = ['base', 'fator', 'pa', 'pg']; // palavras comuns demais para marcar sozinhas
  function marcarTermos(texto, materia) {
    const G = App.dados.glossarios[materia];
    if (!texto || !G || texto.includes('[[')) return texto;
    const chaves = Object.keys(G).filter((k) => !NAO_MARCAR.includes(k)).sort((a, b) => b.length - a.length);
    let resultado = texto;
    chaves.forEach((chave) => {
      const nome = chave.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      // a palavra inteira (aceita plural com -s/-es), sem pegar pedaço de outra palavra
      const re = new RegExp(`(?<![\\p{L}\\d])(${nome}(?:es|s)?)(?![\\p{L}\\d])`, 'iu');
      // só procura nos trechos que ainda não foram marcados
      const partes = resultado.split(/(\[\[.+?\]\])/);
      for (let i = 0; i < partes.length; i += 2) {
        if (re.test(partes[i])) {
          partes[i] = partes[i].replace(re, `[[$1|${chave}]]`);
          break;
        }
      }
      resultado = partes.join('');
    });
    return resultado;
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
    def.innerHTML = `<strong>${U.esc(botao.dataset.termo)}:</strong> ${formatar(definicao(botao.dataset.termo, botao.dataset.materia))}`;
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
   * O "momento" do estudante no app, em poucas linhas, para a IA saber o que falta.
   * Vai só desempenho (acertos e tópicos), nunca nome, e-mail ou anotações.
   */
  function momentoNoApp(materiaId, assuntoId) {
    const estado = App.store.get();
    const D = App.dados;
    const linhas = [];
    const assunto = assuntoId && estado.assuntos.find((a) => a.id === assuntoId);
    const recentes = (estado.desempenhoAssunto || {})[assuntoId] || [];
    if (assunto) {
      const acertos = recentes.reduce((s, x) => s + x, 0);
      linhas.push(`- Tópico "${assunto.titulo}": ${assunto.estudado ? 'já marquei como estudado' : 'ainda não marquei como estudado'}; ` +
        (recentes.length ? `nos exercícios recentes dele acertei ${acertos} de ${recentes.length} (${Math.round(acertos / recentes.length * 100)}%).` : 'ainda não fiz exercícios dele.'));
    }
    const r = materiaId && (estado.respostas || {})[materiaId];
    if (r && r.total) linhas.push(`- Na matéria ${D.materia(materiaId).nome}: ${Math.round(r.acertos / r.total * 100)}% de acerto em ${r.total} ${r.total === 1 ? 'questão' : 'questões'}.`);
    // Tópicos em dificuldade: abaixo de 60% em pelo menos 3 respostas recentes
    const dificeis = Object.entries(estado.desempenhoAssunto || {})
      .filter(([, v]) => v.length >= 3 && App.calc.nivelDeAcerto(Math.round(v.reduce((s, x) => s + x, 0) / v.length * 100)) === 'dificuldade')
      .map(([id]) => estado.assuntos.find((a) => a.id === id)).filter(Boolean).slice(0, 5)
      .map((a) => `${a.titulo} (${D.materia(a.materia).nome})`);
    linhas.push(dificeis.length ? `- Tópicos em que estou com dificuldade: ${dificeis.join('; ')}.` : '- Ainda não há tópicos marcados como dificuldade.');
    const estudados = estado.assuntos.filter((a) => a.estudado).length;
    linhas.push(`- Progresso geral: ${estudados} de ${estado.assuntos.length} tópicos estudados.`);
    return linhas.join('\n');
  }

  /** Onde o estudante está no app, para a IA entender a situação da pergunta */
  const MODOS = {
    estudo: (d) => `Estou lendo a apostila do tópico "${d.topico}" (${d.materia}) e respondi uma pergunta "Para pensar" que fica no meio do texto. É uma pergunta de reflexão, para eu ligar o conteúdo à minha vida, e não uma questão de prova.`,
    prova: (d) => `Estou fazendo uma prova no app (${d.materia}) e esta é uma questão dissertativa. Quero saber se a minha resposta seria aceita numa prova de concurso.`,
    redacao: () => 'Estou na aba Redação, num treino livre: um texto curto (150 a 300 palavras), dissertativo-argumentativo, no modelo do ENEM.',
    plano: (d) => `Estou na ${d.etapa} do meu plano de redação "Do zero à boa redação" (12 semanas, para quem começa do zero em dissertação).` +
      (d.objetivo ? ` Objetivo desta semana: ${textoLimpo(d.objetivo)}` : ''),
  };

  /**
   * Monta o pedido para a IA: contexto completo + modo socrático primeiro, correção depois.
   * dados: { modo: 'estudo' | 'prova' | 'redacao' | 'plano', materia, materiaId, assuntoId, topico,
   *          etapa, objetivo, redacaoCompleta, pergunta, resposta, esperado: [pontos], contexto: [frases de apoio] }
   */
  function pedidoDeCorrecao(d) {
    const modo = MODOS[d.modo] ? d.modo : 'estudo';
    const ehRedacao = modo === 'redacao' || (modo === 'plano' && d.redacaoCompleta);
    const lista = (itens) => (itens || []).map((c) => '- ' + textoLimpo(c)).join('\n');
    const passos = ehRedacao
      ? ['3. O QUE FALTOU: avalie pelas 5 competências do ENEM, com nota de 0 a 200 em cada e a soma, e diga o que mais derrubou a nota.',
        '4. VERSÃO MELHORADA: reescreva o texto mantendo as minhas ideias e o meu jeito de escrever.',
        '5. PRÓXIMO PASSO: com base no meu momento no app, o que eu devo treinar agora, e por quê.']
      : ['3. O QUE FALTOU NO CONTEÚDO: compare com o que a resposta precisava ter; diga o que está certo, errado ou incompleto, e por quê.',
        '4. NOTA DE 0 A 10, com o critério em uma linha.',
        '5. VERSÃO MELHORADA da minha resposta, mantendo as minhas ideias e o meu jeito de escrever.',
        '6. PRÓXIMO PASSO NO APP: com base no meu momento, qual tópico revisar ou praticar agora, e por quê.'];
    return [
      'Você vai ser meu professor particular. Leia o contexto inteiro antes de responder.',
      '\n## QUEM SOU EU E QUE APP É ESTE',
      'Tenho 26 anos e estou revisando o ensino médio (seguindo a BNCC) e me preparando para concurso público. Também treino redação, que é meu ponto fraco.',
      'Estou usando um app de estudos que eu mesmo desenvolvi para me ajudar a evoluir: ele tem apostilas, exercícios, provas, plano de redação e caderno. Aprendo melhor no estilo Paulo Freire: partindo da minha realidade, sem pressa, como se fosse do zero.',
      '\n## ONDE ESTOU AGORA NO APP',
      MODOS[modo](d),
      '\n## ' + (ehRedacao ? 'TEMA / PROPOSTA' : 'A PERGUNTA'),
      textoLimpo(d.pergunta),
      d.esperado && d.esperado.length ? '\n## O QUE A RESPOSTA PRECISAVA TER (gabarito do app)\n' + lista(d.esperado) : '',
      d.contexto && d.contexto.length ? '\n## ' + (ehRedacao || modo === 'plano' ? 'CRITÉRIOS QUE ESTOU TREINANDO' : 'RESUMO DO QUE ESTUDEI NESSE TÓPICO') + '\n' + lista(d.contexto) : '',
      '\n## MEU MOMENTO NO APP (para você saber o que me falta)',
      momentoNoApp(d.materiaId, d.assuntoId),
      '\n## MINHA ' + (ehRedacao ? 'REDAÇÃO' : 'RESPOSTA'),
      '"""\n' + String(d.resposta || '').trim() + '\n"""',
      '\n## COMO QUERO QUE VOCÊ ME AJUDE (em duas etapas)',
      'Etapa 1, modo socrático (agora): NÃO me dê a correção nem a resposta certa ainda. Faça de 2 a 3 perguntas curtas que me levem a perceber sozinho o que está errado ou faltando, no conteúdo e na escrita. Depois, pare e espere eu responder.',
      'Etapa 2, correção completa (quando eu responder às perguntas ou escrever "pode corrigir"): entregue, nesta ordem:',
      '1. O QUE EU JÁ ACERTEI (curto e específico).',
      '2. ERROS DE ESCRITA: cada erro (ortografia, acentuação, pontuação, concordância, regência, crase) com o trecho original, a correção e a regra em uma frase. Se não houver, diga.',
      ...passos,
      '\nTom: direto e encorajador. Seja honesto sobre os erros, sem elogio vazio, mas mostre o que eu já faço bem. Use linguagem simples, em português do Brasil, e explique como se eu estivesse aprendendo do zero.',
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
        <button type="button" class="botao pequeno" ${atributos} data-ia="chatgpt">Abrir no ChatGPT</button>
        <button type="button" class="botao pequeno" ${atributos} data-ia="claude">Abrir no Claude</button>
        <button type="button" class="link-botao pequeno" ${atributos} data-ia="copiar">Copiar o pedido (outras IAs)</button>
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
      titulo = 'Abri o ChatGPT com o seu pedido: ele já envia sozinho.';
      passos = '<li>Veja a nova aba e leia a correção.</li>';
    } else if (abriuEm === 'Claude') {
      titulo = 'Abri o Claude com o seu pedido no campo de mensagem.';
      passos = '<li>Na nova aba, só aperte <strong>Enter</strong> para enviar (se pedir login, entre e o texto continua lá).</li>';
    } else {
      titulo = copiou ? 'Pedido copiado.' : 'Não consegui copiar sozinho. Copie o texto abaixo.';
      passos = `<li>Abra uma IA: <a href="https://gemini.google.com/app" target="_blank" rel="noopener">Gemini ↗</a>,
                  <a href="https://claude.ai/new" target="_blank" rel="noopener">Claude ↗</a> ou
                  <a href="https://chatgpt.com/" target="_blank" rel="noopener">ChatGPT ↗</a></li>
                <li>Cole no campo de mensagem (<strong>Ctrl + V</strong>, ou toque e segure → Colar) e envie.</li>`;
      if (IAS[ia]) titulo = 'O texto ficou grande demais para ir pelo link. ' + (copiou ? 'Copiei o pedido para você colar.' : 'Copie o texto abaixo.');
    }
    return `
      <div class="painel-correcao" role="status">
        <strong>${titulo}</strong>
        <ol>${passos}<li>Depois, se quiser, reescreva sua resposta aqui com as correções.</li></ol>
        ${copiou || abriuEm ? '' : `<textarea readonly rows="6">${U.esc(pedido)}</textarea>`}
        <p class="suave pequeno" style="margin:.4rem 0 0">${abriuEm ? 'O pedido também foi copiado, caso precise colar de novo.' : 'Seu texto só é enviado à IA quando você cola e envia lá.'}</p>
      </div>`;
  }

  /* ---------- Escuta: o celular lê o inglês em voz alta (síntese de voz do navegador) ---------- */
  function podeFalar() {
    return typeof window !== 'undefined' && 'speechSynthesis' in window && typeof SpeechSynthesisUtterance !== 'undefined';
  }
  /** Voz em inglês do aparelho (prefere a americana, depois a britânica) */
  function vozIngles() {
    const vozes = podeFalar() ? window.speechSynthesis.getVoices() : [];
    return vozes.find((v) => /^en[-_]US/i.test(v.lang)) || vozes.find((v) => /^en[-_]GB/i.test(v.lang))
      || vozes.find((v) => /^en/i.test(v.lang)) || null;
  }
  function falar(texto, lento) {
    if (!podeFalar()) { U.aviso('Este navegador não lê textos em voz alta.'); return false; }
    window.speechSynthesis.cancel();
    const fala = new SpeechSynthesisUtterance(texto);
    const voz = vozIngles();
    if (voz) fala.voice = voz;
    fala.lang = voz ? voz.lang : 'en-US';
    fala.rate = lento ? 0.7 : 0.95;
    window.speechSynthesis.speak(fala);
    return true;
  }
  function pararFala() { if (podeFalar()) window.speechSynthesis.cancel(); }

  /** Botões de ouvir. Os cliques são tratados num lugar só (abaixo), em qualquer tela. */
  function botoesEscuta(texto) {
    const t = U.esc(texto);
    return `
      <div class="linha botoes-escuta">
        <button type="button" class="botao pequeno primario" data-falar="${t}">Ouvir</button>
        <button type="button" class="botao pequeno" data-falar="${t}" data-lento>Mais devagar</button>
        <button type="button" class="botao pequeno" data-parar-fala>Parar</button>
      </div>`;
  }
  if (typeof document !== 'undefined') {
    document.addEventListener('click', (ev) => {
      const botao = ev.target.closest && ev.target.closest('[data-falar]');
      if (botao) falar(botao.dataset.falar, botao.hasAttribute('data-lento'));
      else if (ev.target.closest && ev.target.closest('[data-parar-fala]')) pararFala();
    });
    window.addEventListener('hashchange', pararFala); // trocou de tela: para de falar
    if (podeFalar()) window.speechSynthesis.getVoices(); // no Chrome, as vozes carregam na primeira chamada
  }

  return { formatar, definicao, marcarTermos, tirinha, cliqueGlossario, pedidoDeCorrecao, copiar, botoesCorrecao, enviarParaIA,
    podeFalar, falar, pararFala, botoesEscuta };
})();
