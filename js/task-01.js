//обираємо всі селектори з класом item і поміщаємо у змінну categoriesItems
const categoriesItems = document.querySelectorAll('.item');
//виводимо в консоль довжину отриманого масиву
console.log('Number of categories: ', categoriesItems.length);
// через цикл forEach звертаємось до першої дитини кожного елемента та також
//до довжини псевдомасиву children
categoriesItems.forEach((element) => {
  console.log('Category: ', element.firstElementChild.textContent);
  console.log('Elements: ', element.lastElementChild.children.length);
  console.log(element.lastElementChild.children);
});
