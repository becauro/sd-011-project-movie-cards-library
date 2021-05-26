// implement MovieCard component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Rating } from './Rating';

export class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <div className="container-film">
        <div className="info-container">
          <Rating rating={ rating } />
          <h4>{title}</h4>
          <h5>{subtitle}</h5>
          <p className="story-line">{storyline}</p>
        </div>

        <div className="image-container">
          <img src={ imagePath } alt="movie" />
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
