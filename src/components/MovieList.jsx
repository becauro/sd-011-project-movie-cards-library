import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        { movies.map((movie, index) => <MovieCard movie={ movie } key={ index } />)}
      </div>
    );
  }
}

export default MovieList;
