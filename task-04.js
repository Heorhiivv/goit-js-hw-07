// 4 WORK //

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
let counterValue = document.querySelector("#value")

let value = 0;

function handleIncrement () {
  // counterValue.textContent = value += 1
value +=1
counterValue.textContent = value;
}
function handleDecrement () {
  // counterValue.textContent = value -= 1
value -=1
counterValue.textContent = value;
}

decrementBtn.addEventListener("click", handleDecrement)
incrementBtn.addEventListener("click", handleIncrement)