import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

// Luiz me ajudou na sala "A"
class MovieCard extends React.Component {
  render() {
    const { movie: { imagePath, title, subtitle, storyline, rating } } = this.props;
    return (
      <main>
        <img src={ imagePath } alt="title of the movie" />
        <div>
          <h4>{title}</h4>
          <h5>{subtitle}</h5>
          <p>{storyline}</p>
        </div>
          <Rating rating={ rating } />
        </main>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
