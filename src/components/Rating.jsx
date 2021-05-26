// implement Rating component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Ratings extends Component {
  render() {
    const { rating } = this.props;
    return (
      <div>
        <span>Rating: </span>
        <span>{ rating }</span>
      </div>
    );
  }
}

Ratings.propTypes = {
  rating: PropTypes.number,
};

Ratings.defaultProps = {
  rating: 0,
};

export default Ratings;
