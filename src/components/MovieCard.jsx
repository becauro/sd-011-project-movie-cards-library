import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const movie = this.props.movie;

    return (
      <div>
        <img src={movie.imagePath} />
        <h4>{movie.title}</h4>
        <h5>{movie.subtitle}</h5>
        <p>{movie.storyline}</p>
      </div>
    );
  }
}

export default MovieCard;
