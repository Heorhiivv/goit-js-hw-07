// WORK 5 //

let inputArea = document.querySelector('#name-input')
let spanArea = document.querySelector('#name-output')

inputArea.addEventListener('input', handleInput)

function handleInput () {
  inputArea.value === "" ? spanArea.textContent = 'незнакомец' : spanArea.textContent = inputArea.value
}
