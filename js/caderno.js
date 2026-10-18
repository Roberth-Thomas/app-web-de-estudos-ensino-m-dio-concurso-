/* =========================================================
   caderno.js — regras do caderno de anotações ("caderno neural")
   As notas são Markdown, no mesmo jeito do Obsidian:
     [[Título]]  liga a outra nota (ou a um tópico do app, pelo nome)
     [[Título|texto]] liga mostrando outro texto
     #tag        agrupa notas por assunto
   Aqui ficam: achar links e tags, notas que citam uma nota,
   o Markdown para HTML, a exportação para o Obsidian e o .zip.

   Formato de cada nota (estado.notas):
   { id, titulo, texto, assunto: idDoTópico | null, criadaEm, atualizadaEm }  // datas em ISO completo
   ========================================================= */
App.caderno = (function () {
  const U = App.util;

  /* ---------- Links e tags ---------- */

  /** Títulos citados com [[...]] (sem o "|texto"), sem repetir */
  function links(texto) {
    const achados = [];
    (texto || '').replace(/\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g, (_, alvo) => { achados.push(alvo.trim()); return _; });
    return [...new Set(achados)];
  }

  /** #tags do texto (não confunde com títulos "# Assim", que têm espaço depois do #) */
  function tags(texto) {
    const achadas = [];
    (texto || '').replace(/(^|\s)#([\p{L}\d_\/-]+)/gu, (_, antes, tag) => { achadas.push(tag.toLowerCase()); return _; });
    return [...new Set(achadas)];
  }

  const igual = (a, b) => a.trim().toLowerCase() === b.trim().toLowerCase();

  /** Para onde aponta um [[título]]: uma nota, um tópico do app ou nada (nota ainda não criada) */
  function resolver(estado, titulo) {
    const nota = estado.notas.find((n) => igual(n.titulo, titulo));
    if (nota) return { tipo: 'nota', nota };
    const assunto = estado.assuntos.find((a) => igual(a.titulo, titulo));
    if (assunto) return { tipo: 'topico', assunto };
    return null;
  }

  /** Notas que citam esta nota (o "backlink" do Obsidian) */
  function citadaPor(estado, nota) {
    return estado.notas.filter((n) => n.id !== nota.id && links(n.texto).some((l) => igual(l, nota.titulo)));
  }

  /** Notas ligadas a um tópico: pelo campo "assunto" ou citando o tópico com [[...]] */
  function notasDoTopico(estado, assunto) {
    return estado.notas.filter((n) => n.assunto === assunto.id || links(n.texto).some((l) => igual(l, assunto.titulo)));
  }

  /* ---------- Criar e salvar ---------- */

  function nova(estado, dados = {}) {
    const agora = new Date().toISOString();
    const nota = { id: U.novoId(), titulo: dados.titulo || 'Nota sem título', texto: dados.texto || '', assunto: dados.assunto || null, criadaEm: agora, atualizadaEm: agora };
    estado.notas.push(nota);
    return nota;
  }

  /** Título livre (não repete o de outra nota), para os [[links]] não ficarem ambíguos */
  function tituloLivre(estado, desejado, ignorarId) {
    let titulo = desejado.trim() || 'Nota sem título';
    let n = 2;
    const base = titulo;
    while (estado.notas.some((x) => x.id !== ignorarId && igual(x.titulo, titulo))) titulo = base + ' ' + n++;
    return titulo;
  }

  /* ---------- Markdown → HTML (o básico que o Obsidian também entende) ---------- */
  function inline(texto) {
    return texto
      .replace(/\[\[([^\]|]+)(?:\|([^\]]*))?\]\]/g, (_, alvo, mostrado) =>
        `<a href="#" class="link-nota" data-link="${alvo.trim()}">${(mostrado || alvo).trim()}</a>`)
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/(^|[^\w*])\*([^*\n]+)\*/g, '$1<em>$2</em>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/(^|\s)#([\p{L}\d_\/-]+)/gu, '$1<span class="tag-nota" data-tag="$2">#$2</span>');
  }

  /** Converte o Markdown da nota. O texto é escapado antes, então HTML digitado não vira código. */
  function paraHtml(texto) {
    const linhas = U.esc(texto || '').split('\n');
    const saida = [];
    let lista = null; // 'ul' | 'ol' | null
    const fecharLista = () => { if (lista) { saida.push(`</${lista}>`); lista = null; } };
    linhas.forEach((linha) => {
      let m;
      if ((m = linha.match(/^(#{1,4})\s+(.*)$/))) {
        fecharLista();
        const n = Math.min(m[1].length + 1, 5);
        saida.push(`<h${n}>${inline(m[2])}</h${n}>`);
      } else if ((m = linha.match(/^\s*[-*]\s+(?:\[( |x)\]\s+)?(.*)$/))) {
        if (lista !== 'ul') { fecharLista(); saida.push('<ul>'); lista = 'ul'; }
        const caixa = m[1] === undefined ? '' : (m[1] === 'x' ? '☑️ ' : '⬜ ');
        saida.push(`<li>${caixa}${inline(m[2])}</li>`);
      } else if ((m = linha.match(/^\s*\d+[.)]\s+(.*)$/))) {
        if (lista !== 'ol') { fecharLista(); saida.push('<ol>'); lista = 'ol'; }
        saida.push(`<li>${inline(m[1])}</li>`);
      } else if ((m = linha.match(/^&gt;\s?(.*)$/))) {
        fecharLista();
        saida.push(`<blockquote>${inline(m[1])}</blockquote>`);
      } else if (!linha.trim()) {
        fecharLista();
      } else {
        fecharLista();
        saida.push(`<p>${inline(linha)}</p>`);
      }
    });
    fecharLista();
    return saida.join('\n');
  }

  /* ---------- Exportação para o Obsidian ---------- */

  /** Nome de arquivo aceito no Windows, Android e Obsidian */
  function nomeArquivo(titulo) {
    return titulo.replace(/[\\/:*?"<>|#^[\]]/g, '-').replace(/\s+/g, ' ').trim().slice(0, 120) || 'Sem título';
  }

  const aspas = (t) => '"' + String(t).replace(/"/g, '\\"') + '"';

  /**
   * Monta os arquivos .md de um cofre do Obsidian:
   *   Caderno/<Matéria ou Geral>/<nota>.md  (cabeçalho YAML + texto)
   *   Tópicos/<Matéria>/<tópico>.md         (um por tópico citado, com as notas dele)
   *   Caderno/Início.md                     (índice por matéria)
   * Devolve [{ caminho, conteudo }].
   */
  function arquivosObsidian(estado, enderecoApp) {
    const D = App.dados;
    const nomeMateria = (id) => (D.materias.find((m) => m.id === id) || { nome: 'Geral' }).nome;
    const arquivos = [];
    const topicosCitados = new Map();
    const titulosDeTopico = new Set(estado.assuntos.map((a) => a.titulo.toLowerCase()));
    // Nota com o mesmo nome de um tópico ganha " (nota)", para o Obsidian não confundir os dois
    const nomeDaNota = (n) => nomeArquivo(titulosDeTopico.has(n.titulo.toLowerCase()) ? n.titulo + ' (nota)' : n.titulo);

    estado.notas.forEach((n) => {
      const assunto = estado.assuntos.find((a) => a.id === n.assunto) || null;
      const materia = assunto ? nomeMateria(assunto.materia) : 'Geral';
      if (assunto) topicosCitados.set(assunto.id, assunto);
      links(n.texto).forEach((l) => { const r = resolver(estado, l); if (r && r.tipo === 'topico') topicosCitados.set(r.assunto.id, r.assunto); });
      const cabecalho = [
        '---',
        'titulo: ' + aspas(n.titulo),
        'materia: ' + aspas(materia),
        assunto ? 'topico: ' + aspas('[[' + nomeArquivo(assunto.titulo) + ']]') : null,
        'tags: [' + ['estudos'].concat(tags(n.texto)).map(aspas).join(', ') + ']',
        'criado: ' + n.criadaEm,
        'atualizado: ' + n.atualizadaEm,
        'origem: EstudosAPP',
        '---',
      ].filter(Boolean).join('\n');
      // Links para notas renomeadas com " (nota)" continuam funcionando
      const texto = n.texto.replace(/\[\[([^\]|]+)(\|[^\]]*)?\]\]/g, (inteiro, alvo, mostrado) => {
        const r = resolver(estado, alvo);
        if (r && r.tipo === 'nota' && nomeDaNota(r.nota) !== nomeArquivo(r.nota.titulo)) return `[[${nomeDaNota(r.nota)}${mostrado || '|' + alvo}]]`;
        return inteiro;
      });
      arquivos.push({ caminho: `Caderno/${nomeArquivo(materia)}/${nomeDaNota(n)}.md`, conteudo: cabecalho + '\n\n# ' + n.titulo + '\n\n' + texto + '\n' });
    });

    topicosCitados.forEach((a) => {
      const notas = notasDoTopico(estado, a);
      arquivos.push({
        caminho: `Tópicos/${nomeArquivo(nomeMateria(a.materia))}/${nomeArquivo(a.titulo)}.md`,
        conteudo: ['---', 'tipo: topico', 'materia: ' + aspas(nomeMateria(a.materia)), 'tags: ["estudos/topico"]', '---', '',
          '# ' + a.titulo, '', `Tópico de ${nomeMateria(a.materia)} · fase ${a.fase}` + (a.estudado ? ' · estudado ✅' : ''),
          enderecoApp ? `[Abrir no app](${enderecoApp}#estudar/${a.id})` : '', '', '## Minhas notas',
          ...notas.map((n) => `- [[${nomeDaNota(n)}]]`), ''].join('\n'),
      });
    });

    const porMateria = {};
    estado.notas.forEach((n) => {
      const a = estado.assuntos.find((x) => x.id === n.assunto);
      (porMateria[a ? nomeMateria(a.materia) : 'Geral'] = porMateria[a ? nomeMateria(a.materia) : 'Geral'] || []).push(n);
    });
    arquivos.push({
      caminho: 'Caderno/Início.md',
      conteudo: ['# Caderno de estudos', '', `Exportado do EstudosAPP em ${new Date().toLocaleString('pt-BR')}.`, '',
        ...Object.keys(porMateria).sort().flatMap((m) => ['## ' + m, ...porMateria[m].map((n) => `- [[${nomeDaNota(n)}]]`), '']), ''].join('\n'),
    });
    return arquivos;
  }

  /* ---------- .zip sem compressão (formato "store"), sem biblioteca ---------- */
  const TABELA_CRC = (() => {
    const t = new Uint32Array(256);
    for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; }
    return t;
  })();
  function crc32(bytes) {
    let c = 0xFFFFFFFF;
    for (let i = 0; i < bytes.length; i++) c = TABELA_CRC[(c ^ bytes[i]) & 0xFF] ^ (c >>> 8);
    return (c ^ 0xFFFFFFFF) >>> 0;
  }

  /** [{ caminho, conteudo }] → bytes de um arquivo .zip (Uint8Array) */
  function zip(arquivos) {
    const enc = new TextEncoder();
    const partes = [];
    const central = [];
    let posicao = 0;
    const agora = new Date();
    const hora = (agora.getHours() << 11) | (agora.getMinutes() << 5) | (agora.getSeconds() >> 1);
    const data = ((agora.getFullYear() - 1980) << 9) | ((agora.getMonth() + 1) << 5) | agora.getDate();
    arquivos.forEach((a) => {
      const nome = enc.encode(a.caminho);
      const dados = enc.encode(a.conteudo);
      const crc = crc32(dados);
      const local = new DataView(new ArrayBuffer(30));
      [[0, 0x04034b50, 4], [4, 20, 2], [6, 0x0800, 2], [8, 0, 2], [10, hora, 2], [12, data, 2], [14, crc, 4],
        [18, dados.length, 4], [22, dados.length, 4], [26, nome.length, 2], [28, 0, 2]]
        .forEach(([o, v, t]) => (t === 4 ? local.setUint32(o, v, true) : local.setUint16(o, v, true)));
      const cab = new DataView(new ArrayBuffer(46));
      [[0, 0x02014b50, 4], [4, 20, 2], [6, 20, 2], [8, 0x0800, 2], [10, 0, 2], [12, hora, 2], [14, data, 2], [16, crc, 4],
        [20, dados.length, 4], [24, dados.length, 4], [28, nome.length, 2], [30, 0, 2], [32, 0, 2], [34, 0, 2], [36, 0, 2],
        [38, 0, 4], [42, posicao, 4]]
        .forEach(([o, v, t]) => (t === 4 ? cab.setUint32(o, v, true) : cab.setUint16(o, v, true)));
      partes.push(new Uint8Array(local.buffer), nome, dados);
      central.push(new Uint8Array(cab.buffer), nome);
      posicao += 30 + nome.length + dados.length;
    });
    const tamanhoCentral = central.reduce((s, p) => s + p.length, 0);
    const fim = new DataView(new ArrayBuffer(22));
    [[0, 0x06054b50, 4], [4, 0, 2], [6, 0, 2], [8, arquivos.length, 2], [10, arquivos.length, 2], [12, tamanhoCentral, 4], [16, posicao, 4], [20, 0, 2]]
      .forEach(([o, v, t]) => (t === 4 ? fim.setUint32(o, v, true) : fim.setUint16(o, v, true)));
    const todas = partes.concat(central, [new Uint8Array(fim.buffer)]);
    const saida = new Uint8Array(todas.reduce((s, p) => s + p.length, 0));
    let i = 0;
    todas.forEach((p) => { saida.set(p, i); i += p.length; });
    return saida;
  }

  return { links, tags, resolver, citadaPor, notasDoTopico, nova, tituloLivre, paraHtml, nomeArquivo, arquivosObsidian, zip, crc32 };
})();
