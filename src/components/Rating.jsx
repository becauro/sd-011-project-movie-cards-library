// implement Rating component here
import propTypes from 'prop-types';
import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="rating">
        <span>
          { rating }
        </span>
      </div>
    );
  }
}

export default Rating;

Rating.propTypes = {
  rating: propTypes.number.isRequired,
};
