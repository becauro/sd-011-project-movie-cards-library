import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        { movies.map((dataMovie) => <MovieCard key={ dataMovie.title } />) }
      </div>
    );
  }
}

export default MovieList;

MovieList.prototype = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
  })),
};
