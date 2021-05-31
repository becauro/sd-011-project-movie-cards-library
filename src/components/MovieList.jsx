import React, { components } from 'react';
import MovieCard from './MovieCard';

class MovieList extends components {
  render() {
    const { movies } = this.props;
    return (
      <div>
        { movies.map((movie) => <MovieCard movie={ movie } key={ movie.title } />)}
      </div>
    );
  }
}

export default MovieList;
