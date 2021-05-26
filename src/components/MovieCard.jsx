// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const {movie: { title, subtitle, storyline, imagePath } } = this.props;
    return (
      <section className='movie-card'>
        <div className="movie-card-body">
          <h1 className="movie-card-title">{title}</h1>
          <h2 className="movie-card-subtitle">{subtitle}</h2>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <img src={imagePath} alt= {`capa do filme ${title}`} className="movie-card-image"/>
      </section>
    );
  }
}

export default MovieCard;
