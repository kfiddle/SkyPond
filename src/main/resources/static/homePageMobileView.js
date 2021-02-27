const body = document.querySelector('body');
const logoContainer = document.getElementById('homePage');
const logo = document.getElementById('skyPondLogo');
const title = document.getElementById('homePage_title');

let phoneScreen = window.matchMedia('(max-width:700px');
let hugeScreen = window.matchMedia('(min-width: 1598px');
let smallishScreen = window.matchMedia('(max-width: 795px)');
let mediumScreen = window.matchMedia('(min-width: 796px)');

if (phoneScreen.matches) {
    body.style.marginTop = "40%";
    logoContainer.classList.remove('homePage');
    logoContainer.classList.add('homePageMobileOnly');
    logo.style.width = "36vw";
    title.style.fontSize = "9vw";
}

if (hugeScreen.matches) {
    title.style.fontSize = "5rem";
    logoContainer.style.marginTop = "100%";

}

if (smallishScreen.matches) {
    body.style.marginTop = "20%";
    logoContainer.classList.remove('homePage');
    logoContainer.classList.add('homePageMobileOnly');
}

if (mediumScreen.matches) {
    logoContainer.style.marginTop = "45%";
}







