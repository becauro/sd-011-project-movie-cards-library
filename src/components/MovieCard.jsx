import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movieCard } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movieCard;
    return (
      <div className="movie-card">
        <img className="movie-card-image" src={ imagePath } alt={ title } />
        <h4 className="movie-card-title">{ title }</h4>
        <h5 className="movie-card-subtitle">{ subtitle }</h5>
        <p className="movie-card-storyLine">{ storyline }</p>
        <Rating className="rating" rating={ rating } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movieCard: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired.prototype,
};

MovieCard.defaultProps = {
  movieCard: ['Nenhum Filme Encontrado'],
};

export default MovieCard;
