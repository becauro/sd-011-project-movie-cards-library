import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const movie = this.props.movie;
    return ( 
      <div>

      </div>
    );
  }
}

MovieCard.PropTypes = {
  movie: string.required,
}

export default MovieCard;
