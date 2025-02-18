// JavaScript source code
let lastScrollY = 0;
const navbar = document.querySelector('.navbar');
const logocontainer = document.querySelector('.logo-container');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // if (currentScrollY > lastScrollY) {
    //     navbar.classList.add('hidden');
    // } else {
    //     navbar.classList.remove('hidden');
    //     console.log("Navbar classes:", navbar.classList);
    // }

    // if (!navbar.classList.contains('hidden')) {
        if (currentScrollY > 0) {
            navbar.classList.remove('transparent'); //Transparent
        } else {
            navbar.classList.add('transparent');
        }
    // }

    // if (currentScrollY > 0) {
    //     logocontainer.classList.add('hidden');
    // } else {
    //     logocontainer.classList.remove('hidden');
    // }

    lastScrollY = currentScrollY;
});

document.getElementById("dropdown-icon").addEventListener("click", function () {
    const dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.style.display = dropdownMenu.style.display === "flex" ? "none" : "flex";
});