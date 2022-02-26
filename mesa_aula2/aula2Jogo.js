//Jogo pedra, papel e tesoura usaremos os seguintes valores para representar as strings:
// 1 para tesoura
// 2 para papel 
// 3 para pedra 



// função para validar o valor inserido no prompt

function validandoPrompt(){
    while(true){     //criando um loop infinito, assim a pagina só irá funcionar com as caixas de prompt e alert
        let promptJogador = parseInt(prompt('Insira um valor de 1 a 3, sendo: \n 1 - para tesoura \n 2 - para papel  \n 3 - para pedra'));
        if(isNaN(promptJogador) || promptJogador == 0 || promptJogador > 3){    //Verificação do que o usuário inseriu, caso qualquer condição for verdadeira exibirá o alert abaixo:
        alert('Digite um valor válido');
        
        }else{  // se nenhuma condição a cima for verdeadeira retornará a variavel com o valor digitado pelo usuário
            return promptJogador;
        }
        
    }
}




// função para conversão dos valores de numero para string

function valorConvertido(valor){//Receberá como parametro um valor
    let valorRecebido = '' // string vazia para ser substituida pelo resultado
    switch(valor){
        case 1:// se o valor recebido for igual a 1 entrará nessa case
            valorRecebido = 'tesoura';//modificará a váriavel 
            return valorRecebido; //retornará a variavel convertida
        case 2:
            valorRecebido = 'papel';
            return valorRecebido;
        case 3:
            valorRecebido = 'pedra';
            return valorRecebido;
    }
}





// Função para validar o valor digitado no prompt e o valor gerado no computador, usaremos:

//valor1 referenciará o valor do jogador
//valor2 referenciará o valor do computador

//OBS: Se isso for alterado tanto o alert exibido quanto a contagem de pontos irão ficar com valores incorretos


function validacao(valor1, valor2){ // função recebe dois parametros, futuramente (jogador como valor1 e computador como valor2)

    // antes de entrar no switch, fazemos a seguinte validação:

    if(valor1 == valor2){ // verificar se valor1 e valor2 são iguais
        valor1 = 0 // caso seja, altera o que está dentro da variavel valor1 para 0, assim quando entrar no switch case ele será validado na case 0 gerando um empate
    }
    

    switch(valor1){ // no switch case iremos validar o valor1 (referente ao que o usuário colocou)
        case 0: // caso o valor foi igual a 0 é declarado empate (isso só aconteceria se o if fora do nosso switch fosse verdadeiro, assim alterando a variavel valor1)
        //OBS: Lembrando que o usário não consegue digitar 0 no prompt exibido no inicio do jogo. 
            alert('Empate') // retorna um alert para o usário mostrando que o jogo foi empatado
            break // se essa case fosse verdadeira, nosso switch encerraria aqui
        case 1: // caso o valor1 seja igual a 1, entrará nessa case e passará pelo if/else a seguir 
            if(valor2 == 2){ //tesoura papel // se o conteúdo armazenado dentro da variável valor2(numero gerado pelo computador) for igual a 2, essa condição se torna verdadeira e fará os seguintes passos
                pontuacaoJogador += 1; //adiciona a pontuação para o jogador, armazenando o valor na variavel pontuacaoJogador
                alert(`Parabéns jogador, você fez 1 ponto \n você escolheu ${valorConvertido(1)}.\nO computador escolheu ${valorConvertido(2)} `);//exibirá esse alert para o usuário saber quais foram as escolhas, utlizando nossa função de conversão. Também utilizado \n para quebra de linha e template string para concatenação
            }else{ //tesoura  pedra // validando o que está guardado na variavel valor2, como o unico valor que sobrou foi o 3 não foi necessário colocar outro if fazendo a comparação: (valor2 == 3)
                pontuacaoComputador += 1; //teremos o acrescimo de pontuação na variavel pontuacaoComputador
                alert(`Que pena, o computador acaba de fazer 1 ponto \n você escolheu ${valorConvertido(1)}.\nO computador escolheu ${valorConvertido(3)} `); // o alert exibido para o usuário 
            }
            break
        case 2:
            if(valor2 == 1){ //papel  tesoura
                pontuacaoComputador += 1;
                alert(`Que pena, o computador acaba de fazer 1 ponto \n você escolheu ${valorConvertido(2)}.\nO computador escolheu ${valorConvertido(1)} `);
            }else{ // papel pedra
                pontuacaoJogador += 1;
                alert(`Parabéns jogador, você fez 1 ponto \n você escolheu ${valorConvertido(2)}.\nO computador escolheu ${valorConvertido(3)} `);
            }
            break
        case 3:
            if(valor2 == 1){ //pedra tesoura 
                pontuacaoJogador += 1;
                alert(`Parabéns jogador, você fez 1 ponto \n você escolheu ${valorConvertido(3)}.\nO computador escolheu ${valorConvertido(1)} `);
            }else{ // pedra papel
                pontuacaoComputador += 1;
                alert(`Que pena, o computador acaba de fazer 1 ponto \n você escolheu ${valorConvertido(3)}.\nO computador escolheu ${valorConvertido(2)} `);
            }
            break
        default:
            alert('ERRO, tente novamente mais tarde!!') // Se por algum motivo nosso programa não conseguir passar pelas cases, entrará nesse default e retornará esse erro para o usuário
        
    }
}




