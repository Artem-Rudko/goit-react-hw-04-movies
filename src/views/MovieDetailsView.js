import { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Cast from '../components/Cast';
import MovieCard from '../components/MovieCard';
import Reviews from '../components/Reviews';
import routes from '../routes';
import { fetchMovieById } from '../services/movies-api';
import styles from './MovieDetailsView.module.css';

class MovieDetailsPage extends Component {
    state = {
        id: null,
        poster_path: '',
        title: '',
        vote_average: null,
        overview: '',
        genres: [],
        credits: null,
        reviews: null,
    };

    async componentDidMount() {
        const { movieId } = this.props.match.params;
        const response = await fetchMovieById(movieId);
        this.setState({ ...response.data });
    }

    handleGoBack = () => {
        const { location, history } = this.props;
        history.push(location?.state?.from || routes.home);
    };

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

        return (
            <div className={styles.container}>
                <div>
                    <button
                        className={styles.returnBtn}
                        type="button"
                        onClick={this.handleGoBack}
                    >
                        Go back
                    </button>
                    <MovieCard
                        poster_path={poster_path}
                        title={title}
                        vote_average={vote_average}
                        overview={overview}
                        genres={genres}
                    />
                </div>
                <div>
                    <div className={styles.addInfo}>
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
                    </div>

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
            </div>
        );
    }
}

export default MovieDetailsPage;
