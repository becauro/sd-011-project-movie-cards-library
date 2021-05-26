import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { movies } = this.prop;
    const { rating } = movies;
    return (
      <h1>
        { rating }
      </h1>
    );
  }
}

export default Rating;

Rating.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      rating: PropTypes.string,
    }),
  ),
};

Rating.defaultProps = {
  movies: {},
};
