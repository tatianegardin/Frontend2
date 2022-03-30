// capturando INPUT
let inputNome = capturaID('nome');
let inputIdade = capturaID('idade');
let inputAltura = capturaID('altura');
let inputEmail = capturaID('email');
let inputBiografia = capturaID('biografia');

// capturando tags ppara futuros campos que serão subscritos
let campoNome = capturaID('nomeUsuario');
let campoSobrenome = capturaID('sobrenomeUsuario');
let campoIdade = capturaID('idadeUsuario');
let campoAltura = capturaID('alturaUsuario');
let campoEmail = capturaID('emailUsuario');
let campoBiografia = capturaID('biografiaUsuario');

//capturando campos para informação de erro ao preenchimento input (tag small)
let validacaoNome = capturaID('nomeValidacao');
let validacaoEmail = capturaID('emailValidacao');
let validacaoIdade = capturaID('idadeValidacao')
let validacaoAltura = capturaID('alturaValidacao')
let validacaoBiografia  = capturaID('biografiaValidacao')

//capturando botao salvar
let botaoSalvar = document.getElementById('salvar')

//criação objeto 
let usuarioObjeto = {
    nome: '',
    sobrenome: '',
    email: '',
    idade: '',
    altura: '',
    biografia: '',
}

//function para capturar id
function capturaID(id){
    return document.getElementById(id);
}


// function mostrar na tela
function alterarCampos(){
    let objetoDoStorage = pegaObjetoStorage()
    campoNome.innerHTML = objetoDoStorage.nome;
    campoSobrenome.innerHTML = objetoDoStorage.sobrenome;
    campoIdade.innerHTML = objetoDoStorage.idade;
    campoAltura.innerHTML = objetoDoStorage.altura;
    campoEmail.innerHTML = objetoDoStorage.email;
    campoBiografia.innerHTML = objetoDoStorage.biografia ;
}

//fuunção adicionar valores ao objeto
function adicionarAoObjeto(){
    let inputNomeSobrenome = inputNome.value.trim();
    let nomeSobrenome = inputNomeSobrenome.split(' ');
    usuarioObjeto.nome = nomeSobrenome[0];
    usuarioObjeto.sobrenome = nomeSobrenome[1];
    usuarioObjeto.idade = inputIdade.value;
    usuarioObjeto.altura = inputAltura.value;
    usuarioObjeto.email = inputEmail.value;
    usuarioObjeto.biografia = inputBiografia.value;
}

// função limpar os inputs
function limparInput(){
    inputNome.value = ''
    inputIdade.value =''
    inputAltura.value =''
    inputEmail.value =''
    inputBiografia.value =''
}

//função adicionar objeto ao localstorage
function addObjetoStorage(objeto){
    let objetoConvertido = JSON.stringify(objeto)
    localStorage.setItem(1, objetoConvertido)
}

//capturar objeto localstorage
function pegaObjetoStorage(){
    let objetoCapturado = localStorage.getItem(1)
    return JSON.parse(objetoCapturado)
}



// function para validação de não preenchimento do input
function validarInput(input, print){

    input.addEventListener('blur', () => {
        if(input.value != ''){
            input.style.borderColor = ''
            print.innerHTML = ''
        }else{
            input.style.borderColor= 'red'
            print.innerHTML = 'Campo obrigatório'
            print.style.color = 'red'
            
        }
    })
}


// validação para não preenchimento do input email
inputEmail.addEventListener('blur', () => {
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail.value) ){
        inputEmail.style.borderColor = '#adb5bd'
        validacaoEmail.innerHTML = ''
    }else if(inputEmail.value == ''){
        inputEmail.style.borderColor= 'red'
        validacaoEmail.innerHTML = 'Campo obrigatório'
        validacaoEmail.style.color = 'red'
    }
    else{
        inputEmail.style.borderColor= 'red'
        validacaoEmail.innerHTML = 'Email inválido'
        validacaoEmail.style.color = 'red'
        
    }
})

// validação de input não preenchido
validarInput(inputNome, validacaoNome);
validarInput(inputIdade, validacaoIdade);
validarInput(inputAltura, validacaoAltura);
validarInput(inputBiografia, validacaoBiografia);

// ao carregar a pagina é exibida das informações presentes no storage
onload = () => {
    alterarCampos()
    limparInput()
}

// ao clicar no botão é alterado todas as informações
botaoSalvar.addEventListener('click', evento => {
    evento.preventDefault();
    adicionarAoObjeto();
    addObjetoStorage(usuarioObjeto);
    alterarCampos();  
    limparInput();
})


