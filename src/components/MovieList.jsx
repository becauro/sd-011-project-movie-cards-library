import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props; // criando uma prop `movies` que é um array de objetos com informações de um filme
    return (
    // Renderiza MovieCard, utilizei a função `map` para renderizar uma lista, passei uma key para cada `<MovieCard />` renderizado
      <div className="movie-list">
        {movies.map((movie) => <MovieCard movie={ movie } key={ movie.title } />)}
      </div>

    );
  }
}
MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
