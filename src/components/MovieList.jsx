import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

// implement MovieList component here
class MovieList extends Component {
  render() {
    const { movies } = this.props;

    const cards = movies
      .map((movie) => <MovieCard movie={ movie } key={ movie.title } />);

    return <div className="movie-list">{cards}</div>;
  }
}

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
