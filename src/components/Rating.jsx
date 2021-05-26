import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    //console.log(this.props.rating)

    return (
      <div className="rating">
        {this.props.rating}
      </div>
    );
  }
}

export default Rating;

Rating.propTypes = {
  rating: PropTypes.number
}