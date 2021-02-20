const bird = document.getElementById("bird");


setTimeout(openWings, 3000);
setTimeout(flapWings, 5000);

function openWings() {

    for (let i = 2; i < 9; i++) {
        setTimeout(setBird, 80 * i, i);
    }

}

function flapWings() {
    let flaps = [7, 6, 5, 6, 7, 6, 5, 6, 7, 6, 5, 6, 7, 6, 5, 6, 7];
    for (let i = 0; i < flaps.length; i++) {
        setTimeout(setBird, 70 * i, flaps[i]);
    }

}


function setBird(i) {
    bird.setAttribute("src", "/images/bird" + i + ".png");

}

// setTimeout(printWords, i*100, words[i]);
