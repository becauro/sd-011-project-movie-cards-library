// implement Rating component here

import React, { Component } from 'react';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return (
      <h5 className="rating">{ rating }</h5>
    )
  }
}



export default Rating;