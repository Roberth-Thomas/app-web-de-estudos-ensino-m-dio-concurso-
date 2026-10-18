/* =========================================================
   telas/caderno.js — caderno de anotações ligadas entre si
   Rotas:
     #caderno               → lista de notas, busca e tags
     #caderno/<id>          → escrever / ler uma nota
     #caderno/novo          → nota nova
     #caderno/topico:<id>   → abre (ou cria) a nota de um tópico
     #caderno/mapa          → mapa das ligações entre notas e tópicos
   As notas viajam junto com o progresso (save do Drive) e podem ir
   para o Obsidian: .zip com os .md ou pasta visível no Google Drive.
   ========================================================= */
App.telas = App.telas || {};

App.telas.caderno = (function () {
  const U = App.util;
  const D = App.dados;
  const C = App.caderno;
  let timerNota = null;
  let busca = { texto: '', tag: null };
  let modoLeitura = false;

  function rotuloTopico(estado, nota) {
    const a = estado.assuntos.find((x) => x.id === nota.assunto);
    return a ? `${D.materia(a.materia).emoji} ${U.esc(a.titulo)}` : '🗒️ Geral';
  }

  /* ---------- Lista ---------- */
  function telaLista(el) {
    const estado = App.store.get();
    const todasTags = [...new Set(estado.notas.flatMap((n) => C.tags(n.texto)))].sort();
    const termo = busca.texto.trim().toLowerCase();
    const notas = estado.notas
      .filter((n) => !busca.tag || C.tags(n.texto).includes(busca.tag))
      .filter((n) => !termo || (n.titulo + ' ' + n.texto).toLowerCase().includes(termo))
      .sort((a, b) => (a.atualizadaEm < b.atualizadaEm ? 1 : -1));

    const lista = notas.map((n) => {
      const ligacoes = C.links(n.texto).length + C.citadaPor(estado, n).length;
      const trecho = n.texto.replace(/[#*>[\]`]/g, '').replace(/\s+/g, ' ').slice(0, 110);
      return `
        <a class="cartao nota-cartao" href="#caderno/${U.esc(n.id)}">
          <strong>${U.esc(n.titulo)}</strong>
          <div class="suave pequeno">${rotuloTopico(estado, n)} · ${new Date(n.atualizadaEm).toLocaleDateString('pt-BR')}${ligacoes ? ` · 🔗 ${ligacoes}` : ''}</div>
          ${trecho ? `<div class="pequeno" style="margin-top:.3rem">${U.esc(trecho)}${n.texto.length > 110 ? '…' : ''}</div>` : ''}
        </a>`;
    }).join('');

    el.innerHTML = `
      <section class="cartao">
        <div class="linha entre"><h1 style="margin:0">📓 Caderno</h1>
          <a class="botao primario" href="#caderno/novo">➕ Nova nota</a></div>
        <p class="suave pequeno">Anotações ligadas entre si, como no Obsidian: <code>[[Título]]</code> liga a outra nota ou a um tópico,
          <code>#tag</code> agrupa. Dentro de um tópico, use o botão <strong>📝 Anotar</strong>.</p>
        <div class="linha" style="margin-top:.6rem">
          <a class="botao pequeno" href="#caderno/mapa">🕸️ Mapa das ligações</a>
          <button class="botao pequeno" data-acao="zip" ${estado.notas.length ? '' : 'disabled'}>⬇️ Obsidian (.zip)</button>
          <button class="botao pequeno" data-acao="drive" ${estado.notas.length ? '' : 'disabled'}>☁️ Enviar ao Drive</button>
        </div>
        <div id="saida-exportacao" class="suave pequeno" aria-live="polite"></div>
        <label class="oculto-visual" for="busca-notas">Buscar nas notas</label>
        <input id="busca-notas" type="search" placeholder="🔎 Buscar nas notas…" value="${U.esc(busca.texto)}" style="margin-top:.6rem">
        ${todasTags.length ? `<div class="pilulas" style="margin-top:.5rem">${todasTags.map((t) =>
          `<button class="pilula ${busca.tag === t ? 'ativa' : ''}" data-tag-filtro="${U.esc(t)}">#${U.esc(t)}</button>`).join('')}</div>` : ''}
      </section>
      ${lista ? `<div class="grade grade-2">${lista}</div>`
        : `<p class="suave">${estado.notas.length ? 'Nenhuma nota encontrada.' : 'Nenhuma nota ainda. Comece por um tópico que você está estudando.'}</p>`}`;
  }

  /* ---------- Uma nota ---------- */
  function telaNota(el, nota) {
    const estado = App.store.get();
    const opcoesTopico = D.materias.map((m) => `<optgroup label="${U.esc(m.nome)}">${
      estado.assuntos.filter((a) => a.materia === m.id).map((a) =>
        `<option value="${a.id}" ${nota.assunto === a.id ? 'selected' : ''}>${U.esc(a.titulo)}</option>`).join('')}</optgroup>`).join('');
    const assunto = estado.assuntos.find((a) => a.id === nota.assunto);

    el.innerHTML = `
      <section class="cartao">
        <div class="linha entre">
          <a href="#caderno" class="pequeno">← Caderno</a>
          <button class="botao pequeno" data-acao="modo">${modoLeitura ? '✏️ Editar' : '👁️ Ver formatado'}</button>
        </div>
        <label class="oculto-visual" for="nota-titulo">Título</label>
        <input id="nota-titulo" class="nota-titulo" value="${U.esc(nota.titulo)}" placeholder="Título da nota">
        <div class="campo" style="margin:.5rem 0">
          <label for="nota-topico" class="pequeno">Tópico</label>
          <select id="nota-topico"><option value="">Nenhum (nota geral)</option>${opcoesTopico}</select>
          ${assunto && D.conteudos[assunto.id] ? `<a class="pequeno" href="#estudar/${assunto.id}">📖 Abrir o tópico</a>` : ''}
        </div>
        <div id="nota-corpo">${corpoNota(nota)}</div>
        <p class="suave pequeno">Salva sozinha. Markdown: <code># título</code>, <code>**negrito**</code>, <code>- lista</code>, <code>- [ ] tarefa</code>,
          <code>&gt; citação</code>, <code>[[outra nota]]</code>, <code>#tag</code>.</p>
      </section>
      <section class="cartao" id="nota-ligacoes">${ligacoes(nota)}</section>
      <button class="botao perigo pequeno" data-acao="apagar">Apagar nota</button>`;
  }

  function corpoNota(nota) {
    return modoLeitura
      ? `<div class="nota-formatada">${C.paraHtml(nota.texto) || '<p class="suave">Nota vazia.</p>'}</div>`
      : `<label class="oculto-visual" for="nota-texto">Texto</label>
         <textarea id="nota-texto" class="nota-texto" placeholder="Escreva com suas palavras. Ligue ideias com [[...]].">${U.esc(nota.texto)}</textarea>`;
  }

  /** Links desta nota e notas que citam esta */
  function ligacoes(nota) {
    const estado = App.store.get();
    const saindo = C.links(nota.texto).map((titulo) => {
      const r = C.resolver(estado, titulo);
      if (!r) return `<li><a href="#" data-criar="${U.esc(titulo)}">${U.esc(titulo)}</a> <span class="suave pequeno">· ainda não existe, toque para criar</span></li>`;
      if (r.tipo === 'topico') return `<li>📖 <a href="#estudar/${r.assunto.id}">${U.esc(r.assunto.titulo)}</a> <span class="suave pequeno">· tópico</span></li>`;
      return `<li>🗒️ <a href="#caderno/${U.esc(r.nota.id)}">${U.esc(r.nota.titulo)}</a></li>`;
    }).join('');
    const chegando = C.citadaPor(estado, nota).map((n) => `<li>↩️ <a href="#caderno/${U.esc(n.id)}">${U.esc(n.titulo)}</a></li>`).join('');
    return `
      <h2>🔗 Ligações</h2>
      ${saindo ? `<p class="pequeno" style="margin:.3rem 0">Esta nota cita:</p><ul class="estudo-lista">${saindo}</ul>` : ''}
      ${chegando ? `<p class="pequeno" style="margin:.3rem 0">Citada por:</p><ul class="estudo-lista">${chegando}</ul>` : ''}
      ${!saindo && !chegando ? '<p class="suave pequeno">Nenhuma ligação ainda. Escreva [[nome de outra nota ou tópico]] para ligar ideias.</p>' : ''}`;
  }

  /* ---------- Mapa das ligações ---------- */
  // Layout de forças simples: nós se empurram, ligações puxam. Roda uma vez e desenha em SVG.
  function telaMapa(el) {
    const estado = App.store.get();
    const nos = new Map();
    const arestas = [];
    const no = (id, rotulo, tipo, href) => { if (!nos.has(id)) nos.set(id, { id, rotulo, tipo, href }); return id; };
    estado.notas.forEach((n) => {
      const origem = no('n:' + n.id, n.titulo, 'nota', '#caderno/' + n.id);
      const a = estado.assuntos.find((x) => x.id === n.assunto);
      if (a) arestas.push([origem, no('t:' + a.id, a.titulo, 'topico', '#estudar/' + a.id)]);
      C.links(n.texto).forEach((titulo) => {
        const r = C.resolver(estado, titulo);
        if (r && r.tipo === 'nota') arestas.push([origem, no('n:' + r.nota.id, r.nota.titulo, 'nota', '#caderno/' + r.nota.id)]);
        else if (r) arestas.push([origem, no('t:' + r.assunto.id, r.assunto.titulo, 'topico', '#estudar/' + r.assunto.id)]);
      });
    });
    // Uma linha por par: a nota pode pertencer ao tópico e também citá-lo
    const vistas = new Set();
    for (let i = arestas.length - 1; i >= 0; i--) {
      const chave = [...arestas[i]].sort().join('|');
      if (vistas.has(chave) || arestas[i][0] === arestas[i][1]) arestas.splice(i, 1); else vistas.add(chave);
    }
    const lista = [...nos.values()];
    const L = 600, A = 460;
    lista.forEach((n, i) => { const ang = (i / Math.max(1, lista.length)) * Math.PI * 2; n.x = L / 2 + Math.cos(ang) * 150; n.y = A / 2 + Math.sin(ang) * 150; });
    const porId = Object.fromEntries(lista.map((n) => [n.id, n]));
    for (let passo = 0; passo < 300; passo++) {
      lista.forEach((a) => { a.dx = (L / 2 - a.x) * 0.004; a.dy = (A / 2 - a.y) * 0.004; });
      for (let i = 0; i < lista.length; i++) for (let j = i + 1; j < lista.length; j++) {
        const a = lista[i], b = lista[j];
        const vx = a.x - b.x, vy = a.y - b.y, d = Math.max(Math.sqrt(vx * vx + vy * vy), 10);
        const f = 9000 / (d * d); // repulsão: todo par se afasta
        a.dx += (vx / d) * f; a.dy += (vy / d) * f;
        b.dx -= (vx / d) * f; b.dy -= (vy / d) * f;
      }
      arestas.forEach(([x, y]) => { // mola: cada ligação tende a ~120px
        const a = porId[x], b = porId[y];
        const vx = b.x - a.x, vy = b.y - a.y, d = Math.max(Math.sqrt(vx * vx + vy * vy), 1);
        const f = (d - 120) * 0.03;
        a.dx += (vx / d) * f; a.dy += (vy / d) * f; b.dx -= (vx / d) * f; b.dy -= (vy / d) * f;
      });
      lista.forEach((a) => { a.x = Math.min(L - 40, Math.max(40, a.x + a.dx)); a.y = Math.min(A - 20, Math.max(20, a.y + a.dy)); });
    }
    const curto = (t) => (t.length > 22 ? t.slice(0, 21) + '…' : t);
    const svg = lista.length ? `
      <svg class="mapa-notas" viewBox="0 0 ${L} ${A}" role="img" aria-label="Mapa das ligações entre notas e tópicos">
        ${arestas.map(([x, y]) => `<line x1="${porId[x].x}" y1="${porId[x].y}" x2="${porId[y].x}" y2="${porId[y].y}"/>`).join('')}
        ${lista.map((n) => `
          <a href="${U.esc(n.href)}"><g class="no-${n.tipo}">
            <circle cx="${n.x}" cy="${n.y}" r="${n.tipo === 'topico' ? 9 : 7}"/>
            <text x="${n.x}" y="${n.y - 13}" text-anchor="middle">${U.esc(curto(n.rotulo))}</text>
          </g></a>`).join('')}
      </svg>` : '<p class="suave">Crie notas e ligue-as com [[...]] para o mapa aparecer.</p>';
    el.innerHTML = `
      <section class="cartao">
        <a href="#caderno" class="pequeno">← Caderno</a>
        <h1 style="margin-top:.5rem">🕸️ Mapa das ligações</h1>
        <p class="suave pequeno">● nota · <span class="cor-topico">●</span> tópico do app. Toque num ponto para abrir.</p>
        ${svg}
      </section>`;
  }

  /* ---------- Exportar ---------- */
  function enderecoApp() { return location.href.split('#')[0]; }

  function baixarZip() {
    const arquivos = C.arquivosObsidian(App.store.get(), enderecoApp());
    const blob = new Blob([C.zip(arquivos)], { type: 'application/zip' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'caderno-obsidian-' + U.iso(new Date()) + '.zip';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    return arquivos.length;
  }

  /* ---------- Desenho e eventos ---------- */
  function salvarNota(nota) {
    nota.atualizadaEm = new Date().toISOString();
    App.store.salvar();
  }

  function render(el, param) {
    const estado = App.store.get();
    if (param === 'novo') {
      const nota = C.nova(estado, { titulo: C.tituloLivre(estado, 'Nova nota') });
      App.store.salvar();
      modoLeitura = false;
      location.replace('#caderno/' + nota.id);
      return;
    }
    if (param && param.startsWith('topico:')) {
      const assunto = estado.assuntos.find((a) => a.id === param.slice(7));
      let nota = assunto && estado.notas.find((n) => n.assunto === assunto.id);
      if (assunto && !nota) {
        nota = C.nova(estado, { titulo: C.tituloLivre(estado, 'Notas: ' + assunto.titulo), assunto: assunto.id,
          texto: `Sobre [[${assunto.titulo}]]\n\n## O que entendi\n- \n\n## Dúvidas\n- \n\n## Ligações\n- ` });
        App.store.salvar();
      }
      modoLeitura = false;
      location.replace(nota ? '#caderno/' + nota.id : '#caderno');
      return;
    }
    const nota = param && param !== 'mapa' ? estado.notas.find((n) => n.id === param) : null;
    if (param === 'mapa') telaMapa(el);
    else if (nota) telaNota(el, nota);
    else telaLista(el);

    el.oninput = (ev) => {
      if (ev.target.id === 'busca-notas') {
        busca.texto = ev.target.value;
        const pos = ev.target.selectionStart;
        telaLista(el);
        const campo = el.querySelector('#busca-notas');
        campo.focus(); campo.setSelectionRange(pos, pos);
        return;
      }
      if (!nota) return;
      if (ev.target.id === 'nota-texto') nota.texto = ev.target.value;
      else if (ev.target.id === 'nota-titulo') nota.titulo = ev.target.value;
      else return;
      clearTimeout(timerNota);
      timerNota = setTimeout(() => {
        timerNota = null;
        nota.titulo = C.tituloLivre(estado, nota.titulo, nota.id);
        salvarNota(nota);
        el.querySelector('#nota-ligacoes').innerHTML = ligacoes(nota);
      }, 700);
    };

    el.onchange = (ev) => {
      if (nota && ev.target.id === 'nota-topico') {
        nota.assunto = ev.target.value || null;
        salvarNota(nota);
        telaNota(el, nota);
      }
    };

    el.onclick = async (ev) => {
      const tag = ev.target.closest('[data-tag-filtro], .tag-nota');
      if (tag) {
        const t = (tag.dataset.tagFiltro || tag.dataset.tag).toLowerCase();
        busca.tag = busca.tag === t ? null : t;
        if (nota) location.hash = '#caderno'; else telaLista(el);
        return;
      }
      const link = ev.target.closest('.link-nota, [data-criar]');
      if (link) {
        ev.preventDefault();
        const titulo = link.dataset.link || link.dataset.criar;
        const r = C.resolver(estado, titulo);
        if (r && r.tipo === 'nota') location.hash = '#caderno/' + r.nota.id;
        else if (r) location.hash = '#estudar/' + r.assunto.id;
        else {
          const novaNota = C.nova(estado, { titulo: C.tituloLivre(estado, titulo), assunto: nota && nota.assunto, texto: nota ? `Veio de [[${nota.titulo}]]\n\n` : '' });
          App.store.salvar();
          location.hash = '#caderno/' + novaNota.id;
        }
        return;
      }
      const acao = ev.target.closest('[data-acao]');
      if (!acao) return;
      const saida = el.querySelector('#saida-exportacao');
      switch (acao.dataset.acao) {
        case 'modo':
          modoLeitura = !modoLeitura;
          acao.textContent = modoLeitura ? '✏️ Editar' : '👁️ Ver formatado';
          el.querySelector('#nota-corpo').innerHTML = corpoNota(nota);
          break;
        case 'apagar':
          if (confirm('Apagar esta nota? Não dá para desfazer.')) {
            estado.notas = estado.notas.filter((n) => n.id !== nota.id);
            App.store.salvar();
            location.hash = '#caderno';
          }
          break;
        case 'zip':
          saida.textContent = `⬇️ Baixei ${baixarZip()} arquivo(s). Extraia o .zip dentro da pasta do seu cofre do Obsidian.`;
          break;
        case 'drive':
          if (!App.nuvem.disponivel()) {
            saida.innerHTML = '☁️ O envio ao Drive precisa do ID do cliente Google (README, seção 4). Enquanto isso, use o <strong>.zip</strong>.';
            break;
          }
          acao.disabled = true;
          try {
            const total = await App.nuvem.enviarArquivos(C.arquivosObsidian(estado, enderecoApp()),
              (feitos, de) => { saida.textContent = `☁️ Enviando ${feitos} de ${de}…`; });
            saida.textContent = `✅ ${total} arquivo(s) na pasta "EstudosAPP Caderno" do seu Drive. Abra essa pasta como cofre no Obsidian.`;
          } catch (erro) {
            saida.textContent = '⚠️ ' + erro.message;
          }
          acao.disabled = false;
          break;
      }
    };
  }

  /** Ao sair, salva a nota que ainda estava esperando o salvamento automático */
  function sair() {
    if (timerNota) { clearTimeout(timerNota); timerNota = null; App.store.salvar(); }
  }

  return { render, sair, titulo: 'Caderno', aba: 'caderno' };
})();
