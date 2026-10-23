/* =========================================================
   dissertativas.js — questões abertas das provas
   Cada uma tem os pontos que uma boa resposta precisa ter
   ("esperado"). No fim da prova você marca quais pontos a sua
   resposta cobriu, e pode mandar o texto para a IA corrigir.
   Formato: { id, materia, assunto, pergunta, esperado: ['ponto', ...] }
   ========================================================= */
App.dados = App.dados || {};

(function () {
  const lista = [];
  const contador = {};

  /** Atalho: d(matéria, tópico "fase-posição", pergunta, pontos esperados) */
  function d(materia, topico, pergunta, esperado) {
    contador[materia] = (contador[materia] || 0) + 1;
    lista.push({ id: 'd-' + materia + '-' + contador[materia], materia, assunto: materia + '-' + topico, pergunta, esperado });
  }

  /* ---------------- Português ---------------- */
  d('portugues', '1-3', 'Explique por que a frase "Os candidatos aprovados, serão convocados amanhã." está errada e reescreva-a corretamente.', [
    'A vírgula separa o sujeito ("Os candidatos aprovados") do verbo ("serão convocados").',
    'Pela norma-padrão, não se separa sujeito e verbo com vírgula.',
    'Reescrita correta: "Os candidatos aprovados serão convocados amanhã."',
  ]);
  d('portugues', '2-2', 'Explique o que é a crase e diga por que não se usa crase em "Ele começou a estudar".', [
    'Crase é a fusão da preposição "a" com o artigo feminino "a" (ou com "aquele", "aquela"...).',
    'Antes de verbo não há artigo, então não pode haver crase.',
    'Dica do teste: trocando por uma palavra masculina, se aparecer "ao", há crase.',
  ]);
  d('portugues', '2-0', 'Por que o certo é "Faz dois anos que me formei" e não "Fazem dois anos"? Explique com suas palavras.', [
    'O verbo "fazer" indicando tempo decorrido é impessoal (não tem sujeito).',
    'Verbo impessoal fica sempre na 3ª pessoa do singular.',
    '"Dois anos" não é sujeito, por isso o verbo não concorda com essa expressão.',
  ]);
  d('portugues', '3-0', 'Explique a diferença de sentido entre "Estudou muito, portanto foi aprovado" e "Estudou muito, mas não foi aprovado", indicando o papel dos conectivos.', [
    '"Portanto" é conclusivo: a aprovação é apresentada como consequência do estudo.',
    '"Mas" é adversativo: introduz uma ideia que contraria a expectativa.',
    'Os conectivos ligam as orações e mostram a relação lógica entre as ideias (coesão).',
  ]);

  /* ---------------- Matemática ---------------- */
  d('matematica', '1-0', 'Um produto de R$ 500 teve aumento de 20% e depois desconto de 20%. O preço final volta a ser R$ 500? Mostre o cálculo e explique.', [
    'Aumento de 20%: 500 × 1,20 = R$ 600.',
    'Desconto de 20% sobre 600: 600 × 0,80 = R$ 480.',
    'Não volta a R$ 500, porque o desconto é calculado sobre uma base maior (600).',
  ]);
  d('matematica', '1-2', '4 torneiras iguais enchem um tanque em 6 horas. Em quanto tempo 3 torneiras encheriam o mesmo tanque? Explique o tipo de proporção.', [
    'Menos torneiras levam mais tempo: as grandezas são inversamente proporcionais.',
    'Monta-se 4 × 6 = 3 × x (produto constante), e x = 24 ÷ 3.',
    'Resposta: 8 horas.',
  ]);
  d('matematica', '3-1', 'Explique a diferença entre juros simples e juros compostos usando o exemplo de R$ 1.000 a 10% ao ano durante 2 anos.', [
    'Juros simples incidem sempre sobre o capital inicial: 100 + 100 = R$ 200 de juros (montante R$ 1.200).',
    'Juros compostos incidem sobre o montante do período anterior ("juros sobre juros").',
    'Compostos: 1000 × 1,1² = R$ 1.210 (R$ 210 de juros), mais que nos simples.',
  ]);
  d('matematica', '3-0', 'As notas de um aluno foram 2, 9, 9 e 10. Calcule a média e a mediana e explique por que elas são diferentes.', [
    'Média: (2 + 9 + 9 + 10) ÷ 4 = 7,5.',
    'Mediana: com os valores em ordem, a média dos dois do meio, (9 + 9) ÷ 2 = 9.',
    'A nota 2 é um valor extremo que puxa a média para baixo; a mediana é menos afetada por extremos.',
  ]);

  /* ---------------- Biologia ---------------- */
  d('biologia', '1-1', 'Compare fotossíntese e respiração celular: onde ocorrem, o que consomem e o que produzem.', [
    'Fotossíntese ocorre nos cloroplastos; a respiração celular, principalmente nas mitocôndrias.',
    'Fotossíntese consome CO₂ e água (com luz) e produz glicose e O₂.',
    'Respiração consome glicose e O₂ e produz CO₂, água e energia (ATP).',
  ]);
  d('biologia', '1-0', 'Diferencie célula procariótica de célula eucariótica e dê um exemplo de cada.', [
    'Procariótica não tem núcleo delimitado por membrana (material genético disperso no citoplasma).',
    'Eucariótica tem núcleo organizado e organelas membranosas (como mitocôndrias).',
    'Exemplos: bactéria (procariótica); células de animais, plantas e fungos (eucarióticas).',
  ]);
  d('biologia', '3-1', 'Explique a diferença entre as ideias de Lamarck e de Darwin sobre a evolução, usando o exemplo do pescoço da girafa.', [
    'Lamarck: o uso desenvolve o órgão (esticar o pescoço) e a característica adquirida passa aos filhos.',
    'Darwin: já havia variação entre as girafas; as de pescoço maior sobreviviam e se reproduziam mais (seleção natural).',
    'A ciência atual aceita a seleção natural; características adquiridas em vida não são herdadas.',
  ]);
  d('biologia', '3-2', 'O que é o efeito estufa e por que a sua intensificação é um problema?', [
    'É um fenômeno natural: gases da atmosfera retêm parte do calor e mantêm a Terra habitável.',
    'A emissão humana de gases como CO₂ e metano (queima de combustíveis, desmatamento) intensifica o efeito.',
    'Consequência: aquecimento global, com eventos climáticos extremos, derretimento de gelo e alta do nível do mar.',
  ]);

  /* ---------------- História ---------------- */
  d('historia', '1-0', 'A democracia de Atenas era para todos? Explique quem participava e quem ficava de fora.', [
    'Era uma democracia direta: os cidadãos votavam pessoalmente nas assembleias.',
    'Só eram cidadãos homens adultos, livres e filhos de atenienses.',
    'Mulheres, estrangeiros (metecos) e escravizados ficavam de fora: a maioria da população.',
  ]);
  d('historia', '1-1', 'Descreva como funcionava o feudalismo, citando a relação entre senhores e servos.', [
    'A terra era a principal fonte de riqueza e poder; a economia era agrária e voltada à subsistência.',
    'O senhor feudal dava proteção e o uso da terra; os servos ficavam presos a ela.',
    'Os servos pagavam obrigações ao senhor, como a corveia (trabalho) e a talha (parte da produção).',
  ]);
  d('historia', '2-2', 'Por que a abolição da escravidão em 1888 não garantiu cidadania plena à população negra no Brasil?', [
    'A Lei Áurea apenas declarou extinta a escravidão, sem indenização ou apoio aos libertos.',
    'Não houve acesso a terra, educação ou trabalho digno para a população liberta.',
    'Isso gerou marginalização e desigualdades raciais que persistem até hoje.',
  ]);
  d('historia', '3-3', 'O que foi o AI-5 e por que ele marca o período mais duro da ditadura militar?', [
    'Foi o Ato Institucional nº 5, decretado em dezembro de 1968.',
    'Permitiu fechar o Congresso, cassar mandatos e suspendeu o habeas corpus para crimes políticos.',
    'Abriu caminho para a censura ampla, perseguições, prisões e tortura de opositores.',
  ]);

  /* ---------------- Geografia ---------------- */
  d('geografia', '1-0', 'Num mapa de escala 1:50.000, duas cidades estão a 8 cm de distância. Qual a distância real? Mostre o cálculo.', [
    'A escala indica que 1 cm no mapa equivale a 50.000 cm no terreno.',
    '8 × 50.000 = 400.000 cm.',
    '400.000 cm = 4.000 m = 4 km.',
  ]);
  d('geografia', '2-1', 'Explique o que é êxodo rural e cite duas consequências dele para as cidades brasileiras.', [
    'Êxodo rural é a migração em massa do campo para a cidade.',
    'No Brasil foi intenso entre 1950 e 1980, ligado à industrialização e à mecanização do campo.',
    'Consequências: crescimento urbano desordenado, favelização, falta de infraestrutura ou desemprego.',
  ]);
  d('geografia', '1-3', 'Diferencie fontes de energia renováveis e não renováveis e dê dois exemplos de cada.', [
    'Renováveis se recompõem naturalmente em escala humana de tempo.',
    'Exemplos de renováveis: solar, eólica, hidráulica ou biomassa.',
    'Não renováveis se esgotam (levam milhões de anos para se formar): petróleo, carvão mineral, gás natural.',
  ]);
  d('geografia', '3-0', 'Cite duas características da globalização e um efeito negativo dela.', [
    'Integração das economias e dos mercados entre países.',
    'Avanço dos transportes e das comunicações (internet), acelerando fluxos de informação, capitais e mercadorias.',
    'Efeito negativo: aumento das desigualdades, perda de empregos locais ou padronização cultural.',
  ]);

  /* ---------------- Filosofia ---------------- */
  d('filosofia', '1-3', 'Explique o mito da caverna de Platão e o que ele quer dizer sobre o conhecimento.', [
    'Prisioneiros acorrentados veem apenas sombras na parede e acham que elas são a realidade.',
    'Um deles se liberta, sai da caverna e conhece o mundo real (iluminado pelo sol).',
    'Significado: o conhecimento verdadeiro exige sair das aparências (sentidos) e chegar às ideias pela razão.',
  ]);
  d('filosofia', '1-2', 'O que é a maiêutica de Sócrates e qual o sentido da frase "só sei que nada sei"?', [
    'Maiêutica é o método de fazer perguntas para a pessoa chegar sozinha às ideias ("parto das ideias").',
    'Antes disso, a ironia mostrava ao interlocutor que ele não sabia o que achava que sabia.',
    '"Só sei que nada sei" expressa o reconhecimento da própria ignorância como ponto de partida para conhecer.',
  ]);
  d('filosofia', '2-1', 'Explique a frase "Penso, logo existo" de Descartes e o caminho que o levou a ela.', [
    'Descartes usou a dúvida metódica: duvidar de tudo que pudesse ser duvidado.',
    'Mesmo duvidando de tudo, não podia duvidar de que estava pensando (duvidar já é pensar).',
    'Se pensa, existe: essa é a primeira certeza, a base do racionalismo dele.',
  ]);
  d('filosofia', '3-0', 'O que Sartre quis dizer com "a existência precede a essência"?', [
    'O ser humano primeiro existe e só depois se define pelas suas escolhas.',
    'Não há uma natureza ou destino humano pronto de antemão.',
    'Por isso somos "condenados a ser livres" e responsáveis pelo que fazemos de nós.',
  ]);

  /* ---------------- Sociologia ---------------- */
  d('sociologia', '1-0', 'O que é fato social para Durkheim? Dê um exemplo.', [
    'São maneiras de agir, pensar e sentir exteriores ao indivíduo.',
    'Têm três características: generalidade, exterioridade e coercitividade.',
    'Exemplo válido: leis, regras de etiqueta, a língua, a obrigação de ir à escola.',
  ]);
  d('sociologia', '1-1', 'Diferencie etnocentrismo de relativismo cultural.', [
    'Etnocentrismo é julgar outras culturas tomando a própria como padrão (superior).',
    'Pode gerar preconceito e intolerância.',
    'Relativismo cultural é buscar entender cada cultura a partir dos seus próprios valores e contexto.',
  ]);
  d('sociologia', '2-0', 'Compare o fordismo e o toyotismo.', [
    'Fordismo: produção em massa, linha de montagem, trabalho repetitivo e especializado, grandes estoques.',
    'Toyotismo: produção flexível conforme a demanda (just in time), estoques mínimos.',
    'No toyotismo o trabalhador é multifuncional, com foco em qualidade e trabalho em equipe.',
  ]);
  d('sociologia', '3-2', 'Explique os três tipos de direitos de cidadania segundo T. H. Marshall.', [
    'Direitos civis: liberdades individuais, como ir e vir, expressão e propriedade.',
    'Direitos políticos: votar, ser votado e participar das decisões políticas.',
    'Direitos sociais: educação, saúde, trabalho e previdência, ou seja, bem-estar mínimo.',
  ]);

  /* ---------------- Raciocínio lógico ---------------- */
  d('logica', '2-1', 'Escreva a negação de "Todos os servidores são pontuais" e explique por que a resposta "Nenhum servidor é pontual" está errada.', [
    'A negação correta é "Algum servidor não é pontual" (ou "Existe servidor que não é pontual").',
    'Para negar o "todo", basta mostrar um caso contrário.',
    '"Nenhum é pontual" exige que todos falhem, o que é muito mais forte que a negação.',
  ]);
  d('logica', '1-1', 'Explique quando o condicional "Se p, então q" é falso e dê um exemplo.', [
    'O condicional só é falso quando p é verdadeira e q é falsa.',
    'Em todos os outros casos ele é verdadeiro (inclusive quando p é falsa).',
    'Exemplo: "Se chove, a rua molha" é falso apenas se chover e a rua não molhar.',
  ]);
  d('logica', '2-0', 'Quantas linhas tem a tabela-verdade de uma proposição com 4 proposições simples? Explique a regra.', [
    'A regra é 2ⁿ linhas, em que n é o número de proposições simples.',
    'Cada proposição tem dois valores possíveis (V ou F), e as combinações se multiplicam.',
    'Com 4 proposições: 2⁴ = 16 linhas.',
  ]);
  d('logica', '3-0', 'Descubra o próximo termo da sequência 3, 6, 12, 24, ... e explique o padrão.', [
    'Cada termo é o anterior multiplicado por 2.',
    'O próximo termo é 24 × 2 = 48.',
    'É uma progressão geométrica de razão 2.',
  ]);

  /* ---------------- Informática ---------------- */
  d('informatica', '2-1', 'O que é phishing e cite duas atitudes para se proteger dele.', [
    'Phishing é um golpe em que o criminoso se passa por empresa ou pessoa confiável para roubar dados.',
    'Costuma chegar por e-mail, SMS ou mensagem com link ou anexo falso.',
    'Proteção: desconfiar de links e urgência, conferir o endereço do site, não informar senhas, usar 2FA.',
  ]);
  d('informatica', '2-0', 'Explique a diferença entre os campos CC e CCO de um e-mail e diga quando usar o CCO.', [
    'CC (cópia carbono): todos os destinatários veem quem recebeu a cópia.',
    'CCO (cópia carbono oculta): os demais não veem esse destinatário.',
    'Usa-se CCO para preservar a privacidade dos endereços, como em envios para muitas pessoas.',
  ]);
  d('informatica', '1-1', 'No Excel, explique a diferença entre as referências A1 e $A$1 ao copiar uma fórmula.', [
    'A1 é referência relativa: muda ao copiar a fórmula para outra célula.',
    '$A$1 é referência absoluta: o cifrão trava coluna e linha, que não mudam ao copiar.',
    'Existem também as mistas ($A1 ou A$1), que travam só a coluna ou só a linha.',
  ]);
  d('informatica', '3-0', 'O que faz o DNS e por que ele é importante para navegar na internet?', [
    'O DNS traduz nomes de domínio (como gov.br) para endereços IP.',
    'Os computadores se comunicam por IP, mas é mais fácil para as pessoas lembrarem nomes.',
    'Sem o DNS, seria preciso digitar o número IP de cada site.',
  ]);

  /* ---------------- Administração ---------------- */
  d('administracao', '1-0', 'Explique as quatro funções administrativas (PODC) com um exemplo do dia a dia.', [
    'Planejar: definir objetivos e como alcançá-los.',
    'Organizar: distribuir tarefas, pessoas e recursos; dirigir: liderar, motivar e comunicar.',
    'Controlar: acompanhar os resultados, comparar com o planejado e corrigir desvios.',
  ]);
  d('administracao', '1-0', 'Diferencie eficiência, eficácia e efetividade.', [
    'Eficiência: fazer bem, usando os recursos da melhor forma (meios).',
    'Eficácia: alcançar o resultado ou objetivo proposto (fins).',
    'Efetividade: o impacto real e duradouro do resultado na sociedade ou no público.',
  ]);
  d('administracao', '2-0', 'Cite e explique os cinco princípios da administração pública do art. 37 da Constituição.', [
    'Legalidade (só fazer o que a lei permite) e impessoalidade (agir sem favorecer ou prejudicar pessoas).',
    'Moralidade (agir com ética e honestidade) e publicidade (transparência dos atos).',
    'Eficiência (bons resultados com bom uso dos recursos), incluída pela EC 19/1998. Macete: LIMPE.',
  ]);
  d('administracao', '1-1', 'Explique a teoria dos dois fatores de Herzberg.', [
    'Fatores higiênicos: salário, condições de trabalho, chefia, benefícios.',
    'Quando faltam, geram insatisfação; quando presentes, só evitam a insatisfação, sem motivar.',
    'Fatores motivacionais (reconhecimento, crescimento, responsabilidade) são os que de fato motivam.',
  ]);

  d('ingles', '1-0', 'Explique a diferença entre skimming e scanning e diga em que momento de uma prova você usaria cada um.', [
    'Skimming: leitura rápida para pegar a ideia geral (título, primeiras frases, palavras repetidas).',
    'Scanning: procurar uma informação exata no texto (número, nome, data, palavra da pergunta).',
    'Skimming no primeiro contato com o texto; scanning para responder uma pergunta pontual.',
  ]);
  d('ingles', '3-0', 'O que são falsos cognatos? Dê dois exemplos, com o significado correto de cada um.', [
    'Palavras parecidas com o português, mas com outro significado.',
    'Dois exemplos corretos, como pretend = fingir, actually = na verdade, parents = pais, push = empurrar, library = biblioteca.',
    'Não traduzir pela aparência: conferir pelo contexto.',
  ]);
  d('ingles', '3-1', 'Explique o sentido de "however" e de "therefore" e escreva uma frase em inglês com cada um.', [
    'However = porém / no entanto: indica contraste.',
    'Therefore = portanto / por isso: indica consequência ou conclusão.',
    'Duas frases em inglês usando cada conectivo com o sentido certo.',
  ]);

  App.dados.dissertativas = lista;
})();
