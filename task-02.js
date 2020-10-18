// 2 WORK //

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const dish = document.querySelector('#ingredients');

ingredients.map(el => {
  let item = document.createElement('li')
  item.textContent = el;
  dish.append(item);
})