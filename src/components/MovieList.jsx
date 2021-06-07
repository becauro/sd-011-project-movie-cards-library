import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render(){
    const { movie } = this.props;
    return (
      <MovieList>
        {movie((movie) => <MovieCard key = { movie.title } movie = { movie } />)}
      </MovieList>
    )
  }
}

export default MovieList;