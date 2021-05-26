import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    // const { movies } = this.props;
    // const { title, subtitle, storyline, rating, imagePath } = movies;

    const { movies: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <div>
        <img src={ imagePath } alt={ title } />
        <div>
          <h4>
            { title }
          </h4>
          <h5>
            { subtitle }
          </h5>
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
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
