const background = document.getElementById('bgImage');
const tint = document.getElementById('tint');
const hoverLogo = document.getElementById('homePage');
const header = document.getElementById('header');


const darkenTint = (i) => {
    tint.style.opacity = (i * 0.01).toString();
}

const positionBackground = (i) => {
    background.style.backgroundPositionY = i + "%";
}

const showHeader = () => {
    header.classList.remove('hidden');
}

const scrollBackground = () => {
    for (let i = 1; i < 120; i++) {
        setTimeout(positionBackground, i * 15, i);
    }
}

const switchToContactPage = () => {
    window.location = "/contact";
}

hoverLogo.addEventListener('click', () => {
    background.style.position = "relative";
    background.style.backgroundRepeat = "no-repeat";

    for (let i = 1; i < 49; i++) {
        setTimeout(darkenTint, i * 90, (49 - i));
    }

    setTimeout(scrollBackground, 2000);
    setTimeout(showHeader, 3300);
    setTimeout(switchToContactPage, 3600);

});
