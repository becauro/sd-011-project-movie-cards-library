// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

// 7 - Renderize a imagem do filme dentro de uma tag img
// 8 - Renderize o título do filme dentro de uma tag h4
// 9 - Renderize o subtítulo do filme dentro de uma tag h5
// 10 - Renderize a sinopse do filme dentro de uma tag p
// 13 - Renderize o componente <Rating /> dentro de <MovieCard />

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <div>
        <img src={ imagePath } alt="" />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating rating={ rating } />
      </div>
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
