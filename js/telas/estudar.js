/* =========================================================
   telas/estudar.js — página de estudo de um tópico (modo de leitura)
   Rota: #estudar/<id do assunto>  (ex.: #estudar/matematica-1-0)
   O texto vem de js/dados/conteudos.js. As peças visuais
   (formatação, glossário, escuta) estão em js/componentes.js.
   A página é pensada como a de um livro: texto corrido, poucos enfeites,
   e as ferramentas (correção por IA, notas) só aparecem quando você pede.
   ========================================================= */
App.telas = App.telas || {};

App.telas.estudar = (function () {
  const U = App.util;
  const D = App.dados;
  // A matéria do tópico aberto decide o sentido das palavras do glossário
  const formatar = (t) => App.comp.formatar(t, atual.materia);
  /** Formata marcando sozinho os termos do glossário (usado nas explicações dos testes) */
  const formatarComTermos = (t) => formatar(App.comp.marcarTermos(t, atual.materia));
  const LETRAS = ['A', 'B', 'C', 'D'];

  /** Nome de cada parte do texto (as cinco etapas do método de Paulo Freire, em palavras simples) */
  const ETAPAS = {
    leitura: 'Ponto de partida',
    problematizacao: 'A questão',
    sistematizacao: 'Entendendo',
    acao: 'Na prática',
    reflexao: 'Fechando',
  };
  const ORDEM_ETAPAS = Object.keys(ETAPAS);

  /* ---------- Tamanho do texto (só neste aparelho) ---------- */
  const CHAVE_TAMANHO = 'estudosapp:tamanho-leitura';
  const TAMANHOS = ['normal', 'grande', 'maior'];
  function tamanhoSalvo() {
    try { const t = localStorage.getItem(CHAVE_TAMANHO); return TAMANHOS.includes(t) ? t : 'normal'; } catch (e) { return 'normal'; }
  }
  function salvarTamanho(t) {
    try { localStorage.setItem(CHAVE_TAMANHO, t); } catch (e) { /* sem armazenamento: vale só agora */ }
  }

  /** Minutos de leitura (cerca de 200 palavras por minuto) */
  function minutosDeLeitura(c) {
    const textos = [];
    c.blocos.forEach((b) => {
      if (b.texto) textos.push(b.texto);
      if (b.itens) textos.push(...b.itens);
      if (b.linhas) b.linhas.forEach((l) => textos.push(...l));
      if (b.pergunta) textos.push(b.pergunta);
    });
    const palavras = textos.join(' ').split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(palavras / 200));
  }

  /**
   * Dados do tópico aberto, usados pelos testes rápidos:
   * - versoes[i]: a pergunta original do bloco i + as variações (js/dados/checagens.js)
   * - secao[i]: o título da parte do texto que explica aquela pergunta
   * - variante[i]: qual versão está aparecendo agora
   */
  let atual = { versoes: {}, secao: {}, variante: {}, abertas: {} };

  function prepararChecagens(id, blocos, materia) {
    const extras = (D.checagensExtras && D.checagensExtras[id]) || [];
    const versoes = {}, secao = {};
    let ultimaSecao = null, ordem = 0;
    blocos.forEach((b, i) => {
      if (b.tipo === 'titulo' || b.tipo === 'etapa') ultimaSecao = { alvo: 'sec-' + i, texto: b.texto || ETAPAS[b.etapa] };
      if (b.tipo !== 'checagem') return;
      const extra = extras[ordem++] || {};
      versoes[i] = { conceito: b.conceito || extra.conceito, lista: [b].concat(extra.variacoes || []) };
      secao[i] = ultimaSecao;
    });
    // "abertas": quais testes você já abriu nesta visita (começam recolhidos)
    const abertas = atual.id === id ? atual.abertas : {};
    atual = { id, materia, versoes, secao, variante: {}, abertas };
  }

  /** Histórico salvo de um teste: { acertos, erros, ultima: 'certo' | 'errado' } */
  function historico(indice) {
    const estado = App.store.get();
    if (!estado.checagens[atual.id]) estado.checagens[atual.id] = {};
    return estado.checagens[atual.id][indice] || null;
  }

  /** Desenha um teste rápido na versão que estiver ativa */
  function checagem(indice) {
    const v = atual.versoes[indice];
    const n = atual.variante[indice] || 0;
    const q = v.lista[n];
    const h = historico(indice);
    const ultima = !h ? '' : h.ultima === 'certo'
      ? '<span class="teste-ultima certo">acertou da última vez</span>'
      : '<span class="teste-ultima errado">errou da última vez</span>';
    // Recolhido: uma linha discreta. Você abre o teste quando quiser.
    if (!atual.abertas[indice]) {
      return `
        <div class="teste fechado" data-checagem="${indice}">
          <span class="teste-rotulo">Teste rápido</span>${ultima}
          <button type="button" class="botao pequeno" data-abrir>Responder</button>
        </div>`;
    }
    return `
      <div class="teste" data-checagem="${indice}">
        <div class="teste-topo"><span class="teste-rotulo">Teste rápido${v.lista.length > 1 ? ` · ${n + 1} de ${v.lista.length}` : ''}</span>${ultima}</div>
        <p class="teste-pergunta">${formatar(q.pergunta)}</p>
        <div class="alternativas">${q.opcoes.map((o, i) => `
          <button type="button" class="alternativa" data-opcao="${i}">
            <span class="letra">${LETRAS[i]}</span><span>${formatar(o)}</span></button>`).join('')}</div>
        <div class="checagem-retorno" aria-live="polite"></div>
      </div>`;
  }

  /** Tópico aberto agora (para ligar as conversas com a IA à pergunta certa) */
  let topicoAberto = null;

  /** Notas do caderno com a conversa da IA sobre uma pergunta deste tópico */
  function conversasSalvas(pid) {
    const chave = topicoAberto + '/' + pid;
    return App.store.get().notas.filter((n) => n.pergunta === chave);
  }

  function linksConversas(pid) {
    const lista = conversasSalvas(pid);
    if (!lista.length) return '';
    return 'Conversas salvas no caderno: ' + lista.map((n) =>
      `<a href="#caderno/${U.esc(n.id)}">${U.esc(U.dataCurta(new Date(n.criadaEm)))}</a>`).join(' · ');
  }

  /**
   * Ferramentas de IA de uma pergunta, recolhidas num só lugar:
   * pedir correção (ChatGPT, Claude ou copiar) e guardar a conversa no caderno.
   */
  function ferramentasIA(pid) {
    const id = U.esc(pid);
    return `
      <details class="ferramentas-ia">
        <summary>Corrigir com IA</summary>
        <p class="suave pequeno">Abre a IA com a pergunta, o resumo do capítulo e a sua resposta. Ela começa com perguntas para você mesmo achar o erro.</p>
        ${App.comp.botoesCorrecao(`data-corrigir="${id}"`)}
        <div class="correcao-saida" data-saida="${id}"></div>
        <details class="conversa-ia">
          <summary>Guardar a conversa no caderno</summary>
          <p class="suave pequeno">Na IA, toque em copiar embaixo da resposta e cole aqui. Vira uma nota ligada a este capítulo.</p>
          <textarea data-conversa="${id}" rows="4" placeholder="Cole aqui a resposta da IA"></textarea>
          <button type="button" class="botao pequeno" data-salvar-conversa="${id}">Salvar no caderno</button>
        </details>
      </details>
      <div class="suave pequeno conversas-salvas" data-conversas="${id}">${linksConversas(pid)}</div>`;
  }

  /** Transforma cada bloco do conteúdo em HTML. "respostas" = o que você já escreveu neste tópico */
  function bloco(b, respostas, indice) {
    switch (b.tipo) {
      case 'etapa': {
        const n = ORDEM_ETAPAS.indexOf(b.etapa) + 1;
        return `
          <header class="leitura-parte" id="sec-${indice}">
            <span class="leitura-parte-rotulo">${n ? n + ' · ' : ''}${U.esc(ETAPAS[b.etapa] || '')}</span>
            ${b.texto ? `<h2>${formatar(b.texto)}</h2>` : ''}
          </header>`;
      }
      // "Pare e pense": a pergunta aparece no texto; o campo de resposta abre quando você quiser
      case 'pergunta': {
        const escrita = respostas[b.id] || '';
        return `
          <aside class="pense">
            <span class="pense-rotulo">Pare e pense</span>
            <p class="pense-pergunta">${formatar(b.texto)}</p>
            <details class="pense-resposta" ${escrita ? 'open' : ''}>
              <summary>${escrita ? 'Sua resposta' : 'Escrever minha resposta'}</summary>
              <label for="resp-${U.esc(b.id)}" class="oculto-visual">Sua resposta</label>
              <textarea id="resp-${U.esc(b.id)}" data-pergunta="${U.esc(b.id)}" rows="3"
                placeholder="Com as suas palavras. Fica salvo só para você.">${U.esc(escrita)}</textarea>
              <div class="suave pequeno resposta-status" data-status="${U.esc(b.id)}" aria-live="polite">${escrita ? 'Salvo' : ''}</div>
              ${ferramentasIA(b.id)}
            </details>
          </aside>`;
      }
      case 'checagem': return checagem(indice);
      case 'revelar': return `
        <details class="ver-resposta">
          <summary>${U.esc(b.titulo || 'Ver a resposta')}</summary>
          <div>${formatar(b.texto)}</div>
        </details>`;
      // Escuta: o celular lê o texto em inglês; o texto escrito fica escondido até você querer
      case 'escuta': return `
        <figure class="caixa escuta">
          <figcaption>Escuta${b.titulo ? ' · ' + U.esc(b.titulo) : ''}</figcaption>
          <p class="suave pequeno">Ouça antes de ler. Se precisar, ouça mais devagar.</p>
          ${App.comp.botoesEscuta(b.texto)}
          <details class="ver-resposta"><summary>Ver o texto</summary><div lang="en">${formatar(b.texto)}</div></details>
        </figure>`;
      case 'tirinha': return App.comp.tirinha(b);
      case 'indicacao': return `
        <figure class="caixa">
          <figcaption>Leia no original</figcaption>
          <p><strong>${U.esc(b.obra)}</strong>, ${U.esc(b.autor)}</p>
          <p>${formatar(b.texto)}</p>
        </figure>`;
      case 'titulo': return `<h3 class="estudo-titulo" id="sec-${indice}">${formatar(b.texto)}</h3>`;
      case 'texto': return `<p>${formatar(b.texto)}</p>`;
      case 'lista': return `<ul class="estudo-lista">${b.itens.map((i) => `<li>${formatar(i)}</li>`).join('')}</ul>`;
      case 'exemplo': return `
        <figure class="caixa estudo-exemplo">
          ${b.titulo ? `<figcaption>${U.esc(b.titulo)}</figcaption>` : ''}
          <div>${formatar(b.texto)}</div>
        </figure>`;
      case 'atencao': return `<aside class="atencao estudo-atencao"><span class="atencao-rotulo">Atenção</span> ${formatar(b.texto)}</aside>`;
      // Tabela: no celular, cada linha vira um bloco com o nome de cada coluna (data-rotulo)
      case 'tabela': return `
        <div class="estudo-tabela"><table>
          <thead><tr>${b.cabecalho.map((c) => `<th>${U.esc(c)}</th>`).join('')}</tr></thead>
          <tbody>${b.linhas.map((l) => `<tr>${l.map((c, i) => `<td data-rotulo="${U.esc(b.cabecalho[i])}">${formatar(c)}</td>`).join('')}</tr>`).join('')}</tbody>
        </table></div>`;
      default: return '';
    }
  }

  function listaBncc(itens) {
    return itens.map((h) => `<li><strong>${U.esc(h.codigo)}</strong>: ${U.esc(h.texto)}</li>`).join('');
  }

  /** "Antes de começar": o que ajuda saber, com um atalho para relembrar */
  function antesDeComecar(lista) {
    if (!lista || !lista.length) return '';
    return `
      <aside class="antes">
        <span class="antes-rotulo">Antes de começar</span>
        ${lista.map((p) => `<p>${formatar(p.texto)}</p>${p.revisao
          ? `<details class="ver-resposta"><summary>Relembrar</summary><div>${formatar(p.revisao)}</div></details>` : ''}`).join('')}
      </aside>`;
  }

  /** "Sobre este capítulo": revisão, BNCC e fontes, no fim e recolhido */
  function sobreOCapitulo(assunto, c) {
    const A = D.auditoria || { topicos: {} };
    let revisao;
    if (!(assunto.id in A.topicos)) {
      revisao = '<p><strong>Ainda não revisado.</strong> Escrito com ajuda de IA e ainda sem conferência: na dúvida, confira nas fontes abaixo.</p>';
    } else {
      // O valor pode ser a data da conferência ("AAAA-MM-DD") ou uma nota; sem data, vale a geral
      const valor = A.topicos[assunto.id];
      const temData = /^\d{4}-\d{2}-\d{2}$/.test(valor);
      const nota = temData ? '' : valor;
      revisao = `<p><strong>Revisado em ${U.dataCurta(U.lerISO(temData ? valor : A.data))}.</strong> Escrito com ajuda de IA; fatos, contas e habilidades da BNCC foram conferidos com fontes oficiais.${nota ? ' ' + U.esc(nota) : ''}</p>`;
    }
    const temBncc = c.bncc.length || (c.bnccBase && c.bnccBase.length);
    const bncc = !temBncc ? '' : `
      <h3>Habilidades da BNCC</h3>
      <ul>${listaBncc(c.bncc)}</ul>
      ${c.bnccBase && c.bnccBase.length ? `
        <details><summary>Base que vem do Ensino Fundamental</summary><ul>${listaBncc(c.bnccBase)}</ul></details>` : ''}
      <p><a href="${U.esc(D.bnccUrl)}" target="_blank" rel="noopener">Documento oficial da BNCC ↗</a></p>`;
    return `
      <details class="sobre-capitulo">
        <summary>Sobre este capítulo</summary>
        ${revisao}
        ${bncc}
        <h3>Para aprofundar</h3>
        <ul>${c.fontes.map((f) => `<li><a href="${U.esc(f.url)}" target="_blank" rel="noopener">${U.esc(f.nome)} ↗</a></li>`).join('')}</ul>
      </details>`;
  }

  /**
   * Corrige um teste rápido. Se errou, além da resposta mostra:
   * outro jeito de explicar, do que se trata a pergunta e onde reler no texto.
   */
  function responderChecagem(caixa, indice, escolhida) {
    const v = atual.versoes[indice];
    const q = v.lista[atual.variante[indice] || 0];
    const secao = atual.secao[indice];
    const acertou = escolhida === q.correta;
    // Guarda o resultado (fica salvo e vai para a nuvem junto com o resto)
    const estado = App.store.get();
    const h = historico(indice) || { acertos: 0, erros: 0 };
    if (acertou) h.acertos++; else h.erros++;
    h.ultima = acertou ? 'certo' : 'errado';
    estado.checagens[atual.id][indice] = h;
    App.store.salvar();
    caixa.querySelectorAll('.alternativa').forEach((botao, i) => {
      botao.disabled = true;
      if (i === q.correta) botao.classList.add('certa');
      else if (i === escolhida) botao.classList.add('errada');
    });
    const ajuda = acertou ? '' : `
      ${q.outraExplicacao ? `<p><strong>Outro jeito de ver.</strong> ${formatarComTermos(q.outraExplicacao)}</p>` : ''}
      ${v.conceito ? `<p class="checagem-conceito"><strong>Do que se trata.</strong> ${formatarComTermos(v.conceito)}</p>` : ''}
      ${secao ? `<p><strong>Reler:</strong> <button type="button" class="link-botao" data-ir="${secao.alvo}">${formatar(secao.texto)}</button></p>` : ''}`;
    caixa.querySelector('.checagem-retorno').innerHTML = `
      <div class="explicacao ${acertou ? 'certo' : 'errado'}">
        <p class="explicacao-veredito">${acertou ? 'Isso mesmo.' : 'Ainda não. A resposta é ' + LETRAS[q.correta] + '.'}</p>
        <p>${formatarComTermos(q.explicacao)}</p>
        ${ajuda}
        <div class="linha">
          ${v.lista.length > 1 ? `<button type="button" class="botao pequeno ${acertou ? '' : 'primario'}" data-outra>Outra pergunta parecida</button>` : ''}
          <button type="button" class="botao pequeno" data-refazer>Tentar de novo</button>
        </div>
      </div>`;
  }

  /** Barra fina no topo com quanto do capítulo você já leu */
  function atualizarProgresso() {
    const barra = document.querySelector('.leitura-progresso span');
    const artigo = document.querySelector('.leitura');
    if (!barra || !artigo) return;
    const inicio = artigo.offsetTop;
    const fim = inicio + artigo.offsetHeight - window.innerHeight;
    const pct = fim <= inicio ? 100 : Math.min(100, Math.max(0, ((window.scrollY - inicio) / (fim - inicio)) * 100));
    barra.style.width = pct + '%';
  }
  window.addEventListener('scroll', atualizarProgresso, { passive: true });

  function render(el, id) {
    const estado = App.store.get();
    const assunto = estado.assuntos.find((a) => a.id === id);
    if (!assunto) {
      el.innerHTML = `<section class="cartao"><h1>Tópico não encontrado</h1>
        <p class="suave">Ele pode ter sido removido.</p><a class="botao" href="#assuntos">Voltar aos assuntos</a></section>`;
      return;
    }
    const materia = D.materia(assunto.materia);
    const c = D.conteudos[assunto.id];
    // Lugar deste tópico na apostila da matéria (capítulo N de M)
    const livro = c ? App.telas.apostila.navegacao(estado, assunto) : null;
    if (livro) App.telas.apostila.registrarLeitura(estado, assunto);
    const notas = App.caderno.notasDoTopico(estado, assunto).length;

    const cabeca = `
      <div class="leitura-barra">
        <a href="#apostila/${assunto.materia}" class="leitura-voltar">← ${U.esc(materia.nome)}</a>
        <div class="leitura-ferramentas">
          ${c ? '<button type="button" class="botao-texto" data-acao="tamanho" aria-label="Tamanho do texto">Aa</button>' : ''}
          <a class="botao-texto" href="#caderno/topico:${assunto.id}">Notas${notas ? ' (' + notas + ')' : ''}</a>
        </div>
      </div>
      <header class="leitura-cabeca">
        <p class="leitura-meta">${livro ? `Capítulo ${livro.numero} de ${livro.total}` : U.esc(materia.nome)}${c ? ' · ' + minutosDeLeitura(c) + ' min de leitura' : ''}${
          assunto.estudado ? ' · <span class="leitura-estudado">estudado</span>' : ''}</p>
        <h1>${U.esc(assunto.titulo)}</h1>
      </header>`;

    if (!c) {
      el.innerHTML = `
        <article class="leitura" data-tamanho="${tamanhoSalvo()}">
          ${cabeca}
          <p>O texto deste capítulo ainda não foi escrito.</p>
          <p class="suave">Por enquanto, pratique nos exercícios ou procure o tema em fontes abertas (Khan Academy, Wikilivros).</p>
          <a class="botao" href="#exercicios/${assunto.materia}">Exercícios de ${U.esc(materia.nome)}</a>
        </article>`;
    } else {
      if (!estado.respostasEstudo[assunto.id]) estado.respostasEstudo[assunto.id] = {};
      const respostas = estado.respostasEstudo[assunto.id];
      topicoAberto = assunto.id;
      prepararChecagens(assunto.id, c.blocos, assunto.materia);

      el.innerHTML = `
        <div class="leitura-progresso" aria-hidden="true"><span></span></div>
        <article class="leitura" data-tamanho="${tamanhoSalvo()}">
          ${cabeca}
          ${antesDeComecar(c.prerequisitos)}
          <div class="leitura-corpo">
            ${c.blocos.map((b, i) => bloco(b, respostas, i)).join('')}
          </div>

          <section class="leitura-fim">
            <h2>Para revisar</h2>
            <ul class="estudo-lista">${c.resumo.map((r) => `<li>${formatar(r)}</li>`).join('')}</ul>
            <div class="leitura-acoes">
              <button class="botao ${assunto.estudado ? '' : 'primario'}" data-acao="marcar">
                ${assunto.estudado ? '✓ Estudado' : 'Terminei este capítulo'}</button>
              <a class="botao" href="#exercicios/${assunto.id}">Praticar</a>
            </div>
            <p class="suave pequeno">${assunto.estudado
              ? 'Revisões marcadas para 1, 3, 7 e 15 dias depois. Toque em "Estudado" para desmarcar.'
              : 'Ao terminar, o app marca revisões para 1, 3, 7 e 15 dias depois.'}</p>
          </section>

          ${livro ? `
            <nav class="leitura-capitulos" aria-label="Capítulos da apostila">
              ${livro.anterior ? `<a href="#estudar/${livro.anterior.id}"><span>Anterior</span>${U.esc(livro.anterior.titulo)}</a>` : '<span></span>'}
              ${livro.proximo ? `<a class="proximo" href="#estudar/${livro.proximo.id}"><span>Próximo</span>${U.esc(livro.proximo.titulo)}</a>`
                : `<a class="proximo" href="#apostila/${assunto.materia}"><span>Fim da apostila</span>Voltar ao sumário</a>`}
            </nav>` : ''}

          ${sobreOCapitulo(assunto, c)}
        </article>`;
      // A barra de progresso fica logo abaixo do topo fixo
      const topo = document.querySelector('.topo');
      const barra = el.querySelector('.leitura-progresso');
      if (topo && barra) barra.style.top = topo.offsetHeight + 'px';
      atualizarProgresso();
    }

    el.onclick = (ev) => {
      if (App.comp.cliqueGlossario(ev)) return;

      // Tamanho do texto: normal → grande → maior
      if (ev.target.closest('[data-acao="tamanho"]')) {
        const artigo = el.querySelector('.leitura');
        const prox = TAMANHOS[(TAMANHOS.indexOf(artigo.dataset.tamanho) + 1) % TAMANHOS.length];
        artigo.dataset.tamanho = prox;
        salvarTamanho(prox);
        U.aviso('Texto ' + prox);
        atualizarProgresso();
        return;
      }

      // Salvar a conversa com a IA como nota do caderno
      const salvarConversa = ev.target.closest('[data-salvar-conversa]');
      if (salvarConversa && c) {
        const pid = salvarConversa.dataset.salvarConversa;
        const campo = el.querySelector(`[data-conversa="${pid}"]`);
        const colado = campo.value.trim();
        if (!colado) { U.aviso('Cole a resposta da IA primeiro'); return; }
        salvarPendente();
        const atual = App.store.get();
        const pergunta = c.blocos.find((b) => b.tipo === 'pergunta' && b.id === pid);
        const minha = ((atual.respostasEstudo[assunto.id] || {})[pid] || '').trim();
        const texto = [
          `**Tópico:** [[${assunto.titulo}]] · ${materia.nome}`,
          `**Pergunta:** ${pergunta.texto}`,
          '', '## Minha resposta', minha || '_(sem resposta escrita)_',
          '', `## Conversa com a IA (${U.dataCurta(U.hoje())})`, colado,
          '', '#correcao-ia',
        ].join('\n');
        const nota = App.caderno.nova(atual, {
          titulo: App.caderno.tituloLivre(atual, 'Correção IA — ' + assunto.titulo), texto, assunto: assunto.id,
        });
        nota.pergunta = assunto.id + '/' + pid;
        App.store.salvar();
        campo.value = '';
        campo.closest('details').open = false;
        el.querySelector(`[data-conversas="${pid}"]`).innerHTML = linksConversas(pid);
        U.aviso('Conversa salva no caderno');
        return;
      }

      // "Corrigir com IA": monta o pedido com a pergunta, o contexto e a sua resposta
      const corrigir = ev.target.closest('[data-corrigir]');
      if (corrigir && c) {
        const pid = corrigir.dataset.corrigir;
        salvarPendente();
        const resposta = (App.store.get().respostasEstudo[assunto.id] || {})[pid] || '';
        const saida = el.querySelector(`[data-saida="${pid}"]`);
        if (!resposta.trim()) { U.aviso('Escreva sua resposta primeiro'); return; }
        const pergunta = c.blocos.find((b) => b.tipo === 'pergunta' && b.id === pid);
        const pedido = App.comp.pedidoDeCorrecao({
          modo: 'estudo', materia: materia.nome, materiaId: assunto.materia, assuntoId: assunto.id, topico: assunto.titulo,
          pergunta: pergunta.texto, resposta, contexto: c.resumo,
        });
        App.comp.enviarParaIA(corrigir.dataset.ia, pedido).then((html) => { saida.innerHTML = html; });
        return;
      }

      // "Reler": rola até a parte do texto que explica a pergunta
      const ir = ev.target.closest('[data-ir]');
      if (ir) {
        const alvo = document.getElementById(ir.dataset.ir);
        if (alvo) {
          mostrarVoltar(ir.closest('[data-checagem]'));
          // Desconta a altura do cabeçalho fixo para o título não ficar escondido
          const cabecalho = document.querySelector('.topo').offsetHeight + 12;
          window.scrollTo({ top: alvo.getBoundingClientRect().top + window.scrollY - cabecalho, behavior: 'auto' });
          alvo.classList.add('destacado');
          setTimeout(() => alvo.classList.remove('destacado'), 2500);
        }
        return;
      }

      // Teste rápido: responder, tentar de novo ou trocar por outra pergunta parecida
      const caixa = ev.target.closest('[data-checagem]');
      if (caixa && c) {
        const indice = Number(caixa.dataset.checagem);
        if (ev.target.closest('[data-abrir]')) {
          atual.abertas[indice] = true;
          caixa.outerHTML = checagem(indice);
          return;
        }
        if (ev.target.closest('[data-outra]')) {
          atual.variante[indice] = ((atual.variante[indice] || 0) + 1) % atual.versoes[indice].lista.length;
          caixa.outerHTML = checagem(indice);
          return;
        }
        if (ev.target.closest('[data-refazer]')) {
          caixa.outerHTML = checagem(indice);
          return;
        }
        const opcao = ev.target.closest('[data-opcao]');
        if (opcao && !opcao.disabled) responderChecagem(caixa, indice, Number(opcao.dataset.opcao));
        return;
      }

      if (!ev.target.closest('[data-acao="marcar"]')) return;
      salvarPendente();
      App.calc.marcarEstudado(estado, assunto, !assunto.estudado); // também agenda as revisões
      App.store.salvar();
      if (assunto.estudado) U.aviso('Capítulo estudado. Revisões marcadas para 1, 3, 7 e 15 dias.');
      // Redesenha sem perder o ponto da leitura (o botão fica no fim do capítulo)
      const y = window.scrollY;
      render(el, id);
      window.scrollTo(0, y);
    };

    // Respostas às perguntas: guarda enquanto você digita e salva 1s depois de parar.
    // Sair do campo, trocar de app ou pedir correção salva na hora (ver salvarPendente).
    el.oninput = (ev) => {
      const campo = ev.target.closest('[data-pergunta]');
      if (!campo) return;
      // Sempre o estado atual: a nuvem pode ter trocado o objeto desde que a tela abriu
      const atual = App.store.get();
      if (!atual.respostasEstudo[assunto.id]) atual.respostasEstudo[assunto.id] = {};
      atual.respostasEstudo[assunto.id][campo.dataset.pergunta] = campo.value;
      const status = el.querySelector(`[data-status="${campo.dataset.pergunta}"]`);
      if (status) status.textContent = 'Salvando…';
      clearTimeout(timerResposta);
      timerResposta = setTimeout(salvarPendente, 1000);
    };
    // (onfocusout não existe em todos os navegadores; o listener entra uma vez só)
    if (!el.dataset.salvaAoSair) {
      el.addEventListener('focusout', (ev) => { if (ev.target.closest('[data-pergunta]')) salvarPendente(); });
      el.dataset.salvaAoSair = '1';
    }
  }

  /**
   * Depois de "Reler", mostra um botão flutuante que leva
   * de volta à pergunta. Ele some quando você volta ou troca de tela.
   */
  function mostrarVoltar(caixa) {
    esconderVoltar();
    if (!caixa) return;
    const indice = caixa.dataset.checagem;
    const botao = document.createElement('button');
    botao.type = 'button';
    botao.className = 'botao primario voltar-pergunta';
    botao.textContent = '↩ Voltar para o teste';
    botao.onclick = () => {
      const destino = document.querySelector(`[data-checagem="${indice}"]`);
      if (destino) {
        const cabecalho = document.querySelector('.topo').offsetHeight + 12;
        window.scrollTo({ top: destino.getBoundingClientRect().top + window.scrollY - cabecalho, behavior: 'auto' });
      }
      esconderVoltar();
    };
    document.body.appendChild(botao);
  }
  function esconderVoltar() {
    const antigo = document.querySelector('.voltar-pergunta');
    if (antigo) antigo.remove();
  }

  let timerResposta = null;
  /** Salva na hora uma resposta que ainda estava esperando o timer */
  function salvarPendente() {
    if (!timerResposta) return;
    clearTimeout(timerResposta);
    timerResposta = null;
    App.store.salvar();
    document.querySelectorAll('.resposta-status').forEach((s) => {
      if (s.textContent === 'Salvando…') s.textContent = 'Salvo';
    });
  }
  // No celular, o app pode ser pausado ou fechado ao trocar de app (ex.: abrir o ChatGPT)
  document.addEventListener('visibilitychange', () => { if (document.hidden) salvarPendente(); });
  window.addEventListener('pagehide', salvarPendente);

  function sair() { salvarPendente(); esconderVoltar(); }

  return { render, sair, titulo: 'Estudar', aba: 'assuntos' };
})();
