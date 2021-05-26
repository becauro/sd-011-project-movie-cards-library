import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    console.log(this.props);
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;
    return (

      <div className="movie-card">
        <img className="movie-card-image" src={ imagePath } alt="filmes" />
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

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};
