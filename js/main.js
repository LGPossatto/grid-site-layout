// ------------------------------------------------------------------
// carousel ---------------------------------------------------------
const carouselBoxChildren = document.getElementById("carousel-box").children;
const carouselBtnL = document.getElementById("carousel-btn-l");
const carouselBtnR = document.getElementById("carousel-btn-r");

console.log(carouselBoxChildren);
const moveCarousel = (direction) => {
  const pannelActive0 = document.querySelector(".active-0");
  const pannelActive1 = document.querySelector(".active-1");
  const pannelActive2 = document.querySelector(".active-2");
  const pannelActive3 = document.querySelector(".active-3");
  const pannelActive4 = document.querySelector(".active-4");

  if (direction === "left") {
    const carouselLength = carouselBoxChildren.length - 1;

    for (let i = 0; i < carouselLength; i++) {
      if (carouselBoxChildren[i].classList.contains("active-0")) {
        carouselBoxChildren[i].classList.remove("active-0");
        carouselBoxChildren[i].classList.add("active-1");
        carouselBoxChildren[i + 1].classList.remove("active-1");
        carouselBoxChildren[i + 1].classList.add("active-2");
        carouselBoxChildren[i + 2].classList.remove("active-2");
        carouselBoxChildren[i + 2].classList.add("active-3");
        carouselBoxChildren[i + 3].classList.remove("active-3");
        carouselBoxChildren[i + 3].classList.add("active-4");
        carouselBoxChildren[i + 4].classList.remove("active-4");
        carouselBoxChildren[i + 4].classList.add("hide-right");
        carouselBoxChildren[carouselLength].classList.remove("hide-right");
        carouselBoxChildren[carouselLength].classList.add("hide-left");
      }
      if (carouselBoxChildren[i].classList.contains("hide-left")) {
        carouselBoxChildren[i].classList.remove("hide-left");
        carouselBoxChildren[i].classList.add("active-0");
      }
    }
    console.log(carouselBoxChildren);
  } else if (direction === "right") {
    for (let i = 0; i < carouselBoxChildren.length; i++) {
      if (carouselBoxChildren[i].classList.contains("active-4")) {
        carouselBoxChildren[i + 1].classList.remove("hide-rigth");
        carouselBoxChildren[i + 1].classList.add("active-4");
        carouselBoxChildren[i].classList.remove("active-4");
        carouselBoxChildren[i].classList.add("active-3");
        carouselBoxChildren[i - 1].classList.remove("active-3");
        carouselBoxChildren[i - 1].classList.add("active-2");
        carouselBoxChildren[i - 2].classList.remove("active-2");
        carouselBoxChildren[i - 2].classList.add("active-1");
        carouselBoxChildren[i - 3].classList.remove("active-1");
        carouselBoxChildren[i - 3].classList.add("active-0");
        carouselBoxChildren[i - 4].classList.remove("active-0");
        carouselBoxChildren[i - 4].classList.add("hide-left");
        carouselBoxChildren[i - 5].classList.remove("hide-left");
        carouselBoxChildren[i - 5].classList.add("hide-rigth");
        break;
      }
    }
  }
};

carouselBtnL.addEventListener("click", () => moveCarousel("left"));
carouselBtnR.addEventListener("click", () => moveCarousel("right"));
// ------------------------------------------------------------------
