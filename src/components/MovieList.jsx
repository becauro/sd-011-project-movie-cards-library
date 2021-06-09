import React, { Component } from 'react';
import MovieCard from './MovieCard';
import '../App.css';
import PropTypes from 'prop-types';
class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        {movies.map((movie) => <MovieCard movie={ movie } key={ movie.title } />)}
      </section>
    );
  }
}

export default MovieList;
