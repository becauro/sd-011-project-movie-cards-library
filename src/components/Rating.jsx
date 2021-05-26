import React, { Component } from 'react';

export class Rating extends Component {
  render() {
    const { rating } = this.props;
    return (
      <span className="rating">{ rating }</span>
    );
  }
}

export default Rating;
