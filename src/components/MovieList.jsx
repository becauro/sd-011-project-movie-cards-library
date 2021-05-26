import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <main className="movie-list">
        {movies.map((movie, index) => <MovieCard movie={ movie } key={ index } />)}
      </main>
    );
  }
}

export default MovieList;
