import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

export default class MovieCard extends React.Component {
  getMovieFullTitle(movie) {
    return (
      movie.title === movie.subtitle
        ? movie.title
        : `${movie.title}: ${movie.subtitle}`
    );
  }

  render() {
    const { movie } = this.props;

    return (
      <div>
        <img
          alt={ `Movie poster for ${this.getMovieFullTitle(movie)}` }
          src={ movie.imagePath }
        />
        <h4>
          {movie.title}
        </h4>
        <h5>
          {movie.subtitle}
        </h5>
        <p>
          {movie.storyline}
        </p>
        <Rating rating={ movie.rating } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};
