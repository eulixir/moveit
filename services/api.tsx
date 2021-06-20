import axios from 'axios';

const api = axios.create({
  baseURL: 'https://moveit.gigalixirapp.com/',
});

export default api;
