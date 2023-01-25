сonst input = document.querySelector('#validation-input');
input.addEventListener('blur', onInputBlur);
function onInputBlur() {
    if (Number(input.dataset.length) === input.value.length) {
        input.classList.remove("invalid");
        input.classList.add('valid');
    } else {
        input.classList.remove("valid");
        input.classList.add('invalid');
    }
}