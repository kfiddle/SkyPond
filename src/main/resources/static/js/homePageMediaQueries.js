const logoContainer = document.getElementById('homePage');
const logo = document.getElementById('skyPondLogo');
const homePageTitle = document.getElementById('homePage_title');
const bodyContainer = document.querySelector("body");


birdSize = 0;

let phoneBird = ["44vw", "12vh", "43.2vw"];
let mediumBird = ["17vw", "19vh", "47.7vw"];
let hugeBird = ["15vw", "25vh", "48.5vw"];

let screenWidth = window.innerWidth;
console.log(screenWidth);

if (screenWidth < 700) {
    bodyContainer.style.marginTop = "40%";
    logoContainer.classList.remove('homePage');
    logoContainer.classList.add('homePageMobileOnly');
    logo.style.width = "36vw";
    homePageTitle.style.fontSize = "9vw";
    placeTheBird(phoneBird);
    birdSize = 15;

} else if (screenWidth > 1598) {
    homePageTitle.style.fontSize = "5rem";
    logoContainer.style.marginTop = "100%";
    logoContainer.style.marginBottom = "5%";
    placeTheBird(hugeBird);
    birdSize = 25

} else if (screenWidth > 796 && screenWidth < 1597) {
    logoContainer.style.marginTop = "45%";
    console.log("mediumish");
    placeTheBird(mediumBird);
    birdSize = 19;

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







