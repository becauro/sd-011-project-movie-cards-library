// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        <section>{movies.map((movieObj) => (<MovieCard key={ movieObj.title } movie={ movieObj } />))}</section>
      </div>
    );
  }
}

export default MovieList;
