// implement MovieList component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCards from './MovieCard';

export class MovieLists extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        { movies.map((movie) => (
          <MovieCards key={ movie.title } movie={ movie } />
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

MovieList.defaultProps = {
  movies: [],
};

export default MovieLists;
