// implement MovieCard component here
import React from 'react';
// import propTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <section>
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>^
        <p>{ storyline }</p>
        <Rating rating={ rating } />
        <img src={ imagePath } alt="movie's art" />
      </section>
    );
  }
}

export default MovieCard;
