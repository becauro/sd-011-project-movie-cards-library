import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { movieRating: { rating } } = this.props;
    return (
      <span className="rating">
        { rating }
      </span>
    );
  }
}

export default Rating;

Rating.propTypes = {
  movieRating: {
    rating: PropTypes.number,
  },
};

Rating.defaultProps = {
  movieRating: {},
};
