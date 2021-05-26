import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    return (
      <div>
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <Rating movieRating={ rating } />
        <img src={imagePath} alt={title} />
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.object,
  movie.title: PropTypes.string,
  movie.subtitle: PropTypes.string,
  movie.rating: PropTypes.number,
  movie.imagePath: PropTypes.string
}
