/* =========================================================
   topicos/informatica.js — conteúdo de Informática
   Mesmo formato de js/dados/conteudos.js (veja o cabeçalho de lá),
   mas separado por matéria para cada uma crescer no seu arquivo.
   Aqui ficam, desta matéria:
   - os textos de estudo (App.dados.conteudos)
   - os extras dos testes "Entendeu?" (App.dados.checagensExtras)
   - os termos novos do glossário (App.dados.adicionarTermos)
   ========================================================= */
Object.assign(App.dados.conteudos, {

  /* ======================= SISTEMAS OPERACIONAIS (camadas do PC + mão na massa no próprio aparelho) ======================= */
  'informatica-1-0': {
    metodo: 'freire',
    prerequisitos: [
      { texto: '**Nenhum.** Basta já ter usado um computador ou um celular: ligar, abrir um programa, salvar um arquivo.' },
      { texto: 'Saber a diferença entre **hardware** e **software**.', revisao: '**Hardware** é a parte física, o que dá para tocar: processador, memória RAM, SSD, placa de vídeo, teclado.\n**Software** é a parte lógica, os programas: o Windows, o navegador, o jogo, o app do banco.\nUm jeito de lembrar: se cair no chão e quebrar, é hardware. Se travar, é software.' },
    ],
    // Informática de concurso não tem componente próprio na BNCC. A habilidade abaixo
    // (Linguagens, competência 7: tecnologias digitais) é a que combina de verdade com o tema.
    bncc: [
      { codigo: 'EM13LGG701', texto: 'Explorar tecnologias digitais da informação e comunicação (TDIC), compreendendo seus princípios e funcionalidades, e utilizá-las de modo ético, criativo, responsável e adequado a práticas de linguagem em diferentes contextos.' },
    ],
    bnccBase: [],
    blocos: [
      /* ---------- 1. Leitura do mundo ---------- */
      { tipo: 'etapa', etapa: 'leitura', texto: 'Quem salva o arquivo de verdade?' },
      { tipo: 'texto', texto: 'Pense numa coisa que você faz todo dia: escreve um texto no Word e aperta **Ctrl + S**. Um instante depois, o arquivo está gravado no SSD.' },
      { tipo: 'texto', texto: 'Agora pense no hardware. Existem milhares de modelos de SSD, de HD, de pen drive, de marcas diferentes, cada um com o seu controlador e o seu jeito de gravar dados. E o mesmo Word funciona em todos eles.' },
      { tipo: 'pergunta', id: 'p1', texto: 'O Word sabe conversar com cada modelo de SSD do mundo? Se não sabe, quem faz esse meio de campo? Escreva o que você acha, mesmo que seja um chute.' },
      { tipo: 'revelar', texto: 'O Word **não sabe** falar com o seu SSD. Ele só pede: "grave este arquivo, com este nome, nesta pasta".\n\nQuem recebe o pedido é o **sistema operacional** (Windows, Linux, macOS, Android...). Ele usa um [[driver]], um pequeno programa que sabe falar com aquele hardware específico, e grava os dados no lugar certo.\n\nÉ por isso que o mesmo programa funciona em PCs completamente diferentes: o sistema operacional esconde as diferenças do hardware. Ele é o **intermediário** entre o hardware e os programas. É sobre ele esta página.' },

      /* ---------- 2. Problematização ---------- */
      { tipo: 'etapa', etapa: 'problematizacao', texto: 'Quem manda no seu computador?' },
      { tipo: 'texto', texto: 'Se o sistema operacional fica entre você e o hardware, quem controla o sistema operacional controla muita coisa: o que pode ser instalado, quando o PC atualiza, que dados são enviados para a empresa, e até **por quanto tempo o seu computador continua "servindo"**.' },
      { tipo: 'exemplo', titulo: 'O PC que funciona, mas "venceu"', texto: 'A Microsoft encerrou o suporte do **Windows 10** em **14 de outubro de 2025**: sem atualizações de segurança gratuitas. Muita gente tem um PC que roda tudo bem, mas que não cumpre os requisitos do Windows 11 (como o chip de segurança **TPM 2.0**).\nO hardware não estragou. Quem decidiu que ele "ficou velho" foi a dona do software.\nAs saídas possíveis: comprar outro PC, pagar por atualizações extras ou instalar outro sistema, como uma distribuição Linux, que é gratuita e roda bem em máquinas antigas.' },
      { tipo: 'texto', texto: 'Freire dizia que entender como as coisas funcionam é o primeiro passo para não ficar só obedecendo. Aqui, isso significa saber **o que o sistema faz por você**, o que você pode escolher e que existe o [[software livre]], cujo código qualquer pessoa pode estudar e mudar.\nE tem o lado prático: sistemas operacionais caem em **quase todo edital** de concurso, com atalhos, Explorador de Arquivos, lixeira e licenças.' },
      { tipo: 'pergunta', id: 'p2', texto: 'Você já passou por algo assim? Uma atualização que mudou tudo sem pedir, um celular que parou de receber atualizações, um programa que não roda no seu sistema? Como se sentiu?' },

      /* ---------- 3. Sistematização ---------- */
      { tipo: 'etapa', etapa: 'sistematizacao', texto: 'O computador em camadas' },
      { tipo: 'texto', texto: 'O jeito mais fácil de entender um sistema operacional é imaginar o computador como **um prédio de camadas**. Cada camada só conversa com a de cima e a de baixo. Vamos subir de baixo para cima.' },

      // ----- Camadas
      { tipo: 'titulo', texto: 'Passo 1 — As camadas: do hardware até você' },
      { tipo: 'tabela', cabecalho: ['Camada', 'O que é', 'Exemplos'], linhas: [
        ['4. **Você**', 'o usuário, que clica, digita e toca', 'você abrindo o navegador'],
        ['3. **Aplicativos**', 'os programas que fazem as tarefas que você quer', 'Word, Chrome, Steam, VS Code, WhatsApp'],
        ['2. **Sistema operacional**', 'o intermediário: gerencia o hardware e dá serviços aos aplicativos', 'Windows, Linux, macOS, Android, iOS'],
        ['1. **Hardware**', 'a parte física', 'processador, memória RAM, SSD, placa de vídeo, teclado'],
      ] },
      { tipo: 'texto', texto: 'O [[sistema operacional]] tem dois trabalhos:\n• **Gerenciar o hardware**: decidir qual programa usa o processador agora, quanto de memória RAM cada um recebe, onde cada arquivo fica gravado, quem pode usar a impressora.\n• **Dar uma interface**: o jeito de você conversar com a máquina, seja por janelas e ícones (interface gráfica), seja digitando comandos (terminal, Prompt de Comando, PowerShell).' },
      { tipo: 'exemplo', titulo: 'Veja o SO trabalhando no seu PC', texto: 'Aperte **Ctrl + Shift + Esc** no Windows. Abre o **Gerenciador de Tarefas**.\nNa aba de processos você vê cada programa aberto e quanto ele usa de CPU, memória e disco. Quem distribui esses recursos é o sistema operacional. Quando um programa trava, é por aqui que você o encerra.' },
      { tipo: 'atencao', texto: 'Pegadinha de prova: **Word, Excel, Chrome e antivírus não são sistemas operacionais**. São aplicativos que rodam **em cima** de um sistema operacional.' },
      { tipo: 'checagem', pergunta: 'Você salva uma planilha no Excel. Quem, de fato, conversa com o SSD para gravar os dados?', opcoes: ['O próprio Excel', 'O sistema operacional, por meio do driver', 'O processador, sozinho', 'O navegador'], correta: 1,
        explicacao: 'O Excel só faz o pedido ("salve este arquivo"). Quem fala com o hardware é o **sistema operacional**, usando o driver do dispositivo. Esse é o papel de intermediário.',
        outraExplicacao: 'Lembre do prédio de camadas: o Excel está na camada dos aplicativos e o SSD na do hardware. Entre eles está o sistema operacional. O aplicativo nunca "pula" essa camada.' },

      // ----- Kernel
      { tipo: 'titulo', texto: 'Passo 2 — O kernel: o coração do sistema' },
      { tipo: 'texto', texto: 'Dentro do sistema operacional existe uma parte central, a que realmente manda no hardware: o [[kernel]] (em português, **núcleo**). Ele fica carregado na memória o tempo todo, do momento em que o PC liga até ele desligar.' },
      { tipo: 'lista', itens: [
        '**Processos**: reveza o processador entre os programas tão rápido que parece que todos rodam ao mesmo tempo (multitarefa).',
        '**Memória**: reserva um pedaço da RAM para cada programa e impede que um mexa na memória do outro.',
        '**Dispositivos**: conversa com o hardware por meio dos [[drivers|driver]].',
        '**Arquivos**: organiza como os dados ficam gravados no disco (o [[sistema de arquivos]]).',
      ] },
      { tipo: 'texto', texto: 'O resto do sistema (a área de trabalho, o Explorador de Arquivos, as Configurações) são programas que ficam **em volta** do kernel e pedem coisas a ele.\nUma comparação: num restaurante, o kernel é a **cozinha**. Você nunca entra lá; você fala com o garçom (a interface), e o garçom leva o pedido para a cozinha.' },
      { tipo: 'exemplo', titulo: 'Quando você aperta o botão de ligar', texto: '1º) O [[firmware]] da placa-mãe (**BIOS/UEFI**) testa o hardware e procura um disco com sistema.\n2º) O carregador de inicialização (no Linux, geralmente o **GRUB**) carrega o kernel na memória RAM.\n3º) O kernel assume o hardware, inicia os drivers e os serviços.\n4º) Aparece a tela de login. Daí em diante, todo programa que você abre roda "por cima" do kernel.' },
      { tipo: 'checagem', pergunta: 'O kernel de um sistema operacional é:', opcoes: ['o programa que mostra as janelas e os ícones', 'o núcleo do sistema, que gerencia processador, memória e dispositivos', 'um antivírus que vem instalado de fábrica', 'a peça da placa-mãe que liga o computador'], correta: 1,
        explicacao: 'O **kernel** é o **núcleo** do sistema operacional: gerencia os processos, a memória, os dispositivos (pelos drivers) e os arquivos. As janelas são a interface, que fica por cima dele.',
        outraExplicacao: 'Pense no restaurante: as janelas e ícones são o garçom (a interface); o kernel é a cozinha, onde o trabalho pesado acontece. E ele é software, não uma peça da placa-mãe.' },

      // ----- Os sistemas
      { tipo: 'titulo', texto: 'Passo 3 — Windows, Linux, macOS e Android' },
      { tipo: 'tabela', cabecalho: ['Sistema', 'Quem faz', 'Licença', 'Onde aparece', 'Detalhe que cai em prova'], linhas: [
        ['**Windows**', 'Microsoft', 'proprietário (pago, código fechado)', 'a maioria dos PCs e notebooks', 'kernel próprio (Windows NT); sistema de arquivos **NTFS**'],
        ['**Linux**', 'comunidade + empresas, kernel criado por **Linus Torvalds** (1991)', '**livre** (kernel sob a licença **GPL**)', 'servidores, supercomputadores, PCs, Steam Deck', 'distribuído em [[distribuições|distro]]: Ubuntu, Debian, Fedora, Linux Mint'],
        ['**macOS**', 'Apple', 'proprietário', 'só nos computadores da Apple (Mac)', 'baseado no Unix (Darwin); sistema de arquivos **APFS**'],
        ['**Android**', 'Google, a partir de um projeto aberto (AOSP)', 'base de código aberto ([[código-fonte]] público); os apps do Google são proprietários', 'a maioria dos celulares no Brasil', 'usa o **kernel Linux** por baixo'],
      ] },
      { tipo: 'texto', texto: 'Repare numa coisa curiosa: o **Linux** está em quase todo lugar sem você perceber. Ele roda no seu celular Android, na maioria dos servidores dos sites que você visita e no Steam Deck. Quando se fala "o Linux", tecnicamente se fala do **kernel**; o sistema completo que você instala (kernel + programas + interface) é uma **distribuição**.' },
      { tipo: 'tabela', cabecalho: ['Comparação', 'Windows', 'Linux'], linhas: [
        ['Onde as pastas começam', 'em unidades: **C:**, D:, E:', 'numa raiz única: **/** (barra)'],
        ['Separador do caminho', 'barra invertida: C:\\Users\\Ana\\Documentos', 'barra normal: /home/ana/Documentos'],
        ['Maiúsculas e minúsculas no nome', '**não diferencia**: Nota.txt e nota.txt são o mesmo nome', '**diferencia**: Nota.txt e nota.txt são dois arquivos'],
        ['Usuário com poder total', 'Administrador', '**root** (superusuário)'],
        ['Terminal', 'Prompt de Comando e PowerShell', 'Terminal (shell, como o **bash**)'],
      ] },
      { tipo: 'checagem', pergunta: 'O sistema Android, presente na maioria dos celulares, é construído sobre o kernel:', opcoes: ['do Windows', 'do macOS', 'Linux', 'do iOS'], correta: 2,
        explicacao: 'O **Android** usa o **kernel Linux**. Por cima dele, o Google e a comunidade construíram o resto do sistema e a interface dos celulares.',
        outraExplicacao: 'Dá para conferir no seu próprio celular: em Configurações → Sobre o telefone, aparece a "versão do kernel", e é uma versão do Linux.' },

      // ----- Arquivos, pastas e extensões
      { tipo: 'titulo', texto: 'Passo 4 — Arquivos, pastas e extensões' },
      { tipo: 'texto', texto: 'Para o sistema operacional, tudo o que fica gravado é um **arquivo**: um documento, uma foto, uma música, um programa. As **pastas** (ou diretórios) são caixas para organizar arquivos, e uma pasta pode ter outras pastas dentro, formando uma **árvore**.\nO endereço completo de um arquivo é o **caminho**: C:\\Users\\Ana\\Documentos\\curriculo.docx quer dizer "na unidade C:, dentro de Users, dentro de Ana, dentro de Documentos, o arquivo curriculo.docx".' },
      { tipo: 'texto', texto: 'O final do nome, depois do **último ponto**, é a [[extensão|extensão de arquivo]]. É ela que diz ao Windows **qual programa abre** o arquivo.' },
      { tipo: 'tabela', cabecalho: ['Extensão', 'Tipo de arquivo', 'Abre com (exemplo)'], linhas: [
        ['.docx / .doc', 'documento de texto', 'Word, LibreOffice Writer'],
        ['.xlsx / .xls', 'planilha', 'Excel, LibreOffice Calc'],
        ['.pptx / .ppt', 'apresentação de slides', 'PowerPoint, LibreOffice Impress'],
        ['.odt / .ods / .odp', 'texto / planilha / slides no formato aberto (ODF)', 'LibreOffice'],
        ['.pdf', 'documento pronto para ler e imprimir', 'navegador, leitor de PDF'],
        ['.txt', 'texto puro, sem formatação', 'Bloco de Notas'],
        ['.jpg / .png / .gif', 'imagem', 'visualizador de fotos'],
        ['.mp3 / .mp4', 'áudio / vídeo', 'player de mídia'],
        ['.zip / .rar', 'arquivo compactado (vários arquivos num só)', 'o próprio Windows, 7-Zip'],
        ['.exe', '**programa executável** (roda ao clicar duas vezes)', 'o próprio Windows'],
      ] },
      { tipo: 'atencao', texto: 'O Windows **esconde as extensões** por padrão, e golpistas se aproveitam disso. Um arquivo chamado **boleto.pdf.exe** aparece como "boleto.pdf", mas a extensão real é a última: **.exe**. É um programa, não um PDF. Para ver sempre as extensões: no Explorador de Arquivos, **Exibir → Mostrar → Extensões de nomes de arquivos** (no Windows 10: aba Exibir, caixa "Extensões de nomes de arquivos").' },
      { tipo: 'texto', texto: '**Nomes de arquivo no Windows** — outra pergunta clássica. Não podem ter estes 9 caracteres: **\\ / : * ? " < > |**\nO motivo é que cada um já tem uma função: a barra invertida separa pastas no caminho, os dois-pontos aparecem em "C:", o asterisco e a interrogação servem para buscas, e assim por diante.' },
      { tipo: 'checagem', pergunta: 'Você recebe por e-mail o anexo "comprovante.pdf.exe". O que ele é, de fato?', opcoes: ['Um PDF comum', 'Um arquivo compactado', 'Um programa executável', 'Uma imagem'], correta: 2,
        explicacao: 'A extensão que vale é a que vem **depois do último ponto**: **.exe**, um programa executável. O ".pdf" no meio é só parte do nome, colocado para enganar. Não abra.',
        outraExplicacao: 'Leia o nome de trás para frente até achar o primeiro ponto: "exe". Tudo antes disso ("comprovante.pdf") é apenas o nome. Com as extensões escondidas, o Windows mostraria só "comprovante.pdf", e é aí que mora o golpe.' },

      // ----- Explorador de Arquivos + atalhos
      { tipo: 'titulo', texto: 'Passo 5 — O Explorador de Arquivos e os atalhos que caem em prova' },
      { tipo: 'texto', texto: 'O **Explorador de Arquivos** (no Windows antigo, "Windows Explorer") é o programa do Windows para navegar pelas pastas, copiar, mover, renomear e excluir arquivos. Abra agora com **Win + E** (Win é a tecla com o logotipo do Windows).\nNa esquerda fica o **painel de navegação** (Acesso rápido, Este Computador, unidades, pen drives); no alto, a **barra de endereços** mostra o caminho da pasta aberta.' },
      { tipo: 'texto', texto: 'Os atalhos são o assunto **mais cobrado**. Não tente decorar de uma vez: separe por "família" e teste cada um no seu PC.' },
      { tipo: 'tabela', cabecalho: ['Atalho', 'O que faz', 'Para lembrar'], linhas: [
        ['**Ctrl + C**', 'copiar', 'C de **c**opiar'],
        ['**Ctrl + X**', 'recortar (copiar e tirar do lugar)', 'o X parece uma tesoura'],
        ['**Ctrl + V**', 'colar', 'fica ao lado do C e do X no teclado'],
        ['**Ctrl + Z**', 'desfazer', 'o "voltar no tempo"'],
        ['**Ctrl + Y**', 'refazer', 'desfaz o desfazer'],
        ['**Ctrl + A**', 'selecionar tudo (no Windows e no Explorador)', 'A de "all" (todos, em inglês)'],
        ['**F2**', 'renomear o arquivo selecionado', ''],
        ['**F5**', 'atualizar a janela', ''],
        ['**Alt + Tab**', 'alternar entre as janelas abertas', ''],
        ['**Alt + F4**', 'fechar a janela ou o programa', ''],
        ['**Ctrl + Shift + Esc**', 'abrir o Gerenciador de Tarefas', ''],
      ] },
      { tipo: 'tabela', cabecalho: ['Atalho com a tecla Win', 'O que faz', 'Para lembrar'], linhas: [
        ['**Win + E**', 'abrir o Explorador de Arquivos', 'E de **E**xplorador'],
        ['**Win + D**', 'mostrar a área de trabalho (minimiza tudo; de novo, volta)', 'D de **D**esktop'],
        ['**Win + L**', 'bloquear o computador', 'L de **L**ock (trancar)'],
        ['**Win + I**', 'abrir as Configurações', ''],
        ['**Win + R**', 'abrir a caixa Executar', 'R de **R**un (executar)'],
        ['**Win + V**', 'histórico da área de transferência', 'o V do colar'],
        ['**Win + Shift + S**', 'capturar um pedaço da tela', 'S de **S**creenshot'],
        ['**Win + Tab**', 'Visão de Tarefas (janelas e áreas de trabalho virtuais)', 'o "Alt + Tab" turbinado'],
      ] },
      { tipo: 'atencao', texto: 'Atalhos do **Word em português** são diferentes e são pegadinha certa: lá, **Ctrl + N** é negrito, **Ctrl + S** é sublinhado, **Ctrl + B** é salvar e **Ctrl + T** seleciona tudo. Isso fica para o tópico "Word e Excel". Aqui vale o Windows: **Ctrl + A** seleciona tudo.' },
      { tipo: 'checagem', pergunta: 'Você vai sair da mesa por alguns minutos e quer travar o PC sem fechar nada. Qual atalho usar?', opcoes: ['Win + D', 'Win + L', 'Alt + F4', 'Win + E'], correta: 1,
        explicacao: '**Win + L** bloqueia o computador (L de *lock*, trancar). Tudo continua aberto, mas só volta com a senha. Win + D só mostra a área de trabalho, e Alt + F4 fecha a janela.',
        outraExplicacao: 'Ligue a letra à palavra em inglês: **L**ock = trancar. Win + D mostra o **D**esktop, mas não protege nada: qualquer um que chegar abre as janelas de novo.' },

      // ----- Área de transferência + mover/copiar
      { tipo: 'titulo', texto: 'Passo 6 — Área de transferência: copiar, recortar e arrastar' },
      { tipo: 'texto', texto: 'Quando você aperta Ctrl + C ou Ctrl + X, o conteúdo vai para a [[área de transferência]]: um espaço na memória RAM onde o sistema guarda o que foi copiado até você colar.\n• Ela guarda **o último item**: copiar outra coisa substitui o anterior.\n• Ela é **temporária**: ao desligar o PC, se perde.\n• No Windows 10 e 11, **Win + V** mostra o **histórico** (os itens copiados mais recentes). Na primeira vez, o Windows pede para ativar.' },
      { tipo: 'texto', texto: '**Copiar × recortar:** Ctrl + C deixa o original onde está e cria uma cópia ao colar. Ctrl + X tira o arquivo do lugar original **quando você cola** (ele "muda de endereço"; isso é **mover**).' },
      { tipo: 'tabela', cabecalho: ['Você arrasta um arquivo com o mouse...', 'O Windows faz'], linhas: [
        ['para outra pasta **da mesma unidade** (C: → C:)', '**move**'],
        ['para **outra unidade** (C: → pen drive)', '**copia**'],
        ['segurando **Ctrl**', 'sempre **copia**'],
        ['segurando **Shift**', 'sempre **move**'],
        ['segurando **Alt**', 'cria um **atalho** (um ícone que aponta para o arquivo)'],
      ] },
      { tipo: 'texto', texto: 'A lógica: dentro da mesma unidade, o arquivo não precisa ser regravado, só muda o "endereço" na tabela do disco, então mover é o natural. Para outra unidade, o Windows prefere copiar para não sumir com o original por engano.' },
      { tipo: 'checagem', pergunta: 'No Explorador de Arquivos, você arrasta um arquivo da pasta Documentos (C:) para um pen drive (E:), sem segurar nenhuma tecla. O que acontece?', opcoes: ['O arquivo é movido para o pen drive', 'O arquivo é copiado para o pen drive', 'É criado um atalho no pen drive', 'O arquivo vai para a Lixeira'], correta: 1,
        explicacao: 'Arrastar para **outra unidade** **copia**: o original fica em C: e uma cópia vai para E:. Dentro da mesma unidade, arrastar move.',
        outraExplicacao: 'Pense em segurança: tirar o arquivo do PC e deixar só no pen drive (que perde fácil) seria arriscado. Por isso, entre unidades diferentes, o padrão é copiar. Para mover nesse caso, segure **Shift** enquanto arrasta.' },

      // ----- Lixeira
      { tipo: 'titulo', texto: 'Passo 7 — A Lixeira e o Shift + Delete' },
      { tipo: 'texto', texto: 'Quando você exclui um arquivo do disco do PC com a tecla **Delete** (Del), ele não some: vai para a **Lixeira**, uma pasta especial. De lá dá para **restaurar** (o arquivo volta para a pasta de onde saiu) ou **esvaziar** a Lixeira (aí sim, apaga).' },
      { tipo: 'tabela', cabecalho: ['Situação', 'Vai para a Lixeira?'], linhas: [
        ['**Delete** num arquivo do disco do computador', '**sim**, dá para restaurar'],
        ['**Shift + Delete**', '**não**: exclui direto, de forma permanente (o Windows pede confirmação)'],
        ['excluir de um **pen drive** ou cartão de memória', '**não**: é apagado direto'],
        ['excluir de uma **pasta de rede**', '**não**: é apagado direto'],
        ['arquivo **maior que o espaço** da Lixeira', '**não**: o Windows avisa que vai excluir permanentemente'],
      ] },
      { tipo: 'atencao', texto: '"Exclusão permanente" é para o Windows. Os dados ainda podem ser recuperados por programas especiais até serem sobrescritos. Por isso, antes de vender ou doar um PC ou SSD, use a opção de **redefinir o computador limpando a unidade**.' },
      { tipo: 'checagem', pergunta: 'Qual ação exclui um arquivo do disco do PC **sem** passar pela Lixeira?', opcoes: ['Tecla Delete', 'Ctrl + X', 'Shift + Delete', 'Ctrl + Z'], correta: 2,
        explicacao: '**Shift + Delete** exclui de forma permanente, pulando a Lixeira. A tecla Delete sozinha manda para a Lixeira, Ctrl + X recorta e Ctrl + Z desfaz.',
        outraExplicacao: 'O Shift funciona como um "sem volta": Delete = lixeira (dá para restaurar); **Shift** + Delete = direto para fora, sem passar pela lixeira.' },

      // ----- Software livre × proprietário
      { tipo: 'titulo', texto: 'Passo 8 — Software livre × software proprietário' },
      { tipo: 'texto', texto: 'Todo programa nasce como [[código-fonte]]: o texto escrito pelos programadores, numa linguagem que gente consegue ler. Depois ele é transformado no programa que roda. A pergunta que separa os dois mundos é: **você pode ver e mudar esse código?**' },
      { tipo: 'texto', texto: 'O [[software livre]] foi definido por **Richard Stallman** e pela **Free Software Foundation** (projeto **GNU**, 1983). Um programa é livre quando garante ao usuário as **4 liberdades**:' },
      { tipo: 'tabela', cabecalho: ['Liberdade', 'O que garante'], linhas: [
        ['**0**', '**executar** o programa como quiser, para qualquer propósito'],
        ['**1**', '**estudar** como o programa funciona e **modificá-lo** (para isso, é preciso ter acesso ao código-fonte)'],
        ['**2**', '**redistribuir cópias** para ajudar outras pessoas'],
        ['**3**', '**distribuir versões modificadas**, para que a comunidade se beneficie das melhorias'],
      ] },
      { tipo: 'atencao', texto: '**Livre não é o mesmo que grátis.** "Livre" fala de **liberdade**, não de preço. Um software livre pode ser vendido; e um programa grátis pode ser fechado. Esse é o tipo de programa chamado **freeware**: grátis, mas sem acesso ao código (exemplos: o navegador Chrome, o leitor Adobe Acrobat Reader).' },
      { tipo: 'tabela', cabecalho: ['Tipo', 'Código aberto?', 'Paga?', 'Exemplos'], linhas: [
        ['**Software livre**', 'sim, com as 4 liberdades', 'em geral não (mas pode)', 'Linux, LibreOffice, Firefox, VLC, GIMP'],
        ['**Proprietário**', 'não; a licença limita o que você pode fazer', 'geralmente sim', 'Windows, macOS, Microsoft Office, Photoshop'],
        ['**Freeware**', 'não', 'não', 'Chrome, Adobe Acrobat Reader'],
        ['**Shareware / versão de avaliação**', 'não', 'grátis por um tempo ou com limites; depois paga', 'WinRAR, versões de teste'],
      ] },
      { tipo: 'texto', texto: 'O kernel Linux usa a licença **GPL**, que tem o princípio do **copyleft**: quem distribui uma versão modificada precisa mantê-la livre, com as mesmas liberdades. É um "direito de cópia" usado ao contrário: em vez de proibir, garante que ninguém tranque o que é de todos.' },
      { tipo: 'checagem', pergunta: 'Sobre software livre, é correto afirmar:', opcoes: ['Todo software livre é gratuito, e todo software gratuito é livre.', 'Software livre garante, entre outras, a liberdade de estudar e modificar o programa, o que exige acesso ao código-fonte.', 'Software livre não pode ser usado por empresas.', 'O Windows é software livre, porque vem instalado nos computadores.'], correta: 1,
        explicacao: 'A **liberdade 1** é estudar e modificar o programa, e para isso é preciso o **código-fonte**. Livre fala de liberdade, não de preço; pode ser usado por qualquer um, inclusive empresas (liberdade 0). O Windows é proprietário.',
        outraExplicacao: 'Pense na diferença entre uma receita e um prato pronto. Software livre te dá **a receita** (o código-fonte) e deixa você mudar e compartilhar. Freeware te dá o prato de graça, mas sem a receita.' },

      /* ---------- 4. Ação ---------- */
      { tipo: 'etapa', etapa: 'acao', texto: 'Mão na massa no seu PC e no seu celular' },
      { tipo: 'lista', itens: [
        '**Mostre as extensões:** no Explorador de Arquivos (Win + E), ative "Extensões de nomes de arquivos". Abra a pasta Downloads e veja quantos tipos de arquivo você tem.',
        '**Veja o SO gerenciando o hardware:** abra o Gerenciador de Tarefas (Ctrl + Shift + Esc) e descubra qual programa mais usa memória RAM agora.',
        '**Treine 5 atalhos por dia:** hoje, use Win + E, Win + D, Win + L, Win + V e F2 de verdade, em vez do mouse.',
        '**Descubra o kernel do seu celular:** Configurações → Sobre o telefone (às vezes em "Informações do software") → Versão do kernel.',
        '**Teste a Lixeira:** crie um arquivo de teste, exclua com Delete e restaure. Depois crie outro e exclua com Shift + Delete. Veja a diferença.',
        '**Curiosidade (opcional):** se tiver um pen drive sobrando, dá para testar uma distribuição Linux (como Ubuntu ou Linux Mint) no modo "experimentar", sem instalar nada no PC.',
      ] },
      { tipo: 'pergunta', id: 'p3', texto: 'Conte o que encontrou: qual programa mais usava memória? Qual a versão do kernel do seu celular? Algum atalho que você não conhecia e vai usar sempre?' },

      /* ---------- 5. Reflexão ---------- */
      { tipo: 'etapa', etapa: 'reflexao', texto: 'O que mudou?' },
      { tipo: 'texto', texto: 'Volte à primeira pergunta: quando você aperta Ctrl + S, quem salva o arquivo? Agora você sabe a cadeia inteira: o aplicativo pede, o **sistema operacional** recebe, o **kernel** usa o **driver** e o dado vai para o SSD, organizado pelo sistema de arquivos. Cada camada faz a sua parte.' },
      { tipo: 'pergunta', id: 'p4', texto: 'Explique para alguém, com suas palavras e sem usar a palavra "programa": o que é um sistema operacional? E depois: por que "software livre" não quer dizer "software grátis"?' },
    ],
    resumo: [
      'Sistema operacional é o intermediário entre o hardware e os aplicativos: gerencia os recursos e dá a interface para o usuário.',
      'Kernel é o núcleo do SO: gerencia processos, memória, dispositivos (por meio dos drivers) e arquivos.',
      'Windows e macOS são proprietários; Linux é livre (GPL) e vem em distribuições; Android usa o kernel Linux.',
      'Windows usa unidades (C:) e barra invertida e não diferencia maiúsculas; Linux usa raiz "/", barra normal e diferencia.',
      'A extensão real é a que vem depois do último ponto: "foto.jpg.exe" é um programa. Nome no Windows não aceita \\ / : * ? " < > |',
      'Atalhos: Ctrl + C/X/V/Z/Y/A; Win + E (Explorador), D (área de trabalho), L (bloquear), I (Configurações), V (histórico da área de transferência).',
      'Arrastar na mesma unidade move; para outra unidade copia. Ctrl força copiar, Shift força mover.',
      'Delete manda para a Lixeira; Shift + Delete, pen drive e pasta de rede excluem direto.',
      'Software livre = 4 liberdades (executar, estudar/modificar, redistribuir, distribuir modificado). Livre não é grátis; freeware é grátis e fechado.',
    ],
    fontes: [
      { nome: 'Microsoft — Atalhos do teclado no Windows (suporte oficial, em português)', url: 'https://support.microsoft.com/pt-BR/help/12445/windows-keyboard-shortcuts' },
      { nome: 'GNU / Free Software Foundation — O que é o software livre? (as 4 liberdades, em português)', url: 'https://www.gnu.org/philosophy/free-sw.pt-br.html' },
      { nome: 'The Linux Kernel Archives — site oficial do kernel Linux (em inglês)', url: 'https://www.kernel.org/' },
      { nome: 'Android Open Source Project — o código aberto do Android (em inglês)', url: 'https://source.android.com/' },
    ],
  },
});

