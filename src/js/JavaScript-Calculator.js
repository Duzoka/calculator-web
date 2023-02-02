const buttons = document.querySelectorAll('.number-button, .operator-button');
buttons.forEach(button => {
  button.addEventListener('click', event => {
    const value = event.target.textContent;
    console.log(`Botão clicado: ${value}`);
    // aqui você pode adicionar o código para fazer o cálculo com base no valor do botão clicado
  });
});
