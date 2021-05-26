// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section className="movie-list">
        {movies.map((item) => (
          <MovieCard movie={ item } key={ item.title } />
        ))}
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.shape({
    map: PropTypes.string,
  }).isRequired,
};

export default MovieList;
