let enviar = document.querySelector('.enviar');
let sessao = document.querySelector('.item');
let url = document.querySelector('#url');
let titulo = document.querySelector('#titulo');
let conteudo = document.querySelector('#conteudo');

enviar.addEventListener('click', (evento) => evento.preventDefault())

function adicionarCard(){
    let div = document.createElement('div');
    div.classList.add('card')
    div.innerHTML = `           
    <img src="${url.value}" alt="">
    <h2>${titulo.value}</h2>
    <p>${conteudo.value}</p> `

    sessao.appendChild(div)

}

enviar.addEventListener('click', () => adicionarCard())

