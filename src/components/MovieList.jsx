import React from 'react';
import MovieCard from './MovieCard';
import Data from '../data'

class MovieList extends React.Component {
  render() { 
    const { movies } = this.props;
    return (
      <div>
        { movies.map((item, index) => <MovieCard item={ Data } key={ index } />)};
      </div>
      
    );
  }
}

export default MovieList;
