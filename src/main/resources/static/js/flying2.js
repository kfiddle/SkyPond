let whichHeron = 2
let leftPosition = 48;
let bottomPosition = birdSize;

function fly2() {

    function placeTheBird() {
        setTimeout(() => {
            whichHeron++;
            leftPosition += 2;
            bottomPosition++;

            if (whichHeron > 12) {
                whichHeron = 8;
            }

            bird.src = 'images/flyingBird/heron_inFlight-' + whichHeron + '.png';

            requestAnimationFrame(fly2);
        }, 50);

    }

    requestAnimationFrame(placeTheBird);
}

function fly3() {

    bird.style.transform = 'translate(40vw, -100px)';


}

