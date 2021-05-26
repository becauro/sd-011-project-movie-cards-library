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
        <Rating movieRating = { rating } />
        <img src={imagePath}/>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  rating: PropTypes.number,
  imagePath: PropTypes.string
}
