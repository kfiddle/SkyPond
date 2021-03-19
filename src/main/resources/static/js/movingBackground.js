const background = document.getElementById('bgImage');
const hoverLogo = document.getElementById('homePage');
const header = document.getElementById('header');
const contactForm = document.getElementById("contactFormContainer");
const body = document.querySelector("body");
const text = document.querySelector('.text');

text.style.color = "#8EA133";
text.style.opacity = "0";


const positionBackground = (i) => {
    background.style.backgroundPositionY = i + "%";
}


const scrollBackground = () => {
    for (let i = 1; i < 105; i++) {
        setTimeout(positionBackground, i * 10, i);

    }
}


hoverLogo.addEventListener('click', () => {
    console.log(birdSize);
    fly(0, 1);

    setTimeout(scrollBackground, 1600);

    setTimeout(contactFormFloatUp, 2600);


});

function contactFormFloatUp() {
    contactForm.style.transform = `translateY(-10vh)`;
    body.style.overflow = "none";
    darkenLogoAndBird(1);
    glowingLetters(1);
}

function darkenLogoAndBird(startingOpacity) {
    setTimeout(() => {
        hoverLogo.style.opacity = (1 - (startingOpacity * 0.01)).toString();
    }, startingOpacity * 10);

    startingOpacity += 1;
    if (startingOpacity <= 100) {
        darkenLogoAndBird(startingOpacity);
    }
}

function glowingLetters(startingOpacity) {
    setTimeout(() => {
        text.style.opacity = (startingOpacity * 0.01).toString();
    }, startingOpacity * 30);

    startingOpacity += 1;
    if (startingOpacity <= 100) {
        glowingLetters(startingOpacity);
    }
}




//         *****leaving original hoverlogo eventlistener below, just in case*****

// hoverLogo.addEventListener('click', () => {
//     background.style.position = "relative";
//     background.style.backgroundRepeat = "no-repeat";
//
//
//     setTimeout(scrollBackground, 1000);
//     setTimeout(switchToContactPage, 2000);
//
//
// });
