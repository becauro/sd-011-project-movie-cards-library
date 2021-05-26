// implement MoviList component here
import React from 'react';

class MovieList extends React.Component {
  render() {
    const { movies } = this.context;
    return (
      <div>
        {movies}
      </div>);
  }
}
export default MovieList;
