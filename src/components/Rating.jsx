import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating } = this.props.rating;
    return (
      <div>
        {rating}
      </div>
    );
  }
}

export default Rating;
