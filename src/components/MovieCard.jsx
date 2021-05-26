import React, { Component } from 'react'

class MovieCard extends Component {
  render() {
    const { imagePath, title, subtitle, storyline } = this.props.movie;
    return (
      <div>
        <img src={imagePath}/>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
      </div>
    )
  }
}

export default MovieCard;