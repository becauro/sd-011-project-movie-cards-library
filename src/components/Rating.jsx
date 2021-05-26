import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { rating } = this.props.movieRating;
    return (
      <span className='rating'>
        { rating }
      </span>
    );
  }
}

export default Rating;

Rating.propTypes = {
  rating: PropTypes.number
}