import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    return (
      <ul>
        {this.props.movies.map((movieData) => <MovieCard movie={movieData} key={movieData.title} />)}
      </ul>
    )
  }
}

export default MovieList;