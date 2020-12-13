'use strict';
// console.log(document.head);
// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.body.childNodes); 
// console.log(document.body.firstChild);
// console.log(document.body.lastChild); // показ подключения скриптовых файлов 

//console.log(document.querySelector('#current')); // получения элемента по id
//console.log(document.querySelector('#current').parentNode); // получения элемента по id, после получения его родителя 
//console.log(document.querySelector('.first'));  // получения class элемента 
//console.log(document.querySelector('#current').parentNode.parentNode);  // получения элемента выше родителя
//console.log(document.querySelector('[data-current="3"]').nextSibling);   // получения html атрибута ноты
//console.log(document.querySelector('[data-current="3"]').nextElementSibling) // получения следующего html атрибута 
//console.log(document.querySelector('#current').parentElement); // получения ноты элемента выше родителя

for(let node of document.body.childNodes){  // перебор и получения элемента 
    if(node.nodeName == '#text'){
        continue;
    }
    console.log(node);
}