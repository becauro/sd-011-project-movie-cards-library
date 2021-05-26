import React, { Component } from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends Component {
  render() {
    return (
      <ul>
        {this.props.movies.map((movieData) => <MovieCard movie={movieData} key={movieData.title} />)}
      </ul>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }),),
}

export default MovieList;