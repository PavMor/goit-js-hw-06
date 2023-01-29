// const targetBtn = document.querySelector(".js-target-btn");
// const addListenerBtn = document.querySelector(".js-add-listener");
// const removeListenerBtn = document.querySelector(".js-remove-listener");

// addListenerBtn.addEventListener("click", (event) => {
//   console.log(event);
//   console.log("Hanging event listenet to target button");

//   targetBtn.addEventListener("click", onTargetBtnClick);
// });

// removeListenerBtn.addEventListener("click", (event) => {
//   console.log("Remove event listener from target button");

//   targetBtn.removeEventListener("click", onTargetBtnClick);
// });

// function onTargetBtnClick() {
//   console.log("Click on target button");
// }

// const form = document.querySelector(".js-register-form");

// form.addEventListener("submit", onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();

//   const formData = new FormData(event.currentTarget);

//   console.log(formData);

//   formData.forEach((value, name) => {
//     console.log("onFormSubmit -> name", name);
//     console.log("onFormSubmit -> value", value);
//   });
// }

// const form = document.querySelector(".js-register-form");
// form.addEventListener("submit", onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();

// variant 1

//   const formElements = event.currentTarget.elements;

//   console.dir(formElements);

//   const mail = formElements.email.value;
//   const password = formElements.password.value;
//   const subscription = formElements.subscription.value;

//   const formData = {
//     mail,
//     password,
//     subscription,
//   };

//   console.log(formData);

// variant 2

//   const formData = new FormData(event.currentTarget);

//   formData.forEach((value, name) => {
//     console.log("onFormSubmit -> name", name);
//     console.log("onFormSubmit -> value", value);
//   });
// }

/*
 * Паттерн «Объект ссылок»
 *
 * События
 * - focus и blur
 * - input и change
 * - Чекбоксы и свойство checked
 */

const refs = {
  input: document.querySelector(".js-input"),
  nameLabel: document.querySelector(".js-button > span"),
  licenseCheckbox: document.querySelector(".js-license"),
  btn: document.querySelector(".js-button"),
};

// refs.input.addEventListener('focus', onInputFocus);
// refs.input.addEventListener('blur', onInputBlur);
// refs.input.addEventListener('change', onInputChange);
// refs.input.addEventListener('input', onInputChange);

refs.input.addEventListener("input", onInputChange);
refs.licenseCheckbox.addEventListener("change", onLicenseChange);

function onInputFocus() {
  console.log("Инпут получил фокус - событие focus");
}

function onInputBlur() {
  console.log("Инпут потерял фокус - событие blur");
}

function onInputChange(event) {
  refs.nameLabel.textContent = event.currentTarget.value;
}

function onLicenseChange(event) {
  refs.btn.disabled = !event.currentTarget.checked;
}
