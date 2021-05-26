import React, { Component } from 'react';
import MovieCard from './MovieCard';


export class MovieList extends Component {
  render() {
      const movies = this.props.movies;
      return (
          <div>
             { movies.map((movie) => (
                  <MovieCard key={ movie.title } movies={ movie }/>
             ))}     
          </div>
      );
    }
}

export default MovieList;