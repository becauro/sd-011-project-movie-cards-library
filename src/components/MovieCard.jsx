import React from 'react';

class MovieCard extends React.Component {
  render() {
    return (
      <div>
      <img src={this.props.movie.imagePath} alt='images/movie_1' />
      <h4>{this.props.movie.title}</h4>
      <h5>{this.props.movie.subtitle}</h5>

      </div>
      )
    }
  }   
  
  export default MovieCard;