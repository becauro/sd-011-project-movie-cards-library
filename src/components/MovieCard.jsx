// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    /* prop ("movie") que recebe dados de um objeto passado pelo componente pai.
    Isso é pra ser usado para retornar elementos com esses dados para quem o chamar; inclusive o pŕopio pai */
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;

    /* Rating é renderizado e retorna elementos com dados recebidos pela sua daqui */
    return (
      <div>
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <img src={ imagePath } alt="Não rolou" />
        <Rating rating={ rating } />
      </div>
    );
  }
}
// [Outra forma (não verbosa) de fazer]
// MovieCard.defaultProps = {
//   movie: {},
// };

// Que tava com "this.props.movie" // Só tinha 1 erro no ESlint

MovieCard.defaultProps = {
  movie: { title: 'Stranger',
    subtitle: 'Stranger',
    storyline: 'Stranger',
    imagePath: 'Stranger',
    rating: 1 },
};

MovieCard.propTypes = {
  movie: PropTypes.shape({ title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number }),
};

export default MovieCard;
