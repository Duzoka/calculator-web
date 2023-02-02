
// Função para inserir os valores na tela
function insert (num) {

//  Olhar o documento, pegar o Elemento por ID e inserir o resultado no HTML igual a "num"
  var numero = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = numero + num;

}


const buttons = document.querySelectorAll('.number-button, .operator-button');
buttons.forEach(button => {
  button.addEventListener('click', event => {
    const value = event.target.textContent;
    

    console.log(`Botão clicado: ${value}`);
    // aqui você pode adicionar o código para fazer o cálculo com base no valor do botão clicado
  });
});
