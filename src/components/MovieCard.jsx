import React from 'react';
import propTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie: {
      title,
      subtitle,
      storyline,
      rating,
      imagePath,
    } } = this.props;

    return (
      <div>
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <Rating rating={ rating } />
        <img src={ imagePath } alt="movie's art" />
      </div>
    );
  }
}

// Shape: https://dev.to/cesareferrari/how-to-specify-the-shape-of-an-object-with-proptypes-3c56
MovieCard.propTypes = {
  movie: propTypes.shape({
    title: propTypes.string,
    subtitle: propTypes.string,
    storyline: propTypes.string,
    rating: propTypes.number,
    imagePath: propTypes.string,
  }).isRequired,
};

export default MovieCard;
