// implement MovieList component here

import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return ( movies.map((elemento) => {
      <MovieCard key = { elemento.title } movie = { elemento } />
    }));
  }
}

export default MovieList;
