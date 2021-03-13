const bird = document.getElementById('bird');


setTimeout(takeOff, 1000);


function setBird(i) {
    bird.setAttribute("src", "images/flyingBird/heron_inFlight-" + i + ".png");
}



function takeOff() {

    for (let i = 2; i < 13; i++) {
        setTimeout(setBird, 150 *i, i);
    }
}
