import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card">
        <img className="movie-card-header" alt="" src={ movie.imagePath } />
        <h4 className="movie-card-title">
          { movie.title }
        </h4>
        <h5>
          { movie.subtitle }
        </h5>
        <p>
          { movie.storyline }
        </p>
        <Rating rating={ movie.rating } />
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }),
};

MovieCard.defaultProps = {
  movie: {},
};
