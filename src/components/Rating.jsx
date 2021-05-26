import React from 'react';

class Rating extends React.Component {
  render() {
    const rate = this.props.rating;
    return <div className="rating">{ rate }</div>
  }
}

export default Rating;
