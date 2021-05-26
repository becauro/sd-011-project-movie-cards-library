import React from 'react';
import MovieCard from './MovieCard'

class MovieList extends React.Component {
  render() {
    return (
        <li>{this.props.movie}</li>
    )
  }
}

export default MovieList;
