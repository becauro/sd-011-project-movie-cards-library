// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Data from '../data';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movies: { imagePath, title, subtitle, storyline, rating } } = this.props;

    return (
      <div>
        <img src={ imagePath } alt={ Data.title } />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <div>
          <Rating rating={ rating } />
        </div>
      </div>);
  }
}

MovieCard.propTypes = {
  movies: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default MovieCard;
