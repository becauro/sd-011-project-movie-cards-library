import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard movieCard={ movie } key={ movie.title } />
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.instanceof(Array).isRequired,
};

export default MovieList;
