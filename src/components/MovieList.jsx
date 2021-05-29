import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard className="movie" movie={ movie } key={ movie.title } />
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.arrayOf).isRequired,
};

// Source https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html

export default MovieList;
