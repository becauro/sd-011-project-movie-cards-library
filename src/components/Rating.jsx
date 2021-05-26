import React from 'react';
import propTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="rating">
        <span>{rating}</span>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: propTypes.string.isRequired,
};

export default Rating;
