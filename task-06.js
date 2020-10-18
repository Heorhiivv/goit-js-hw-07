// WORK 6 //

const validationInput = document.querySelector('#validation-input');
const dataLength = validationInput.getAttribute('data-length');

validationInput.addEventListener('blur', () => {
  if (validationInput.value.length !== dataLength) {
    validationInput.classList.add('invalid');
  } 
  if (validationInput.value.length == dataLength) {
  validationInput.classList.remove('invalid');
  validationInput.classList.add('valid');
  };
})