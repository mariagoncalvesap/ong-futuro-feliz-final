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

      
      if (pagina === "cadastro.html") {
        inicializarFormulario();
      } else if (pagina === "login.html") {
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


window.carregarPagina = carregarPagina;