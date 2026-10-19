/* =========================================================
   telas/progresso.js — porcentagens, ritmo, acertos e calendário
   ========================================================= */
App.telas = App.telas || {};

App.telas.progresso = (function () {
  const U = App.util;
  const D = App.dados;
  let deslocamentoMes = 0; // 0 = mês atual, -1 = mês anterior...

  function barra(rotulo, feitos, total, extra = '') {
    const pct = U.porcentagem(feitos, total);
    return `
      <div class="item-barra">
        <div class="linha"><span>${rotulo}</span><span><strong>${pct}%</strong> <span class="suave pequeno">${feitos}/${total}${extra}</span></span></div>
        <div class="barra"><div style="width:${pct}%"></div></div>
      </div>`;
  }

  function cartaoRitmo(estado) {
    const fase = App.calc.faseAtual(estado);
    const r = App.calc.ritmo(estado);
    let titulo;
    if (fase === 0) titulo = 'O plano ainda não começou';
    else if (fase === 4) titulo = 'Os 6 meses do plano terminaram';
    else titulo = `Você está na fase ${fase} (${fase}º ano) — mês ${App.calc.mesAtual(estado)} de 6`;

    const selo = r.status === 'adiantado' ? `<span class="selo ok">Adiantado em ${r.diferenca} assunto(s)</span>`
      : r.status === 'atrasado' ? `<span class="selo info">No seu ritmo</span>
          <span class="suave pequeno">A referência de 6 meses previa ${Math.abs(r.diferenca)} assunto(s) a mais até hoje. É só um guia, não uma cobrança: siga quando puder.</span>`
      : '<span class="selo info">Em dia</span>';

    const fases = D.fases.map((f) => {
      const p = App.calc.progressoAssuntos(estado, null, f.numero);
      const { ini, fim } = App.calc.periodoFase(estado, f.numero);
      const periodo = ` · ${U.dataCurta(ini)} a ${U.dataCurta(U.somarDias(fim, -1))}`;
      return barra(`${f.nome} <span class="suave pequeno">(${f.descricao.split('·')[1].trim()})</span>`, p.feitos, p.total, periodo);
    }).join('');

    return `
      <section class="cartao">
        <h2>${titulo}</h2>
        <p>${selo}</p>
        <p class="suave pequeno">Pelo calendário, até hoje você deveria ter estudado cerca de <strong>${r.esperado}</strong> assuntos. Você estudou <strong>${r.feitos}</strong>. (Margem de 10% conta como "em dia".)</p>
        <div class="grade">${fases}</div>
      </section>`;
  }

  function calendario(estado) {
    const base = U.hoje();
    const primeiro = new Date(base.getFullYear(), base.getMonth() + deslocamentoMes, 1);
    const diasNoMes = new Date(primeiro.getFullYear(), primeiro.getMonth() + 1, 0).getDate();
    const nomeMes = primeiro.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
    const hojeISO = U.iso(base);

    let celulas = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((d) => `<div class="cab">${d}</div>`).join('');
    for (let i = 0; i < primeiro.getDay(); i++) celulas += '<div class="dia vazio"></div>';
    let estudados = 0;
    for (let d = 1; d <= diasNoMes; d++) {
      const data = new Date(primeiro.getFullYear(), primeiro.getMonth(), d);
      const chave = U.iso(data);
      const estudou = Boolean(estado.diasConcluidos[chave]);
      if (estudou) estudados++;
      const classes = ['dia', estudou ? 'estudou' : '', data.getDay() === 0 ? 'domingo' : '', chave === hojeISO ? 'hoje' : ''].join(' ');
      celulas += `<div class="${classes}" title="${U.dataCurta(data)}${estudou ? ' — estudou' : ''}">${d}</div>`;
    }

    return `
      <section class="cartao">
        <div class="linha entre">
          <h2 style="margin:0">Histórico de estudo</h2>
          <div class="linha">
            <button class="botao pequeno" data-mes="-1" aria-label="Mês anterior">‹</button>
            <span style="text-transform:capitalize;min-width:9rem;text-align:center">${nomeMes}</span>
            <button class="botao pequeno" data-mes="1" aria-label="Próximo mês" ${deslocamentoMes >= 0 ? 'disabled' : ''}>›</button>
          </div>
        </div>
        <p class="suave pequeno" style="margin:.4rem 0 .6rem">${estudados} dia(s) estudados neste mês</p>
        <div class="calendario">${celulas}</div>
      </section>`;
  }

  function render(el) {
    const estado = App.store.get();
    const geral = App.calc.progressoAssuntos(estado);

    const porMateria = D.materias.map((m) => {
      const p = App.calc.progressoAssuntos(estado, m.id);
      return barra(`${m.emoji} ${U.esc(m.nome)}`, p.feitos, p.total);
    }).join('');

    const acertos = D.materias.map((m) => {
      const r = estado.respostas[m.id];
      return r && r.total ? barra(`${m.emoji} ${U.esc(m.nome)}`, r.acertos, r.total, ' acertos') : '';
    }).join('');

    el.innerHTML = `
      <section class="cartao">
        <h1>Progresso</h1>
        <div class="item-barra">
          <div class="linha"><span>Geral</span><strong>${geral.pct}% · ${geral.feitos}/${geral.total} assuntos</strong></div>
          <div class="barra grossa"><div style="width:${geral.pct}%"></div></div>
        </div>
      </section>
      ${cartaoRitmo(estado)}
      ${calendario(estado)}
      <section class="cartao">
        <h2>Assuntos por matéria</h2>
        <div class="grade">${porMateria}</div>
      </section>
      <section class="cartao">
        <h2>Índice de acertos nos exercícios</h2>
        ${acertos ? '<div class="grade">' + acertos + '</div>' : '<p class="suave">Responda algumas questões na aba Exercícios para ver seus acertos aqui.</p>'}
      </section>`;

    el.onclick = (ev) => {
      const botao = ev.target.closest('[data-mes]');
      if (!botao) return;
      deslocamentoMes = Math.min(0, deslocamentoMes + Number(botao.dataset.mes));
      render(el);
    };
  }

  return { render, titulo: 'Progresso' };
})();
