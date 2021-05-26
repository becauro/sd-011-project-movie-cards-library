import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

export class MovieCards extends Component {
  render() {
    const { movies } = this.props;
    console.log(movies);
    const { title, subtitle, storyline, imagePath, rating } = movies;
    return (
      <div>
        <img src={ imagePath } alt={ title } />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <Rating rating={ rating } />
      </div>
    );
  }
}

MovieCards.propTypes = {
  movies: PropTypes.objectOf({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCards;
