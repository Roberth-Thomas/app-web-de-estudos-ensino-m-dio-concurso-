/* =========================================================
   telas/exercicios.js — banco de questões, prática e simulado
   Rotas:
     #exercicios            → escolher matéria
     #exercicios/portugues  → praticar uma matéria
     #exercicios/simulado   → 10 questões das matérias da semana
     #exercicios/portugues-1-1 → praticar só um tópico (vem do plano de ação)
     #exercicios/nova       → cadastrar questão
   ========================================================= */
App.telas = App.telas || {};

App.telas.exercicios = (function () {
  const U = App.util;
  const D = App.dados;
  const LETRAS = ['A', 'B', 'C', 'D', 'E'];
  const TAMANHO_SIMULADO = 10;

  /**
   * Sessão de perguntas em andamento (fica só na memória).
   * { chave, titulo, fila: [questões], indice, respondida: índice escolhido | null, acertos, erros: [],
   *   respondidas: [{ questao, acertou }] }
   */
  let sessao = null;

  function novaSessao(chave) {
    const estado = App.store.get();
    const todas = App.calc.todasQuestoes(estado);
    let fila, titulo;
    if (chave === 'simulado') {
      const materias = D.materiasDaSemana();
      fila = U.embaralhar(todas.filter((q) => materias.includes(q.materia))).slice(0, TAMANHO_SIMULADO);
      titulo = 'Simulado da semana';
    } else if (estado.assuntos.some((a) => a.id === chave)) {
      const assunto = estado.assuntos.find((a) => a.id === chave);
      fila = U.embaralhar(todas.filter((q) => q.assunto === chave));
      titulo = D.materia(assunto.materia).emoji + ' ' + assunto.titulo;
    } else {
      fila = U.embaralhar(todas.filter((q) => q.materia === chave));
      titulo = D.materia(chave).emoji + ' ' + D.materia(chave).nome;
    }
    fila = fila.map(App.calc.embaralharOpcoes);
    return { chave, titulo, fila, indice: 0, respondida: null, acertos: 0, erros: [], respondidas: [] };
  }

  /* ---------- Tela inicial: lista de matérias ---------- */
  function telaInicio(el) {
    const estado = App.store.get();
    const todas = App.calc.todasQuestoes(estado);
    const linhas = D.materias.map((m) => {
      const r = estado.respostas[m.id] || { acertos: 0, total: 0 };
      const qtd = todas.filter((q) => q.materia === m.id).length;
      const pct = U.porcentagem(r.acertos, r.total);
      const indice = r.total ? `${pct}% de acertos (${r.acertos}/${r.total})` : 'Ainda sem respostas';
      return `
        <a class="cartao linha entre" href="#exercicios/${m.id}" style="text-decoration:none;color:inherit">
          <div>
            <strong>${m.emoji} ${U.esc(m.nome)}</strong>
            <div class="suave pequeno">${qtd} questões · ${indice}</div>
          </div>
          <span class="botao pequeno">Praticar</span>
        </a>`;
    }).join('');

    el.innerHTML = `
      <section class="cartao">
        <h1>Exercícios</h1>
        <p class="suave">Escolha uma matéria. As questões vêm embaralhadas e a correção é na hora.</p>
        <div class="linha">
          <a class="botao primario" href="#exercicios/simulado">🎯 Simulado (${TAMANHO_SIMULADO} questões da semana)</a>
          <a class="botao" href="#provas">📝 Provas</a>
          <a class="botao" href="#vestibular">🎓 Questões do ENEM</a>
          <a class="botao" href="#exercicios/nova">➕ Cadastrar questão</a>
        </div>
      </section>
      <div class="grade grade-2">${linhas}</div>`;
  }

  /* ---------- Responder perguntas (prática ou simulado) ---------- */
  function telaPergunta(el) {
    const s = sessao;
    if (!s.fila.length) {
      el.innerHTML = `<section class="cartao"><h1>${U.esc(s.titulo)}</h1>
        <p>Não há questões aqui ainda. Que tal <a href="#exercicios/nova">cadastrar uma</a>?</p>
        <a class="botao" href="#exercicios">Voltar</a></section>`;
      return;
    }
    if (s.indice >= s.fila.length) return telaResultado(el);

    const q = s.fila[s.indice];
    const respondeu = s.respondida !== null;
    const alternativas = q.opcoes.map((texto, i) => {
      let classe = '';
      if (respondeu && i === q.correta) classe = 'certa';
      else if (respondeu && i === s.respondida) classe = 'errada';
      return `<button class="alternativa ${classe}" data-opcao="${i}" ${respondeu ? 'disabled' : ''}>
                <span class="letra">${LETRAS[i]})</span><span>${U.esc(texto)}</span></button>`;
    }).join('');

    const acertou = s.respondida === q.correta;
    // Termos técnicos da explicação viram palavras clicáveis (glossário da matéria)
    const explicacaoMarcada = App.comp.marcarTermos(q.explicacao || 'Sem explicação cadastrada.', q.materia);
    const retorno = respondeu ? `
      <div class="explicacao">
        <strong>${acertou ? '✅ Acertou!' : '❌ Errou. Resposta: ' + LETRAS[q.correta]}</strong>
        <p style="margin:.4rem 0 0">${App.comp.formatar(explicacaoMarcada, q.materia)}</p>
        ${explicacaoMarcada.includes('[[') ? '<p class="suave pequeno" style="margin:.4rem 0 0">Palavras sublinhadas: toque para ver o que significam.</p>' : ''}
      </div>
      <button class="botao primario bloco" data-acao="proxima" style="margin-top:12px">
        ${s.indice + 1 < s.fila.length ? 'Próxima questão →' : 'Ver resultado'}</button>` : '';

    el.innerHTML = `
      <section class="cartao">
        <div class="linha entre">
          <a href="#exercicios" class="pequeno">← Matérias</a>
          <span class="selo info">${s.indice + 1} de ${s.fila.length}</span>
        </div>
        <h2 style="margin-top:.6rem">${U.esc(s.titulo)}</h2>
        ${s.chave === 'simulado' ? `<div class="suave pequeno">${U.esc(D.materia(q.materia).nome)}</div>` : ''}
        ${q.tirinha ? `<div style="margin-top:.6rem">${App.comp.tirinha(q.tirinha)}</div>` : ''}
        <p style="font-size:1.05rem;margin-top:.6rem">${U.esc(q.pergunta)}</p>
        <div class="alternativas">${alternativas}</div>
        ${retorno}
      </section>`;
  }

  /* ---------- Plano de ação (fim da sessão) ---------- */
  const NIVEIS = {
    dificuldade: { selo: 'erro', icone: '🔴', nome: 'Dificuldade' },
    atencao: { selo: 'alerta', icone: '🟡', nome: 'Atenção' },
    dominado: { selo: 'ok', icone: '🟢', nome: 'Dominado' },
  };

  /** O que fazer com um tópico, conforme o nível de acerto */
  function acaoDoTopico(item, i, lista) {
    const nome = item.assunto ? item.assunto.titulo : D.materia(item.materia).nome;
    const estudar = item.assunto ? `<a class="botao pequeno primario" href="#estudar/${item.assunto.id}">📖 Voltar ao assunto</a>` : '';
    const praticar = item.assunto
      ? `<a class="botao pequeno" href="#exercicios/${item.assunto.id}">🔁 Praticar só este tópico</a>`
      : `<a class="botao pequeno" href="#exercicios/${item.materia}">🔁 Praticar a matéria</a>`;
    const textos = {
      dificuldade: `Errar muito aqui é sinal de dificuldade, e tudo bem: é só o ponto onde estudar agora. Volte ao assunto,
        releia com calma, faça os testes 🎯 da apostila e só depois pratique de novo.` +
        (item.assunto && item.assunto.estudado ? ' Você já tinha marcado este tópico como estudado; vale estudar de novo.' : ''),
      atencao: 'Você está quase lá. Releia as explicações das questões que errou (lista abaixo) e pratique este tópico até passar de ' + App.calc.METAS.dominado + '%.',
      dominado: 'Meta batida. Siga em frente; as revisões espaçadas mantêm o assunto fresco.',
    };
    // Do segundo tópico do mesmo nível em diante, o texto longo não se repete
    const repetido = i > 0 && lista[i - 1].nivel === item.nivel;
    const curtos = { dificuldade: 'Mesmo caminho: volte ao assunto antes de praticar de novo.', atencao: 'Mesmo caminho: revise os erros e pratique de novo.', dominado: '' };
    const botoes = item.nivel === 'dominado' ? '' : `<div class="linha" style="margin-top:.5rem">${item.nivel === 'dificuldade' ? estudar + praticar : praticar + estudar}</div>`;
    const n = NIVEIS[item.nivel];
    const r = item.recentes;
    return `
      <li class="plano-acao-item">
        <div class="linha entre">
          <strong>${n.icone} ${U.esc(nome)}</strong>
          <span class="selo ${n.selo}">${n.nome} · ${r.pct}%</span>
        </div>
        <div class="suave pequeno">Nesta rodada: ${item.sessao.acertos}/${item.sessao.total}${
          r.total > item.sessao.total ? ` · últimas ${r.total} respostas: ${r.acertos}/${r.total}` : ''}${
          item.provisorio ? ' · poucas questões ainda, faça mais para confirmar' : ''}</div>
        ${(repetido ? curtos : textos)[item.nivel] ? `<p style="margin:.4rem 0 0">${(repetido ? curtos : textos)[item.nivel]}</p>` : ''}
        ${botoes}
      </li>`;
  }

  function planoDeAcao(s) {
    const itens = App.calc.planoDeAcao(App.store.get(), s.respondidas);
    if (!itens.length) return '';
    const M = App.calc.METAS;
    const pior = itens[0];
    const nomePior = pior.assunto ? pior.assunto.titulo : D.materia(pior.materia).nome;
    const resumo = pior.nivel === 'dominado'
      ? 'Todos os tópicos desta rodada bateram a meta. Próximo passo: avançar para assuntos novos.'
      : `Comece por <strong>${U.esc(nomePior)}</strong>: é onde você mais precisa agora.`;
    return `
      <section class="cartao">
        <h2>📋 Plano de ação</h2>
        <p class="suave pequeno">Metas de acerto por tópico: 🟢 ${M.dominado}% ou mais = dominado ·
          🟡 ${M.atencao}% a ${M.dominado - 1}% = atenção · 🔴 abaixo de ${M.atencao}% = dificuldade, volte ao assunto.
          A conta usa suas últimas respostas de cada tópico, não só esta rodada.</p>
        <p>${resumo}</p>
        <ul class="plano-acao">${itens.map(acaoDoTopico).join('')}</ul>
      </section>`;
  }

  function telaResultado(el) {
    const s = sessao;
    const pct = U.porcentagem(s.acertos, s.fila.length);
    const mensagem = pct >= 80 ? 'Excelente! 🏆' : pct >= 60 ? 'Bom resultado! 👍' : 'Continue praticando, a evolução vem! 💪';
    const estado = App.store.get();
    const nomeTopico = (q) => {
      const a = estado.assuntos.find((x) => x.id === q.assunto);
      return a ? ' · ' + U.esc(a.titulo) : '';
    };
    const erros = s.erros.length ? `
      <h3>Para revisar</h3>
      <ul style="padding-left:1.2rem;margin:0">${s.erros.map((q) =>
        `<li style="margin-bottom:.5rem">${U.esc(q.pergunta)}<br>
         <span class="suave pequeno">Resposta: ${LETRAS[q.correta]}) ${U.esc(q.opcoes[q.correta])}${nomeTopico(q)}</span></li>`).join('')}</ul>` : '';
    el.innerHTML = `
      <section class="cartao">
        <h1>${U.esc(s.titulo)} — resultado</h1>
        <div class="numero">${s.acertos}/${s.fila.length}</div>
        <p>${pct}% de acertos. ${mensagem}</p>
        <div class="barra grossa"><div style="width:${pct}%"></div></div>
        <div class="linha" style="margin-top:12px">
          <button class="botao primario" data-acao="refazer">Refazer</button>
          <a class="botao" href="#exercicios">Outras matérias</a>
        </div>
      </section>
      ${planoDeAcao(s)}
      ${erros ? '<section class="cartao">' + erros + '</section>' : ''}`;
  }

  /* ---------- Cadastrar nova questão ---------- */
  function telaNova(el) {
    const estado = App.store.get();
    const opcoesMateria = D.materias.map((m) => `<option value="${m.id}">${U.esc(m.nome)}</option>`).join('');
    // Tópico é opcional; com ele, a questão entra no plano de ação daquele assunto
    const opcoesTopico = D.materias.map((m) => `<optgroup label="${U.esc(m.nome)}">${
      estado.assuntos.filter((a) => a.materia === m.id).map((a) => `<option value="${a.id}">${U.esc(a.titulo)}</option>`).join('')}</optgroup>`).join('');
    const minhas = estado.questoesExtras.map((q) => `
      <li data-id="${U.esc(q.id)}" style="display:flex;gap:.5rem;align-items:flex-start">
        <span style="flex:1">${U.esc(q.pergunta)} <span class="suave pequeno">· ${U.esc(D.materia(q.materia).nome)}</span></span>
        <button class="botao pequeno perigo" data-acao="apagar-questao">Apagar</button>
      </li>`).join('');

    el.innerHTML = `
      <section class="cartao">
        <a href="#exercicios" class="pequeno">← Matérias</a>
        <h1 style="margin-top:.5rem">Cadastrar questão</h1>
        <form id="form-questao">
          <div class="campo"><label for="q-materia">Matéria</label>
            <select id="q-materia" name="materia">${opcoesMateria}</select></div>
          <div class="campo"><label for="q-assunto">Tópico (opcional)</label>
            <select id="q-assunto" name="assunto"><option value="">Nenhum</option>${opcoesTopico}</select></div>
          <div class="campo"><label for="q-pergunta">Pergunta</label>
            <textarea id="q-pergunta" name="pergunta" required style="min-height:90px"></textarea></div>
          ${[0, 1, 2, 3].map((i) => `
            <div class="campo"><label for="q-op${i}">Alternativa ${LETRAS[i]}</label>
              <input type="text" id="q-op${i}" name="op${i}" required></div>`).join('')}
          <div class="campo"><label for="q-correta">Alternativa correta</label>
            <select id="q-correta" name="correta">${[0, 1, 2, 3].map((i) => `<option value="${i}">${LETRAS[i]}</option>`).join('')}</select></div>
          <div class="campo"><label for="q-explicacao">Explicação (opcional)</label>
            <textarea id="q-explicacao" name="explicacao" style="min-height:70px"></textarea></div>
          <button class="botao primario" type="submit">Salvar questão</button>
        </form>
      </section>
      <section class="cartao">
        <h2>Minhas questões (${estado.questoesExtras.length})</h2>
        ${minhas ? '<ul class="lista-textos">' + minhas + '</ul>' : '<p class="suave">Você ainda não cadastrou questões.</p>'}
      </section>`;
  }

  /* ---------- Desenho e eventos ---------- */
  function render(el, param) {
    if (!param) { sessao = null; telaInicio(el); }
    else if (param === 'nova') telaNova(el);
    else {
      // Começa uma sessão nova se mudou de matéria (ou se ainda não existe)
      if (!sessao || sessao.chave !== param) sessao = novaSessao(param);
      telaPergunta(el);
    }

    el.onclick = (ev) => {
      if (App.comp.cliqueGlossario(ev)) return; // palavra do glossário: mostra a definição
      const opcao = ev.target.closest('[data-opcao]');
      if (opcao && sessao && sessao.respondida === null) {
        const q = sessao.fila[sessao.indice];
        sessao.respondida = Number(opcao.dataset.opcao);
        const acertou = sessao.respondida === q.correta;
        if (acertou) sessao.acertos++; else sessao.erros.push(q);
        sessao.respondidas.push({ questao: q, acertou });
        // Grava o índice de acertos da matéria e do tópico (vale para prática e simulado)
        App.calc.registrarResposta(App.store.get(), q.materia, acertou, q.assunto);
        App.store.salvar();
        telaPergunta(el);
        return;
      }
      const acao = ev.target.closest('[data-acao]');
      if (!acao) return;
      if (acao.dataset.acao === 'proxima') {
        sessao.indice++;
        sessao.respondida = null;
        telaPergunta(el);
        el.scrollIntoView({ block: 'start' });
      } else if (acao.dataset.acao === 'refazer') {
        sessao = novaSessao(sessao.chave);
        telaPergunta(el);
      } else if (acao.dataset.acao === 'apagar-questao') {
        const id = acao.closest('li').dataset.id;
        if (confirm('Apagar esta questão?')) {
          const estado = App.store.get();
          estado.questoesExtras = estado.questoesExtras.filter((q) => q.id !== id);
          App.store.salvar();
          telaNova(el);
        }
      }
    };

    el.onsubmit = (ev) => {
      ev.preventDefault();
      const f = ev.target;
      const estado = App.store.get();
      estado.questoesExtras.push({
        id: 'minha-' + U.novoId(),
        // Se escolheu um tópico, a matéria é a dele
        materia: f.assunto.value ? estado.assuntos.find((a) => a.id === f.assunto.value).materia : f.materia.value,
        assunto: f.assunto.value || undefined,
        pergunta: f.pergunta.value.trim(),
        opcoes: [0, 1, 2, 3].map((i) => f['op' + i].value.trim()),
        correta: Number(f.correta.value),
        explicacao: f.explicacao.value.trim(),
      });
      App.store.salvar();
      U.aviso('Questão salva ✅');
      telaNova(el);
    };
  }

  /** Plano de ação para qualquer lista de respostas (usado também pelas provas) */
  function planoDeAcaoHTML(respondidas) { return planoDeAcao({ respondidas }); }

  return { render, planoDeAcaoHTML, titulo: 'Exercícios' };
})();
