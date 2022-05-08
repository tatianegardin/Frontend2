// Simulamos um progresso que demora 5 segundos para se completar
const tempoDeCarga = 5000;
 
function animarBarra() {
  // Selecionamos o elemento barra
  let elem = document.getElementById("barra") ;

  let width = 0;
  // Calculamos o progresso com base no tempo total da carga
  const progressoSobreTempoTotal = tempoDeCarga / 100;
 
  // Criamos um intervalo que se repete no tempo que calculamos
  // para ir incrementando o progresso.
  let id = setInterval(incrementarProgresso, progressoSobreTempoTotal);
 
  function incrementarProgresso() {
    // Se o progresso estiver completo…
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
 
      // Modificamos o DOM, para impactar no novo progresso.
      elem.style.width = width + "%";
      elem.innerHTML = width + "%";
    }
  }
}
 
document.querySelector("#iniciar-carregamento").addEventListener("click", animarBarra);