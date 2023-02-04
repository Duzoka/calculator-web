
// Função para inserir os valores na tela
function insert (num)
{

// "Variavel" será igual ao valor contido dentro do HTML de id "resultado"
  console.log(num)
  var numero = document.getElementById('resultado').innerHTML;
  
//Valor contido dentro do HTML será igual ao valor obtido pela váriavel somado com a váriavel da função "num"
  document.getElementById('resultado').innerHTML = numero + num;
  console.log(numero)
  console.log(resultado)

}

//Limpar Tudo
function ac () {
  //basta fazer o valor contido no HTML de id "rsultado" ser igual a vazio
  document.getElementById('resultado').innerHTML = "";
}

//Limpar somente o ultimo numero
function bc () {
  //variavel resulado pega o valor dentro do ID "resultado" no html
  var resultado = document.getElementById("resultado").innerHTML;

  //valor dentro de "resultado" no HTML é igual ao "resultado". Esse resultado tem uma substring de ação que começa a partir de 0, lê a "lenght" (extensão) da string "resultado" e apaga somente 1 caractere. 
  
  //Resumo: Declarado como "-1", apague a partir de 0 do resultado -1
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
