
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

  
//  ACESSIBILIDADE: ALTO CONTRASTE

const botaoContraste = document.getElementById("btn-contraste");

botaoContraste.addEventListener("click", () => {
  document.documentElement.classList.toggle("alto-contraste");

  
  if (document.documentElement.classList.contains("alto-contraste")) {
    localStorage.setItem("contraste", "ativo");
  } else {
    localStorage.removeItem("contraste");
  }
});


if (localStorage.getItem("contraste") === "ativo") {
  document.documentElement.classList.add("alto-contraste");
}

      carregarUsuario();
    });