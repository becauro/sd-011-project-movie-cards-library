import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.map((item) => (
        <MovieCard key={item.title} movie={item} />
      ))}
    </div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

export default MovieList;
