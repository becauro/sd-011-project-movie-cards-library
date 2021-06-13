// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

export class MovieList extends React.Component {
  render() {
    return (
      <main>
        {movies
          .map((movie, index) => <MovieCard movie={ movie } key={ `movie${index}` } />) }
      </main>
    );
  }
}

export default MovieList;
