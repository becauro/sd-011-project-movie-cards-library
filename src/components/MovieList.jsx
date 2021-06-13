// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

export class MovieList extends React.Component {
  render() {
    return (
      <main>{ movies.map((movie) => <MovieCard movie={ movie } />) }</main>
    );
  }
}

export default MovieList;
