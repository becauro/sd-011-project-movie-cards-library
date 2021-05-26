import React from 'react'
import MovieCard from './MovieCard'
import PropTypes from 'prop-types';


class MovieList extends React.Component {
    render() {
        const { movies } = this.props;
        return (
            <div>
              {movies.map((item, index) => (
                <MovieCard movie={item} key={index} />
              ))}
            </div>
          );
        }
      }
      

export default MovieList;
MovieList.propTypes = {
    games: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        
      })
    ),
  };