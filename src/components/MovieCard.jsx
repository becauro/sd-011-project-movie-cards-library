// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Data from '../data';

class MovieCard extends React.Component {
  render() {
    const { movies: { imagePath, title, subtitle, storyline, rating } } = this.props;

    return (
      <div>
        <img src={ imagePath } alt={ Data.title } />
        <p>{ title }</p>
        <p>{ subtitle }</p>
        <p>{ storyline }</p>
        <p>{ rating }</p>
      </div>);
  }
}

MovieCard.propTypes = {
  movies: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default MovieCard;
