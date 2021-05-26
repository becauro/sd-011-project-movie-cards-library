import React, { Component } from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';


class MovieList extends Component {
  render() {
    const movies = this.props.movies;
    return (
      <section>
        { movies.map((movie) => <MovieCard movie={movie} />) }
      </section>
     );
  }
};

MovieList.PropTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieList;
