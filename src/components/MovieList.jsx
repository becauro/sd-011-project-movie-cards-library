// implement MovieList component heres
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const arrayOfMovies = this.props.movies;

    return (
      <div className="movie-list">
        { arrayOfMovies.map((movie) => <MovieCard key={movie.title} movie={movie} />) }
      </div>
    )
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
