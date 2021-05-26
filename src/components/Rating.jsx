// implement Rating component here
import React, { Component } from 'react';

export class Rating extends Component {
  render() {
    const { rating } = this.props;
    return <p className="rating">{rating}</p>;
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
