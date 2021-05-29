// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;

    // return ( // Funciona
    //   <div>
    //     <p> Teste MovieCard </p>
    //     Title:
    //     { title }
    //     <br />
    //   </div>
    // );

    return (
      <div>
        { title }
        <img src={ imagePath } alt="" />
      </div>
    );
  }
}

export default MovieCard;
