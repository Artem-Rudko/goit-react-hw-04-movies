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

export { fetchTrendingMovies, fetchMoviesByQuery };
