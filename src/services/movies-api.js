import axios from 'axios';

const API_KEY = 'bf0957773382584d05a14ff44449aecb';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchTrendingMovies = () => {
    return axios
        .get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
        .then(response => response.data.results);
};

const fetchMoviesByQuery = query => {
    return axios.get(
        `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`,
    );
};

const fetchMoviesFromState = search => {
    return axios.get(`${BASE_URL}/search/movie${search}&api_key=${API_KEY}`);
};

const fetchMovieById = movieId => {
    return axios.get(
        `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=reviews,credits`,
    );
};

export {
    fetchTrendingMovies,
    fetchMoviesByQuery,
    fetchMoviesFromState,
    fetchMovieById,
};
