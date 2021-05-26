// implement MovieCard component here
import React from 'react';
import Rating from './Rating';
import PropTypes from 'prop-types';


class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;

    return (
      <div>
        <img src={ imagePath } alt="" />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <Rating rating={ rating }/>
      </div>
    );
  }
}

MovieCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
  imagePath: PropTypes.any
}

export default MovieCard;
