import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;

    return (
      <li>
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <img src={ imagePath } alt={ `Cover for the movie ${title}` } />
        <p>{ storyline }</p>
        <Rating rating={ rating } />
      </li>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
