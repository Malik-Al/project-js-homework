'use strict';

const btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay');  

// btn.onclick = function(){           /// обработчик cобытий ,один из пример но не желательно к использованию
//     alert('Click');
// };

// btn.addEventListener('click', () =>{  /// обработчик cобытий 
//     alert('Click');
// });

// btn.addEventListener('mouseenter', () =>{  /// cобытия при наведение мыши 
//     console.log('Hover');
// });

// btn.addEventListener('mouseenter', (e) =>{
//     console.log(e.target);                    /// отображения элементов в консоль 
//     e.target.remove();                        /// удаления элементов                       
// });

// btn.addEventListener('click', (e) =>{       /// 'click' удаления элементов       
//     e.target.remove();
// });

// const deleteElement = (e) =>{                  // всплытие событий по клику , вложенность элементов , поднимаясь по иерархий
//     console.log(e.target);                   
//     // console.log(e.currentTarget);              // вложенность элементов  по иерархий 
//     console.log(e.type);
// };
// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);


const btns = document.querySelectorAll('button');
const deleteElement = (e) =>{                  
    console.log(e.target);                          /// обработчик событий для всех элементов   
    console.log(e.type);
};
btns.forEach(btn => {
    btn.addEventListener('click', deleteElement);    
});


// const btns = document.querySelectorAll('button');
// const deleteElement = (e) =>{                  
//     console.log(e.target);                          /// обработчик событий для всех элементов,                                                  
//     console.log(e.type);                            /// только для одного клика  
// };
// btns.forEach(btn => {
//     btn.addEventListener('click', deleteElement, {once: true});    
// });




// const link = document.querySelector('a');
// link.addEventListener('click', function (event) {
//     event.preventDefault();
//     console.log(event.target);    
// });