function inicializarLogin() {
  const form = document.getElementById("loginForm");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const userType = document.getElementById("userType").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("error");

    const users = [
      { email: "admin@ong.com", password: "1234", type: "admin" },
      { email: "voluntario@ong.com", password: "1234", type: "voluntario" },
      { email: "doador@ong.com", password: "1234", type: "doador" },
    ];

    const userFound = users.find(
      (user) =>
        user.email === email &&
        user.password === password &&
        user.type === userType
    );

    if (userFound) {
      localStorage.setItem("usuarioLogado", JSON.stringify(userFound));

      alert(`Bem-vindo(a), ${userType}!`);
      
      const saudacao = document.getElementById("saudacao");
      if (saudacao) {
        saudacao.textContent = `Olá, ${userType}! 💚 Bem-vindo(a) de volta!`;
      }

      
      carregarPagina("home.html");
    } else {
      if (errorMsg)
        errorMsg.textContent = "⚠️ E-mail, senha ou tipo de usuário incorreto!";
    }
  });
}