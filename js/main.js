
document.addEventListener("DOMContentLoaded", () => {

  //  MENU HAMBÚRGUER 
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  if (menuToggle && menu) {
    menuToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      menu.classList.toggle("active");
      menuToggle.setAttribute("aria-expanded", menu.classList.contains("active"));
    });

    
    document.addEventListener("click", (e) => {
      if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
        menu.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  //  SPA (Single Page Application) 
  const conteudo = document.getElementById("conteudo");

  function carregarPagina(pagina) {
    fetch(`/pages/${pagina}.html`)
      .then((res) => {
        if (!res.ok) throw new Error("Página não encontrada");
        return res.text();
      })
      .then((html) => {
        conteudo.innerHTML = html;

        
        const titulo = conteudo.querySelector("h2, h1");
        if (titulo) titulo.setAttribute("tabindex", "-1"), titulo.focus();

        
        if (pagina === "cadastro") {
          inicializarFormulario();
        } else if (pagina === "login") {
          inicializarLogin();
        }
      })
      .catch(() => {
        conteudo.innerHTML = `<h2 style="text-align:center;color:red;">Erro ao carregar a página "${pagina}".</h2>`;
        console.error("Erro ao carregar:", pagina);
      });
  }

  //  FORMULÁRIO DE CADASTRO 
  function inicializarFormulario() {
    const form = document.getElementById("formCadastro");
    const erro = document.getElementById("erro");
    const saudacao = document.getElementById("saudacao");

    if (!form) return;

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const nome = form.nome.value.trim();
      const email = form.email.value.trim();
      const cpf = form.cpf.value.trim();
      const telefone = form.telefone.value.trim();
      const data = form.data_nascimento.value;
      const endereco = form.endereco.value.trim();
      const cep = form.cep.value.trim();
      const cidade = form.cidade.value.trim();
      const estado = form.estado.value;

      
      erro.textContent = "";
      saudacao.textContent = "";

      
      if (!nome || !email || !cpf || !telefone || !data || !endereco || !cep || !cidade || !estado) {
        erro.textContent = "⚠️ Por favor, preencha todos os campos obrigatórios.";
        return;
      }

      if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        erro.textContent = "⚠️ E-mail inválido. Exemplo: nome@dominio.com";
        return;
      }

      if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) {
        erro.textContent = "⚠️ CPF inválido. Use o formato 000.000.000-00.";
        return;
      }

      if (!/^\(\d{2}\)\s?\d{4,5}-\d{4}$/.test(telefone)) {
        erro.textContent = "⚠️ Telefone inválido. Use o formato (00) 00000-0000.";
        return;
      }

      if (!/^\d{5}-\d{3}$/.test(cep)) {
        erro.textContent = "⚠️ CEP inválido. Use o formato 00000-000.";
        return;
      }

      //  SALVAR NO LOCALSTORAGE 
      const novoUsuario = { nome, email, cpf, telefone, data, endereco, cep, cidade, estado };
      const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
      usuarios.push(novoUsuario);
      localStorage.setItem("usuarios", JSON.stringify(usuarios));

      saudacao.textContent = `✅ Cadastro realizado com sucesso! Bem-vindo(a), ${nome.split(" ")[0]}!`;
      form.reset();
    });
  }

  // LOGIN 
  function inicializarLogin() {
    const form = document.getElementById("loginForm");
    const erro = document.getElementById("error");

    if (!form) return;

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const email = form.email.value.trim();
      const senha = form.password.value.trim(); // Simulada
      const tipo = form.userType.value;

      erro.textContent = "";

      if (!email || !senha || !tipo) {
        erro.textContent = "⚠️ Preencha todos os campos antes de continuar.";
        return;
      }

      const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
      const usuarioEncontrado = usuarios.find((u) => u.email === email);

      if (usuarioEncontrado) {
        alert(`🎉 Bem-vindo(a), ${usuarioEncontrado.nome}!`);
        form.reset();
      } else {
        erro.textContent = "❌ E-mail não encontrado. Cadastre-se primeiro.";
      }
    });
  }

  // CARREGAMENTO INICIAL 
  window.carregarPagina = carregarPagina;
  carregarPagina("home");
});