"use strict";
//ТЗ 1 
// Имеется массив с элементами: ['молоко', 'пиво', 'пиво', 'молоко', 'молоко']. 
// Необходимо запустить в цикле проверку для каждого элемента массива - когда встречается 
// элемент со значением "молоко", в консоль выводить строку "хорошо", 
// если встречается элемент со значением "пиво", выводить в консоль строку "плохо".


// let a = ['молоко', 'пиво', 'пиво', 'молоко', 'молоко'];
// let i;

// for (i = 0; i < a.length; ++i){
//     if(a[i] == 'молоко'){
//         console.log('хорошо');
//     }else if(a[i] == 'пиво'){
//         console.log('плохо');
//     }    
// }


//ТЗ 2
// Имеется массив чисел. Необходимо написать функцию, которая будет находить среднее арифметическое 
// всех чисел этого массива и возвращать его. Вызвать функцию для нижеперечисленных массивов, 
// результаты работы функции выводить в консоль.

// Массивы: 
// [1, 5, 12, 4, 3]
// [2, 3, 4, 5, 6, 7, 8, 9, 10]
// [3, 10, 17]

// let nums = [1, 5, 12, 4, 3];
// let nums_1 = [2, 3, 4, 5, 6, 7, 8, 9, 10];
// let nums_2 = [3, 10, 17];

// const average = nums.reduce((a, b) => a + b, 0) / nums.length;
// const average_1 = nums_1.reduce((a, b) => a + b, 0) / nums_1.length;
// const average_2 = nums_2.reduce((a, b) => a + b, 0) / nums_2.length;

// console.log(` Среднее арифмитическое: ${average}`);
// console.log(` Среднее арифмитическое: ${average_1}`);
// console.log(` Среднее арифмитическое: ${average_2}`);


//ТЗ 3
// Написать функцию при вызове которой будет всплывать окно с вопросом-загадкой 
// "У квадратного стола отпилили один угол. Сколько теперь углов у него стало?", 
// на который пользователь может ответить в свободной форме. 
// Если пользователь указывает ответ "5" или "пять", то выходит сообщение "Ответ верный" 
// в противном случае сообщение "Ответ неверный". Ответ также показывается во всплывающем окне.

// function fucTask(){
//     let task = prompt("У квадратного стола отпилили один угол. Сколько теперь углов у него стало?");
//     if (task == 5){
//         alert("Ответ верный");
//     }else if (task == 'пять'){
//         alert("Ответ верный");
//     }else{
//         alert("Ответ неверный");
//     }
// }
// fucTask();


                // 1-тз
// const div = document.getElementById('string-6');
// console.log(div);
// const div1 = document.getElementById('string-5');
// console.log(div1);
// const div2 = document.getElementById('string-4');
// console.log(div2);
// const div3 = document.getElementById('string-3');
// console.log(div3);
// const div4 = document.getElementById('string-2');
// console.log(div4);
// const div5 = document.getElementById('string-1');
// console.log(div5);

             // 2-тз
     
const element = document.querySelectorAll('.element');
element[0].style.color = 'red';
element[1].style.color = 'red';
element[2].style.color = 'red';
element[3].style.color = 'green';
element[4].style.color = 'green';
element[5].style.color = 'green';

            // 3-тз
const container = document.getElementById('container');
console.log(container);


