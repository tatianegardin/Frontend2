let nomeUsuario = document.querySelector('.user-info p')
let input = document.querySelector('#novaTarea')

let token = sessionStorage.getItem('jwt')
onload = function(){
        if(!token){
            location.href = 'index.html'
        }else{
            pegarUsuario(token)
            listarTarefas(token)
        }  
    input.value = ''
      
}

// evento click criar nova tarefa
let btnTarefa = document.querySelector('#criarTarefa')

btnTarefa.addEventListener('click', event =>{
    event.preventDefault()
    criarTarefa(token)

})


//finalizar sessão
let btnFinalizarSessao = document.getElementById('closeApp')

btnFinalizarSessao.addEventListener('click', ()=> {
    finalizarSessao()
})



