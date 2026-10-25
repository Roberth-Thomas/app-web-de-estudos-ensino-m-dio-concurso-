# Planos de estudo: Agentes Inteligentes, Inteligência Artificial e Segurança Cibernética

Montados a partir da grade publicada pela FIAP (páginas lidas em 24/10/2026).
Os três são tecnólogos de 2 anos e 2.000 horas, e no momento estão **sem turmas abertas** (próximo vestibular: 2027).

Os planos ensinam **o mesmo conteúdo da grade da FIAP, em ordem de aprendizado**, com material gratuito ou aberto.
Não usam material da FIAP. Servem para estudar sozinho, ou para chegar ao curso já com base, se você entrar.

## Como usar

- **Ritmo:** 1 hora por dia, 5 dias por semana (cerca de 5 h por semana), sem obrigação, como o resto do app.
  Se você faltar uma semana, ela empurra o plano e nada mais.
- **Um curso por vez.** Os três juntos dão mais de 15 h por semana, somadas ao ENEM e ao inglês.
  Faça a **Base comum** primeiro (ela serve para os três) e depois escolha um.
- **Cada fase termina com uma entrega**: um pequeno projeto seu no GitHub. É a "prova" da fase e o que vale num portfólio.
- O inglês que você já estuda ajuda nos três: quase toda a documentação é em inglês.

### Qual escolher primeiro?

| Se você gosta mais de… | Comece por |
|---|---|
| Fazer a IA *executar tarefas* (apps, automações, integrações) | **Agentes Inteligentes** (é o mais rápido para virar projeto real) |
| Entender *como a IA funciona por dentro* (matemática, redes neurais, visão, hardware) | **Inteligência Artificial** |
| Redes, Linux, entender ataques e defender sistemas | **Segurança Cibernética** |

Agentes e IA dividem muita coisa (Python, LLMs). Segurança divide a parte de Linux e redes.

---

## Base comum (8 semanas, vale para os três)

