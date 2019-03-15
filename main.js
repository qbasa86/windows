const menu = document.querySelector(".menu");
const icon = document.querySelector("body > section.pasek > ul > li:nth-child(1)");
const pulpit = document.querySelector(".pulpit");
const data = document.querySelector("ul.icons.right");
const test = document.createElement("li");
getData();

function getData() {
    let d = new Date();
    let t = d.toLocaleTimeString();
    test.textContent = t;

}
setInterval(getData, 1000);


data.appendChild(test);
icon.addEventListener("click", () => {
    menu.classList.toggle("menuActive");
})
pulpit.addEventListener("click", () => {
    menu.classList.remove("menuActive");
})