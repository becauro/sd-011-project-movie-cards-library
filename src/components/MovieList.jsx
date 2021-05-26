import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const data = this.props.movies;
    return (
      <main className="movie-list">
        {data.map((movie, index) => <MovieCard movie={ movie } key={ index } />)}
      </main>
    );
  }
}

export default MovieList;
