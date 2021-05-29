import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;
    return (
      <section className="movie-card-body">
        <div className="movie-card">
          <img src={ imagePath } alt='Poster Movie' className="movie-card-image"></img>
          <h4 className="movie-card-title">{ title }</h4>
          <h5 className="movie-card-subtitle">{ subtitle }</h5>
          <p className="movie-card-storyline">{ storyline }</p>
          <div class="movie-card-rating">
            <Rating rating={ rating } />
          </div>
        </div>
      </section>
    );
  }
}

export default MovieCard;
