const inputEl = document.querySelector("#controls").firstElementChild;
const inputTextEl = inputEl.textContent;
const divEl = document.querySelector("boxes");
const buttonCreateEl = document.querySelector("button[data-create]");
const buttonDestroyEl = document.querySelector("button[data-destroy]");

buttonCreateEl.addEventListener("click", createBoxes);

function createBoxes(inputTextEl) {
  const newDivEl = document.createElement("div");
  console.log(inputTextEl);
  console.log(inputEl.textContent);
}
