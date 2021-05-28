import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <main>
        { movies.map((movie, index) => (
          <MovieCard movie={ movie } index={ index } key={ movie.title } />
        )) }
      </main>
    );
    }
  }
  
  export default MovieList;