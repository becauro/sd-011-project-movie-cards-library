import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <section>
        <img src={ imagePath } alt="" />
        <h4>{ title }</h4>
      </section>
    );
  }
}

export default MovieCard;
