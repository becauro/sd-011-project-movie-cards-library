import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <div className="movie-list">
        {movies.map((card, index) => <MovieCard info={ card } key={ index } />)}
      </div>
    );
  }
}

export default MovieList;
