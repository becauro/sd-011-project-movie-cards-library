import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <div className="movie-card">
        <img src={ imagePath } alt={ title } className="movie-card-image" />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{ title }</h4>
          <h5 className="movie-card-subtitle">{ subtitle }</h5>
          <p className="movie-card-storyline">{ storyline }</p>
        </div>
        <Rating rating={ rating } />
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
    imagePath: 'image',
    title: 'title',
    subtitle: 'subtitle',
    storyline: 'storyline',
    rating: 1,
  },
};

export default MovieCard;
