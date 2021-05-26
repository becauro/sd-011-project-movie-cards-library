// implement MovieCard component here
import React, { Component } from 'react';
import Rating from '../components/Rating';

export default class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    return (
    <div>
      <h4>{title}</h4>
      <h5>{subtitle}</h5>
      <img src = {imagePath} alt = {title}></img>
      <p>{storyline}</p>
      <Rating rating = {rating} />
    </div>
    );
  }
}