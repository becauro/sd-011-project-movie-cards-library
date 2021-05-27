import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <div>
      {movies.map((movies, index)=> <MovieCard movie={ movies } key={ index }/> )}
      </div>
      )
    }
  }
  
  export default MovieList;