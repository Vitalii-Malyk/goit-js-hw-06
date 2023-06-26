const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const itemElementsArr = ingredients.map((data) => {
  const itemElement = document.createElement("li");
  itemElement.textContent = data;
  itemElement.classList.add("item");
  return itemElement;
});

const listEl = document.querySelector("#ingredients");

listEl.prepend(...itemElementsArr);

// ------------Варіант №2----------
// const list = document.querySelector("#ingredients");

// const itemsArr = ingredients
//   .map((ingredient) => `<li class="item">${ingredient}</li>`)
//   .join("");

// console.log(itemsArr);
// list.insertAdjacentHTML("beforeend", itemsArr);
