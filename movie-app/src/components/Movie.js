import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({ id, title, year, summary, poster, genres }) {
  return (
    <Link
      to={{
        pathname: '/movie-detail',
        state: {
          id,
          title,
          year,
          summary,
          poster,
          genres,
        },
      }}
    >
      <div className="movie">
        <img src={poster} alt={title} name={title} />
        <div className="movie_data">
          <h4 className="movie_title">{title}</h4>
          <h3 className="movie_year">{year}</h3>
          <ul className="movie_genres">
            {genres.map((genre, index) => (
              <li key={index} className="genre">
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie_summary">{summary}</p>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
