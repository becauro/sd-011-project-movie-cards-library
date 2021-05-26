// <MovieList /> deve receber uma prop movies, que é um array de objetos com informações de um filme.

import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class MovieList extends Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movies;

    return (
      <header>
        <h1>Movie Cards Library</h1>
      </header>
    );
  }
}

export default MovieList;
