const title = document.querySelector(".basicPage_title");

let hugeScreen = window.matchMedia('(min-width: 1598px');


if (hugeScreen.matches) {
    title.style.fontSize = "4rem";
}
