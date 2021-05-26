import React from 'react';
import MovieCard from '../components/MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        { movies.map((movie) => <MovieCard movie={ movie } />) }
      </div>
    );
  }
}

export default MovieList;
