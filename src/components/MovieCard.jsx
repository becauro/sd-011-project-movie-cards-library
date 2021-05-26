import React from 'react';
import MovieList from './MovieList'

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props
    return (
      <div>
        <img src={this.props.imagePath}></img>
        <h4> {this.props.title}</h4>
      </div>
    )
  }
}

export default MovieCard;