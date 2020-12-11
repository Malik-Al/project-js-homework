'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width:500px'; // упращенный вариант к обращению к стилям 

btns[1].style.borderRadius = '100%';
circles[1].style.backgroundColor ='red'; 

// for (let i = 0; i < hearts.length;i++){
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item =>{
    item.style.backgroundColor = 'blue';
});
            
const div = document.createElement('div');

// const div = document.createTextNode('div'); // устаревший вариант 

div.classList.add('black');
document.body.append(div);

// wrapper.append(div);
// wrapper.prepend(div);
// hearts[0].before(div);
// hearts[0].after(div);

// circles[0].remove();

hearts[1].replaceWith(circles[1]); // замена местами элементами 
div.innerHTML= '<h1>hello world</h1>';
div.textContent = 'hello';


