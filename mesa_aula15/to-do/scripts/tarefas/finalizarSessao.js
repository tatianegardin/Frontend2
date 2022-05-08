function finalizarSessao(){
    sessionStorage.removeItem('jwt')
    location.href = 'index.html'
}