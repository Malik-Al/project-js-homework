"use strict";

// function hello(){
//     console.log("Hello world");
// }
// hello();

// function hi(){
//     console.log('Say hi!');
// }
// hi();
// const arr = [1, 14, 4, 30, 54],
//      sorted = arr.sort(compareNum);
   
// function compareNum(a, b){
//     return a - b;
// }     
// console.log(sorted);

//To String
//1)
console.log(typeof(String(null)));
console.log(String(null));
console.log(typeof(String(4)));

//2) конкатенация строк
console.log(typeof(5 + ""));

const num = 5;
console.log("https://vk.com/catalog/" + num);
const fonSize = 26 + 'px';
console.log(fonSize);

// To numder
// 1)
console.log(typeof(Number('5')));

// 2)
console.log(typeof(+'5'));

// 3)
console.log(typeof(parseInt('15px',10)));

// To boolean
// 1)
let switcher = null;
if (switcher){
    console.log('Working...');
}
switcher = 1;
if (switcher){
    console.log('Working...');
}
// 2)
console.log(typeof(!!"4444444"));

