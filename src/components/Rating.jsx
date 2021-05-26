import React, { Component } from 'react';

class Rating extends Component {
  render() {
    const rating = this.props.nota;
    return <p className='rating'>{rating}</p>;
  }
}

export default Rating;
