
function tarefaConcluida(valor){
    let ul = document.querySelector('.tarefas-terminadas')
    let li = document.createElement('li')
    li.classList.add('tarefa')
     
    let texto = ` '${valor.description}' `
    li.innerHTML = `
    <div class="done"></div>
    <div class="descricao">
    <p class="nome">${valor.description}</p>
    <div>
        <button><i id="${valor.id}" onclick="alterarStatus(${valor.id}, ${texto}, ${valor.completed}, token)" class="fas fa-undo-alt change"></i></button>
        <button><i id="${valor.id}" onclick="deletarTarefa(${valor.id}, token)" class="far fa-trash-alt"></i></button>

    </div>
    </div>`

    ul.appendChild(li)
    
}