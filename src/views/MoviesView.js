import { Component } from 'react';
import MoviesList from '../components/MoviesList';
import {
    fetchMoviesFromState,
    fetchMoviesByQuery,
} from '../services/movies-api';
import styles from './MoviesView.module.css';

class MoviesView extends Component {
    state = {
        query: '',
        moviesList: [],
    };

    componentDidMount() {
        if (this.props.location.search) {
            fetchMoviesFromState(this.props.location.search)
                .then(response => {
                    this.setState({ moviesList: response.data.results });
                    // localStorage.setItem(
                    //     'moviesWasFound',
                    //     JSON.stringify(this.state.moviesList),
                    // );
                })
                .catch(error => this.setState({ error: error }))
                .finally(this.setState({ query: '' }));
        }
    }

    formSubmitHandler = e => {
        e.preventDefault();
        this.onQueryChange(this.state.query);

        fetchMoviesByQuery(this.state.query)
            .then(response => {
                this.setState({ moviesList: response.data.results });
                // localStorage.setItem(
                //     'moviesWasFound',
                //     JSON.stringify(this.state.moviesList),
                // );
            })
            .catch(error => this.setState({ error: error }))
            .finally(this.setState({ query: '' }));
    };

    onQueryChange = query => {
        this.props.history.push({
            pathname: this.props.location.pathname,
            search: `?query=${query}`,
        });
    };

    queryHandler = e => {
        this.setState({ query: e.target.value });
    };

    render() {
        return (
            <div className={styles.container}>
                <form
                    className={styles.SearchForm}
                    onSubmit={this.formSubmitHandler}
                >
                    <input
                        className={styles.SearchForm__input}
                        type="text"
                        autoComplete="off"
                        placeholder="input movie's title"
                        autoFocus
                        value={this.state.query}
                        onChange={this.queryHandler}
                    ></input>
                    <button type="submit" className="SearchForm-button">
                        Search
                    </button>
                </form>
                {this.state.moviesList && (
                    <MoviesList moviesList={this.state.moviesList} />
                )}
            </div>
        );
    }
}

export default MoviesView;
