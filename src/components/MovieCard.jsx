import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <div className="movie-card">
        <div className="movie-card-body">
          <img className="movie-card-image" src={ imagePath } alt="Imagem do filme" />
          <div className="movie-card-header">
            <div className="movie-card-titles">
              <h4 className="movie-card-title">{ title }</h4>
              <h5 className="movie-card-subtitle">{ subtitle }</h5>
            </div>
            <Rating rate={ rating } />
          </div>
          <p className="movie-card-storyline">{ storyline }</p>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.exact({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
