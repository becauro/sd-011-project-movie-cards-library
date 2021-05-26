import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard
            key={ movie.title }
            imagePath={ movie.imagePath }
            title={ movie.title }
            subtitle={ movie.subtitle }
            storyline={ movie.storyline }
            rating={ movie.rating }
          />
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default MovieList;
