import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title,  subtitle,  storyline, rating, imagePath } = this.props.movie;
    return (
      <div>
          <div>
          <h4>{title}</h4>
          <h5>{subtitle}</h5>
          <p>{storyline}</p>
      </div>
      <img src ={imagePath} />
      <Rating />
      </div>
    );
    }
}

export default MovieCard;




