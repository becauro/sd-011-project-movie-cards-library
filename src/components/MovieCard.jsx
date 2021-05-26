import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <div className='movie-card-body'>
        <img className='movie-card-header' alt='' src={ imagePath } />
        <div className='movie-card-title'>
          {title}
        </div>
        {subtitle}
        {storyline}
        {rating}
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
  imagePath: PropTypes.string,
};
