"use strict";
const numberOfFilms = +prompt('Сколько фильмов уже посмотрели?', '');

let personalMovieDB = {
	count: alert(numberOfFilms),
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

const a = prompt('Один из просмотренных последних фильмов?', ''),
	b = prompt('На сколько оцените его?', ''),
	c = prompt('Один из просмотренных последних фильмов?', ''),
	d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

