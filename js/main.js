
document.addEventListener("DOMContentLoaded", () => {
  // MENU HAMBÚRGUER 
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  if (menuToggle && menu) {
    
    menuToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      menu.classList.toggle("active");
    });

    
    document.addEventListener("click", (e) => {
      if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
        menu.classList.remove("active");
      }
    });
  }

  // ======== SPA (Single Page Application) ========
  const conteudo = document.getElementById("conteudo");

  function carregarPagina(pagina) {
    fetch(`../pages/${pagina}.html`)
      .then((res) => {
        if (!res.ok) throw new Error("Página não encontrada");
        return res.text();
      })
      .then((html) => {
        conteudo.innerHTML = html;

       
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

function inicializarLogin() {
  console.log("Página de login carregada");
}  

function inicializarFormulario() {
  console.log("Página de cadastro carregada");
}
  window.carregarPagina = carregarPagina;

 
  carregarPagina("home");

  
  carregarUsuario();
});