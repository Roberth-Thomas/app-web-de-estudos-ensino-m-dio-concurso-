/* =========================================================
   telas/config.js — data de início, tema, nuvem e backup
   ========================================================= */
App.telas = App.telas || {};

App.telas.config = (function () {
  const U = App.util;

  function blocoNuvem() {
    const N = App.nuvem;
    if (!N.disponivel()) {
      const motivo = !App.configNuvem.CLIENT_ID
        ? 'Ainda falta configurar o ID do cliente Google no arquivo <code>js/nuvem-config.js</code>.'
        : 'O app foi aberto direto do arquivo (file://). O login do Google só funciona pelo endereço do site (GitHub Pages) ou por um servidor local.';
      return `<p class="suave">${motivo} Veja o passo a passo no README.md, seção "Salvar no Google Drive".</p>
              <p class="suave pequeno">Enquanto isso, use Exportar/Importar abaixo para levar o progresso entre aparelhos.</p>`;
    }
    const s = N.status();
    if (!N.conectado()) {
      return `<p class="suave">Salve o progresso no seu Google Drive e continue de onde parou em qualquer aparelho. O app só acessa uma pasta oculta exclusiva dele.</p>
              <button class="botao primario" data-acao="conectar">Conectar Google Drive</button>
              ${s.mensagem ? `<p class="suave pequeno" style="margin-top:.5rem">${U.esc(s.mensagem)}</p>` : ''}`;
    }
    return `<p><span class="selo ${s.estado === 'ok' ? 'ok' : s.estado === 'erro' || s.estado === 'reconectar' ? 'alerta' : 'info'}">${U.esc(s.mensagem || 'Conectado')}</span></p>
            <div class="linha">
              ${s.estado === 'reconectar' ? '<button class="botao primario" data-acao="conectar">Reconectar</button>'
                : '<button class="botao" data-acao="sincronizar">Sincronizar agora</button>'}
              <button class="botao perigo" data-acao="desconectar">Desconectar</button>
            </div>
            <p class="suave pequeno" style="margin-top:.5rem">Sincroniza ao abrir o app e a cada mudança. Por segurança, o Google pede para reconectar cerca de 1 vez por hora de uso.</p>`;
  }

  /** Entrada com a digital (chave de acesso). Só existe no site publicado (https). */
  function blocoDigital() {
    if (!window.Acesso || !Acesso.disponivel()) {
      return '<p class="suave pequeno">Disponível no site publicado, no celular ou no PC com leitor de digital ou Windows Hello.</p>';
    }
    const s = Acesso.salvo();
    const sair = '<a class="botao" href="/_acesso/sair">Sair deste aparelho</a>';
    if (s) {
      return `<p>✓ Digital cadastrada neste aparelho${s.em ? ' em ' + U.esc(U.dataCurta(new Date(s.em))) : ''}.</p>
        <p class="suave pequeno">Ao abrir o app depois de 30 dias sem usar, é só tocar no leitor. A digital nunca sai do aparelho.</p>
        <div class="linha">
          <button class="botao" data-acao="cadastrar-digital">Cadastrar de novo</button>
          <button class="botao" data-acao="esquecer-digital">Esquecer a digital</button>
          ${sair}
        </div>`;
    }
    return `<p class="suave pequeno">Entre com a digital em vez da senha. O aparelho fica liberado por 30 dias e renova sozinho enquanto você usa.</p>
      <div class="linha">
        <button class="botao primario" data-acao="cadastrar-digital">Cadastrar a digital</button>
        ${sair}
      </div>`;
  }

  function render(el) {
    const estado = App.store.get();
    el.innerHTML = `
      <section class="cartao">
        <h1>Configurações</h1>
        <div class="campo">
          <label for="inicio">Data de início do plano</label>
          <input type="date" id="inicio" value="${U.esc(estado.config.inicio || U.iso(U.hoje()))}">
          <span class="suave pequeno">As fases (2 meses cada) e o ritmo de referência partem desta data.</span>
        </div>
        <div class="campo">
          <label for="tema">Tema</label>
          <select id="tema">
            <option value="auto" ${estado.config.tema === 'auto' ? 'selected' : ''}>Automático (igual ao sistema)</option>
            <option value="claro" ${estado.config.tema === 'claro' ? 'selected' : ''}>Claro</option>
            <option value="escuro" ${estado.config.tema === 'escuro' ? 'selected' : ''}>Escuro</option>
          </select>
        </div>
      </section>

      <section class="cartao">
        <h2>Google Drive</h2>
        ${blocoNuvem()}
      </section>

      <section class="cartao">
        <h2>Entrada com a digital</h2>
        ${blocoDigital()}
      </section>

      <section class="cartao">
        <h2>Backup</h2>
        <p class="suave pequeno">Baixe um arquivo com todo o seu progresso ou restaure um backup anterior.</p>
        <div class="linha">
          <button class="botao" data-acao="exportar">Exportar progresso (.json)</button>
          <label class="botao" for="arquivo-importar">Importar progresso</label>
          <input type="file" id="arquivo-importar" accept=".json,application/json" hidden>
        </div>
      </section>

      <section class="cartao">
        <h2>Zona de perigo</h2>
        <p class="suave pequeno">Apaga todo o progresso deste aparelho (e da nuvem, se conectada). Faça um backup antes.</p>
        <button class="botao perigo" data-acao="resetar">Apagar todo o progresso</button>
      </section>`;

    el.onchange = (ev) => {
      if (ev.target.id === 'inicio' && ev.target.value) {
        estado.config.inicio = ev.target.value;
        App.store.salvar();
        U.aviso('Data de início atualizada');
      } else if (ev.target.id === 'tema') {
        estado.config.tema = ev.target.value;
        App.store.salvar();
        App.aplicarTema();
      } else if (ev.target.id === 'arquivo-importar' && ev.target.files[0]) {
        if (!confirm('Importar este arquivo vai SUBSTITUIR o progresso atual. Continuar?')) { ev.target.value = ''; return; }
        App.store.importar(ev.target.files[0])
          .then(() => { App.aoTrocarEstado(); U.aviso('Progresso importado'); })
          .catch((erro) => U.aviso('' + erro.message));
      }
    };

    el.onclick = (ev) => {
      const acao = ev.target.closest('[data-acao]');
      if (!acao) return;
      switch (acao.dataset.acao) {
        case 'exportar': App.store.exportar(); break;
        case 'cadastrar-digital':
          Acesso.cadastrar()
            .then(() => { U.aviso('Digital cadastrada'); render(el); })
            .catch((erro) => U.aviso('' + erro.message));
          break;
        case 'esquecer-digital':
          if (confirm('Esquecer a digital deste aparelho? Para entrar de novo depois dos 30 dias, use a senha.')) {
            Acesso.esquecer();
            render(el);
          }
          break;
        case 'conectar': App.nuvem.conectar().then(() => render(el)); break;
        case 'sincronizar': App.nuvem.sincronizar().then(() => render(el)); break;
        case 'desconectar':
          if (confirm('Desconectar do Google Drive? O progresso continua salvo neste aparelho e na nuvem.')) {
            App.nuvem.desconectar();
            render(el);
          }
          break;
        case 'resetar':
          if (confirm('Tem certeza? Isso apaga TODO o progresso.') && confirm('Última chance: apagar mesmo?')) {
            App.store.resetar();
            App.aoTrocarEstado();
            U.aviso('Progresso apagado');
          }
          break;
      }
    };
  }

  return { render, titulo: 'Configurações' };
})();
