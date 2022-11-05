import axios from "axios";


const BASE_URL = "/login";

const login = async (credentials) => {
  const response = await axios.post(BASE_URL, credentials);
  return response.data;
};

export default { login };