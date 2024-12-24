// JavaScript source code
let lastScrollY = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY === 0) {
        navbar.classList.add('transparent'); //Transparent
    } else if (!navbar.classList.contains('hidden')) {
        navbar.classList.remove('transparent');
    }

    if (currentScrollY > lastScrollY && currentScrollY > 0) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }

    lastScrollY = currentScrollY;
});