import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="rating">
        <p>{ rating }</p>
      </div>
    );
  }
}

export default Rating;

Rating.defaultProps = {
  rating: 0,
};

Rating.propTypes = {
  rating: PropTypes.number,
};
