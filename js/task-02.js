const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const markup = ingredients
  .map((ingredients) => `<li class="item">${ingredients}</li>`)
  .join("");

console.log(markup);
list.innerHTML = markup;
