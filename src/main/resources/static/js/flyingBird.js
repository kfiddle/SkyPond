const bird = document.getElementById('bird');

function displayBird(frame, leftSpot, bottomSpot) {
    bird.setAttribute("src", "images/flyingBird/heron_inFlight-" + frame + ".png");
    bird.style.left = leftSpot + "vw";
    bird.style.bottom = bottomSpot + "vh";
}

function fly(frame, time) {

    let flyingLoop = [1, 2, 3, 4, 5, 6, 7, 8,
        9, 10, 11, 12, 9, 10, 11, 12, 9, 10, 11, 12, 9, 10, 11, 12, 9, 10, 11, 12];

    let leftSpots = [7,8,9,10,11,12,13,14,15,16,18,20,22,24,28,32,36,40,44,48,52,56,60,64];
    let bottomSpots = [];
    for (let i = 0; i < 37; i++) {
        bottomSpots[i] = i + 13;
    }

    if (frame < 23) {
        setTimeout(displayBird, time * 150, flyingLoop[frame], leftSpots[frame], bottomSpots[frame]);
        frame++;
        time++;
        fly(frame, time);
    }
}

fly(0, 1);
