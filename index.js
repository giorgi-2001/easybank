const burger = document.querySelector('.hamburger');
const nav = document.querySelector('.header__nav');
const blur = document.querySelector('.blur');
const headerBtn = document.querySelector('.header__button');



document.addEventListener('click', e => { 

    // this event listener handles state of Nav 

    const isThisBurger = e.target === burger; 
    if (isThisBurger) {
        nav.classList.toggle('active');
        blur.classList.toggle('active');
        headerBtn.classList.toggle('active')
        return; 
    }

    const isThisHeaderBtn = e.target === headerBtn;
    if(isThisHeaderBtn) return;
    const isThisNav = e.target.closest('nav') === nav;
    if (isThisNav) return;

    nav.classList.remove('active');
    blur.classList.remove('active');  
    headerBtn.classList.remove('active');
})