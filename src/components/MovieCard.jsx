import React from 'react';

class MovieCard extends React.Component {
  render() {
    return (
      <img src={this.props.movie.imagePath} alt='images/movie_1' />
      )
    }
  }   
  
  export default MovieCard;