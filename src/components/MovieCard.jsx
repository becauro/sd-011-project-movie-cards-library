/* eslint-disable react/prop-types */
import React from 'react';

class MovieCard extends React.Component {
  render() {
    // eslint-disable-next-line react/destructuring-assignment
    // eslint-disable-next-line react/prop-types
    // eslint-disable-next-line react/destructuring-assignment
    // eslint-disable-next-line react/prop-types
    // eslint-disable-next-line react/destructuring-assignment
    const { title, subtitle, storyline, rating, imagePath } = this.props.filme;
    return (
      <div>
        <img src={ imagePath } alt={ title } />
        <h2>{ title }</h2>
        <p>{ subtitle }</p>
        <p>{ storyline }</p>
        <span>{ rating }</span>
      </div>
    );
  }
}

export default MovieCard;
