/* =========================================================
   planos-cursos.js — planos de estudo prontos para a tela Cursos (#cursos)
   Cada plano vira um curso com uma "aula" por fase: título, material (link) e entrega.
   Plano completo e explicado em docs/planos-fiap.md (grade da FIAP lida em 2026-10-24).
   Material gratuito ou aberto; nada copiado da FIAP.
   ========================================================= */
App.dados = App.dados || {};

App.dados.planosCursos = [
  {
    id: 'fiap-agentes',
    nome: 'Agentes Inteligentes (plano FIAP)',
    descricao: 'Base comum (8 semanas) + 15 fases, cerca de 1 ano a 5 h por semana.',
    url: 'https://www.fiap.com.br/graduacao/tecnologo/agentes-inteligentes/',
    materia: 'informatica',
    aulas: [
      { titulo: 'Base 1 · Python do zero (3 sem.)', url: 'https://cs50.harvard.edu/python/',
        entrega: 'Um script que lê um arquivo CSV e faz um resumo' },
      { titulo: 'Base 2 · Git e GitHub (1 sem.)', url: 'https://git-scm.com/book/pt-br/v2',
        entrega: 'Seus scripts num repositório no GitHub' },
      { titulo: 'Base 3 · Terminal e Linux básico (1 sem.)', url: 'https://overthewire.org/wargames/bandit/',
        entrega: 'Bandit até o nível 15, com os comandos anotados no caderno' },
      { titulo: 'Base 4 · Redes: IP, DNS, HTTP e portas (1 sem.)', url: 'https://www.netacad.com/',
        entrega: 'Explicar com suas palavras o que acontece quando você abre um site' },
      { titulo: 'Base 5 · APIs e JSON (1 sem.)', url: 'https://requests.readthedocs.io/',
        entrega: 'Script que consulta uma API pública e salva o resultado' },
      { titulo: 'Base 6 · SQL básico (1 sem.)', url: 'https://sqlbolt.com/',
        entrega: 'Um banco SQLite com uma tabela sua e 5 consultas' },
      { titulo: 'Fase 1 · Python aplicado a agentes (4 sem.)', url: 'https://docs.python.org/pt-br/3/tutorial/',
        entrega: 'Pacote Python organizado, com testes simples' },
      { titulo: 'Fase 2 · Fundamentos de agentes e LLMs (4 sem.)', url: 'https://huggingface.co/learn/llm-course',
        entrega: 'Um chat de terminal que chama a API de um modelo' },
      { titulo: 'Fase 3 · Prompt e context engineering (3 sem.)', url: 'https://docs.claude.com/',
        entrega: 'Um prompt que sempre devolve JSON válido, testado com 20 entradas' },
      { titulo: 'Fase 4 · APIs, integração e tool calling (4 sem.)', url: 'https://www.anthropic.com/engineering/building-effective-agents',
        entrega: 'Agente com 3 ferramentas: clima, calculadora e leitura de arquivo' },
      { titulo: 'Fase 5 · RAG e bancos vetoriais (5 sem.)', url: 'https://docs.llamaindex.ai/',
        entrega: 'Agente que responde sobre os seus PDFs de estudo, citando a página' },
      { titulo: 'Fase 6 · Automação e workflows autônomos (3 sem.)', url: 'https://docs.n8n.io/',
        entrega: 'Um fluxo que resume e-mails ou RSS e manda um resumo diário' },
      { titulo: 'Fase 7 · Cloud, deploy e escalabilidade (4 sem.)', url: 'https://fastapi.tiangolo.com/pt/',
        entrega: 'O agente da fase 4 rodando como API num contêiner Docker' },
      { titulo: 'Formação social e sustentabilidade (ao longo do ano 1)', url: '',
        entrega: 'Um texto de opinião sobre automação e trabalho (vale como treino de redação)' },
      { titulo: 'Fase 8 · Sistemas multiagentes e orquestração (4 sem.)', url: 'https://huggingface.co/learn/agents-course',
        entrega: 'Um "pesquisador" e um "revisor" que trabalham juntos num relatório' },
      { titulo: 'Fase 9 · Memória, planejamento e decisão (3 sem.)', url: 'https://huggingface.co/learn/agents-course',
        entrega: 'Agente que lembra das preferências entre conversas' },
      { titulo: 'Fase 10 · Avaliação e qualidade (evals) (3 sem.)', url: 'https://docs.claude.com/',
        entrega: 'Uma bateria de 30 testes automáticos para o agente da fase 5' },
      { titulo: 'Fase 11 · Segurança e governança de agentes (3 sem.)', url: 'https://genai.owasp.org/',
        entrega: 'Lista de riscos do seu agente e como cada um é bloqueado' },
      { titulo: 'Fase 12 · Custo, latência e otimização (2 sem.)', url: '',
        entrega: 'Relatório: quanto o agente custa por mês e como cortar 30%' },
      { titulo: 'Fase 13 · Integração com sistemas de empresa (3 sem.)', url: '',
        entrega: 'Agente que lê e atualiza uma planilha de verdade' },
      { titulo: 'Fase 14 · UX de agentes e produto (2 sem.)', url: 'https://docs.streamlit.io/',
        entrega: 'Tela simples para o seu agente (Streamlit ou HTML)' },
      { titulo: 'Fase 15 · Projeto final: problema real (4 sem.)', url: '',
        entrega: 'Um agente que resolve um problema seu de verdade' },
    ],
  },
];
