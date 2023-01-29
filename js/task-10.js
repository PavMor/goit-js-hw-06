function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
input.addEventListener("input", createAmount);
createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);
function createAmount(event) {
  return event.currentTarget.value;
}
function createBoxes(amount) {
  amount = input.value;
  const basicSize = 30;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const size = basicSize + i * 10;
    const div = document.createElement("div");
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}`;
    fragment.appendChild(div);
  }
  boxes.appendChild(fragment);
}
function destroyBoxes() {
  boxes.textContent = "";
  input.value = "";
}
