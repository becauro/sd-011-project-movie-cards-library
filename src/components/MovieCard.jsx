import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { imagePath, title, subtitle, storyline, rating } = this.props.movie;
    return (
      <div className="movie-card movie-card-body">
        <img src={ imagePath } alt="Movie" className="movie-card-image" />
        <h4 className="movie-card-title">{ title }</h4>
        <h5 className="movie-card-subtitle">{ subtitle }</h5>
        <p className="movie-card-storyline">{ storyline }</p>
        <Rating rating={ rating }/>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    rating: PropTypes.number,
    storyline: PropTypes.string,
  }),
};

MovieCard.defaultProps = {
  movie: {},
};
