// implement MovieList component here
import React, { Component } from "react";
import MovieCard from "./MovieCard";

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      movies.map((movieItem) => <MovieCard movie={movieItem} key={movieItem.title} />)
    );
  }
}

export default MovieList;