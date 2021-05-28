import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const {imagePath, title} = this.props.movie
    return (
      <div>
        <img src={imagePath} />
        <h4>{title}</h4>
      </div>
    )
  }
}

export default MovieCard