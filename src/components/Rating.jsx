// implement Rating component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const ratingValue = this.props.rating;
    return(
    <div className="movie-card-rating">
      <p className="rating">{ratingValue}</p>
    </div>)
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
};

Rating.defaultProps = {
  rating: 0,
};

export default Rating;