import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie
    return (
      <div className="movie">
        <img src={ imagePath } alt={ 'Film picture' }/>
        <h4> {title} </h4>
        <h5> {subtitle} </h5>
        <p> { storyline } </p>
      </div>
    );
  }
}

export default MovieCard;
