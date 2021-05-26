import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import Rating from './Rating';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      movies.map((item, index) => (
        <div className="movie-container" key={ index }>
          (
          <MovieCard movie={ item } />
          <Rating score={ item.rating } />
          )
        </div>
      ))
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
