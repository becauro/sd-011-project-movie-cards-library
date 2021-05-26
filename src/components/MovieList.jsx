import React from 'react';
// import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
      const { movie } = this.props
    return (
      <li>{movie}</li>
    )
  }
}

export default MovieList;
