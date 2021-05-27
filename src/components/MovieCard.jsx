// implement MovieCard component here
import React, { Component } from 'react'

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <div>
        <img src={ imagePath }></img>
      </div>
    );
  }
}

export default MovieCard;
