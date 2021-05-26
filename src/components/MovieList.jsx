// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        <section>{this.props.movies.map((movieObj) => {
          return <MovieCard key={movieObj.title} movie={movieObj}/>
        })}</section>
      </div>
    );
  }
}

export default MovieList;