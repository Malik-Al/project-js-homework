"use strict";


const personlMovieDB = {
    count:0,
    movies:{},
    actors:{},
    genres:[],
    privat: false,
    start: function(){
        personlMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personlMovieDB.count  == '' || personlMovieDB.count  == null || isNaN(personlMovieDB.count )){
            personlMovieDB.count  = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }    
    },
    rememberfilms:function(){
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
    },
    detecPersonalLevel: function(){
        if (personlMovieDB.count < 10){
            console.log("Просмотренно мало фильмов");
        }else if (personlMovieDB.count >= 10 && personlMovieDB.count < 30){
            console.log('Классический зритель');
        }else if(personlMovieDB.count >= 30){
            console.log('Вы киноман');
        }else{
            console.log('Ошибка');
        }
    },
    showMyDB:function(hidden){
        if(!hidden){
            console.log(personlMovieDB);
        }
    },

    togglevisbleMyDB:function(){
        if (personlMovieDB.privat){
            personlMovieDB.privat = false;
        }else {
            personlMovieDB.privat = true;
        }
    },

    writeYourGenres: function(){
        for (let i = 1; i <= 3; i++){
            let genre = prompt(`Ваш любимый жанр по номером ${i}`);
            if(genre === '' || genre == null ){
                console.log('Вы ввели некорректно данные или не ввели их вовсе ');
                i--;
            }else{
                personlMovieDB.genres[i-1] = genre;
            }
        }
        personlMovieDB.genres.forEach((items, i) => {
            console.log(`Любимый жанр ${i+1}-это ${items}`);
        });
    }

};




