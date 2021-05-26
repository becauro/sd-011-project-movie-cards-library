// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    const text = 'Movie Title ';
    return (
      <div>
        {movies.map((movie, index) => (
          <MovieCard movie={ movie } key={ text + (index + 1) }/>
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.array
}

export default MovieList;
