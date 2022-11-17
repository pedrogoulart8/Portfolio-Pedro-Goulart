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




