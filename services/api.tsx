import axios from 'axios';

const api = axios.create({
  baseURL: 'https://moveit.gigalixirapp.com/api/',
});

export default api;
