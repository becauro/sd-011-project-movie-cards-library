import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { movie } = this.props.movie;
    return ( 
      <div>
        { movie };
      </div>
    );
  }
};

MovieCard.PropTypes = {
  movie: PropTypes.string.isRequired,
};

export default MovieCard;
