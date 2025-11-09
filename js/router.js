
function carregarPagina(pagina) {
  const conteudo = document.getElementById("conteudo");

  fetch(`./pages/${pagina}.html`)
    .then((res) => {
      if (!res.ok) throw new Error("Página não encontrada");
      return res.text();
    })
    .then((html) => {
      conteudo.innerHTML = html;
    })
    .catch((erro) => {
      console.error("Erro ao carregar página:", erro);
      conteudo.innerHTML = `<h2 style="text-align:center;color:red;">Erro ao carregar "${pagina}"</h2>`;
    });
}


window.carregarPagina = carregarPagina;
