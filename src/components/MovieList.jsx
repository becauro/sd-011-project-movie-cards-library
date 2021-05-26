// implement MovieList component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

export default class MovieList extends Component {
  render() {
    const { movies } = this.props;

    return movies.map((movieData) => (
      <MovieCard key={ movieData.title } movie={ movieData } />
    ));
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf({}).isRequired,
};
