import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

// Luiz me ajudou na sala "A"
class MovieCard extends React.Component {
  render() {
    const { movie: { imagePath, title, subtitle, storyline, rating } } = this.props;
    return (
      <main className="movie-card">
        <img src={ imagePath } alt="title of the movie" className="movie-card-image" />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <div className="movie-card-rating">
          <Rating rating={ rating } />
        </div>
      </main>
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
