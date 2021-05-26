import React from 'react';

class MovieCard extends React.Component {
  render() {
    
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;

    return(
      <div>
        Filme: {title}, {subtitle}
        Sinopse: {storyline}
        Imagem: {imagePath}
        Classificação: {rating}
      </div>
    );
  }
}

export default MovieCard;
