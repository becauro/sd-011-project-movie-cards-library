import React, { Component } from 'react';

class Rating extends Component {
  render() {
    const { rating } = this.prop.movie;
    return (
      <h1>
        { rating }
      </h1>
    );
  }
}

export default Rating;
