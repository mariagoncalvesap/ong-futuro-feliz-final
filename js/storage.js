// js/storage.js
function salvarDadosUsuario(nome) {
  localStorage.setItem("usuario", nome);
}

function carregarUsuario() {
  const nome = localStorage.getItem("usuario");
  if (nome) {
    const saudacao = document.getElementById("saudacao");
    if (saudacao) {
      saudacao.textContent = `Bem-vindo(a), ${nome}! 💚`;
    }
  }
}