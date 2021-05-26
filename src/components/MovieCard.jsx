// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movies;
    return (
      <h1>
        {title} {subtitle}
      </h1>
    );
  }
}

export default MovieCard;
