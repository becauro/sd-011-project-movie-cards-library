// implement Rating component here
import React, { Component } from 'react';

export default class Rating extends Component {
  render() {
    const { rating } = this.props;
    return <div className = 'rating'>{ rating }</div>
  }
}