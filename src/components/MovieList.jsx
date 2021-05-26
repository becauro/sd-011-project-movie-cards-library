// implement MovieList component here

import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    return (movies.map((elemento) => {
     return <MovieCard key={ elemento.title } movie={ elemento } />;
    }));
  }
}

export default MovieList;
