const inputControls = document.querySelector('#controls > input');
const boxes = document.querySelector("#boxes");
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
 
const createBoxes = (amount) => {
  const array = [];
  let width = 30;
  let height = 30;
  for (let i = 0; i < amount; i++) {
    const divItem = document.createElement('div');
    divItem.style.width = width + 'px';
    divItem.style.height = height + 'px';
    width += 10;
    height += 10;
   
    let redColor = Math.round(Math.random()*255);
    let greenColor = Math.round(Math.random()*255);
    let blueColor = Math.round(Math.random()*255);

      divItem.style.background = `rgb(${redColor}, ${greenColor}, ${blueColor})`;
        array.push(divItem);
      }  return array
    }
    
    function handleRender () {
      createBoxes(+inputControls.value).forEach(box => {
        boxes.append(box);
      })
      console.log(createBoxes(+inputControls.value));
    }

    function handleDestroy () {
      boxes.innerHTML = "";
      inputControls.value = "";
    }

    renderBtn.addEventListener('click', handleRender) 
    destroyBtn.addEventListener('click', handleDestroy);
   