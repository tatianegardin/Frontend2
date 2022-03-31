let botao = document.querySelector("#botaoPesquisar");
let inputQtd = document.querySelector("#quantidade");
let inputRaca = document.querySelector("#raca");
let alerta = document.querySelector("#alerta");
let section = document.querySelector('.cards')

inputQtd.value = ''

botao.addEventListener('click', evento => {
    evento.preventDefault()
    section.innerHTML = ''
    alerta.innerHTML = ''
    if(inputQtd.value != ''){
        fetch(`https://dog.ceo/api/breed/${inputRaca.value}/images/random/${inputQtd.value}`)
        .then(resultado => {
            if(resultado.status == 200){
                return resultado.json()
            }else{
                throw `Erro, retornou o status ${resultado.status}`
            }
        })
        .then(resultado => resultado.message)
        .then(resultado => {
            resultado.forEach(element => {
                renderizaEmTela(element)
            });
        })            
        .catch(
            function (erro) {
                alerta.innerHTML = erro
            }
        )
    }else{
        alerta.innerHTML = 'Você deve inserir um número'
    }
})

function renderizaEmTela(dados){
    let img = document.createElement('img')
    img.src = dados
    section.appendChild(img)
}