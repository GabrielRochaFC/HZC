const cabecalhoMenu = document.querySelector('.cabecalho__menu')
const menuLateral = document.querySelector('.menu-lateral')
const body = document.querySelector("body");
cabecalhoMenu.addEventListener('click', () => {
    menuLateral.classList.toggle('menu-lateral--ativo')
    if (menuLateral.classList.contains("menu-lateral--ativo")) {
        // Disable scroll
        body.style.overflow = "hidden";
    } else {
        // Enable scroll
        body.style.overflow = "auto";
    }
})