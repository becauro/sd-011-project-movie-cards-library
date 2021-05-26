// implement MovieList component here
// implement MovieCard component here
import React from 'react';
import MovieCard from './MovieCard';

class Movielist extends React.Component {
  render() {
      const { movies }  = this.props; 
    return (
        <div>
          { movies.map((movie) => <MovieCard movie= {movie} />) }
        </div>
    );
  }
}

export default Movielist;
