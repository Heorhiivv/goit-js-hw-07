let inputArea = document.querySelector('#font-size-control')
let textArea = document.querySelector('#text')

inputArea.addEventListener('input', handleInput)

function handleInput () {
   textArea.style.fontSize = inputArea.value +'px'
}