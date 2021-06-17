import React, { Component } from 'react';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const title = 'Movie Title 1';
    const subtitle = 'Movie Subtitle 1';
    const storyline = 'Movie Storyline 1';
    const imagePath = 'images/movie_1';

    return (
      <div>
        <img src={ imagePath } alt="" />
        <h4>
          { title }
        </h4>
        <h5>
          { subtitle }
        </h5>
        <p>
          { storyline }
        </p>
        <Rating />
      </div>
    );
  }
}

export default MovieCard;
