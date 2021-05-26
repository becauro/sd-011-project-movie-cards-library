import React from 'react';

function Rating({ rating }) {
  return (
    <div className="rating">
      <p className="movie-card-rating">{rating}</p>
    </div>
  );
}

export default Rating;
