import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        {movies.map((movie) => (
          <MovieCard
            imagePath={movie.imagePath}
            title={movie.title}
            subtitle={movie.subtitle}
            storyline={movie.storyline}
          />
        ))}
      </div>
    );
  }
}
export default MovieList;
