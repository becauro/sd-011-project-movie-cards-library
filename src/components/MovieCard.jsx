import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <div>
        <p>{ title }</p>
        <p>{ subtitle }</p>
        <p>{ storyline }</p>
        <img src={ imagePath } />
      </div>
    );
  }
}

export default MovieCard;
