import React from 'react';
import Rating from './Rating';
import PropTypes from 'prop-types';

class MovieCards extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.prop.movie;

    return (
      <div className="movie-card-header">
        <img src={ imagePath } alt={ title } />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        < Rating rating={rating}/>
      </div>);
  }
}

MovieCards.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }),

}
export default MovieCards;
