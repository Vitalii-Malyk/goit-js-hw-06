const catEl = document.querySelector("ul#categories");
console.log(`Number of categories: ${catEl.children.length}`);

const itemCatEl = document.querySelectorAll("ul#categories .item");

itemCatEl.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
