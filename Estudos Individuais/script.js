function mostrarMensagem(value) {
  var mensagem = document.getElementById("mensagem");
  mensagem.innerHTML = value;
  mensagem.style.display = "block";

  setTimeout(function () {
    mensagem.style.display = "none";
  }, 5000); // tempo em milissegundos (5 segundos neste exemplo)

  var botao = document.getElementById("botao");
  botao.innerHTML = "Clique aqui para mostrar a mensagem novamente.";
  botao.addEventListener("click", function () {
    mensagem.style.display = "none";
    botao.innerHTML = "Clique aqui";
  });
}

// function IrPara(value) {
//   document.getElementById("newmsg").innerHTML = value;
// }
