import React from 'react';

class MovieList extends React.Component {
    render() {
        return <p> films={this.props.movies} </p>
    }
}

export default MovieList;