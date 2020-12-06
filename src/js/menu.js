import menuTemplate from '../templates/menu.hbs';
import menuList from '../data/menu.json';
// console.log(menuList);

const menuRef = document.querySelector('.js-menu');
// вставка об'єкта в шаблон
const newMenu = menuTemplate(menuList);
// console.log(newMenu);
menuRef.insertAdjacentHTML('afterbegin', newMenu);
