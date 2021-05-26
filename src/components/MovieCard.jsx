import React from 'react';
import Rating from './Rating';

function MovieCard({ movie }) {
  return (
    <div>
      <h4 className="movie-card-title">{movie.title}</h4>
      <h5 className="movie-card-subtitle">{movie.subtitle}</h5>
      <p className="movie-card-storyline">{movie.storyline}</p>
      <Rating rating={movie.rating} />
      <img
        src={movie.imagePath}
        alt={movie.title}
        className="movie-card-image"
      />
    </div>
  );
}

export default MovieCard;
