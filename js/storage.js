
function salvarDadosUsuario(nome) {
  localStorage.setItem("usuario", nome);
}


function carregarUsuario() {
  const nome = localStorage.getItem("usuario");
  const usuarioLogado = localStorage.getItem("usuarioLogado");

  const saudacao = document.getElementById("saudacao");

  if (saudacao) {
    if (usuarioLogado) {
      const user = JSON.parse(usuarioLogado);
      saudacao.textContent = `Olá, ${user.type}! 💚 Bem-vindo(a) de volta!`;
    } else if (nome) {
      saudacao.textContent = `Bem-vindo(a), ${nome}! 💚`;
    } else {
      saudacao.textContent = ""; 
    }
  }
}


function sairUsuario() {
  localStorage.removeItem("usuario");
  localStorage.removeItem("usuarioLogado");
  const saudacao = document.getElementById("saudacao");
  if (saudacao) saudacao.textContent = "";
  alert("Você saiu da sua conta!");
  carregarPagina("home");
}