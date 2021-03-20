const logoContainer = document.getElementById('homePage');
const logo = document.getElementById('skyPondLogo');
const homePageTitle = document.getElementById('homePage_title');
const bodyContainer = document.querySelector("body");

const mobileCarrot = document.getElementById("mobileCarrot");


let phoneScreen, smallishScreen, mediumScreen, hugeScreen = false;

if (window.innerWidth < 700) {
    phoneScreen = true;
} else if (window.innerWidth > 1598) {
    hugeScreen = true;
} else if (window.innerWidth > 796 && window.innerWidth < 1597) {
    mediumScreen = true;
} else if (window.innerWidth > 796 && window.innerWidth < 1597) {
    smallishScreen = true;
}

birdSize = 0;

let phoneBird = ["29vw", "39vh", "49vw"]
let mediumBird = ["15vw", "19vh", "48vw"];
let hugeBird = ["15vw", "25vh", "48vw"];

if (phoneScreen) {
    bodyContainer.style.marginTop = "40%";
    logoContainer.classList.remove('homePage');
    logoContainer.classList.add('homePageMobileOnly');
    logo.style.width = "36vw";
    homePageTitle.style.fontSize = "9vw";
    placeTheBird(phoneBird);
    birdSize = 39;
    mobileCarrot.style.display = "block";

} else if (hugeScreen) {
    homePageTitle.style.fontSize = "5rem";
    logoContainer.style.marginTop = "100%";
    logoContainer.style.marginBottom = "5%";
    placeTheBird(hugeBird);
    birdSize = 25

} else if (mediumScreen) {
    logoContainer.style.marginTop = "45%";
    placeTheBird(mediumBird);
    birdSize = 19;

} else if (smallishScreen) {
    bodyContainer.style.marginTop = "20%";
    logoContainer.classList.remove('homePage');
    logoContainer.classList.add('homePageMobileOnly');
}

function placeTheBird(screenBirds) {
    bird.style.width = screenBirds[0];
    bird.style.bottom = screenBirds[1];
    bird.style.left = screenBirds[2];
}





