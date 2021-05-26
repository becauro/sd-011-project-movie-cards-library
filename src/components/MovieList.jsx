// implement MovieList component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

export class MovieLists extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="MovieList">
        { movies.map((mov) => (
          <MovieCard key={ mov.title } movie={ mov } />
        ))}
      </div>
    );
  }
}

MovieLists.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLists;
