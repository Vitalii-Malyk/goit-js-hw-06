const counterValue = document.querySelector("#value");
counterValue.textContent = 0;
const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);

const handleClickIncrement = () => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
};
incrementButton.addEventListener("click", handleClickIncrement);

const handleClickDecrement = () => {
  counterValue.textContent = Number(counterValue.textContent) - 1;
};

decrementButton.addEventListener("click", handleClickDecrement);
