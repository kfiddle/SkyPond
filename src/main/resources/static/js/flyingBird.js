const bird = document.getElementById("bird");


setTimeout(openWings, 2000);
setTimeout(flapWings, 3000);

function openWings() {

    for (let i = 2; i < 9; i++) {
        setTimeout(setBird, 90 * i, i);
    }

}

function flapWings() {
    let flaps = [7, 6, 5, 6, 7, 6, 5, 6, 7, 6, 5, 6, 7, 6, 5, 6, 7];
    for (let i = 0; i < flaps.length; i++) {
        setTimeout(setBird, 80 * i, flaps[i]);
    }

}


function setBird(i) {
    bird.setAttribute("src", "/images/bird" + i + ".png");

}

// setTimeout(printWords, i*100, words[i]);
