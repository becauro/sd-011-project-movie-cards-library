// implement MovieCard component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Ratings from './Rating';

export class MovieCards extends Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <>
        <img src={ imagePath } alt={ title } />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <Ratings rating={ rating } />
      </>
    );
  }
}

MovieCards.propTypes = {
  movie: PropTypes.objectOf({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }),
};

MovieCards.defaultProps = {
  movie: {},
};

export default MovieCards;
