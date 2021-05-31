import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
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

MovieCard.propTypes = {
  imagePath: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
};

MovieCard.defaultProps = {
  imagePath: 'Image undefined',
  title: 'Title undefined',
  subtitle: 'Subtitle undefined',
  storyline: 'Storyline undefined',
  rating: null,
};

export default MovieCard;
