// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    // const { title, subtitle, storyline, imagePath, rating } = this.props.movie; // Funciona
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;

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

// MovieCard.defaultProps = {
//   title: 'Stranger',
//   subtitle: 'Stranger',
//   storyline: 'Stranger',
//   rating: 'Stranger',
// };

// MovieCard.propTypes = {
//   title: PropTypes.string,
//   subtitle: PropTypes.string,
//   storyline: PropTypes.string,
//   rating: PropTypes.number,
// };

/// Outra forma (Essa que tava):

// MovieCard.defaultProps = {
//   movie: { title: 'Stranger',
//     subtitle: 'Stranger',
//     storyline: 'Stranger',
//     rating: 'Stranger' },
// };

// MovieCard.propTypes = {
//   movie: { title: PropTypes.string,
//     subtitle: PropTypes.string,
//     storyline: PropTypes.string,
//     rating: PropTypes.number },
// };

MovieCard.defaultProps = {
  movie: { title: 'Stranger',
    subtitle: 'Stranger',
    storyline: 'Stranger',
    rating: 'Stranger' },
};

MovieCard.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.shape({ title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number })),
};

export default MovieCard;