Object.assign(App.dados.checagensExtras, {

  /* ================= Sistemas operacionais ================= */
  'informatica-1-0': [
    { // 1. quem fala com o SSD → o SO
      conceito: 'O **sistema operacional** é o intermediário entre o hardware e os aplicativos: gerencia os recursos (processador, memória, discos) e oferece a interface. Word, Excel e navegadores são aplicativos, não sistemas operacionais.',
      variacoes: [
        { pergunta: 'Qual destes é um sistema operacional?', opcoes: ['Google Chrome', 'Microsoft Excel', 'Ubuntu', 'LibreOffice Writer'], correta: 2,
          explicacao: 'O **Ubuntu** é uma distribuição Linux, ou seja, um sistema operacional completo. Os outros são aplicativos que rodam em cima de um sistema.',
          outraExplicacao: 'Pergunte: "isso gerencia o hardware e roda outros programas?" O Chrome, o Excel e o Writer só fazem uma tarefa (navegar, planilha, texto). O Ubuntu é a camada de baixo, onde eles rodam.' },
        { pergunta: 'Qual é a principal função de um sistema operacional?', opcoes: ['Proteger o computador contra vírus', 'Gerenciar o hardware e servir de base para os aplicativos', 'Editar textos e planilhas', 'Acessar a internet'], correta: 1,
          explicacao: 'O sistema operacional **gerencia o hardware** (processador, memória, discos, dispositivos) e oferece serviços e interface para os **aplicativos** rodarem. Antivírus, editores e navegadores são aplicativos.',
          outraExplicacao: 'No prédio de camadas, o sistema fica entre o hardware (embaixo) e os aplicativos (em cima). A função dele é exatamente essa ponte.' },
      ],
    },
    { // 2. kernel = núcleo
      conceito: 'O **kernel** (núcleo) é a parte central do sistema operacional, que fica sempre na memória e gerencia processos, memória, dispositivos (pelos drivers) e o sistema de arquivos.',
      variacoes: [
        { pergunta: 'O programa que permite ao sistema operacional se comunicar com um hardware específico, como uma impressora, é chamado de:', opcoes: ['driver', 'kernel', 'freeware', 'extensão'], correta: 0,
          explicacao: 'O **driver** é o pequeno programa que "traduz" os pedidos do sistema para aquele hardware específico. O kernel usa os drivers para falar com os dispositivos.',
          outraExplicacao: 'Pense no driver como um intérprete: o sistema fala uma língua, a impressora fala outra. Sem o intérprete certo, ela não entende nada (é por isso que, às vezes, é preciso "instalar o driver").' },
        { pergunta: 'Quando dois programas estão abertos, quem decide quanto tempo de processador e quanta memória RAM cada um recebe?', opcoes: ['O usuário, manualmente', 'O kernel do sistema operacional', 'O navegador', 'A Lixeira'], correta: 1,
          explicacao: 'Dividir o processador e a memória entre os programas é trabalho do **kernel**. Ele reveza o processador tão rápido que parece que tudo roda ao mesmo tempo.',
          outraExplicacao: 'No restaurante, o kernel é a cozinha: é lá que se decide qual pedido sai primeiro. Você só vê o resultado no Gerenciador de Tarefas.' },
      ],
    },
    { // 3. Android usa kernel Linux
      conceito: 'Os principais sistemas: **Windows** (Microsoft, proprietário), **macOS** (Apple, proprietário, só em Mac), **Linux** (livre, em distribuições como Ubuntu e Debian) e **Android** (Google, usa o kernel Linux).',
      variacoes: [
        { pergunta: 'Ubuntu, Debian, Fedora e Linux Mint são exemplos de:', opcoes: ['versões do Windows', 'distribuições Linux', 'aplicativos de escritório', 'navegadores de internet'], correta: 1,
          explicacao: 'São **distribuições Linux**: pacotes completos que juntam o kernel Linux com programas, interface e ferramentas de instalação.',
          outraExplicacao: 'O Linux, sozinho, é só o kernel. Cada grupo monta "o seu" sistema completo em volta dele, e cada montagem é uma distribuição (ou "distro").' },
        { pergunta: 'Sobre as diferenças entre Windows e Linux, é correto afirmar:', opcoes: ['No Windows, "Nota.txt" e "nota.txt" podem ficar na mesma pasta como arquivos diferentes.', 'No Linux, as pastas começam pela unidade C:.', 'O Linux diferencia maiúsculas de minúsculas nos nomes de arquivos.', 'O Windows usa a barra normal (/) para separar as pastas no caminho.'], correta: 2,
          explicacao: 'O Linux **diferencia** maiúsculas e minúsculas: "Nota.txt" e "nota.txt" são arquivos diferentes. O Windows não diferencia, usa unidades (C:) e a barra invertida (\\).',
          outraExplicacao: 'Lembre da tabela de comparação: Windows = C:, barra invertida e "tanto faz" maiúscula. Linux = raiz "/", barra normal e maiúscula importa.' },
      ],
    },
    { // 4. extensão real = depois do último ponto
      conceito: 'A **extensão** é o final do nome, depois do **último ponto**, e diz qual tipo de arquivo é e qual programa o abre. O Windows esconde as extensões por padrão, o que golpistas usam em nomes como "foto.jpg.exe".',
      variacoes: [
        { pergunta: 'Um arquivo com a extensão .xlsx é, normalmente:', opcoes: ['um documento de texto', 'uma planilha', 'uma apresentação de slides', 'um programa executável'], correta: 1,
          explicacao: '**.xlsx** é a extensão das **planilhas** do Excel. Texto é .docx, slides é .pptx e programa executável é .exe.',
          outraExplicacao: 'Pense no "xls" como "Excel": as extensões do Office lembram o nome do programa: **d**oc(x) para documentos do Word, **xls**(x) para o Excel, **ppt**(x) para o PowerPoint.' },
        { pergunta: 'Qual destes nomes de arquivo o Windows **não** aceita?', opcoes: ['relatorio_2026.docx', 'notas-finais.txt', 'prova:final.pdf', 'contas 2026.xlsx'], correta: 2,
          explicacao: 'O caractere **:** (dois-pontos) é proibido em nomes de arquivo no Windows, porque já é usado no caminho ("C:"). Os proibidos são: \\ / : * ? " < > |',
          outraExplicacao: 'Espaço, hífen e sublinhado são permitidos. Os proibidos são os que têm outra função no sistema: os dois-pontos marcam a unidade, como em C:.' },
      ],
    },
    { // 5. atalhos com Win
      conceito: 'Atalhos do Windows mais cobrados: **Win + E** (Explorador), **Win + D** (área de trabalho), **Win + L** (bloquear), **Win + I** (Configurações), **Win + R** (Executar), **Win + V** (histórico da área de transferência); **Ctrl + C/X/V/Z/Y/A** e **Alt + Tab / Alt + F4**.',
      variacoes: [
        { pergunta: 'No Windows, o atalho Win + E abre:', opcoes: ['as Configurações', 'o Explorador de Arquivos', 'a caixa Executar', 'o Gerenciador de Tarefas'], correta: 1,
          explicacao: '**Win + E** abre o **Explorador de Arquivos** (E de Explorador). Configurações é Win + I, Executar é Win + R e o Gerenciador de Tarefas é Ctrl + Shift + Esc.',
          outraExplicacao: 'Use a primeira letra: **E** = **E**xplorador. Para os outros, lembre do inglês: R de *Run* (executar), L de *Lock* (bloquear), D de *Desktop*.' },
        { pergunta: 'No Windows (fora do Word em português), qual atalho seleciona todos os arquivos de uma pasta no Explorador?', opcoes: ['Ctrl + T', 'Ctrl + S', 'Ctrl + A', 'Ctrl + E'], correta: 2,
          explicacao: 'No Windows e no Explorador de Arquivos, **Ctrl + A** seleciona tudo (A de *all*). O Ctrl + T só seleciona tudo no Word em português.',
          outraExplicacao: 'Guarde a separação: Windows "fala inglês" nos atalhos (A de *all*); o Word em português tem atalhos traduzidos (T de "tudo"). Questão sobre o Explorador → Ctrl + A.' },
      ],
    },
    { // 6. arrastar entre unidades copia
      conceito: 'Ao **arrastar**: na mesma unidade, o Windows **move**; para outra unidade, **copia**. Segurando **Ctrl**, sempre copia; segurando **Shift**, sempre move; com **Alt**, cria um atalho. Ctrl + X e colar também move.',
      variacoes: [
        { pergunta: 'Você arrasta um arquivo de C:\\Documentos para C:\\Imagens, sem segurar nenhuma tecla. O que acontece?', opcoes: ['O arquivo é copiado', 'O arquivo é movido', 'É criado um atalho', 'Aparece uma mensagem de erro'], correta: 1,
          explicacao: 'As duas pastas estão na **mesma unidade** (C:), então o Windows **move** o arquivo: ele sai de Documentos e vai para Imagens.',
          outraExplicacao: 'Na mesma unidade, o arquivo nem precisa ser regravado: o Windows só troca o "endereço" dele. Por isso, o natural é mover.' },
        { pergunta: 'Sobre a área de transferência do Windows, é correto afirmar:', opcoes: ['Ela guarda permanentemente tudo o que já foi copiado, mesmo após desligar o PC.', 'Ao copiar um item novo, ele substitui o anterior; o histórico pode ser visto com Win + V.', 'Ela só funciona para textos, nunca para arquivos.', 'Ctrl + X apaga o arquivo imediatamente, mesmo sem colar.'], correta: 1,
          explicacao: 'A área de transferência guarda **o último item** copiado ou recortado (o novo substitui o anterior). No Windows 10 e 11, **Win + V** mostra o histórico, depois de ativado. Ela é temporária e funciona com textos, imagens e arquivos.',
          outraExplicacao: 'Pense nela como a "mão" do computador: segura uma coisa de cada vez até você soltar (colar). O Win + V é como um bolso com os últimos itens que você pegou.' },
      ],
    },
    { // 7. Shift + Delete
      conceito: 'A tecla **Delete** manda o arquivo do disco do PC para a **Lixeira** (dá para restaurar). **Shift + Delete** exclui de forma permanente. Arquivos excluídos de **pen drive**, cartão de memória ou **pasta de rede** também não vão para a Lixeira.',
      variacoes: [
        { pergunta: 'Você exclui um arquivo de um pen drive com a tecla Delete. Para onde ele vai?', opcoes: ['Para a Lixeira do computador', 'Para a área de transferência', 'É excluído direto, sem passar pela Lixeira', 'Para a pasta Downloads'], correta: 2,
          explicacao: 'Arquivos excluídos de **unidades removíveis** (pen drive, cartão de memória) **não vão para a Lixeira**: são apagados direto, e o Windows avisa antes.',
          outraExplicacao: 'A Lixeira é uma pasta do disco do próprio computador. O pen drive pode ser tirado a qualquer momento, então o Windows não guarda o que você apaga dele.' },
        { pergunta: 'Um arquivo foi para a Lixeira e você clicou em "Restaurar". O que acontece?', opcoes: ['Ele volta para a pasta de onde foi excluído', 'Ele vai para a Área de Trabalho', 'Ele é copiado para a área de transferência', 'Ele é excluído permanentemente'], correta: 0,
          explicacao: '**Restaurar** devolve o arquivo para o **local original**, a pasta de onde ele saiu.',
          outraExplicacao: 'A Lixeira guarda junto de cada arquivo o "endereço de volta". Restaurar é só devolvê-lo para casa.' },
      ],
    },
    { // 8. software livre
      conceito: '**Software livre** garante 4 liberdades: executar, estudar e modificar (com acesso ao código-fonte), redistribuir cópias e distribuir versões modificadas. **Livre não é grátis**. **Proprietário** tem código fechado e licença restrita; **freeware** é grátis, mas fechado.',
      variacoes: [
        { pergunta: 'Um programa é distribuído de graça, mas o código-fonte é fechado e não pode ser modificado. Ele é:', opcoes: ['software livre', 'freeware', 'de domínio público obrigatoriamente', 'um sistema operacional'], correta: 1,
          explicacao: 'Grátis, mas fechado: é **freeware**. Para ser software livre, precisaria dar acesso ao código e garantir as 4 liberdades.',
          outraExplicacao: 'Separe as duas perguntas: "Paga?" (preço) e "Posso ver e mudar o código?" (liberdade). Freeware responde "não" e "não". Software livre responde "pode ser que sim" e "sim".' },
        { pergunta: 'Qual destes é um exemplo de software livre?', opcoes: ['Microsoft Windows', 'Adobe Photoshop', 'LibreOffice', 'macOS'], correta: 2,
          explicacao: 'O **LibreOffice** é software livre: qualquer pessoa pode usar, estudar, modificar e distribuir. Windows, Photoshop e macOS são proprietários.',
          outraExplicacao: 'Pense em quem é o "dono": Windows é da Microsoft, Photoshop da Adobe, macOS da Apple, e nenhum mostra o código. O LibreOffice é mantido por uma comunidade, com o código aberto para todos.' },
      ],
    },
  ],
});

