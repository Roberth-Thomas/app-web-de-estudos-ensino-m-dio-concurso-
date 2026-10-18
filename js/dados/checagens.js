/* =========================================================
   checagens.js — extras dos testes "Entendeu?"
   Para cada tópico, uma lista NA MESMA ORDEM dos "Entendeu?"
   que aparecem no texto (js/dados/conteudos.js). Cada item tem:
   - conceito: sobre o que é a pergunta (aparece quando você erra)
   - variacoes: outras perguntas sobre o mesmo ponto, para o botão
     "Outra pergunta parecida"
   O teste testes/validar.js confere se as quantidades batem.
   ========================================================= */
App.dados = App.dados || {};

App.dados.checagensExtras = {

  /* ================= Classes de palavras ================= */
  'portugues-1-0': [
    { // 1. "exigente" → adjetivo
      conceito: 'Reconhecer o **adjetivo**: a palavra que dá uma característica a um substantivo e muda junto com ele (aluno dedicado → alunas dedicadas).',
      variacoes: [
        { pergunta: 'Em "A cidade antiga atrai muitos turistas", a palavra "antiga" é:', opcoes: ['substantivo', 'verbo', 'adjetivo', 'advérbio'], correta: 2,
          explicacao: '"Antiga" dá uma característica a "cidade" e muda junto com ela: "as cidades antig**as**". É **adjetivo**.',
          outraExplicacao: 'Pergunte: "antiga" está colada em algum substantivo, dizendo **como ele é**? Sim, em "cidade". Quem faz isso é o adjetivo.' },
        { pergunta: 'Em "O jogo terminou empatado", qual palavra é **verbo**?', opcoes: ['jogo', 'empatado', 'o', 'terminou'], correta: 3,
          explicacao: '"Terminou" muda com a pessoa e o tempo: termino, terminamos, terminará. Essa é a marca do **verbo**.',
          outraExplicacao: 'Use o teste do "eu / ontem / amanhã": "eu termino", "amanhã terminará". Só "terminou" aceita essas mudanças.' },
      ],
    },
    { // 2. "ela / dois" → pronome e numeral
      conceito: 'Diferenciar **pronome** (substitui ou acompanha o nome), **numeral** (quantidade ou ordem) e **artigo** (o, a, um, uma antes do substantivo).',
      variacoes: [
        { pergunta: 'Em "Meu irmão chegou em primeiro lugar", as palavras "meu" e "primeiro" são, respectivamente:', opcoes: ['artigo e numeral', 'pronome possessivo e numeral', 'pronome e adjetivo', 'numeral e numeral'], correta: 1,
          explicacao: '"Meu" indica de quem é o irmão: **pronome possessivo**. "Primeiro" indica a posição: **numeral** (ordinal).',
          outraExplicacao: '"Meu" responde "de quem?" → posse → pronome. "Primeiro" responde "em que posição?" → numeral.' },
        { pergunta: 'Em "Um aluno pediu ajuda ao professor", a palavra "um" é:', opcoes: ['numeral', 'pronome', 'artigo indefinido', 'substantivo'], correta: 2,
          explicacao: 'Aqui "um" indica **um aluno qualquer**, não a quantidade: é **artigo indefinido**. Seria numeral em "Apenas **um** aluno faltou", em que importa a quantidade.',
          outraExplicacao: 'Troque "um" por "o": "**O** aluno pediu ajuda". A frase continua funcionando, só fica mais específica. Quando "um" faz o papel de "o/a", é artigo.' },
      ],
    },
    { // 3. "cedo" → advérbio
      conceito: 'Reconhecer o **advérbio**: palavra que indica uma circunstância (quando, onde, como, quanto) e **não muda de forma**.',
      variacoes: [
        { pergunta: '"Ela mora longe." A palavra "longe" é:', opcoes: ['adjetivo', 'advérbio de lugar', 'substantivo', 'preposição'], correta: 1,
          explicacao: '"Longe" responde "onde?" ao verbo "mora". É **advérbio de lugar** e não muda: "elas moram longe".',
          outraExplicacao: '"Longe" não fala da pessoa (não é "ela longe"), fala de **onde** ela mora. Palavra que dá uma circunstância ao verbo é advérbio.' },
        { pergunta: 'Em qual frase a palavra "alto" é **advérbio**?', opcoes: ['O prédio é alto.', 'Comprei um banco alto.', 'Ele fala alto.', 'Os muros são altos.'], correta: 2,
          explicacao: 'Em "Ele fala **alto**", a palavra diz **como** ele fala: modifica o verbo. É advérbio e não muda ("Eles falam alto"). Nas outras, "alto" caracteriza um substantivo (adjetivo).',
          outraExplicacao: 'Passe para o plural: "Os prédios são alt**os**" (mudou → adjetivo). "Eles falam alto" (não mudou → advérbio).' },
      ],
    },
    { // 4. "mas" → conjunção
      conceito: 'Diferenciar **preposição** (liga duas palavras) de **conjunção** (liga duas ideias, cada uma com seu verbo).',
      variacoes: [
        { pergunta: 'Em "Saí cedo porque estava chovendo", a palavra "porque" é:', opcoes: ['conjunção', 'preposição', 'advérbio', 'interjeição'], correta: 0,
          explicacao: '"Porque" liga duas ideias ("saí cedo" / "estava chovendo") e mostra a causa. É **conjunção**.',
          outraExplicacao: 'Tem verbo antes ("saí") e verbo depois ("estava")? Sim. Então "porque" liga ideias, e quem liga ideias é a conjunção.' },
        { pergunta: 'Em "Comprei um copo de vidro", a palavra "de" é:', opcoes: ['conjunção', 'artigo', 'preposição', 'advérbio'], correta: 2,
          explicacao: '"De" liga duas palavras ("copo" e "vidro") dentro da mesma ideia, mostrando do que o copo é feito. É **preposição**.',
          outraExplicacao: 'Depois de "de" não vem uma nova ideia com verbo, só a palavra "vidro". Liga palavra com palavra → preposição.' },
      ],
    },
    { // 5. "o amanhã" → substantivo
      conceito: 'A **classe depende do uso**: a mesma palavra pode mudar de classe conforme o papel que faz na frase (vamos jantar × o jantar).',
      variacoes: [
        { pergunta: 'Em "O jantar foi servido às oito", a palavra "jantar" é:', opcoes: ['verbo', 'substantivo', 'adjetivo', 'advérbio'], correta: 1,
          explicacao: 'Tem o artigo "o" antes e funciona como o nome de uma coisa (a refeição). É **substantivo**. Em "vamos jantar", seria verbo.',
          outraExplicacao: 'Teste do substantivo: cabe "o" antes? Já está lá: "**o** jantar". E não dá para dizer "eu jantar foi servido". Funciona como nome.' },
        { pergunta: 'Em "Ouvi um não bem firme", a palavra "não" é:', opcoes: ['advérbio de negação', 'interjeição', 'conjunção', 'substantivo'], correta: 3,
          explicacao: 'Com o artigo "um" antes, "não" virou o nome de uma resposta: é **substantivo** (dá até para pôr no plural: "ouvi vários nãos").',
          outraExplicacao: 'Normalmente "não" é advérbio ("não fui"). Mas aqui ele não nega nenhum verbo: é a "coisa" que foi ouvida, acompanhada de artigo. Palavra com artigo funcionando como nome é substantivo.' },
      ],
    },
    { // 6. meio / bastante / menos
      conceito: 'Palavras como **meio, bastante, pouco** e **muito**: quando acompanham um substantivo, mudam; quando funcionam como advérbio (= "um pouco", "muito"), **não mudam**. **Menos** nunca muda.',
      variacoes: [
        { pergunta: 'Qual frase segue a norma-padrão?', opcoes: ['Ela comeu meio pizza.', 'Elas ficaram meias tristes.', 'As portas estavam meio abertas.', 'Tinha menas pessoas.'], correta: 2,
          explicacao: 'Em "meio abertas", "meio" = "um pouco" (advérbio): **não muda**. Já "meia pizza" (metade de uma pizza) acompanha o substantivo e muda. "Menas" não existe.',
          outraExplicacao: 'Troque por "um pouco": "As portas estavam **um pouco** abertas" funciona → advérbio → "meio", sem mudar.' },
        { pergunta: 'Complete: "Havia ___ candidatos, e todos estavam ___ nervosos."', opcoes: ['bastante / bastantes', 'bastantes / bastante', 'bastantes / bastantes', 'bastante / bastante'], correta: 1,
          explicacao: '"Bastantes candidatos": acompanha o substantivo (= muitos) → **muda**. "Bastante nervosos": intensifica o adjetivo (= muito) → advérbio → **não muda**.',
          outraExplicacao: 'Troque por "muito": "Havia **muitos** candidatos" (mudou → bastantes) e "estavam **muito** nervosos" (não mudou → bastante).' },
      ],
    },
  ],

  /* ================= Acentuação ================= */
  'portugues-1-1': [
    { // 1. "computador" → oxítona
      conceito: 'Classificar a palavra pela posição da **sílaba tônica** (a mais forte): última = oxítona; penúltima = paroxítona; antepenúltima = proparoxítona.',
      variacoes: [
        { pergunta: 'A palavra "telefone" é:', opcoes: ['oxítona', 'paroxítona', 'proparoxítona', 'monossílabo'], correta: 1,
          explicacao: 'te-le-**FO**-ne: a sílaba forte é a penúltima. **Paroxítona**.',
          outraExplicacao: 'Grite: "tele**FOOO**ne!". Você estica o "fo", que é a segunda sílaba de trás para frente.' },
        { pergunta: 'A palavra "pássaro" é:', opcoes: ['oxítona', 'paroxítona', 'monossílabo', 'proparoxítona'], correta: 3,
          explicacao: '**PÁS**-sa-ro: a sílaba forte é a antepenúltima (terceira de trás para frente). **Proparoxítona**, e por isso tem acento.',
          outraExplicacao: 'Conte de trás para frente: ro (1), sa (2), **pás** (3). Forte na terceira = proparoxítona.' },
      ],
    },
    { // 2. lógica do padrão (táxi × caqui)
      conceito: 'A **lógica do padrão**: cada terminação tem uma sílaba forte esperada; o acento só aparece quando a palavra **foge** desse padrão.',
      variacoes: [
        { pergunta: 'Por que "útil" tem acento e "papel" não?', opcoes: ['Porque útil é proparoxítona', 'Porque útil é paroxítona terminada em l, e o padrão das palavras em l é ser oxítona', 'Porque papel é paroxítona', 'Porque toda palavra terminada em l tem acento'], correta: 1,
          explicacao: 'Palavras terminadas em **l** tendem a ser oxítonas (pa-**pel**, a-**nel**). "**Ú**-til" tem a força na penúltima: foge do padrão → acento.',
          outraExplicacao: 'Sem acento, "util" seria lido como "u-**TIL**", seguindo o padrão de papel e anel. O acento avisa que a força está no "ú".' },
        { pergunta: 'Por que "café" tem acento e "casa" não?', opcoes: ['Porque toda palavra com e tem acento', 'Porque casa é oxítona', 'Porque café é oxítona terminada em e, e o padrão das palavras em a, e, o é ser paroxítona', 'Porque café é proparoxítona'], correta: 2,
          explicacao: 'Palavras terminadas em **a, e, o** tendem a ser paroxítonas (**ca**-sa, **bo**-te). "Ca-**fé**" é oxítona: foge do padrão → acento.',
          outraExplicacao: 'Sem acento, "cafe" seria lido "**CA**-fe", como "casa". O acento puxa a força para o final.' },
      ],
    },
    { // 3. as 3 perguntas (hífen)
      conceito: 'Aplicar as **3 perguntas**: é proparoxítona? É oxítona terminada em a, e, o, em, ens? É paroxítona com outra terminação?',
      variacoes: [
        { pergunta: 'Qual palavra está acentuada corretamente?', opcoes: ['órfão', 'nuvém', 'jardím', 'parabens'], correta: 0,
          explicacao: '**Órfão** é paroxítona (**ÓR**-fão) terminada em **ão**: foge do padrão → acento. "Nuvem" (paroxítona em em) e "jardim" (oxítona em im) seguem o padrão. "Parabéns" precisa de acento (oxítona em ens).',
          outraExplicacao: 'Passe "órfão" pelas 3 perguntas: não é proparoxítona; não é oxítona; é paroxítona terminada em "ão", que não é a, e, o, em, ens → pergunta 3 → acento.' },
        { pergunta: 'Qual destas palavras **não** deve ter acento?', opcoes: ['açúcar', 'lâmpada', 'também', 'item'], correta: 3,
          explicacao: '"**I**-tem" é paroxítona terminada em **em**, que é o padrão → sem acento. As outras fogem do padrão: açúcar (paroxítona em r), lâmpada (proparoxítona), também (oxítona em em).',
          outraExplicacao: 'Compare "item" com "também": as duas terminam em "em", mas a força está em lugares diferentes. "I-tem" segue o padrão (paroxítona); "tam-BÉM" foge (oxítona) → só ela leva acento.' },
      ],
    },
    { // 4. casos especiais (ideia / herói)
      conceito: 'Casos especiais: ditongos abertos **éi, ói, éu** (acento só em oxítonas e monossílabos, desde o Acordo de 1990) e **i/u** fortes sozinhos na sílaba (saída, saúde).',
      variacoes: [
        { pergunta: 'Qual palavra está escrita de acordo com o Acordo Ortográfico?', opcoes: ['assembléia', 'jibóia', 'papéis', 'heróico'], correta: 2,
          explicacao: '"Pa-**péis**" é oxítona com "éi" na última sílaba: o acento continua. Nas outras, o ditongo está na penúltima (paroxítonas) e o acento caiu: assembleia, jiboia, heroico.',
          outraExplicacao: 'Olhe onde está o "éi/ói": na **última** sílaba (papéis, herói) → com acento; na **penúltima** (assembleia, heroico) → sem acento.' },
        { pergunta: 'Qual destas palavras deve receber acento?', opcoes: ['rainha', 'saude', 'juiz', 'raiz'], correta: 1,
          explicacao: 'Em sa-**ú**-de, o **u** forte está sozinho na sílaba, formando hiato → **saúde**. Em "rainha" vem nh depois; em "juiz" e "raiz" o z fica na mesma sílaba (ju-iz, ra-iz).',
          outraExplicacao: 'Separe as sílabas: sa-ú-de (o "ú" sozinho → acento); ra-i-nha (nh depois → sem acento); ju-iz (o "i" está junto com o "z" → sem acento).' },
      ],
    },
    { // 5. acentos diferenciais (têm)
      conceito: 'Acentos diferenciais que continuam: **pôde/pode**, **pôr/por**, **têm/tem**, **vêm/vem** (e derivados: mantêm, contêm).',
      variacoes: [
        { pergunta: 'Complete: "Ontem ele não ___ ir à aula."', opcoes: ['pode', 'podi', 'pôde', 'póde'], correta: 2,
          explicacao: '"Ontem" indica passado: **pôde**, com circunflexo. O presente é "pode" ("hoje ele pode").',
          outraExplicacao: 'Troque "ontem" por "hoje": "hoje ele **pode**". Como a frase é no passado, use a forma com acento: **pôde**.' },
        { pergunta: 'Complete: "Vou ___ os documentos ___ ordem alfabética."', opcoes: ['por / pôr', 'pôr / pôr', 'por / por', 'pôr / por'], correta: 3,
          explicacao: 'O primeiro é o verbo (colocar): **pôr**. O segundo é preposição: **por**.',
          outraExplicacao: 'Troque por "colocar": "Vou **colocar** os documentos" → é verbo → pôr. "**Colocar** ordem alfabética" não faz sentido → é preposição → por.' },
      ],
    },
  ],

  /* ================= Porcentagem ================= */
  'matematica-1-0': [
    { conceito: 'Converter **porcentagem em decimal**: dividir por 100 (andar com a vírgula 2 casas para a esquerda).',
      variacoes: [
        { pergunta: 'Quanto é 7% escrito como decimal?', opcoes: ['0,7', '0,07', '7,0', '0,007'], correta: 1,
          explicacao: '7% = 7 ÷ 100 = **0,07**.',
          outraExplicacao: 'Pense em dinheiro: 7% de R$ 1,00 são 7 centavos = R$ **0,07**.' },
      ] },
    { conceito: 'Calcular **X% de um valor** e o valor final depois de um aumento ou desconto.',
      variacoes: [
        { pergunta: 'Uma conta de restaurante de R$ 120 terá 10% de taxa de serviço. Quanto você paga no total?', opcoes: ['R$ 12', 'R$ 130', 'R$ 132', 'R$ 108'], correta: 2,
          explicacao: '10% de 120 = 12. Total: 120 + 12 = **R$ 132**.',
          outraExplicacao: 'Com o fator: 120 × 1,10 = **132**. Cuidado: R$ 12 é só a taxa, não o total.' },
      ] },
    { conceito: 'O **fator**: aumento de i% → × (1 + i/100); desconto de i% → × (1 − i/100).',
      variacoes: [
        { pergunta: 'Qual é o fator de um aumento de 8%?', opcoes: ['0,08', '1,08', '0,92', '1,8'], correta: 1,
          explicacao: 'Aumento → 1 + 0,08 = **1,08**. Você fica com o valor inteiro mais 8%.',
          outraExplicacao: 'R$ 100 com aumento de 8% vira R$ 108. Para ir de 100 a 108, multiplica-se por **1,08**.' },
      ] },
    { conceito: '**Porcentagens sucessivas** se multiplicam, não se somam.',
      variacoes: [
        { pergunta: 'Um produto tem um desconto de 10% e depois outro de 10%. O desconto total foi de:', opcoes: ['20%', '21%', '19%', '10%'], correta: 2,
          explicacao: '0,90 × 0,90 = 0,81 → você paga 81% → desconto total de **19%**.',
          outraExplicacao: 'Teste com R$ 100: −10% → 90. Mais 10% **de 90** → −9 → 81. De 100 para 81, o desconto foi de **19%**.' },
      ] },
    { conceito: 'Achar o **valor original**: divida o valor final pelo fator.',
      variacoes: [
        { pergunta: 'Depois de um aumento de 10%, o aluguel foi para R$ 1.100. Qual era o valor antes?', opcoes: ['R$ 990', 'R$ 1.010', 'R$ 1.000', 'R$ 1.090'], correta: 2,
          explicacao: '1.100 ÷ 1,10 = **R$ 1.000**. Confira: 1.000 × 1,10 = 1.100 ✓',
          outraExplicacao: 'R$ 1.100 são 110% do valor antigo. Se 110% valem 1.100, então 10% valem 100, e 100% valem **1.000**. (R$ 990 seria tirar 10% de 1.100, que é a base errada.)' },
      ] },
  ],

  /* ================= Pontuação ================= */
  'portugues-1-3': [
    { conceito: 'A **regra de ouro** da vírgula: ela não separa o sujeito do verbo, nem o verbo do seu complemento.',
      variacoes: [
        { pergunta: 'Qual frase está pontuada corretamente?', opcoes: ['O diretor da escola, aprovou o projeto.', 'O diretor da escola aprovou, o projeto.', 'O diretor da escola aprovou o projeto.', 'O diretor, da escola aprovou o projeto.'], correta: 2,
          explicacao: '"O diretor da escola" (sujeito) + "aprovou" (verbo) + "o projeto" (complemento): o esqueleto inteiro, sem vírgula.',
          outraExplicacao: 'Pergunte ao verbo: quem aprovou? "O diretor da escola" → fica colado. Aprovou o quê? "O projeto" → também fica colado.' },
      ] },
    { conceito: 'Vírgula obrigatória para isolar o **vocativo** (o nome de quem está sendo chamado).',
      variacoes: [
        { pergunta: 'Em "Professor posso entregar amanhã?", falta uma vírgula. Onde?', opcoes: ['Depois de "Professor", porque é vocativo', 'Depois de "posso"', 'Antes de "amanhã"', 'Não falta vírgula'], correta: 0,
          explicacao: '"Professor" é quem está sendo chamado: **vocativo**. Fica "Professor, posso entregar amanhã?".',
          outraExplicacao: 'Sem a vírgula, parece que o professor é quem vai entregar. Com ela, fica claro que você está **falando com** o professor.' },
      ] },
    { conceito: 'Oração **explicativa** (entre vírgulas, vale para todos) × **restritiva** (sem vírgulas, vale só para uma parte).',
      variacoes: [
        { pergunta: '"Os candidatos, que estudaram, foram aprovados." Pela pontuação, entende-se que:', opcoes: ['só alguns candidatos estudaram', 'todos os candidatos estudaram e foram aprovados', 'nenhum candidato foi aprovado', 'a frase tem erro de pontuação'], correta: 1,
          explicacao: 'Entre vírgulas, "que estudaram" é **explicativa**: comenta algo sobre **todos** os candidatos.',
          outraExplicacao: 'As vírgulas funcionam como parênteses: "Os candidatos (que, aliás, estudaram) foram aprovados". É um comentário sobre todos, e não um filtro.' },
      ] },
  ],
};
