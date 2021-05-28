import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <main className='movie-list movie-card-body'>
        { movies.map((movie, index) => (
        <MovieCard movie={ movie } index={ index } key={ movie.title } />
        )) }
      </main>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.array
}

export default MovieList;
