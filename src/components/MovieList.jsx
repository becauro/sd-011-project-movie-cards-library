// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import '../componentsStyles/MovieList.css';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <main>
        { movies.map((movie, index) => (
          <MovieCard movies={ movie } index={ index } key={ movie.title } />
        )) }
      </main>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
