import React, { Component } from 'react';

export default class MovieCard extends Component {
  render() {
    
    const { title, img, subtitle, storyline } = this.props;

    return (
      <div>
        <img src={img} alt="" />
        {title}
        {subtitle}
        {storyline}  
      </div>
    );
  }
}
