import React, { Component } from 'react';

class MovieCard extends Component {
  render() {

    const { movie: {title, subtitle, storyline, imagePath, rating} } = this.props;

    return (
      <div>
        <img src={imagePath}></img>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <p>Rating: {rating}</p>
      </div>
    );
  }
}

export default MovieCard;