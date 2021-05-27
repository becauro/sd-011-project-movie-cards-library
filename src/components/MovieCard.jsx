// implement MovieCard component here
import React, { Component } from 'react'

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <div>
        <img src={ imagePath }></img>
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
      </div>
    );
  }
}

export default MovieCard;
