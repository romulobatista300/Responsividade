var menu = document.querySelector('nav ul');
var menuBar = document.querySelector('nav .menu-icon');
var iconMenu = document.querySelector('nav .menu-icon img');

menuBar.addEventListener('click',function(){

    if (iconMenu.getAttribute("src") == 'assets/menu.png') {
        iconMenu.setAttribute("src","assets/close.png");
    }else{
        iconMenu.setAttribute("src","assets/menu.png");
    }

   menu.classList.toggle('active');
});
