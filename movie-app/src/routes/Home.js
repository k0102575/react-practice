import React, { Component } from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      movies: [],
    };
  }

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      'https://yts-proxy.now.sh/list_movies.json?sort_by=rating',
    );
    this.setState({ isLoading: false, movies });
    // return movies;
  };

  renderMovies = () => {
    const { movies } = this.state;
    return movies.map((movie) => (
      <Movie
        key={movie.id}
        id={movie.id}
        year={movie.year}
        title={movie.title}
        summary={movie.summary}
        poster={movie.medium_cover_image}
        genres={movie.genres}
      />
    ));
  };

  async componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_test">Loading...</span>
          </div>
        ) : (
          <div className="movies">{this.renderMovies()}</div>
        )}
      </section>
    );
  }
}
