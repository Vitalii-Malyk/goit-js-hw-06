function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");
const buttonEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

function changeColor() {
  const getColorsFunction = getRandomHexColor();
  bodyEl.style.backgroundColor = getColorsFunction;
  spanEl.textContent = getColorsFunction;
  console.log(getColorsFunction);
}

bodyEl.addEventListener("click", changeColor);
