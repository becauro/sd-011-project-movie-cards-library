import React, { Component } from 'react'

export class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;

    return (
      <li>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <img src={imagePath} alt={`Cover image for the movie ${title}`} />
        <p>{storyline}</p>
      </li>
    )
  }
}

export default MovieCard
