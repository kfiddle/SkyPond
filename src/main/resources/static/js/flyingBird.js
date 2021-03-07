const bird = document.getElementById('skyPondLogo');


setTimeout(takeOff, 3000);


function setBird(i) {
    bird.setAttribute("src", "images/birdLaunchStills/takingOff" + i + ".png");
}



function takeOff() {

    for (let i = 2; i < 5; i++) {
        setTimeout(setBird, 300 *i, i);
    }
}
