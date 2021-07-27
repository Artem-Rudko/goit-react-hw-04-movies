import { Component } from 'react';
import axios from 'axios';

class MoviesView extends Component {
    state = {
        query: '',
        movieList: [],
    };

    formSubmitHandler = e => {
        e.preventDefault();
        // this.props.onSubmit(this.state);
        console.log('submit', this.state.query);

        // const { movieId } = this.props.match.params;
        const API_KEY = 'bf0957773382584d05a14ff44449aecb';
        const BASE_URL = 'https://api.themoviedb.org/3';
        // const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

        axios
            .get(
                `${BASE_URL}/search/movie?query=${this.state.query}&api_key=${API_KEY}`,
            )
            .then(response => {
                this.setState({ movieList: response.data.results });
            })
            .catch(error => this.setState({ error: error }))
            .finally(this.setState({ query: '' }));
        // this.setState({ query: response })
        console.log(this.state.movieList);
    };

    queryHandler = e => {
        this.setState({ query: e.target.value });
        console.log('input', this.state.query);
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
                    <button type="submit" className="SearchForm-button">
                        Search
                    </button>
                </form>
            </div>
        );
    }
}

export default MoviesView;
