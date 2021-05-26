// implement MoviList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.context;
    return (
      <div>
        {movies.map((_, index) => <MovieCard key={ index } />)}
      </div>);
  }
}
export default MovieList;
