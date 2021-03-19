const logoContainer = document.getElementById('homePage');
const logo = document.getElementById('skyPondLogo');
const homePageTitle = document.getElementById('homePage_title');
const bodyContainer = document.querySelector("body");

let birdSize = "";

let phoneBird = ["26vw", "15vh", "49vw"]
let mediumBird = ["15vw", "19vh", "48vw"];
let hugeBird = ["15vw", "25vh", "48vw"];

let screenWidth = window.innerWidth;
console.log(screenWidth);

if (screenWidth < 700) {
    bodyContainer.style.marginTop = "40%";
    logoContainer.classList.remove('homePage');
    logoContainer.classList.add('homePageMobileOnly');
    logo.style.width = "36vw";
    homePageTitle.style.fontSize = "9vw";
    placeTheBird(phoneBird);
    birdSize = "phoneBird";

} else if (screenWidth > 1598) {
    homePageTitle.style.fontSize = "5rem";
    logoContainer.style.marginTop = "100%";
    logoContainer.style.marginBottom = "5%";
    placeTheBird(hugeBird);
    birdSize = "hugeBird";

} else if (screenWidth > 796 && screenWidth < 1597) {
    logoContainer.style.marginTop = "45%";
    placeTheBird(mediumBird);
    birdSize = "mediumBird";

} else if (screenWidth > 700 && screenWidth < 796) {
    bodyContainer.style.marginTop = "20%";
    logoContainer.classList.remove('homePage');
    logoContainer.classList.add('homePageMobileOnly');
}

function placeTheBird(screenBirds) {
    bird.style.width = screenBirds[0];
    bird.style.bottom = screenBirds[1];
    bird.style.left = screenBirds[2];
}







