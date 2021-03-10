const background = document.getElementById('bgImage');
const hoverLogo = document.getElementById('homePage');
const header = document.getElementById('header');

const positionBackground = (i) => {
    background.style.backgroundPositionY = i + "%";
}


const scrollBackground = () => {
    for (let i = 1; i < 105; i++) {
        setTimeout(positionBackground, i * 10, i);

    }
}

const switchToContactPage = () => {
    window.location = "/contact";
}

hoverLogo.addEventListener('click', () => {
    background.style.position = "relative";
    background.style.backgroundRepeat = "no-repeat";


    setTimeout(scrollBackground, 1000);
    setTimeout(switchToContactPage, 2000);


});