App.dados.adicionarTermos('informatica', {
  'hardware': 'A parte física do computador, o que dá para tocar: processador, memória, SSD, teclado.',
  'software': 'A parte lógica do computador: os programas, incluindo o sistema operacional e os aplicativos.',
  'kernel': 'O núcleo do sistema operacional: gerencia processos, memória, dispositivos e arquivos. Fica sempre carregado na memória.',
  'driver': 'Pequeno programa que permite ao sistema operacional se comunicar com um hardware específico (impressora, placa de vídeo, SSD).',
  'firmware': 'Programa gravado dentro do próprio hardware, como a BIOS/UEFI da placa-mãe, que roda antes do sistema operacional.',
  'sistema de arquivos': 'O jeito como o sistema organiza os arquivos no disco: NTFS (Windows), FAT32 e exFAT (pen drives), ext4 (Linux), APFS (macOS).',
  'distro': 'Distribuição Linux: um sistema completo montado em volta do kernel Linux, como Ubuntu, Debian, Fedora e Linux Mint.',
  'extensão de arquivo': 'O final do nome do arquivo, depois do último ponto (.docx, .pdf, .exe), que indica o tipo e o programa que o abre.',
  'área de transferência': 'Espaço temporário na memória onde fica o que foi copiado (Ctrl + C) ou recortado (Ctrl + X) até ser colado (Ctrl + V).',
  'código-fonte': 'O texto do programa como os programadores escreveram, numa linguagem que pessoas conseguem ler e modificar.',
  'software livre': 'Programa que garante as 4 liberdades: executar, estudar e modificar (com acesso ao código-fonte), redistribuir e distribuir versões modificadas. Livre não é sinônimo de grátis.',
  'freeware': 'Programa gratuito, mas de código fechado: dá para usar, não para estudar nem modificar.',
});
