import axios from 'axios';
import { Component } from 'react';
import { Link } from 'react-router-dom';

const API_KEY = 'bf0957773382584d05a14ff44449aecb';
const BASE_URL = 'https://api.themoviedb.org/3';

class HomeView extends Component {
    state = {
        bestMovies: [],
    };

    async componentDidMount() {
        const response = await axios.get(
            `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
        );
        console.log(response.data.results);

        this.setState({ bestMovies: response.data.results });
    }

    render() {
        return (
            <>
                <h1>Tranding today</h1>
                <ul>
                    {this.state.bestMovies.map(movie => (
                        <li key={movie.id}>
                            <Link to={`/movies/${movie.id}`}>
                                {movie.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}

export default HomeView;
