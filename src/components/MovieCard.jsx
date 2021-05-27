import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;
    return (
      <div className="movie-card">
        <img className="movie-card-image" src={ imagePath } alt="imagem-filme" />
        <h4 className="movie-card-title">{title}</h4>
        <h5 className="movie-card-subtitle">{subtitle}</h5>
        <p className="movie-card-storyline">{storyline}</p>
        <Rating key={ title } rating={ rating } />
      </div>
    );
  }
}
MovieCard.propTypes = { movie: PropTypes.oneOfType([PropTypes.object]).isRequired };

export default MovieCard;
