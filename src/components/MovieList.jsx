import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <div className="movie-list">
        {movies.map((card, index) => <MovieCard info={ card } key={ index } />)}
      </div>
    );
  }
}

MovieCard.propTypes = {
  movies: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
  }),
};

export default MovieList;
