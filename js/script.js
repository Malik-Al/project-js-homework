"use strict";

let numderOfFilms;

function start(){
    numderOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numderOfFilms == '' || numderOfFilms == null || isNaN(numderOfFilms)){
        numderOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }    
}

start();    

const personlMovieDB = {
    count:numderOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};


function rememberfilms(){
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
}
rememberfilms();


function detecPersonalLevel(){
    if (personlMovieDB.count < 10){
        console.log("Просмотренно мало фильмов");
    }else if (personlMovieDB.count >= 10 && personlMovieDB.count < 30){
        console.log('Классический зритель');
    }else if(personlMovieDB.count >= 30){
        console.log('Вы киноман');
    }else{
        console.log('Ошибка');
    }
}
detecPersonalLevel();

function showMyDB(hidden){
    if(!hidden){
        console.log(personlMovieDB);
    }
}

showMyDB(personlMovieDB.privat)



function writeYourGenres(){
    for (let i = 1; i <= 3; i++){
        personlMovieDB.genres[i-1] = prompt(`Ваш любимый жанр по номером ${i}`);
    }
}

writeYourGenres();

