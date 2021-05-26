// implement MovieCard component here
import React from 'react';
import propTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    return (
      <div>
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <Rating rating={ rating } />
        <img src={ imagePath } alt="imagem do filme" />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: propTypes.instanceOf(Object).isRequired,
};

export default MovieCard;
// .objectOf(propTypes.object()).isRequired,