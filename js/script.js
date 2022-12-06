var header = document.querySelector('.header');
var barrasMenu = document.querySelector('.barras-menu');
var menu = document.querySelector('.menu');

///evento de click com a função de abrir e fechar o menu responsivo//
barrasMenu.addEventListener('click', function(){

    menu.classList.toggle('menu-open');

})



//adicionar evento de rolagem no documento
window.addEventListener('scroll', function(){

    //variavel para rolagem de página na horizontal
    var scrollar = this.window.scrollY;

    //ação: adicionar a classe header-fixed no header sempre que rolar mais que 150px, caso não aconteça, nao inserir.
    if(scrollar > 80){

        header.classList.add ('header-fixed');

    }else{

        header.classList.remove ('header-fixed');

    }   


})



//Habilidades //



//Card React //

function mouseEntrouReact(){

    let reactp1 = document.querySelector('#reactp1')

    reactp1.innerText = 'React'

}

function clicouReact(){

    let reactp2 = document.querySelector('#reactp2')

    reactp2.innerText = '(Básico)'
    reactp2.style.color = '#0068b5' 

}



//Card JavaScript//

function mouseEntrouJs(){

    let jsp1 = document.querySelector('#jsp1')

    jsp1.innerText = 'JavaScript'

}

function clicouJs(){

    let jsp2 = document.querySelector('#jsp2')

    jsp2.innerText = '(Intermediário)'
    jsp2.style.color = 'yellow' 

}



//Card HTML5//

function mouseEntrouHTML(){

    let htmlp1 = document.querySelector('#htmlp1')

    htmlp1.innerText = 'HTML5'

}

function clicouHTML(){

    let htmlp2 = document.querySelector('#htmlp2')

    htmlp2.innerText = '(Avançado)'
    htmlp2.style.color = '#f11b1a' 

}



//Card CSS3//

function mouseEntrouCSS(){

    let cssp1 = document.querySelector('#cssp1')

    cssp1.innerText = 'CSS3'

}

function clicouCSS(){

    let cssp2 = document.querySelector('#cssp2')

    cssp2.innerText = '(Avançado)'
    cssp2.style.color = '#f11b1a' 

}



//Card Bootstrap//

function mouseEntrouBoot(){

    let bootp1 = document.querySelector('#bootp1')

    bootp1.innerText = 'Bootstrap'

}

function clicouBoot(){

    let bootp2 = document.querySelector('#bootp2')

    bootp2.innerText = '(Intermediário)'
    bootp2.style.color = 'yellow' 

}



//Card Sass//

function mouseEntrouSass(){

    let sassp1 = document.querySelector('#sassp1')

    sassp1.innerText = 'Sass'

}

function clicouSass(){

    let sassp2 = document.querySelector('#sassp2')

    sassp2.innerText = '(Intermediário)'
    sassp2.style.color = 'yellow' 

}




//Card Git//

function mouseEntrouGit(){

    let gitp1 = document.querySelector('#gitp1')

    gitp1.innerText = 'Git'

}

function clicouGit(){

    let gitp2 = document.querySelector('#gitp2')

    gitp2.innerText = '(Intermediário)'
    gitp2.style.color = 'yellow' 

}



//Card WordPress//

function mouseEntrouWord(){

    let wordp1 = document.querySelector('#wordp1')

    wordp1.innerText = 'WordPress'

}

function clicouWord(){

    let wordp2 = document.querySelector('#wordp2')

    wordp2.innerText = '(Avançado)'
    wordp2.style.color = '#f11b1a' 

}
