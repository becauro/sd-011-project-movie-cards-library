import React, { Component } from 'react';
//  import PropTypes from 'prop-types'
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((item) => <MovieCard movie={ item } key={ movies.title }/>)}
      </div>
    );
  }
}

export default MovieList;