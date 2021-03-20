const bird = document.getElementById('bird');


const leftBigSpots = [48, 48, 49, 49, 50, 51, 52, 53, 54, 55, 56, 58, 60, 62, 64, 66, 70, 74, 78, 82, 86, 90, 98, 110];
const flyingLoop = [1, 2, 3, 4, 5, 6, 7, 8,
    9, 10, 11, 12, 9, 10, 11, 12, 9, 10, 11, 12, 9, 10, 11, 12, 9, 10, 11, 12];

function displayBird(frame, leftSpot, bottomSpot) {
    bird.src = "images/flyingBird/heron_inFlight-" + frame + ".png";
    bird.style.left = leftSpot + "vw";
    bird.style.bottom = bottomSpot + "vh";
}


function fly(index, time) {
    console.log(birdSize);
    let bottomSpots = [];

    for (let i = 0; i < 37; i++) {
        if (birdSize === "phoneBird") {
            bottomSpots[i] = i + 15;
        } else if (birdSize === "mediumBird") {
            bottomSpots[i] = i + 19;
        } else {
            bottomSpots[i] = i + 25;
        }
    }

    if (index < 23) {
        setTimeout(displayBird, time * 120, flyingLoop[index], leftBigSpots[index], bottomSpots[index]);
        index++;
        time++;
        fly(index, time);

    }
}

