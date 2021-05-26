// implement Rating component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return (
      <span>{ rating }</span>
    );
  }
}
Rating.defaultProps = { rating: 0 };
Rating.propTypes = {
  rating: PropTypes.number,
};

export default Rating;
