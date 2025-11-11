import { inicializarFormulario } from "./formValidation.js";
import { inicializarLogin } from "./login.js";
import { carregarUsuario } from "./storage.js";

export function carregarPagina(pagina) {
  const conteudo = document.getElementById("conteudo");

  fetch(`./pages/${pagina}.html`)
    .then((res) => {
      if (!res.ok) throw new Error("Página não encontrada");
      return res.text();
    })
    .then((html) => {
      conteudo.innerHTML = html;

      
      conteudo.setAttribute("tabindex", "-1");
      conteudo.focus();

      
      if (pagina === "cadastro") {
        inicializarFormulario();
      } else if (pagina === "login") {
        inicializarLogin();
      }

      
      carregarUsuario();
    })
    .catch((erro) => {
      console.error("Erro ao carregar:", pagina, erro);
      conteudo.innerHTML = `
        <h2 style="text-align:center;color:red;">
          ⚠️ Erro ao carregar a página "${pagina}".
        </h2>
      `;
    });
}

// Torna a função acessível e adiciona os eventos nos links
window.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a[data-pagina]");
  links.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const pagina = link.getAttribute("data-pagina");
      carregarPagina(pagina);
    });
  });

  
  carregarPagina("home");
});

window.carregarPagina = carregarPagina;