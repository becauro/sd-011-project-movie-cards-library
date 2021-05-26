import React, { Component } from 'react';
import MovieCard from './MovieCard'


class MovieList extends Component {
  render() { 
    const movies = this.props.movies;
    return ( 
      <section>
        {movies.map((movie) => <MovieCard movie={movie} />)}
      </section>
     );
  }
}
 
export default MovieList;