let inputNome = document.querySelector('#nome');
let inputSobrenome = document.querySelector('#sobrenome');
let btnSubmit = document.querySelector('#submit');
let btnLimpar = document.querySelector('#remove');
let h1 = document.querySelector('h1');

let objetoUsuario = {
    nome: '',
    sobrenome: '',
}

function adicionarAoObjeto(){
    objetoUsuario.nome = inputNome.value
    objetoUsuario.sobrenome = inputSobrenome.value
}

function criarObjetoStorage(objeto){
    let objetoConvertido = JSON.stringify(objeto)
    localStorage.setItem(2,objetoConvertido)
}

function capturarObjeto(){
    let objetoCapturado = localStorage.getItem(2)
    return JSON.parse(objetoCapturado)
}


function mostrarNaTela(){
    let objetoStorage = capturarObjeto()
    if(objetoStorage != null){
        h1.innerText = `Olá, ${objetoStorage.nome} ${objetoStorage.sobrenome}!!`
    }
}

function limparInput(){
    inputNome.value = ''
    inputSobrenome.value = ''
}

onload = mostrarNaTela

btnSubmit.addEventListener('click', event =>{
    event.preventDefault()
    adicionarAoObjeto()
    criarObjetoStorage(objetoUsuario)
    mostrarNaTela()
    limparInput()
})

btnLimpar.addEventListener('click', evento =>{
    evento.preventDefault()
    localStorage.clear()
    h1.innerHTML = ''
})



