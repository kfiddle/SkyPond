let whichHeron = 2
let leftPosition = 48;
let bottomPosition = birdSize;

function fly2() {

    function placeTheBird() {
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

