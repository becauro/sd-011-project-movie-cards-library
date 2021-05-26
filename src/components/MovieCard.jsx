import React, { Component } from 'react'

export class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;

    return (
      <li>
        {[title, subtitle, storyline, imagePath, rating]}
      </li>
    )
  }
}

export default MovieCard
