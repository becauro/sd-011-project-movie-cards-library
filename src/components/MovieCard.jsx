import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;
    return (
      <section className="movie-card">
        <h4 className="movie-card-title">{title}</h4>
        <h5 className="movie-card-subtitle">{subtitle}</h5>
        <p className="movie-card-storyline">{storyline}</p>
        <Rating rating={ rating } />
        <img className="movie-card-image" src={ imagePath } alt="double" />
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
