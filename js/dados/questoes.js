/* =========================================================
   questoes.js — banco de questões que já vem com o app
   16 por matéria, nível ensino médio e estilo concurso.
   Formato de cada questão:
     { id, materia, pergunta, opcoes: [4 textos], correta: índice (0 = A), explicacao }
   As questões que você cadastra pelo app ficam no localStorage
   (estado.questoesExtras), não aqui.
   ========================================================= */
App.dados = App.dados || {};

(function () {
  const lista = [];
  const contador = {};

  /** Atalho para cadastrar: q(matéria, pergunta, opções, índice da correta, explicação) */
  function q(materia, pergunta, opcoes, correta, explicacao) {
    contador[materia] = (contador[materia] || 0) + 1;
    lista.push({ id: materia + '-' + contador[materia], materia, pergunta, opcoes, correta, explicacao });
  }

  /* ---------------- Português ---------------- */
  q('portugues', 'Qual palavra está acentuada corretamente, segundo o Novo Acordo Ortográfico?',
    ['idéia', 'heróico', 'herói', 'vôo'], 2,
    'Ditongos abertos "éi" e "ói" perderam o acento nas paroxítonas (ideia, heroico), mas continuam acentuados nas oxítonas (herói, papéis). "Voo" também perdeu o acento.');
  q('portugues', 'Em qual frase o uso da crase está correto?',
    ['Fui à praia ontem.', 'Ele começou à estudar.', 'Entreguei o documento à ele.', 'Vou à pé para o trabalho.'], 0,
    'Crase = preposição "a" + artigo "a". "Ir a" + "a praia" = "à praia". Não há crase antes de verbo (estudar), pronome pessoal (ele) nem palavra masculina (pé).');
  q('portugues', 'Assinale a frase correta quanto à concordância verbal.',
    ['Fazem dois anos que me formei.', 'Houveram muitos problemas.', 'Faz dois anos que me formei.', 'Haviam poucas pessoas na sala.'], 2,
    '"Fazer" indicando tempo decorrido e "haver" no sentido de existir são impessoais: ficam sempre no singular (faz dois anos, houve problemas, havia pessoas).');
  q('portugues', 'Na frase "Ela chegou muito cedo", a palavra "muito" é:',
    ['adjetivo', 'advérbio', 'pronome', 'substantivo'], 1,
    '"Muito" intensifica outro advérbio ("cedo"), por isso é advérbio de intensidade e não varia.');
  q('portugues', 'Em qual frase a vírgula foi empregada corretamente?',
    ['Os candidatos aprovados, serão convocados.', 'Maria, traga os documentos.', 'O diretor, aprovou o projeto.', 'Eu gosto, de estudar à noite.'], 1,
    'A vírgula isola o vocativo ("Maria"). Nunca se separa o sujeito do verbo nem o verbo do seu complemento com vírgula.');
  q('portugues', 'Qual palavra está escrita corretamente?',
    ['excessão', 'exceção', 'esceção', 'excesão'], 1,
    'Escreve-se "exceção" (do verbo excetuar). Não confundir com "excesso", que tem "ss".');
  q('portugues', 'Assinale a frase de acordo com a norma-padrão quanto à regência.',
    ['Assisti o filme ontem.', 'Prefiro estudar do que trabalhar.', 'Obedeça aos sinais de trânsito.', 'Cheguei no escritório cedo.'], 2,
    '"Obedecer" pede a preposição "a" (obedecer aos sinais). Também: assistir (= ver) ao filme, preferir uma coisa a outra, chegar ao escritório.');
  q('portugues', 'Assinale a frase correta quanto à colocação pronominal (norma-padrão).',
    ['Me empresta o livro?', 'Não esqueça-se do prazo.', 'Nunca o vi tão feliz.', 'Tinha avisado-me antes.'], 2,
    'Palavras negativas como "nunca" e "não" atraem o pronome para antes do verbo (próclise). Na norma-padrão não se começa frase com pronome oblíquo, e não se usa pronome depois de particípio.');
  q('portugues', 'Em "Estudou muito; no entanto, não foi aprovado", a expressão "no entanto" indica:',
    ['causa', 'conclusão', 'oposição', 'adição'], 2,
    '"No entanto" é conjunção adversativa, assim como "mas", "porém" e "contudo": liga ideias que se opõem.');
  q('portugues', 'Assinale a frase correta quanto à concordância nominal.',
    ['É proibida entrada de estranhos.', 'Seguem anexo os documentos.', 'Ela mesma resolveu o problema.', 'Estavam bastantes irritadas.'], 2,
    '"Mesma" concorda com "ela". Sem artigo, fica "é proibido entrada"; "anexos" concorda com "documentos"; "bastante" antes de adjetivo é advérbio e não varia.');
  q('portugues', 'Leia: "Embora o trânsito estivesse intenso, o ônibus chegou no horário." Pode-se concluir que:',
    ['o trânsito impediu a chegada do ônibus.', 'a chegada pontual aconteceu apesar de um obstáculo.', 'o ônibus atrasou por causa do trânsito.', 'o trânsito estava tranquilo.'], 1,
    '"Embora" introduz uma concessão: um fato que poderia impedir o outro, mas não impediu.');
  q('portugues', 'O objetivo principal de um texto dissertativo-argumentativo é:',
    ['narrar fatos em ordem cronológica', 'descrever um lugar ou pessoa', 'defender um ponto de vista com argumentos', 'dar instruções passo a passo'], 2,
    'A dissertação argumentativa apresenta uma tese (opinião) e a sustenta com argumentos, chegando a uma conclusão.');
  q('portugues', 'Em qual caso a crase é obrigatória?',
    ['Ele saiu às 8 horas.', 'Escreveu a lápis.', 'Ficaram frente a frente.', 'Falou a todos os alunos.'], 0,
    'Antes de horas determinadas usa-se crase ("às 8 horas"). Não há crase antes de palavra masculina (lápis), em expressões com palavras repetidas (frente a frente) e antes de pronome indefinido (todos).');
  q('portugues', 'A palavra "rapidamente" foi formada por:',
    ['prefixação', 'sufixação', 'composição por justaposição', 'composição por aglutinação'], 1,
    'Junta-se o sufixo "-mente" ao adjetivo "rápida": derivação sufixal.');
  q('portugues', 'Complete corretamente: "___ você faltou? Não sei o ___."',
    ['Por que / porquê', 'Porque / por que', 'Por quê / porque', 'Porquê / por quê'], 0,
    '"Por que" separado e sem acento inicia perguntas. "O porquê", com artigo, é substantivo (= o motivo) e leva acento.');
  q('portugues', 'Qual conectivo completa a frase com sentido de conclusão? "Estudou todos os dias; ___, foi aprovado."',
    ['porém', 'portanto', 'embora', 'contudo'], 1,
    '"Portanto" é conclusivo. "Porém" e "contudo" indicam oposição; "embora" indica concessão.');

  /* ---------------- Matemática ---------------- */
  q('matematica', 'Um produto de R$ 200,00 teve desconto de 15%. Qual o novo preço?',
    ['R$ 170,00', 'R$ 185,00', 'R$ 175,00', 'R$ 160,00'], 0,
    '15% de 200 = 0,15 × 200 = 30. Então 200 − 30 = 170. Atalho: 200 × 0,85 = 170.');
  q('matematica', 'Um salário teve aumento de 10% e depois outro de 10%. O aumento total foi de:',
    ['20%', '21%', '19%', '22%'], 1,
    'Aumentos sucessivos se multiplicam: 1,10 × 1,10 = 1,21, ou seja, 21% de aumento.');
  q('matematica', '3 impressoras iguais imprimem 600 páginas em 1 hora. Quantas páginas 5 impressoras imprimem em 1 hora?',
    ['900', '1.000', '1.200', '800'], 1,
    'Regra de três direta: cada impressora faz 200 páginas/hora. 5 × 200 = 1.000.');
  q('matematica', '6 operários fazem um serviço em 10 dias. Em quantos dias 4 operários fariam o mesmo serviço?',
    ['12', '15', '8', '20'], 1,
    'Grandezas inversamente proporcionais (menos operários, mais dias): 6 × 10 = 60 "operários-dia". 60 ÷ 4 = 15 dias.');
  q('matematica', 'Numa turma há 12 homens e 18 mulheres. A razão entre homens e mulheres é:',
    ['2/3', '3/2', '2/5', '3/5'], 0,
    '12/18 simplificando por 6 = 2/3. (2/5 seria a razão homens/total.)');
  q('matematica', 'Na função f(x) = 2x + 3, quanto vale f(5)?',
    ['10', '13', '11', '16'], 1,
    'Substitua x por 5: 2 × 5 + 3 = 13.');
  q('matematica', 'As raízes da equação x² − 5x + 6 = 0 são:',
    ['1 e 6', '2 e 3', '−2 e −3', '−1 e 6'], 1,
    'Soma das raízes = 5 e produto = 6 → 2 e 3. Confira: 4 − 10 + 6 = 0 e 9 − 15 + 6 = 0.');
  q('matematica', 'Na PA (3, 7, 11, ...), o 10º termo é:',
    ['39', '43', '40', '37'], 0,
    'aₙ = a₁ + (n − 1)·r → a₁₀ = 3 + 9 × 4 = 39.');
  q('matematica', 'Na PG (2, 6, 18, ...), o 5º termo é:',
    ['54', '162', '486', '108'], 1,
    'aₙ = a₁ · qⁿ⁻¹ → a₅ = 2 × 3⁴ = 2 × 81 = 162.');
  q('matematica', 'Ao lançar um dado comum, qual a probabilidade de sair um número par maior que 2?',
    ['1/2', '1/3', '1/6', '2/3'], 1,
    'Casos favoráveis: 4 e 6 (2 casos) em 6 possíveis → 2/6 = 1/3.');
  q('matematica', 'Quantos anagramas tem a palavra AMOR?',
    ['12', '16', '24', '8'], 2,
    'São 4 letras diferentes: permutação 4! = 4 × 3 × 2 × 1 = 24.');
  q('matematica', 'R$ 1.000,00 aplicados a juros simples de 2% ao mês durante 6 meses rendem quanto de juros?',
    ['R$ 120,00', 'R$ 126,16', 'R$ 60,00', 'R$ 200,00'], 0,
    'Juros simples: J = C · i · t = 1000 × 0,02 × 6 = 120. (R$ 126,16 seria a juros compostos.)');
  q('matematica', 'Qual a área de um triângulo com base 8 cm e altura 5 cm?',
    ['40 cm²', '20 cm²', '13 cm²', '26 cm²'], 1,
    'Área do triângulo = (base × altura) ÷ 2 = (8 × 5) ÷ 2 = 20 cm².');
  q('matematica', 'Qual o volume de um cubo de aresta 3 cm?',
    ['9 cm³', '18 cm³', '27 cm³', '12 cm³'], 2,
    'Volume do cubo = aresta³ = 3 × 3 × 3 = 27 cm³.');
  q('matematica', 'Qual a média aritmética de 4, 6, 8, 10 e 12?',
    ['8', '7', '9', '10'], 0,
    'Soma = 40; quantidade = 5; média = 40 ÷ 5 = 8.');
  q('matematica', 'R$ 1.000,00 aplicados a juros compostos de 10% ao ano por 2 anos resultam em qual montante?',
    ['R$ 1.200,00', 'R$ 1.210,00', 'R$ 1.100,00', 'R$ 1.221,00'], 1,
    'Juros compostos: M = C · (1 + i)ᵗ = 1000 × 1,1² = 1000 × 1,21 = 1.210. Os juros do 2º ano incidem sobre 1.100.');

  /* ---------------- Biologia ---------------- */
  q('biologia', 'Qual organela é responsável pela respiração celular?',
    ['ribossomo', 'mitocôndria', 'cloroplasto', 'complexo golgiense'], 1,
    'A mitocôndria quebra a glicose na presença de oxigênio e produz energia (ATP).');
  q('biologia', 'Em qual organela ocorre a fotossíntese?',
    ['mitocôndria', 'núcleo', 'cloroplasto', 'lisossomo'], 2,
    'O cloroplasto contém clorofila, que capta a luz para produzir glicose.');
  q('biologia', 'Quais são os produtos da fotossíntese?',
    ['gás carbônico e água', 'glicose e oxigênio', 'glicose e gás carbônico', 'ATP e gás carbônico'], 1,
    'A planta usa CO₂ + água + luz e produz glicose + O₂. A respiração faz o caminho inverso.');
  q('biologia', 'Uma célula procariótica se caracteriza por:',
    ['ter núcleo delimitado por membrana', 'não ter núcleo organizado (sem carioteca)', 'sempre ter cloroplastos', 'existir só em animais'], 1,
    'Procariontes (como as bactérias) têm o material genético solto no citoplasma, sem membrana nuclear.');
  q('biologia', 'No cruzamento Aa × Aa, qual a proporção esperada de descendentes aa?',
    ['1/2', '1/4', '3/4', '0'], 1,
    'Quadro de Punnett: AA, Aa, Aa, aa → 1 em 4 é aa (1/4).');
  q('biologia', 'O DNA é formado por unidades chamadas:',
    ['aminoácidos', 'nucleotídeos', 'ácidos graxos', 'monossacarídeos'], 1,
    'Cada nucleotídeo tem um açúcar (desoxirribose), um fosfato e uma base nitrogenada (A, T, C ou G). Aminoácidos formam proteínas.');
  q('biologia', 'Qual a ordem correta das categorias de classificação, da mais ampla para a mais específica?',
    ['Reino, Filo, Classe, Ordem, Família, Gênero, Espécie', 'Reino, Classe, Filo, Família, Ordem, Espécie, Gênero', 'Espécie, Gênero, Família, Ordem, Classe, Filo, Reino', 'Filo, Reino, Classe, Ordem, Gênero, Família, Espécie'], 0,
    'Macete: "Rei Filipe Classificou Ordens Para Gêneros Específicos" — Reino, Filo, Classe, Ordem, Família, Gênero, Espécie.');
  q('biologia', 'Os cogumelos e bolores pertencem a qual reino?',
    ['Plantae', 'Fungi', 'Monera', 'Protista'], 1,
    'Fungos formam um reino próprio: não fazem fotossíntese e se alimentam absorvendo nutrientes (heterótrofos).');
  q('biologia', 'Qual tecido vegetal conduz a seiva bruta (água e sais minerais) das raízes até as folhas?',
    ['floema', 'xilema', 'parênquima', 'epiderme'], 1,
    'Xilema leva a seiva bruta para cima; o floema distribui a seiva elaborada (com açúcares) produzida nas folhas.');
  q('biologia', 'Qual destes animais é um mamífero?',
    ['tubarão', 'golfinho', 'pinguim', 'jacaré'], 1,
    'O golfinho respira por pulmões e amamenta os filhotes. Tubarão é peixe, pinguim é ave e jacaré é réptil.');
  q('biologia', 'Em qual órgão ocorre a maior parte da absorção dos nutrientes?',
    ['estômago', 'intestino delgado', 'intestino grosso', 'esôfago'], 1,
    'O intestino delgado tem vilosidades que aumentam muito a área de absorção. O intestino grosso absorve principalmente água.');
  q('biologia', 'Quais células do sangue transportam oxigênio?',
    ['leucócitos', 'plaquetas', 'hemácias', 'linfócitos'], 2,
    'As hemácias têm hemoglobina, que se liga ao oxigênio. Leucócitos defendem o corpo; plaquetas ajudam na coagulação.');
  q('biologia', 'A teoria da evolução por seleção natural foi proposta por:',
    ['Lamarck', 'Darwin (e Wallace)', 'Mendel', 'Pasteur'], 1,
    'Darwin e Wallace propuseram que os indivíduos mais adaptados ao ambiente sobrevivem e se reproduzem mais.');
  q('biologia', 'A "lei do uso e desuso" e a herança de características adquiridas são ideias de:',
    ['Darwin', 'Lamarck', 'Mendel', 'Watson'], 1,
    'Lamarck dizia que órgãos usados se desenvolvem e que isso passaria aos filhos — ideia que não se confirmou.');
  q('biologia', 'Numa cadeia alimentar, os produtores são:',
    ['os herbívoros', 'os decompositores', 'os seres fotossintetizantes, como plantas e algas', 'os carnívoros'], 2,
    'Produtores fabricam o próprio alimento pela fotossíntese e sustentam toda a cadeia.');
  q('biologia', 'A intensificação do efeito estufa está ligada principalmente à emissão de:',
    ['oxigênio', 'gás carbônico (CO₂)', 'nitrogênio', 'gás hélio'], 1,
    'CO₂ (queima de combustíveis e desmatamento) e metano retêm calor na atmosfera, aquecendo o planeta.');

  /* ---------------- História ---------------- */
  q('historia', 'Na democracia de Atenas, na Grécia Antiga:',
    ['todos os habitantes votavam, inclusive mulheres e escravos', 'só os cidadãos (homens livres atenienses) participavam diretamente', 'um rei absoluto governava', 'havia voto secreto universal'], 1,
    'Era uma democracia direta, mas restrita: mulheres, estrangeiros (metecos) e escravos não eram cidadãos.');
  q('historia', 'A queda do Império Romano do Ocidente, que marca o início da Idade Média, ocorreu em:',
    ['476', '1453', '1500', '1789'], 0,
    'Em 476 o último imperador romano do Ocidente foi deposto. 1453 é a queda de Constantinopla (fim da Idade Média).');
  q('historia', 'O sistema econômico e social predominante na Europa medieval foi o:',
    ['capitalismo', 'feudalismo', 'socialismo', 'mercantilismo'], 1,
    'No feudalismo a terra era a base da riqueza, com relações de suserania e vassalagem e servos presos à terra.');
  q('historia', 'Qual foi a principal atividade econômica do Brasil nos séculos XVI e XVII?',
    ['café', 'borracha', 'açúcar', 'ouro'], 2,
    'A cana-de-açúcar dominou, principalmente no Nordeste, com mão de obra escravizada. O ouro veio no século XVIII.');
  q('historia', 'O ciclo do ouro, no século XVIII, concentrou-se principalmente em:',
    ['Pernambuco', 'Minas Gerais', 'Rio Grande do Sul', 'Pará'], 1,
    'A mineração em Minas Gerais deslocou o eixo econômico para o Centro-Sul e fez o Rio de Janeiro virar capital (1763).');
  q('historia', 'A Reforma Protestante foi iniciada em 1517 por:',
    ['João Calvino', 'Martinho Lutero', 'Henrique VIII', 'Erasmo de Roterdã'], 1,
    'Lutero publicou as 95 teses criticando a venda de indulgências pela Igreja Católica.');
  q('historia', 'Qual acontecimento é o marco inicial da Revolução Francesa, em 1789?',
    ['A Queda da Bastilha', 'A Proclamação da República', 'A coroação de Napoleão', 'O Tratado de Versalhes'], 0,
    'Em 14 de julho de 1789 a população tomou a Bastilha, prisão símbolo do absolutismo.');
  q('historia', 'A Revolução Industrial começou no século XVIII em qual país?',
    ['França', 'Inglaterra', 'Estados Unidos', 'Alemanha'], 1,
    'A Inglaterra tinha carvão, capital acumulado, mão de obra disponível e domínio do comércio marítimo.');
  q('historia', 'A Lei Áurea, que aboliu a escravidão no Brasil, foi assinada em:',
    ['1822', '1850', '1888', '1889'], 2,
    'Assinada pela princesa Isabel em 13 de maio de 1888. O Brasil foi o último país das Américas a abolir a escravidão.');
  q('historia', 'A Independência do Brasil, em 1822, foi proclamada por:',
    ['D. João VI', 'D. Pedro I', 'D. Pedro II', 'Marechal Deodoro'], 1,
    'D. Pedro I proclamou a independência em 7 de setembro de 1822 e se tornou o primeiro imperador.');
  q('historia', 'A Proclamação da República no Brasil ocorreu em:',
    ['1888', '1889', '1891', '1930'], 1,
    'Em 15 de novembro de 1889, liderada pelo Marechal Deodoro da Fonseca. A primeira Constituição republicana é de 1891.');
  q('historia', 'Uma marca da Era Vargas (1930–1945) foi:',
    ['a criação da CLT (leis trabalhistas)', 'o fim da escravidão', 'a construção de Brasília', 'o Plano Real'], 0,
    'A Consolidação das Leis do Trabalho é de 1943. Brasília foi obra de JK (1960) e o Plano Real é de 1994.');
  q('historia', 'Qual foi o estopim da Primeira Guerra Mundial (1914)?',
    ['A invasão da Polônia', 'O assassinato do arquiduque Francisco Ferdinando', 'O ataque a Pearl Harbor', 'A queda do Muro de Berlim'], 1,
    'O herdeiro do trono austro-húngaro foi morto em Sarajevo. A invasão da Polônia (1939) iniciou a Segunda Guerra.');
  q('historia', 'A Guerra Fria opôs principalmente:',
    ['EUA e União Soviética', 'Alemanha e França', 'China e Japão', 'Inglaterra e EUA'], 0,
    'Disputa entre o bloco capitalista (EUA) e o socialista (URSS), de 1947 a 1991, sem confronto direto entre os dois.');
  q('historia', 'O AI-5, de 1968, durante a ditadura militar:',
    ['restabeleceu as eleições diretas', 'endureceu o regime, permitindo fechar o Congresso e suspender garantias', 'concedeu anistia aos presos políticos', 'criou uma nova moeda'], 1,
    'O Ato Institucional nº 5 suspendeu o habeas corpus para crimes políticos e ampliou a censura e a repressão.');
  q('historia', 'A atual Constituição do Brasil, chamada de "Constituição Cidadã", é de:',
    ['1964', '1985', '1988', '1989'], 2,
    'Promulgada em 5 de outubro de 1988, marcou a redemocratização e ampliou direitos sociais e individuais.');

  /* ---------------- Geografia ---------------- */
  q('geografia', 'Num mapa com escala 1:100.000, 1 cm no mapa corresponde a quanto no terreno?',
    ['100 m', '1 km', '10 km', '100 km'], 1,
    '1 cm × 100.000 = 100.000 cm = 1.000 m = 1 km.');
  q('geografia', 'As linhas imaginárias usadas para medir a longitude são os:',
    ['paralelos', 'meridianos', 'trópicos', 'círculos polares'], 1,
    'Meridianos ligam os polos e medem a longitude (leste/oeste de Greenwich). Paralelos medem a latitude.');
  q('geografia', 'Qual clima predomina na maior parte do Sertão nordestino?',
    ['equatorial', 'semiárido', 'subtropical', 'temperado'], 1,
    'O semiárido tem chuvas escassas e irregulares, com longos períodos de seca e vegetação de Caatinga.');
  q('geografia', 'Quais são agentes externos que modelam o relevo?',
    ['vulcanismo e tectonismo', 'chuva, vento e rios (intemperismo e erosão)', 'terremotos', 'dobramentos da crosta'], 1,
    'Agentes externos desgastam e esculpem o relevo. Vulcanismo, tectonismo e terremotos são agentes internos.');
  q('geografia', 'Qual destas é uma fonte de energia renovável?',
    ['petróleo', 'carvão mineral', 'energia solar', 'gás natural'], 2,
    'Fontes renováveis se recompõem naturalmente (sol, vento, água). Combustíveis fósseis levam milhões de anos para se formar.');
  q('geografia', 'Qual é a principal fonte de geração de energia elétrica no Brasil?',
    ['nuclear', 'hidrelétrica', 'carvão mineral', 'petróleo'], 1,
    'As hidrelétricas ainda geram a maior parte da eletricidade do país, com a eólica e a solar crescendo rapidamente.');
  q('geografia', 'O que a transição demográfica brasileira das últimas décadas mostra?',
    ['aumento da natalidade', 'envelhecimento da população e queda da natalidade', 'aumento da mortalidade infantil', 'população cada vez mais jovem'], 1,
    'Com menos filhos por mulher e maior expectativa de vida, a pirâmide etária se estreita na base e se alarga no topo.');
  q('geografia', 'O que é conurbação?',
    ['a saída de pessoas do campo', 'a junção física de duas ou mais cidades pela expansão urbana', 'o crescimento de favelas', 'a migração internacional'], 1,
    'Quando as manchas urbanas crescem e se encontram, as cidades parecem uma só — comum nas regiões metropolitanas.');
  q('geografia', 'Êxodo rural significa:',
    ['migração do campo para a cidade', 'migração da cidade para o campo', 'migração entre países', 'migração por temporada de colheita'], 0,
    'No Brasil, foi intenso entre 1950 e 1980, impulsionado pela industrialização e pela mecanização do campo.');
  q('geografia', 'O agronegócio brasileiro se destaca na exportação de:',
    ['trigo e cevada', 'soja e carnes', 'arroz e feijão', 'azeite de oliva'], 1,
    'O Brasil está entre os maiores exportadores de soja, carne bovina e frango do mundo.');
  q('geografia', 'Historicamente, a industrialização brasileira se concentrou em qual região?',
    ['Norte', 'Sudeste', 'Centro-Oeste', 'Sul'], 1,
    'São Paulo, Rio e Minas reuniram capital do café, infraestrutura e mercado consumidor.');
  q('geografia', 'Uma característica da globalização é:',
    ['o isolamento econômico dos países', 'a intensificação dos fluxos de mercadorias, capitais e informações', 'o fim do comércio internacional', 'a redução das comunicações'], 1,
    'A globalização integra economias e culturas, acelerada pelos avanços em transportes e tecnologia da informação.');
  q('geografia', 'Quais são os países fundadores do Mercosul (1991)?',
    ['Brasil, Argentina, Uruguai e Paraguai', 'Brasil, Chile, Peru e Colômbia', 'Brasil, México, EUA e Canadá', 'Argentina, Bolívia, Equador e Venezuela'], 0,
    'O Tratado de Assunção criou o Mercosul com esses quatro países.');
  q('geografia', 'Qual é a moeda comum adotada por parte dos países da União Europeia?',
    ['dólar', 'euro', 'libra', 'franco'], 1,
    'O euro circula desde 2002 na chamada Zona do Euro. Nem todos os membros da UE o adotam.');
  q('geografia', 'A sigla BRICS, em sua formação original, reúne Brasil, Rússia, Índia, China e:',
    ['África do Sul', 'Bolívia', 'Bélgica', 'Bangladesh'], 0,
    'A África do Sul entrou em 2011 e acrescentou o "S". O grupo foi ampliado depois com novos membros.');
  q('geografia', 'O Acordo de Paris (2015) trata principalmente de:',
    ['comércio internacional', 'limitar o aquecimento global reduzindo emissões de gases de efeito estufa', 'desarmamento nuclear', 'refugiados de guerra'], 1,
    'A meta é manter o aquecimento bem abaixo de 2 °C, buscando 1,5 °C, em relação à era pré-industrial.');

  /* ---------------- Filosofia ---------------- */
  q('filosofia', 'A palavra "filosofia" significa:',
    ['amor à sabedoria', 'estudo da natureza', 'ciência da alma', 'arte de falar bem'], 0,
    'Do grego "philo" (amor, amizade) + "sophia" (sabedoria).');
  q('filosofia', 'Qual era a principal preocupação dos filósofos pré-socráticos?',
    ['ética e política', 'a origem e o princípio (arché) da natureza', 'provar a existência de Deus', 'a linguagem'], 1,
    'Eles buscavam explicar o mundo pela razão, procurando o elemento primordial de tudo (arché), em vez de recorrer aos mitos.');
  q('filosofia', 'Para Tales de Mileto, o princípio de todas as coisas era:',
    ['o fogo', 'a água', 'o ar', 'o átomo'], 1,
    'Tales via a água como origem de tudo. Heráclito apontou o fogo, Anaxímenes o ar e Demócrito os átomos.');
  q('filosofia', 'Como se chama o método de Sócrates de fazer perguntas para o interlocutor "dar à luz" as próprias ideias?',
    ['dialética hegeliana', 'maiêutica', 'dúvida metódica', 'empirismo'], 1,
    'Maiêutica significa "arte do parto". Sócrates começava pela ironia (mostrando a ignorância) e seguia com perguntas.');
  q('filosofia', 'O mito da caverna, de Platão, ilustra:',
    ['a diferença entre o mundo sensível (aparências) e o mundo inteligível (ideias)', 'a origem do universo', 'a teoria da evolução', 'o contrato social'], 0,
    'Os prisioneiros veem só sombras (aparências). Sair da caverna representa alcançar o conhecimento verdadeiro pela razão.');
  q('filosofia', 'Para Aristóteles, a virtude ética está:',
    ['nos extremos', 'no justo meio entre o excesso e a falta', 'na busca do prazer', 'na obediência aos deuses'], 1,
    'Exemplo: coragem é o meio-termo entre a covardia (falta) e a imprudência (excesso).');
  q('filosofia', 'Tomás de Aquino buscou conciliar a fé cristã com a filosofia de:',
    ['Platão', 'Aristóteles', 'Descartes', 'Nietzsche'], 1,
    'A escolástica de Tomás de Aquino usou a lógica aristotélica para fundamentar a teologia.');
  q('filosofia', 'Santo Agostinho foi influenciado principalmente pela filosofia de:',
    ['Aristóteles', 'Platão (neoplatonismo)', 'Kant', 'Marx'], 1,
    'Agostinho adaptou ideias platônicas ao cristianismo, como a oposição entre o mundo terreno e a "Cidade de Deus".');
  q('filosofia', 'A frase "Penso, logo existo" é de:',
    ['Kant', 'Descartes', 'Locke', 'Hume'], 1,
    'Descartes duvidou de tudo (dúvida metódica) até chegar a uma certeza: se ele pensa, ele existe.');
  q('filosofia', 'Para John Locke, a mente humana ao nascer é:',
    ['cheia de ideias inatas', 'uma "tábula rasa"', 'uma cópia do mundo das ideias', 'determinada pelos astros'], 1,
    'Locke é empirista: todo conhecimento vem da experiência, escrita numa mente inicialmente "em branco".');
  q('filosofia', 'O imperativo categórico de Kant diz que devemos agir:',
    ['buscando o maior prazer possível', 'segundo uma regra que possamos querer que vire lei universal', 'conforme as emoções do momento', 'para obter recompensa'], 1,
    'Para Kant, a ação moral vem do dever e da razão, e não das consequências ou do interesse pessoal.');
  q('filosofia', 'A ética, como área da filosofia, estuda:',
    ['os astros', 'os valores e princípios que orientam a conduta humana', 'os números', 'as leis da física'], 1,
    'A ética reflete sobre o bem, o justo e como devemos agir, individualmente e em sociedade.');
  q('filosofia', 'Qual filósofo anunciou que "Deus está morto"?',
    ['Nietzsche', 'Descartes', 'Hobbes', 'Sócrates'], 0,
    'Nietzsche falava da perda da crença em valores absolutos na cultura ocidental, o que exigiria criar novos valores.');
  q('filosofia', 'Para Sartre, "a existência precede a essência" significa que:',
    ['nascemos com um destino definido', 'o ser humano primeiro existe e depois se define pelas próprias escolhas', 'a essência vem de Deus', 'a natureza determina tudo o que somos'], 1,
    'No existencialismo somos "condenados a ser livres": responsáveis pelo que fazemos de nós mesmos.');
  q('filosofia', 'Hannah Arendt criou a expressão "banalidade do mal" ao acompanhar o julgamento de:',
    ['Adolf Hitler', 'Adolf Eichmann', 'Josef Stalin', 'Benito Mussolini'], 1,
    'Eichmann, organizador de deportações nazistas, parecia um burocrata comum que "só cumpria ordens", sem pensar no que fazia.');
  q('filosofia', 'Que filósofo defendeu um Estado forte (o Leviatã) para evitar a "guerra de todos contra todos"?',
    ['Rousseau', 'Hobbes', 'Locke', 'Montesquieu'], 1,
    'Para Hobbes, no estado de natureza "o homem é o lobo do homem"; por isso as pessoas cedem poder ao soberano em troca de segurança.');

  /* ---------------- Sociologia ---------------- */
  q('sociologia', 'Para Durkheim, um fato social é:',
    ['uma opinião individual', 'uma maneira de agir, pensar e sentir exterior ao indivíduo e que exerce coerção sobre ele', 'um acontecimento noticiado na imprensa', 'um fenômeno natural'], 1,
    'Fatos sociais são gerais, exteriores e coercitivos — como regras de etiqueta, leis e a língua.');
  q('sociologia', 'Para Karl Marx, a história é movida principalmente:',
    ['pela luta de classes', 'pela vontade divina', 'pela ação dos grandes heróis', 'pela evolução biológica'], 0,
    'Marx via o conflito entre quem detém os meios de produção (burguesia) e quem vende sua força de trabalho (proletariado).');
  q('sociologia', 'Max Weber analisou a relação entre a ética protestante e:',
    ['o socialismo', 'o espírito do capitalismo', 'o feudalismo', 'o anarquismo'], 1,
    'Weber mostrou como valores religiosos como trabalho disciplinado e poupança favoreceram o capitalismo.');
  q('sociologia', 'Para Weber, ação social é:',
    ['qualquer movimento físico', 'uma ação com sentido, orientada pelo comportamento de outras pessoas', 'uma ação imposta pelo Estado', 'apenas a ação de multidões'], 1,
    'O foco de Weber é o indivíduo e o sentido que ele dá às próprias ações em relação aos outros.');
  q('sociologia', 'O que é etnocentrismo?',
    ['respeitar igualmente todas as culturas', 'julgar outras culturas pelos valores da própria, tida como superior', 'estudar as etnias', 'misturar culturas'], 1,
    'O etnocentrismo pode gerar preconceito. O oposto é o relativismo cultural.');
  q('sociologia', 'O relativismo cultural defende:',
    ['que existe uma hierarquia entre culturas', 'compreender cada cultura a partir de seus próprios valores e contexto', 'que só a cultura ocidental é válida', 'que as culturas devem ser iguais'], 1,
    'É a postura de buscar entender práticas culturais diferentes sem julgá-las pelos padrões da nossa cultura.');
  q('sociologia', 'O fordismo caracterizou-se por:',
    ['produção em massa em linha de montagem', 'produção artesanal', 'produção flexível sob demanda', 'trabalho remoto'], 0,
    'Henry Ford padronizou produtos e fragmentou o trabalho em tarefas repetitivas na esteira, barateando a produção.');
  q('sociologia', 'O toyotismo se caracteriza por:',
    ['grandes estoques', 'produção flexível, "just in time" e estoques reduzidos', 'trabalhador que faz uma só tarefa repetitiva', 'produção artesanal'], 1,
    'Produz-se conforme a demanda, com trabalhadores multifuncionais e foco em qualidade.');
  q('sociologia', 'Mobilidade social é:',
    ['mudar de cidade', 'a mudança de posição de um indivíduo ou grupo na estrutura social', 'o transporte público', 'a migração internacional'], 1,
    'Pode ser ascendente (subir de classe) ou descendente. A educação é um dos principais caminhos de ascensão.');
  q('sociologia', 'Movimentos sociais são:',
    ['partidos políticos', 'ações coletivas organizadas que buscam mudanças ou a garantia de direitos', 'órgãos do governo', 'empresas privadas'], 1,
    'Exemplos: movimentos feminista, negro, ambientalista, sindical e pela moradia.');
  q('sociologia', 'Max Weber definiu o Estado como a instituição que detém o monopólio:',
    ['do comércio', 'do uso legítimo da força física', 'da religião', 'da educação'], 1,
    'Só o Estado pode usar a força de forma legítima, por meio da polícia e das Forças Armadas, dentro da lei.');
  q('sociologia', 'Na democracia representativa:',
    ['os cidadãos decidem tudo diretamente', 'os cidadãos elegem representantes que decidem em seu nome', 'um monarca governa sozinho', 'não há eleições'], 1,
    'O Brasil adota a democracia representativa, com instrumentos de participação direta como plebiscito, referendo e iniciativa popular.');
  q('sociologia', 'A divisão do poder em Executivo, Legislativo e Judiciário foi sistematizada por:',
    ['Montesquieu', 'Marx', 'Durkheim', 'Maquiavel'], 0,
    'Em "O Espírito das Leis", Montesquieu propôs que os poderes se controlem mutuamente para evitar abusos.');
  q('sociologia', 'T. H. Marshall dividiu os direitos de cidadania em:',
    ['civis, políticos e sociais', 'naturais, divinos e humanos', 'individuais, familiares e estatais', 'econômicos, militares e religiosos'], 0,
    'Civis (liberdade, propriedade), políticos (votar e ser votado) e sociais (educação, saúde, trabalho).');
  q('sociologia', 'O conceito de "indústria cultural" (Adorno e Horkheimer) refere-se:',
    ['à cultura popular espontânea', 'à produção da cultura como mercadoria em massa', 'ao artesanato local', 'aos museus públicos'], 1,
    'Filmes, músicas e programas padronizados para o consumo, que segundo os autores reduzem o senso crítico.');
  q('sociologia', 'Segundo a Constituição de 1988, o voto é obrigatório para:',
    ['maiores de 16 anos', 'alfabetizados maiores de 18 e menores de 70 anos', 'todos os maiores de 18 anos', 'ninguém: é sempre facultativo'], 1,
    'É facultativo para analfabetos, para quem tem 16 ou 17 anos e para maiores de 70.');

  /* ---------------- Raciocínio lógico ---------------- */
  q('logica', 'Qual das frases é uma proposição?',
    ['Que horas são?', 'Feche a porta.', 'Brasília é a capital do Brasil.', 'Que dia lindo!'], 2,
    'Proposição é uma frase declarativa que pode ser julgada como verdadeira ou falsa. Perguntas, ordens e exclamações não são.');
  q('logica', 'Qual a negação de "Todos os servidores são pontuais"?',
    ['Nenhum servidor é pontual.', 'Algum servidor não é pontual.', 'Todos os servidores não são pontuais.', 'Algum servidor é pontual.'], 1,
    'Para negar "todo", basta um contraexemplo: "algum... não". Macete: a negação de TODO é ALGUM NÃO.');
  q('logica', 'Se p é verdadeira e q é falsa, a proposição "p e q" (p ∧ q) é:',
    ['verdadeira', 'falsa', 'indeterminada', 'verdadeira só se q for verdadeira depois'], 1,
    'A conjunção "e" só é verdadeira quando as duas partes são verdadeiras.');
  q('logica', 'Se p é falsa e q é falsa, o condicional "se p, então q" (p → q) é:',
    ['verdadeiro', 'falso', 'indeterminado', 'impossível de avaliar'], 0,
    'O condicional só é falso no caso "Vera Fischer": antecedente Verdadeiro e consequente Falso. Nos demais casos é verdadeiro.');
  q('logica', 'A disjunção "p ou q" (p ∨ q) é falsa somente quando:',
    ['p e q são verdadeiras', 'p e q são falsas', 'p é verdadeira e q é falsa', 'p é falsa e q é verdadeira'], 1,
    'Basta uma das partes ser verdadeira para o "ou" ser verdadeiro.');
  q('logica', 'Uma proposição composta por 3 proposições simples tem quantas linhas na tabela-verdade?',
    ['6', '8', '9', '3'], 1,
    'Número de linhas = 2ⁿ, em que n é o número de proposições simples: 2³ = 8.');
  q('logica', '"Se chove, então a rua fica molhada" é equivalente a:',
    ['Se a rua fica molhada, então choveu.', 'Se não chove, então a rua não fica molhada.', 'Se a rua não fica molhada, então não choveu.', 'Chove e a rua não fica molhada.'], 2,
    'Contrapositiva: p → q equivale a ~q → ~p (inverte a ordem e nega as duas partes).');
  q('logica', 'Qual a negação de "Se estudo, então passo"?',
    ['Se não estudo, então não passo.', 'Estudo e não passo.', 'Não estudo e passo.', 'Se passo, então estudo.'], 1,
    'A negação de p → q é p ∧ ~q: mantém a primeira parte, troca "se...então" por "e" e nega a segunda.');
  q('logica', '"Se Ana estuda, então ela passa" é equivalente a:',
    ['Ana não estuda ou passa.', 'Ana estuda e não passa.', 'Ana estuda ou não passa.', 'Ana não estuda e não passa.'], 0,
    'p → q equivale a ~p ∨ q (nega a primeira parte, troca por "ou" e mantém a segunda).');
  q('logica', 'Qual a negação de "João é alto e Maria é baixa"?',
    ['João não é alto e Maria não é baixa.', 'João não é alto ou Maria não é baixa.', 'João é alto ou Maria é baixa.', 'Se João é alto, Maria não é baixa.'], 1,
    'Lei de De Morgan: ~(p ∧ q) = ~p ∨ ~q. Nega as duas partes e troca "e" por "ou".');
  q('logica', 'Qual o próximo termo da sequência 2, 5, 10, 17, 26, ...?',
    ['35', '37', '36', '39'], 1,
    'As diferenças são 3, 5, 7, 9 → a próxima é 11: 26 + 11 = 37. (Também é n² + 1.)');
  q('logica', 'Qual o próximo termo da sequência 1, 1, 2, 3, 5, 8, ...?',
    ['11', '12', '13', '15'], 2,
    'Sequência de Fibonacci: cada termo é a soma dos dois anteriores (5 + 8 = 13).');
  q('logica', 'Qual a próxima letra da sequência A, C, E, G, ...?',
    ['H', 'I', 'J', 'K'], 1,
    'Pula-se uma letra a cada passo: A (b) C (d) E (f) G (h) I.');
  q('logica', 'Ana é mais alta que Bia, e Bia é mais alta que Carla. Logo:',
    ['Carla é a mais alta.', 'Ana é mais alta que Carla.', 'Bia é a mais baixa.', 'Não é possível concluir nada.'], 1,
    'A relação "mais alta que" é transitiva: Ana > Bia > Carla.');
  q('logica', '"Nenhum peixe é mamífero" e "Todo tubarão é peixe". Logo:',
    ['Algum tubarão é mamífero.', 'Nenhum tubarão é mamífero.', 'Todo mamífero é tubarão.', 'Alguns peixes são mamíferos.'], 1,
    'Desenhe os conjuntos: tubarões estão dentro de peixes, e peixes não têm intersecção com mamíferos.');
  q('logica', 'Numa fila, Pedro é o 7º contando da frente e o 5º contando de trás. Quantas pessoas há na fila?',
    ['12', '11', '13', '10'], 1,
    '7 + 5 − 1 = 11. Subtrai-se 1 porque Pedro foi contado duas vezes.');

  /* ---------------- Informática ---------------- */
  q('informatica', 'Qual destes é um sistema operacional?',
    ['Microsoft Word', 'Linux', 'Google Chrome', 'Excel'], 1,
    'Sistema operacional gerencia o hardware e roda os programas (Windows, Linux, macOS, Android). Os demais são aplicativos.');
  q('informatica', 'No Windows, o atalho Ctrl + Z serve para:',
    ['copiar', 'desfazer', 'colar', 'salvar'], 1,
    'Ctrl + Z desfaz; Ctrl + C copia; Ctrl + V cola; Ctrl + X recorta; Ctrl + Y refaz.');
  q('informatica', 'No Windows, o atalho tecla Windows + E abre:',
    ['o Explorador de Arquivos', 'as Configurações', 'a Área de Trabalho', 'a tela de bloqueio'], 0,
    'Win + E = Explorador de Arquivos; Win + D = mostrar a Área de Trabalho; Win + L = bloquear; Win + I = Configurações.');
  q('informatica', 'No Microsoft Word em português, o atalho Ctrl + N:',
    ['cria um novo documento', 'aplica negrito', 'salva o arquivo', 'imprime'], 1,
    'Na versão em português: Ctrl + N = negrito, Ctrl + I = itálico, Ctrl + S = sublinhado, Ctrl + B = salvar. Pegadinha clássica de concurso!');
  q('informatica', 'No Excel, se A1 = 2, A2 = 4 e A3 = 6, a fórmula =SOMA(A1:A3) resulta em:',
    ['6', '12', '10', '2'], 1,
    'O ":" indica intervalo (de A1 até A3): 2 + 4 + 6 = 12.');
  q('informatica', 'No Excel, =MÉDIA(B1:B4), com os valores 10, 20, 30 e 40, resulta em:',
    ['25', '100', '20', '30'], 0,
    'Soma = 100; 4 valores; média = 100 ÷ 4 = 25.');
  q('informatica', 'No Excel, qual é uma referência absoluta (não muda ao copiar a fórmula)?',
    ['A1', '$A$1', '#A1', '&A1'], 1,
    'O cifrão "trava" a coluna e/ou a linha. $A$1 trava as duas; $A1 trava só a coluna; A$1 trava só a linha.');
  q('informatica', 'Qual protocolo indica conexão segura (criptografada) com um site?',
    ['HTTP', 'HTTPS', 'FTP', 'SMTP'], 1,
    'O "S" de HTTPS vem de "seguro": usa TLS para criptografar os dados. O navegador costuma mostrar um cadeado.');
  q('informatica', 'No e-mail, o campo CCO (Cco) serve para:',
    ['enviar uma cópia visível a todos', 'enviar uma cópia oculta, sem que os outros vejam esse destinatário', 'anexar arquivos', 'definir o assunto'], 1,
    'CC = cópia carbono (todos veem). CCO = cópia carbono oculta (os demais não veem quem está nela).');
  q('informatica', 'Qual protocolo é usado para ENVIAR e-mails?',
    ['POP3', 'IMAP', 'SMTP', 'HTTP'], 2,
    'SMTP envia. POP3 e IMAP recebem (o IMAP sincroniza as mensagens com o servidor).');
  q('informatica', 'O que é phishing?',
    ['um vírus que apaga arquivos', 'um golpe que usa mensagens ou sites falsos para roubar dados', 'um tipo de backup', 'um firewall'], 1,
    'Vem de "fishing" (pescar): o golpista se passa por banco ou empresa para "pescar" senhas e dados.');
  q('informatica', 'O ransomware é um malware que:',
    ['criptografa (sequestra) os dados e exige resgate', 'apenas mostra propagandas', 'acelera o computador', 'faz backup automático'], 0,
    'A melhor defesa é ter backups atualizados e fora da máquina, além de manter o sistema atualizado.');
  q('informatica', 'Para que serve um firewall?',
    ['acelerar a internet', 'controlar e filtrar o tráfego de rede conforme regras', 'remover vírus de arquivos', 'fazer backup'], 1,
    'O firewall bloqueia ou permite conexões. Ele não é antivírus: não limpa arquivos infectados.');
  q('informatica', 'O que é autenticação de dois fatores (2FA)?',
    ['usar duas senhas iguais', 'exigir uma segunda prova de identidade além da senha, como um código no celular', 'trocar a senha duas vezes', 'ter duas contas'], 1,
    'Combina algo que você sabe (senha) com algo que você tem (celular, token) ou que você é (biometria).');
  q('informatica', 'Uma rede LAN é:',
    ['uma rede de longa distância, entre países', 'uma rede local, como a de uma casa ou escritório', 'a própria internet', 'uma rede só de celulares'], 1,
    'LAN = Local Area Network. WAN = rede de longa distância (a internet é a maior delas).');
  q('informatica', 'O que faz o DNS?',
    ['traduz nomes de domínio (ex.: gov.br) em endereços IP', 'protege contra vírus', 'envia e-mails', 'armazena arquivos na nuvem'], 0,
    'É como uma "agenda telefônica" da internet: você digita o nome e o DNS encontra o número (IP) do servidor.');

  /* ---------------- Noções de Administração ---------------- */
  q('administracao', 'Quais são as funções administrativas (processo administrativo)?',
    ['planejar, organizar, dirigir e controlar', 'comprar, vender, produzir e entregar', 'contratar, treinar, avaliar e demitir', 'orçar, pagar, cobrar e auditar'], 0,
    'Conhecidas pela sigla PODC: Planejamento, Organização, Direção e Controle.');
  q('administracao', 'Qual função administrativa define objetivos e decide antecipadamente como alcançá-los?',
    ['organizar', 'planejar', 'dirigir', 'controlar'], 1,
    'O planejamento é a primeira função: responde "o que, como, quando e com que recursos" fazer.');
  q('administracao', 'Qual função compara os resultados com o que foi planejado e corrige desvios?',
    ['controle', 'direção', 'organização', 'planejamento'], 0,
    'O controle mede o desempenho, compara com os padrões e propõe ações corretivas.');
  q('administracao', 'A função "dirigir" envolve principalmente:',
    ['liderança, motivação e comunicação com as pessoas', 'definir o orçamento anual', 'montar o organograma', 'auditar as contas'], 0,
    'Direção é conduzir as pessoas para os objetivos: liderar, motivar, comunicar e coordenar.');
  q('administracao', 'O planejamento de longo prazo, que envolve a organização como um todo e é feito pela alta direção, é o:',
    ['operacional', 'tático', 'estratégico', 'técnico'], 2,
    'Estratégico (alta direção, longo prazo), tático (gerências/departamentos, médio prazo) e operacional (tarefas, curto prazo).');
  q('administracao', 'Em administração, eficácia significa:',
    ['usar bem os recursos, sem desperdício', 'atingir os objetivos e resultados esperados', 'reduzir custos a qualquer preço', 'seguir regras à risca'], 1,
    'Eficácia = alcançar o resultado. Eficiência = usar bem os recursos. Efetividade = gerar impacto real e duradouro.');
  q('administracao', 'Em gestão de pessoas, recrutamento é:',
    ['escolher entre os candidatos o mais adequado', 'atrair candidatos para uma vaga', 'treinar novos funcionários', 'avaliar o desempenho'], 1,
    'Recrutamento atrai candidatos (pode ser interno ou externo). Seleção escolhe entre eles.');
  q('administracao', 'Na pirâmide de Maslow, qual necessidade fica na base?',
    ['autorrealização', 'fisiológicas', 'estima', 'sociais'], 1,
    'De baixo para cima: fisiológicas, segurança, sociais, estima e autorrealização.');
  q('administracao', 'Na teoria de Herzberg, os fatores higiênicos (salário, condições de trabalho, etc.):',
    ['quando ausentes causam insatisfação, mas sozinhos não motivam', 'são os principais motivadores', 'não têm relação com satisfação', 'só importam para gestores'], 0,
    'Os fatores motivacionais (reconhecimento, crescimento, o próprio trabalho) é que geram motivação.');
  q('administracao', 'Os princípios da administração pública no art. 37 da Constituição (LIMPE) são:',
    ['Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência', 'Liberdade, Igualdade, Moralidade, Patriotismo e Ética', 'Legalidade, Independência, Mérito, Probidade e Economia', 'Lealdade, Integridade, Moralidade, Prudência e Eficácia'], 0,
    'LIMPE é o macete. A Eficiência foi incluída pela Emenda Constitucional 19/1998.');
  q('administracao', 'Pelo princípio da legalidade, o administrador público:',
    ['pode fazer tudo o que a lei não proíbe', 'só pode fazer o que a lei permite ou determina', 'pode agir conforme sua vontade', 'só obedece a ordens do chefe'], 1,
    'O particular pode fazer o que a lei não proíbe; o agente público só pode fazer o que a lei autoriza.');
  q('administracao', 'O princípio da impessoalidade determina que os atos da administração:',
    ['visem ao interesse público, sem favorecer nem prejudicar pessoas específicas', 'sejam sempre secretos', 'beneficiem os servidores', 'sejam feitos sem lei'], 0,
    'Também proíbe a promoção pessoal de autoridades em obras e campanhas públicas.');
  q('administracao', 'O modelo burocrático de administração pública (inspirado em Weber) busca:',
    ['favorecer pessoas próximas ao governante', 'impessoalidade, hierarquia, regras formais e profissionalismo', 'foco total em resultados e no cliente', 'eliminar normas escritas'], 1,
    'Surgiu para combater o patrimonialismo. Seu risco é o excesso de formalismo ("burocracia" no sentido popular).');
  q('administracao', 'O patrimonialismo, na administração pública, caracteriza-se por:',
    ['confusão entre o patrimônio público e o privado do governante', 'concursos públicos rigorosos', 'foco em indicadores de resultado', 'transparência total'], 0,
    'No patrimonialismo, cargos e bens públicos são tratados como propriedade de quem governa, com nepotismo e corrupção.');
  q('administracao', 'Em um bom atendimento ao público, o servidor deve:',
    ['usar termos técnicos para mostrar conhecimento', 'ouvir com atenção, usar linguagem clara e tratar com cortesia', 'atender primeiro os conhecidos', 'encerrar rápido sem confirmar o entendimento'], 1,
    'Bom atendimento envolve empatia, clareza, cortesia, objetividade e igualdade de tratamento.');
  q('administracao', 'Por lei, o atendimento prioritário deve ser garantido a:',
    ['quem chegar primeiro', 'pessoas com deficiência, idosos (60+), gestantes, lactantes e pessoas com crianças de colo, entre outros', 'servidores públicos', 'clientes frequentes'], 1,
    'A Lei 10.048/2000 garante prioridade a esses grupos, e leis posteriores incluíram outros, como pessoas com autismo.');

  App.dados.questoes = lista;
})();
