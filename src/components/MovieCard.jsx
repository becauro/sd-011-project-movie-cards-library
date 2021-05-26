import React from 'react';

class MovieCard extends React.Component {
  render() {
    // , subtitle, storyline, rating, imagePath
    const { title } = this.props.movie;
    return (
      <div>{title}</div>
    );
  }
}

export default MovieCard;
