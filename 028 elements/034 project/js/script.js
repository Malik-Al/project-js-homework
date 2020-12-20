'use strict';

// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

window.addEventListener('DOMContentLoaded', () => {            
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {             /// отработка событий на мобильном устройстве  
        e.preventDefault();
        console.log('Start');
        // console.log(e.touches);                             // отоброжает количество пальцев на сенсоре
        // console.log(e.targetTouches);                       // отоброжает сколько пальцев находиться на определенном объекте 
    });

    // box.addEventListener('touchmove', (e) => {                              
    //     e.preventDefault();
    //     console.log('Move');
    // });

    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();
    //     console.log('End');
    // });
});