let toggle = document.querySelector('.toggle');
let top_bar = document.querySelector('.top_bar');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');
toggle.classList.add('active');
top_bar.classList.add('active');
navigation.classList.add('active');
main.classList.add('active');
toggle.onclick = function () {
    toggle.classList.toggle('active');
    top_bar.classList.toggle('active');
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}

function toggleMenu() {
    let navigation = document.querySelector('.navigation');
    let main = document.querySelector('.main');
    navigation.classList.remove('active');
    main.classList.remove('active');
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos >= currentScrollPos) {
        document.querySelector('.top_bar').classList.remove('hide')
    } else {
        document.querySelector('.top_bar').classList.add('hide')
    }
    prevScrollpos = currentScrollPos;
};


