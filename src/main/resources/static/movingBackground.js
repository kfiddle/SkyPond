const background = document.getElementById('bgImage');

const hoverLogo = document.getElementById('homePage');

let hovered = false;

const setImage = (i) => {
    background.style.height = i + "%";
}



hoverLogo.addEventListener('mouseover', ()=> {

    if (hovered === false) {
        background.classList.remove('bgImage');
        background.classList.add('bgImageAfterLoading');

        for (let i = 100; i > 15; i--) {
            setTimeout(setImage, (100 - i) * 20, i);
        }
        background.style.height = "40%";
    }
    hovered = true;
})
