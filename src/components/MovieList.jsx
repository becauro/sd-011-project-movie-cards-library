// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <h1>
        <MovieCard />
      </h1>
    );
  }
}

export default MovieList;
