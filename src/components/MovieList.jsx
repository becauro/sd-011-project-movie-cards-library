import React, { Component } from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

export default class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((el) => (
          <MovieCard key={el.title} movie={el} />
        ))}
      </div>
    );
  }
}

// MovieList.propTypes = {
//   movies: PropTypes.array,
// };
