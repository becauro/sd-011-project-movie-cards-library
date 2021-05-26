// implement MovieList component here
import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const arrayOfMovies = this.props.movies;

    return(
      <div class="movie-list">
        {arrayOfMovies.map((movie, index) => 
        <MovieCard key={movie.title} movie={movie} />)}
      </div>
    )
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;