document.addEventListener("DOMContentLoaded", () => {
  // MENU HAMBÚRGUER 
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  if (menuToggle && menu) {

    // Clique normal
    menuToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      menu.classList.toggle("active");
    });

    // Fechar ao clicar fora
    document.addEventListener("click", (e) => {
      if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
        menu.classList.remove("active");
      }
    });

    //  Acessibilidade: abrir/fechar com teclado 
    menuToggle.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        menu.classList.toggle("active");
      }
    });
  }

 feature/alto-contraste
  
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

  // CONTROLE DE TAMANHO DA FONTE 
let tamanhoFonteAtual = 100; 

document.getElementById("aumentar-fonte").addEventListener("click", () => {
    tamanhoFonteAtual += 10;
    document.body.style.fontSize = tamanhoFonteAtual + "%";
});

document.getElementById("diminuir-fonte").addEventListener("click", () => {
    if (tamanhoFonteAtual > 70) { 
        tamanhoFonteAtual -= 10;
        document.body.style.fontSize = tamanhoFonteAtual + "%";
    }
});
  carregarUsuario();
});
 develop
