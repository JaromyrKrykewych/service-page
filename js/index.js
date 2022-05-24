let menuIcon = document.getElementById('menu-icon');
let closeMenu = document.getElementById('close-menu');
let menuMobile = document.getElementById('menu-mobile');

menuIcon.addEventListener('click', () => {
    menuMobile.classList.toggle('opened')
});

closeMenu.addEventListener('click', () => {
    menuMobile.classList.toggle('opened')
});

