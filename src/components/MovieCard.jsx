// implement MovieCard component here
import React from 'react';
// import propTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <section>
        <Rating rating={ rating } />
      </section>
    )
  }
}

export default MovieCard;