import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <div>
        <h4>{movie.title}</h4>
        <h5>{movie.subtitle}</h5>
        <p>{movie.storyline}</p>
        <img>
        src={movie.imagePath} alt=''
        </img>
        <div><Rating rating={ rating } /></div>
      </div>
    )
  }
}

export default MovieCard;
