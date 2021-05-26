// implement MovieCard component here

import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <div>
        <img src = { imagePath } alt = 'movie' />
        <h4> {title} </h4>
      </div>
    );
  }
}

export default MovieCard;
