import { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';

class MovieDetailsPage extends Component {
    state = {
        id: '',
        poster_path: '',
        title: '',
        vote_average: '',
        overview: [],
        genres: [],
        credits: [],
        reviews: [],
    };

    async componentDidMount() {
        const { movieId } = this.props.match.params;
        const API_KEY = 'bf0957773382584d05a14ff44449aecb';
        const BASE_URL = 'https://api.themoviedb.org/3';
        // const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

        const response = await axios.get(
            `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=reviews,credits`,
        );
        // console.log(response);

        this.setState({ ...response.data });
    }

    render() {
        const {
            poster_path,
            title,
            vote_average,
            overview,
            genres,
            reviews,
            credits,
        } = this.state;

        const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
        console.log('state', this.state);
        const { location, history } = this.props;

        return (
            <>
                <div>
                    <button
                        type="button"
                        onClick={() => {
                            history.push(location.state.from);
                        }}
                    >
                        {' '}
                        Go back
                    </button>
                    <img
                        src={`${BASE_IMG_URL}${poster_path}`}
                        alt="#"
                        className="poster"
                        style={{ width: 260 }}
                    ></img>
                    <h2>{title}</h2>
                    <p>User score: {vote_average}</p>

                    <h3>Overview</h3>
                    <p>{overview}</p>
                    <h3>Genres</h3>
                    <p>
                        {genres.map(genre => (
                            <span key={genre.name}>{genre.name} </span>
                        ))}
                    </p>
                </div>
                <div>
                    <p>Additional information</p>
                    <ul>
                        <li>
                            <Link to={`${this.props.match.url}/cast`}>
                                Cast
                            </Link>
                        </li>
                        <li>
                            <Link to={`${this.props.match.url}/reviews`}>
                                Reviews
                            </Link>
                        </li>
                    </ul>

                    <Route
                        exact
                        path={`${this.props.match.path}/cast`}
                        render={props => (
                            <Cast {...props} cast={credits.cast} />
                        )}
                    />
                    <Route
                        exact
                        path={`${this.props.match.path}/reviews`}
                        render={props => (
                            <Reviews {...props} reviews={reviews.results} />
                        )}
                    />
                </div>
            </>
        );
    }
}

export default MovieDetailsPage;
