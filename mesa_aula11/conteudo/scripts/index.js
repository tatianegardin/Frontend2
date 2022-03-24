const registerBtn = document.querySelector(".register-btn");

registerBtn.addEventListener("click", () => {
  /// Escreva aqui o seu código, seguindo estas orientações passo a passo:

  // 1. Obter o valor introduzido no input do e-mail.
let inputEmail = document.querySelector('#email-input').value
console.log(inputEmail)

  // 2. Obter o valor introduzido no input de senha.
let inputSenha = document.querySelector('#password-input').value
console.log(inputSenha)

  // 3. Obter o valor do input de rádio.
let inputRadio = document.getElementsByName('legalAge')
for(let valor of inputRadio){
  console.log(`Valor: ${valor.value} Está marcado? ${valor.checked}`)
}

  // 4. Obter o valor do input com o checkbox.

let inputCheckbox = document.getElementsByName('tyc-input')
console.log(`Termos de uso foi aceito? ${inputCheckbox.checked}`)

  // 5. Validar se o utilizador for maior de idade. Caso contrário, mostramos
  // uma mensagem de erro: "Tem de ser maior de idade para se registar no site".
  

  // 6. Validamos se o utilizador aceitou os termos e condições. Caso contrário, exibimos
  // uma mensagem de erro: "Deve aceitar os termos e condições para se registar no site".

  // 7. Por fim, se tudo estiver correto, exibimos um objeto no console com as informações definidas pelo utilizador. 
});


