import React, { Component } from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <main className="movie-list">
        {movies.map((movie, index) => <MovieCard movie={ movie } key={ index } />)}
      </main>
    );
  }
}

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.array,
};

MovieList.defaultProps = {
  movies: [],
};
