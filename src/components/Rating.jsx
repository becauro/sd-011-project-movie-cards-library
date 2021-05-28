import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="rating">
      <div>
      { rating }
      </div>
      </div>
      )
    }
  }
  
  export default Rating;