const categoriesEl = document.querySelector("#categories");
const itemEl = categoriesEl.querySelectorAll(".item");
console.log("Number of categories:", itemEl.length);
itemEl.forEach((item) => {
  console.log("Category:", item.firstElementChild.textContent);
  console.log("Elements:", item.lastElementChild.children.length);
});
