
// tinha associado ao evento onsubmit do formulario, funcionou. vou testar outras formas de fazer o mesmo.
// function sumirCampo(){
    // let tarefa = pegarElementoID("editar");
    // tarefa.setAttribute("hidden", true);
// }

function editarTarefa(id, token, descricao){

    console.log(id)
    console.log(token)
    console.log(descricao)

    let input = document.querySelector('#novaTarea')
    input.value = descricao

    aparecerCampo()

    btn.addEventListener('click', e=>{
        e.preventDefault()
        requisicaoAPI(id, token)
    })
    
    

    // btn.addEventListener('click', e => {
    //     e.preventDefault()
    // })

  



}
function aparecerCampo() {
    let btn = document.querySelector('#alterar')
    btn.removeAttribute("hidden");    
}


function requisicaoAPI(id, token){

    let input = document.querySelector('#novaTarea')
    console.log(input)

    let editandoTarefa= {
        description: input.value,	
        completed: false    
    }
    
    let urleditarTarefa = `https://ctd-todo-api.herokuapp.com/v1/tasks/${id}`;

    let edicaoTarefaJSON = JSON.stringify(editandoTarefa);

    let endpoint = {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'authorization': token
        },
        body: edicaoTarefaJSON
    }
    
    fetch(urleditarTarefa, endpoint)
    .then(response => {
        if (response.status == 200) {
            console.log("Tarefa editada com sucesso")
            return response.json()

        } else {
            console.log(response)
            throw response.status
        }

    }).then(data => {
        window.location.reload()
       

    }).catch(error => {
        if (error == 400) {
            console.log('Erro 400');
            alert('Erro 400')
        } else {
            console.log('Tente novamente mais tarde');
            alert('Tente novamente mais tarde')
        }
    })
}

let btn = document.querySelector('#alterar')





