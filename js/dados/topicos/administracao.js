/* =========================================================
   topicos/administracao.js — conteúdo de Administração
   Mesmo formato de js/dados/conteudos.js (veja o cabeçalho de lá),
   mas separado por matéria para cada uma crescer no seu arquivo.
   Aqui ficam, desta matéria:
   - os textos de estudo (App.dados.conteudos)
   - os extras dos testes "Entendeu?" (App.dados.checagensExtras)
   - os termos novos do glossário (App.dados.adicionarTermos)
   ========================================================= */
Object.assign(App.dados.conteudos, {

  /* ======================= FUNÇÕES ADMINISTRATIVAS — PODC (um projeto real como fio condutor + quadros de contraste) ======================= */
  'administracao-1-0': {
    metodo: 'freire',
    prerequisitos: [
      { texto: '**Nenhum.** Este tópico começa do zero. Se você já organizou uma viagem, uma festa ou uma mudança com outras pessoas, já tem tudo de que precisa.' },
    ],
    // Administração é matéria de concurso, não do currículo do ensino médio.
    // A única habilidade que combina de verdade é a do trabalho em contextos históricos:
    // o PODC nasceu da organização do trabalho na indústria do começo do século XX.
    bncc: [
      { codigo: 'EM13CHS404', texto: 'Identificar e discutir os múltiplos aspectos do trabalho em diferentes circunstâncias e contextos históricos e/ou geográficos e seus efeitos sobre as gerações, em especial, os jovens, levando em consideração, na atualidade, as transformações técnicas, tecnológicas e informacionais.' },
    ],
    bnccBase: [],
    blocos: [
      /* ---------- 1. Leitura do mundo ---------- */
      { tipo: 'etapa', etapa: 'leitura', texto: 'Você já administrou alguma coisa' },
      { tipo: 'texto', texto: 'Antes de qualquer teoria, pense numa coisa que você já fez com outras pessoas: uma viagem com amigos, um churrasco, uma mudança de casa, um campeonato, um show.' },
      { tipo: 'pergunta', id: 'p1', texto: 'Escolha uma dessas situações. O que você (ou alguém do grupo) fez **antes**, **durante** e **depois**? E o que deu errado no meio do caminho?' },
      { tipo: 'revelar', texto: 'Quase toda resposta tem quatro tipos de coisa, mesmo que ninguém tenha dado nome a elas:\n\n1. **Decidir o que fazer:** para onde ir, quando, quanto gastar.\n2. **Dividir as tarefas:** quem compra as passagens, quem reserva a casa, quem guarda o dinheiro.\n3. **Lidar com as pessoas:** animar quem desanimou, resolver a briga, avisar a hora de sair.\n4. **Conferir se está dando certo:** "já gastamos mais do que o combinado?", e mudar o plano se precisar.\n\nEssas quatro coisas são as **funções administrativas**: **planejar, organizar, dirigir e controlar**, o famoso [[PODC]]. Você já faz isso. Este tópico só dá nome, ordem e precisão ao que você já sabe.' },

      /* ---------- 2. Problematização ---------- */
      { tipo: 'etapa', etapa: 'problematizacao', texto: 'Por que isso cai em concurso?' },
      { tipo: 'texto', texto: 'Porque o serviço público inteiro é isso, só que com dinheiro de todo mundo. Um hospital, uma escola ou um posto do INSS precisa decidir metas, dividir o trabalho, conduzir as equipes e conferir os resultados. Quando uma dessas funções falha, quem sente é quem está na fila.' },
      { tipo: 'exemplo', titulo: 'Três notícias que você já viu', texto: '• "Obra entregue no prazo, mas custou o dobro do previsto."\n• "Prefeitura gastou pouco, mas a ponte não ficou pronta."\n• "Posto de saúde inaugurado, mas sem médicos: a população continua indo para a cidade vizinha."\n\nAs três parecem "má administração", mas cada uma falhou num ponto **diferente**. No fim do tópico você vai saber dar o nome certo a cada falha, e a banca adora cobrar exatamente essa diferença.' },
      { tipo: 'pergunta', id: 'p2', texto: 'Pense num serviço público que você usa (posto de saúde, transporte, escola, Poupatempo, INSS). Onde você acha que ele falha: no plano, na divisão do trabalho, no atendimento das pessoas ou em ninguém conferir o resultado?' },

      /* ---------- 3. Sistematização ---------- */
      { tipo: 'etapa', etapa: 'sistematizacao', texto: 'Uma viagem, quatro funções' },
      { tipo: 'texto', texto: 'Vamos acompanhar um projeto do começo ao fim e, a cada passo, dar o nome técnico.\n\n**O projeto:** quatro amigos querem passar um fim de semana prolongado em Minas Gerais, com um dia no Inhotim (um museu de arte contemporânea a céu aberto). Cada um pode gastar no máximo **R$ 1.200**.' },

      // ----- De onde vem
      { tipo: 'titulo', texto: 'Antes: de onde vem o PODC' },
      { tipo: 'texto', texto: 'Em 1916, o engenheiro francês **Henri [[Fayol]]**, que dirigia uma grande empresa de mineração, publicou um livro dizendo que **administrar** é uma atividade própria, diferente de produzir, vender ou fazer contas. Era o tempo das grandes fábricas da Segunda Revolução Industrial: muita gente, muita máquina e a pergunta "como coordenar tudo isso?".\n\nFayol dividiu a administração em **cinco** elementos: **prever** (planejar), **organizar**, **comandar**, **coordenar** e **controlar**. Mais tarde, os autores da [[teoria neoclássica]] juntaram "comandar" e "coordenar" numa função só, a **direção**. Assim nasceu o **PODC** que as bancas cobram hoje.' },
      { tipo: 'tabela', cabecalho: ['Fayol (1916)', 'Hoje (neoclássicos)'], linhas: [
        ['Prever', '**P**lanejar'],
        ['Organizar', '**O**rganizar'],
        ['Comandar + Coordenar', '**D**irigir'],
        ['Controlar', '**C**ontrolar'],
      ] },

      // ----- P
      { tipo: 'titulo', texto: 'Função 1 — Planejar: decidir antes' },
      { tipo: 'texto', texto: '**Planejar** é definir **aonde se quer chegar** (os objetivos) e **como chegar lá** (os caminhos, os prazos e os recursos), **antes** de agir. É a primeira função porque todas as outras dependem dela: não dá para dividir tarefas nem conferir resultados sem saber o que se quer.' },
      { tipo: 'exemplo', titulo: 'Na viagem', texto: 'O grupo decide:\n• **Objetivo:** descansar e conhecer o Inhotim, sem passar de R$ 1.200 por pessoa.\n• **Quando:** sexta a segunda do feriado.\n• **Como:** ônibus até Belo Horizonte, casa alugada, um dia inteiro no museu.\n• **Recursos:** orçamento total de R$ 4.800, dividido em transporte, hospedagem, comida e ingressos.\nRepare: ninguém comprou nada ainda. Planejar é só **decidir**.' },
      { tipo: 'checagem', pergunta: 'Na viagem, qual destas ações é **planejamento**?', opcoes: ['Combinar que cada um gasta no máximo R$ 1.200', 'Escolher quem vai comprar as passagens', 'Acalmar dois amigos que brigaram na rodoviária', 'Conferir no domingo quanto já foi gasto'], correta: 0,
        explicacao: 'Definir um **objetivo** e um **limite de recursos** antes de agir é planejar. As outras são, na ordem: organizar (dividir tarefas), dirigir (lidar com as pessoas) e controlar (conferir o resultado).',
        outraExplicacao: 'Pergunte: "isso é uma **decisão sobre o futuro**, tomada antes de fazer qualquer coisa?" O teto de R$ 1.200 é. Escolher quem compra já é **distribuir trabalho**; acalmar a briga é **conduzir pessoas**; conferir o gasto é **comparar com o plano**.' },

      // ----- Níveis de planejamento
      { tipo: 'titulo', texto: 'Os três níveis de planejamento' },
      { tipo: 'texto', texto: 'Numa viagem de quatro amigos o plano cabe numa mensagem. Numa organização grande, o planejamento acontece em **três níveis**, do mais amplo ao mais detalhado. Pense numa prefeitura cuidando da saúde:' },
      { tipo: 'tabela', cabecalho: ['Nível', 'Quem faz · prazo', 'Abrange', 'Exemplo na saúde'], linhas: [
        ['**[[Planejamento estratégico|planejamento estratégico]]**', 'alta direção (prefeito, secretário) · **longo**', 'a organização inteira; é mais genérico', 'reduzir a mortalidade infantil do município em 5 anos'],
        ['**[[Planejamento tático|planejamento tático]]**', 'gerência intermediária (diretores, coordenadores) · **médio**', 'um departamento ou área', 'a diretoria de atenção básica amplia o pré-natal nas unidades de saúde em 2 anos'],
        ['**[[Planejamento operacional|planejamento operacional]]**', 'supervisão, chefes de equipe · **curto**', 'uma tarefa ou atividade; é detalhado', 'a escala de enfermeiros da unidade do bairro para a próxima semana'],
      ] },
      { tipo: 'texto', texto: 'Um jeito de lembrar: o **estratégico** responde "**o quê** e **por quê**", o **tático** traduz isso para cada área, e o **operacional** diz "**quem faz, quando e como**", passo a passo. Missão, visão e valores de uma organização fazem parte do nível estratégico.' },
      { tipo: 'checagem', pergunta: 'O setor de compras de um tribunal define, para o próximo ano, como vai reduzir o tempo das licitações. Esse planejamento é:', opcoes: ['estratégico', 'tático', 'operacional', 'normativo'], correta: 1,
        explicacao: 'É de **um departamento** (compras), com prazo **médio** (um ano) e traduz um objetivo maior para aquela área: é **tático**.',
        outraExplicacao: 'Use as três perguntas: **quem** faz? Um setor, não a cúpula do tribunal. **Até quando?** Um ano, nem muito longo nem semanal. **Para quem?** Só para compras, não para o tribunal todo. Departamento + médio prazo = **tático**.' },

      // ----- O
      { tipo: 'titulo', texto: 'Função 2 — Organizar: dividir e montar a estrutura' },
      { tipo: 'texto', texto: '**Organizar** é transformar o plano em **estrutura**: dividir o trabalho em tarefas, dizer **quem faz o quê**, quem decide o quê (autoridade e responsabilidade) e distribuir os recursos. Numa empresa, o desenho disso é o [[organograma]].' },
      { tipo: 'exemplo', titulo: 'Na viagem', texto: '• A Bia compra as passagens e cuida do transporte.\n• O Caio reserva a casa.\n• A Duda guarda o dinheiro numa planilha compartilhada e paga as contas.\n• O Edu monta o roteiro do dia no museu.\n• Combinado: gastos acima de R$ 100 só com o "ok" de todos no grupo.\nAgora cada um sabe o seu pedaço, e ninguém compra a passagem duas vezes.' },
      { tipo: 'atencao', texto: '**Organizar não é "arrumar".** Na prova, organização é **dividir trabalho, definir cargos, agrupar atividades e distribuir autoridade e recursos**. Deixar a mesa arrumada não tem nada a ver com essa função.' },
      { tipo: 'checagem', pergunta: 'Uma secretaria cria um novo departamento, define quem chefia cada setor e a quem cada setor responde. Isso é a função:', opcoes: ['planejamento', 'organização', 'direção', 'controle'], correta: 1,
        explicacao: 'Criar departamentos e definir a cadeia de autoridade (quem responde a quem) é montar a **estrutura**: é **organização**.',
        outraExplicacao: 'Imagine o organograma, aquele desenho de caixinhas ligadas por linhas. Quem desenha as caixinhas e as linhas está **organizando**. Ninguém está decidindo metas (planejar), motivando gente (dirigir) ou medindo resultado (controlar).' },

      // ----- D
      { tipo: 'titulo', texto: 'Função 3 — Dirigir: conduzir as pessoas' },
      { tipo: 'texto', texto: '**Dirigir** é colocar a estrutura para andar por meio das **pessoas**: **liderar, motivar, comunicar e coordenar** o grupo para que cada um faça a sua parte em direção ao objetivo. É a função mais ligada ao relacionamento humano. (É a que junta o "comandar" e o "coordenar" de Fayol.)' },
      { tipo: 'exemplo', titulo: 'Na viagem', texto: '• Na véspera, alguém manda no grupo: "Ônibus às 22h, chegar 21h30, levem documento."\n• A Bia desanimou porque o ônibus atrasou; o Edu conversa com ela e lembra o que vem pela frente.\n• Caio e Duda discordam do restaurante; alguém media e o grupo decide junto.\nNada disso muda o plano nem a divisão de tarefas. É **gente** sendo conduzida.' },
      { tipo: 'checagem', pergunta: 'Um chefe faz uma reunião para explicar à equipe a mudança no horário de atendimento e ouvir as dúvidas de todos. A função principal aqui é:', opcoes: ['planejamento', 'organização', 'direção', 'controle'], correta: 2,
        explicacao: '**Comunicar** uma decisão e ouvir a equipe é conduzir pessoas: **direção**. A mudança de horário já foi decidida antes (isso foi planejamento); agora é fazer as pessoas entenderem e aderirem.',
        outraExplicacao: 'Pergunte: o foco é **o quê** fazer, **como dividir**, ou **as pessoas**? Aqui o foco é a conversa com a equipe. Comunicação, liderança e motivação são as palavras-chave da **direção**.' },

      // ----- C
      { tipo: 'titulo', texto: 'Função 4 — Controlar: conferir e corrigir' },
      { tipo: 'texto', texto: '**Controlar** é acompanhar o que está acontecendo e **comparar com o que foi planejado**, para **corrigir** a tempo. Tem quatro passos:\n1. definir o **padrão** (o que seria "dar certo");\n2. **medir** o que está acontecendo;\n3. **comparar** o medido com o padrão;\n4. **corrigir** os desvios.' },
      { tipo: 'exemplo', titulo: 'Na viagem', texto: '1. Padrão: R$ 1.200 por pessoa, sendo R$ 300 para comida.\n2. Medida: no sábado à noite, a planilha da Duda mostra R$ 250 de comida por pessoa, e ainda faltam dois dias.\n3. Comparação: o grupo vai estourar a comida.\n4. Correção: no domingo, café da manhã e jantar em casa, com compras no mercado.\nO controle **não espera a viagem acabar**: ele avisa no meio do caminho, quando ainda dá para mudar.' },
      { tipo: 'texto', texto: 'Por isso o PODC é um **ciclo**, e não uma fila: o que o controle descobre volta para o planejamento ("da próxima vez, R$ 400 para comida"). E, na prática, as quatro funções acontecem **ao mesmo tempo**: no meio da viagem o grupo replaneja, redivide tarefas, conversa e confere, tudo no mesmo dia.' },
      { tipo: 'checagem', pergunta: 'Um órgão define a meta de responder 90% dos pedidos em até 10 dias. Todo mês, mede o prazo real e, quando fica abaixo da meta, remaneja servidores. Isso é principalmente:', opcoes: ['planejamento', 'organização', 'direção', 'controle'], correta: 3,
        explicacao: 'Há padrão (90% em 10 dias), medição (todo mês), comparação (abaixo da meta?) e correção (remanejar). São os quatro passos do **controle**.',
        outraExplicacao: 'A palavra que entrega é "**mede e compara com a meta**". Remanejar servidores parece organização, mas aqui é a **ação corretiva**, o último passo do controle. Quem dispara a correção é a comparação com o padrão.' },

      // ----- Visão geral
      { tipo: 'titulo', texto: 'As quatro juntas: as palavras que a banca usa' },
      { tipo: 'tabela', cabecalho: ['Função', 'Pergunta-chave', 'Palavras-gatilho na prova', 'Na viagem'], linhas: [
        ['**Planejar**', 'O que queremos e como chegar lá?', 'objetivos, metas, estratégias, prever, antecipar', 'destino, datas e teto de R$ 1.200'],
        ['**Organizar**', 'Quem faz o quê, com quais recursos?', 'estrutura, divisão do trabalho, cargos, autoridade, organograma', 'Bia, Caio, Duda e Edu, cada um com uma tarefa'],
        ['**Dirigir**', 'Como conduzir as pessoas?', 'liderança, motivação, comunicação, coordenação', 'avisos no grupo, mediar a briga'],
        ['**Controlar**', 'Está saindo como o planejado?', 'padrões, indicadores, medir, comparar, corrigir', 'planilha de gastos e corte na comida'],
      ] },

      // ----- Os três "E"
      { tipo: 'titulo', texto: 'Eficiência, eficácia e efetividade' },
      { tipo: 'texto', texto: 'Agora as três palavras que mais derrubam candidatos. Elas não são sinônimos: cada uma olha para uma parte diferente do resultado.' },
      { tipo: 'tabela', cabecalho: ['Conceito', 'Olha para', 'Pergunta', 'Frase clássica'], linhas: [
        ['**[[Eficiência]]**', 'os **meios** (recursos)', 'Usamos bem o dinheiro, o tempo e as pessoas, sem desperdício?', '"fazer **certo** as coisas"'],
        ['**[[Eficácia]]**', 'os **fins** (objetivos)', 'Atingimos o objetivo que tínhamos definido?', '"fazer as coisas **certas**"'],
        ['**[[Efetividade]]**', 'o **impacto**', 'O resultado mudou de verdade a realidade, e essa mudança dura?', '"o resultado fez diferença?"'],
      ] },
      { tipo: 'exemplo', titulo: 'Na viagem', texto: '• **Eficaz:** o grupo foi a Minas e passou o dia no Inhotim. O objetivo combinado foi cumprido.\n• **Eficiente:** fizeram isso gastando R$ 1.100 por pessoa, sem jogar dinheiro fora.\n• **Efetivo:** voltaram descansados, a amizade saiu mais forte e todo mundo quer repetir. O **motivo** da viagem aconteceu de verdade.' },
      { tipo: 'exemplo', titulo: 'No serviço público: uma campanha de vacinação', texto: '• **Eficácia:** a meta era vacinar 90% das crianças, e vacinou 92%.\n• **Eficiência:** o custo por dose aplicada ficou abaixo do previsto, sem perder vacina.\n• **Efetividade:** nos anos seguintes, os casos da doença **caíram** no município. Esse era o motivo de existir a campanha.' },
      { tipo: 'texto', texto: 'Agora volte às três notícias do começo:\n• Obra no prazo, mas pelo dobro do preço → **eficaz, mas ineficiente**.\n• Gastou pouco, mas a ponte não ficou pronta → **eficiente (no gasto), mas ineficaz**.\n• Posto inaugurado, mas sem médicos → a meta "inaugurar" foi cumprida, mas **não foi efetivo**: a vida da população não mudou.' },
      { tipo: 'checagem', pergunta: 'Um programa de qualificação formou 500 pessoas, como previsto, gastando menos do que o orçamento. Dois anos depois, quase nenhuma conseguiu emprego na área. O programa foi:', opcoes: ['eficiente e eficaz, mas pouco efetivo', 'efetivo, mas ineficiente', 'eficaz, mas ineficiente', 'ineficaz e ineficiente'], correta: 0,
        explicacao: 'Formou as 500 previstas (**eficaz**) e gastou menos que o orçamento (**eficiente**). Mas o objetivo de fundo, as pessoas conseguirem trabalho, não aconteceu: **pouco efetivo**.',
        outraExplicacao: 'Faça as três perguntas em ordem. Usou bem o dinheiro? Sim → eficiente. Cumpriu a meta (500 formados)? Sim → eficaz. Mudou a vida dessas pessoas? Não → falta **efetividade**. Só a primeira alternativa bate com os três "sim, sim, não".' },

      // ----- Pegadinhas
      { tipo: 'titulo', texto: 'As pegadinhas de prova (agora você entende o porquê)' },
      { tipo: 'lista', itens: [
        '**"Fayol criou o PODC."** Simplificação. Fayol listou **cinco** elementos (prever, organizar, comandar, coordenar, controlar). O PODC, com quatro, é dos neoclássicos. Muitas bancas aceitam a frase solta; se a questão perguntar os elementos de Fayol, são cinco.',
        '**"As funções seguem uma ordem rígida."** Errado. O planejamento vem primeiro, mas o processo é um **ciclo** e as funções **se misturam** no dia a dia.',
        '**"Só a alta direção planeja."** Errado. **Todos os níveis** fazem as quatro funções; o que muda é a proporção. A cúpula planeja mais o longo prazo; o supervisor planeja a semana da equipe.',
        '**"Controle só acontece no fim."** Errado. Pode ser **antes** (conferir o material antes de começar), **durante** (acompanhar enquanto acontece) e **depois** (avaliar o resultado).',
        '**"Tático é o plano detalhado das tarefas."** Errado. Detalhado e de curto prazo é o **operacional**. O tático é **por departamento**, de médio prazo.',
        '**"Eficiência é atingir o objetivo."** Errado. Atingir o objetivo é **eficácia**. Eficiência é **usar bem os recursos**. Dá para ser um sem ser o outro.',
      ] },
      { tipo: 'atencao', texto: 'A palavra **eficiência** também é um dos princípios da administração pública no art. 37 da Constituição (o "E" do [[LIMPE]], incluído pela Emenda 19, de 1998). Lá ela tem um sentido mais amplo, de boa gestão com bons resultados, mas a ideia central continua a mesma: não desperdiçar o dinheiro público.' },
      { tipo: 'checagem', pergunta: 'Assinale a afirmação **correta**:', opcoes: ['As quatro funções administrativas são exercidas em todos os níveis da organização, em proporções diferentes.', 'O planejamento operacional é feito pela alta direção e tem prazo longo.', 'O controle é sempre feito depois que a atividade termina.', 'Ser eficiente é o mesmo que atingir os objetivos definidos.'], correta: 0,
        explicacao: 'Todo gestor, do presidente ao supervisor, planeja, organiza, dirige e controla; muda só **quanto** de cada. As outras são pegadinhas: operacional é de curto prazo e da supervisão; controle pode ser antes, durante ou depois; atingir objetivos é eficácia.',
        outraExplicacao: 'Pense no chefe de uma equipe pequena: ele monta a escala (planeja), divide as tarefas (organiza), conversa com a equipe (dirige) e confere se tudo foi feito (controla). Se até ele faz as quatro, a primeira afirmação está certa.' },

      /* ---------- 4. Ação ---------- */
      { tipo: 'etapa', etapa: 'acao', texto: 'Use no seu próprio projeto' },
      { tipo: 'texto', texto: 'O melhor projeto para treinar o PODC é o que você já tem nas mãos: **a sua preparação para o concurso**.' },
      { tipo: 'lista', itens: [
        '**Planejar:** qual é o seu objetivo (cargo, data da prova)? Quantas horas por semana você tem de verdade? Escreva em uma frase.',
        '**Organizar:** que matéria entra em cada dia? Onde você estuda e com quais materiais? Monte a semana.',
        '**Dirigir:** você também se conduz. O que te desanima e o que te faz voltar? Quem pode estudar junto ou cobrar você?',
        '**Controlar:** escolha um indicador simples (horas estudadas, acertos nos exercícios deste app) e confira toda semana. Se ficar abaixo do padrão, o que você muda?',
        '**Os três "E":** no fim do mês, pergunte: estudei sem desperdiçar tempo (eficiência)? Cumpri o que planejei (eficácia)? Estou acertando mais questões de verdade (efetividade)?',
      ] },
      { tipo: 'pergunta', id: 'p3', texto: 'Escreva aqui o seu PODC dos estudos: uma linha para cada função e o indicador que você vai acompanhar.' },

      /* ---------- 5. Reflexão ---------- */
      { tipo: 'etapa', etapa: 'reflexao', texto: 'O que mudou?' },
      { tipo: 'texto', texto: 'Releia a situação que você contou lá no começo. Agora você consegue dizer qual das quatro funções falhou quando algo deu errado, e se o problema foi de eficiência, de eficácia ou de efetividade.' },
      { tipo: 'pergunta', id: 'p4', texto: 'Explique para um amigo, com um exemplo seu, a diferença entre eficiência, eficácia e efetividade. Depois diga: na situação do começo, qual função faltou?' },
    ],
    resumo: [
      'PODC: Planejar, Organizar, Dirigir e Controlar.',
      'Fayol (1916) listou 5 elementos: prever, organizar, comandar, coordenar e controlar. Os neoclássicos juntaram comandar e coordenar em "dirigir".',
      'Planejar = objetivos e caminhos, antes de agir. Organizar = estrutura, divisão do trabalho, autoridade e recursos.',
      'Dirigir = pessoas: liderança, motivação, comunicação. Controlar = padrão, medir, comparar e corrigir.',
      'Estratégico (cúpula, longo prazo, organização toda) → tático (departamento, médio prazo) → operacional (tarefas, curto prazo, detalhado).',
      'O PODC é um ciclo, e todos os níveis da organização exercem as quatro funções.',
      'Eficiência = meios (bom uso dos recursos). Eficácia = fins (atingir o objetivo). Efetividade = impacto real e duradouro.',
    ],
    fontes: [
      { nome: 'ENAP — Planejamento Estratégico para Organizações Públicas (curso da Escola Virtual de Governo, material aberto)', url: 'https://repositorio.enap.gov.br/handle/1/8397' },
      { nome: 'ENAP — Gestão da estratégia com uso do BSC (indicadores e metas, material aberto)', url: 'https://repositorio.enap.gov.br/handle/1/1888' },
      { nome: 'Escola Virtual de Governo (ENAP) — cursos gratuitos de gestão pública', url: 'https://www.escolavirtual.gov.br/' },
      { nome: 'Planalto — Constituição Federal, art. 37 (princípio da eficiência)', url: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm' },
    ],
  },
});

Object.assign(App.dados.checagensExtras, {

  /* ================= Funções administrativas (PODC) ================= */
  'administracao-1-0': [
    { // 1. teto de gastos → planejar
      conceito: 'Reconhecer o **planejamento**: definir objetivos, prazos e recursos **antes** de agir. É decidir, ainda sem executar.',
      variacoes: [
        { pergunta: 'Uma escola decide, em dezembro, que no ano seguinte quer reduzir a evasão à metade e define as ações para isso. Essa decisão é:', opcoes: ['planejamento', 'organização', 'direção', 'controle'], correta: 0,
          explicacao: 'Definir um **objetivo** (evasão pela metade) e os caminhos, antes do ano começar, é **planejar**.',
          outraExplicacao: 'Repare no tempo: é dezembro e ninguém executou nada ainda. Decisão sobre o futuro, com meta e caminho = planejamento.' },
        { pergunta: 'Qual destas perguntas é típica da função **planejar**?', opcoes: ['Quem vai fazer cada tarefa?', 'Como motivar a equipe cansada?', 'Aonde queremos chegar e por qual caminho?', 'O resultado ficou dentro da meta?'], correta: 2,
          explicacao: '"Aonde chegar e como" é a pergunta do **planejamento**. As outras são de organização, direção e controle, nessa ordem.',
          outraExplicacao: 'Planejar é olhar para frente e escolher destino e rota. Dividir tarefas, motivar gente e conferir metas vêm **depois** que o destino existe.' },
      ],
    },
    { // 2. setor de compras, 1 ano → tático
      conceito: 'Diferenciar os níveis de planejamento: **estratégico** (cúpula, longo prazo, organização toda), **tático** (departamento, médio prazo) e **operacional** (tarefa, curto prazo, detalhado).',
      variacoes: [
        { pergunta: 'O supervisor de uma agência monta a distribuição dos atendentes por guichê para a próxima semana. Esse planejamento é:', opcoes: ['estratégico', 'tático', 'operacional', 'institucional'], correta: 2,
          explicacao: 'Curto prazo (uma semana), detalhado (cada guichê) e feito pela supervisão: **operacional**.',
          outraExplicacao: 'Quanto mais perto da tarefa do dia a dia e do "quem faz o quê amanhã", mais operacional. Guichê por guichê, semana a semana, é o nível mais detalhado.' },
        { pergunta: 'A alta direção de uma empresa define a missão, a visão e onde quer estar daqui a dez anos. Esse planejamento é:', opcoes: ['operacional', 'tático', 'departamental', 'estratégico'], correta: 3,
          explicacao: 'Cúpula, longo prazo (dez anos) e a organização inteira: **estratégico**. Missão e visão fazem parte desse nível.',
          outraExplicacao: 'Se envolve "a empresa toda" e "muitos anos", e quem decide é o topo do organograma, é estratégico. Não há tarefa nem departamento específico ali.' },
      ],
    },
    { // 3. novo departamento e chefias → organizar
      conceito: 'Reconhecer a **organização**: dividir o trabalho, definir cargos e departamentos, distribuir autoridade, responsabilidade e recursos (a estrutura, o organograma).',
      variacoes: [
        { pergunta: 'Depois de aprovar o plano, um gestor define quais servidores ficam em cada equipe e qual equipe cuida de cada etapa. Ele está:', opcoes: ['planejando', 'organizando', 'dirigindo', 'controlando'], correta: 1,
          explicacao: 'Distribuir pessoas e tarefas entre as equipes é montar a estrutura: **organizar**.',
          outraExplicacao: 'O plano já existe (planejar ficou para trás). Agora ele responde "quem faz o quê", que é a pergunta da organização.' },
        { pergunta: 'Na prova, a função **organizar** está ligada a:', opcoes: ['divisão do trabalho, cargos e distribuição de autoridade', 'liderança e motivação da equipe', 'medição de resultados e correção de desvios', 'definição de missão e visão'], correta: 0,
          explicacao: 'Divisão do trabalho, cargos e autoridade são o coração da **organização**. Liderança é direção; medir e corrigir é controle; missão e visão são planejamento estratégico.',
          outraExplicacao: 'Lembre do organograma: caixinhas (cargos e setores) e linhas (quem responde a quem). Tudo o que cabe nesse desenho é organização.' },
      ],
    },
    { // 4. reunião para explicar mudança → dirigir
      conceito: 'Reconhecer a **direção**: conduzir as pessoas com liderança, motivação, comunicação e coordenação.',
      variacoes: [
        { pergunta: 'Uma coordenadora percebe a equipe desmotivada, conversa com cada um e reconhece publicamente o bom trabalho. A função exercida é:', opcoes: ['planejamento', 'organização', 'controle', 'direção'], correta: 3,
          explicacao: 'Motivar e reconhecer pessoas é **direção**, a função mais ligada ao relacionamento humano.',
          outraExplicacao: 'Nada mudou no plano, na estrutura ou nas metas. O foco é **gente**: ânimo, conversa, reconhecimento. Isso é dirigir.' },
        { pergunta: 'Na passagem de Fayol para o PODC, a função **dirigir** reuniu quais elementos?', opcoes: ['prever e organizar', 'comandar e coordenar', 'organizar e controlar', 'prever e controlar'], correta: 1,
          explicacao: 'Fayol tinha cinco elementos. Os neoclássicos juntaram **comandar** e **coordenar** na **direção**.',
          outraExplicacao: 'Prever virou planejar, organizar e controlar continuaram iguais. Os dois que sobraram, comandar e coordenar, viraram um só: dirigir.' },
      ],
    },
    { // 5. meta, medição mensal, remanejamento → controlar
      conceito: 'Reconhecer o **controle**: definir padrões, medir o desempenho, comparar com o planejado e corrigir os desvios. Pode acontecer antes, durante ou depois.',
      variacoes: [
        { pergunta: 'Qual é a sequência certa dos passos do controle?', opcoes: ['medir → definir padrão → corrigir → comparar', 'definir padrão → medir → comparar → corrigir', 'corrigir → medir → comparar → definir padrão', 'comparar → definir padrão → medir → corrigir'], correta: 1,
          explicacao: 'Primeiro o **padrão** (o que é dar certo), depois **medir**, **comparar** e, se houver desvio, **corrigir**.',
          outraExplicacao: 'Sem padrão não dá para saber se o medido está bom ou ruim. E só faz sentido corrigir depois de comparar. Por isso: padrão, medida, comparação, correção.' },
        { pergunta: 'Um fiscal confere a qualidade do material **antes** de a obra começar. Esse é um exemplo de:', opcoes: ['controle preventivo (antes)', 'planejamento estratégico', 'direção', 'controle só posterior'], correta: 0,
          explicacao: 'Conferir algo antes de começar, para evitar problema, é **controle preventivo**. O controle não acontece só no fim.',
          outraExplicacao: 'Ele está comparando o material com um padrão de qualidade, e isso é controle. Como é feito antes da execução, é o controle do tipo "antes".' },
      ],
    },
    { // 6. programa de qualificação → eficiente, eficaz, pouco efetivo
      conceito: 'Diferenciar **eficiência** (meios: bom uso dos recursos), **eficácia** (fins: atingir o objetivo) e **efetividade** (impacto real e duradouro na realidade).',
      variacoes: [
        { pergunta: 'Uma prefeitura asfaltou todas as ruas previstas no prazo, mas pagou bem acima do preço de mercado. A obra foi:', opcoes: ['eficiente, mas ineficaz', 'eficaz, mas ineficiente', 'efetiva e eficiente', 'ineficaz e ineficiente'], correta: 1,
          explicacao: 'Cumpriu o objetivo (todas as ruas, no prazo): **eficaz**. Gastou mal os recursos: **ineficiente**.',
          outraExplicacao: 'Separe fim e meio. O fim (ruas asfaltadas) aconteceu → eficácia. O meio (o dinheiro) foi desperdiçado → falta eficiência.' },
        { pergunta: 'A frase "fazer as coisas certas" está associada a:', opcoes: ['eficiência', 'efetividade', 'eficácia', 'economicidade'], correta: 2,
          explicacao: '"Fazer as coisas **certas**" (escolher e atingir o objetivo certo) é **eficácia**. "Fazer **certo** as coisas" (do jeito certo, sem desperdício) é eficiência.',
          outraExplicacao: 'Olhe onde está a palavra "certas": nas **coisas**, ou seja, no que se quer alcançar. Objetivo é fim, e fim é eficácia.' },
      ],
    },
    { // 7. pegadinhas de banca
      conceito: 'Evitar as pegadinhas: Fayol listou 5 elementos (o PODC é dos neoclássicos); o processo é um ciclo; todos os níveis exercem as 4 funções; controle pode ser antes, durante ou depois; tático é por departamento.',
      variacoes: [
        { pergunta: 'Assinale a afirmação **correta** sobre o processo administrativo:', opcoes: ['As funções acontecem em ordem rígida e uma só começa quando a outra termina.', 'O resultado do controle pode levar a um novo planejamento, formando um ciclo.', 'Só a alta direção exerce a função de planejar.', 'Planejamento tático é o mais detalhado e de curto prazo.'], correta: 1,
          explicacao: 'O que o controle descobre realimenta o planejamento: o processo é um **ciclo**. As outras são pegadinhas: não há ordem rígida, todos os níveis planejam, e o mais detalhado é o operacional.',
          outraExplicacao: 'Pense na viagem: o gasto com comida estourou e o grupo já mudou o plano para o próximo dia. Controlar levou a replanejar. Isso é o ciclo.' },
        { pergunta: 'Para Fayol, os elementos da administração eram:', opcoes: ['planejar, organizar, dirigir e controlar', 'prever, organizar, comandar, coordenar e controlar', 'legalidade, impessoalidade, moralidade, publicidade e eficiência', 'recrutar, selecionar, treinar e avaliar'], correta: 1,
          explicacao: 'Fayol listou **cinco**: prever, organizar, comandar, coordenar e controlar. O PODC, com quatro, veio dos neoclássicos.',
          outraExplicacao: 'Conte as letras: Fayol tinha cinco elementos (POCCC). O PODC tem quatro porque juntou comandar e coordenar. LIMPE é do art. 37 e a última opção é gestão de pessoas.' },
      ],
    },
  ],
});

App.dados.adicionarTermos('administracao', {
  'efetividade': 'O impacto real e duradouro de uma ação na realidade: o resultado fez diferença para as pessoas? Não confundir com eficácia (atingir a meta) nem com eficiência (usar bem os recursos).',
  'fayol': 'Henri Fayol (1841–1925), engenheiro francês, pai da Teoria Clássica da Administração. Em 1916 listou os elementos da administração: prever, organizar, comandar, coordenar e controlar.',
  'teoria neoclássica': 'Corrente de autores da metade do século XX que atualizou as ideias clássicas (de Fayol) e consagrou as quatro funções: planejar, organizar, dirigir e controlar (PODC).',
  'planejamento estratégico': 'Nível mais amplo do planejamento: feito pela alta direção, de longo prazo, para a organização inteira. Inclui missão, visão e objetivos gerais.',
  'planejamento tático': 'Nível intermediário do planejamento: feito pelas gerências, de médio prazo, para cada departamento ou área.',
  'planejamento operacional': 'Nível mais detalhado do planejamento: feito pela supervisão, de curto prazo, para cada tarefa ou atividade.',
  'organograma': 'Desenho da estrutura de uma organização: mostra os cargos e setores (caixas) e quem responde a quem (linhas).',
});
