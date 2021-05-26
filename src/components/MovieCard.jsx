import React, { Component } from 'react';

export default class MovieCard extends Component {
  render() {
    const { movies } = this.props;
    const { title, subtitle, storyline, imagePath } = movies;
    return (
      <div>
        <img src={ imagePath } alt={ title } />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
      </div>
    );
  }
}
