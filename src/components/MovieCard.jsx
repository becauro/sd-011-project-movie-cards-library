import React from 'react';
import Rating from './Rating';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const {
      movie: { title, subtitle, storyline, imagePath, rating },
    } = this.props;
    return (
      <div>
        <img src={imagePath} />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating rating={rating} />
      </div>
    );
  }
}

MovieCard: PropTypes.exact({
  imagePath: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
});

export default MovieCard;
