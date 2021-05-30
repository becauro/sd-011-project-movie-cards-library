import React, { component } from 'react';

class MovieCard extends component {
  render() {
    const movie = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <img src={ imagePath } alt={ title } />
    );
  }
}

export default MovieCard;