import React from 'react';
import movies from '../data';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie
    return (
      <div>
        <img src={this.props.movie.imagePath}></img>
        <h4>{this.props.movie.title}</h4>
        <h5>{this.props.movie.subtitle}</h5>
        <p>{this.props.movie.storyline}</p>

      </div>
    )
  }
}

export default MovieCard;