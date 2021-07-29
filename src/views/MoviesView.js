import { Component } from 'react';
// import { Route } from 'react-router-dom';
import axios from 'axios';
import MoviesList from '../components/MoviesList';

class MoviesView extends Component {
    state = {
        query: '',
        moviesList: [],
    };

    componentDidMount() {
        const API_KEY = 'bf0957773382584d05a14ff44449aecb';
        const BASE_URL = 'https://api.themoviedb.org/3';

        if (this.props.location.search) {
            axios
                .get(
                    `${BASE_URL}/search/movie${this.props.location.search}&api_key=${API_KEY}`,
                )
                .then(response => {
                    this.setState({ moviesList: response.data.results });
                    console.log('state after get', this.state);
                    localStorage.setItem(
                        'moviesWasFound',
                        JSON.stringify(this.state.moviesList),
                    );
                })
                .catch(error => this.setState({ error: error }))
                .finally(this.setState({ query: '' }));
        }
    }

    formSubmitHandler = e => {
        e.preventDefault();
        console.log('submitHandler', this.state.query);

        const API_KEY = 'bf0957773382584d05a14ff44449aecb';
        const BASE_URL = 'https://api.themoviedb.org/3';
        this.onQueryChange(this.state.query);

        axios
            .get(
                `${BASE_URL}/search/movie?query=${this.state.query}&api_key=${API_KEY}`,
            )
            .then(response => {
                this.setState({ moviesList: response.data.results });
                console.log('state after get', this.state);
                localStorage.setItem(
                    'moviesWasFound',
                    JSON.stringify(this.state.moviesList),
                );
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
        console.log('input', this.state);
    };

    render() {
        return (
            <div>
                <form className="SearchForm" onSubmit={this.formSubmitHandler}>
                    <input
                        className="SearchForm-input"
                        type="text"
                        autoComplete="off"
                        placeholder="input movie's title"
                        autoFocus
                        value={this.state.query}
                        onChange={this.queryHandler}
                    ></input>
                    {/* <Link to={`${this.props.match.url}?query=${this.state.query}`}> */}
                    <button type="submit" className="SearchForm-button">
                        Search
                    </button>
                    {/* </Link> */}
                </form>
                {/*                <Route
                    path={`${this.props.match.path}?query=`}
                    render={props => (<MoviesList {...props} moviesList={this.state.moviesList}/>)}
                    /> */}
                {this.state.moviesList && (
                    <MoviesList moviesList={this.state.moviesList} />
                )}
            </div>
        );
    }
}

export default MoviesView;
