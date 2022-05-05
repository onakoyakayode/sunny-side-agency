const hamburgerButton = document.querySelector('.hamburger');

let navList = document.querySelector('.navlists');


hamburgerButton.addEventListener('click', (event) => {
    if (navList.style.opacity === "0") {
        navList.style.opacity = '1';
    } else {
        navList.style.opacity = '0'
    }
})