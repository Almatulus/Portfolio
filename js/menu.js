document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.nav');

    const header = document.querySelector('.header__inner');
    const scrollDistance = 100;

    burger.addEventListener('click', () => {
        burger.classList.toggle('burger-active');
        menu.classList.toggle('active-menu')
    })

    window.addEventListener('scroll', () => {
        if(window.scrollY > scrollDistance){
            header.classList.add('scrolled');
        } else{
            header.classList.remove('scrolled');
        }
    })

})