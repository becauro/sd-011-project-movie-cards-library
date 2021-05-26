// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      this.props.movies.map((movie) => (<div><MovieCard /></div>)));
  }
}

export default MovieList;
