// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies: moviesArray } = this.props;

    return (
      <div className="movie-list">
        {moviesArray.map((movieObj) => (
          <MovieCard key={ movieObj.title } movie={ movieObj } />
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
