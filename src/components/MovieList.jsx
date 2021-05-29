import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <ul>
        { movies.map((movie, index) => <MovieCard key={ index } filme={ movie } />)}
      </ul>
    );
  }
}

export default MovieList;
