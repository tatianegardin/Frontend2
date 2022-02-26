

let tratamentoPersonalizado = confirm("Deseja um tratamento personalizado?")

if(tratamentoPersonalizado) {
  let nome = prompt("Por favor, digite seu nome");
   alert("Bem-vindo ao nosso site "+ nome +". Muito obrigado pela sua visita, estamos à sua disposição! ?");
} else {
   alert("Obrigado por conectar.")
}


let a = parseInt("22"); 
let b = parseInt(prompt("Introduza idade")); 
let c = parseInt("22"+"150"); 
let d = parseInt(22+150) 
let e = parseInt(22+parseInt("150")); 
let f = parseInt(22.55);

console.log(a); 
console.log(b); 
console.log(c); 
console.log(d); 
console.log(e); 
console.log(f); 


console.log(parseFloat(22.34)); 
console.log(parseFloat(22.3456284)); 
// let jogador = prompt('Insira um valor de 1 a 3, sendo: \n 1 - para tesoura \n 2 - para pedra \n 3 - para papel');


let edad = parseInt(prompt("Introduza sua idade")); 

while (isNaN(edad)){
    alert("Essa idade não é válida!")
    edad = parseInt(prompt("Introduza sua idade")); 
}

if(edad>18){ 
console.log("É maior de idade"); 
}else{ 
console.log("É menor de idade"); 
} 

let num =  [1, 2, 3, 4, 5, 6];
let total  = 0;
for(let valor of num){
    console.log(total += valor);
}



// switch(valorFinal){
    //     case valorFinal[0] == "pedra": case valorFinal[1] == "papel":
    //         console.log('computador ganhou');
    //         break;
    //     case valorFinal[0] == "pedra": case valorFinal[1] == "tesoura":
    //         console.log('jogador ganhou');
    //         break;
    //     case valorFinal[0] == "papel": case valorFinal[1] == "pedra":
    //         console.log('jogador ganhou');
    //         break;
    //     case valorFinal[0] == "papel": case valorFinal[1] == "tesoura":
//         console.log('computador ganhou');
//         break;
//     case valorFinal[0] == "tesoura": case valorFinal[1] == "pedra":
//         console.log('computador ganhou');
//         break;
//     case valorFinal[0] == "tesoura" : case valorFinal[1] == "papel":
//         console.log('jogador ganhou');
//         break;
//     case valorFinal[0] == "papel" : case valorFinal[1] == "papel":
//         console.log('Empate');
//         break;
//     case valorFinal[0] == "tesoura" : case valorFinal[1] == "tesoura":
//         console.log('Empate');
//         break;
//     case valorFinal[0] == "pedra" : case valorFinal[1] == "pedra":
//         console.log('Empate');
//         break;
//     default:
//         console.log(valorFinal);
// }
 


