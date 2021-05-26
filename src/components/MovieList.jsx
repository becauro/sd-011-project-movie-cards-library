import React, { Component } from 'react';
import MovieCard from './MovieCard';

export default class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((item) => (
          <MovieCard movies={ item } key={ item.title } />
        ))}
      </div>
    );
  }
}
