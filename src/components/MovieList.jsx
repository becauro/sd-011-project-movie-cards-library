import React, { Component } from 'react';
import MovieCard from './MovieCard';

export default class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <section className="movie-list">
        {movies.map(
          (movie, id) => (
            <MovieCard
              movie={ movie }
              key={ `Movie Title ${id + 1}` }
            />),
        )}
      </section>
    );
  }
}
