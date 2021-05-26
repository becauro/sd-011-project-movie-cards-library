import React from 'react';
import MovieCard from './MovieCard'


class MovieList extends React.Component {
    render() {
        const { movies } = this.props;
        return (
            <div>
                {movies.map((item) => (
                    <MovieCard movie={item} key={item.title} />
                ))}
            </div>
        );
    }
}

export default MovieList;