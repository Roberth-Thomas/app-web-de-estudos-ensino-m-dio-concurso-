/* =========================================================
   apoio.js — glossário e personagens das tirinhas
   Glossário: nos textos, [[fator]] ou [[os fatores|fator]] vira uma
   palavra sublinhada que mostra a definição ao tocar.
   ========================================================= */
App.dados = App.dados || {};

/** Termos técnicos explicados "do zero" (chave sempre em minúsculas) */
App.dados.glossario = {
  /* ----- Matemática ----- */
  'decimal': 'Número escrito com vírgula, como 0,25. Toda porcentagem pode ser escrita como decimal: é só dividir por 100 (25% = 0,25).',
  'fator': 'Número pelo qual você multiplica um valor para aplicar um aumento ou desconto de uma vez só. Aumento de 10% → fator 1,10. Desconto de 10% → fator 0,90.',
  'base': 'O valor de referência sobre o qual a porcentagem é calculada: "20% de QUÊ?". Numa variação, a base é sempre o valor antigo.',
  'variação percentual': 'Quanto um valor mudou, medido em relação ao valor antigo: (novo − antigo) ÷ antigo × 100.',
  'ponto percentual': 'A diferença simples entre duas porcentagens. De 10% para 12% são 2 pontos percentuais (e um aumento relativo de 20%).',
  'sucessivas': 'Porcentagens aplicadas uma depois da outra, cada uma sobre o resultado da anterior. Os fatores se multiplicam.',
  'inflação': 'O aumento geral dos preços ao longo do tempo. Com inflação de 6%, o que custava R$ 100 passa a custar, em média, R$ 106.',
  'ipca': 'Índice Nacional de Preços ao Consumidor Amplo: a medida oficial da inflação no Brasil, calculada pelo IBGE.',
  'poder de compra': 'O quanto o seu dinheiro consegue comprar. Se o salário sobe menos que os preços, o poder de compra cai.',

  /* ----- Português ----- */
  'sujeito': 'O termo sobre o qual se declara algo na oração. Em "Os candidatos chegaram", o sujeito é "os candidatos". Dica: pergunte "quem?" ou "o quê?" ao verbo.',
  'verbo': 'A palavra que indica ação, estado ou fenômeno e muda com o tempo e a pessoa: estudar, ser, chover.',
  'complemento': 'Termo que completa o sentido de um verbo ou nome. Em "Ela aprovou o projeto", "o projeto" completa o verbo aprovar.',
  'vocativo': 'O nome de quem está sendo chamado ou interpelado na frase: "**Maria**, venha cá." Sempre vem separado por vírgula.',
  'aposto': 'Um termo que explica outro, logo ao lado dele: "Brasília, **a capital do país**, ..." O aposto explicativo vem entre vírgulas.',
  'adjunto adverbial': 'Termo que indica uma circunstância (tempo, lugar, modo, causa...) da ação: "**ontem**", "**na escola**", "**com calma**".',
  'oração': 'Um trecho da frase organizado em torno de um verbo. "Quando chegar, me avise" tem duas orações (dois verbos: chegar e avisar).',
  'conjunção': 'Palavra que liga orações ou termos e cria uma relação de sentido entre eles: e, mas, porque, embora, portanto.',
  'explicativa': 'Oração que acrescenta uma informação sobre TODO o termo anterior. Vem entre vírgulas: "Os alunos, que estudaram, passaram" (todos estudaram).',
  'restritiva': 'Oração que separa só UMA PARTE do termo anterior. Vem sem vírgulas: "Os alunos que estudaram passaram" (só esses).',
  'zeugma': 'Omissão de uma palavra que já apareceu antes na frase. A vírgula marca o lugar dela: "Eu prefiro café; ela, chá" (= ela prefere chá).',
};

/**
 * Personagens das tirinhas ORIGINAIS deste app (os desenhos estão em js/desenhos.js).
 * (Mafalda e Calvin e Haroldo são obras protegidas por direito autoral:
 *  aqui só são indicadas para você ler no original.)
 */
App.dados.personagens = {
  lia:     { nome: 'Lia', descricao: '9 anos, pergunta tudo e não aceita resposta pronta.' },
  tito:    { nome: 'Tito', descricao: 'Amigo da Lia. Gamer, adora promoção e tecnologia.' },
  pipoca:  { nome: 'Pipoca', descricao: 'A gata da Lia. Só pensa, mas pensa muito.' },
  mae:     { nome: 'Mãe da Lia' },
  pai:     { nome: 'Pai do Tito' },
  vendedor:{ nome: 'Vendedor' },
  placa:   { nome: 'Placa' },
};
