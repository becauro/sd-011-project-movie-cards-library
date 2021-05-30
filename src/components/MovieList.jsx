import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((movie, i) => (
          <MovieCard key={ `Movie Title ${i + 1}` } movie={ movie } />))}
        ;
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.arrayOf).isRequired,
};
// Fonte: https://reactjs.org/docs/typechecking-with-proptypes.html

export default MovieList;
