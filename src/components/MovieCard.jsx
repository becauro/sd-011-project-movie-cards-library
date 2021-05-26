import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movies;

    return (
      <div>
        <img className="img" src={ imagePath } alt={ title } />
        <div>
          <h2>
            { title }
            { subtitle }
          </h2>
          <p>
            { storyline }
          </p>
          <h3>
            { rating }
          </h3>
        </div>
      </div>
    );
  }
}
MovieCard.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.any,
    rating: PropTypes.any,
    imagePath: PropTypes.any,
  }),
};

export default MovieCard;
