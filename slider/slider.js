const img = document.getElementsByClassName("img");
const imgRoll = document.getElementById("imgRoll");
const imgDiv = document.getElementById("imgDiv");
const app = document.getElementById("app");
const imgArr = Array.from(img);
let totalItems = imgArr.length;
let activeSlide = 0;
let moving = false;

const nextbtn = document.getElementById("next");
const prevbtn = document.getElementById("previous");

const li = document.getElementsByClassName("li");

const li1 = document.getElementById("li1");
const li2 = document.getElementById("li2");
const li3 = document.getElementById("li3");
const li4 = document.getElementById("li4");
const li5 = document.getElementById("li5");

// const ul = document.createElement("ul");
// app.appendChild(ul);
// const liWrapper = document.createElement("div");
// ul.appendChild(liWrapper);

// imgArr.map(() => {
//   const li = document.createElement("li");
//   li.classList.add("dots");
//   li.innerHTML = "&nbsp";
//   li.style.color = "black";
//   li.style.margin = "5px";
//   li.style.cursor = "pointer";
//   liWrapper.appendChild(li);

//   liWrapper.appendChild(li);
// });
// liWrapper.style.display = "flex";
// liWrapper.style.flexDirection = "row";
const moveCardsHorizontally = (direction) => {
  if (!moving) {
    moving = true;

    if (direction === "next") {
      activeSlide = (activeSlide + 1) % totalItems;
      console.log("asdf--", activeSlide);
    } else if (direction === "prev") {
      activeSlide = (activeSlide - 1 + totalItems) % totalItems;
      console.log("asdf--", activeSlide);
    }

    imgRoll.style.transition = "transform 0.5s ease-in-out";
    imgRoll.style.transform = `translateX(${-activeSlide * 500}px)`;

    setTimeout(() => {
      imgRoll.style.transition = "none";
      moving = false;
    }, 500);
  }
};

const navigatePhoto = (x) => {
  console.log("dot clicked");
  activeSlide = 0;
  activeSlide = (activeSlide + x) % totalItems;

  imgRoll.style.transition = "transform 0.5s ease-in-out";
  imgRoll.style.transform = `translateX(${-activeSlide * 500}px)`;
};

nextbtn.onclick = function () {
  console.log("next button clicked");
  moveCardsHorizontally("next");
};
prevbtn.onclick = function () {
  console.log("prev button clicked");
  moveCardsHorizontally("prev");
};

li1.onclick = () => navigatePhoto(0);
li2.onclick = () => navigatePhoto(1);
li3.onclick = () => navigatePhoto(2);
li4.onclick = () => navigatePhoto(3);
li5.onclick = () => navigatePhoto(4);
