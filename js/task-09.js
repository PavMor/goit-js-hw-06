function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColorBtnRef = document.querySelector(".change-color");
const colorNameRef = document.querySelector(".color");
changeColorBtnRef.addEventListener("click", onChangeColorBtnClick);
function onChangeColorBtnClick() {
  document.body.style.backgroundColor = getRandomHexColor();
  colorNameRef.innerHTML = document.body.style.backgroundColor;
}
