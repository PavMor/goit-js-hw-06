const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredList = document.querySelector("#ingredients");
const createEl = (text) => {
  const ingredList = document.createElement("li");
  ingredList.textContent = text;
  ingredList.classList.add("item");
  return ingredList;
};

const addItems = (array) => {
  ingredList.append(...array.map((element) => createEl(element)));
};
addItems(ingredients);
