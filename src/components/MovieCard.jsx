import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { imagePath, title, subtitle } = movie;
    return (
      <div>
        <img src={ imagePath } alt="title of the movie" />
        <div>
          <h4>{title}</h4>
          <h5>{subtitle}</h5>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
