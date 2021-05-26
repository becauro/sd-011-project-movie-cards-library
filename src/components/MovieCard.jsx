// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const {title, subtitle, storyline, imagePath, rating} = this.props.movie;
    return (
      <div id = {this.props.key}>
        <img src={imagePath} alt={title}/>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
      </div>
    )
  }
}

export default MovieCard;