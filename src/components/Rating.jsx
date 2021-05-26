import React from 'react';
import PropTypes from 'prop-types';

function Rating({ rating }) {
  return (
    <div className="rating">
      <p className="movie-card-rating">{ rating }</p>
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
