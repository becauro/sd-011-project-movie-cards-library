import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard'

class MovieList extends React.Component{
  render(){
    const {movies} = this.props;
    return (
      <div>
        {/* {testArray.map(movie => <MovieCard data={movie} key={movie.}/>)} */}
      </div>
    );
  }
};

export default MovieList;
