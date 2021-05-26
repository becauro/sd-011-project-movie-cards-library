import React, { Component } from 'react';
import Rating from './Rating';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    // console.log(this.props.movie)
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;


    return (
    <div>
      <img src={imagePath} alt={title} />
      <h4>{title}</h4>
      <h5>{subtitle}</h5>
      <p>{storyline}</p>
      <Rating rating={rating} />
    </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  imagePath: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number
}