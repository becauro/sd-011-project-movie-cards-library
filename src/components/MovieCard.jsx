import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <div className='movie-card-body'>
        <img className='movie-card-header' src={imagePath} /> 
        <div className='movie-card-title'>{title}</div>
        {subtitle} {storyline} {rating}
      </div>
    );
  }
}

export default MovieCard;