//declaração da variavel com pontuação zerada
let pontuacaoJogador = 0;
let pontuacaoComputador = 0;



//loop para iniciar o jogo e ter um ganhador

while(pontuacaoComputador < 2 || pontuacaoJogador < 2){ // para dar vida ao nosso jogo temos um  while que para ser quebrado precisa ter a pontuação 2 de um dos jogadores 
    let jogador = 0; //declarando uma váriavel para o valor que será preenchido pelo usuário
    let computador = parseInt(Math.random()*3 + 1 ); // computador gerando números de forma aleatória
    
    jogador = validandoPrompt(); // atribuindo a nossa função na variável jogador, assim q usuário digitar um número válido, nossa função irá retornar esse número e podemos seguir com o jogo
    
    validacao(jogador, computador); // validando quem irá ganhar 1 ponto usando a função com os parametros jogador e computador 
    
    //verificando se o jogador ou o computador tem 2 pontos

    if(pontuacaoJogador == 2){ // se o jogador tiver 2 pontos ele é declarado ganhador do jogo
        alert(`Parabéns jogador você ganhou o jogo!!! \n \n o jogador está com ${pontuacaoJogador} pontos \n o computador está com ${pontuacaoComputador} ponto`); // um alert parabenizando o jogador por ter ganhado o jogo
        pontuacaoJogador = 0; //zerando a variavel para iniciar um novo jogo
        pontuacaoComputador = 0;//zerando a variavel para iniciar um novo jogo
    }
    if (pontuacaoComputador == 2 ){ // se o computador tiver 2 pontos ele é declarado como ganhador do jogo
        alert(`Não foi dessa vez, o computador ganhou o jogo!!! \n \n o jogador está com ${pontuacaoJogador} ponto \n o computador está com ${pontuacaoComputador} pontos`);
        pontuacaoJogador = 0;//zerando a variavel para iniciar um novo jogo
        pontuacaoComputador = 0;//zerando a variavel para iniciar um novo jogo
    }

    //caso nenhum o jogador ou o ccomputador ter 2 pontos, ele aparecerá o prompt novamente pro usuário e irá gerar um novo numero para o computador, as variavéis de pontuação não seriam zeradas.
    

}

//como nossa função validandoPrompt é um loop infinito o usuário nunca irá conseguir ter acesso ao restante da página, sempre irá exibir o prompt até q ele seja preenchido corretamente, dando inicio ao jogo. Sempre que ter um ganhador, o placar será zerado e um novo jogo iniciado

