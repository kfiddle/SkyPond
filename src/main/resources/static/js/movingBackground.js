const header = document.getElementById('header');
const contactForm = document.getElementById("contactFormContainer");
const body = document.querySelector("body");
const text = document.querySelector(".text");
const nav1 = document.getElementById("nav1");
const nav2 = document.getElementById("nav2");
const textElements = [button, text, nav1, nav2];
console.log(textElements);

textElements.forEach(element=> {
    element.style.color = "#8EA133";
    element.style.opacity = "0";
    element.style.fontWeight = "700";
})

setTimeout(openWindowListener, 2300);

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
            fly(0, 1);
            setTimeout(scrollBackground, 1600);
            setTimeout(contactFormFloatUp, 2600);
        }, {once: true});
}

function removeOpeningListener() {
    window.removeEventListener('mousemove', ()=> {
        fly(0, 1);
        setTimeout(scrollBackground, 1600);
        setTimeout(contactFormFloatUp, 2600);
    })
}

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
        textElements.forEach(element=> {
            element.style.opacity = (startingOpacity * 0.01).toString();
            });

        // text.style.opacity = (startingOpacity * 0.01).toString();
        // button.style.opacity = (startingOpacity * 0.01).toString();
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
