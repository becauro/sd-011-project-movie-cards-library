import React, { Component } from 'react';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="movie-card-rating">
        <p className="ratings">Rating</p>
        <p className="rating">{rating}</p>
      </div>
      
    );
  }
};
export default Rating;