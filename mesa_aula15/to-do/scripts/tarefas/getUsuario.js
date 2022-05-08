function pegarUsuario(valor){
    let endPoin = {
        method: 'GET',
        headers: {
            authorization: valor
        }
    }

    let url = 'https://ctd-todo-api.herokuapp.com/v1/users/getMe'

    fetch(url, endPoin)
    .then(response => response.json())
    .then(data => 
        {
            nomeUsuario.innerHTML = `${data.firstName} ${data.lastName}`
        })

}