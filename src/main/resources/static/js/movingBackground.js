const header = document.getElementById('header');
const contactForm = document.getElementById("contactFormContainer");
const body = document.querySelector("body");
const text = document.querySelector(".text");
const hoverLogo = document.getElementById('homePage');
const background = document.getElementById('bgImage');
const bird = document.getElementById('bird');


const textElements = [button, text];

textElements.forEach(element=> {
    element.style.color = "rgb(159,199,25)";
    element.style.opacity = "0";
    element.style.fontWeight = "700";
})

setTimeout(openWindowListener, 1500);

const positionBackground = (i) => {
    background.style.backgroundPositionY = i + "%";
}

function scrollBackground(index) {
    setTimeout(positionBackground, index * 10, index);
    index++;
    if (index < 105) {
        scrollBackground(index);
    }
}


function openWindowListener() {
        window.addEventListener('mousemove', () => {
            setTimeout(()=> {
                fly2();
                fly3();
            }, 50);
            setTimeout(scrollBackground, 1600);
            setTimeout(contactFormFloatUp, 2600);
        }, {once: true});
}


function contactFormFloatUp() {
    contactForm.style.transform = `translateY(-5vh)`;
    body.style.overflow = "none";
    darkenLogoAndBird(1);
    setTimeout(() => {
        glowingLetters(1);
    }, 800);
}

function darkenLogoAndBird(startingOpacity) {
    setTimeout(() => {
        hoverLogo.style.opacity = (1 - (startingOpacity * 0.01)).toString();
    }, startingOpacity * 10);

    startingOpacity += 1;
    if (startingOpacity <= 99) {
        darkenLogoAndBird(startingOpacity);
    }
}

function glowingLetters(startingOpacity) {
    setTimeout(() => {
        textElements.forEach(element=> {
            element.style.opacity = (startingOpacity * 0.01).toString();
            });
    }, startingOpacity * 20);

    startingOpacity += 1;
    if (startingOpacity <= 100) {
        glowingLetters(startingOpacity);
    }
}


