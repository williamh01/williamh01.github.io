const scroll = new SmoothScroll('.navbar a[href*="#"]', {
    speed: 700
});


const menubutton = document.querySelector('.menubox');
let menuOpen = false;
menubutton.addEventListener('click', () => {
    if (!menuOpen) {
        menubutton.classList.add('open');
        menuOpen = true;
    } else {
        menubutton.classList.remove('open');
        menuOpen = false;
    }
});