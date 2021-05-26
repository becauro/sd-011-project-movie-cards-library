// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie: { imagePath } } = this.props;
    // const { imagePath } = this.props.movies;
    return (
      <div>
        <img src={imagePath} />
      </div>
      )
    }
  }
  
  export default MovieCard;
