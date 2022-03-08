function valorConvertido(valor){
    let valorRecebido = '';
    if(valor == 1){
        valorRecebido = 'tesoura';
        return valorRecebido;
    }
    if(valor == 2){
        valorRecebido = 'papel';
        return valorRecebido;
    }
    if (valor == 3){
        valorRecebido = 'pedra';
        return valorRecebido;
    }
}



function validandoResultado(j1, j2){
    if(j1 == 3 && j2 == 1 ){ //pedra tesoura 
        pontuacaoJogador += 1;
        alert(`Parabéns jogador, você fez 1 ponto \n você escolheu ${valorConvertido(3)}\n e o computador escolheu ${valorConvertido(1)} `);
    }
    if(j1 == 3 && j2 == 2){ // pedra papel
        pontuacaoComputador += 1;
        alert(`Que pena, o computador acaba de fazer 1 ponto \n você escolheu ${valorConvertido(3)}\n e o computador escolheu ${valorConvertido(2)} `);
    }
   if(j1 == 2 && j2 == 3){ // papel pedra
        pontuacaoJogador += 1;
        alert(`Parabéns jogador, você fez 1 ponto \n você escolheu ${valorConvertido(2)}\n e o computador escolheu ${valorConvertido(3)} `);
    }
    if(j1 == 2 && j2 == 1){ //papel  tesoura
        pontuacaoComputador += 1;
        alert(`Que pena, o computador acaba de fazer 1 ponto \n você escolheu ${valorConvertido(2)}\n e o computador escolheu ${valorConvertido(1)} `);
    }
    if(j1 == 1 && j2 == 3){ //tesoura  pedra
        pontuacaoComputador += 1;
        alert(`Que pena, o computador acaba de fazer 1 ponto \n você escolheu ${valorConvertido(1)}\n e o computador escolheu ${valorConvertido(3)} `);
    }
    if(j1 == 1 && j2 == 2){ // tesoura papel
        pontuacaoJogador += 1;
        alert(`Parabéns jogador, você fez 1 ponto \n você escolheu ${valorConvertido(1)}\n e o computador escolheu ${valorConvertido(2)} `);
    }
    if(j1 == j2 ){
        alert('Empate');
    }

    return (pontuacaoComputador, pontuacaoJogador);
}
