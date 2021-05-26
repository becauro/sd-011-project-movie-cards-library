import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, imagePath } = movie;
    return (
      <section>
        {
          Object.entries(movie)
            .map(([key, value]) => <p key={ key }>{ `${key}: ${value}` }</p>)
        }
        <img src={ imagePath } alt={ `${title} - ${subtitle} movie cover` } />
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
