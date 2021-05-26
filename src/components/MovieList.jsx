// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const {movies} = this.props;

    return (
      <div>
        {movies.map((movie, index) => (
          <MovieCard movie={movie} key={'Movie Title ' + (index + 1)}/>
        ))}
      </div>
    )
  }
}

export default MovieList;
