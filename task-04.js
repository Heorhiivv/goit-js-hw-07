// 4 WORK //

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
let counterValue = document.querySelector("#value")

let value = 0;

decrementBtn.addEventListener("click", handleDecrement)
incrementBtn.addEventListener("click", handleIncrement)

function handleIncrement () {
  counterValue.textContent = value += 1
}
function handleDecrement () {
  counterValue.textContent = value -= 1
}