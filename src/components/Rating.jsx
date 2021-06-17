import React, { Component } from 'react';

class Rating extends Component {
  render() {
    const rating = 3;
    return (
      <h1 className="rating">
        { rating }
      </h1>
    );
  }
}

export default Rating;
