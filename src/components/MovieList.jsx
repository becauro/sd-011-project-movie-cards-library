import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render () {
    const { movies } = this.props;
    return (
     {movies.map((card, index) => <MovieCard movie= {card} key= {index})}
    );
  }
}

export default MovieList;
