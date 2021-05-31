import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <div className="movie-card movie-card-body">
        <img className="movie-card-image" src={ imagePath } alt="" />
        <h4 className="movie-card-title">{ title }</h4>
        <h5 className="movie-card-subtitle">{ subtitle}</h5>
        <p className="movie-card-storyline">{ storyline }</p>
        <div className="movie-card-rating">
          <Rating rating={ rating } />
        </div>
      </div>
    );
  }
}

// Para desenvolver esse trecho de código  consultei a PR de Guilherme Oliveira
// Link: https://github.com/tryber/sd-011-project-movie-cards-library/pull/163

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }),
};

MovieCard.defaultProps = {
  movie: PropTypes.shape({
    imagePath: 'Image undefined',
    title: 'Title undefined',
    subtitle: 'Subtitle undefined',
    storyline: 'Storyline undefined',
    rating: null,
  }),
};

export default MovieCard;
