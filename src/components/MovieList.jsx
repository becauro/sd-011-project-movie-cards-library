import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <div>
        { movies.map((item) => (<MovieCard movie={ item } key={ movies.title } />)) }
      </div>
    );
  }
}
MovieList.propTypes = {
  movies: PropTypes.shape(),
}.isRequired;

export default MovieList;
