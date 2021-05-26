import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((movie, title) => (
          <MovieCard movie={ movie } key={ title } />
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};

export default MovieList;
