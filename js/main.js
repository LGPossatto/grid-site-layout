// ------------------------------------------------------------------
// carousel ---------------------------------------------------------
const carouselBoxChildren = document.getElementById("carousel-box").children;
const carouselBtnL = document.getElementById("carousel-btn-l");
const carouselBtnR = document.getElementById("carousel-btn-r");

console.log(carouselBoxChildren);
const moveCarousel = (direction) => {
  const carouselLastIndex = carouselBoxChildren.length - 1;

  const getTrueIndex = (index) => {
    if (index > carouselLastIndex) {
      return index - carouselLastIndex - 1;
    } else if (index < 0) {
      return index + carouselLastIndex + 1;
    } else {
      return index;
    }
  };

  if (direction === "left") {
    for (let i = 0; i <= carouselLastIndex; i++) {
      if (carouselBoxChildren[i].classList.contains("hide-left")) {
        carouselBoxChildren[i].classList.remove("hide-left");
        carouselBoxChildren[i].classList.add("hide-right");
        carouselBoxChildren[getTrueIndex(i + 1)].classList.remove("active-0");
        carouselBoxChildren[getTrueIndex(i + 1)].classList.add("hide-left");
        carouselBoxChildren[getTrueIndex(i + 2)].classList.remove("active-1");
        carouselBoxChildren[getTrueIndex(i + 2)].classList.add("active-0");
        carouselBoxChildren[getTrueIndex(i + 3)].classList.remove("active-2");
        carouselBoxChildren[getTrueIndex(i + 3)].classList.add("active-1");
        carouselBoxChildren[getTrueIndex(i + 4)].classList.remove("active-3");
        carouselBoxChildren[getTrueIndex(i + 4)].classList.add("active-2");
        carouselBoxChildren[getTrueIndex(i + 5)].classList.remove("active-4");
        carouselBoxChildren[getTrueIndex(i + 5)].classList.add("active-3");
        carouselBoxChildren[getTrueIndex(i + 6)].classList.remove("hide-right");
        carouselBoxChildren[getTrueIndex(i + 6)].classList.add("active-4");
        break;
      }
    }
  } else if (direction === "right") {
    for (let i = 0; i <= carouselLastIndex; i++) {
      if (carouselBoxChildren[i].classList.contains("hide-left")) {
        carouselBoxChildren[getTrueIndex(i - 1)].classList.remove("hide-right");
        carouselBoxChildren[getTrueIndex(i - 1)].classList.add("hide-left");
        carouselBoxChildren[i].classList.remove("hide-left");
        carouselBoxChildren[i].classList.add("active-0");
        carouselBoxChildren[getTrueIndex(i + 1)].classList.remove("active-0");
        carouselBoxChildren[getTrueIndex(i + 1)].classList.add("active-1");
        carouselBoxChildren[getTrueIndex(i + 2)].classList.remove("active-1");
        carouselBoxChildren[getTrueIndex(i + 2)].classList.add("active-2");
        carouselBoxChildren[getTrueIndex(i + 3)].classList.remove("active-2");
        carouselBoxChildren[getTrueIndex(i + 3)].classList.add("active-3");
        carouselBoxChildren[getTrueIndex(i + 4)].classList.remove("active-3");
        carouselBoxChildren[getTrueIndex(i + 4)].classList.add("active-4");
        carouselBoxChildren[getTrueIndex(i + 5)].classList.remove("active-4");
        carouselBoxChildren[getTrueIndex(i + 5)].classList.add("hide-right");
        break;
      }
    }
  }
  console.log(carouselBoxChildren);
};

carouselBtnL.addEventListener("click", () => moveCarousel("left"));
carouselBtnR.addEventListener("click", () => moveCarousel("right"));
// ------------------------------------------------------------------
