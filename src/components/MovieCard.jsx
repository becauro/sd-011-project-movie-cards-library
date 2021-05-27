import React from 'react';
import propTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <div className="movies">
        <img className="images" src={ movie.imagePath } alt="movie's art" />
        <h4>{ movie.title }</h4>
        <h5>{ movie.subtitle }</h5>
        <p className='story'>{ movie.storyline }</p>
        <Rating rating={ movie.rating } />
      </div>
    );
  }
}

// Shape: https://dev.to/cesareferrari/how-to-specify-the-shape-of-an-object-with-proptypes-3c56
MovieCard.propTypes = {
  movie: propTypes.shape({
    title: propTypes.string,
    subtitle: propTypes.string,
    storyline: propTypes.string,
    rating: propTypes.number,
    imagePath: propTypes.string,
  }).isRequired,
};

export default MovieCard;
