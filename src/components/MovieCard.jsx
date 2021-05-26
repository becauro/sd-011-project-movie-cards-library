import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, imagePath, subtitle, storyLine, rating } = movie;

    return (
      <div>
        <img src={ imagePath } alt={ `Imagem do filme ${title}` } />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyLine }</p>
        <p>{ rating }</p>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyLine: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
