// Crie um componente que represente um cartão de filme. <MovieCard /> deve receber uma prop movie. Essa prop será um objeto, contendo as propriedades, title, subtitle, storyline, imagePath e rating.

import React, { Component } from 'react';
import MovieCard from 'MovieCard';

class Rating extends Component {
  render() {
    return (
      <div className="rating">
        <p> {rating} </p>
      </div>
    );
  }
}

export default Rating;
