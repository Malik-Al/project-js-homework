const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block'); 



wrapper.addEventListener('click', (event) => {              // делегирование событий
    if (event.target && event.target.tagName == "BUTTON"){  // проверка на существующее event.target
        console.log("Helo")
    }
});
const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);










// console.log(btns[0].classList.length)   // указывает список классов 
// console.log(btns[0].classList.item(0))  // вывод определенного класса 
// console.log(btns[0].classList.add('red')); // добавление класса 
// console.log(btns[0].classList.remove('blue'));  // удаление класса
// console.log(btns[0].classList.toggle('blue'));  // проверяетесли класс есть удаляет если нет добавляет


//btns[0].addEventListener('click', () => {
//    if (!btns[1].classList.contains('red')){  // проверид если нет red добавить по клику 
//        btns[1].classList.add('red');
//    }else{
//        btns[1].classList.remove('red');      // иначе удалить   
//    }
//})


//btns[0].addEventListener('click', () => {    // сокращенный вариант проверки по клику если нет добавить иначе удалить
//    btns[1].classList.toggle('red');
//})


//console.log(btns[0].className);  // className вывод всех классов на заданном элементе