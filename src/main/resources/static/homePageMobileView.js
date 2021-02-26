const body = document.querySelector('body');
const logoContainer = document.getElementById('homePage');

let mobileViewVerify = window.matchMedia('(max-width:700px');


if (mobileViewVerify.matches === true) {
    body.style.marginTop = "100%";
    logoContainer.classList.remove('homePage');
    logoContainer.classList.add('homePageMobileOnly');
}
