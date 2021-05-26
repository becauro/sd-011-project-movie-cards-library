import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { info: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <div className="movie-card">
        <img className="movie-card-image" src={imagePath} alt="Filme" />
        <h4 className="movie-card-title">{title}</h4>
        <h5 className="movie-card-subtitle">{subtitle}</h5>
        <p className="movie-card-storyline">{storyline}</p>
        <p className="rating">{rating}</p>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  info: PropTypes.shape({
    name: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};
