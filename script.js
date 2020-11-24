const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,


};

const a = prompt('Какой последний фильм ты посмотрел?', ''),
      b = prompt('Твоя оценка фильму', ''),
      s = prompt('Какой последний фильм ты посмотрел?', ''),
      d = prompt('Твоя оценка фильму', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[s] = d;

console.log(personalMovieDB);