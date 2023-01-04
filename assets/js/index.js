let navButton = document.querySelector('.fa-bars')
let navLinks = document.querySelectorAll('nav a')
let screenWidth = screen.width;

const year = new Date().getFullYear();

function toggleNavLinks() {
        
    Array.from(navLinks).forEach(item => {
        
        item.classList.toggle("hide");
        item.addEventListener('click', toggleNavLinks);
    })
}

function removeHideClass() {
        
    Array.from(navLinks).forEach(item => {
        
        item.classList.remove("hide");
    })
}



window.onresize = window.onload = function() {
    screenWidth = screen.width;
    if (screenWidth >= 900) {
        removeHideClass();
    } else {
        addHideClass();
        navButton.addEventListener('click', toggleNavLinks)
    }
}
//Update Footer date
const year = new Date().getFullYear();

let footer = document.querySelector('footer p');

footer.textContent = `Manuel H. Canas © ${year} | All Rights Reserved`
