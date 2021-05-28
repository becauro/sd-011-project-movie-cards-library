import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <div>
        <img src={ imagePath } />
        <h4>{ title }</h4>
      </div>
    )
  }
}

export default MovieCard;