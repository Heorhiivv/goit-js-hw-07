// 1 WORK //
const categories = document.querySelectorAll('#categories > li')
console.log(`В списке ${categories.length} категории`);

[...categories].map((el) => {
 let category = el.children[0].textContent
 console.log(category);
 let animals = el.querySelectorAll('li')
 console.log(`Категория : ${category}\n Количество элементов ${animals.length}`);
})


