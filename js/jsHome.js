"use strict";

// const num = 50;
// if (num < 49){
//     console.log('Error');
// }else if(num > 100){
//     console.log('Много');
// }else {
//     console.log('Ok!');
// }

// (num === 50) ? console.log('Ok!') : console.log('Error');


// const num = 50;
// switch(num){
//     case 49:
//         console.log('No');
//         break;
//     case 100:
//         console.log('error');
//         break;
//     case 50:
//         console.log('Ok');
//         break;
//     default:
//         console.log('Noooyyy');
//         break;            
// }

// let num = 50;

// do {
//     console.log(num);
//     num++;
// }
// while(num <= 55);


// let num = 50;

// for (i = 1; i < 10; i++){
//     if(i === 6){
//         continue;
//     }
//     console.log(i);
    
// }




// function calc(a,b){
//     return (a + b);
// }
// console.log(calc(2,3));
// console.log(calc(6,3));
// console.log(calc(3,3));


// function ret(){
//     let num = 50;
//     return num;
// }
// const anothernum = ret();
// console.log(anothernum);

// const logger = function(){
//     console.log('hello');

// }
// logger();


// const calc = (a , b ) => {
//     console.log('1');
//     return a + b;
// }


// const str = 'tesTe';
// console.log(str.toLowerCase());
// console.log(str);

// const fruit = 'Some fruit';
// console.log(fruit.indexOf('fruit'));

// const logg = 'hello world';
// // console.log(logg.slice(6));
// // console.log(logg.substring(6));
// console.log(logg.substr(6,1));

// const num = 12.2;
// console.log(Math.round(num));

// const test = '12.2px';
// console.log(parseInt(test));
// console.log(parseFloat(test));

// function first (){
//     setTimeout(function(){
//         console.log(1);
//     },500);
// }
// function second(){
//     console.log(2);
// }   
// first();
// second();



// // callback

// function learnJS(lang, callback){
//     console.log(`Я учу ${lang}`);
//     callback();
// }

// function done(){
//     console.log('я прошел этот урок! ');

// }

// learnJS('Javascript', done);



// const options = {
//     name : "test",
//     width: 1024,
//     heidht: 1024,
//     colors:{
//         border: "black",
//         bg: 'red'
//     },
//     makeTest: function(){   // использование метода в нутри объекта
//         console.log("Test"); 
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors; //деструктуризация объектов 
// console.log(bg);

// console.log(Object.keys(options).length); // вернуть каличество 
//console.log(options["colors"]["bg"]); // вернуть значения объекта ключа



// for(let key in options){
//     if (typeof(options[key]) === 'object'){
//         for (let i in options[key]){
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`)
//         }
//     }
//     else{
//         console.log(`Свойство ${key} имеет значение ${options[key]}`)
//     }
// }


// console.log(options.colors)
// delete options.name;
// console.log(options);


// const arr = [1, 2, 3, 6, 8];
//перебор по индексу по каличеству 
//в массиве break не работает в forEach 
//     arr.forEach(function(items, i, arr ){   
//     console.log(`${i}: ${items} внутри массива ${arr}`);
//     })
// //



// console.log(arr.length); //метод length состоит из последнего индекса +1
// arr.pop();
// arr.push(10); // Добавления элемента в конце 
// console.log(arr); // Удаление последнего элемента 

// for (let i = 0; i < arr.length; i++){ // Перебор элементов массива в цикле 
//     console.log(arr[i]);
// }

// for(let value of arr){  //Перебор массива через of
//     console.log(value);
// }

// const str = prompt("","");
// const products = str.split(","); метод склеевания
// console.log(products);
// products.sort(); метод сортировки 
// console.log(products.join(';')); метод разделения

// const arr = [5,23,11, 22, 33, 16, 8];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a,b){ // сортировка от меньшего к большему  
//     return a - b;
// }

// let a = 5;
//     b = a;
// b = b + 5;

// console.log(b);    
// console.log(a);    

// const obj = {
//     a: 5,
//     b: 1
// };
// const copy = obj;
// copy.a = 10;
// console.log(copy);
// console.log(obj);


function copy(mainObj){         // функция копирования
    let ObjCopy = {};

    let key;
    for (key in mainObj){
        ObjCopy[key] = mainObj[key]
    }
    return ObjCopy;
}

const numder = {
    a:2,
    b:5,
    c:{
        x:7,
        y:4
    }
};

const newNumder = copy(numder); // копирования

newNumder.a = 10;          // копирования 
newNumder.c.x = 10;
console.log(newNumder);
console.log(numder);

const add = {
    d:7,
    e:20
};
// console.log(Object.assign(numder, add));   // поверхностное копирования 
const clone = Object.assign({}, add);         // поверхностное копирования объектов  
clone.d = 20;
console.log(add);
console.log(clone);

      // поверхностное копирования объектов  
const oldArray = ['a', 'b', 'c', 'd'];
const newArray = oldArray.slice();
newArray[0] = 'f';
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook']; // оператор разворота 

console.log(internet);   

// оператор разворота 
function log(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 5, 7];
log(...num);


const array = ['a', 'b'];
const newArraay = [...array];
const g = {
    one:1,
    two:2
};
const newObj = {...g};


console.log(newObj);