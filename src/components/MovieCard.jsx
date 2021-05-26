import React from 'react';
import movies from '../data';

class MovieCard extends React.Component {
  render () {
    const { title, subtitle, storyline, rating, imagePath } = this.props;
    return (
      <div>
        <img src= { imagePath } alt="filmes">
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
      </div>
    )
  }
}

export default MovieCard;
