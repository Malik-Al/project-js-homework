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

const numderOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personlMovieDB = {
    count:numderOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};


for (let i = 0; i < 2; i++){
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?',''); 

    if (a != null && b != null && a != '' && b != '' && a.length < 50){
        personlMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }       

}

if (personlMovieDB.count < 10){
    console.log("Просмотренно мало фильмов");
}else if (personlMovieDB.count >= 10 && personlMovieDB.count < 30){
    console.log('Классический зритель');
}else if(personlMovieDB.count >= 30){
    console.log('Вы киноман');
}else{
    console.log('Ошибка');
}

console.log(personlMovieDB);
