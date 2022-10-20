let navButton = document.querySelector('.fa-bars')
let navLinks = document.querySelectorAll('nav a')
let screenWidth = screen.width;

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

function addHideClass() {
        
    Array.from(navLinks).forEach(item => {
        
        item.classList.add("hide");
    })
}

if (screenWidth >= 900) {
    console.log("Screen is wider than 900px")
} else {
    console.log("Screen is smaller than 900px")
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



