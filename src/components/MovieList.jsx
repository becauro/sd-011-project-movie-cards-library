import React, { Component } from 'react';
import propTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        { movies.map((movie, index) => <MovieCard key={ index } movie={ movie } />) }
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: propTypes.array,
};

export default MovieList;
