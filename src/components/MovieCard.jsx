import React from 'react';
import PropTypes from 'prop-types';
// import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card-body">
        <img className="movie-card-header" alt="" src={ movie.imagePath } />
        <div className="movie-card-title">
          {movie.title}
        </div>
        {movie.subtitle}
        {movie.storyline}
        {/* <Rating rating={rating}/> */}
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
    // rating: PropTypes.number,
    imagePath: PropTypes.string,
  }),
};

MovieCard.defaultProps = {
  movie: {},
};
