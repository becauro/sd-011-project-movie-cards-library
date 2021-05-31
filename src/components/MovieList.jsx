import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <main className="movie-list movie-card-body">
        { movies.map((movie, index) => (
          <MovieCard movie={ movie } index={ index } key={ movie.title } />
        )) }
      </main>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

MovieList.defaultProps = {
  movies: [{}],
};

export default MovieList;
