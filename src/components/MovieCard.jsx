import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Rating from './Rating';

export default class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;

    return (
      <div className="movie-card">
        
      </div>
    )
  }
}
