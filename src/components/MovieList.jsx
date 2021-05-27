import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard'

class MovieList extends React.Component{
  render(){
    const {movies} = this.props;
    return (
      <div>
        {movies.map((movie, index) => ( 
        <div>
          <MovieCard movie={movie} key={index}/>
        </div>))}
      </div>
    );
  }
};

export default MovieList;
