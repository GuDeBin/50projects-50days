const body = document.body;
const slides = document.querySelectorAll(".slider");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let activeSlide = 0;

setBgToBody();
setActiveSlide();
/**
 * 更换背景图
 */
function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

/**
 * 设置当前背景图
 */
function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[activeSlide].classList.add("active");
}

/**
 * 左侧按钮点击事件
 */
leftBtn.addEventListener("click", () => {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  setBgToBody();
  setActiveSlide();
});

/**
 * 右侧按钮点击事件
 */
rightBtn.addEventListener("click", () => {
  activeSlide++;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  setBgToBody();
  setActiveSlide();
});
