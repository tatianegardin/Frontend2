let numero1 = document.getElementById("numero1");

let numero2 = document.getElementById("numero2");



let botaoSomar = document.getElementById("botaoSomar");
let botaoSubtrair = document.getElementById("botaoSubtrair");
let botaoMulti = document.getElementById("botaoMulti");
let botaoDividir = document.getElementById("botaoDividir");

let resultado = document.getElementById("resultado");
let p = document.createElement("p")

botaoSomar.onclick = () => {
    p.innerText = `O resultado é ${somar(parseFloat(numero1.value), parseFloat(numero2.value))}`
    resultado.appendChild(p);
} 

botaoSubtrair.onclick = () => {

    p.innerText = `O resultado é ${subtrair(parseFloat(numero1.value), parseFloat(numero2.value))}`
    resultado.appendChild(p);
}    

botaoDividir.onclick = () => {

    p.innerText = `O resultado é ${dividir(parseFloat(numero1.value), parseFloat(numero2.value))}`
    resultado.appendChild(p);
}

botaoMulti.onclick = () => {

    p.innerText = `O resultado é ${multiplicar(parseFloat(numero1.value), parseFloat(numero2.value))}`
    resultado.appendChild(p);
}