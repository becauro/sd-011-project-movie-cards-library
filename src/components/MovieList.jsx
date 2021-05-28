import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <main>
      {movies.map((movies, index)=> <MovieCard movie={ movies } key={ index }/> )}
      </main>
      )
    }
  }
  
  export default MovieList;