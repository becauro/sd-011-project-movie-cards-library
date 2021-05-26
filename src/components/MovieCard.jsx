import React, { Component } from 'react';
import propTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        { movie.title }
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: propTypes.object,
};

export default MovieCard;
