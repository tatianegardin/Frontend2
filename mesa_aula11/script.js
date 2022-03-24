let inputNome = document.querySelector('#nome');
let inputSobrenome = document.querySelector('#sobrenome');
let btnSubmit = document.querySelector('#submit');
let div = document.querySelector('#print');

function removerEspacos(a,b){
    let p = document.createElement('p')
    p.innerHTML = `<strong>Usando método trim(): </strong>${a.value.trim()} ${b.value.trim()}`
    div.appendChild(p)
}

function  upperCase(nome, sobrenome){
    let p = document.createElement('p')
    p.innerHTML = `<strong>Usando método toUpperCase(): </strong>${nome.value.toUpperCase()} ${sobrenome.value.toUpperCase()}`
    div.appendChild(p)  
}

function lowerCase(nome, sobrenome){
    let p = document.createElement('p')
    p.innerHTML = `<strong>Usando método toLowerCase(): </strong>${nome.value.toLowerCase()} ${sobrenome.value.toLowerCase()}`
    div.appendChild(p)
}

function concatenar(nome, sobrenome){
    let p = document.createElement('p')
    p.innerHTML = `<strong>Usando método concat(): </strong>${nome.value.concat(sobrenome.value)}`
    div.appendChild(p)
    
}

function replace(nome, sobrenome){
    let p = document.createElement('p')
    let nomeAtualizado = nome.value.replaceAll('a','@');
    let sobrenomeAtualizado = sobrenome.value.replaceAll('a','@');
    p.innerHTML = `<strong>Usando método replace(): </strong>${nomeAtualizado.replaceAll('e','3')} ${sobrenomeAtualizado.replaceAll('e','3')}`
    div.appendChild(p)
}

btnSubmit.addEventListener('click', evento => {
    evento.preventDefault()

    removerEspacos(inputNome, inputSobrenome);
    upperCase(inputNome, inputSobrenome);
    lowerCase(inputNome, inputSobrenome);
    concatenar(inputNome, inputSobrenome);
    replace(inputNome, inputSobrenome);
})



