import axios from "axios";


const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3/movie";

const getMovieDetail = (movieId) => {
  const request = axios.get(`${BASE_URL}/${movieId}?api_key=${API_KEY}&language=en-US`);
  return request.then(response => response.data);
};

const getFeaturedMovie = () => {
  const request = axios.get(`${BASE_URL}/popular?api_key=${API_KEY}&language=en-US$page=1`);
  return request.then(response => response.data["results"][0]);
};

const getFeaturedList = (section, movieId) => {
  if (!movieId) {
    const request = axios.get(`${BASE_URL}/${section}?api_key=${API_KEY}&language=en-US$page=1`);
    return request.then(response => response.data);
  } else {
    const request = axios.get(`${BASE_URL}/${movieId}/${section}?api_key=${API_KEY}&language=en-US$page=1`);
    return request.then(response => response.data);
  }
};

const getCast = (movieId) => {
  const request = axios.get(`${BASE_URL}/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
  return request.then(response => response.data["cast"]);
};

const getPopularMovies = (page) => {
  const request = axios.get(`${BASE_URL}/popular?api_key=${API_KEY}&language=en-US&page=${page}`);
  return request.then(response => response.data.results);
};

const getNowShowing = (page) => {
  const request = axios.get(`${BASE_URL}/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`);
  return request.then(response => response.data.results);
};

const getComingSoon = (page) => {
  const request = axios.get(`${BASE_URL}/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`);
  return request.then(response => response.data.results);
};

const getTopRated = (page) => {
  const request = axios.get(`${BASE_URL}/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`);
  return request.then(response => response.data.results);
};

const actions = {
  API_KEY,
  getMovieDetail,
  getFeaturedMovie,
  getFeaturedList,
  getCast,
  getPopularMovies,
  getNowShowing,
  getComingSoon,
  getTopRated
};

export default actions;