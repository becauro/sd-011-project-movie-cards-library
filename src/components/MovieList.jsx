// implement MovieList component here

import React from 'react';
import propTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <section>
        { movies.map((movie) => <MovieCard movie={ movie } key={ movie.title } />) }
      </section>
    );
  }
}

// Typechecking: https://reactjs.org/docs/typechecking-with-proptypes.html
MovieList.propTypes = {
  movies: propTypes.instanceOf(Array).isRequired,
};

export default MovieList;
