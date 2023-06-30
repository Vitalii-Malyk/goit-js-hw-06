function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
getRandomHexColor();
console.log(getRandomHexColor());

const bodyEl = document.querySelector("body");
const buttonEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

function changeColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
}

bodyEl.addEventListener("click", changeColor);
