// implement MovieList component here
/*  3 - Crie um componente <MovieList />
Crie um componente que represente toda a área com os cartões de filmes. <MovieList /> deve receber uma prop movies, que é um array de objetos com informações de um filme.

O que será verificado:

Renderize o componente <MovieList /> */
import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div className="movie-list">
        {movies
          .map((mov, index) => <MovieCard key={ movies[index].title } movie={ mov } />)}
      </div>
    );
  }
}

export default MovieList;
