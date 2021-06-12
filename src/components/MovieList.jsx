// implement MovieList component here
import React from 'react';
import Movies from '../data';

class MovieList extends React.Component {
  render() {
    const { movies } = Movies;
    return <ol></ol>;
  }
}

export default MovieList;
