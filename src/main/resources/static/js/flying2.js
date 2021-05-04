
function displayBird(frame) {
    let leftBigSpots = [48, 48, 49, 49, 50, 51, 52, 53, 54, 55, 56, 58, 60, 62, 64, 66, 70, 74, 78, 82, 86, 90, 98, 110];
    let flyingLoop = [1, 2, 3, 4, 5, 6, 7, 8,
        9, 10, 11, 12, 9, 10, 11, 12, 9, 10, 11, 12, 9, 10, 11, 12, 9, 10, 11, 12];

    bird.src = "images/flyingBird/heron_inFlight-" + flyingLoop[frame] + ".png";
    bird.style.left = leftBigSpots[frame] + "vw";
    bird.style.bottom = (frame + birdSize) + "vh";

    frame++;

    if (frame < 29) {
        setTimeout(displayBird, 80, frame);
    }
}

let whichHeron = 2
let leftPosition = 48;
let bottomPosition = birdSize;

function fly2() {

    function placeTheBird(timestamp) {
        setTimeout(()=> {
            whichHeron++;
            leftPosition += 2;
            bottomPosition++;

            if (whichHeron > 12) {
                whichHeron = 8;
            }

            bird.src = 'images/flyingBird/heron_inFlight-' + whichHeron + '.png';
            bird.style.left = leftPosition + 'vw';
            bird.style.bottom = bottomPosition + 'vh';

            requestAnimationFrame(fly2);
        }, 80);

    }

    requestAnimationFrame(placeTheBird);

}

