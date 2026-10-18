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

  /* ================= Ortografia ================= */
  'portugues-1-2': [
    { // 1. família (analisar)
      conceito: 'A **pista da família**: palavras da mesma família mantêm a letra da palavra-mãe (análise → analisar).',
      variacoes: [
        { pergunta: 'Qual é a grafia correta?', opcoes: ['paralizar', 'paralissar', 'paraliçar', 'paralisar'], correta: 3,
          explicacao: 'A palavra-mãe é **paralisia**, com s. O verbo mantém a letra: **paralisar**.',
          outraExplicacao: 'Pergunte "de onde vem?": paralisar vem de paralisia. A mãe tem s → a filha tem s.' },
        { pergunta: 'O verbo que vem de "pesquisa" é:', opcoes: ['pesquizar', 'pesquisar', 'pesquiçar', 'pesquissar'], correta: 1,
          explicacao: '"Pesquisa" já tem **s**, então o verbo só acrescenta -ar: **pesquisar**.',
          outraExplicacao: 'Tire o "-ar" do verbo e veja se sobra a palavra-mãe: pesquis(ar) → pesquisa. Se a mãe tem s, fica s.' },
      ],
    },
    { // 2. S ou Z (beleza / francesa)
      conceito: '**-ês/-esa** para origem e títulos (francesa, princesa); **-ez/-eza** para qualidades vindas de adjetivos (rapidez, beleza); **-izar** quando a palavra-mãe não tem s.',
      variacoes: [
        { pergunta: 'Qual palavra está escrita corretamente?', opcoes: ['rapidês', 'rapides', 'rapidez', 'rapidéz'], correta: 2,
          explicacao: '"Rapidez" é a qualidade de quem é **rápido** (adjetivo) → **-ez**.',
          outraExplicacao: 'Dá para dizer "a ___ de alguém"? "A rapidez dele" → sim → qualidade → termina em **-ez**, com z e sem acento.' },
        { pergunta: 'Qual palavra está escrita corretamente?', opcoes: ['realisar', 'realizar', 'realiçar', 'reallizar'], correta: 1,
          explicacao: 'A palavra-mãe é **real**, que não tem s. O verbo ganha o final **-izar**: realizar.',
          outraExplicacao: 'Tire o final: "real" + izar. Como "real" não tem s, não há s para aproveitar: entra o -izar inteiro, com z.' },
      ],
    },
    { // 3. SS / Ç (permissão)
      conceito: 'O **verbo de origem** indica a letra do substantivo: ceder → cessão; mitir → missão; ter → tenção; nder → nsão; gredir → gressão.',
      variacoes: [
        { pergunta: 'Qual é o substantivo do verbo "pretender"?', opcoes: ['pretenção', 'pretenssão', 'pretensão', 'pretendição'], correta: 2,
          explicacao: 'Verbos em **-nder** formam substantivos em **-nsão**: pretender → **pretensão** (como compreender → compreensão).',
          outraExplicacao: 'Pense numa palavra da mesma turma que você já conhece: compreender → compreensão, com um s só. Pretender segue igual: pretensão.' },
        { pergunta: 'Qual é o substantivo do verbo "deter"?', opcoes: ['detensão', 'detenção', 'detenssão', 'deteção'], correta: 1,
          explicacao: 'Verbos em **-ter** formam substantivos em **-tenção**: deter → **detenção** (como reter → retenção).',
          outraExplicacao: 'Lembre de palavras da mesma turma que você já usa: manter → manu**tenção**, reter → re**tenção**. Os verbos terminados em "-ter" vão para **-tenção**, com ç.' },
      ],
    },
    { // 4. X ou CH (encher)
      conceito: '**X** depois de ditongo (caixa), de **en-** (enxada) e de **me-** (mexer), mas a **família** vence a regra: encher e encharcar vêm de cheio e charco, com ch.',
      variacoes: [
        { pergunta: 'Qual palavra está escrita corretamente?', opcoes: ['peiche', 'enxada', 'mecher', 'enchugar'], correta: 1,
          explicacao: 'Depois de **en-**, usa-se **x**: **enxada**. As outras erram a regra: peixe (x depois de ditongo), mexer (x depois de me-), enxugar (x depois de en-).',
          outraExplicacao: 'Enxada não tem palavra-mãe com ch, então vale a regra do "en-": x.' },
        { pergunta: 'Qual palavra está escrita corretamente?', opcoes: ['mecher', 'meixer', 'mexer', 'mesher'], correta: 2,
          explicacao: 'Depois de **me-**, usa-se **x**: **mexer** (e mexerica). A exceção é "mecha", de cabelo.',
          outraExplicacao: 'Guarde a dupla: "mexer" (verbo, com x) × "mecha" (substantivo, a exceção com ch).' },
      ],
    },
    { // 5. G ou J (viagem / viajem)
      conceito: 'Substantivos em **-agem, -igem, -ugem** levam **G** (viagem, garagem); verbos em **-jar** mantêm o **J** (que eles viajem).',
      variacoes: [
        { pergunta: 'Qual palavra está escrita corretamente?', opcoes: ['garajem', 'ferrujem', 'vertigem', 'lavajem'], correta: 2,
          explicacao: 'Substantivos terminados em **-igem** levam G: **vertigem**. As outras também deveriam ter G: garagem, ferrugem, lavagem.',
          outraExplicacao: 'Todas são substantivos (dá para pôr "a" antes: a garagem, a ferrugem). Substantivo em -agem/-igem/-ugem → G. Só exceções raras (pajem, lambujem) usam J.' },
        { pergunta: 'Complete com o verbo "arranjar": "É preciso que você ___ suas coisas."', opcoes: ['arrange', 'arranje', 'arranji', 'arrangi'], correta: 1,
          explicacao: 'O verbo é arra**nj**ar, com J. Todas as formas mantêm o J: que você **arranje**.',
          outraExplicacao: 'Ache o verbo no infinitivo: arranjar. Se o infinitivo tem J, todas as formas têm J: arranjo, arranjei, que eu arranje.' },
      ],
    },
    { // 6. hífen (micro-ondas)
      conceito: 'Hífen com prefixos: **vogais iguais** ou palavra com **h** → hífen; **vogais diferentes** → junto; palavra com **r** ou **s** → junto, dobrando a letra.',
      variacoes: [
        { pergunta: 'Qual palavra está escrita corretamente?', opcoes: ['infra-estrutura', 'infraestrutura', 'infra estrutura', 'infrastrutura'], correta: 1,
          explicacao: '"Infra" termina em **a** e "estrutura" começa com **e**: vogais diferentes → **junto**: infraestrutura.',
          outraExplicacao: 'Só há hífen quando as vogais são iguais (micro-ondas). Aqui são diferentes (a + e), então as palavras se juntam sem perder nenhuma letra.' },
        { pergunta: 'Qual palavra está escrita corretamente?', opcoes: ['contrasenso', 'contra-senso', 'contra senso', 'contrassenso'], correta: 3,
          explicacao: '"Contra" termina em vogal e "senso" começa com **s**: junta e **dobra o s** → contrassenso.',
          outraExplicacao: 'Se ficasse "contrasenso", o s entre vogais soaria como z ("contra-zenso"). Dobrar o s mantém o som: contra**ss**enso.' },
      ],
    },
    { // 7. há × a
      conceito: 'Palavras que confundem: **há** (passado, = faz) × **a** (futuro ou distância); **mal × mau**; os **porquês**.',
      variacoes: [
        { pergunta: 'Complete: "Ele está de ___ humor e dormiu ___."', opcoes: ['mal / mau', 'mau / mal', 'mau / mau', 'mal / mal'], correta: 1,
          explicacao: '"**Mau** humor" → contrário de "bom humor". "Dormiu **mal**" → contrário de "dormiu bem".',
          outraExplicacao: 'Troque pelo oposto: "bom humor" (então mau) e "dormiu bem" (então mal). Bom ↔ mau; bem ↔ mal.' },
        { pergunta: 'Complete: "___ você faltou? Quero saber o ___."', opcoes: ['Porque / porquê', 'Por que / porquê', 'Por quê / porque', 'Porquê / por que'], correta: 1,
          explicacao: 'Pergunta no começo da frase: **por que** (separado, sem acento). "O ___", com artigo: substantivo → **porquê** (junto, com acento).',
          outraExplicacao: 'Se dá para trocar por "o motivo", é o substantivo **porquê**: "quero saber o motivo" → "o porquê". Na pergunta, troque por "por qual motivo" → **por que**.' },
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
    { // 1. "O professor, disse o aluno, chegou atrasado" → a vírgula muda o sentido
      conceito: 'A **vírgula muda o sentido**: o que ela separa deixa de fazer parte do resto da frase. Tire o trecho isolado e leia o que sobra.',
      variacoes: [
        { pergunta: 'Na frase "A diretora, disse a secretária, saiu mais cedo", quem saiu mais cedo?', opcoes: ['A secretária', 'As duas', 'A diretora', 'Ninguém saiu'], correta: 2,
          explicacao: '"disse a secretária" está entre vírgulas: é só a indicação de quem contou. Tirando o trecho, sobra "A diretora saiu mais cedo". Quem saiu foi a **diretora**.',
          outraExplicacao: 'Compare com "A diretora disse: a secretária saiu mais cedo." Aí quem fala é a diretora e quem saiu é a secretária. A pontuação decide quem fez o quê.' },
        { pergunta: 'Você pergunta "Posso ir embora?" e recebe: "Não, espere." O que a pessoa quer?', opcoes: ['Que você vá embora sem esperar', 'Que você fique e espere', 'Que você decida sozinho', 'A resposta não tem sentido'], correta: 1,
          explicacao: 'A vírgula separa a **resposta** ("Não", não vá) do **pedido** ("espere"). A pessoa quer que você **fique**. Sem a vírgula, "Não espere" seria o contrário: pode ir.',
          outraExplicacao: 'Leia as duas partes separadas: "Posso ir embora?" → "Não." E depois: "Espere." Com a vírgula, são duas mensagens numa só.' },
      ] },
    { // 2. regra de ouro: sujeito e verbo não se separam
      conceito: 'A **regra de ouro** da vírgula: ela não separa o sujeito do verbo, nem o verbo do seu complemento, por maior que o sujeito seja.',
      variacoes: [
        { pergunta: 'Qual frase está pontuada corretamente?', opcoes: ['O diretor da escola, aprovou o projeto.', 'O diretor da escola aprovou, o projeto.', 'O diretor da escola aprovou o projeto.', 'O diretor, da escola aprovou o projeto.'], correta: 2,
          explicacao: '"O diretor da escola" (sujeito) + "aprovou" (verbo) + "o projeto" (complemento): o esqueleto inteiro, sem vírgula.',
          outraExplicacao: 'Pergunte ao verbo: quem aprovou? "O diretor da escola" → fica colado. Aprovou o quê? "O projeto" → também fica colado.' },
        { pergunta: 'Onde está o erro em "Os servidores que participaram do treinamento no mês passado, receberão o certificado."?', opcoes: ['Falta vírgula depois de "servidores"', 'A vírgula antes de "receberão" separa o sujeito do verbo', 'Falta vírgula depois de "treinamento"', 'Não há erro'], correta: 1,
          explicacao: 'Todo o trecho "Os servidores que participaram do treinamento no mês passado" é o **sujeito** de "receberão". Sujeito longo continua sendo sujeito: **sem vírgula** antes do verbo.',
          outraExplicacao: 'Pergunte: quem receberá o certificado? "Os servidores que participaram do treinamento no mês passado." Esse bloco responde ao "quem?", então fica colado ao verbo.' },
      ] },
    { // 3. vocativo
      conceito: 'Vírgula obrigatória para isolar o **vocativo**: o nome de quem está sendo chamado, em qualquer posição da frase.',
      variacoes: [
        { pergunta: 'Em "Professor posso entregar amanhã?", falta uma vírgula. Onde?', opcoes: ['Depois de "Professor", porque é vocativo', 'Depois de "posso"', 'Antes de "amanhã"', 'Não falta vírgula'], correta: 0,
          explicacao: '"Professor" é quem está sendo chamado: **vocativo**. Fica "Professor, posso entregar amanhã?".',
          outraExplicacao: 'Sem a vírgula, parece que o professor é quem vai entregar. Com ela, fica claro que você está **falando com** o professor.' },
        { pergunta: 'Qual frase está pontuada corretamente?', opcoes: ['Obrigado pela ajuda João.', 'Obrigado, pela ajuda João.', 'Obrigado pela, ajuda, João.', 'Obrigado pela ajuda, João.'], correta: 3,
          explicacao: '"João" é a pessoa com quem você fala: **vocativo**. No fim da frase, ele vem separado por uma vírgula antes: "Obrigado pela ajuda, João."',
          outraExplicacao: 'O vocativo pode ir no começo, no meio ou no fim, mas sempre "isolado" por vírgula. Aqui ele está no fim, então a vírgula vem antes dele.' },
      ] },
    { // 4. aposto
      conceito: 'O **aposto** explica o termo que vem antes ("ou seja") e fica entre vírgulas. Com uma vírgula só no meio da frase, o sujeito acaba separado do verbo.',
      variacoes: [
        { pergunta: 'Qual frase está pontuada corretamente?', opcoes: ['Recife a capital de Pernambuco, recebeu o evento.', 'Recife, a capital de Pernambuco, recebeu o evento.', 'Recife, a capital de Pernambuco recebeu o evento.', 'Recife a capital, de Pernambuco recebeu o evento.'], correta: 1,
          explicacao: '"a capital de Pernambuco" é um **aposto**: explica o que é Recife. No meio da frase, ele fica entre **duas** vírgulas.',
          outraExplicacao: 'Teste da retirada: "Recife recebeu o evento." A frase continua de pé, então o trecho tirado vai com vírgula antes **e** depois.' },
        { pergunta: '"Ana, a gerente chegou." e "Ana, a gerente, chegou." Qual é a diferença?', opcoes: ['Nenhuma, as duas dizem a mesma coisa', 'Na primeira, Ana é a gerente; na segunda, você chama Ana', 'Na primeira, você chama Ana para avisar que a gerente chegou; na segunda, Ana é a gerente e foi ela quem chegou', 'As duas estão erradas'], correta: 2,
          explicacao: 'Com uma vírgula só, "Ana" é **vocativo** (você fala com ela) e "a gerente chegou" é o aviso. Com duas vírgulas, "a gerente" é **aposto**: explica quem é Ana, e foi Ana quem chegou.',
          outraExplicacao: 'Tire o trecho entre vírgulas na segunda frase: "Ana chegou." Na primeira não há trecho fechado entre vírgulas; "Ana," é só o chamado.' },
      ] },
    { // 5. intercaladas, explicativa × restritiva
      conceito: '**Oração intercalada** vai entre vírgulas. Com orações de "que": **explicativa** (com vírgulas, vale para todos) × **restritiva** (sem vírgulas, filtra uma parte).',
      variacoes: [
        { pergunta: '"Os candidatos, que estudaram, foram aprovados." Pela pontuação, entende-se que:', opcoes: ['só alguns candidatos estudaram', 'todos os candidatos estudaram e foram aprovados', 'nenhum candidato foi aprovado', 'a frase tem erro de pontuação'], correta: 1,
          explicacao: 'Entre vírgulas, "que estudaram" é **explicativa**: comenta algo sobre **todos** os candidatos.',
          outraExplicacao: 'As vírgulas funcionam como parênteses: "Os candidatos (que, aliás, estudaram) foram aprovados". É um comentário sobre todos, e não um filtro.' },
        { pergunta: 'Qual frase pontua corretamente a oração intercalada?', opcoes: ['O resultado como todos esperavam, saiu ontem.', 'O resultado, como todos esperavam saiu ontem.', 'O resultado, como todos esperavam, saiu ontem.', 'O resultado como, todos esperavam, saiu ontem.'], correta: 2,
          explicacao: '"como todos esperavam" é uma **oração intercalada**: um comentário no meio da frase. Ela fica entre **duas** vírgulas.',
          outraExplicacao: 'Tire o comentário: "O resultado saiu ontem." A frase continua de pé. Então ele precisa de vírgula dos dois lados, para não separar o sujeito ("O resultado") do verbo ("saiu").' },
      ] },
    { // 6. vírgula antes de "e" e de conjunções
      conceito: 'Antes de **"e"**, vírgula só com sujeitos diferentes, sentido de oposição ou "e" repetido. Antes de **mas, porém, pois**, use vírgula; deslocadas, **porém/portanto** vão entre vírgulas.',
      variacoes: [
        { pergunta: 'Qual frase está pontuada corretamente?', opcoes: ['Estudou muito mas, não passou.', 'Estudou muito, mas não passou.', 'Estudou muito mas não, passou.', 'Estudou, muito mas não passou.'], correta: 1,
          explicacao: '"mas" é **conjunção adversativa** (oposição). A vírgula vem **antes** dela: "Estudou muito, mas não passou."',
          outraExplicacao: 'A vírgula marca onde uma ideia termina e a oposta começa. A ideia oposta começa no "mas", então a vírgula fica antes dele, nunca depois.' },
        { pergunta: 'Em qual frase a vírgula antes de "e" é justificada?', opcoes: ['Ela comprou arroz, e feijão.', 'Ele treinou o ano todo, e perdeu na estreia.', 'Os alunos, e as alunas chegaram.', 'Li o livro, e o resumo.'], correta: 1,
          explicacao: 'Em "Ele treinou o ano todo, e perdeu na estreia", o "e" tem sentido de **oposição** (= mas). Nesse caso, a vírgula antes dele é aceita. Nas outras, o "e" só soma itens, e a vírgula atrapalha.',
          outraExplicacao: 'Troque o "e" por "mas": "Ele treinou o ano todo, mas perdeu na estreia" → faz sentido, é oposição → vírgula. "Comprei arroz, mas feijão" → não faz sentido → é só soma → sem vírgula.' },
      ] },
    { // 7. ponto e vírgula
      conceito: 'O **ponto e vírgula** separa blocos que já têm vírgulas dentro, orações relacionadas com ideias completas e itens de leis e listas longas.',
      variacoes: [
        { pergunta: 'Qual frase usa o ponto e vírgula corretamente?', opcoes: ['Uns estudam pela manhã; outros, à noite.', 'Uns estudam; pela manhã outros à noite.', 'Uns; estudam pela manhã, outros à noite.', 'Uns estudam pela manhã, outros; à noite.'], correta: 0,
          explicacao: 'Cada parte é um bloco: "Uns estudam pela manhã" e "outros, à noite" (a vírgula marca o verbo omitido, "estudam"). O **ponto e vírgula** fica entre os dois blocos.',
          outraExplicacao: 'Leia em dois blocos: [Uns estudam pela manhã] ; [outros, à noite]. O ";" é a fronteira entre eles. Dentro do segundo bloco, a vírgula está no lugar do verbo que não foi repetido.' },
        { pergunta: 'Num edital: "São requisitos: I – ter nível médio___ II – ter 18 anos___ III – estar quite com a Justiça Eleitoral." Que sinal vai nas lacunas?', opcoes: ['vírgula', 'dois-pontos', 'ponto e vírgula', 'reticências'], correta: 2,
          explicacao: 'Em leis e editais, os **itens de uma lista** (incisos) são separados por **ponto e vírgula**, e o último termina com ponto.',
          outraExplicacao: 'Cada inciso é quase uma frase completa. O ponto e vírgula separa mais que a vírgula, sem encerrar a lista como o ponto faria.' },
      ] },
    { // 8. dois-pontos
      conceito: 'Os **dois-pontos** anunciam o que vem: enumeração, citação ou explicação. Não podem cortar o esqueleto (sujeito, verbo, complemento).',
      variacoes: [
        { pergunta: 'Em qual frase os dois-pontos estão bem usados?', opcoes: ['Traga os seguintes materiais: lápis, borracha e régua.', 'Os materiais são: necessários.', 'Ela trouxe: o lápis.', 'Os alunos: trouxeram o material.'], correta: 0,
          explicacao: '"os seguintes materiais" **anuncia** uma lista, e os dois-pontos a abrem. Nas outras, eles separam o sujeito do verbo ou o verbo do que vem depois.',
          outraExplicacao: 'Pergunte: a primeira parte promete algo? "Traga os seguintes materiais:" promete uma lista → dois-pontos. "Ela trouxe:" só corta o verbo do complemento.' },
        { pergunta: 'Qual é a função dos dois-pontos em "Ele tinha um único defeito: a pressa."?', opcoes: ['Indicar uma pausa para respirar', 'Separar o sujeito do verbo', 'Introduzir a explicação do que foi anunciado', 'Marcar uma citação literal'], correta: 2,
          explicacao: '"um único defeito" cria uma expectativa, e os dois-pontos abrem a **explicação**: qual era o defeito? A pressa.',
          outraExplicacao: 'Troque os dois-pontos por "que era": "Ele tinha um único defeito, que era a pressa." Se a troca funciona, os dois-pontos estão explicando o que foi anunciado.' },
      ] },
  ],
  /* ================= Interpretação de texto ================= */
  'portugues-3-1': [
    { // 1. compreensão × interpretação
      conceito: 'Diferenciar **compreensão** ("segundo o texto": está escrito) de **interpretação** ("infere-se", "depreende-se": está implícito, mas apoiado no texto).',
      variacoes: [
        { pergunta: 'Qual comando pede uma questão de **compreensão** (informação explícita)?', opcoes: ['Infere-se do texto que...', 'De acordo com o texto, ...', 'O texto sugere que...', 'Depreende-se da leitura que...'], correta: 1,
          explicacao: '"De acordo com o texto" pede o que o texto **diz**, com todas as letras. Os outros três pedem conclusões (interpretação).',
          outraExplicacao: '"De acordo com", "segundo", "conforme": todos apontam para o que está escrito. "Infere-se", "sugere", "depreende-se" apontam para o que se conclui.' },
        { pergunta: 'Texto: "A biblioteca municipal passará a abrir aos sábados." Pergunta: "Infere-se do texto que...". Qual resposta serve?', opcoes: ['A biblioteca abrirá aos sábados.', 'Até agora, a biblioteca não abria aos sábados.', 'A biblioteca é muito frequentada.', 'Os moradores pediram a abertura aos sábados.'], correta: 1,
          explicacao: '"Passará a" indica uma mudança: antes **não** abria aos sábados. É uma conclusão (inferência) garantida pelo texto. A opção A é só repetição (compreensão); C e D são palpites.',
          outraExplicacao: 'A pergunta pede o que se **conclui**, não o que está escrito. O que está escrito é "passará a abrir". O que se conclui disso, com segurança, é que antes não abria.' },
      ] },
    { // 2. ideia principal
      conceito: '**Tema** é o assunto (poucas palavras); **ideia principal** é o que o autor afirma sobre ele (uma frase com verbo). Detalhes e exemplos são sustentação.',
      variacoes: [
        { pergunta: 'Texto: "Muita gente acha que reciclar resolve o problema do lixo. Na verdade, reciclar ajuda, mas o mais importante é produzir menos lixo: comprar menos embalagens, consertar em vez de jogar fora." A ideia principal é:', opcoes: ['Reciclagem.', 'Reciclar não ajuda em nada.', 'Mais do que reciclar, o importante é produzir menos lixo.', 'É preciso consertar objetos.'], correta: 2,
          explicacao: 'O "na verdade" introduz a posição do autor: reduzir o lixo é mais importante do que reciclar. A é só o tema; B contradiz ("reciclar ajuda"); D é um exemplo (sustentação).',
          outraExplicacao: 'Procure a frase que vem depois de "na verdade" ou "mas": é ali que o autor diz o que pensa. Depois pergunte: as outras frases servem para apoiar essa? Sim. Então é a ideia principal.' },
        { pergunta: 'Qual opção é um **tema**, e não uma ideia principal?', opcoes: ['O trabalho remoto aumentou a produtividade em algumas empresas.', 'Trabalho remoto.', 'O trabalho remoto exige disciplina de quem trabalha.', 'Nem toda função pode ser feita em trabalho remoto.'], correta: 1,
          explicacao: '"Trabalho remoto" é só o **assunto**: não afirma nada. As outras são frases que dizem algo sobre o assunto, ou seja, poderiam ser ideias principais.',
          outraExplicacao: 'Teste: dá para concordar ou discordar? De "trabalho remoto", não: não há afirmação. Das outras, dá. Quem afirma algo é ideia principal; quem só nomeia o assunto é tema.' },
      ] },
    { // 3. inferência
      conceito: '**Inferência válida** é a conclusão que o texto **obriga** a tirar. Se ele só deixa imaginar, é palpite.',
      variacoes: [
        { pergunta: 'Texto: "Mesmo com a chuva, o show começou no horário." Qual é uma inferência válida?', opcoes: ['O show foi um sucesso.', 'Esperava-se que a chuva pudesse atrasar o show.', 'O público ficou molhado.', 'O show foi ao ar livre e lotado.'], correta: 1,
          explicacao: '"Mesmo com" indica que a chuva poderia ter atrapalhado, mas não atrapalhou. Logo, havia a expectativa de atraso. Sucesso, público molhado e lotação são palpites.',
          outraExplicacao: 'O "mesmo com" é a pista: ele sempre apresenta algo que **deveria** impedir e não impediu. Então o texto obriga a concluir que a chuva era vista como um possível problema.' },
        { pergunta: 'Texto: "Dos dez candidatos convocados, só três compareceram à entrevista." Qual conclusão o texto **obriga**?', opcoes: ['Os sete ausentes desistiram da vaga.', 'A entrevista foi marcada em horário ruim.', 'Sete candidatos convocados não compareceram.', 'Os três que foram serão contratados.'], correta: 2,
          explicacao: 'Dez convocados, três foram: sete não compareceram. Isso é garantido. Desistência, horário ruim ou contratação são explicações possíveis, mas o texto não diz.',
          outraExplicacao: 'Faça o teste "o texto me obriga?". Desistiram? Pode ter sido doença, trânsito... não obriga. Horário ruim? Não obriga. Sete ausentes? É conta: obriga.' },
      ] },
    { // 4. pressuposto
      conceito: '**Pressuposto** é a informação presa a uma palavra da frase (ainda, voltar a, deixar de, até). Ele sobrevive à negação.',
      variacoes: [
        { pergunta: '"A empresa **deixou de** cobrar a taxa de manutenção." O que está pressuposto?', opcoes: ['A taxa era abusiva.', 'Antes, a empresa cobrava a taxa de manutenção.', 'A empresa está com problemas financeiros.', 'Os clientes reclamaram da taxa.'], correta: 1,
          explicacao: '"Deixar de" pressupõe que **antes fazia**. Abusiva, problemas financeiros e reclamações não estão presos a nenhuma palavra da frase.',
          outraExplicacao: 'Negue: "A empresa **não** deixou de cobrar a taxa". Nas duas versões, a empresa cobrava a taxa antes. Isso é o pressuposto.' },
        { pergunta: '"**Até** o professor mais experiente teve dificuldade com a nova plataforma." O que a palavra "até" pressupõe?', opcoes: ['Que o professor é ruim com tecnologia.', 'Que outras pessoas também tiveram dificuldade, e não se esperava isso do professor experiente.', 'Que a plataforma será substituída.', 'Que só o professor teve dificuldade.'], correta: 1,
          explicacao: '"Até" indica que há **outros** casos e que esse era o **menos esperado**. Por isso a opção D contradiz a frase, e A e C não têm base nela.',
          outraExplicacao: 'Compare: "O professor teve dificuldade" × "**Até** o professor teve dificuldade". O "até" acrescenta: "outros tiveram, e nem ele, que é experiente, escapou".' },
      ] },
    { // 5. subentendido
      conceito: '**Subentendido** é a insinuação que depende do contexto; quem fala pode negar. Diferente do pressuposto, ele não está preso a uma palavra.',
      variacoes: [
        { pergunta: 'Na hora de dividir a conta do restaurante, alguém diz: "Engraçado, sempre que a conta chega, o Pedro vai ao banheiro." O subentendido é que:', opcoes: ['Pedro tem um problema de saúde.', 'Pedro foge de pagar a conta.', 'O restaurante tem só um banheiro.', 'Pedro chegou atrasado.'], correta: 1,
          explicacao: 'Ninguém diz "Pedro não quer pagar", mas a situação (a conta chegando, "sempre") insinua isso. É **subentendido**: quem falou pode dizer "só comentei".',
          outraExplicacao: 'Pergunte "por que alguém diria isso nessa hora?". O comentário só faz sentido como indireta. A mensagem não está nas palavras, e sim na situação: é subentendido.' },
        { pergunta: 'Qual frase traz um **subentendido**, e não um pressuposto?', opcoes: ['"Ele voltou a fumar."', '"Você ainda mora com seus pais?"', '"Já são onze horas, e amanhã eu acordo cedo..." (dito a uma visita)', '"Ela parou de estudar."'], correta: 2,
          explicacao: 'A frase dita à visita insinua "está na hora de ir embora", sem dizer. Isso depende da situação: é **subentendido**. As outras têm pressupostos presos a palavras ("voltou a", "ainda", "parou de").',
          outraExplicacao: 'Procure palavras como "ainda", "voltar a", "parar de": elas marcam pressupostos. A opção C não tem nenhuma; o recado vem do contexto (visita, hora, acordar cedo). Recado de contexto = subentendido.' },
      ] },
    { // 6. extrapolação / redução / contradição
      conceito: 'Os três erros das alternativas: **extrapolação** (vai além do texto), **redução** (fica só com uma parte) e **contradição** (diz o contrário).',
      variacoes: [
        { pergunta: 'Texto: "O consumo de energia solar cresceu no país, impulsionado pela queda no preço dos painéis e por incentivos fiscais." Alternativa: "O texto atribui o crescimento apenas à queda no preço dos painéis." Essa alternativa comete:', opcoes: ['extrapolação', 'redução', 'contradição de dados numéricos', 'nenhum erro'], correta: 1,
          explicacao: 'O texto dá **duas** causas (preço e incentivos). A alternativa fica com uma só, como se fosse tudo: **redução**.',
          outraExplicacao: 'Veja o "apenas": a alternativa cortou uma parte do texto. Quando a alternativa é **menor** que o texto e finge ser o todo, é redução.' },
        { pergunta: 'Texto: "Em algumas cidades, o uso de bicicletas aumentou após a criação de ciclovias." Qual alternativa é **correta**?', opcoes: ['Ciclovias sempre aumentam o uso de bicicletas.', 'Em todas as cidades, as pessoas trocaram o carro pela bicicleta.', 'Houve cidades em que o uso de bicicletas cresceu depois da criação de ciclovias.', 'O uso de bicicletas caiu nas cidades com ciclovias.'], correta: 2,
          explicacao: 'C repete o texto com outras palavras, sem aumentar nem diminuir. A ("sempre") e B ("todas", "trocaram o carro") **extrapolam**; D **contradiz**.',
          outraExplicacao: 'Compare a força: o texto diz "algumas cidades". Qualquer alternativa com "sempre" ou "todas" é mais forte que o texto. A certa é a que tem a **mesma** força: "houve cidades".' },
      ] },
    { // 7. tipos e gêneros
      conceito: '**Gênero** é o formato com nome (notícia, receita, edital); **tipo** é o modo de organizar (narrativo, descritivo, expositivo, argumentativo, injuntivo). Um gênero mistura tipos; pergunta-se qual predomina.',
      variacoes: [
        { pergunta: 'Em um artigo de opinião, o autor escreve: "Portanto, a redução da jornada de trabalho é necessária, porque melhora a saúde e não reduz a produtividade." Qual tipo predomina?', opcoes: ['narrativo', 'injuntivo', 'argumentativo', 'descritivo'], correta: 2,
          explicacao: 'O autor defende uma opinião ("é necessária") e dá razões ("porque..."), com conectivo de conclusão ("portanto"). Isso é **argumentativo**.',
          outraExplicacao: 'Procure as marcas: opinião + "porque" + "portanto". Quem está tentando **convencer** usa o tipo argumentativo.' },
        { pergunta: 'Qual opção traz um **gênero** textual, e não um tipo?', opcoes: ['narração', 'bula de remédio', 'injunção', 'descrição'], correta: 1,
          explicacao: '**Bula** é um gênero: um formato real, com nome e função social. Narração, injunção e descrição são **tipos** (modos de organizar o texto). Aliás, a bula mistura tipos: descreve o remédio e dá instruções de uso.',
          outraExplicacao: 'Pergunte: "dá para encontrar isso na vida real, com esse nome?". Ninguém compra "uma injunção" na farmácia, mas toda caixa de remédio tem uma bula. Gênero é o que tem nome no mundo.' },
      ] },
    { // 8. intenção do autor
      conceito: 'A **intenção do autor** aparece no gênero e nas escolhas de palavras: palavras de avaliação (felizmente, infelizmente, supostamente) e verbos carregados mostram a posição de quem escreve.',
      variacoes: [
        { pergunta: 'Manchete: "Deputado **admite** ter usado verba pública em viagem pessoal." O verbo "admite", no lugar de "diz", sugere que:', opcoes: ['o deputado fez algo considerado errado e reconheceu', 'o deputado está orgulhoso da viagem', 'a informação é neutra e sem avaliação', 'a viagem foi a trabalho'], correta: 0,
          explicacao: '"Admitir" é reconhecer algo **negativo**, que talvez quisesse esconder. "Diz" seria neutro. A escolha do verbo já carrega uma avaliação.',
          outraExplicacao: 'Troque: "Deputado **diz** ter usado..." soa como simples declaração. "Deputado **admite**..." soa como confissão. Essa diferença é a avaliação do autor da manchete.' },
        { pergunta: 'Um anúncio diz: "Com nosso curso, **você também** pode ser aprovado. Milhares já conseguiram!" A principal intenção do texto é:', opcoes: ['informar dados estatísticos sobre aprovações', 'convencer o leitor a comprar o curso', 'instruir como estudar para concursos', 'narrar a história de um aprovado'], correta: 1,
          explicacao: 'É uma **propaganda**: fala diretamente com o leitor ("você"), promete resultado e usa "milhares" para dar confiança. O objetivo é **vender**, ou seja, convencer.',
          outraExplicacao: 'Comece pelo gênero: anúncio. Para que existe um anúncio? Para vender. As pistas confirmam: "você também", "milhares já conseguiram". Não há dados reais nem instruções.' },
      ] },
    { // 9. ironia e humor
      conceito: '**Ironia** é dizer o contrário do que se pensa, com o contexto desmentindo as palavras. O **humor** nasce da quebra de expectativa (duplo sentido, literal × figurado, exagero, contraste).',
      variacoes: [
        { pergunta: 'O motorista fica duas horas parado no trânsito e diz: "Que trânsito leve hoje, hein?". O efeito da frase vem de:', opcoes: ['uma informação literal', 'ironia: o elogio é desmentido pela situação', 'um pressuposto preso à palavra "hoje"', 'uma redução do texto'], correta: 1,
          explicacao: 'Duas horas parado não é "trânsito leve". As palavras dizem uma coisa e a situação mostra o contrário: **ironia**, que expressa irritação.',
          outraExplicacao: 'Compare o que é dito ("leve") com o que acontece (duas horas parado). Quando os dois se contradizem de propósito, o sentido real é o da situação. Isso é ironia.' },
        { pergunta: '— Garçom, tem uma mosca na minha sopa!\n— Fale baixo, senão todo mundo vai querer.\nDe onde vem o humor?', opcoes: ['Do uso de pressupostos', 'Da quebra de expectativa: o garçom trata a mosca como algo desejado', 'De uma ironia do cliente', 'De um erro de concordância'], correta: 1,
          explicacao: 'Espera-se que o garçom peça desculpas. Ele responde como se a mosca fosse um **brinde** disputado. A graça é essa **quebra de expectativa**.',
          outraExplicacao: 'Pergunte: o que eu esperava que acontecesse? (desculpas, trocar a sopa). O que aconteceu? (o garçom trata a mosca como algo bom). A distância entre os dois é o humor.' },
      ] },
  ],
};
