import React from 'react';
import Rating from './Rating';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {

    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;

    return (
      <div>
        <div>
          <img src={imagePath} alt="Movies" />
          <h4>{title}</h4>
          <h5>{subtitle}</h5>
          <p>{storyline}</p>
        </div>

        <div>
          <Rating rating={rating} />
        </div>
      </div>
    );
  }
}

export default MovieCard;
