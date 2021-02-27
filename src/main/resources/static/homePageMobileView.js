const body = document.querySelector('body');
const logoContainer = document.getElementById('homePage');
const logo = document.getElementById('skyPondLogo');
const title = document.getElementById('homePage_title');

let phoneScreen = window.matchMedia('(max-width:700px');


if (phoneScreen.matches) {
    body.style.marginTop = "40%";
    logoContainer.classList.remove('homePage');
    logoContainer.classList.add('homePageMobileOnly');
    logo.style.width = "36vw";
    title.style.fontSize = "9vw";
}





