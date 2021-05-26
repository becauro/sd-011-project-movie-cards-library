import React, { Component } from 'react';
import '../data'

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    console.log(movies);
    return (
      <h1>just to pass eslint test</h1>
    );
  }
}

export default MovieList;
