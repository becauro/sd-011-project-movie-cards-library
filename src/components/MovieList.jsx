import React from 'react';
import movies from '../data';

class MovieList extends React.Component{
  render(){
    const testArray = this.props.movies;
    return (
      <div>
        {testArray.map(movie => <MovieCards data={movie}/>)}
      </div>
    );
  }
};

export default MovieList;
