import React from 'react';
import PropTypes from 'prop-types';

function Rating({ rating }) {
  return (
    <div className="rating">
      <p>{rating}</p>
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.number,
};

export default Rating;
