import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <ul className="movie-list">
        {movies.map((movie) => (
          <MovieCard movie={ movie } key={ movie.title } />
        ))}
      </ul>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      storyline: PropTypes.string.isRequired,
      imagePath: PropTypes.string.isRequired,
      rating: PropTypes.number,
    }),
  ),
};

MovieList.defaultProps = {
  movies: [],
};
export default MovieList;
