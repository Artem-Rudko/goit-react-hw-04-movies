import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
import { fetchTrendingMovies } from '../services/movies-api';
import styles from './HomeView.module.css';

class HomeView extends Component {
    state = {
        moviesList: [],
    };

    async componentDidMount() {
        const results = await fetchTrendingMovies();
        this.setState({ moviesList: results });
    }

    render() {
        return (
            <div className={styles.container}>
                <h1 className={styles.container__title}>Tranding today</h1>
                {this.state.moviesList && (
                    <MoviesList moviesList={this.state.moviesList} />
                )}
            </div>
        );
    }
}

export default withRouter(HomeView);
