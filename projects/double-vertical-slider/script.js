const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slidesLength = slideRight.querySelectorAll("div").length;

let activeSlideIndex = 4;
let initStatus = false;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

update(sliderContainer.clientHeight);

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => {
  changeSlide("down");
});

const changeSlide = (direction) => {
  if (!initStatus) {
    init();
  }
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      //   activeSlideIndex = 0;
      activeSlideIndex = slidesLength - 1;
      alert("别后退，选择↓，去看看");
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      //   activeSlideIndex = slidesLength - 1;
      activeSlideIndex = 0;
      alert("一切皆有尽头，选择↑，回头看看");
    }
  }

  //   slideRight.style.transform = `translateY(-${
  //     activeSlideIndex * sliderHeight
  //   }px)`;
  //   slideLeft.style.transform = `translateY(${
  //     activeSlideIndex * sliderHeight
  //   }px)`;

  update(sliderHeight);
};

function update(sliderHeight) {
  slideRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  slideLeft.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
}

function init() {
  initStatus = true;
  slideLeft.classList.add("imageTransition");
  slideRight.classList.add("imageTransition");
}
