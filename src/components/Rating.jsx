// implement Rating component here
import React, { Component } from 'react';

class Rating extends Component {
  render() {
    const ratingValue = this.props.rating;
    return(
    <div className="movie-card-rating">
      <p className="rating">{ratingValue}</p>
    </div>)
  }
}

export default Rating;