import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <section className="movie-list">
        {movies.map(
          (movie, id) => (
            <MovieCard
              movie={ movie }
              key={ `Movie Title ${id + 1}` }
            />),
        )}
      </section>
    );
  }
}

MovieList.defaultProps = {
  movies: [
    {
      title: 'Stranger',
      subtitle: 'Stranger',
      storyline: 'Stranger',
      rating: NaN,
      imagePath: 'Stranger',
    },
  ],
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

export default MovieList;
