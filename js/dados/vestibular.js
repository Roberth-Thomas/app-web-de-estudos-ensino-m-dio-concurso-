/* =========================================================
   dados/vestibular.js — questões reais do ENEM, só por referência
   As tirinhas, charges e textos das provas são dos autores:
   aqui NÃO entra imagem nem texto-base. Cada item guarda onde
   a questão está na prova oficial do Inep, um resumo próprio do
   que ela cobra e uma dica de como resolver.

   Formato de cada item:
   {
     id: 'enem-2023-d1-azul-q05',     // único
     prova: 'ENEM',
     ano: 2023,
     dia: 1,                          // 1 ou 2
     caderno: 'Azul',                 // cor do caderno da prova regular
     questao: 5,                      // número da questão nesse caderno
     url: 'https://download.inep.gov.br/...pdf#page=3', // PDF oficial (https, gov.br)
     gabarito: 'C',                   // gabarito oficial do caderno, 'A' a 'E'
     materia: 'portugues',            // id de js/dados/materias.js
     assunto: 'portugues-1-3',        // tópico "materia-fase-posição" (js/dados/assuntos.js)
     comando: '...',                  // opcional: a frase-comando, curta, entre aspas, com a fonte
     sobre: '...',                    // resumo próprio do que a questão cobra
     dica: '...',                     // passo a passo de como resolver, sem o texto da prova
     temTirinha: true,                // a questão usa tirinha ou charge
   }

   Só entra questão conferida no PDF e no gabarito oficiais do Inep
   (gov.br/inep → Enem → "Provas e gabaritos").
   ========================================================= */
App.dados = App.dados || {};

/** Página oficial com todas as provas e gabaritos do ENEM */
App.dados.vestibularFonte = 'https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem/provas-e-gabaritos';

App.dados.vestibular = [];
