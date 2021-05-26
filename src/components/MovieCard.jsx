import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath, rating  } } = this.props;
    return(
      <section>
        <img src={ imagePath } alt="image of movie" />
      </section>
    );
  }
}

export default MovieCard;

