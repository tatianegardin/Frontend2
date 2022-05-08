function tarefaPendente(valor){
    let ul = document.querySelector('.tarefas-pendentes')
    let li = document.createElement('li')
    li.classList.add('tarefa')
    let data = dayjs(valor.createdAt).format('DD/MM/YYYY')
    let texto = ` '${valor.description}' `
    li.innerHTML = `
    <div class="not-done" id="${valor.id}" onclick="alterarStatus(${valor.id}, ${texto}, ${valor.completed}, token)"></div>
    <div class="descricao">
        <p class="nome">${valor.description}</p>
        <p class="timestamp"> ${data}</p>
        
    </div>
    <button onclick="editarTarefa(${valor.id}, token, ${texto})">editar </button>
    `

    ul.appendChild(li)

}

