import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const {
      title,
      subtitle,
      storyline,
      imagePath,
      rating } = movie;
    return (
      <div>
        <img src={ imagePath } alt={ title } />
        <h3>{ title }</h3>
        <h4>{ subtitle }</h4>
        <p>{ storyline }</p>
        <Rating rating={ rating } />
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
