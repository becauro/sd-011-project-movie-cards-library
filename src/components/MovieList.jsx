// implement MovieList component here

import React from 'react';
import MovieCard from 'MovieCard';

class MovieList extends React.Component {
  render() {
    const [{ title, subtitle, storyline, rating, imagePath }] = this.props.moviesProp;
    return (
      <section>
        {this.props.movies.map(movie => <MovieCard key={movie.title} moviesProp={movie} />)}
      </section>
    );
  }
}

export default MovieList;
