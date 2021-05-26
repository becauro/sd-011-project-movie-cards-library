// implement MovieCard component here
import React, { Component } from 'react';

export class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <div>
        <img src={ imagePath } alt="movie" />
      </div>
    );
  }
}

export default MovieCard;
