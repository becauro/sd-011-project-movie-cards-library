import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return <MovieCard movie={ MovieCard } />;
  }
}
export default MovieList;
