import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath } = movie;

    return (
      <li className="movie-card">
        <img className="movie-card-image" src={ imagePath } alt={ title } />
        <h4 className="movie-card-title">{ title }</h4>
        <h5 className="movie-card-subtitle">{ subtitle }</h5>
        <p className="movie-card-body">{ storyline }</p>
      </li>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      imagePath: PropTypes.element.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      storyline: PropTypes.string.isRequired,
    }),
  ),
};

MovieCard.defaultProps = {
  movie: [],
};

export default MovieCard;
