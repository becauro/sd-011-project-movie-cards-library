import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.map((item) => (
        <MovieCard key={ item.title } movie={ item } />
      ))}
    </div>
  );
}

export default MovieList;
