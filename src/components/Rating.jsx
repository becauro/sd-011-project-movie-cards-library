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
  rating: PropTypes.number,
};

Rating.defaultProps = {
  rating: 1,
};

export default Rating;
