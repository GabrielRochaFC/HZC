const cabecalhoMenu = document.querySelector('.cabecalho__menu')
const menuLateral = document.querySelector('.menu-lateral')
cabecalhoMenu.addEventListener('click', () => {
    menuLateral.classList.toggle('menu-lateral--ativo')
})