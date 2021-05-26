import React, { Component } from 'react'
import PropTypes from 'prop-types'
import data from '../data'

class MovieCard extends Component {
  
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    return (
      <div>
        <p>{ title }</p>
        <p>{ subtitle }</p>
        <p>{ storyline }</p>
        <p>{ rating }</p>
        <img src={imagePath}/>
      </div>
    )
  }
}

export default MovieCard;
