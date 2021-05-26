import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;

    return (
      <li>
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <img src={ imagePath } alt={`Cover for the movie ${ title }`} />
        <p>{ storyline }</p>
        <Rating rating={ rating } />
      </li>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.required,
    subtitle: PropTypes.string.required,
    storyline: PropTypes.string.required,
    imagePath: PropTypes.string.required,
    rating: PropTypes.number.required,
  }),
};

export default MovieCard;
