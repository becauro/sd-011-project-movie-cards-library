// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const parametros = this.props;
    return (
      <div>
        <img src={ parametros.movie.imagePath } alt="banner filme" />
        <h4>{parametros.movie.title}</h4>
        <h5>{parametros.movie.subtitle}</h5>
        <p>{parametros.movie.storyline}</p>
        <Rating rating={ parametros.movie.rating } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.string,
};

MovieCard.defaultProps = {
  movie: 'Filme',
};

export default MovieCard;
