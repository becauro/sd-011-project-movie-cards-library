// implement MovieList component here
import React from 'react';
import propTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        { this.props.movies.map((movie) => <MovieCard movie={ movie } key={ movie.title } />) }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: propTypes.array,
};

export default MovieList;
