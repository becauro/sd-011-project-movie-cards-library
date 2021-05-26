import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <main>
        { movies.map((m) => <MovieCard movie={ m } key={ m.title } />) }
        ;
      </main>
    );
  }
}

MovieList.propTypes = {
  // eslint-disable-next-line react/require-default-props
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    }),
  ),
};

export default MovieList;