| Semanas | O que estudar | Material | Entrega |
|---|---|---|---|
| 1–3 | Python do zero: variáveis, condições, laços, funções, listas e dicionários, arquivos | [CS50P (Harvard, grátis)](https://cs50.harvard.edu/python/) ou o [tutorial oficial em português](https://docs.python.org/pt-br/3/tutorial/) | Um script que lê um arquivo CSV e faz um resumo |
| 4 | Git e GitHub | [Livro Pro Git em português](https://git-scm.com/book/pt-br/v2), capítulos 1 a 3 | Seus scripts num repositório no GitHub |
| 5 | Terminal e Linux básico | [OverTheWire: Bandit](https://overthewire.org/wargames/bandit/), níveis 0 a 15 | Anotações dos comandos no caderno |
| 6 | Redes: IP, DNS, HTTP, portas | [Cisco Networking Academy](https://www.netacad.com/), curso grátis de redes básicas | Explicar com suas palavras o que acontece quando você abre um site |
| 7 | APIs e JSON: pedir dados a um serviço com `requests` | Documentação da [biblioteca requests](https://requests.readthedocs.io/) | Script que consulta uma API pública e salva o resultado |
| 8 | SQL básico | [SQLBolt](https://sqlbolt.com/) | Um banco SQLite com uma tabela sua e 5 consultas |

---

## 1. Agentes Inteligentes (cerca de 51 semanas depois da base: 27 no ano 1 e 24 no ano 2)

Na FIAP: *AI Agents Engineering & Autonomous Architectures*. O foco é transformar modelos de linguagem (LLMs) em sistemas que **decidem e executam tarefas**:
integram APIs e bancos, usam ferramentas, têm memória e rodam em produção com segurança.

### Ano 1: construir agentes

| Fase | Semanas | Disciplinas da FIAP | O que aprender | Material | Entrega |
|---|---|---|---|---|---|
| 1 | 4 | Programação Aplicada a Agentes com Python | Python intermediário: classes, tipos, ambientes virtuais, `async`, tratamento de erros | [Tutorial oficial do Python](https://docs.python.org/pt-br/3/tutorial/) (capítulos 8 a 10) | Pacote Python organizado, com testes simples |
| 2 | 4 | Fundamentos de Agentes de IA e LLMs | O que é um LLM, tokens, janela de contexto, temperatura, embeddings, limitações (alucinação) | [Curso de LLMs da Hugging Face](https://huggingface.co/learn/llm-course), capítulos 1 e 2; documentação da API do Claude ou da OpenAI | Um chat de terminal que chama a API |
| 3 | 3 | Prompt Engineering & Context Engineering | System prompt, exemplos (few-shot), saída estruturada em JSON, como montar o contexto | [Guia de prompts da Anthropic](https://docs.claude.com/) (seção *Prompt engineering*) | Um prompt que sempre devolve JSON válido, testado com 20 entradas |
| 4 | 4 | APIs, Integração e Tool Calling | Tool calling: o modelo pede para chamar uma função e o seu código executa; MCP (protocolo de ferramentas) | [Building effective agents (Anthropic)](https://www.anthropic.com/engineering/building-effective-agents); [modelcontextprotocol.io](https://modelcontextprotocol.io/) | Agente com 3 ferramentas: clima, calculadora e leitura de arquivo |
| 5 | 5 | RAG Systems e Vector Databases | Embeddings, divisão de textos em partes (chunking), busca semântica, bancos vetoriais (FAISS, Chroma) | [LlamaIndex: Getting started](https://docs.llamaindex.ai/); documentação do [FAISS](https://github.com/facebookresearch/faiss) | Agente que responde perguntas sobre os PDFs de estudo, citando a página |
| 6 | 3 | Automação Inteligente e Workflows Autônomos | Fluxos com gatilhos, filas, aprovação humana no meio do fluxo | [Documentação do n8n](https://docs.n8n.io/) (versão auto-hospedada é grátis) | Um fluxo que resume e-mails ou RSS e manda um resumo diário |
| 7 | 4 | Cloud, Deploy e Escalabilidade de Agentes | FastAPI, Docker, variáveis secretas, deploy em nuvem com plano grátis | [FastAPI em português](https://fastapi.tiangolo.com/pt/); [Docker: Get started](https://docs.docker.com/get-started/) | O agente da fase 4 rodando como API num contêiner |
| — | contínuo | Formação Social e Sustentabilidade | Impactos da automação no trabalho, viés, privacidade, LGPD | Leituras curtas, uma por semana | Um texto de opinião (serve como treino de redação) |

### Ano 2: sistemas de agentes em produção

| Fase | Semanas | Disciplinas da FIAP | O que aprender | Material | Entrega |
|---|---|---|---|---|---|
| 8 | 4 | Multi-Agent Systems & AI Orchestration | Vários agentes: orquestrador e trabalhadores, divisão de tarefas, padrões hierárquicos | [Curso de Agentes da Hugging Face](https://huggingface.co/learn/agents-course); documentação do LangGraph | Um "pesquisador" e um "revisor" que trabalham juntos num relatório |
| 9 | 3 | Agent Memory, Planning & Decision Systems | Memória de curto e longo prazo, planejamento, quando o agente deve parar e perguntar | Mesmo curso (unidades de planejamento) | Agente que lembra das preferências entre conversas |
| 10 | 3 | AI Agent Evaluation & QA (Evals) | Conjuntos de teste (golden datasets), LLM-as-a-judge, medir acertos antes de mudar o prompt | Documentação de *evals* da Anthropic ou da OpenAI | Uma bateria de 30 testes automáticos para o agente da fase 5 |
| 11 | 3 | Segurança e Governança de Agentes | Prompt injection, limites de permissão, registro de decisões (logs), aprovação humana | [OWASP Top 10 para aplicações com LLM](https://genai.owasp.org/) | Lista de riscos do seu agente e como cada um é bloqueado |
| 12 | 2 | Performance, Escalabilidade e Otimização | Custo por token, cache de prompt, latência, escolher o modelo certo para cada tarefa | Documentação de preços e de cache do provedor | Relatório: quanto custa por mês e como cortei 30% |
| 13 | 3 | Enterprise AI Agents & System Integration | Integrar com CRM, ERP e planilhas, eventos (webhooks), versões do agente | APIs gratuitas de teste (Google Sheets, Notion, HubSpot) | Agente que lê e atualiza uma planilha de verdade |
| 14 | 2 | Agentic UX & Agent-Based Product Development | Como mostrar ao usuário o que o agente está fazendo, pedir confirmação, métricas | Exemplos de produtos reais (Claude Code, Copilot) | Tela simples para o seu agente (Streamlit ou HTML) |
| 15 | 4 | Forward Deployed AI Engineering | Pegar um problema real, prototipar rápido, apresentar | — | **Projeto final**: um agente que resolve um problema seu de verdade |

> Ideia natural de projeto final: um agente que monta revisões a partir do seu caderno do EstudosAPP, usando só os dados de desempenho, sem dados pessoais.

---

## 2. Inteligência Artificial (cerca de 60 semanas depois da base: 4 de matemática, 30 no ano 1 e 26 no ano 2)

Na FIAP: *Machine Learning, IA Generativa & Natural Language Processing*. É o mais **"por dentro"**: estatística, aprendizado de máquina, redes neurais, visão, linguagem natural, hardware (ESP32, Raspberry Pi) e até computação quântica.

### Antes: matemática que a IA usa (4 semanas)
Álgebra linear (vetores, matrizes), derivadas e probabilidade, no nível do ensino médio para cima.
Material: [Khan Academy](https://pt.khanacademy.org/) e a série [Essence of Linear Algebra (3Blue1Brown)](https://www.3blue1brown.com/topics/linear-algebra). Isso também ajuda na Matemática do ENEM.

### Ano 1: dados e aprendizado de máquina

| Fase | Semanas | Disciplinas da FIAP | O que aprender | Material | Entrega |
|---|---|---|---|---|---|
| 1 | 3 | Computational Thinking With Python | Algoritmos, complexidade, recursão, estruturas de dados | [CS50x (Harvard)](https://cs50.harvard.edu/x/), semanas 0 a 5 | Resolver 20 exercícios de lógica |
| 2 | 4 | Statistical Computing With R & Python | Média, desvio, distribuições, correlação, testes de hipótese; Pandas e NumPy | [Kaggle Learn: Pandas](https://www.kaggle.com/learn) e [Estatística na Khan Academy](https://pt.khanacademy.org/math/statistics-probability) | Análise de um conjunto de dados público com gráficos |
| 3 | 3 | Cognitive Data Science | Bancos de dados, limpeza, junção de tabelas, coleta de dados | Kaggle Learn: *Data Cleaning* e *Intro to SQL* | Base limpa e documentada a partir de dados brutos |
| 4 | 5 | Machine Learning & Modelling | Regressão linear e logística, árvores de decisão, validação, lógica fuzzy, otimização | [Machine Learning Crash Course (Google)](https://developers.google.com/machine-learning/crash-course); [scikit-learn](https://scikit-learn.org/stable/tutorial/) | Modelo que prevê algo (ex.: preço de hardware usado) com métrica explicada |
| 5 | 5 | Redes Neurais, Deep Learning e Algoritmos Genéticos | Perceptron, retropropagação, PyTorch ou TensorFlow, aprendizado por reforço, algoritmos genéticos | Série [Neural Networks (3Blue1Brown)](https://www.3blue1brown.com/topics/neural-networks); [fast.ai](https://course.fast.ai/); [Tutoriais do PyTorch](https://pytorch.org/tutorials/) | Rede que reconhece dígitos escritos à mão; um algoritmo genético que aprende a jogar um jogo simples |
| 6 | 3 | AI Computer Systems & Sensors | Como o computador funciona; ler sensores no ESP32 ou Raspberry Pi; IA rodando no dispositivo | [Wokwi](https://wokwi.com/) (simula ESP32 e Arduino no navegador, sem comprar nada); [documentação do Arduino](https://docs.arduino.cc/) | Sensor simulado que dispara um alerta com uma regra aprendida |
| 7 | 3 | Plataformas, Serviços Cognitivos & Cloud | Serviços de IA prontos (visão, fala, tradução) na AWS, Azure e Google | Planos grátis e trilhas de treinamento de cada nuvem | Comparação de 2 serviços de visão na mesma imagem |
| 8 | 2 | Cognitive Cybersecurity | Como a IA ajuda a detectar ataques; ataques contra modelos | Ver a fase 11 do plano de Segurança | Detector simples de anomalias em logs |
| 9 | 2 | AI Challenges | Introdução e prototipagem com problema real | — | Protótipo de um problema real em 2 semanas |

### Ano 2: IA avançada e aplicações

| Fase | Semanas | Disciplinas da FIAP | O que aprender | Material | Entrega |
|---|---|---|---|---|---|
| 10 | 5 | Generative AI & Advanced Nets | Transformers e atenção, GANs, modelos de difusão, como o ChatGPT funciona | [Curso de LLMs da Hugging Face](https://huggingface.co/learn/llm-course); [Diffusion Course (Hugging Face)](https://huggingface.co/learn/diffusion-course) | Ajustar (fine-tuning) um modelo pequeno num texto seu |
| 11 | 4 | Processamento de Linguagem Natural, Chatbots & Virtual Agents | Tokenização, análise de sentimento, classificação de texto, chatbots | Hugging Face (capítulos de NLP) | Classificador de sentimento de reviews de jogos |
| 12 | 4 | Visão Computacional | Imagens como matrizes, convolução, filtros, OpenCV, detecção com YOLO | [Tutoriais do OpenCV](https://docs.opencv.org/4.x/d9/df8/tutorial_root.html); documentação do Ultralytics YOLO | Detector de objetos pela webcam |
| 13 | 3 | Physical Computing, Embedded AI, Robotics & IoT | Arduino, sensores e atuadores, edge computing, robótica básica | Wokwi + Arduino; Node-RED | Pequeno sistema IoT com painel no Node-RED |
| 14 | 2 | Cluster Computing, Computação Neuromórfica e Supercomputadores | Por que GPUs, paralelismo, clusters, chips neuromórficos e fotônicos | Leituras e vídeos (combina com seu gosto por hardware) | Texto: por que uma GPU treina IA mais rápido que uma CPU |
| 15 | 2 | Computação Quântica & IA | Qubits, superposição, portas quânticas, onde isso encosta na IA | [IBM Quantum Learning](https://learning.quantum.ibm.com/), *Basics of Quantum Information* | Um circuito quântico simples rodado no simulador |
| 16 | 2 | AI for Robotic Process Automation | Automatizar tarefas repetitivas e ligar a um LLM | n8n ou Python (ver plano de Agentes) | Automação de uma tarefa chata sua |
| 17 | 2 | Front End & Mobile Development | Mostrar o modelo para alguém usar: Streamlit, Dash ou uma página web | [Streamlit](https://docs.streamlit.io/) | O modelo da fase 4 numa página |
| 18 | 2 | Governança em IA & Business Analytics | Viés, explicabilidade, LGPD, painéis de BI | Leituras + Power BI ou Looker Studio (grátis) | Painel com os resultados do seu modelo |

---

## 3. Segurança Cibernética (cerca de 56 semanas depois da base: 26 no ano 1 e 30 no ano 2)

Na FIAP: defesa e ataque na prática, com CTFs, Linux e Windows, redes, nuvem, perícia, malware e governança (LGPD).

> **Regra de ouro:** só pratique ataques em laboratórios feitos para isso (TryHackMe, Hack The Box, PortSwigger, picoCTF) ou em máquinas suas.
> Testar sistemas de outras pessoas sem autorização é crime no Brasil (Lei 12.737/2012, a "Lei Carolina Dieckmann").

### Ano 1: fundamentos de defesa

| Fase | Semanas | Disciplinas da FIAP | O que aprender | Material | Entrega |
|---|---|---|---|---|---|
| 1 | 3 | Cybersecurity (Hacker Mindset) | Tríade CIA (confidencialidade, integridade, disponibilidade), tipos de ataque, firewalls e IPS | [Cartilha de Segurança do CERT.br](https://cartilha.cert.br/); curso grátis *Introduction to Cybersecurity* da [Cisco NetAcad](https://www.netacad.com/) | Glossário de 30 termos no caderno |
| 2 | 4 | Linux Services Applications | Permissões, processos, serviços (Apache, SMB, LDAP), logs | OverTheWire Bandit até o fim; trilha *Linux Fundamentals* do [TryHackMe](https://tryhackme.com/) (gratuita) | Um servidor web seu numa máquina virtual |
| 3 | 3 | Windows Services Applications | Active Directory, compartilhamento de arquivos, IIS, PowerShell | Laboratórios gratuitos do TryHackMe (*Windows Fundamentals*) | Laboratório com AD numa VM (Windows Server de avaliação) |
| 4 | 4 | Network Security & Cloud Foundations | Modelo OSI e TCP/IP, sub-redes, VLANs, VPN, capturar tráfego | [Documentação do Wireshark](https://www.wireshark.org/docs/); Nmap no seu laboratório | Capturar e explicar um login HTTP e um HTTPS |
| 5 | 3 | Coding for Security | Python para segurança: sockets, automatizar, ler logs; JS básico | Livro *Automate the Boring Stuff* (grátis em inglês) | Um scanner de portas simples e um leitor de logs |
| 6 | 4 | Computer Architecture (Memory, Assembly and Debuggers) | Memória, registradores, pilha, binários ELF e PE, Assembly x86, depurador | [picoCTF](https://picoctf.org/) (categoria *Reverse Engineering*); GDB | Resolver 5 desafios de engenharia reversa do picoCTF |
| 7 | 3 | Security Management (IAM & Vulnerability) | Identidade e acessos, menor privilégio, MFA, gestão de vulnerabilidades (CVE, CVSS), patches | [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework) (resumo); site do [CVE](https://www.cve.org/) | Plano de correção de vulnerabilidades para o seu laboratório |
| 8 | 2 | Hardware Hacking (Wireless & IoT) | Como funcionam Wi-Fi, Bluetooth e IoT e por que costumam ser inseguros | Leituras; Wokwi para entender o hardware | Análise de segurança de um aparelho IoT seu (só olhar, sem atacar redes alheias) |

### Ano 2: ataque, resposta e governança

| Fase | Semanas | Disciplinas da FIAP | O que aprender | Material | Entrega |
|---|---|---|---|---|---|
| 9 | 5 | Software Exploitation (Web & Mobile) | OWASP Top 10: injeção SQL, XSS, autenticação quebrada, Burp Suite | [PortSwigger Web Security Academy](https://portswigger.net/web-security) (grátis e excelente); [OWASP Top 10](https://owasp.org/Top10/) | 20 laboratórios do PortSwigger resolvidos, com anotações |
| 10 | 5 | Offensive Security (Pentest & Ethical Hacking) | Etapas de um pentest: reconhecimento, varredura, exploração, relatório; Kali, Metasploit | Salas gratuitas do TryHackMe; máquinas aposentadas do Hack The Box | Relatório de pentest de uma máquina de laboratório |
| 11 | 3 | IA & Machine Learning Security | IA para detectar ameaças e ataques contra a IA (prompt injection, envenenamento de dados) | [OWASP Top 10 para LLM](https://genai.owasp.org/); [MITRE ATLAS](https://atlas.mitre.org/) | Detector de anomalias em logs com scikit-learn |
| 12 | 4 | Cyber Defense Operations (Forense & Resposta a Incidentes) | Cadeia de custódia (ISO 27037, RFC 3227), coleta de evidências, análise de memória e disco, SIEM | Salas de *Digital Forensics* e *SOC Level 1* do TryHackMe; Splunk (versão gratuita) | Linha do tempo de um incidente a partir de logs |
| 13 | 4 | Malware Analysis (Threat Hunting & Reverse Engineering) | Análise estática e dinâmica em ambiente isolado, MITRE ATT&CK, regras YARA | [MITRE ATT&CK](https://attack.mitre.org/); exercícios do TryHackMe | Mapear um malware conhecido nas técnicas do ATT&CK, por relatórios públicos |
| 14 | 3 | Cloud Security (Prevention & DevSecOps) | Segurança na Azure ou AWS, IAM em nuvem, contêineres, segurança no pipeline de código | Treinamentos gratuitos Microsoft Learn (AZ-900 e SC-900) | Pipeline no GitHub que bloqueia código com segredo exposto |
| 15 | 3 | Cyber Threat Intelligence (Deep Web, OSINT & Cyberwar) | Fontes abertas (OSINT), indicadores de ataque, como grupos de ataque operam | Relatórios públicos do CERT.br e de empresas de segurança | Relatório de inteligência sobre um grupo conhecido |
| 16 | 3 | Security Governance, Risk & Compliance (GRC) | Gestão de riscos, ISO 27001, LGPD e GDPR, políticas | [Texto da LGPD (Lei 13.709/2018)](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm); guias da ANPD | Uma política de segurança e uma matriz de riscos |

### Certificações que combinam (opcionais, a maioria é paga)
ISC2 *Certified in Cybersecurity* (CC) para começar, CompTIA Security+ depois do ano 1 e eJPT depois da fase 10.
Microsoft SC-900 e AZ-900 combinam com a fase 14.

---

## Ordem sugerida, se quiser fazer os três

1. Base comum (8 semanas)
2. **Agentes Inteligentes**, ano 1 (27 semanas): é o que vira projeto mais rápido
3. **Inteligência Artificial**, ano 1 (34 semanas, com a matemática): dá a parte teórica que os agentes usam
4. **Segurança Cibernética**, ano 1 (26 semanas): Linux e redes já estarão bem encaminhados
5. Os anos 2 de cada um, conforme o que você mais gostou

A 5 h por semana, cada curso leva cerca de 1 ano (50 a 60 semanas). Os três em sequência levam uns 3 anos e meio, no seu ritmo.
