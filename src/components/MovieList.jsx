import React from 'react';
import MovieCard from './MovieCard';
import data from '../data';

class MovieList extends React.Component {
  render() {
    return data.map((movie, index) => <MovieCard movie={movie} key={index} />);
  }
}

export default MovieList;
