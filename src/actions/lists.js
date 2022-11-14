import axios from "axios";


const BASE_URL = "https://winter-sky-4828.fly.dev/lists";

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const getAll = (userId) => {
  const request = axios.get(`${BASE_URL}?userId=${userId}`);
  return request.then(response => response.data);
};

const getOne = (listId) => {
  const request = axios.get(`${BASE_URL}/${listId}`);
  return request.then(response => response.data);
};

const create = async(newList) => {
  const config = {
    headers: { Authorization: token }
  };

  const response = await axios.post(BASE_URL, newList, config);
  return response.data;
};

const update = (id, updatedList) => {
  const request = axios.put(`${BASE_URL}/${id}`, updatedList);
  return request.then(response => response.data);
};

const remove = (id) => {
  const request = axios.delete(`${BASE_URL}/${id}`);
  return request.then(response => response);
};

export default {
  setToken,
  getAll,
  getOne,
  create,
  update,
  remove
};