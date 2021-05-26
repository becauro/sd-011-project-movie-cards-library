import React, { Component } from 'react';
import Rating from './Rating'

export class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating} = this.props.movie;  
    return (
        <>
          <img src={ imagePath } alt = { title } />
          <h4>{ title }</h4>
          <h5>{ subtitle }</h5>
          <p>{ storyline }</p>
          <Rating rating={ rating } />
        </>
    );
  }
}

export default MovieCard;
