import React from 'react';
import MovieCard from './MovieCard';
import data from '../data';

function MovieList({ movies }) {
  return (
    <div>
      {movies.map((item) => (
        <MovieCard key={item.title} movie={item} />
      ))}
    </div>
  );
}

export default MovieList;
