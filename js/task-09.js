const changeColorBtn = document.querySelector(".change-color");

changeColorBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = randomColor();
});

const randomColor = function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
