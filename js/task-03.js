const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const newImages = images.map(
  (image) => `src= ` + image.url + ` alt= ` + image.alt
);

const list = document.querySelector(".gallery");
const markup = newImages
  .map((newImages) => `<li class="item"><img ${newImages}></img></li>`)
  .join("");

console.log(markup);
list.insertAdjacentHTML("beforeend", markup);

const newStylist = document.querySelector(".gallery");
newStylist.style.background = "#68c5dc";
newStylist.style.display = "flex";
newStylist.style.padding = "20px";
newStylist.style.flexDirection = "column";
newStylist.style.gap = "20px";
newStylist.style.alignItems = "center";
