import { checkPropTypes } from 'prop-types';
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((card, index) => <MovieCard info={ card } key={ index } />)}
      </div>
    );
  }
}

export default MovieList;

MovieList.propTypes = {
  info: PropTypes.shape({
    movies: PropTypes.,
  }).isRequired,
};
