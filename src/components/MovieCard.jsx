import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    return (
      <div className="movie-card movie-card-body">
        <img src={ this.props.movie.imagePath } alt="Image" className="movie-card-image" />
        <h4 className="movie-card-title">{ this.props.movie.title }</h4>
        <h5 className="movie-card-subtitle">{ this.props.movie.subtitle }</h5>
        <p className="movie-card-storyline">{ this.props.movie.storyline }</p>
      </div>
    );
  }
}

export default MovieCard;
