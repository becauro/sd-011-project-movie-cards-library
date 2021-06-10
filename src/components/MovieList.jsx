import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

export default function MovieList(props) {
  return (
    props.movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
