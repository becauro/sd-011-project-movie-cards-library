import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movies: { title, subtitle, imagePath, storyline, rating }} = this.props;
    return (
     <div>
       <img src = {imagePath} alt={title}/>
       <h4>{title}</h4>
       <h5>{subtitle}</h5>
       <p>{storyline}</p>
     </div>
    )
  }
}



export default MovieCard;
