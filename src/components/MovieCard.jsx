import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <div className="movie-card">
        <img src={ imagePath } alt={ title } />
        <div className="movie-card-infos">
          <h4 className="movie-card-title">
            { title }
          </h4>
          <h5 className="movie-card-subtitle">
            { subtitle }
          </h5>
          <p className="movie-card-storyline">
            { storyline }
          </p>
        </div>
        <Rating className="movie-card-rating" rating={ rating } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number,
  }).isRequired,
};

// Source https://stackoverflow.com/questions/32325912/react-proptype-array-with-shape

export default MovieCard;
