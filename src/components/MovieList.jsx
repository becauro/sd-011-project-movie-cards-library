// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;

    return (
      <div>
        {movies.map((movieObj) => <MovieCard key={movieObj.title} movie={movieObj}/>)}
      </div>
    )
  }
}

export default MovieList;
