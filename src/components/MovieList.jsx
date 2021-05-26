// implement MovieList component here
import React, { Component } from 'react';

export class MovieList extends Component {
  render() {
    const movies = this.props.movies;
    return movies.map(element => <MovieCard />);
  }
}

export default MovieList;
