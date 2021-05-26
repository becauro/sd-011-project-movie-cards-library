import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
		return (
      movies.map((movie) => <MovieCard movie={movie} key={movie.title} />)
    )
	}
}

export default MovieList;
