import PropTypes from 'prop-types';
import styles from './MovieCard.module.css';

const MovieCard = ({ poster_path, title, vote_average, overview, genres }) => {
    return (
        <div className={styles.movie__card}>
            <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
                className={styles.movie__poster}
                style={{ width: 260 }}
            ></img>
            <div className={styles.movie__info}>
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
        </div>
    );
};

export default MovieCard;

MovieCard.propTypes = {
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.array,
};
