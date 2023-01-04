// Navigation
const navItems = document.querySelectorAll(".navigation__link");
const navIcon = document.getElementById("navi-toggle");

const handleIconClick = () => {
    navIcon.checked = false;
}

for (let i=0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', handleIconClick)
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
