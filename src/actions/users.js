import axios from "axios";


const BASE_URL = "https://winter-sky-4828.fly.dev/users";

const getAll = () => {
  const request = axios.get(BASE_URL);
  return request.then(response => response.data);  
};

const create = (newUser) => {
  const request = axios.post(BASE_URL, newUser);
  return request.then(response => response.data);
};

export default { getAll, create };