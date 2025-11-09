import { carregarPagina } from "./router.js";
import { carregarUsuario } from "./storage.js";

document.addEventListener("DOMContentLoaded", () => {
  // ===== MENU HAMBÚRGUER =====
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

  
  carregarPagina("home");
  carregarUsuario();
});