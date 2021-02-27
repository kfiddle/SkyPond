const background = document.getElementById('bgImage');
const tint = document.getElementById('tint');
const hoverLogo = document.getElementById('homePage');

let hovered = false;


const darkenTint = (i) => {
    tint.style.opacity = (i * 0.01).toString();
}

const scrollBackground = (i) => {
    background.style.backgroundPositionY = 0 - i + "px";
}


hoverLogo.addEventListener('mouseover', () => {
    background.style.position = "relative";
    background.style.backgroundRepeat = "no-repeat";

    for (let i = 1; i < 49; i++) {
        setTimeout(darkenTint, i * 90, (49 - i));
    }

    for (let i = 1; i < 600; i++) {
        setTimeout(scrollBackground, i * 5, i);

    }
})


// const setImage = (i) => {
//     background.style.height = i + "%";
// }
//
//
//
// hoverLogo.addEventListener('mouseover', ()=> {
//
//     if (hovered === false) {
//         background.classList.remove('bgImage');
//         background.classList.add('bgImageAfterLoading');
//
//         for (let i = 100; i > 15; i--) {
//             setTimeout(setImage, (100 - i) * 20, i);
//         }
//         background.style.height = "40%";
//     }
//     hovered = true;
// })
