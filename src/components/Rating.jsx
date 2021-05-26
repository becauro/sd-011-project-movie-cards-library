// implement Rating component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Ratings extends Component {
  render() {
    const { rating } = this.props;
    return (
      <div>{ rating }</div>
    );
  }
}

// Ratings.propTypes = {
//   rating: PropTypes.number.isRequired,
// };

export default Ratings;
