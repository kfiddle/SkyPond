
const background = document.getElementById('bgImage');
const hoverLogo = document.getElementById('homePage');

setTimeout(() => {
    darkenBackground(1);
    glowingLogo(1);
}, 5000);


function darkenBackground(startingOpacity) {
    setTimeout(() => {
        background.style.opacity = (1 - (startingOpacity * 0.01)).toString();
    }, startingOpacity * 40);

    startingOpacity += 1;
    if (startingOpacity <= 70) {
        darkenBackground(startingOpacity);
    }
}

function glowingLogo(startingOpacity) {
    setTimeout(() => {
        hoverLogo.style.opacity = (startingOpacity * 0.01).toString();
    }, startingOpacity * 40);

    startingOpacity += 1;
    if (startingOpacity <= 100) {
        glowingLogo(startingOpacity);
    }
}










