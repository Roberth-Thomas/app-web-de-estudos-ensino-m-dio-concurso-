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
  const formatar = (t) => App.comp.formatar(t);
  const LETRAS = ['A', 'B', 'C', 'D'];

  /** Rótulos das etapas do método de Paulo Freire */
  const ETAPAS = {
    leitura: '🌎 Leitura do mundo',
    problematizacao: '🔎 Problematização',
    sistematizacao: '📘 Construindo o conhecimento',
    acao: '✍️ Na sua vida',
    reflexao: '💭 Reflexão',
  };

  /** Transforma cada bloco do conteúdo em HTML. "respostas" = o que você já escreveu neste tópico */
  function bloco(b, respostas, indice) {
    switch (b.tipo) {
      case 'etapa': return `
        <div class="estudo-etapa">
          <div class="rotulo">${U.esc(ETAPAS[b.etapa] || '')}</div>
          ${b.texto ? `<h2>${formatar(b.texto)}</h2>` : ''}
        </div>`;
      case 'pergunta': return `
        <div class="estudo-pergunta">
          <label for="resp-${U.esc(b.id)}">${formatar(b.texto)}</label>
          <textarea id="resp-${U.esc(b.id)}" data-pergunta="${U.esc(b.id)}" rows="3"
            placeholder="Escreva aqui com suas palavras. Fica salvo só para você.">${U.esc(respostas[b.id] || '')}</textarea>
        </div>`;
      case 'checagem': return `
        <div class="checagem" data-checagem="${indice}">
          <div class="rotulo">🎯 Entendeu? Teste rápido</div>
          <p>${formatar(b.pergunta)}</p>
          <div class="alternativas">${b.opcoes.map((o, i) => `
            <button type="button" class="alternativa" data-opcao="${i}">
              <span class="letra">${LETRAS[i]})</span><span>${formatar(o)}</span></button>`).join('')}</div>
          <div class="checagem-retorno" aria-live="polite"></div>
        </div>`;
      case 'tirinha': return App.comp.tirinha(b);
      case 'indicacao': return `
        <div class="indicacao">
          <div class="rotulo">📚 Leia no original</div>
          <strong>${U.esc(b.obra)}</strong> <span class="suave pequeno">— ${U.esc(b.autor)}</span>
          <p style="margin:.4rem 0 0">${formatar(b.texto)}</p>
        </div>`;
      case 'titulo': return `<h3 class="estudo-titulo">${formatar(b.texto)}</h3>`;
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

  /** Corrige um "Entendeu?": mostra a explicação; se errou, dá também outra forma de explicar */
  function responderChecagem(caixa, checagem, escolhida) {
    const acertou = escolhida === checagem.correta;
    caixa.querySelectorAll('.alternativa').forEach((botao, i) => {
      botao.disabled = true;
      if (i === checagem.correta) botao.classList.add('certa');
      else if (i === escolhida) botao.classList.add('errada');
    });
    caixa.querySelector('.checagem-retorno').innerHTML = `
      <div class="explicacao">
        <strong>${acertou ? '✅ Isso mesmo!' : '❌ Ainda não. A resposta é ' + LETRAS[checagem.correta] + '.'}</strong>
        <p style="margin:.4rem 0 0">${formatar(checagem.explicacao)}</p>
        ${!acertou && checagem.outraExplicacao ? `<p style="margin:.6rem 0 0"><strong>🔄 Outro jeito de ver:</strong> ${formatar(checagem.outraExplicacao)}</p>` : ''}
        <button type="button" class="link-botao pequeno" data-refazer>Tentar de novo</button>
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

    const cabecalho = `
      <section class="cartao">
        <a href="#assuntos" class="pequeno">← Assuntos</a>
        <div class="suave pequeno" style="margin-top:.5rem">${materia.emoji} ${U.esc(materia.nome)} · Fase ${assunto.fase}</div>
        <h1 style="margin:.2rem 0 .6rem">${U.esc(assunto.titulo)}</h1>
        <button class="botao ${assunto.estudado ? 'sucesso' : 'primario'}" data-acao="marcar">
          ${assunto.estudado ? '✓ Estudado (desmarcar)' : 'Marcar como estudado'}</button>
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
      const freire = c.metodo === 'freire';
      const cartaoBncc = `
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
          <a class="botao primario" href="#exercicios/${assunto.materia}" style="margin-top:.6rem">Praticar exercícios de ${U.esc(materia.nome)}</a>
        </section>`;
    }

    el.onclick = (ev) => {
      if (App.comp.cliqueGlossario(ev)) return;

      // "Entendeu?": responder ou tentar de novo
      const caixa = ev.target.closest('[data-checagem]');
      if (caixa && c) {
        const checagem = c.blocos[Number(caixa.dataset.checagem)];
        if (ev.target.closest('[data-refazer]')) {
          caixa.outerHTML = bloco(checagem, {}, Number(caixa.dataset.checagem));
          return;
        }
        const opcao = ev.target.closest('[data-opcao]');
        if (opcao && !opcao.disabled) responderChecagem(caixa, checagem, Number(opcao.dataset.opcao));
        return;
      }

      if (!ev.target.closest('[data-acao="marcar"]')) return;
      salvarPendente();
      App.calc.marcarEstudado(estado, assunto, !assunto.estudado); // também agenda as revisões
      App.store.salvar();
      if (assunto.estudado) U.aviso('Estudado ✅ Revisões agendadas para 1, 3, 7 e 15 dias');
      render(el, id);
    };

    // Respostas às perguntas: guarda enquanto você digita e salva 1s depois de parar
    el.oninput = (ev) => {
      const campo = ev.target.closest('[data-pergunta]');
      if (!campo) return;
      estado.respostasEstudo[assunto.id][campo.dataset.pergunta] = campo.value;
      clearTimeout(timerResposta);
      timerResposta = setTimeout(() => { timerResposta = null; App.store.salvar(); }, 1000);
    };
  }

  let timerResposta = null;
  /** Salva na hora uma resposta que ainda estava esperando o timer */
  function salvarPendente() {
    if (timerResposta) { clearTimeout(timerResposta); timerResposta = null; App.store.salvar(); }
  }

  return { render, sair: salvarPendente, titulo: 'Estudar', aba: 'assuntos' };
})();
