const body = document.querySelector('body');
const logoContainer = document.getElementById('homePage');
const logo =  document.getElementById('skyPondLogo');
const title =  document.getElementById('homePage_title');

let mobileViewVerify = window.matchMedia('(max-width:700px');


if (mobileViewVerify.matches === true) {
    body.style.marginTop = "80%";
    logoContainer.classList.remove('homePage');
    logoContainer.classList.add('homePageMobileOnly');
    logo.style.width = "36vw";
    title.style.fontSize = "9vw";
}
