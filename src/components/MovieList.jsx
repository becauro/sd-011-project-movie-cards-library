import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies
          .map((mov, index) => <MovieCard key={ movies[index].title } movie={ mov } />)}
      </div>
    );
  }
}

export default MovieList;
