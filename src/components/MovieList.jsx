// implement MovieList component here
import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const arrayOfMovies = this.props.movies;

    return(
      <div>
        {arrayOfMovies.map((movie, index) => 
        <MovieCard key={movie.title} movie={movie} />)}
      </div>
    )
  }
}

export default MovieList;