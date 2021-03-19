const logoContainer = document.getElementById('homePage');
const logo = document.getElementById('skyPondLogo');
const homePageTitle = document.getElementById('homePage_title');
const bodyContainer = document.querySelector("body");
let phoneScreen = window.matchMedia('(max-width:700px');
let hugeScreen = window.matchMedia('(min-width: 1598px');
let smallishScreen = window.matchMedia('(max-width: 795px)');
let mediumScreen = window.matchMedia('(min-width: 796px)');

if (phoneScreen.matches) {
    console.log("we're in da phone")
    bodyContainer.style.marginTop = "40%";
    logoContainer.classList.remove('homePage');
    logoContainer.classList.add('homePageMobileOnly');
    logo.style.width = "36vw";
    homePageTitle.style.fontSize = "9vw";
}

if (hugeScreen.matches) {
    homePageTitle.style.fontSize = "5rem";
    logoContainer.style.marginTop = "100%";

}

if (smallishScreen.matches) {
    bodyContainer.style.marginTop = "20%";
    logoContainer.classList.remove('homePage');
    logoContainer.classList.add('homePageMobileOnly');
}

if (mediumScreen.matches) {
    logoContainer.style.marginTop = "45%";
}

//
//      ****** snippets from deleted contact form view js
//
// const title = document.querySelector(".basicPage_title");
//
// let hugeScreen = window.matchMedia('(min-width: 1598px');
//
//
// if (hugeScreen.matches) {
//     title.style.fontSize = "4rem";
// }







