// implement MovieCard component here
import React from 'react';
// import MovieCard from './MovieCard';

class MovieCard extends React.Component {
  render() {
    const {title, subtitle, storyline, rating, imagePath} = this.props.movie;
    return (
      <div>
        <div>
          <h1>{title}</h1>
            <li>{subtitle}</li>
            <li>{storyline}</li>
            <li>{rating}</li>
          <img src={imagePath} />
        </div>
        
      </div>
    );
  }
}

export default MovieCard;
        
