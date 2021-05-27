import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
     <div>
       { movies.map((item) => {
        return <MovieCard movies = { item } key = {item.title}/>;
       })}
     </div>
    );
  }
}

export default MovieList;
