// ------------------------------------------------------------------
// carousel ---------------------------------------------------------
let carouselBox = document.getElementById("carousel-box");
let carouselBtnL = document.getElementById("carousel-btn-l");
let carouselBtnR = document.getElementById("carousel-btn-r");

const moveCarousel = (direction) => {
  let carouselBoxPos = carouselBox.style.transform.slice(11, -3);

  if (carouselBoxPos === "") {
    carouselBoxPos = 0;
  }

  if (direction === "left") {
    carouselBox.style.transform = `translateX(${
      270 + parseInt(carouselBoxPos)
    }px)`;
    console.log("ok l");
  } else if (direction === "right") {
    carouselBox.style.transform = `translateX(${
      -270 + parseInt(carouselBoxPos)
    }px)`;
    console.log(`translateX(${-270 + parseInt(carouselBoxPos)}px)`);
    console.log("ok r");
  }
};

carouselBtnL.addEventListener("click", () => moveCarousel("left"));
carouselBtnR.addEventListener("click", () => moveCarousel("right"));
// ------------------------------------------------------------------
