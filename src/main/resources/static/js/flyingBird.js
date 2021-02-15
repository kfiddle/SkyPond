

const bird = document.getElementById("bird");


setTimeout(flyBird, 3000);

function flyBird() {

    for (let i = 2; i < 6; i++) {
        setTimeout(setBird, 40*i, i);
    }


    // setTimeout(printWords, i*100, words[i]);



}

function setBird(i) {
    bird.setAttribute("src", "/images/bird" + i + ".png");

}

