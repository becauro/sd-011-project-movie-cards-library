import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      React.createElement('div', { className: 'movie-card' }, // cria a div que renderiza o componente
        React.createElement('img', { className: 'movie-card-image', // Renderiza a imagem do filme dentro de uma tag `img`
          src: movie.imagePath, // objeto recebido como prop
          alt: 'movie poster',
        }),
        React.createElement('div', { className: 'movie-card-body' },
          React.createElement('h4',
            {
              className: 'movie-card-title',
            }, movie.title), // título do filme dentro do h4, objeto recebido como prop
          React.createElement('h5',
            {
              className: 'movie-card-subtitle',
            }, movie.subtitle), // subtítulo do filme dentro do h5, objeto recebido como prop
          React.createElement('p',
            {
              className: 'movie-card-storyline',
            }, movie.storyline), // sinopse do filme dentro de uma tag `p`, objeto recebido como prop
          React.createElement(Rating,
            {
              rating: movie.rating,
            })))
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
