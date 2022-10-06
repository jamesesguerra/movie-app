import axios from "axios";


const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = `https://api.themoviedb.org/3/movie`;

// https://api.themoviedb.org/3/movie/718930?api_key={{ _.api }}&language=en-US
// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1

const getMovieDetail = (movieId) => {
    const request = axios.get(`${BASE_URL}/${movieId}?api_key=${API_KEY}&language=en-US`);
    return request.then(response => response.data);
}

const getFeaturedList = (section) => {
    const request = axios.get(`${BASE_URL}/${section}?api_key=${API_KEY}&language=en-US$page=1`);
    return request.then(response => response.data);
}

const actions = {
    API_KEY,
    getMovieDetail,
    getFeaturedList
}

export default actions