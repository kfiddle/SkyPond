const logoContainer = document.getElementById('homePage');
const logo = document.getElementById('skyPondLogo');
const homePageTitle = document.getElementById('homePage_title');
const bodyContainer = document.querySelector("body");

birdSize = 0;

let hugeBird = ["15vw", "17vh", "47.6vw"];
let bigMediumBird = ["15vw", "23vh", "47.7vw"];
let smallMediumBird = ["15vw", "20vh", "47.7vw"];
let bigTabletBird = ["15vw", "19vh", "47.7vw"]
let phoneBird = ["36vw", "14.5vh", "37.4vw"];

let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;

console.log(screenWidth);
console.log(screenHeight);

let screenSize = {
    huge: false,
    bigMedium: false,
    smallMedium: false,
    bigTablet: false,
    phone: false,
}

if (screenWidth > 2100) {
    screenSize.huge = true;
} else if (screenWidth > 1500 && screenWidth <= 2100) {
    screenSize.bigMedium = true;
} else if (screenWidth > 1200 && screenWidth <= 1500) {
    screenSize.smallMedium = true;
} else if (screenWidth > 796 && screenWidth <= 1200) {
    screenSize.bigTablet = true;
} else if (screenWidth < 796) {
    screenSize.phone = true;
}


console.log(screenSize);

if (screenSize.huge) {
    homePageTitle.style.fontSize = "5rem";
    logoContainer.style.marginTop = "100%";
    logoContainer.style.marginBottom = "5%";
    placeTheBird(hugeBird);
    birdSize = 25
} else if (screenSize.bigMedium) {
    logoContainer.style.marginTop = "45%";
    console.log(" big mediumish");
    placeTheBird(bigMediumBird);
    birdSize = 19;

} else if (screenSize.smallMedium) {
    bodyContainer.style.marginTop = "20%";
    logoContainer.classList.remove('homePage');
    logoContainer.classList.add('homePageMobileOnly');
    placeTheBird(smallMediumBird);
    birdSize = 20;

} else if (screenSize.bigTablet) {
    bodyContainer.style.marginTop = "20%";
    logoContainer.classList.remove('homePage');
    logoContainer.classList.add('homePageMobileOnly');
    placeTheBird(bigTabletBird);
    birdSize = 19;

} else if (screenSize.phone) {
    bodyContainer.style.marginTop = "20%";
    logoContainer.classList.remove('homePage');
    logoContainer.classList.add('homePageMobileOnly');
    placeTheBird(phoneBird);
    birdSize = 19;
}

function placeTheBird(screenBirds) {
    bird.style.width = screenBirds[0];
    bird.style.bottom = screenBirds[1];
    bird.style.left = screenBirds[2];
}







