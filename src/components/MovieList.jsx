import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
  //  const { movies } = this.props;
    return (
      movies.map((movie, key) => <MovieCard movie={ movie } key={ movie.title } />)
    );
  }
}

export default MovieList;
