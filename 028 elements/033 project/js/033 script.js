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
    

    addForm.addEventListener('submit', (event) =>{   // Колбек функция, обработка submit
        event.preventDefault();

        const newFilm = addInput.value;
        const favorite = checkbox.checked;

        movieDB.movies.push(newFilm);                 // Добавление фильма в конец массива
        movieDB.movies.sort();                        // Сортировка фильмов                          
    });      
    

    adv.forEach(item => {   
        item.remove();
    });
    
    
    genre.textContent = 'Драма';
    
   
    poster.style.backgroundImage = "url('img/bg.jpg')";
    
 
    movieDB.movies.sort();
 
    
    function createMovieList(){
        movieList.innerHTML = "";
        movieDB.movies.forEach((film, i ) =>{
            movieList.innerHTML += `
            <li class="promo__interactive-item">${i +1} ${film}
                <div class="delete"></div>
            </li>
            `;
        });
    }







}); // the end

