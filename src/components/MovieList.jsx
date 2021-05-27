import propTypes from 'prop-types';
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((movie) => (<MovieCard movie={ movie } key={ movie.title } />))}
      </div>
    );
  }
}

export default MovieList;

MovieList.propTypes = {
  movies: propTypes.arrayOf(propTypes.object),
};

MovieList.defaultProps = {
  movies: [{}],
};
