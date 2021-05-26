import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const rate = this.props.rating;
    return <div className="rating">{ rate }</div>;
  }
}

export default Rating;

Rating.protoType = {
  rating: PropTypes.isRequired,
};
