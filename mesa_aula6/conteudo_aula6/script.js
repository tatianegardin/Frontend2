// 1- Adiciona ao cartão, o atributo "class" com o valor "cartao"

var cartao = document.getElementById('cartao') ;

cartao.setAttribute('class', 'cartao');

// 2- Adicione o atributo "src" à imagem com o valor "https://www.youtube.com/img/desktop/yt_1200.png"

var imagem = document.querySelector('img');

imagem.setAttribute('src','https://www.youtube.com/img/desktop/yt_1200.png');

// 3- Remova a classe "titulo-feio" do título do documento

var h1 = document.querySelector('h1');

h1.removeAttribute('class')


// 4- Verifique se o link para o YouTube tem o atributo href ou não, e imprima esse resultado no console

var linkYoutube = document.getElementById('link_youtube')

console.log(linkYoutube.hasAttribute('href'))

// 5- Capture o valor de href do link do Wikipedia e exiba no console

var linkWikipedia = document.getElementById('link_wikipedia')

console.log(linkWikipedia.getAttribute('href'))