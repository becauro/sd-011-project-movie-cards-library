import React from 'react';
import MovieCard from './MovieCard';
import data from '../data';

class MovieList extends React.Component {
  render() {
    return this.props.movies.map((movie) => (
      <MovieCard movie={ movie } key={ movie.title } />
    ));
  }
}

export default MovieList;
