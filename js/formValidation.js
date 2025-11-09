export function inicializarFormulario() {
  const formulario = document.getElementById("formCadastro");
  if (!formulario) return;

  const cpfInput = document.getElementById('cpf');
  const telefoneInput = document.getElementById('telefone');
  const cepInput = document.getElementById('cep');
  const erro = document.getElementById("erro");
  const saudacao = document.getElementById("saudacao");

  
  function aplicarMascara(input, mascara) {
    input.addEventListener('input', () => {
      let valor = input.value.replace(/\D/g, '');
      let novoValor = '';
      let i = 0;
      for (let m of mascara) {
        if (m === '#') {
          if (valor[i]) novoValor += valor[i++];
        } else {
          novoValor += m;
        }
      }
      input.value = novoValor;
    });
  }

  aplicarMascara(cpfInput, '###.###.###-##');
  aplicarMascara(telefoneInput, '(##) #####-####');
  aplicarMascara(cepInput, '#####-###');

  
  formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!nome || !email) {
      if (erro) erro.textContent = "⚠️ Por favor, preencha todos os campos!";
      return;
    }

    if (erro) erro.textContent = "";
    alert("Formulário enviado com sucesso!");

    localStorage.setItem("usuario", nome);

    if (saudacao) saudacao.textContent = `Bem-vindo(a), ${nome}! 💚`;
    formulario.reset();
  });
}
