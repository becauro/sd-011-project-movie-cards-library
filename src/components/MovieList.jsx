import React , { Component } from 'react';
import MovieCard from './MovieCard'



class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {this.props.movies.map(movie => <MovieCard key={movie.title} movies={movie} />)}
      </div>
    );
  }
}

export default MovieList;