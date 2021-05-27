import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card">
        <img className="movie-card-image" src={ movie.imagePath } alt={ movie.title } />
        <section className="movie-card-body">
          <div className="movie-card-title">
            <h4>{movie.title}</h4>
          </div>
          <div className="movie-card-subtitle">
            <h5>{movie.subtitle}</h5>
          </div>
          <div className="movie-card-storyline">
            <p>{movie.storyline}</p>
          </div>
        </section>
        <Rating rating={ movie.rating } />
      </div>
    );
  }
}

MovieCard.propTypes = { movie: PropTypes.objectOf.isRequired };

export default MovieCard;
