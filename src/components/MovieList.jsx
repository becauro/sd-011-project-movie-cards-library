import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <main className="movie-list">
        { movies.map((item) => <MovieCard movie={ item } key={ item.title } />)}
      </main>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      storyline: PropTypes.string.isRequired,
      rating: PropTypes.number,
      imagePath: PropTypes.string.isRequired,
    }),
  ),
};

MovieList.defaultProps = {
  movies: [],
};

export default MovieList;
