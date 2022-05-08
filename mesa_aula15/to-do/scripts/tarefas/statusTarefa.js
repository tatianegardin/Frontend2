
function alterarStatus(id, descricao, status, token){
                
    
    console.log(id)
    console.log(descricao)
    console.log(token)
    console.log(status)


    let url = `https://ctd-todo-api.herokuapp.com/v1/tasks/${id}`
    let atualizaStatus = {
        description: descricao,
        completed: ''
    }
    if(status){
        atualizaStatus.completed = false
    }else{
        atualizaStatus.completed = true
    }

    let atualizacaoJson = JSON.stringify(atualizaStatus)

    let endPoint = {
        method: 'PUT',
        headers: {
            'content-type':'application/json',
            'authorization': token
        },
        body: atualizacaoJson
    }

    fetch(url, endPoint)
    .then(response => response.json())
    .then(response => window.location.reload())
}