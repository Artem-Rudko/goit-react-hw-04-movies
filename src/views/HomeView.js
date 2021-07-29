// import axios from 'axios';
import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
import { fetchTrendingMovies } from '../services/movies-api';

// const API_KEY = 'bf0957773382584d05a14ff44449aecb';
// const BASE_URL = 'https://api.themoviedb.org/3';

class HomeView extends Component {
    state = {
        moviesList: [],
    };

    async componentDidMount() {
        const results = await fetchTrendingMovies();
        console.log('response', results);
        // console.log('location', this.props.location);

        this.setState({ moviesList: results });
    }

    render() {
        return (
            <>
                <h1>Tranding today</h1>
                <MoviesList moviesList={this.state.moviesList} />
            </>
        );
    }
}

export default withRouter(HomeView);
