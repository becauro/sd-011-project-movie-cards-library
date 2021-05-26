import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((movie) => (
          <MovieCard
            key={ movie.title }
            imagePath={ movie.imagePath }
            title={ movie.title }
            subtitle={ movie.subtitle }
            storyline={ movie.storyline }
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
