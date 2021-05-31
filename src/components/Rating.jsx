import React, { components } from 'react';

class Rating extends components {
  render() {
    const { rating } = this.props;
    return (
      <div>
        <p>{ rating }</p>
      </div>
    );
  }
}

export default Rating;
