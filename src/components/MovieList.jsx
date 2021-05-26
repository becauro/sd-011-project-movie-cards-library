import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props
    return (
      <div>
        {movies.map(((anyMovie) => <MovieCard key={anyMovie.title} />))}
      </div>
    )
  }
}

export default MovieList;
