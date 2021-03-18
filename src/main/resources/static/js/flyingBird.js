const bird = document.getElementById('bird');
const leftSpots = [7,8,9,10,11,12,13,14,15,16,18,20,22,24,28,32,36,40,44,48,52,56,60,64];
const flyingLoop = [1, 2, 3, 4, 5, 6, 7, 8,
    9, 10, 11, 12, 9, 10, 11, 12, 9, 10, 11, 12, 9, 10, 11, 12, 9, 10, 11, 12];

function displayBird(frame, leftSpot, bottomSpot) {
    bird.setAttribute("src", "images/flyingBird/heron_inFlight-" + frame + ".png");
    bird.style.left = leftSpot + "vw";
    bird.style.bottom = bottomSpot + "vh";
}

function fly(index, time) {

    let bottomSpots = [];
    for (let i = 0; i < 37; i++) {
        bottomSpots[i] = i + 13;
    }

    if (index < 23) {
        setTimeout(displayBird, time * 120, flyingLoop[index], leftSpots[index], bottomSpots[index]);
        index++;
        time++;
        fly(index, time);
    }
}

