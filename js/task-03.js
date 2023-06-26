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
  .map(
    (newImages) =>
      `<li class="item"><img class="capture" ${newImages}></img></li>`
  )
  .join("");

console.log(markup);
list.insertAdjacentHTML("beforeend", markup);

const newStylist = document.querySelector(".gallery");
newStylist.style.listStyle = "none";
newStylist.style.background = "#68c5dc";
newStylist.style.display = "flex";
newStylist.style.padding = "40px";
newStylist.style.flexDirection = "column";
newStylist.style.gap = "40px";
newStylist.style.alignItems = "center";
newStylist.style.width = "2300px";
newStylist.style.margin = "auto";

const newStyImg = document.querySelector(".capture");
newStyImg.style.display = "block";
newStyImg.style.margin = "auto";
newStyImg.style.width = "2250px";
