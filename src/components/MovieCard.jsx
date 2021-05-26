import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.info;
    return (
      <div className="movie-card">
        <img className="movie-card-image" src={ imagePath } alt="Filme" />
        <h4 className="movie-card-title">{title}</h4>
        <h5 className="movie-card-subtitle">{subtitle}</h5>
        <p className="movie-card-storyline">{storyline}</p>
        <p className="rating">{rating}</p>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movies: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
  }),
};

export default MovieCard;
