// implement Rating component here
import React, { Component } from 'react';

class Rating extends Component {
  render() {
    const ratingValue = this.props.rating;
    return(
    <div className="rating">
      {ratingValue}
    </div>)
  }
}

export default Rating;