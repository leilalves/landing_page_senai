const botao = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');

botao.addEventListener('click', ()=> {
    menu.classList.toggle('aberto');
});