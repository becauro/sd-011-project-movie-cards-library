import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <div>
        <img src={ imagePath } alt="Movie Cover" />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <div>
          <Rating rating={ rating } />
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  }),
};

// Consulta em para verificar defaultProps https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html

MovieCard.defaultProps = {
  movie: {
    title: 'title',
    subtitle: 'subtitle',
    storyline: 'storyline',
    rating: 1,
    imagePath: 'image',
  },
};

export default MovieCard;
