import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((card) => <MovieCard movie={ card } key={ card.title } />)}
      </div>
    );
  }
}

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      imagePath: PropTypes.string,
    }),
  ),
};

MovieList.defaultProps = {
  movies: [],
};
