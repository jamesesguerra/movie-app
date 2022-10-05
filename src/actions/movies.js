import axios from "axios";


const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = `https://api.themoviedb.org/3/movie`;

// https://api.themoviedb.org/3/movie/718930?api_key={{ _.api }}&language=en-US

const getMovieDetail = (movieId) => {
    const request = axios.get(`${BASE_URL}/${movieId}?api_key=${API_KEY}&language=en-US`);
    return request.then(response => response.data);
}

const actions = {
    API_KEY,
    getMovieDetail
}

export default actions