// implement Rating component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Rating extends Component {
  render() {
    const { rating } = this.props;
    console.log(rating);
    return <p className="rating">{rating}</p>;
  }
}
Rating.defaultProps = {
  rating: 0,
};
Rating.propTypes = {
  rating: PropTypes.number,
};

export default Rating;
