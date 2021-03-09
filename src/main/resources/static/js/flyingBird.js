const bird = document.getElementById('bird');


setTimeout(takeOff, 3000);


function setBird(i) {
    bird.setAttribute("src", "images/birdLaunchStills/bird" + i + ".png");
}



function takeOff() {

    for (let i = 2; i < 6; i++) {
        setTimeout(setBird, 150 *i, i);
    }
}
