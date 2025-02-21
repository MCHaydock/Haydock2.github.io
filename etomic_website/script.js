// JavaScript source code

let ticking = false;
window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateNavbar();
        ticking = false;
      });
      ticking = true;
    }
  });

function updateNavbar()
{ 
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.remove('transparent'); //Transparent
    } else {
        navbar.classList.add('transparent');
    }
}

document.getElementById("dropdown-icon").addEventListener("click", function () {
    const dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.style.display = dropdownMenu.style.display === "flex" ? "none" : "flex";
});