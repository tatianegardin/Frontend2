function deletarTarefa(id, token){
    let url = `https://ctd-todo-api.herokuapp.com/v1/tasks/${id}`

    let endPoint = {
        method: 'DELETE',
        headers: {
            'authorization': token
        }
    }

    fetch(url, endPoint)
    .then(response => {
        Swal.fire('Tarefa deletada', '', 'success')
        document.querySelector('.swal2-confirm').addEventListener('click', ()=> window.location.reload())
    })
        

}
