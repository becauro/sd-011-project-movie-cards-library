// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

const { movies } = this.props;

class MovieList extends React.Component {
  render() {
    return <ul><MovieCard {movies} /></ul>;
  }
}

export default MovieList;
