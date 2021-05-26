// Crie um componente que represente um cartão de filme. <MovieCard /> deve receber uma prop movie. Essa prop será um objeto, contendo as propriedades, title, subtitle, storyline, imagePath e rating.

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return (
      <p className="rating">{rating}</p>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
