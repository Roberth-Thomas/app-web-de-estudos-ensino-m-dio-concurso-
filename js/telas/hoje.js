/* =========================================================
   telas/hoje.js — tela inicial: o que estudar hoje
   ========================================================= */
App.telas = App.telas || {};

App.telas.hoje = (function () {
  const U = App.util;
  const D = App.dados;
  /** Semana começando na segunda (números do Date.getDay(): 1 = seg … 0 = dom) */
  const ORDEM_SEMANA = [1, 2, 3, 4, 5, 6, 0];
  /** Dia escolhido no seletor (null = hoje). Fica só na memória. */
  let diaEscolhido = null;

  /** Texto e cor do selo de ritmo (adiantado / em dia / atrasado) */
  function seloRitmo(r) {
    if (r.status === 'adiantado') return '<span class="selo ok">Adiantado ' + r.diferenca + ' assunto(s)</span>';
    if (r.status === 'atrasado') return '<span class="selo alerta">Atrasado ' + Math.abs(r.diferenca) + ' assunto(s)</span>';
    return '<span class="selo info">Em dia</span>';
  }

  function textoFase(estado) {
    const fase = App.calc.faseAtual(estado);
    if (fase === 0) return 'O plano começa em ' + U.dataCurta(App.calc.inicio(estado));
    if (fase === 4) return 'Plano de 6 meses concluído — hora de revisar!';
    return 'Fase ' + fase + ' (' + fase + 'º ano) · Mês ' + App.calc.mesAtual(estado) + ' de 6';
  }

  /** Um bloco do cronograma (base ou concurso) com o atalho certo */
  function bloco(rotulo, emoji, item) {
    let atalho = '';
    if (item.acao === 'simulado') atalho = '<a class="botao pequeno primario" href="#exercicios/simulado">Começar simulado</a>';
    else if (item.acao === 'redacao') atalho = '<a class="botao pequeno primario" href="#redacao">Escrever texto</a>';
    else if (item.materias.length) atalho = item.materias
      .map((m) => '<a class="botao pequeno" href="#exercicios/' + m + '">Exercícios de ' + U.esc(D.materia(m).nome) + '</a>')
      .join(' ');
    return `
      <div class="bloco-estudo">
        <div class="emoji-grande" aria-hidden="true">${emoji}</div>
        <div style="flex:1">
          <div class="rotulo">${rotulo}</div>
          <div class="titulo">${U.esc(item.titulo)}</div>
          <div class="linha" style="margin-top:.4rem">${atalho}</div>
        </div>
      </div>`;
  }

  /** Próximos assuntos ainda não estudados das matérias de hoje, na fase atual */
  function proximosAssuntos(estado, materias) {
    const fase = Math.min(3, Math.max(1, App.calc.faseAtual(estado)));
    return estado.assuntos
      .filter((a) => materias.includes(a.materia) && !a.estudado && a.fase <= fase)
      .sort((a, b) => a.fase - b.fase)
      .slice(0, 4);
  }

  function tabelaSemana(diaHoje) {
    const linhas = ORDEM_SEMANA.map((n) => {
      const d = D.cronograma[n];
      const estilo = n === diaHoje ? ' style="background:var(--primaria-suave);font-weight:600"' : '';
      const base = d.descanso ? 'Descanso' : U.esc(d.base.titulo);
      const conc = d.descanso ? '—' : U.esc(d.concurso.titulo);
      return `<tr${estilo}><td>${d.nome}</td><td>${base}</td><td>${conc}</td></tr>`;
    }).join('');
    return `
      <div style="overflow-x:auto">
        <table style="width:100%;border-collapse:collapse;font-size:.9rem">
          <thead><tr style="text-align:left"><th>Dia</th><th>Ensino médio</th><th>Concurso</th></tr></thead>
          <tbody>${linhas}</tbody>
        </table>
      </div>`;
  }

  /** Seletor Seg…Dom, começando na segunda. O ponto marca o dia de hoje. */
  function seletorDias(diaVer, diaHoje) {
    return `<div class="pilulas" role="tablist" aria-label="Escolher o dia" style="margin-bottom:12px">${
      ORDEM_SEMANA.map((n) => `
        <button class="pilula ${n === diaVer ? 'ativa' : ''}" data-dia="${n}" role="tab" aria-selected="${n === diaVer}">
          ${D.cronograma[n].nome.slice(0, 3)}${n === diaHoje ? '<span class="ponto" title="hoje"></span>' : ''}
        </button>`).join('')}</div>`;
  }

  function render(el) {
    const estado = App.store.get();
    const hoje = U.hoje();
    const chave = U.iso(hoje);
    const dia = D.cronograma[hoje.getDay()];
    const diaVer = diaEscolhido === null ? hoje.getDay() : diaEscolhido;
    const verHoje = diaVer === hoje.getDay();
    const plano = D.cronograma[diaVer];
    const feito = Boolean(estado.diasConcluidos[chave]);
    const seq = App.calc.sequencia(estado.diasConcluidos, hoje);
    const totalDias = Object.keys(estado.diasConcluidos).length;
    const geral = App.calc.progressoAssuntos(estado);
    const ritmo = App.calc.ritmo(estado, hoje);

    let conteudoDia;
    if (plano.descanso) {
      conteudoDia = `
        <div class="bloco-estudo"><div class="emoji-grande">😴</div>
          <div><div class="titulo">Domingo é dia de descanso</div>
          <div class="suave pequeno">Não conta nem quebra a sua sequência. Recarregue as energias!</div></div>
        </div>`;
    } else {
      const proximos = proximosAssuntos(estado, plano.base.materias.concat(plano.concurso.materias));
      conteudoDia = bloco('Ensino médio (base)', '📘', plano.base) + bloco('Concurso', '🎯', plano.concurso) +
        (proximos.length ? `
          <div>
            <h3 style="margin-top:.5rem">Sugestão de assuntos</h3>
            <ul style="margin:0;padding-left:1.2rem">${proximos.map((a) => {
              const nome = D.conteudos[a.id]
                ? `<a href="#estudar/${U.esc(a.id)}">📖 ${U.esc(a.titulo)}</a>` : U.esc(a.titulo);
              return `<li>${nome} <span class="suave pequeno">· ${U.esc(D.materia(a.materia).nome)}, fase ${a.fase}</span></li>`;
            }).join('')}</ul>
            <a href="#assuntos" class="pequeno">Marcar assuntos estudados →</a>
          </div>` : '');
    }
    const tituloPlano = verHoje ? 'O que estudar hoje' : 'Plano de ' + plano.nome.toLowerCase();

    const botaoDia = dia.descanso
      ? `<button class="botao ${feito ? 'feito' : ''}" data-acao="alternar-dia">${feito ? '✓ Estudei hoje (desfazer)' : 'Estudei mesmo assim'}</button>`
      : `<button class="botao ${feito ? 'feito' : ''}" data-acao="alternar-dia">${feito ? '✓ Dia concluído (desfazer)' : 'Marcar o dia como concluído'}</button>`;

    el.innerHTML = `
      <section class="cartao destaque">
        <div class="suave pequeno">${U.esc(U.dataLonga(hoje))}</div>
        <h1 style="margin:.2rem 0 .3rem">${dia.descanso ? 'Bom descanso!' : 'Hoje é dia de ' + U.esc(dia.base.titulo.split(':')[0])}</h1>
        <div class="suave pequeno">${U.esc(textoFase(estado))} · Meta: ${D.metaDiaria}</div>
        <div style="margin-top:12px">${botaoDia}</div>
      </section>

      <section class="grade estatisticas">
        <div class="cartao estatistica"><div class="numero">🔥${seq}</div><div class="suave pequeno">dia(s) seguidos</div></div>
        <div class="cartao estatistica"><div class="numero">${totalDias}</div><div class="suave pequeno">dias estudados</div></div>
        <div class="cartao estatistica"><div class="numero">${geral.pct}%</div><div class="suave pequeno">dos assuntos</div></div>
      </section>
      <div style="text-align:center">${seloRitmo(ritmo)} <a href="#progresso" class="pequeno">ver progresso</a></div>

      <section class="cartao">
        <h2>${tituloPlano}</h2>
        ${seletorDias(diaVer, hoje.getDay())}
        <div class="grade">${conteudoDia}</div>
        ${verHoje ? '' : '<button class="link-botao pequeno" data-dia="hoje" style="margin-top:.5rem">← Voltar para hoje</button>'}
      </section>

      <section class="cartao">
        <h2>Cronograma da semana</h2>
        ${tabelaSemana(hoje.getDay())}
      </section>`;

    el.onclick = (ev) => {
      const botaoDia = ev.target.closest('[data-dia]');
      if (botaoDia) {
        const valor = botaoDia.dataset.dia;
        diaEscolhido = valor === 'hoje' || Number(valor) === hoje.getDay() ? null : Number(valor);
        render(el);
        return;
      }
      if (ev.target.closest('[data-acao="alternar-dia"]')) {
        if (estado.diasConcluidos[chave]) delete estado.diasConcluidos[chave];
        else {
          estado.diasConcluidos[chave] = true;
          U.aviso('Boa! Dia marcado como concluído 🎉');
        }
        App.store.salvar();
        render(el);
      }
    };
  }

  return { render, titulo: 'Hoje' };
})();
