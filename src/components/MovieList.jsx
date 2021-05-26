import React from 'react';
// import PropTypes from 'prop-types';
import movies from '../data'

class MovieList extends React.Component {
  render() {
    const moviesList = movies;
    return (
      <MovieList movies = {moviesList}/>
    )
  };
}

export default MovieList;
