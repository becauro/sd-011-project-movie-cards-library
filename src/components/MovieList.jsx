import React from 'react';
import MovieCard from './MovieCard';
import Data from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <p>{Data.map((movie, index) => <MovieCard movie={ movie } key={ index } />)}</p>
    );
  }
}

export default MovieList;
