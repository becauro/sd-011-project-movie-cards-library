import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

// function MovieList() {
//   return <h1>Movie List</h1>;
// }

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        { movies.map((movie, index) => <MovieCard key={ `Movie Title ${index + 1}` } />) }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
