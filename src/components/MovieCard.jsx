import React, { component } from 'react';

class MovieCard extends component {
  render() {
    const movie = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <div>
        <img src={ imagePath } alt={ title } />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <rating>{ rating }</rating>
      </div>
    );
  }
}

export default MovieCard;