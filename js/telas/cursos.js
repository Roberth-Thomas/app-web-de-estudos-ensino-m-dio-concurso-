/* =========================================================
   telas/cursos.js — cursos de fora do app (ex.: Hashtag Treinamentos)
   Rotas:
     #cursos        → seus cursos e o cadastro de um novo
     #cursos/<id>   → aulas do curso: abrir no site, marcar como assistida, anotar no caderno
   O app NÃO copia nada do curso: você cadastra só o nome das aulas e o link.
   As aulas assistidas e as notas viajam junto com o progresso (Drive).
   Formato: estado.cursos = [{ id, nome, url, materia, criadoEm, plano?,
                               aulas: [{ id, titulo, feita: "AAAA-MM-DD" | null, url?, entrega? }] }]
   Planos prontos (App.dados.planosCursos) viram cursos com "plano" = id do plano;
   cada fase é uma aula com link do material e a entrega da fase.
   ========================================================= */
App.telas = App.telas || {};

App.telas.cursos = (function () {
  const U = App.util;
  const D = App.dados;

  /** Só links https entram (nada de "javascript:" num href) */
  function linkSeguro(url) {
    const u = String(url || '').trim();
    return /^https:\/\/[^\s"'<>]+$/i.test(u) ? u : '';
  }

  /** Uma aula por linha; ignora linhas vazias e marcadores ("1.", "-", "•") */
  function lerAulas(texto) {
    return String(texto || '').split('\n')
      .map((l) => l.replace(/^\s*(?:[-•*]|\d+[.)-])\s*/, '').trim())
      .filter(Boolean)
      .map((titulo) => ({ id: U.novoId(), titulo: titulo.slice(0, 200), feita: null }));
  }

  /** Cria o curso de um plano pronto (uma vez só: se já existe, devolve o que existe) */
  function cursoDoPlano(estado, planoId) {
    const existente = estado.cursos.find((c) => c.plano === planoId);
    if (existente) return existente;
    const plano = (D.planosCursos || []).find((p) => p.id === planoId);
    if (!plano) return null;
    const curso = {
      id: U.novoId(), nome: plano.nome, url: linkSeguro(plano.url), materia: plano.materia,
      criadoEm: new Date().toISOString(), plano: plano.id,
      aulas: plano.aulas.map((a) => ({ id: U.novoId(), titulo: a.titulo, feita: null, url: linkSeguro(a.url), entrega: a.entrega || '' })),
    };
    estado.cursos.push(curso);
    return curso;
  }

  function progresso(curso) {
    const feitas = curso.aulas.filter((a) => a.feita).length;
    return { feitas, total: curso.aulas.length, pct: U.porcentagem(feitas, curso.aulas.length) };
  }

  /** Próxima aula ainda não assistida de algum curso da matéria (para o cartão do dia) */
  function proximaDaMateria(estado, materia) {
    for (const curso of estado.cursos) {
      if (curso.materia !== materia) continue;
      const aula = curso.aulas.find((a) => !a.feita);
      if (aula) return { curso, aula };
    }
    return null;
  }

  function acharAula(estado, chave) {
    const [cid, aid] = String(chave).split('/');
    const curso = estado.cursos.find((c) => c.id === cid);
    const aula = curso && curso.aulas.find((a) => a.id === aid);
    return aula ? { curso, aula } : null;
  }

  function marcarAula(estado, chave, feita) {
    const achada = acharAula(estado, chave);
    if (achada) achada.aula.feita = feita ? U.iso(U.hoje()) : null;
    return achada;
  }

  /** Nota do caderno da aula (cria na primeira vez) */
  function notaDaAula(estado, curso, aula) {
    const chave = curso.id + '/' + aula.id;
    let nota = estado.notas.find((n) => n.aula === chave);
    if (!nota) {
      nota = App.caderno.nova(estado, {
        titulo: App.caderno.tituloLivre(estado, curso.nome + ' — ' + aula.titulo),
        texto: `**Curso:** ${curso.nome} · ${D.materia(curso.materia).nome}\n**Aula:** ${aula.titulo}\n\n## O que aprendi (com as minhas palavras)\n\n\n## Exemplos que eu inventei\n\n\n## Dúvidas para revisar\n\n\n#curso`,
      });
      nota.aula = chave;
    }
    return nota;
  }

  function opcoesMateria(selecionada) {
    return D.materias.map((m) => `<option value="${m.id}" ${m.id === selecionada ? 'selected' : ''}>${U.esc(m.nome)}</option>`).join('');
  }

  /* ---------- Lista de cursos ---------- */
  function telaLista(el) {
    const estado = App.store.get();
    const cartoes = estado.cursos.map((c) => {
      const p = progresso(c);
      const prox = c.aulas.find((a) => !a.feita);
      return `
        <a class="cartao nota-cartao" href="#cursos/${U.esc(c.id)}">
          <strong>${U.esc(c.nome)}</strong>
          <div class="suave pequeno">${p.feitas} de ${p.total} aulas · ${p.pct}%</div>
          <div class="barra"><div style="width:${p.pct}%"></div></div>
          <div class="pequeno" style="margin-top:.3rem">${prox ? 'Próxima: ' + U.esc(prox.titulo) : (p.total ? 'Curso concluído' : 'Sem aulas cadastradas')}</div>
        </a>`;
    }).join('');

    const planos = (D.planosCursos || []).filter((p) => !estado.cursos.some((c) => c.plano === p.id));
    const blocoPlanos = planos.length ? `
      <section class="cartao">
        <h2>Planos prontos</h2>
        <p class="suave pequeno">Planos de estudo com material gratuito. Cada fase vira uma aula, com o link do material e o que entregar no fim.</p>
        <ul class="lista-assuntos">${planos.map((p) => `
          <li>
            <span style="flex:1"><strong>${U.esc(p.nome)}</strong><br><span class="suave pequeno">${U.esc(p.descricao || '')}</span></span>
            <button class="botao pequeno primario" data-plano="${U.esc(p.id)}">Adicionar</button>
          </li>`).join('')}</ul>
      </section>` : '';

    el.innerHTML = `
      <section class="cartao">
        <h1>Meus cursos</h1>
        <p class="suave pequeno">Acompanhe aqui cursos que você faz fora do app, como os da Hashtag Treinamentos.
          O app guarda só o nome das aulas, o link e o que você marcou; o conteúdo continua no site do curso.
          Cada aula pode ganhar uma nota no seu caderno, com as suas palavras.</p>
      </section>
      ${cartoes || '<p class="suave" style="text-align:center">Nenhum curso ainda. Cadastre o primeiro abaixo.</p>'}
      ${blocoPlanos}
      <section class="cartao">
        <h2>Novo curso</h2>
        <form id="form-curso">
          <div class="campo"><label for="curso-nome">Nome do curso</label>
            <input id="curso-nome" required maxlength="120" placeholder="Ex.: Inglês — Hashtag Treinamentos"></div>
          <div class="campo"><label for="curso-url">Link do curso (opcional)</label>
            <input id="curso-url" type="url" inputmode="url" placeholder="https://..."></div>
          <div class="campo"><label for="curso-materia">Matéria</label>
            <select id="curso-materia">${opcoesMateria('ingles')}</select></div>
          <div class="campo"><label for="curso-aulas">Aulas (uma por linha)</label>
            <textarea id="curso-aulas" rows="6" placeholder="Copie a lista de aulas da página do curso e cole aqui.&#10;Aula 1 - Introdução&#10;Aula 2 - ..."></textarea>
            <span class="suave pequeno">Pode deixar em branco e acrescentar depois. Números e marcadores no começo da linha são tirados sozinhos.</span></div>
          <button class="botao primario" type="submit">Cadastrar curso</button>
        </form>
      </section>`;

    el.onsubmit = (ev) => {
      if (ev.target.id !== 'form-curso') return;
      ev.preventDefault();
      const nome = el.querySelector('#curso-nome').value.trim();
      if (!nome) return;
      const urlDigitada = el.querySelector('#curso-url').value.trim();
      const url = linkSeguro(urlDigitada);
      if (urlDigitada && !url) { U.aviso('O link precisa começar com https://'); return; }
      const curso = {
        id: U.novoId(), nome: nome.slice(0, 120), url, materia: el.querySelector('#curso-materia').value,
        criadoEm: new Date().toISOString(), aulas: lerAulas(el.querySelector('#curso-aulas').value),
      };
      estado.cursos.push(curso);
      App.store.salvar();
      U.aviso('Curso cadastrado');
      location.hash = '#cursos/' + curso.id;
    };
    el.onclick = (ev) => {
      const botao = ev.target.closest('[data-plano]');
      if (!botao) return;
      const curso = cursoDoPlano(estado, botao.dataset.plano);
      if (!curso) return;
      App.store.salvar();
      U.aviso('Plano adicionado aos seus cursos');
      location.hash = '#cursos/' + curso.id;
    };
    el.onchange = null;
  }

  /* ---------- Um curso ---------- */
  function telaCurso(el, curso) {
    const estado = App.store.get();
    const p = progresso(curso);
    const aulas = curso.aulas.map((a, i) => {
      const chave = curso.id + '/' + a.id;
      const temNota = estado.notas.some((n) => n.aula === chave);
      return `
        <li>
          <label style="flex:1;display:flex;gap:.5rem;align-items:flex-start">
            <input type="checkbox" data-feita="${U.esc(chave)}" ${a.feita ? 'checked' : ''}>
            <span><span class="suave pequeno">${i + 1}.</span> ${a.feita ? '<s>' + U.esc(a.titulo) + '</s>' : U.esc(a.titulo)}
              ${a.feita ? `<br><span class="suave pequeno">assistida em ${U.esc(U.dataCurta(U.lerISO(a.feita)))}</span>` : ''}
              ${a.entrega ? `<br><span class="suave pequeno">Entrega: ${U.esc(a.entrega)}</span>` : ''}
              ${linkSeguro(a.url) ? `<br><a class="pequeno" href="${U.esc(a.url)}" target="_blank" rel="noopener noreferrer">Material ↗</a>` : ''}</span>
          </label>
          <button class="botao pequeno" data-anotar="${U.esc(chave)}">${temNota ? 'Nota' : 'Anotar'}</button>
          <button class="link-botao pequeno" data-remover="${U.esc(a.id)}" aria-label="Remover a aula ${U.esc(a.titulo)}">✕</button>
        </li>`;
    }).join('');

    el.innerHTML = `
      <section class="cartao">
        <a href="#cursos" class="pequeno">← Meus cursos</a>
        <h1 style="margin:.3rem 0">${U.esc(curso.nome)}</h1>
        <div class="suave pequeno">${p.feitas} de ${p.total} aulas assistidas · ${p.pct}%</div>
        <div class="barra grossa" style="margin:.4rem 0 .8rem"><div style="width:${p.pct}%"></div></div>
        ${curso.url ? `<a class="botao primario" href="${U.esc(curso.url)}" target="_blank" rel="noopener noreferrer">Abrir o curso ↗</a>` : ''}
      </section>
      <section class="cartao">
        <h2>Aulas</h2>
        ${aulas ? `<ul class="lista-assuntos">${aulas}</ul>` : '<p class="suave">Nenhuma aula cadastrada ainda.</p>'}
        <details style="margin-top:.8rem">
          <summary>Acrescentar aulas</summary>
          <textarea id="novas-aulas" rows="5" placeholder="Uma aula por linha"></textarea>
          <button class="botao pequeno primario" data-acao="acrescentar" style="margin-top:.4rem">Acrescentar</button>
        </details>
      </section>
      <section class="cartao">
        <h2>Ajustes</h2>
        <div class="campo"><label for="ed-url">Link do curso</label>
          <input id="ed-url" type="url" inputmode="url" value="${U.esc(curso.url || '')}" placeholder="https://..."></div>
        <div class="linha">
          <button class="botao pequeno" data-acao="salvar-link">Salvar link</button>
          <button class="botao pequeno perigo" data-acao="excluir">Excluir curso</button>
        </div>
        <p class="suave pequeno">Excluir o curso não apaga as notas que você escreveu no caderno.</p>
      </section>`;

    el.onsubmit = null;
    el.onchange = (ev) => {
      const caixa = ev.target.closest('[data-feita]');
      if (!caixa) return;
      marcarAula(estado, caixa.dataset.feita, caixa.checked);
      App.store.salvar();
      if (caixa.checked) U.aviso('Aula assistida ✓ Que tal anotar com suas palavras?');
      telaCurso(el, curso);
    };
    el.onclick = (ev) => {
      const anotar = ev.target.closest('[data-anotar]');
      if (anotar) {
        const achada = acharAula(estado, anotar.dataset.anotar);
        if (!achada) return;
        const nota = notaDaAula(estado, achada.curso, achada.aula);
        App.store.salvar();
        location.hash = '#caderno/' + nota.id;
        return;
      }
      const remover = ev.target.closest('[data-remover]');
      if (remover) {
        const aula = curso.aulas.find((a) => a.id === remover.dataset.remover);
        if (aula && confirm(`Remover a aula "${aula.titulo}" da lista?`)) {
          curso.aulas = curso.aulas.filter((a) => a !== aula);
          App.store.salvar();
          telaCurso(el, curso);
        }
        return;
      }
      const acao = ev.target.closest('[data-acao]');
      if (!acao) return;
      if (acao.dataset.acao === 'acrescentar') {
        const novas = lerAulas(el.querySelector('#novas-aulas').value);
        if (!novas.length) { U.aviso('Escreva pelo menos uma aula'); return; }
        curso.aulas.push(...novas);
        App.store.salvar();
        U.aviso(novas.length + ' aula(s) acrescentada(s)');
        telaCurso(el, curso);
      } else if (acao.dataset.acao === 'salvar-link') {
        const digitado = el.querySelector('#ed-url').value.trim();
        const url = linkSeguro(digitado);
        if (digitado && !url) { U.aviso('O link precisa começar com https://'); return; }
        curso.url = url;
        App.store.salvar();
        U.aviso('Link salvo');
        telaCurso(el, curso);
      } else if (acao.dataset.acao === 'excluir') {
        if (!confirm(`Excluir o curso "${curso.nome}" e a lista de aulas? As notas do caderno continuam.`)) return;
        estado.cursos = estado.cursos.filter((c) => c !== curso);
        App.store.salvar();
        location.hash = '#cursos';
      }
    };
  }

  function render(el, param) {
    const estado = App.store.get();
    const curso = param && estado.cursos.find((c) => c.id === param);
    if (curso) telaCurso(el, curso); else telaLista(el);
  }

  return { render, proximaDaMateria, marcarAula, lerAulas, linkSeguro, progresso, cursoDoPlano, titulo: 'Meus cursos', aba: 'assuntos' };
})();
