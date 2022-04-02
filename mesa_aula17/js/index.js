// Aqui realizamos a consulta da promisse, esperando sua resposta assíncrona
let botao = document.querySelector('.btnContainer');
let div = document.querySelector('.card')


// criando função para solicitar API quando necessário
function solicitandoAPI(){

    fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json()
    })
    .then(data => {
        //manipulamos a resposta
        return data.results
    })
    .then(resultado =>{
        
        return resultado[0]
    })
    .then(resultado =>{

       renderizarDadosUsuario(resultado)
    }); 
}

// função para renderizar no html
function renderizarDadosUsuario(dados) {
    /* -------------------------------- Tarefa 1 -------------------------------- */
    // Aqui devem desenvolver uma função que seja exibida na tela:
    // a foto, o nome completo do usuário e o e-mail.
    // Isto deve ser baseado nas informações que obtemos da API e inseridas no HTML.

    div.innerHTML = `
    <img src="${dados.picture.large}" alt="">
    <h2>${dados.name.first} ${dados.name.last}</h2>
    <p><strong>Email:</strong> ${dados.email}</p>`

}

// Ao abrir a página será feito uma solicitação a API
solicitandoAPI()



/* --------------------------- Tarefa 2 (extra) --------------------------- */
// Aqui você pode ir para o ponto extra de usar o botão que está comentado no HTML.
// Você pode descomentar o código no index.html e usar esse botão para executar uma nova solicitação API, sem recarregar a página.
// Cabe aos desenvolvedores decidirem qual bloco de código deve ser contido dentro de uma função para que ele possa ser executado toda vez que um clique de botão for realizado.


// sempre que clicar no botão será feito uma solicitação a API
botao.addEventListener('click', evento =>{
    evento.preventDefault()
    solicitandoAPI()
})