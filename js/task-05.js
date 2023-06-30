const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");
const spanText = span.textContent;

input.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (!input.value) {
    span.textContent = spanText;
  } else {
    span.textContent = event.currentTarget.value;
  }
}
