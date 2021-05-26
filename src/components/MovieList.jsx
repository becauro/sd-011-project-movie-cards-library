// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const moviesList = this.props.movies;
    return (
      <div className="MovieList">
        {moviesList.map((movie, index) => <MovieCard key={ index } movies={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
