import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        { movies.map((movie, index) => <MovieCard movie={ movie } key={ index } />) }
      </div>
    );
  }
}

export default MovieList;
