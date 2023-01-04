// Navigation
const navItems = document.querySelectorAll(".navigation__link");
const navIcon = document.getElementById("navi-toggle");

const handleIconClick = () => {
    navIcon.checked = false;
}

for (let i=0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', handleIconClick)
}

// Landing Page Icon Scroll
const downIcon = document.querySelector('.landing-page__icon');

downIcon.addEventListener('click', () => {
    window.scrollBy({
        'top': window.screen.height,
        'behavior': 'smooth'
    });
})

//Update Footer date
const year = new Date().getFullYear();

let footer = document.querySelector('footer p');

footer.textContent = `Manuel H. Canas © ${year} | All Rights Reserved`
