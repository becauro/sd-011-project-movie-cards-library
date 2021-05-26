import React from 'react';
import Data from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        <MovieCard movie={ Data } />
      </div>
    );
  }
}

export default MovieList;
