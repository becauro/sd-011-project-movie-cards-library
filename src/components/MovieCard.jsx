import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const {imagePath} = this.props.movie
    return (
         <img  className='movie-card-image' src={imagePath} />
    )
  }
}

export default MovieCard