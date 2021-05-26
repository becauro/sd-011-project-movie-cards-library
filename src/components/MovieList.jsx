// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard'

class MovieList extends React.Component {
  render() {
    // const 
    return (

      <section>
      {this.props.movies.map((movie, index) => <MovieCard movies={movie}/>)}
      </section>
    )
  }
}

export default MovieList;