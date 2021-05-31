import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;
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
  movie: propTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
