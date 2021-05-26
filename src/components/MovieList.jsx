import React, { Component } from 'react';
import propTypes from 'prop-types';
import MovieCard from './MovieCard';


class MovieList extends Component {
  render() {
    const movies = this.props.movies;
    return (
      <section>
        { movies.map((movie) => <MovieCard movie={movie} />) }
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: propTypes.array.isRequired,
};

export default MovieList;
