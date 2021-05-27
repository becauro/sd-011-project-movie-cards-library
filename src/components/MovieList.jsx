// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props; // array de obj
    return (
      <content>
        {movies.map((movie) => <MovieCard movie={ movie } key={ movie.title } />)}
      </content>
    );
  }
}

export default MovieList;
