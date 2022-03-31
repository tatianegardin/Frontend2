let botao = document.querySelector("#botaoEnviar");
let input = document.querySelector("#quantidade");
let section = document.querySelector('.cards')

botao.addEventListener('click', evento => {
    evento.preventDefault()
    let h3 = document.createElement('h3');
    section.innerHTML = ''
    
    if(input.value != ''){
        fetch(`https://dog.ceo/api/breeds/image/random/${input.value}`)
        .then(resultado => {
                if(resultado.status == 200){
                    return resultado.json()
                }else{
                    throw `Status de erro: ${resultado.status}`
                }
            }
        )
        .then(resultado =>{
            return resultado.message
        })
        .then( resultado =>{
            resultado.forEach(element => {
                renderizaEmTela(element)
            });
        })
        .catch(erro => alert(erro))
    }else{
        h3.innerText = 'Digite um número'
        h3.style.color = 'red'
        section.appendChild(h3)
        
    }
})

function renderizaEmTela(dados){
    let img = document.createElement('img')
    img.src = dados
    section.appendChild(img)
}