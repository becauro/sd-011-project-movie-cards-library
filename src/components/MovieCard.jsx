// implement MovieCard component here
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    return (
      <div className="movie-card ">
        <section className="movie-card-body">
          <h4 className="movie-card-title">{ movie.title }</h4>
          <img className="movie-card-image" src={ movie.imagePath } alt="ImageMovie" />
          <h5 className="movie-card-subtitle">{ movie.subtitle }</h5>
          <p className="movie-card-storyline">{ movie.storyline }</p>
          <Rating rating={ rating } />
        </section>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.string,
    imagePath: PropTypes.string,
  }),
};

MovieCard.defaultProps = {
  movie: {
    title: 'Teste1',
    subtitle: 'Teste2',
    storyline: 'Teste3',
    rating: 1,
    imagePath: 'Teste4',
  },
};
