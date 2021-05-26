import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((filme, index) => <MovieCard movie={ filme } key={ index } />)}
      </div>
    );
  }
}

export default MovieList;
