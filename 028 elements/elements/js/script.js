'use strict';
                /// DOM 

const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button');
console.log(btns);

const circles = document.getElementsByClassName('circle'); 
console.log(circles);

const hearts = document.querySelectorAll('.heart');
console.log(hearts)

hearts.forEach(item =>{
    console.log(item);
});

const oneHart = document.querySelector('.heart');
console.log(oneHart);