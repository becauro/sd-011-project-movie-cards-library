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

// PropTypes: instance validation: https://blog.bitsrc.io/understanding-react-proptypes-type-checking-in-react-9648a62ce12e
MovieList.propTypes = {
  movies: propTypes.instanceOf(Array).isRequired,
};

export default MovieList;
