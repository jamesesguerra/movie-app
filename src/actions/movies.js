import axios from "axios";


const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = `https://api.themoviedb.org/3/movie`;

// https://api.themoviedb.org/3/movie/718930?api_key={{ _.api }}&language=en-US
// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1

//https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=<<api_key>>&language=en-US&page=1

// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US

const getMovieDetail = (movieId) => {
    const request = axios.get(`${BASE_URL}/${movieId}?api_key=${API_KEY}&language=en-US`);
    return request.then(response => response.data);
}

const getFeaturedMovie = () => {
    const request = axios.get(`${BASE_URL}/popular?api_key=${API_KEY}&language=en-US$page=1`);
    return request.then(response => response.data['results'][0]);
}

const getFeaturedList = (section, movieId) => {
    if (!movieId) {
        const request = axios.get(`${BASE_URL}/${section}?api_key=${API_KEY}&language=en-US$page=1`);
        return request.then(response => response.data);
    } else {
        const request = axios.get(`${BASE_URL}/${movieId}/${section}?api_key=${API_KEY}&language=en-US$page=1`);
        return request.then(response => response.data);
    }
}

const getCast = (movieId) => {
    const request = axios.get(`${BASE_URL}/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
    return request.then(response => response.data['cast']);
}

const getPoster = (movieId) => {
    const request = axios.get(`${BASE_URL}/${movieId}?api_key=${API_KEY}&language=en-US`);
    return request.then(response => response.data['poster_path']);
}

const actions = {
    API_KEY,
    getMovieDetail,
    getFeaturedMovie,
    getFeaturedList,
    getCast,
    getPoster
}

export default actions