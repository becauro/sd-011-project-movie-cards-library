// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    return (
      <div>
       <div className="movieCard">
        <img src={this.props.img} />
       </div>
      </div>
    )
  }
}

export default MovieCard;