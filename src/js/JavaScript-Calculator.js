
// Função para inserir os valores na tela
function insert (num)
{

// "Variavel" irá ser igual ao valor que ao olhar o "documento", pegará o "Elemento por ID" e inserir dentro do HTML de id resultado igual a "num"
  var numero = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = numero + num;

}

//Limpar Tudo
function ac () {
  document.getElementById('resultado').innerHTML = "";
}

//Limpar somente o ultimo numero
function bc () {
  var resultado = document.getElementById("resultado").innerHTML;
  document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calc () {
  var resultado = document.getElementById("resultado").innerHTML;
  if(resultado)
  {
    document.getElementById('resultado').innerHTML = eval(resultado);
  }
  else
  {
    document.getElementById("resultado").innerHTML = ""
  }
}
