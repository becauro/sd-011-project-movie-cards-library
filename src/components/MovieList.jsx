// implement MovieList component here
import React, { Component } from 'react';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <h1>{movies}</h1>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.objects.isRequired,
};

export default MovieList;
