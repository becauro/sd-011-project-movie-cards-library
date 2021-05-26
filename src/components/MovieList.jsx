import React, { Component } from 'react';
import MovieCard from './MovieCard'


class MovieList extends Component {
  render() {
    const movies = this.props.movies;
    // console.log(movies);


    return(
      <div>
        { movies.map(movie => <MovieCard key={movie.title} movies={movie} />) }
      </div>  
    )
  }
}

export default MovieList;
