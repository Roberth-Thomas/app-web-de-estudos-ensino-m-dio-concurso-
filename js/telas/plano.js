/* =========================================================
   telas/plano.js — "Do zero à boa redação" (12 semanas)
   Rotas:
     #plano     → visão geral (as 5 competências e as 12 semanas)
     #plano/3   → a semana 3
   O conteúdo está em js/dados/plano-redacao.js. O progresso fica em
   estado.planoRedacao = { concluidas: {3: true}, textos: {3: '...'}, check: {3: {0: true}} }
   ========================================================= */
App.telas = App.telas || {};

App.telas.plano = (function () {
  const U = App.util;
  const P = () => App.dados.planoRedacao;
  const formatar = (t) => App.comp.formatar(t, 'portugues');
  let timerTexto = null;

  function progresso() {
    const estado = App.store.get();
    if (!estado.planoRedacao) estado.planoRedacao = { concluidas: {}, textos: {}, check: {} };
    return estado.planoRedacao;
  }

  /** A próxima semana não concluída (ou a última) */
  function semanaAtual() {
    const p = progresso();
    const proxima = P().semanas.find((s) => !p.concluidas[s.numero]);
    return proxima ? proxima.numero : P().semanas.length;
  }

  /** Blocos de texto da semana (mesmos tipos da página de estudo) */
  function bloco(b) {
    switch (b.tipo) {
      case 'titulo': return `<h3 class="estudo-titulo">${formatar(b.texto)}</h3>`;
      case 'texto': return `<p>${formatar(b.texto)}</p>`;
      case 'lista': return `<ul class="estudo-lista">${b.itens.map((i) => `<li>${formatar(i)}</li>`).join('')}</ul>`;
      case 'exemplo': return `<div class="estudo-exemplo"><div class="rotulo">✏️ ${U.esc(b.titulo || 'Exemplo')}</div>${formatar(b.texto)}</div>`;
      case 'atencao': return `<div class="estudo-atencao">⚠️ ${formatar(b.texto)}</div>`;
      case 'revelar': return `<details class="revelar"><summary>${U.esc(b.titulo || 'Toque para ver')}</summary><p>${formatar(b.texto)}</p></details>`;
      case 'tabela': return `
        <div class="estudo-tabela"><table>
          <thead><tr>${b.cabecalho.map((c) => `<th>${U.esc(c)}</th>`).join('')}</tr></thead>
          <tbody>${b.linhas.map((l) => `<tr>${l.map((c) => `<td>${formatar(c)}</td>`).join('')}</tr>`).join('')}</tbody>
        </table></div>`;
      default: return '';
    }
  }

  /* ---------- Visão geral ---------- */
  function telaGeral(el) {
    const p = progresso();
    const feitas = Object.keys(p.concluidas).filter((n) => p.concluidas[n]).length;
    const atual = semanaAtual();
    el.innerHTML = `
      <section class="cartao">
        <a href="#redacao" class="pequeno">← Redação</a>
        <h1 style="margin-top:.5rem">📘 Do zero à boa redação</h1>
        <p>Um plano de <strong>12 semanas</strong> para quem acha que não sabe dissertar. Uma habilidade por semana, sempre com
          explicação, modelo, uma tarefa curta (com correção pela IA) e uma checklist.</p>
        <p class="suave pequeno">Faça uma semana por sábado, no horário de redação do seu cronograma. Não pule etapas: cada semana usa a anterior.</p>
        <div class="item-barra">
          <div class="linha"><span>Seu progresso</span><strong>${feitas}/12 semanas</strong></div>
          <div class="barra grossa"><div style="width:${U.porcentagem(feitas, 12)}%"></div></div>
        </div>
        <a class="botao primario" href="#plano/${atual}" style="margin-top:.8rem">${feitas ? 'Continuar: semana ' + atual : 'Começar pela semana 1'}</a>
      </section>

      <section class="cartao">
        <h2>Como a redação é corrigida</h2>
        <p class="suave pequeno">As 5 competências oficiais do Inep (Enem). Cada uma vale até 200 pontos. Muitas bancas de concurso usam critérios parecidos; confira o edital do seu.</p>
        <div class="estudo-tabela"><table>
          <thead><tr><th>Competência</th><th>Em palavras simples</th></tr></thead>
          <tbody>${P().competencias.map((c) => `
            <tr><td><strong>${c.numero}</strong></td>
                <td>${U.esc(c.simples)}<details><summary class="pequeno">Texto oficial</summary><span class="suave pequeno">${U.esc(c.oficial)}</span></details></td></tr>`).join('')}</tbody>
        </table></div>
      </section>

      <section class="cartao">
        <h2>As 12 semanas</h2>
        <ul class="lista-assuntos">${P().semanas.map((s) => `
          <li>
            <span style="flex:1"><a href="#plano/${s.numero}">Semana ${s.numero} — ${U.esc(s.titulo)}</a>
              <br><span class="suave pequeno">Competência ${U.esc(s.competencia)} · ${U.esc(s.objetivo)}</span></span>
            ${p.concluidas[s.numero] ? '<span class="selo ok">✓ feita</span>' : s.numero === atual ? '<span class="selo info">agora</span>' : ''}
          </li>`).join('')}</ul>
        <p class="suave pequeno" style="margin-top:.6rem">Fontes oficiais:
          <a href="${U.esc(P().fonte.url)}" target="_blank" rel="noopener">${U.esc(P().fonte.nome)} ↗</a> ·
          <a href="${U.esc(P().fonte2026.url)}" target="_blank" rel="noopener">${U.esc(P().fonte2026.nome)} ↗</a></p>
      </section>`;
  }

  /* ---------- Uma semana ---------- */
  function telaSemana(el, n) {
    const s = P().semanas.find((x) => x.numero === n);
    if (!s) { location.hash = '#plano'; return; }
    const p = progresso();
    const marcados = p.check[n] || {};
    const total = P().semanas.length;

    el.innerHTML = `
      <section class="cartao">
        <a href="#plano" class="pequeno">← Plano de redação</a>
        <div class="suave pequeno" style="margin-top:.5rem">Semana ${n} de ${total} · Competência ${U.esc(s.competencia)}</div>
        <h1 style="margin:.2rem 0 .4rem">${U.esc(s.titulo)}</h1>
        <p class="estudo-metodo"><strong>🎯 Objetivo da semana:</strong> ${formatar(s.objetivo)}</p>
      </section>

      <section class="cartao estudo">
        ${s.blocos.map(bloco).join('')}
      </section>

      <section class="cartao">
        <h2>✍️ Tarefa da semana</h2>
        <p>${formatar(s.tarefa.texto)}</p>
        <label for="tarefa" class="oculto-visual">Sua resposta</label>
        <textarea id="tarefa" placeholder="Escreva aqui. Fica salvo automaticamente.">${U.esc(p.textos[n] || '')}</textarea>
        <div class="linha entre" style="margin-top:.4rem">
          <span class="suave pequeno" id="contador-tarefa">${U.contarPalavras(p.textos[n] || '')} palavra(s)</span>
        </div>
        ${App.comp.botoesCorrecao('data-corrigir-tarefa')}
        <div id="saida-tarefa"></div>
      </section>

      <section class="cartao">
        <h2>✅ Checklist da semana</h2>
        <ul class="revisao">${s.checklist.map((item, i) => `
          <li><label><input type="checkbox" data-check="${i}" ${marcados[i] ? 'checked' : ''}><span>${formatar(item)}</span></label></li>`).join('')}</ul>
        <div class="linha" style="margin-top:.8rem">
          <button class="botao ${p.concluidas[n] ? 'sucesso' : 'primario'}" data-concluir>${p.concluidas[n] ? '✓ Semana concluída (desmarcar)' : 'Concluir a semana ' + n}</button>
          ${n > 1 ? `<a class="botao" href="#plano/${n - 1}">← Semana ${n - 1}</a>` : ''}
          ${n < total ? `<a class="botao" href="#plano/${n + 1}">Semana ${n + 1} →</a>` : ''}
        </div>
      </section>`;

    const area = el.querySelector('#tarefa');
    el.oninput = (ev) => {
      if (ev.target !== area) return;
      p.textos[n] = area.value;
      el.querySelector('#contador-tarefa').textContent = U.contarPalavras(area.value) + ' palavra(s)';
      clearTimeout(timerTexto);
      timerTexto = setTimeout(() => { timerTexto = null; App.store.salvar(); }, 1000);
    };

    el.onchange = (ev) => {
      const i = ev.target.dataset.check;
      if (i === undefined) return;
      p.check[n] = p.check[n] || {};
      p.check[n][i] = ev.target.checked;
      App.store.salvar();
    };

    el.onclick = (ev) => {
      if (App.comp.cliqueGlossario(ev)) return;
      const corrigir = ev.target.closest('[data-corrigir-tarefa]');
      if (corrigir) {
        const texto = area.value;
        if (!texto.trim()) { U.aviso('Escreva sua tarefa primeiro 🙂'); return; }
        const pedido = App.comp.pedidoDeCorrecao({
          modo: 'plano', redacaoCompleta: n >= 11, materia: 'redação', etapa: 'semana ' + n + ' ("' + s.titulo + '")',
          objetivo: s.objetivo, pergunta: s.tarefa.texto, resposta: texto, contexto: s.checklist,
        });
        App.comp.enviarParaIA(corrigir.dataset.ia, pedido).then((html) => { el.querySelector('#saida-tarefa').innerHTML = html; });
        return;
      }
      if (ev.target.closest('[data-concluir]')) {
        salvarPendente();
        p.concluidas[n] = !p.concluidas[n];
        App.store.salvar();
        if (p.concluidas[n]) U.aviso('Semana ' + n + ' concluída! 🎉');
        render(el, String(n));
      }
    };
  }

  function salvarPendente() {
    if (timerTexto) { clearTimeout(timerTexto); timerTexto = null; App.store.salvar(); }
  }

  function render(el, param) {
    if (param && Number(param)) telaSemana(el, Number(param));
    else telaGeral(el);
  }

  /** Cartão para a aba Redação: mostra o progresso e o atalho para a semana atual */
  function cartaoResumo() {
    const p = progresso();
    const feitas = Object.keys(p.concluidas).filter((k) => p.concluidas[k]).length;
    const atual = semanaAtual();
    const s = P().semanas.find((x) => x.numero === atual);
    return `
      <section class="cartao destaque">
        <div class="suave pequeno">Plano de 12 semanas · ${feitas}/12 concluídas</div>
        <h2 style="margin:.2rem 0">📘 Do zero à boa redação</h2>
        <p class="suave" style="margin:0 0 .6rem">${feitas >= 12 ? 'Plano concluído! Continue com uma redação por semana.' : `Agora: semana ${atual} — ${U.esc(s.titulo)}`}</p>
        <div class="linha">
          <a class="botao" href="#plano/${atual}">${feitas ? 'Continuar' : 'Começar'}</a>
          <a class="botao feito" href="#plano">Ver o plano</a>
        </div>
      </section>`;
  }

  return { render, sair: salvarPendente, cartaoResumo, titulo: 'Plano de redação', aba: 'redacao' };
})();
