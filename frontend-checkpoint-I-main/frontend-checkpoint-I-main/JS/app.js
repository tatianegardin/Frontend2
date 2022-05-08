let titulo = document.getElementById("titulo");
let description = document.getElementById("conteudo");
let imgUrl = document.getElementById("url");
let btnOk = document.getElementById("btn-ok");
let section = document.querySelector('.cards');
let btnCancel = document.getElementById('btn-cancel');
let btnModal = document.getElementById('btn-modal');



btnModal.addEventListener('click', () => {
    btnOk.setAttribute("disabled",true);
})

btnCancel.addEventListener('click', () => {
    titulo.value = '';
    description.value = '';
    imgUrl.value = '';
})

let div ;
function adicionarCard(){
    div = document.createElement('div');
    div.classList.add('card-item');
    div.innerHTML = `    
    <h2 class="card-titulo">
    ${titulo.value}
    </h2>
    <p class="card-descricao">
    ${description.value}
    </p>
    <img class="card-img" src="${imgUrl.value}" alt="">`
    section.appendChild(div);
    titulo.value = '';
    description.value = '';
    imgUrl.value = '';
}

btnOk.addEventListener('click', evento => {
    evento.preventDefault();
        adicionarCard();  
})

let validacaoTitulo = document.getElementById('validacaoTitulo');

titulo.addEventListener('blur', () => {
    if(titulo.value != ''){
        titulo.style.borderColor = '#adb5bd';
        validacaoTitulo.innerHTML = '';
        btnOk.removeAttribute("disabled"); 
    }else{
        titulo.style.borderColor= 'red';
        validacaoTitulo.innerHTML = 'Campo obrigatório';
        validacaoTitulo.style.color = 'red' ;
        btnOk.setAttribute("disabled", true);
    }
})


let validacaoConteudo = document.getElementById('validacaoConteudo');

description.addEventListener('blur', () => {
    if(description.value != ''){
        description.style.borderColor = '#adb5bd';
        validacaoConteudo.innerHTML = ''; 
        btnOk.removeAttribute("disabled"); 
    }else{
        description.style.borderColor= 'red';
        validacaoConteudo.innerHTML = 'Campo obrigatório';
        validacaoConteudo.style.color = 'red';
        btnOk.setAttribute("disabled", true);
    }
})

let validacaoURL = document.getElementById('validacaoURL');

imgUrl.addEventListener('blur', () => {
    if(imgUrl.value != ''){
        imgUrl.style.borderColor = '#adb5bd';
        validacaoURL.innerHTML = '';
        btnOk.removeAttribute("disabled");
    }else{
        imgUrl.style.borderColor= 'red';
        validacaoURL.innerHTML = 'Campo obrigatório';
        validacaoURL.style.color = 'red';
        btnOk.setAttribute("disabled", true);
    }
})

