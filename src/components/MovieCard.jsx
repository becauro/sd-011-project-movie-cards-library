import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { imagePath, title, subtitle, storyline, rating } } = this.props;
    return (
      <div>
        <img src={ imagePath } alt="film" />
        <h4>{ title }</h4>
        <h3>{ subtitle }</h3>
        <p>{ storyline }</p>
        <div>
          {rating}
        </div>
      </div>);
  }
}

MovieCard.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieCard;
