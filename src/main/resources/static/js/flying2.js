const bird = document.getElementById('bird');


function displayBird(frame) {

    let leftBigSpots = [48, 48, 49, 49, 50, 51, 52, 53, 54, 55, 56, 58, 60, 62, 64, 66, 70, 74, 78, 82, 86, 90, 98, 110];
    let flyingLoop = [1, 2, 3, 4, 5, 6, 7, 8,
        9, 10, 11, 12, 9, 10, 11, 12, 9, 10, 11, 12, 9, 10, 11, 12, 9, 10, 11, 12];

    bird.src = "images/flyingBird/heron_inFlight-" + flyingLoop[frame] + ".png";
    bird.style.left = leftBigSpots[frame] + "vw";

    if (birdSize === "phoneBird") {
        bird.style.bottom = (frame + 15) + "vh";

    } else if (birdSize === "mediumBird") {
        bird.style.bottom = (frame + 19) + "vh";
    } else {
        bird.style.bottom = (frame + 25) + "vh";
    }




    frame++;
    console.log(frame);

    if (frame < 29) {
        setTimeout(displayBird, 80, frame);
    }

}

function fly() {
    let frame = 0;
    setTimeout(displayBird, 80, frame);
}

