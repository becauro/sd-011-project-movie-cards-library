// implement MovieList component here
import React, { Component } from "react";
import MovieCard from "./MovieCard";
import PropTypes from 'prop-types';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      movies.map((movieItem) => <MovieCard movie={ movieItem } key={ movieItem.title } />)
    );
  }
}

MovieList.prototypes = {
  movies: protoTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
