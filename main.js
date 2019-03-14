const menu = document.querySelector(".menu");
const icon = document.querySelector("body > section.pasek > ul > li:nth-child(1)");
icon.addEventListener("click", () => {
    menu.classList.toggle("menuActive");
})