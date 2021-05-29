import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
import './MovieCard.css';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    // prettier-ignore
    return (
      <div className="cardContainer">
        <img src={ imagePath } alt={ title } />
        <main>
          <h4>{ title }</h4>
          <h5>{ subtitle }</h5>
          <p>{ storyline }</p>
          <Rating rating={ rating } />
        </main>
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

export default MovieCard;
