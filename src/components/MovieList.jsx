// implement MovieList component here

import React from 'react';

class MovieList extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.moviesProp;
    return (
      <section>
        {this.props.movies.forEach(movie => <MovieCart key={movie.title} moviesProp={movie} /> )}
      </section>
    );
  }
}

export default MovieList;
