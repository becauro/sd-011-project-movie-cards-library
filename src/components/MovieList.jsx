// implement MovieList component here
import React, { Component } from 'react';
import MovieCard from './MovieCard'
   const movies = ({MovieCard});

class MovieList extends Component {
    render(){
        return(
    <h1>{this.props.movies}</h1>
    )};
}

export default MovieList;