import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      movie.map(({ title, subtitle, storyline, rating, imagePath }, index) => (
        <div key={ index }>
          <img src={ imagePath } alt="film" />
          <h2>{ title }</h2>
          <h3>{ subtitle }</h3>
          <p>{ storyline }</p>
          <div>
            {rating}
          </div>
        </div>))
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieCard;
