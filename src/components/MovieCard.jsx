import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath } } = this.props;
    return (
      <div className="info-container">
        <img src={ imagePath } alt={ title } />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
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
  }).isRequired,
};

export default MovieCard;
