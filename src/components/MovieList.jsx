import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    return (
      <ul>
        { this.props.movies.map((movieData) => 
          <MovieCard movie={ movieData } key={ movieData.title } />) }
      </ul>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.required,
    subtitle: PropTypes.string.required,
    storyline: PropTypes.string.required,
    imagePath: PropTypes.string.required,
    rating: PropTypes.number.required,
  })),
}

export default MovieList;
