// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';

export default function MovieList(props) {
  const { movies } = props;
  const moviesTitles = movies.map((movie, id) => <div key={ id }>{movie.title}</div>);

  return (
    <div>{moviesTitles}</div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
