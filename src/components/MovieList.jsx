import React, { Component } from 'react';
import propTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <section className="movie-list">
        { movies.map((movie) => <MovieCard key={ movies.title } movie={ movie } />) }
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: propTypes.arrayOf(propTypes.object.isRequired),
};

MovieList.defaultProps = {
  movies: ['not found'],
};

export default MovieList;
