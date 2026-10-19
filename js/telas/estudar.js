/* =========================================================
   telas/estudar.js — página de estudo de um tópico
   Rota: #estudar/<id do assunto>  (ex.: #estudar/matematica-1-0)
   O texto vem de js/dados/conteudos.js. As peças visuais
   (formatação, tirinhas, glossário) estão em js/componentes.js.
   ========================================================= */
App.telas = App.telas || {};

App.telas.estudar = (function () {
  const U = App.util;
  const D = App.dados;
  // A matéria do tópico aberto decide o sentido das palavras do glossário
  const formatar = (t) => App.comp.formatar(t, atual.materia);
  /** Formata marcando sozinho os termos do glossário (usado nas explicações dos "Entendeu?") */
  const formatarComTermos = (t) => formatar(App.comp.marcarTermos(t, atual.materia));
  const LETRAS = ['A', 'B', 'C', 'D'];

  /** Rótulos das etapas do método de Paulo Freire */
  const ETAPAS = {
    leitura: '🌎 Leitura do mundo',
    problematizacao: '🔎 Problematização',
    sistematizacao: '📘 Construindo o conhecimento',
    acao: '✍️ Na sua vida',
    reflexao: '💭 Reflexão',
  };

  /**
   * Dados do tópico aberto, usados pelos "Entendeu?":
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
    // "abertas": quais "Entendeu?" você já abriu nesta visita (começam recolhidos)
    const abertas = atual.id === id ? atual.abertas : {};
    atual = { id, materia, versoes, secao, variante: {}, abertas };
  }

  /** Histórico salvo de um "Entendeu?": { acertos, erros, ultima: 'certo' | 'errado' } */
  function historico(indice) {
    const estado = App.store.get();
    if (!estado.checagens[atual.id]) estado.checagens[atual.id] = {};
    return estado.checagens[atual.id][indice] || null;
  }

  /** Desenha um "Entendeu?" na versão que estiver ativa */
  function checagem(indice) {
    const v = atual.versoes[indice];
    const n = atual.variante[indice] || 0;
    const q = v.lista[n];
    const h = historico(indice);
    const selo = !h ? '' : h.ultima === 'certo'
      ? `<span class="selo ok">✓ acertou da última vez</span>`
      : `<span class="selo alerta">errou da última vez</span>`;
    // Recolhido: só um botão. Você abre o teste quando quiser.
    if (!atual.abertas[indice]) {
      return `
        <div class="checagem fechada linha entre" data-checagem="${indice}">
          <button type="button" class="botao pequeno" data-abrir>🎯 Testar o que acabei de ler</button>${selo}
        </div>`;
    }
    return `
      <div class="checagem" data-checagem="${indice}">
        <div class="rotulo linha entre"><span>🎯 Entendeu? Teste rápido${v.lista.length > 1 ? ` <span class="suave">· pergunta ${n + 1} de ${v.lista.length}</span>` : ''}</span>${selo}</div>
        <p>${formatar(q.pergunta)}</p>
        <div class="alternativas">${q.opcoes.map((o, i) => `
          <button type="button" class="alternativa" data-opcao="${i}">
            <span class="letra">${LETRAS[i]})</span><span>${formatar(o)}</span></button>`).join('')}</div>
        <div class="checagem-retorno" aria-live="polite"></div>
      </div>`;
  }

  /** Transforma cada bloco do conteúdo em HTML. "respostas" = o que você já escreveu neste tópico */
  function bloco(b, respostas, indice) {
    switch (b.tipo) {
      case 'etapa': return `
        <div class="estudo-etapa" id="sec-${indice}">
          <div class="rotulo">${U.esc(ETAPAS[b.etapa] || '')}</div>
          ${b.texto ? `<h2>${formatar(b.texto)}</h2>` : ''}
        </div>`;
      // Pergunta para escrever: fica recolhida (opcional), a não ser que você já tenha escrito algo
      case 'pergunta': return `
        <details class="estudo-pergunta" ${respostas[b.id] ? 'open' : ''}>
          <summary>✍️ Para pensar <span class="suave">(opcional)</span>: ${formatar(b.texto)}</summary>
          <label for="resp-${U.esc(b.id)}" class="oculto-visual">${formatar(b.texto)}</label>
          <textarea id="resp-${U.esc(b.id)}" data-pergunta="${U.esc(b.id)}" rows="3"
            placeholder="Escreva aqui com suas palavras. Salva sozinho, só para você.">${U.esc(respostas[b.id] || '')}</textarea>
          <div class="suave pequeno resposta-status" data-status="${U.esc(b.id)}" aria-live="polite">${respostas[b.id] ? '✓ Salvo' : ''}</div>
          ${App.comp.botoesCorrecao(`data-corrigir="${U.esc(b.id)}"`)}
          <div class="correcao-saida" data-saida="${U.esc(b.id)}"></div>
        </details>`;
      case 'checagem': return checagem(indice);
      case 'revelar': return `
        <details class="revelar">
          <summary>${U.esc(b.titulo || 'Já respondeu? Toque para ver a explicação')}</summary>
          <p>${formatar(b.texto)}</p>
        </details>`;
      case 'tirinha': return App.comp.tirinha(b);
      case 'indicacao': return `
        <div class="indicacao">
          <div class="rotulo">📚 Leia no original</div>
          <strong>${U.esc(b.obra)}</strong> <span class="suave pequeno">— ${U.esc(b.autor)}</span>
          <p style="margin:.4rem 0 0">${formatar(b.texto)}</p>
        </div>`;
      case 'titulo': return `<h3 class="estudo-titulo" id="sec-${indice}">${formatar(b.texto)}</h3>`;
      case 'texto': return `<p>${formatar(b.texto)}</p>`;
      case 'lista': return `<ul class="estudo-lista">${b.itens.map((i) => `<li>${formatar(i)}</li>`).join('')}</ul>`;
      case 'exemplo': return `<div class="estudo-exemplo"><div class="rotulo">✏️ ${U.esc(b.titulo || 'Exemplo')}</div>${formatar(b.texto)}</div>`;
      case 'atencao': return `<div class="estudo-atencao">⚠️ ${formatar(b.texto)}</div>`;
      case 'tabela': return `
        <div class="estudo-tabela"><table>
          <thead><tr>${b.cabecalho.map((c) => `<th>${U.esc(c)}</th>`).join('')}</tr></thead>
          <tbody>${b.linhas.map((l) => `<tr>${l.map((c) => `<td>${formatar(c)}</td>`).join('')}</tr>`).join('')}</tbody>
        </table></div>`;
      default: return '';
    }
  }

  function listaBncc(itens) {
    return itens.map((h) => `<li><strong>${U.esc(h.codigo)}</strong> — ${U.esc(h.texto)}</li>`).join('');
  }

  /** "Antes de começar": o que você precisa saber, com atalho para revisar */
  function cartaoPrerequisitos(lista) {
    if (!lista || !lista.length) return '';
    return `
      <section class="cartao prerequisitos">
        <h2>🧱 Antes de começar, você precisa saber</h2>
        <ul class="estudo-lista">${lista.map((p) => `<li>${formatar(p.texto)}${p.revisao
          ? `<details><summary class="pequeno">Não lembro, me explica</summary><div class="estudo-exemplo">${formatar(p.revisao)}</div></details>` : ''}</li>`).join('')}</ul>
        <p class="suave pequeno">Palavras <button type="button" class="termo" disabled>sublinhadas assim</button> estão no glossário: toque nelas para ver o que significam.</p>
      </section>`;
  }

  /**
   * Corrige um "Entendeu?". Se errou, além da resposta mostra:
   * outro jeito de explicar, sobre o que é a pergunta e onde reler no texto.
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
      ${q.outraExplicacao ? `<p style="margin:.6rem 0 0"><strong>🔄 Outro jeito de ver:</strong> ${formatarComTermos(q.outraExplicacao)}</p>` : ''}
      ${v.conceito ? `<div class="checagem-conceito"><strong>📌 Sobre o que é esta pergunta:</strong> ${formatarComTermos(v.conceito)}</div>` : ''}
      ${secao ? `<p style="margin:.6rem 0 0"><strong>📖 Volte e releia:</strong>
        <button type="button" class="link-botao" data-ir="${secao.alvo}">${formatar(secao.texto)}</button></p>` : ''}`;
    caixa.querySelector('.checagem-retorno').innerHTML = `
      <div class="explicacao">
        <strong>${acertou ? '✅ Isso mesmo!' : '❌ Ainda não. A resposta é ' + LETRAS[q.correta] + '.'}</strong>
        <p style="margin:.4rem 0 0">${formatarComTermos(q.explicacao)}</p>
        ${ajuda}
        <div class="linha" style="margin-top:.7rem">
          ${v.lista.length > 1 ? `<button type="button" class="botao pequeno ${acertou ? '' : 'primario'}" data-outra>🔁 Outra pergunta parecida</button>` : ''}
          <button type="button" class="botao pequeno" data-refazer>Tentar de novo</button>
        </div>
      </div>`;
  }

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

    const cabecalho = `
      <section class="cartao">
        <a href="#apostila/${assunto.materia}" class="pequeno">← Apostila de ${U.esc(materia.nome)}</a>
        <div class="suave pequeno" style="margin-top:.5rem">${materia.emoji} ${U.esc(materia.nome)} · Fase ${assunto.fase}${
          livro ? ` · 📖 Capítulo ${livro.numero} de ${livro.total}` : ''}</div>
        ${c ? (() => {
          // Selo da auditoria: o conteúdo foi conferido com fontes confiáveis?
          const A = D.auditoria || { topicos: {} };
          if (!(assunto.id in A.topicos)) return '<p class="pequeno" style="margin:.4rem 0 0"><span class="selo alerta">⚠️ Ainda não conferido</span> Escrito por IA e ainda sem revisão: na dúvida, confira nas fontes do fim.</p>';
          const nota = A.topicos[assunto.id];
          return `<p class="pequeno" style="margin:.4rem 0 0"><span class="selo ok">✅ Conferido em ${U.dataCurta(U.lerISO(A.data))}</span> Fatos, contas e BNCC checados com fontes confiáveis.${nota ? ' ' + U.esc(nota) : ''}</p>`;
        })() : ''}
        <h1 style="margin:.2rem 0 .6rem">${U.esc(assunto.titulo)}</h1>
        <button class="botao ${assunto.estudado ? 'sucesso' : 'primario'}" data-acao="marcar">
          ${assunto.estudado ? '✓ Estudado (desmarcar)' : 'Marcar como estudado'}</button>
        <a class="botao" href="#caderno/topico:${assunto.id}">📝 Anotar${(() => { const n = App.caderno.notasDoTopico(estado, assunto).length; return n ? ` (${n})` : ''; })()}</a>
        ${assunto.estudado ? '' : '<p class="suave pequeno" style="margin:.5rem 0 0">Ao marcar, o app agenda revisões para daqui a 1, 3, 7 e 15 dias.</p>'}
      </section>`;

    if (!c) {
      el.innerHTML = cabecalho + `
        <section class="cartao">
          <p>O conteúdo deste tópico ainda não foi escrito.</p>
          <p class="suave pequeno">Por enquanto, pratique na aba Exercícios ou procure o tema nas fontes abertas (Khan Academy, Wikilivros).</p>
          <a class="botao" href="#exercicios/${assunto.materia}">Exercícios de ${U.esc(materia.nome)}</a>
        </section>`;
    } else {
      if (!estado.respostasEstudo[assunto.id]) estado.respostasEstudo[assunto.id] = {};
      const respostas = estado.respostasEstudo[assunto.id];
      prepararChecagens(assunto.id, c.blocos, assunto.materia);
      const freire = c.metodo === 'freire';
      // Tópicos de concurso podem não ter habilidade na BNCC: aí o cartão não aparece
      const temBncc = c.bncc.length || (c.bnccBase && c.bnccBase.length);
      const cartaoBncc = !temBncc ? '' : `
        <section class="cartao estudo-bncc">
          <h2>📋 O que a BNCC pede</h2>
          <p class="suave pequeno">Habilidades da Base Nacional Comum Curricular (MEC, 2018) que este tópico ajuda a desenvolver.
            A BNCC do Ensino Médio organiza as habilidades por área, não por série.</p>
          <ul>${listaBncc(c.bncc)}</ul>
          ${c.bnccBase && c.bnccBase.length ? `
            <details><summary class="pequeno">Base que vem do Ensino Fundamental</summary>
              <ul class="pequeno">${listaBncc(c.bnccBase)}</ul></details>` : ''}
          <a class="pequeno" href="${U.esc(D.bnccUrl)}" target="_blank" rel="noopener">Abrir o documento oficial da BNCC ↗</a>
        </section>`;
      const aviso = freire ? `
        <p class="suave pequeno estudo-metodo">Formato inspirado em <strong>Paulo Freire</strong>: começa pela sua experiência,
          pergunta antes de explicar e termina na sua vida real. Responda às perguntas antes de seguir: as respostas ficam salvas.</p>` : '';

      // No formato Freire, a BNCC vai para o fim: o estudo começa pela pergunta, não pela norma
      el.innerHTML = cabecalho + cartaoPrerequisitos(c.prerequisitos) + (freire ? '' : cartaoBncc) + `
        <section class="cartao estudo">
          ${aviso}
          ${c.blocos.map((b, i) => bloco(b, respostas, i)).join('')}
        </section>
        ${freire ? cartaoBncc : ''}

        <section class="cartao">
          <h2>🧠 Resumo para revisar</h2>
          <ul class="estudo-lista">${c.resumo.map((r) => `<li>${formatar(r)}</li>`).join('')}</ul>
        </section>

        <section class="cartao">
          <h2>📎 Para aprofundar</h2>
          <ul class="estudo-lista">${c.fontes.map((f) =>
            `<li><a href="${U.esc(f.url)}" target="_blank" rel="noopener">${U.esc(f.nome)} ↗</a></li>`).join('')}</ul>
          <a class="botao primario" href="#exercicios/${assunto.id}" style="margin-top:.6rem">Praticar este tópico</a>
          <a class="botao" href="#exercicios/${assunto.materia}" style="margin-top:.6rem">Exercícios de ${U.esc(materia.nome)}</a>
        </section>

        <nav class="cartao navegacao-capitulos linha entre" aria-label="Capítulos da apostila">
          ${livro.anterior ? `<a class="botao" href="#estudar/${livro.anterior.id}">← ${U.esc(livro.anterior.titulo)}</a>` : '<span></span>'}
          ${livro.proximo ? `<a class="botao primario" href="#estudar/${livro.proximo.id}">${U.esc(livro.proximo.titulo)} →</a>`
            : `<a class="botao" href="#apostila/${assunto.materia}">Fim da apostila · voltar ao sumário</a>`}
        </nav>`;
    }

    el.onclick = (ev) => {
      if (App.comp.cliqueGlossario(ev)) return;

      // "Pedir correção à IA": monta o pedido com a pergunta, o contexto e a sua resposta
      const corrigir = ev.target.closest('[data-corrigir]');
      if (corrigir && c) {
        const pid = corrigir.dataset.corrigir;
        salvarPendente();
        const resposta = (App.store.get().respostasEstudo[assunto.id] || {})[pid] || '';
        const saida = el.querySelector(`[data-saida="${pid}"]`);
        if (!resposta.trim()) { U.aviso('Escreva sua resposta primeiro 🙂'); return; }
        const pergunta = c.blocos.find((b) => b.tipo === 'pergunta' && b.id === pid);
        const pedido = App.comp.pedidoDeCorrecao({
          modo: 'estudo', materia: materia.nome, materiaId: assunto.materia, assuntoId: assunto.id, topico: assunto.titulo,
          pergunta: pergunta.texto, resposta, contexto: c.resumo,
        });
        App.comp.enviarParaIA(corrigir.dataset.ia, pedido).then((html) => { saida.innerHTML = html; });
        return;
      }

      // "Volte e releia": rola até a parte do texto que explica a pergunta
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

      // "Entendeu?": responder, tentar de novo ou trocar por outra pergunta parecida
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
      if (assunto.estudado) U.aviso('Estudado ✅ Revisões agendadas para 1, 3, 7 e 15 dias');
      render(el, id);
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
   * Depois de "Volte e releia", mostra um botão flutuante que leva
   * de volta à pergunta. Ele some quando você volta ou troca de tela.
   */
  function mostrarVoltar(caixa) {
    esconderVoltar();
    if (!caixa) return;
    const indice = caixa.dataset.checagem;
    const botao = document.createElement('button');
    botao.type = 'button';
    botao.className = 'botao primario voltar-pergunta';
    botao.textContent = '↩ Voltar para a pergunta';
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
      if (s.textContent === 'Salvando…') s.textContent = '✓ Salvo';
    });
  }
  // No celular, o app pode ser pausado ou fechado ao trocar de app (ex.: abrir o ChatGPT)
  document.addEventListener('visibilitychange', () => { if (document.hidden) salvarPendente(); });
  window.addEventListener('pagehide', salvarPendente);

  function sair() { salvarPendente(); esconderVoltar(); }

  return { render, sair, titulo: 'Estudar', aba: 'assuntos' };
})();
