import React, { Component } from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends Component {
  render() {
    const { movies } = this.props;

    return (
      <div className='movie-list'>
        { movies.map((value) => (
          <MovieCard className='movie-list' movie={value} key={value.title} />
        ))}
      </div>
    )
  }
}

export default MovieList;


MovieList.propTypes = {
  movie: PropTypes.object
}