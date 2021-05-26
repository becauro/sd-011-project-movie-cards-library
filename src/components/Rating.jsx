// implement Rating component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  static propTypes = {
    rating: PropTypes.number,
  };
  render() {
    return <div className="rating">{this.props.rating}</div>;
  }
}

export default Rating;
