// implement MovieList component here

import React, { Component } from 'react';
import MovieCard from 'MovieCard';

class MovieList extends React.Component {
  render() {
    const [{ title, subtitle, storyline, rating, imagePath }] = this.props.movies;
    return (
      <section>
        { this.props.movies
          .map((movie) => <MovieCard key={movie.title} movies={movie} />) }
      </section>
    );
  }
}

export default MovieList;
