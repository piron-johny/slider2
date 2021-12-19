const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const sliderCounter = mainSlide.querySelectorAll("div").length;
const container = document.querySelector(".container");
let activeSlideIndex = 0;

sidebar.style.top = `-${(sliderCounter - 1) * 100}vh`;

upBtn.addEventListener("click", () => changeSlide("up"));
downBtn.addEventListener("click", () => changeSlide("down"));

function changeSlide(direction) {
  if (direction === "up") {
    activeSlideIndex += 1;
    if (activeSlideIndex === sliderCounter) {
      activeSlideIndex = 0;
    }
  }
  if (direction === "down") {
    activeSlideIndex -= 1;
    if (activeSlideIndex < 0) {
      activeSlideIndex = sliderCounter - 1;
    }
  }

  const height = container.clientHeight;
  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}
