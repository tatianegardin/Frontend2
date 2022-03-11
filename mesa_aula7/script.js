//Tatiane Gardin
//Roberto Castro
//Matheus Almeida
//Ladislau Alexandre 
//Rafael Lovera 
//Tiago Saraiva

let valor = prompt('Digite o nome de um animal');
let url = prompt('coloque sua url');
let div = document.querySelectorAll('.item');
let card 

valor = valor.toUpperCase()

switch (valor) {
    case 'TIGRE':
        card = div[0].children[0];
        break;
    case 'LEÃO':
        card = div[1].children[0];
        break;
    case 'LEAO':
        card = div[1].children[0];
        break;
    case 'LEOPARDO':
        card = div[2].children[0];
        break;
    case 'PANTERA NEGRA':
        card = div[3].children[0];
        break;
    case 'JAGUAR':
        card = div[4].children[0];
        break;
    case 'GUEPARDO':
        card = div[5].children[0];
    break;
    default:
        alert('Atualize a página e tente novamente!')
        break;
}

card.removeAttribute('src');
card.setAttribute('src', url);
