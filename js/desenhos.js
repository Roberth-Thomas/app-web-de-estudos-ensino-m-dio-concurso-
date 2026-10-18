/* =========================================================
   desenhos.js — personagens das tirinhas desenhados em SVG
   Cada personagem é montado com formas simples (círculos e
   caminhos) e um contorno escuro, no estilo de tirinha de jornal.
   O rosto muda conforme a expressão:
     neutro · feliz · bravo · surpreso · pensativo · grito
   Uso: App.desenhos.personagem('lia', 'feliz') → texto SVG
   ========================================================= */
App.desenhos = (function () {
  const TRACO = '#1f1b16';     // cor do contorno
  const PELE = '#f6c9a0';
  const EXPRESSOES = ['neutro', 'feliz', 'bravo', 'surpreso', 'pensativo', 'grito'];

  /* ---------- Rosto ---------- */
  function olhos(exp, lx, rx, y, escala = 1) {
    const r = 3 * escala;
    const ponto = (x, yy, raio) => `<circle cx="${x}" cy="${yy}" r="${raio}" fill="${TRACO}"/>`;
    switch (exp) {
      case 'feliz': // olhos fechados de alegria: ^ ^
        return [lx, rx].map((x) => `<path d="M${x - 4 * escala} ${y + 1} Q${x} ${y - 5 * escala} ${x + 4 * escala} ${y + 1}" fill="none" stroke="${TRACO}" stroke-width="2.2" stroke-linecap="round"/>`).join('');
      case 'surpreso':
        return [lx, rx].map((x) => `<circle cx="${x}" cy="${y}" r="${5 * escala}" fill="#fff" stroke="${TRACO}" stroke-width="1.8"/>${ponto(x, y, 2 * escala)}`).join('')
          + [lx, rx].map((x) => `<path d="M${x - 5 * escala} ${y - 9 * escala} Q${x} ${y - 13 * escala} ${x + 5 * escala} ${y - 9 * escala}" fill="none" stroke="${TRACO}" stroke-width="2" stroke-linecap="round"/>`).join('');
      case 'bravo': // sobrancelhas descendo para o centro
        return ponto(lx, y + 1, r) + ponto(rx, y + 1, r)
          + `<path d="M${lx - 6 * escala} ${y - 7 * escala} L${lx + 4 * escala} ${y - 3 * escala}" stroke="${TRACO}" stroke-width="2.6" stroke-linecap="round"/>`
          + `<path d="M${rx + 6 * escala} ${y - 7 * escala} L${rx - 4 * escala} ${y - 3 * escala}" stroke="${TRACO}" stroke-width="2.6" stroke-linecap="round"/>`;
      case 'pensativo': // olhando para cima e para o lado
        return ponto(lx + 2 * escala, y - 2 * escala, r) + ponto(rx + 2 * escala, y - 2 * escala, r)
          + `<path d="M${lx - 5 * escala} ${y - 8 * escala} L${lx + 4 * escala} ${y - 9 * escala}" stroke="${TRACO}" stroke-width="2" stroke-linecap="round"/>`;
      case 'grito':
        return ponto(lx, y, r * 1.2) + ponto(rx, y, r * 1.2)
          + [lx, rx].map((x) => `<path d="M${x - 5 * escala} ${y - 8 * escala} Q${x} ${y - 13 * escala} ${x + 5 * escala} ${y - 8 * escala}" fill="none" stroke="${TRACO}" stroke-width="2.4" stroke-linecap="round"/>`).join('');
      default:
        return ponto(lx, y, r) + ponto(rx, y, r);
    }
  }

  function boca(exp, x, y, escala = 1) {
    const s = escala;
    switch (exp) {
      case 'feliz': return `<path d="M${x - 8 * s} ${y - 2} Q${x} ${y + 9 * s} ${x + 8 * s} ${y - 2} Z" fill="#7f1d1d" stroke="${TRACO}" stroke-width="2" stroke-linejoin="round"/>`;
      case 'surpreso': return `<ellipse cx="${x}" cy="${y + 2}" rx="${3.5 * s}" ry="${4.5 * s}" fill="#7f1d1d" stroke="${TRACO}" stroke-width="2"/>`;
      case 'bravo': return `<path d="M${x - 7 * s} ${y + 4 * s} Q${x} ${y - 3 * s} ${x + 7 * s} ${y + 4 * s}" fill="none" stroke="${TRACO}" stroke-width="2.4" stroke-linecap="round"/>`;
      case 'pensativo': return `<path d="M${x - 1 * s} ${y + 1} L${x + 7 * s} ${y - 1}" stroke="${TRACO}" stroke-width="2.2" stroke-linecap="round"/>`;
      case 'grito': return `<path d="M${x - 9 * s} ${y - 3} Q${x} ${y - 6} ${x + 9 * s} ${y - 3} Q${x + 8 * s} ${y + 12 * s} ${x} ${y + 12 * s} Q${x - 8 * s} ${y + 12 * s} ${x - 9 * s} ${y - 3} Z" fill="#7f1d1d" stroke="${TRACO}" stroke-width="2"/>`;
      default: return `<path d="M${x - 5 * s} ${y + 1} Q${x} ${y + 4 * s} ${x + 5 * s} ${y + 1}" fill="none" stroke="${TRACO}" stroke-width="2.2" stroke-linecap="round"/>`;
    }
  }

  /* ---------- Corpos ---------- */

  /** Criança: cabeça grande (proporção de tirinha), corpo pequeno */
  function crianca({ roupa, calca, cabelo, frente = '', exp, acessorio = '' }) {
    return `
      <rect x="39" y="126" width="8" height="28" rx="3" fill="${calca}" stroke="${TRACO}" stroke-width="2"/>
      <rect x="53" y="126" width="8" height="28" rx="3" fill="${calca}" stroke="${TRACO}" stroke-width="2"/>
      <ellipse cx="42" cy="156" rx="8" ry="4" fill="${TRACO}"/><ellipse cx="58" cy="156" rx="8" ry="4" fill="${TRACO}"/>
      <path d="M40 86 L27 114" stroke="${PELE}" stroke-width="7" stroke-linecap="round"/>
      <path d="M60 86 L73 114" stroke="${PELE}" stroke-width="7" stroke-linecap="round"/>
      <path d="M31 130 L39 78 Q50 74 61 78 L69 130 Z" fill="${roupa}" stroke="${TRACO}" stroke-width="2" stroke-linejoin="round"/>
      ${frente}
      <circle cx="50" cy="45" r="28" fill="${PELE}" stroke="${TRACO}" stroke-width="2"/>
      ${cabelo}
      <circle cx="35" cy="56" r="4" fill="#f4a3a3" opacity=".6"/><circle cx="65" cy="56" r="4" fill="#f4a3a3" opacity=".6"/>
      ${olhos(exp, 41, 59, 47)}
      ${boca(exp, 50, 60)}
      ${acessorio}`;
  }

  /** Adulto: mais alto, cabeça menor */
  function adulto({ roupa, calca, cabelo, frente = '', exp, acessorio = '' }) {
    return `
      <rect x="39" y="118" width="9" height="38" rx="3" fill="${calca}" stroke="${TRACO}" stroke-width="2"/>
      <rect x="52" y="118" width="9" height="38" rx="3" fill="${calca}" stroke="${TRACO}" stroke-width="2"/>
      <ellipse cx="42" cy="158" rx="9" ry="4" fill="${TRACO}"/><ellipse cx="58" cy="158" rx="9" ry="4" fill="${TRACO}"/>
      <path d="M36 66 L24 104" stroke="${PELE}" stroke-width="8" stroke-linecap="round"/>
      <path d="M64 66 L76 104" stroke="${PELE}" stroke-width="8" stroke-linecap="round"/>
      <path d="M32 122 L35 60 Q50 54 65 60 L68 122 Z" fill="${roupa}" stroke="${TRACO}" stroke-width="2" stroke-linejoin="round"/>
      ${frente}
      <circle cx="50" cy="32" r="21" fill="${PELE}" stroke="${TRACO}" stroke-width="2"/>
      ${cabelo}
      ${olhos(exp, 43, 57, 33, 0.85)}
      ${boca(exp, 50, 43, 0.85)}
      ${acessorio}`;
  }

  /* ---------- Cada personagem ---------- */
  const PERSONAGENS = {
    // Lia: cabelo preto em "chanel" com franja, vestido vermelho
    lia: (exp) => crianca({
      exp, roupa: '#dc2626', calca: '#f6c9a0',
      cabelo: `<path d="M21 52 Q18 13 50 13 Q82 13 79 52 L79 64 Q75 67 72 60 L72 38 Q60 31 50 34 Q40 31 28 38 L28 60 Q25 67 21 64 Z" fill="#231a15" stroke="${TRACO}" stroke-width="2" stroke-linejoin="round"/>
              <path d="M70 18 q8 -6 12 2" fill="none" stroke="#2563eb" stroke-width="5" stroke-linecap="round"/>`,
    }),
    // Tito: cabelo arrepiado, fone de gamer, moletom verde
    tito: (exp) => crianca({
      exp, roupa: '#16a34a', calca: '#1d4ed8',
      frente: `<path d="M44 92 L56 92 L55 104 L45 104 Z" fill="#15803d" stroke="${TRACO}" stroke-width="1.5"/>`,
      cabelo: `<path d="M22 46 L25 25 L33 32 L37 14 L45 27 L51 10 L57 27 L65 14 L68 32 L76 25 L78 46 Q65 33 50 33 Q35 33 22 46 Z" fill="#6b3e1f" stroke="${TRACO}" stroke-width="2" stroke-linejoin="round"/>`,
      acessorio: `<path d="M19 50 Q18 8 50 8 Q82 8 81 50" fill="none" stroke="#334155" stroke-width="5"/>
                  <rect x="13" y="40" width="10" height="18" rx="4" fill="#e11d48" stroke="${TRACO}" stroke-width="2"/>
                  <rect x="77" y="40" width="10" height="18" rx="4" fill="#e11d48" stroke="${TRACO}" stroke-width="2"/>`,
    }),
    mae: (exp) => adulto({
      exp, roupa: '#7c3aed', calca: '#374151',
      cabelo: `<path d="M27 40 Q25 8 50 9 Q75 8 73 40 L76 72 Q68 76 66 64 L66 30 Q56 22 44 26 Q36 29 34 36 L34 64 Q32 76 24 72 Z" fill="#7c4a24" stroke="${TRACO}" stroke-width="2" stroke-linejoin="round"/>`,
      acessorio: `<circle cx="29" cy="40" r="2.5" fill="#facc15" stroke="${TRACO}"/><circle cx="71" cy="40" r="2.5" fill="#facc15" stroke="${TRACO}"/>`,
    }),
    pai: (exp) => adulto({
      exp, roupa: '#0ea5e9', calca: '#78350f',
      cabelo: `<path d="M29 30 Q30 9 50 10 Q70 9 71 30 Q64 20 50 21 Q36 20 29 30 Z" fill="#3f2a1d" stroke="${TRACO}" stroke-width="2"/>`,
      acessorio: `<path d="M42 39 Q50 35 58 39 Q50 42 42 39 Z" fill="#3f2a1d"/>`,
    }),
    vendedor: (exp) => adulto({
      exp, roupa: '#f8fafc', calca: '#1f2937',
      frente: `<path d="M47 60 L53 60 L55 92 L50 98 L45 92 Z" fill="#dc2626" stroke="${TRACO}" stroke-width="1.5"/>
               <rect x="57" y="72" width="9" height="6" rx="1" fill="#facc15" stroke="${TRACO}" stroke-width="1"/>`,
      cabelo: `<path d="M29 28 Q32 8 52 10 Q70 11 71 28 L64 22 Q52 16 38 22 Z" fill="#111827" stroke="${TRACO}" stroke-width="2"/>`,
    }),
    // Pipoca: gata laranja listrada, sentada
    pipoca: (exp) => `
      <path d="M74 150 Q98 140 90 112 Q86 102 80 108" fill="none" stroke="${TRACO}" stroke-width="9" stroke-linecap="round"/>
      <path d="M74 150 Q98 140 90 112 Q86 102 80 108" fill="none" stroke="#f59e0b" stroke-width="5" stroke-linecap="round"/>
      <ellipse cx="50" cy="138" rx="28" ry="24" fill="#f59e0b" stroke="${TRACO}" stroke-width="2"/>
      <path d="M40 120 q3 8 0 16 M50 117 q3 8 0 18 M60 120 q3 8 0 16" fill="none" stroke="#b45309" stroke-width="3" stroke-linecap="round"/>
      <ellipse cx="40" cy="160" rx="8" ry="4" fill="#fde68a" stroke="${TRACO}" stroke-width="1.5"/>
      <ellipse cx="60" cy="160" rx="8" ry="4" fill="#fde68a" stroke="${TRACO}" stroke-width="1.5"/>
      <path d="M30 96 L33 70 L48 84 Z M70 96 L67 70 L52 84 Z" fill="#f59e0b" stroke="${TRACO}" stroke-width="2" stroke-linejoin="round"/>
      <path d="M35 88 L36 77 L43 84 Z M65 88 L64 77 L57 84 Z" fill="#fca5a5"/>
      <circle cx="50" cy="100" r="22" fill="#f59e0b" stroke="${TRACO}" stroke-width="2"/>
      <ellipse cx="50" cy="108" rx="11" ry="8" fill="#fde68a"/>
      ${olhos(exp, 42, 58, 97, 0.9)}
      <path d="M47 104 L53 104 L50 108 Z" fill="#ec4899"/>
      ${exp === 'grito' || exp === 'surpreso' || exp === 'feliz' ? boca(exp, 50, 111, 0.6) : `<path d="M45 112 Q50 116 50 109 Q50 116 55 112" fill="none" stroke="${TRACO}" stroke-width="1.6" stroke-linecap="round"/>`}
      <path d="M28 104 L40 106 M28 110 L40 109 M72 104 L60 106 M72 110 L60 109" stroke="${TRACO}" stroke-width="1.2"/>`,
  };

  /** SVG completo do personagem (ou null se não houver desenho, ex.: a placa) */
  function personagem(quem, expressao = 'neutro') {
    const desenhar = PERSONAGENS[quem];
    if (!desenhar) return null;
    const exp = EXPRESSOES.includes(expressao) ? expressao : 'neutro';
    return `<svg class="figura" viewBox="0 0 100 165" role="img" aria-hidden="true">${desenhar(exp)}</svg>`;
  }

  return { personagem, EXPRESSOES, desenhados: Object.keys(PERSONAGENS) };
})();
