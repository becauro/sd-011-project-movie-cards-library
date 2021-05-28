// implement MovieList component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      movies.map((movieItem) => <MovieCard movie={ movieItem } key={ movieItem.title } />)
    );
  }
}

MovieList.prototypes = {
  movies: PropTypes.string.isRequired,
};

export default MovieList;
