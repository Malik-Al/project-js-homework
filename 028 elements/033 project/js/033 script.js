'use strict';

/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */




document.addEventListener('DOMContentLoaded', () => {  // с работает после полной загрузки DOM структуры

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),      
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector(".promo__interactive-list"),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]'); 
    

    addForm.addEventListener('submit', (event) =>{      // Колбек функция, обработка submit
        event.preventDefault();                         // измениет поведение браузера по умолчанию 

        let newFilm = addInput.value;                   // возвращает значения по клику    
        const favorite = checkbox.checked;              // возвращает булево значения   

        if (newFilm){
            if (newFilm.length > 21){                       // высчитать количество вводных данных 
                newFilm = `${newFilm.substring(0,22)}...`;  // обрезать если превышает 23 вводных данных и добавить троеточие
            }
            if(favorite){
                console.log("Добавляем любимый фильм");
            }
            movieDB.movies.push(newFilm);                 // Добавление фильма в конец массива
            sortArr(movieDB.movies);                      // Сортировка фильмов                          
            createMovieList(movieDB.movies, movieList);
        }    

        event.target.reset();

    });      
    

    
    const deleteAdv = (arr) => {
        arr.forEach(item => {   
            item.remove();
        });
    };
   
    
    
    const makeChanges = () => {
        genre.textContent = 'Драма';
        poster.style.backgroundImage = "url('img/bg.jpg')";
    };
  
 

    const sortArr = (arr) => {
        arr.sort();
    };
    
 
    
    function createMovieList(films, parent){
        parent.innerHTML = "";
        sortArr(films);
        films.forEach((film, i ) =>{
            parent.innerHTML += `
            <li class="promo__interactive-item">${i +1} ${film}
                <div class="delete"></div>
            </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn,i) => {   // перебор данных
            btn.addEventListener('click', () =>{                    // объявления событий по клику 
                btn.parentElement.remove();                         // удаление данных
                movieDB.movies.splice(i,1);                         // удаление из базы данных
                createMovieList(films, parent);                     // рекурсия для обновления нумераций     
            });
        });
    }


    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);





}); // the end

