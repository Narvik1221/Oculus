//import {carsList} from "./carList";
import {css} from "./utils";
//import {Sidebar} from "./Sidebar";


let mySwiper = new Swiper('.swiper', {
    direction: 'vertical',
    loop: true,
    spaceBetween: 10,

});
console.log(1)
const button = document.querySelectorAll('.product__button');


button.forEach(button => {
    button.addEventListener('click', function (event) {
        const currentlySelectedElem = document.querySelector(".product__button._active");
        if (currentlySelectedElem) {
            currentlySelectedElem.classList.remove("_active");
        }
        button.classList.add('_active');
        console.log(event.target.dataset.num);
        mySwiper.slideTo(event.target.dataset.num);
    });
})



const div = document.createElement('div');
div.classList.add('footer');
const body = document.body;
body.appendChild(div);
const container = document.createElement('div');
container.classList.add('container');
div.insertAdjacentElement('afterbegin', container);
const ul = document.createElement('ul');
ul.classList.add('list');
container.insertAdjacentElement('afterbegin', ul);




const content = document.querySelector('.list')

// carsList.forEach(el => {
//     content.insertAdjacentHTML('afterbegin', el.toHtml());
//
// })
// new Sidebar('.list', newBlock=>{
//
// });

// const carsHTML=carsList.map(car=>{
//     return generateAutoCard(car.brand,car.year);
// }).join('');
//
// const card=document.createElement('div');
// card.classList.add('card');
// card.innerHTML=carsHTML;
// container.insertAdjacentElement('beforebegin',card);


// const generateAutoCard = (brand, year) => {
//     return `
//     <div>
//     <h1>${brand}</h1>
//     <p>${year} год</p>
//     </div>
//     `;
// }


// const li = `
// <li class="list__item">one</li>
// <li class="list__item">two</li>
// <li class="list__item">three</li>
// `;
//
// ul.innerHTML = li;

// const img = document.createElement('img');
// img.src = '/Rectangle%208.db9cbaa3.png';
// img.classList.add('photo');
//
// const beforeUl = container.querySelector('ul');
// beforeUl.insertAdjacentElement('beforebegin', img);
//
// const del = document.querySelector('.list');
// del.children[1].classList.add('delete');
// del.children[1].remove();