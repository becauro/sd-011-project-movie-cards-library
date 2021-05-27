import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;
    return (
      <div className="movie-card">
        <div className="movie-card-body">
          <div>
            <img className="movie-card-image" src={ imagePath } alt="Movies" />
            <h4 className="movie-card-title">{ title }</h4>
            <h5 className="movie-card-subtitle">{ subtitle }</h5>
            <div className="story">
              <p className="movie-card-storyline">{ storyline }</p>
            </div>
          </div>
          <div className="movie-card-rating">
            <Rating rating={ rating } />
          </div>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
