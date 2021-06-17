import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
    render() {
        return (
            <div>
                <MovieCard key = 'Movie Title 1' />
                <MovieCard key = 'Movie Title 2' />
                <MovieCard key = 'Movie Title 3' />
            </div>
        );
    }
}

export default MovieList;