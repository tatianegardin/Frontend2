function listarTarefas(valor){
    let endPoint = {
        method: 'GET',
        headers: {
            authorization: valor
        }
    }

    let url = 'https://ctd-todo-api.herokuapp.com/v1/tasks'

    fetch(url, endPoint)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        for (tarefa of data){
            if (tarefa.completed){
                tarefaConcluida(tarefa)
            }else{
                tarefaPendente(tarefa)
                
            }
        }
    })    
}