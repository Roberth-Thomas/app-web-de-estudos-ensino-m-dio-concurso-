/* =========================================================
   nuvem-config.js — configuração do salvamento no Google Drive
   Cole aqui o "ID do cliente OAuth" criado no Google Cloud Console
   (o passo a passo está no README.md, seção "Salvar no Google Drive").
   Enquanto estiver vazio, o app funciona normalmente, só sem nuvem.

   O ID do cliente NÃO é segredo: ele aparece no código de qualquer
   site que usa "Entrar com Google". A segurança vem das "origens
   autorizadas" cadastradas no Console e do seu login Google.
   ========================================================= */
App.configNuvem = {
  // Projeto "EstudosAPP" no Google Cloud · origens: https://estudos-rt.pages.dev e http://localhost:8080
  CLIENT_ID: '1015026035973-lrpkjem5lge7t30pv01vpst6t7tif6ar.apps.googleusercontent.com',
};
