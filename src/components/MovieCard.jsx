import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card">
        <div className="movie-card-body">
          <img className="movie-card-image" src={ movie.imagePath } alt="Imagem" />
          <div className="movie-card-header">
            <div className="movie-card-titles">
              <h4 className="movie-card-title">{ movie.title }</h4>
              <h5 className="movie-card-subtitle">{ movie.subtitle }</h5>
            </div>
            <Rating rating={ movie.rating } />
          </div>
          <p className="movie-card-storyline">{ movie.storyline }</p>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.exact({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
