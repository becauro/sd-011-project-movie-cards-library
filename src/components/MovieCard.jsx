import React, { Component } from 'react';
import propTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const movie = this.props.movie;
    return (
      <div>
        { movie }
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: propTypes.object.isRequired,
};

export default MovieCard;
