let inputTarefa = document.getElementById('novaTarea')
function criarTarefa(valor){
    
    
    let objetoNovaTarefa = {
        description: inputTarefa.value,
    }

    let objetoJson = JSON.stringify(objetoNovaTarefa)

    let endPoint = {
        method: 'POST',
        headers:{
            'content-type': 'application/json',
            'authorization': valor
        },
        body: objetoJson
    }

    let url = 'https://ctd-todo-api.herokuapp.com/v1/tasks'

    fetch(url, endPoint)
    .then(response => response.json())
    .then(data => {
        Swal.fire('Tarefa criada com sucesso!', '', 'success')
        document.querySelector('.swal2-confirm').addEventListener('click', ()=> window.location.reload())
    })
}
