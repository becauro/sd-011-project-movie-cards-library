import React, { Component } from 'react';

class Rating extends Component {
  render() {
    return (
      <p className="rating">
        {this.props.rating}    
      </p>
    );
  }
}

export default Rating;
