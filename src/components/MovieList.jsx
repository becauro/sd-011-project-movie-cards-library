import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <div>
        {movies.map((movie) => (
          <MovieCard movie= {movie} key= {movie.title} />
        ))}
      </div>
    )
  }
}

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
    })
  ),
};

MovieList.defaultProps = {
  games: [],
};
