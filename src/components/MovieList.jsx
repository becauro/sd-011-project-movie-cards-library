// implement MovieList component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

export class MovieLists extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="MovieList">
        { movies.map((movie) => (
          <MovieCard key={ movie.title } movies={ movie } />
        ))}
      </div>
    );
  }
}

MovieLists.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLists;
