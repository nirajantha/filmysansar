import axios from "axios";

const API_URL = "http://localhost:3000/movies";

const getMovies = () => {
  return axios.get(API_URL);
};

const getMovieById = (id: number) => {
  return axios.get(`${API_URL}/${id}`);
};

export { getMovies, getMovieById };
