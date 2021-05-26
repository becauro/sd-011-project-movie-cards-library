import React, { Component } from 'react';
import propTypes from 'prop-types';
import Rating from './Rating'

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <div className='movie-card'>
        <img src={ imagePath } alt={ title } className='movie-card-image' />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <Rating rating={ rating }/>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: propTypes.shape({
    title: propTypes.string,
    subtitle: propTypes.string,
    storyline: propTypes.string,
    imagePath: propTypes.string,
    rating: propTypes.number,
  }),
};

MovieCard.defaultProps = {
  movie: {
    title: 'not found',
    subtitle: 'not found',
    storyline: 'not found',
    imagePath: 'not found',
    rating: 0,
  },
};

export default MovieCard;
